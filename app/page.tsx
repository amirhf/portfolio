import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Stat from '@/components/Stat'
import Badge from '@/components/Badge'
import Card from '@/components/Card'
import Reveal from '@/components/Reveal'

const services = [
  {
    title: 'AI Product Integration',
    subtitle: 'LLM, RAG, agent, image, and search features that fit real products',
    tags: ['LLMs & RAG', 'Agents', 'Image AI', 'Eval loops'],
    href: '/services',
    body:
      'We design and ship practical AI features with clear latency, cost, quality, and fallback policies, so product teams can move beyond prototypes.',
  },
  {
    title: 'Distributed Systems & Microservices',
    subtitle: 'Service boundaries, event flows, and resilient backend architecture',
    tags: ['CQRS', 'Outbox', 'Kafka/SQS', 'Idempotency'],
    href: '/services',
    body:
      'We help teams untangle fragile systems, clarify ownership, and build observable workflows that survive retries, late events, and production load.',
  },
  {
    title: 'Cloud, Data & Reporting Architecture',
    subtitle: 'AWS and data platforms your team can operate with confidence',
    tags: ['AWS', 'ETL', 'RDS/Aurora', 'Reporting SLAs'],
    href: '/services',
    body:
      'We review and harden cloud designs, data contracts, usage reporting, and operational guardrails for teams that need trustworthy platforms.',
  },
  {
    title: 'Fractional Principal Engineer',
    subtitle: 'Senior technical leadership for focused, high-leverage work',
    tags: ['Architecture reviews', 'Design docs', 'Mentoring', 'Delivery leadership'],
    href: '/services',
    body:
      'We provide staff/principal-level support for architecture decisions, design reviews, technical strategy, and mentoring during critical delivery windows.',
  },
]

const caseStudies = [
  {
    title: 'Windows Photos AI',
    subtitle: 'AI editing features shipped to tens of millions of users.',
    href: '/projects/microsoft-photos-ai',
    proof: '+20% monthly active users',
  },
  {
    title: 'Credit Ledger',
    subtitle: 'Reference architecture for credits, ledgers, outbox, and observability.',
    href: '/projects/credit-ledger',
    proof: 'Double-entry financial core',
  },
  {
    title: 'Retail AI Feature Router',
    subtitle: 'Hybrid search and cost-aware routing for AI-powered discovery.',
    href: '/projects/ai-feature-router',
    proof: 'Sub-100ms target latency',
  },
  {
    title: 'LearnPath',
    subtitle: 'Planner-executor agents, structured outputs, and grounded RAG.',
    href: '/projects/agentic-elearning',
    proof: 'Production agent patterns',
  },
]

const proofHighlights = [
  {
    label: 'AI adoption',
    value: '+20% MAU',
    body: 'Windows Photos AI features shipped to tens of millions of users and helped grow monthly active use.',
    href: '/projects/microsoft-photos-ai',
  },
  {
    label: 'Marketplace reliability',
    value: '-50%+ tickets',
    body: 'Property Finder credits and subscriptions reliability work reduced recurring seller support issues.',
    href: '/projects/property-finder-credits',
  },
  {
    label: 'Financial systems',
    value: 'Double-entry core',
    body: 'Credit Ledger shows auditable credits, outbox events, traces, and support-friendly operations.',
    href: '/projects/credit-ledger',
  },
  {
    label: 'Cloud reporting',
    value: 'Seller data pipelines',
    body: 'AWS Marketplace work focused on ETL contracts, report delivery, retries, alarms, and debuggability.',
    href: '/projects/aws',
  },
]

