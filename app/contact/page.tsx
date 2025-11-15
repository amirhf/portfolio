import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section title="Tell me about your project" eyebrow="Contact">
          <form className="mt-4 grid gap-3 md:grid-cols-2">
            <input placeholder="Name" className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand" />
            <input placeholder="Work email" className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand" />
            <input placeholder="Company" className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand" />
            <input placeholder="Deadline" className="col-span-1 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand" />
            <select className="col-span-2 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand">
              <option>Budget range</option>
              <option>Under $10k</option>
              <option>$10k–$25k</option>
              <option>$25k–$50k</option>
              <option>$50k+</option>
            </select>
            <textarea placeholder="Project summary" rows={5} className="col-span-2 rounded-xl bg-surface border border-line px-3 py-2 text-sm outline-none focus:border-brand" />
            <div className="col-span-2 flex gap-3">
              <button
                type="button"
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
