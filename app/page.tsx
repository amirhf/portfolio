import Image from 'next/image'
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
          eyebrow="AandZ.tech · Amir Firouz"
          title={
            <>
              Independent Senior Software Engineer
              <br />
              AI Integration &amp; Distributed Systems
            </>
          }
          className="hero-bg rounded-3xl border border-line shadow-card overflow-hidden"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="md:col-span-2 text-base md:text-lg text-ink-muted leading-relaxed max-w-2xl">
                <p className="text-sm font-medium text-ink max-w-xl">
                  Founder of AandZ.tech, an independent AI &amp; cloud engineering practice helping teams ship
                  reliable distributed systems and practical AI features—from LLMs, RAG, and agents to image models
                  and feature routing in production.
                </p>

                <p className="mt-4">
                  I’m <span className="font-semibold text-ink">Amir Firouzmanesh</span>, a senior software engineer
                  (PhD) working where solid distributed systems meet applied AI. I’ve shipped features at{' '}
                  <span className="font-semibold text-ink">Microsoft, AWS, and Property Finder</span>—from AI-powered
                  editing in Windows Photos to RDS SQL Server capabilities and event-driven subscription/credit
                  platforms behind real-estate listings.
                </p>

                <p className="mt-3">
                  These days I focus on integrating{' '}
                  <span className="font-semibold text-ink">LLMs, RAG, and agent-style workflows</span> into existing
                  products without turning everything into a research project. A lot of my thinking lives in open-source
                  reference systems—like <span className="font-semibold text-ink">Credit Ledger</span>,{' '}
                  <span className="font-semibold text-ink">AI Feature Router</span>, and{' '}
                  <span className="font-semibold text-ink">Learning Path Designer</span>—which I use as blueprints for
                  client work and teaching.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'AI Integration & GenAI',
                    'Event-Driven Systems',
                    'Credits & Ledgers',
                    'Fractional Principal Engineer',
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
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card p-2">
                    <Image
                      src="/images/amirhf.jpg"
                      alt="Portrait of Amir Firouzmanesh"
                      width={320}
                      height={320}
                      className="h-40 w-40 md:h-48 md:w-48 rounded-2xl object-cover"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Stat label="Monthly Active Users (Windows Photos)" value="+20%" />
                  <Stat label="Support Tickets (Credits Platform)" value="−50%" />
                  <Stat label="Onboarding Time (DR Automation)" value="1h → 10m" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4 text-ink-muted text-sm">
            <span className="font-medium text-ink">Previously shipped at</span>
            <div className="flex flex-wrap items-center gap-4 opacity-80">
              <span>Microsoft</span>
              <span>Amazon Web Services</span>
              <span>Property Finder</span>
              <span>CenturyLink / DataGardens</span>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Flagship reference implementations" eyebrow="Projects">
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title="Fintech Core: Credit Ledger"
              subtitle="Production-ready reference architecture for SaaS credits, marketplace wallets, and usage-based billing."
              actions={
                <a
                  className="text-sm underline underline-offset-4"
                  href="/projects/credit-ledger"
                >
                  Case study
                </a>
              }
            >
              Reference implementation of a double-entry credit ledger with CQRS, transactional outbox, and idempotent
              consumers—designed as a starting point for subscription/usage platforms.
              <div className="mt-3 flex flex-wrap gap-2">
                {['Go', 'Postgres', 'Kafka/Redpanda', 'Jaeger', 'Grafana', 'Docker'].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
            <Card
              title="Retail AI – Polyglot Search & Feature Router"
              subtitle="A unified high-performance architecture: Go for orchestration, Python for intelligence, and an AI Feature Router for cost control."
              actions={
                <a
                  className="text-sm underline underline-offset-4"
                  href="/projects/ai-feature-router"
                >
                  Case study
                </a>
              }
            >
              A production-grade retail discovery engine solving "zero results" via Hybrid Search (Dense + Sparse). 
              Features a custom AI Feature Router to cut cloud inference costs by 90% while maintaining sub-100ms latency.
              <div className="mt-3 flex flex-wrap gap-2">
                {['Qdrant', 'FastAPI', 'Hybrid Search', 'OpenTelemetry', 'Python', 'Docker'].map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
            <Card
              title="LearnPath – Agentic Workflow Orchestrator"
              subtitle="A reference architecture for reliable AI agents implementing Planner-Executor patterns and Structured Outputs."
              actions={
                <a
                  className="text-sm underline underline-offset-4"
                  href="/projects/agentic-elearning"
                >
                  Case study
                </a>
              }
            >
              A reference architecture for reliable AI agents. Implements the <strong>Planner-Executor pattern</strong> to decompose goals into verified steps and uses <strong>Structured Outputs</strong> to prevent hallucinations—bridging the gap between Python prototypes and Go production systems.
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
