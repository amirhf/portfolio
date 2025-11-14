import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import { getAllPostMeta, getPostContent } from '@/lib/mdx'

export async function generateStaticParams() {
  return getAllPostMeta().map((p) => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const all = getAllPostMeta()
  const meta = all.find((p) => p.slug === params.slug)
  if (!meta) return notFound()
  const content = getPostContent(params.slug)
  if (!content) return notFound()
  const paragraphs = content.body.trim().split(/\n\s*\n/)

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4">
        <Section title={meta.title} eyebrow={meta.date}>
          <article className="prose">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </article>
        </Section>
      </main>
      <Footer />
    </>
  )
}
