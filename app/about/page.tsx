import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Badge from '@/components/Badge'

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section title="About">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-zinc-300">
              <p>Senior Software Engineer with 10+ years across Microsoft, AWS, and high‑growth product teams. I specialize in integrating GenAI into real products and designing reliable event‑driven backends.</p>
              <ul className="list-disc pl-6">
                <li>AI photo editing features adopted by millions</li>
                <li>Event‑driven patterns (CQRS/outbox/idempotency) in production</li>
                <li>Go, Python, TypeScript · Postgres, Qdrant · AWS · Docker</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Microsoft","AWS","Property Finder","DataGardens"].map(t=> <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="font-semibold">Quick links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="underline underline-offset-4" href="#">Download resume (PDF)</a></li>
                <li><a className="underline underline-offset-4" href="https://github.com/amirhf" target="_blank">GitHub</a></li>
                <li><a className="underline underline-offset-4" href="https://www.linkedin.com/in/amirhf" target="_blank">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
