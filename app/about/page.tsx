import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Badge from '@/components/Badge'
import Card from '@/components/Card'
import FounderExperienceStrip from '@/components/FounderExperienceStrip'

const principles = [
  {
    title: 'Production over prototypes',
    body: 'AI and architecture work only matters if it survives latency targets, cost limits, failures, and real users.',
  },
  {
    title: 'Observable by default',
    body: 'We design systems so operators can answer what happened, where it failed, and what changed.',
  },
  {
    title: 'Clear service boundaries',
    body: 'We prefer explicit ownership, contracts, and invariants over accidental coupling and undocumented behavior.',
  },
  {
    title: 'Handover matters',
    body: 'Every engagement should leave behind docs, review notes, and a simpler mental model for the team.',
  },
]

const technologies = [
  'Go',
  'Python',
  'TypeScript',
  'React',
  'Next.js',
  'PostgreSQL',
  'SQL Server',
  'Qdrant',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'Kafka',
  'RabbitMQ',
  'Kinesis',
  'Grafana',
  'Prometheus',
  'Jaeger',
]

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section title="About AandZ.tech" eyebrow="Studio">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
            <div className="space-y-5 text-ink-muted">
              <p>
                <span className="text-ink font-medium">AandZ.tech</span> is the public brand of{' '}
                <span className="text-ink font-medium">A&amp;Z Technology Solutions</span>, a small specialist
                engineering studio based in the UAE. We focus on AI integration, distributed systems, and cloud
                architecture for product and platform teams.
              </p>

              <p>
                We are founder-led by <span className="text-ink font-medium">Amir Firouzmanesh</span>, a senior
                software engineer with a PhD and experience shipping AI and platform systems at Microsoft, Amazon Web
                Services, Property Finder, and DataGardens. That background is the studio&apos;s main operating model:
                senior technical judgment close to the work, with trusted specialists added when a project needs
                additional capacity.
              </p>

              <p>
                We work best when the problem has real production stakes: an AI feature that needs guardrails, a
                service architecture that needs clearer boundaries, a credits or reporting flow that must be trusted, or
                an engineering team that needs principal-level help for a focused delivery window.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Microsoft', 'AWS', 'Property Finder', 'DataGardens', 'Founder-led studio'].map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-2xl border border-line">
                    <Image
                      src="/images/amirhf.jpg"
                      alt="Portrait of Amir Firouzmanesh"
                      width={160}
                      height={160}
                      className="h-24 w-24 rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Amir Firouzmanesh</h3>
                    <p className="mt-1 text-sm text-ink-muted">Founder, A&Z Technology Solutions</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-semibold text-ink">Quick links</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a className="underline underline-offset-4" href="/projects">
                      Case studies
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href="https://github.com/amirhf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href="https://www.linkedin.com/in/amir-firouzmanesh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Experience context" eyebrow="Trust">
          <FounderExperienceStrip />
        </Section>

        <Section title="Working principles" eyebrow="How we work">
          <div className="grid gap-6 md:grid-cols-4">
            {principles.map((principle) => (
              <Card key={principle.title} title={principle.title}>
                {principle.body}
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Technology depth" eyebrow="Stack">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-ink-muted">
              The stack depends on the system, but our work often sits across backend services, AI infrastructure,
              data platforms, cloud operations, and observability.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
