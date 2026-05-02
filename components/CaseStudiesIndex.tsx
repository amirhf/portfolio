import Image from 'next/image'
import Section from '@/components/Section'
import Badge from '@/components/Badge'

const caseStudies = [
  {
    href: '/projects/microsoft-photos-ai',
    title: 'Editor AI for Windows Photos',
    summary: 'Local-first, cloud-assisted AI editing for tens of millions of Windows users.',
    image: '/images/projects/win-photos.webp',
    outcome: '+20% monthly active users after launch',
    serviceTags: ['AI Product Integration', 'Cloud & Data'],
    category: 'Industry Work',
  },
  {
    href: '/projects/property-finder-credits',
    title: 'Property Finder - Listings & Credits Reliability',
    summary:
      'Credits, subscriptions, and listing-publish reliability work that clarified ownership, reduced recurring failures, and improved operational visibility.',
    image: '/images/projects/pf-credits.png',
    outcome: '-50%+ support tickets in credits/subscriptions flows',
    serviceTags: ['Distributed Systems', 'Cloud & Data'],
    category: 'Industry Work',
  },
  {
    href: '/projects/aws',
    title: 'Amazon RDS & AWS Marketplace',
    summary:
      'Managed SQL Server configuration surfaces and seller reporting pipelines focused on secure defaults, ETL reliability, and debuggability.',
    image: '/images/projects/aws.webp',
    outcome: 'Managed SQL Server features and seller reporting reliability',
    serviceTags: ['Cloud & Data', 'Principal Engineering'],
    category: 'Industry Work',
  },
  {
    href: '/projects/credit-ledger',
    title: 'Fintech Core: Credit Ledger',
    summary: 'Production-ready reference architecture for SaaS credits, marketplace wallets, and usage-based billing.',
    image: '/images/projects/ledger.webp',
    outcome: 'Double-entry financial core with traceable flows',
    serviceTags: ['Distributed Systems', 'Cloud & Data'],
    category: 'Reference Architectures',
  },
  {
    href: '/projects/ai-feature-router',
    title: 'Retail AI - Hybrid Search Engine & Feature Router',
    summary:
      'A scalable e-commerce discovery architecture combining Qdrant-powered hybrid search with a latency-aware AI routing mesh.',
    image: '/images/projects/image-search.jpg',
    outcome: 'Sub-100ms target latency with cost-aware routing',
    serviceTags: ['AI Product Integration', 'Distributed Systems'],
    category: 'Reference Architectures',
  },
  {
    href: '/projects/agentic-elearning',
    title: 'LearnPath - Agentic Workflow Orchestrator',
    summary:
      'A production-ready blueprint for deterministic AI agents: planner-executor patterns, structured outputs, and polyglot microservices.',
    image: '/images/projects/learning-path.png',
    outcome: 'Structured agent outputs with grounded RAG',
    serviceTags: ['AI Product Integration', 'Distributed Systems'],
    category: 'Reference Architectures',
  },
]

const categories = [
  {
    title: 'Industry Work',
    description:
      'Employment and production-scale work that shows the founder experience behind AandZ.tech engagements.',
  },
  {
    title: 'Reference Architectures',
    description:
      'Implementation-quality examples that show how we think about architecture, reliability, AI workflows, and handover.',
  },
]

export default function CaseStudiesIndex() {
  return (
    <Section eyebrow="Case Studies" title="Proof across AI, cloud, and distributed systems">
      <div className="space-y-10">
        <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
          Selected work and reference architectures that map directly to AandZ.tech services: practical AI product
          integration, distributed systems reliability, cloud/data architecture, and principal-level engineering
          support.
        </p>

        {categories.map((category) => {
          const headingId = category.title.replace(/\s+/g, '-').toLowerCase()

          return (
            <section key={category.title} aria-labelledby={headingId}>
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 id={headingId} className="text-xl font-semibold text-ink">
                    {category.title}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-muted">{category.description}</p>
                </div>
              </div>

              <ul className="grid gap-6 md:grid-cols-3">
                {caseStudies
                  .filter((item) => item.category === category.title)
                  .map((item) => (
                    <li
                      key={item.href}
                      className="rounded-2xl border border-line bg-surface p-4 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <a href={item.href} className="block">
                        <div className="mb-4 aspect-[1200/630] overflow-hidden rounded-xl border border-line">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={1200}
                            height={630}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-semibold leading-tight text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm font-medium text-ink">{item.outcome}</p>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.summary}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.serviceTags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                          ))}
                        </div>
                      </a>
                    </li>
                  ))}
              </ul>
            </section>
          )
        })}
      </div>
    </Section>
  )
}
