import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { getAllPostMeta } from '@/lib/mdx'

export default function Writing() {
  const posts = getAllPostMeta()
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section title="Writing">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <Card
                key={p.slug}
                title={p.title}
                subtitle={p.description || p.date}
                actions={
                  <a
                    className="text-sm underline underline-offset-4"
                    href={p.externalUrl || `/writing/${p.slug}`}
                    target={p.externalUrl ? '_blank' : undefined}
                    rel={p.externalUrl ? 'noreferrer' : undefined}
                  >
                    Read
                  </a>
                }
              >
                {p.tags && p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink-muted">
                    {p.tags.map((t) => (
                      <span key={t}>#{t}</span>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