const engagementSteps = [
  {
    title: 'Discover',
    body: 'Clarify the product goal, system constraints, risks, and the fastest valuable outcome.',
  },
  {
    title: 'Design or Prototype',
    body: 'Produce the architecture, technical plan, or working MVP needed to validate the direction.',
  },
  {
    title: 'Harden',
    body: 'Add observability, tests, fallbacks, operational runbooks, and production-grade boundaries.',
  },
  {
    title: 'Handover',
    body: 'Leave the team with documentation, review notes, and clear next steps they can own.',
  },
]

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section
          id="home"
          eyebrow="AandZ.tech"
          title={
            <>
              Production AI and cloud
              <br />
              engineering for product teams.
            </>
          }
          className="hero-bg rounded-3xl border border-line shadow-card overflow-hidden"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
            <Reveal>
              <div className="text-base md:text-lg text-ink-muted leading-relaxed max-w-3xl">
                <p className="text-sm font-medium text-ink max-w-2xl">
                  We help SaaS, marketplace, and platform teams ship practical AI features, resilient distributed
                  systems, and cloud architecture that can be operated with confidence.
                </p>

                <p className="mt-4">
                  AandZ.tech is the public brand of{' '}
                  <span className="font-semibold text-ink">A&amp;Z Technology Solutions</span>, a small specialist
                  studio founder-led by <span className="font-semibold text-ink">Amir Firouzmanesh</span>. Our work is
                  grounded in experience shipping AI and platform systems at{' '}
                  <span className="font-semibold text-ink">Microsoft, AWS, Property Finder, and DataGardens</span>.
                </p>

                <p className="mt-3">
                  We are a fit when a team needs senior engineering help to add AI without runaway cost, split services
                  without creating chaos, or make cloud and data systems easier to trust.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['AI Product Integration', 'Distributed Systems', 'Cloud & Data Platforms', 'Fractional Principal Engineer'].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="rounded-xl bg-brand text-black px-4 py-2 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
                  >
                    Start a project
                  </a>
                  <a
                    href="/projects"
                    className="rounded-xl border border-line px-4 py-2 text-sm font-medium text-ink hover:border-ink/40 hover:bg-white/5"
                  >
                    View case studies
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <div className="rounded-2xl border border-line bg-surface p-5 shadow-card">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/amirhf.jpg"
                      alt="Portrait of Amir Firouzmanesh"
                      width={96}
                      height={96}
                      className="h-20 w-20 rounded-2xl object-cover ring-1 ring-line"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">Founder-led delivery</p>
                      <p className="mt-1 text-sm text-ink-muted">
                        Senior architecture and implementation guidance, with trusted specialists added when needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <Stat label="Monthly active users after Windows Photos AI launch" value="+20%" />
                  <Stat label="Support tickets reduced in credits/subscriptions work" value="-50%" />
                  <Stat label="Disaster recovery onboarding improved" value="1h -> 10m" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4 text-ink-muted text-sm">
            <span className="font-medium text-ink">Founder experience includes</span>
            <div className="flex flex-wrap items-center gap-4 opacity-80">
              <span>Microsoft</span>
              <span>Amazon Web Services</span>
              <span>Property Finder</span>
              <span>DataGardens</span>
            </div>
          </div>
        </Section>

        <Section id="proof-strip" title="Proof across AI, cloud, and distributed systems" eyebrow="Evidence">
          <div className="grid gap-4 md:grid-cols-4">
            {proofHighlights.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-line bg-surface p-5 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-ink-muted">{item.label}</div>
                <div className="mt-3 text-xl font-semibold tracking-tight text-ink">{item.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </a>
            ))}
          </div>
        </Section>

        <Section id="services" title="Services for teams with production stakes" eyebrow="Services">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                subtitle={service.subtitle}
                actions={
                  <a className="text-sm underline underline-offset-4" href={service.href}>
                    Details
                  </a>
                }
              >
                {service.body}
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="proof" title="Selected proof" eyebrow="Case studies">
          <div className="grid gap-6 md:grid-cols-4">
            {caseStudies.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                actions={
                  <a className="text-sm underline underline-offset-4" href={item.href}>
                    Read
                  </a>
                }
              >
                <span className="font-medium text-ink">{item.proof}</span>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="engagement" title="How engagements work" eyebrow="Process">
          <div className="grid gap-6 md:grid-cols-4">
            {engagementSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-line bg-surface p-5">
                <div className="text-xs text-ink-muted">0{index + 1}</div>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Need senior help on a production system?" eyebrow="Start">
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-ink-muted">
              Tell us what you are building, where the risk is, and what outcome would make the next few weeks useful.
            </p>
            <a
              href="/contact"
              className="inline-flex justify-center rounded-xl bg-brand text-black px-4 py-2 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
            >
              Start a project
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
