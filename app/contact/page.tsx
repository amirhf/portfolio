import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Contact | AandZ.tech',
  description:
    'Start a project with AandZ.tech for AI product integration, distributed systems, cloud architecture, or fractional principal engineer support.',
}

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>
}) {
  const params = await searchParams
  const sent = params?.sent === '1'

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section title="Start a project with AandZ.tech" eyebrow="Contact">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
                Tell us what you are building, where the risk is, and what outcome would make the next few weeks useful.
                Best fit: focused projects, architecture reviews, MVPs, production hardening, and fractional principal
                engineer support.
              </p>

              {sent && (
                <p className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                  Thanks. Your message has been sent. We&apos;ll get back to you by email.
                </p>
              )}

              <form className="mt-6 grid gap-3 md:grid-cols-2" method="POST" action="/api/contact">
                <input
                  name="name"
                  placeholder="Name"
                  className="rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Work email"
                  className="rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                  required
                />
                <input
                  name="company"
                  placeholder="Company"
                  className="rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                />
                <input
                  name="deadline"
                  placeholder="Timeline or deadline"
                  className="rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                />
                <select
                  name="serviceInterest"
                  className="md:col-span-2 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                  required
                >
                  <option value="">Service interest</option>
                  <option value="AI Product Integration">AI Product Integration</option>
                  <option value="Distributed Systems">Distributed Systems</option>
                  <option value="Cloud/Data Architecture">Cloud/Data Architecture</option>
                  <option value="Fractional Principal Engineer">Fractional Principal Engineer</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <select
                  name="budget"
                  className="md:col-span-2 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                >
                  <option value="">Budget range</option>
                  <option value="under-10k">Under $10k</option>
                  <option value="10-25k">$10k-$25k</option>
                  <option value="25-50k">$25k-$50k</option>
                  <option value="50k-plus">$50k+</option>
                </select>
                <textarea
                  name="summary"
                  placeholder="Project summary"
                  rows={6}
                  className="md:col-span-2 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
                  required
                />
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-brand text-black px-4 py-2 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
                  >
                    Send project inquiry
                  </button>
                </div>
              </form>
            </div>

            <aside className="rounded-2xl border border-line bg-surface p-6 text-sm text-ink-muted">
              <h3 className="font-semibold text-ink">What happens next</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>We review the context and look for the highest-leverage next step.</li>
                <li>You hear back from an AandZ.tech email within 1-2 business days.</li>
                <li>If there is a fit, we shape a focused engagement around a clear outcome.</li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed">
                Prefer email? Send project context to{' '}
                <a className="underline underline-offset-4 hover:text-ink" href="mailto:hello@aandz.tech">
                  hello@aandz.tech
                </a>
                .
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <h3 className="font-semibold text-ink">Good signals to include</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>The product or platform you are building.</li>
                  <li>The risk, bottleneck, or decision that prompted the inquiry.</li>
                  <li>Any timeline, team context, or systems already in place.</li>
                </ul>
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
