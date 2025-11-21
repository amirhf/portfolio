import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || CONTACT_TO_EMAIL

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL env vars')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const formData = await request.formData()

  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const company = String(formData.get('company') || '').trim()
  const deadline = String(formData.get('deadline') || '').trim()
  const budget = String(formData.get('budget') || '').trim()
  const summary = String(formData.get('summary') || '').trim()

  if (!name || !email || !summary) {
    return NextResponse.json({ error: 'Name, work email, and project summary are required.' }, { status: 400 })
  }

  try {
    const subject = `New project inquiry from ${name}`

    const lines = [
      `Name: ${name}`,
      `Work email: ${email}`,
      company && `Company: ${company}`,
      deadline && `Deadline: ${deadline}`,
      budget && `Budget range: ${budget}`,
      '',
      'Project summary:',
      summary,
    ].filter(Boolean)

    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL!,
      to: [CONTACT_TO_EMAIL!],
      reply_to: email,
      subject,
      text: lines.join('\n'),
    })

    if (error) {
      console.error('Error sending contact email via Resend', error)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    const redirectUrl = new URL('/contact?sent=1', request.url)
    return NextResponse.redirect(redirectUrl, { status: 303 })
  } catch (error) {
    console.error('Error sending contact email', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
