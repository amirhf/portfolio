 import Header from '@/components/Header'
 import Footer from '@/components/Footer'
 import Section from '@/components/Section'

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
        <Section title="Tell me about your project" eyebrow="Contact">
          {sent && (
            <p className="mt-2 text-sm text-emerald-500">
              Thanks — your message has been sent. I&apos;ll get back to you by email.
            </p>
          )}
          <form
            className="mt-4 grid gap-3 md:grid-cols-2"
            method="POST"
            action="/api/contact"
          >
            <input
              name="name"
              placeholder="Name"
              className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Work email"
              className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
              required
            />
            <input
              name="company"
              placeholder="Company"
              className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <input
              name="deadline"
              placeholder="Deadline"
              className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <select
              name="budget"
              className="col-span-2 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
            >
              <option value="">Budget range</option>
              <option value="under-10k">Under $10k</option>
              <option value="10-25k">$10k–$25k</option>
              <option value="25-50k">$25k–$50k</option>
              <option value="50k-plus">$50k+</option>
            </select>
            <textarea
              name="summary"
              placeholder="Project summary"
              rows={5}
              className="col-span-2 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand"
              required
            />
            <div className="col-span-2 flex gap-3">
              <button
                type="submit"
                className="rounded-xl bg-brand text-black px-4 py-2 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
              >
                Send
              </button>
              <a
                href="#"
                className="rounded-xl border border-line px-4 py-2 text-sm font-medium text-ink hover:border-ink/40 hover:bg-white/5"
              >
                Book a 20‑min call
              </a>
            </div>
          </form>
        </Section>
      </main>
      <Footer />
    </>
  )
}
