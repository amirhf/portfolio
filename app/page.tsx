import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Stat from '@/components/Stat'
import Badge from '@/components/Badge'
import Card from '@/components/Card'
import Reveal from '@/components/Reveal'

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section
          id="home"
          title="Senior Software Engineer – Building AI-Powered Cloud Platforms"
          eyebrow="Amir Firouz"
          className="hero-bg rounded-3xl border border-line shadow-card overflow-hidden"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="md:col-span-2 text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl">
                <p className="text-sm font-medium text-ink max-w-xl">
                  Specialist in reliable distributed systems and practical AI integration—from LLMs, RAG, and agents to model integration and feature routing in production.
                </p>

                <p className="mt-4">
                  I’m <span className="font-semibold text-ink">Amir Firouzmanesh</span>, a senior software engineer (PhD)
                  working where solid distributed systems meet applied AI. I’ve shipped features at{' '}
                  <span className="font-semibold text-ink">Microsoft, AWS, and Property Finder</span>—from generative image
                  editing in Windows Photos to event-driven subscription and credit platforms.
                </p>

                <p className="mt-3">
                  Lately I’ve been focused on integrating <span className="font-semibold text-ink">LLMs, RAG, and agent-style workflows</span> into products like my{' '}
                  <span className="font-semibold text-ink">Learn Path Designer</span> and <span className="font-semibold text-ink">AI Feature Router</span>,
                  with a strong emphasis on observability, cost control, and long-term maintainability.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'AI Integration',
                    'LLMs · RAG · Agents',
                    'Cloud & Distributed Systems',
                    'Fractional Advisory',
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="rounded-xl bg-brand text-black px-4 py-2 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
                  >
                    Book a 20-min intro
                  </a>
                  <a
                    href="https://github.com/amirhf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-line px-4 py-2 text-sm font-medium text-ink hover:border-ink/40 hover:bg-white/5"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Stat label="Monthly Active Users (Windows Photos)" value="+20%" />
                <Stat label="Support Tickets (Credits Platform)" value="−50%" />
                <Stat label="Onboarding Time (DR Automation)" value="1h → 10m" />
              </div>
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4 text-ink-muted text-sm">
            <span className="font-medium text-ink">Trusted by</span>
            <div className="flex flex-wrap items-center gap-4 opacity-80">
              <span>Microsoft</span>
              <span>Amazon Web Services</span>
              <span>Property Finder</span>
              <span>CenturyLink / DataGardens</span>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Flagship projects" eyebrow="Projects">
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title="Credit Ledger — Event-driven accounting (Go + Postgres)"
              subtitle="CQRS · transactional outbox · idempotent consumers · observability"
              actions={
                <a
                  className="text-sm underline underline-offset-4"
                  href="/projects/credit-ledger"
                >
                  Case study
                </a>
              }
            >
              Blueprint for money-like flows with Swagger demo, Jaeger/Grafana, and production-grade patterns.
              <div className="mt-3 flex flex-wrap gap-2">
                {['Go', 'Postgres', 'Kafka/Redpanda', 'Jaeger', 'Grafana', 'Docker'].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>

            <Card
              title="AI Feature Router — Local-first captioning & semantic search"
              subtitle="Latency/cost-aware routing with CLIP/BLIP + cloud fallback"
              actions={
                <a
                  className="text-sm underline underline-offset-4"
                  href="/projects/ai-feature-router"
                >
                  Case study
                </a>
              }
            >
              Pragmatic GenAI integration with embeddings in Qdrant/pgvector, FastAPI, and metrics UI.
              <div className="mt-3 flex flex-wrap gap-2">
                {['Python', 'TypeScript', 'FastAPI', 'Qdrant/pgvector', 'Next.js', 'Docker'].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>

            <Card
              title="Agentic e-Learning — RAG + task orchestration"
              subtitle="Next.js UI · Go gateway · Python workers"
              actions={
                <a
                  className="text-sm underline underline-offset-4"
                  href="/projects/agentic-elearning"
                >
                  Case study
                </a>
              }
            >
              Ask-me-anything over curated content with tool-use, retrieval, and evaluation notebooks.
              <div className="mt-3 flex flex-wrap gap-2">
                {['Next.js', 'Go', 'Python', 'Qdrant', 'Postgres', 'Docker'].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
