import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function Projects() {
  const items = [
    {
      href: '/projects/credit-ledger',
      title: 'Credit Ledger',
      summary: 'Event-driven accounting with CQRS/outbox/idempotency.',
      image: '/assets/thumb-credit-ledger.png',
    },
    {
      href: '/projects/ai-feature-router',
      title: 'AI Feature Router',
      summary: 'Local-first captioning & search with cloud fallback.',
      image: '/assets/thumb-ai-feature-router.png',
    },
    {
      href: '/projects/agentic-elearning',
      title: 'Agentic e‑Learning',
      summary: 'RAG + agent orchestration for course content.',
      image: '/assets/thumb-agentic-elearning.png',
    },
    {
      href: '/projects/microsoft-photos-ai',
      title: 'Microsoft Photos AI',
      summary: 'On-device + cloud AI for photo editing.',
      image: '/assets/og-template.png',
    },
    {
      href: '/projects/property-finder-credits',
      title: 'Property Finder — Credits',
      summary: 'Reliability and service boundaries for subscriptions.',
      image: '/assets/og-template.png',
    },
  ]

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section title="Projects">
          <ul className="grid gap-6 md:grid-cols-2">
            {items.map((i) => (
              <li
                key={i.href}
                className="rounded-2xl border border-line bg-surface p-4 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <a href={i.href} className="block">
                  <div className="aspect-[1200/630] overflow-hidden rounded-xl border border-line mb-4">
                    <Image
                      src={i.image}
                      alt={i.title}
                      width={1200}
                      height={630}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-ink">{i.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{i.summary}</p>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  )
}
