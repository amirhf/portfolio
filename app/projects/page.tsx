import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function Projects() {
  const items = [
    {
      href: '/projects/agentic-elearning',
      title: 'LearnPath – Agentic AI Learning Path Designer',
      summary: 'AI-powered app that designs personalized learning paths, curates resources with RAG, and generates grounded quizzes with citations.',
      image: '/images/projects/learning-path.png',
    },
    {
      href: '/projects/microsoft-photos-ai',
      title: 'Editor AI for Windows Photos',
      summary: 'Local-first, cloud-assisted AI editing for tens of millions of Windows users.',
      image: '/images/projects/win-photos.webp',
    },
    {
      href: '/projects/credit-ledger',
      title: 'Credit Ledger – Event-Driven Double-Entry Ledger with CQRS & Outbox',
      summary: 'Production-style wallet backend that uses double-entry accounting, Kafka + transactional outbox, CQRS read models, and end-to-end observability to guarantee safe money movement under retries and failures.',
      image: '/images/projects/ledger.png',
    },
    {
      href: '/projects/ai-feature-router',
      title: 'Local-First Image Search – AI Feature Router for Captions & Similarity',
      summary: 'Full-stack image library that captions photos and powers text-to-image and image-to-image search using a local-first AI feature router with vector search and cloud fallback.',
      image: '/images/projects/image-search.jpg',
    },
    {
      href: '',
      title: 'Property Finder – Listings & Credits Reliability',
      summary: 'At Property Finder I focused on making the listings publish and subscriptions/credits flows reliable at scale. I cut support tickets by more than 50% by clarifying ownership and rules, fixing root-cause failures, and simplifying error paths. I also led the move from a single codebase to services with clear contracts and added dashboards/alerts so on-call engineers can spot and resolve incidents faster.',
      image: '/images/projects/pf-credits.png',
    },
    {
      href: '/projects/aws',
      title: 'Amazon RDS & AWS Marketplace – Managed SQL Server and Seller Reporting',
      summary: 'Engineering work on Amazon RDS for SQL Server (TLS/cipher configuration, linked servers design, SSAS hardening) and AWS Marketplace seller reporting.Focused on secure configuration surfaces, collaboration with DB engineers, and making ETL/reporting pipelines reliable and debuggable for large SaaS sellers.',
      image: '/images/projects/aws.webp',
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
