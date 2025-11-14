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
            <input placeholder="Name" className="col-span-1 rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
            <input placeholder="Work email" className="col-span-1 rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
            <input placeholder="Company" className="col-span-1 rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
            <input placeholder="Deadline" className="col-span-1 rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
            <select className="col-span-2 rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600">
              <option>Budget range</option>
              <option>Under $10k</option>
              <option>$10k–$25k</option>
              <option>$25k–$50k</option>
              <option>$50k+</option>
            </select>
            <textarea placeholder="Project summary" rows={5} className="col-span-2 rounded-xl bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
            <div className="col-span-2 flex gap-3">
              <button type="button" className="rounded-xl bg-white text-black px-4 py-2 font-medium hover:bg-zinc-200">Send</button>
              <a href="#" className="rounded-xl border border-zinc-700 px-4 py-2 font-medium hover:bg-white/5">Book a 20‑min call</a>
            </div>
          </form>
        </Section>
      </main>
      <Footer />
    </>
  )
}
