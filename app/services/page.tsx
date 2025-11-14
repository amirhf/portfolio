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
        <Section title="Consulting offers" eyebrow="Services">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="AI Integration & GenAI Features" subtitle="Local‑first + cloud fallback MVP, policy design, eval harness">
              For product teams shipping AI edits, search, or assistants.
              <div className="mt-3 flex flex-wrap gap-2">{['ONNX','OpenAI','Latency policy','Eval gates'].map(t=> <Badge key={t}>{t}</Badge>)}</div>
            </Card>
            <Card title="Cloud & Microservices Architecture" subtitle="Service boundaries, CQRS/outbox, reliability practices">
              For teams moving off a monolith or stabilizing services.
              <div className="mt-3 flex flex-wrap gap-2">{['CQRS','Outbox','Idempotency','Tracing'].map(t=> <Badge key={t}>{t}</Badge>)}</div>
            </Card>
            <Card title="DevOps & CI‑CD Modernization" subtitle="Trunk‑based flow, preview envs, observability">
              Faster, safer releases with strong DX.
              <div className="mt-3 flex flex-wrap gap-2">{['Pipelines','Testing','IaC skeleton','Dashboards'].map(t=> <Badge key={t}>{t}</Badge>)}</div>
            </Card>
            <Card title="MLOps for Product Teams" subtitle="Eval sets, canary policies, monitoring">
              Operationalize models without heavy platform spend.
              <div className="mt-3 flex flex-wrap gap-2">{['Offline eval','Model registry','Canary','Telemetry'].map(t=> <Badge key={t}>{t}</Badge>)}</div>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
