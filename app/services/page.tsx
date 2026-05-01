import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'

const services = [
  {
    title: 'AI Product Integration',
    subtitle: 'Practical AI features that fit existing products',
    bestFit: [
      'You need LLM, RAG, agent, search, image, or content workflows in production.',
      'Cost, latency, hallucinations, and fallback behavior matter as much as model quality.',
      'Your team needs a working MVP or hardening pass, not a research demo.',
    ],
    engagements: ['Strategy sprint: 1-2 weeks', 'Prototype/MVP: 3-6 weeks', 'Production hardening: 4-8 weeks'],
    proof: [
      { label: 'Windows Photos AI', href: '/projects/microsoft-photos-ai' },
      { label: 'Retail AI Feature Router', href: '/projects/ai-feature-router' },
      { label: 'LearnPath', href: '/projects/agentic-elearning' },
    ],
    tags: ['LLMs & RAG', 'Agents', 'Structured outputs', 'Eval harnesses', 'Cost routing'],
  },
  {
    title: 'Distributed Systems & Microservices',
    subtitle: 'Service boundaries and event flows that survive production',
    bestFit: [
      'A monolith is becoming hard to change, or services already exist but boundaries are unclear.',
      'Credits, subscriptions, entitlements, or workflows need stronger consistency guarantees.',
      'Retries, duplicate events, support tickets, or unclear ownership are slowing the team down.',
    ],
    engagements: ['Architecture review: 1-2 weeks', 'Service extraction plan: 2-4 weeks', 'Implementation support: 4-8 weeks'],
    proof: [
      { label: 'Credit Ledger', href: '/projects/credit-ledger' },
      { label: 'Property Finder Credits', href: '/projects/property-finder-credits' },
    ],
    tags: ['DDD', 'CQRS', 'Outbox pattern', 'Kafka / RabbitMQ / SQS', 'Idempotency'],
  },
  {
    title: 'Cloud, Data & Reporting Architecture',
    subtitle: 'AWS and reporting systems your operators can trust',
    bestFit: [
      'You need a cloud architecture review before scaling a data-heavy or AI-enabled product.',
      'Reports, usage numbers, or billing analytics are difficult to explain or debug.',
      'Your team needs clear contracts, SLAs, alarms, and operational guardrails.',
    ],
    engagements: ['Cloud architecture review: 1-2 weeks', 'Data pipeline hardening: 3-6 weeks', 'Reporting reliability pass: 4-8 weeks'],
    proof: [
      { label: 'AWS RDS & Marketplace', href: '/projects/aws' },
      { label: 'Property Finder Credits', href: '/projects/property-finder-credits' },
    ],
    tags: ['AWS', 'RDS / Aurora', 'ETL pipelines', 'Data contracts', 'Athena / Redshift'],
  },
  {
    title: 'Fractional Principal Engineer',
    subtitle: 'Senior technical leadership for focused delivery windows',
    bestFit: [
      'You need principal-level judgment for an architecture decision or delivery push.',
      'Tech leads need help shaping design docs, trade-offs, or review habits.',
      'You want implementation support and mentoring without adding a permanent leadership role.',
    ],
    engagements: ['Design review: 1-2 weeks', 'Delivery advisory: 3-12 weeks', 'Fractional support: monthly retainer'],
    proof: [
      { label: 'Founder background', href: '/about' },
      { label: 'Case studies', href: '/projects' },
    ],
    tags: ['Architecture reviews', 'Design docs', 'Code reviews', 'Mentoring', 'Tech strategy'],
  },
]

export default function Services() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section eyebrow="Services" title="Focused engineering help for product and platform teams">
          <div className="space-y-8">
            <p className="max-w-3xl text-ink-muted text-lg leading-relaxed">
              We work on short, high-leverage engagements: shipping AI features, stabilizing distributed systems,
              hardening cloud and data platforms, and giving engineering leaders principal-level support when the
              stakes are high.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} title={service.title} subtitle={service.subtitle}>
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-sm font-semibold text-ink">Best fit when</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        {service.bestFit.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-ink">Typical engagement</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {service.engagements.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-ink">Related proof</h4>
                      <div className="mt-2 flex flex-wrap gap-3 text-sm">
                        {service.proof.map((item) => (
                          <a key={item.href + item.label} className="underline underline-offset-4" href={item.href}>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-semibold text-ink">Not sure which service fits?</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
                Start with the problem: a feature that needs to ship, a system that is becoming fragile, or a decision
                your team needs to make with more confidence. We can shape the engagement from there.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex rounded-xl bg-brand text-black px-4 py-2 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
              >
                Start a project
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
