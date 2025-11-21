import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'

export default function Services() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section
          eyebrow="Services"
          title="How I help product & platform teams"
        >
          <div className="space-y-8">
            <p className="max-w-3xl text-ink-muted text-lg leading-relaxed">
              I work with product and platform teams on short, focused
              engagements to ship AI-powered features, stabilize distributed
              systems, and make cloud infrastructure easier to operate.
              Most projects are 3–12 weeks and shaped around a concrete
              outcome: a working MVP, a hardening pass, or a clear architecture
              you can execute with your own team.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card
                title="AI Integration & GenAI Product Features"
                subtitle="LLM-backed search, assistants, and editors you can actually ship"
              >
                Design and implement practical AI features: image and content
                workflows, copilots, and “smart” search or recommendations.
                We pick the right models (local or cloud), define latency and
                cost policies, and set up eval harnesses and telemetry so you
                can iterate safely.
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'LLMs & RAG',
                    'Agents',
                    'Image & text features',
                    'Latency / cost policy',
                    'Eval harness',
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>

              <Card
                title="Event-Driven Systems & Microservices"
                subtitle="Service boundaries, messaging patterns, and resilient workflows"
              >
                Help you move off a monolith or untangle a fragile services
                setup. We clarify domains and service boundaries, apply
                CQRS/outbox where it fits, and design idempotent, observable
                workflows over Kafka, RabbitMQ, or SQS/SNS.
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'DDD',
                    'CQRS',
                    'Outbox pattern',
                    'Kafka / RabbitMQ / SQS',
                    'Idempotent consumers',
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>

              <Card
                title="AWS & Cloud Architecture"
                subtitle="Pragmatic designs for data-heavy and AI-driven products"
              >
                Architecture reviews and greenfield designs on AWS:
                from RDS / Aurora and S3-based data lakes to
                containerized services and serverless backends.
                The focus is on secure, well-instrumented systems that your
                team can own—rather than elaborate diagrams nobody can maintain.
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'AWS RDS / Aurora',
                    'ECS / EKS / Lambda',
                    'API Gateway',
                    'Networking & security',
                    'Multi-account setup',
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>

              <Card
                title="Data, Reporting & Analytics Pipelines"
                subtitle="Usage, billing, and product analytics you can trust"
              >
                Design or harden ETL and reporting flows so stakeholders can
                rely on the numbers. This includes data contracts, late-event
                handling, report SLAs, and troubleshooting paths across Kinesis,
                Kafka, Glue, dbt, warehouses, or Athena/Redshift.
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'ETL pipelines',
                    'Usage & billing reports',
                    'Data contracts',
                    'Athena / Redshift / warehouses',
                    'SLA & monitoring',
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>

              <Card
                title="DevOps, CI/CD & Observability"
                subtitle="Short feedback loops and safe, predictable releases"
              >
                Review and improve your delivery pipeline: trunk-based flow,
                branch policies, preview environments, and guardrails around
                testing. We also tighten logging, metrics, and tracing so
                incidents are easier to spot and debug.
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'CI/CD pipelines',
                    'Testing strategy',
                    'Preview environments',
                    'Dashboards & alerts',
                    'Tracing & logs',
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>

              <Card
                title="Architecture Reviews & Mentoring"
                subtitle="Targeted help for tech leads and senior ICs"
              >
                Lightweight architecture reviews, design doc coaching, and
                mentoring for engineers stepping into staff/lead roles. Typical
                engagements include a series of deep-dive sessions, written
                recommendations, and pairing on one or two critical designs.
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'Architecture reviews',
                    'Design doc coaching',
                    'Tech strategy',
                    'Mentoring',
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
