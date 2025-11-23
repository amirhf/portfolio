import Image from 'next/image'
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
            <div className="space-y-4 text-ink-muted">
              <p>
                I&apos;m <span className="text-ink font-medium">Amir Firouzmanesh</span>, a senior software engineer
                (PhD) and founder of <span className="text-ink font-medium">AandZ.tech</span>, an independent AI &amp;
                cloud engineering practice based in the UAE. Over the last decade I&apos;ve helped teams at Microsoft,
                Amazon Web Services, Property Finder, and DataGardens ship real products—from AI-powered photo editing
                in Windows Photos to RDS SQL Server features, marketplace analytics, and subscription/credit systems
                behind large real-estate platforms.
              </p>
              <p>
                These days I focus on <span className="text-ink font-medium">AI integration</span> and
                <span className="text-ink font-medium"> event-driven architectures</span>: layering LLMs, RAG, agents,
                and image models onto existing systems without turning everything into a research project. I like
                working end-to-end: clarifying requirements, sketching architecture, building services and APIs,
                instrumenting them with metrics and traces, and leaving behind clear docs and simple mental models.
                Much of that thinking lives in open-source reference projects—such as Credit Ledger, AI Image Search /
                Feature Router, and Learning Path Designer—that I use as blueprints for client work.
              </p>

              <h3 className="font-semibold text-ink pt-2">How I can help</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <span className="text-ink font-medium">AI &amp; GenAI integration</span>: LLM/RAG/agent features,
                  evaluation loops, guardrails, and safe fallbacks to ensure production reliability and minimize hallucination risks.
                </li>
                <li>
                  <span className="text-ink font-medium">Distributed systems &amp; microservices</span>: event-driven
                  designs (Kafka/Redpanda, RabbitMQ, Kinesis), CQRS, outbox, and idempotency to ensure data consistency and system resilience at scale.
                </li>
                <li>
                  <span className="text-ink font-medium">Credits, ledgers &amp; subscriptions</span>: double-entry
                  ledgers, usage/entitlement flows, and incident-resistant invariants to prevent revenue leakage and ensure 100% financial accuracy.
                </li>
                <li>
                  <span className="text-ink font-medium">Architecture, mentoring &amp; technical consulting</span>:
                  architecture reviews, design docs, code reviews, and short-term &quot;fractional principal
                  engineer&quot; engagements to unblock teams and reduce long-term technical debt.
                </li>
              </ul>

              <h3 className="font-semibold text-ink pt-2">Technologies I work with</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <span className="text-ink font-medium">Languages</span>: Go, Python, TypeScript/JavaScript, Java, SQL
                </li>
                <li>
                  <span className="text-ink font-medium">Backend &amp; AI</span>: FastAPI, REST/JSON APIs, ONNX
                  Runtime, LLM APIs, LangChain
                </li>
                <li>
                  <span className="text-ink font-medium">Frontend</span>: React, Next.js, Tailwind CSS
                </li>
                <li>
                  <span className="text-ink font-medium">Data &amp; storage</span>: PostgreSQL, MySQL, SQL Server,
                  MongoDB, Qdrant/pgvector
                </li>
                <li>
                  <span className="text-ink font-medium">Cloud &amp; infra</span>: AWS, Azure, Docker, Kubernetes
                </li>
                <li>
                  <span className="text-ink font-medium">Messaging &amp; observability</span>: Kafka/Redpanda, RabbitMQ,
                  Kinesis, Grafana, Prometheus, Jaeger, Application Insights
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Microsoft', 'AWS', 'Property Finder', 'DataGardens'].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-line bg-surface p-6 flex flex-col items-center">
                <div className="overflow-hidden rounded-full border border-line">
                  <Image
                    src="/images/amirhf.jpg"
                    alt="Portrait of Amir Firouzmanesh"
                    width={200}
                    height={200}
                    className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm text-ink-muted text-center">
                  Amir Firouzmanesh · Senior Software Engineer &amp; founder of AandZ.tech
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-semibold">Quick links</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href="/assets/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download resume (PDF)
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
      </main>
      <Footer />
    </>
  )
}
