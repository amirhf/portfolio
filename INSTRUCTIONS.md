
# Integration Instructions: Vercel-style Portfolio + Blog (keep current structure)

This guide updates your existing **Next.js App Router + Tailwind + MDX** starter to add a professional blog and a few SEO niceties similar to Vercel’s portfolio/blog starters — **without** scrapping your current pages/components.

> Hand this file to a coding tool session (e.g., Claude Code / Copilot / Cursor) and execute the steps **in order**. All changes are additive or surgical, so your Projects/Services/About/Contact remain intact.

---

## 0) Repo state (assumptions)
You’re starting from the zip I generated earlier. The repo already has:
- Next.js 14 App Router
- Tailwind
- MDX enabled
- Pages: `/`, `/projects`, `/projects/* (MDX)`, `/services`, `/writing`, `/about`, `/contact`

We will **augment** `/writing` into a proper blog index and add:
- MDX-powered posts in `content/posts/*`
- `app/writing/[slug]/page.mdx` auto-routing
- `generateStaticParams` + simple frontmatter
- SEO: `sitemap.xml`, `robots.txt`, basic JSON-LD helper
- OG image placeholder per-post (optional)

---

## 1) Install any missing deps (safe re-run)
```bash
# in repo root
pnpm add @types/node @types/react @next/mdx
# already present in your starter; safe to re-run if needed
```

> If you plan to add RSS later: `pnpm add feed gray-matter`.

---

## 2) Add content directory and example posts
Create `content/posts/` with two sample posts.

**Create: `content/posts/local-first-ai.mdx`**
```mdx
---
title: Local‑first AI with Cloud Fallback
description: Balancing latency, privacy, and quality for photo editing features.
date: 2025-01-10
tags: [genai, policy, inference]
---

Local‑first inference keeps latency predictable and protects privacy. When quality thresholds demand, a cloud fallback runs with explicit policy gates...
```

**Create: `content/posts/outbox-idempotency.mdx`**
```mdx
---
title: Transactional Outbox + Idempotent Consumers
description: Production-grade eventing with Go + Postgres.
date: 2025-02-02
tags: [cqrs, outbox, postgres, go]
---

Why outbox? Because distributed systems drop messages. This pattern preserves atomicity...
```

---

## 3) Blog helpers — parse frontmatter & enumerate posts
**Create: `lib/mdx.ts`**
```ts
import fs from 'node:fs'
import path from 'node:path'

export type PostMeta = {
  slug: string
  title: string
  description?: string
  date?: string
  tags?: string[]
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

function parseFrontmatter(src: string) {
  // ultra-light frontmatter parser (no external deps)
  if (!src.startsWith('---')) return [{}, src] as const
  const end = src.indexOf('---', 3)
  if (end === -1) return [{}, src] as const
  const raw = src.slice(3, end).trim()
  const body = src.slice(end + 3)
  const meta: Record<string, any> = {}
  for (const line of raw.split('\\n')) {
    const m = line.match(/^(\\w+):\\s*(.*)$/)
    if (m) {
      const key = m[1].trim()
      let val: any = m[2].trim()
      if (val.startsWith('[') && val.endsWith(']')) {
        try { val = JSON.parse(val) } catch {}
      }
      meta[key] = val
    }
  }
  return [meta, body] as const
}

export function getAllPostMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'))
  const all = files.map(file => {
    const slug = file.replace(/\\.mdx$/, '')
    const src = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
    const [meta] = parseFrontmatter(src)
    return {
      slug,
      title: meta.title ?? slug,
      description: meta.description ?? '',
      date: meta.date ?? '',
      tags: Array.isArray(meta.tags) ? meta.tags : [],
    } as PostMeta
  })
  // newest first
  return all.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

export function getPostSource(slug: string) {
  const fp = path.join(POSTS_DIR, `${slug}.mdx`)
  return fs.readFileSync(fp, 'utf8')
}
```

---

## 4) Blog index — replace `/app/writing/page.tsx`
Turn `/writing` into a “Blog Index” that lists MDX posts.

**Patch: `app/writing/page.tsx` (REPLACE FILE)**
```tsx
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
            {posts.map(p => (
              <Card
                key={p.slug}
                title={p.title}
                subtitle={p.description || p.date}
                actions={<a className="text-sm underline underline-offset-4" href={`/writing/${p.slug}`}>Read</a>}
              >
                {p.tags && p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
                    {p.tags.map(t => <span key={t}>#{t}</span>)}
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
```

---

## 5) Dynamic blog route — `/writing/[slug]` using MDX pages
We’ll treat each post as an MDX _page source_ read at build time, but render it via a thin wrapper.

**Create: `app/writing/[slug]/page.tsx`**
```tsx
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import { getAllPostMeta, getPostSource } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  return getAllPostMeta().map(p => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const all = getAllPostMeta()
  const meta = all.find(p => p.slug === params.slug)
  if (!meta) return notFound()
  const source = getPostSource(params.slug)
  const body = source.startsWith('---') ? source.slice(source.indexOf('---', 3) + 3) : source

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4">
        <Section title={meta.title} eyebrow={meta.date}>
          <article className="prose prose-invert max-w-none">
            {/* @ts-expect-error async RSC */}
            <MDXRemote source={body} />
          </article>
        </Section>
      </main>
      <Footer />
    </>
  )
}
```

---

## 6) Minimal prose styling (optional)
Tailwind’s typography plugin improves MDX readability.

**Add dep & config (optional):**
```bash
pnpm add @tailwindcss/typography
```

**Edit: `tailwind.config.ts` — add plugin**
```ts
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx,mdx}','./components/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [typography],
}
export default config
```

**Edit: `app/globals.css` — add prose baseline**
```css
.prose { @apply prose-zinc prose-invert; }
```

---

## 7) SEO: sitemap & robots (App Router file routes)
**Create: `app/sitemap.ts`**
```ts
import { site } from '@/lib/seo'
import { getAllPostMeta } from '@/lib/mdx'

export default function sitemap() {
  const base = site.url.replace(/\/$/, '')
  const routes = ['','/projects','/services','/writing','/about','/contact'].map(r => ({
    url: base + r,
    lastModified: new Date().toISOString(),
  }))
  const posts = getAllPostMeta().map(p => ({
    url: `${base}/writing/${p.slug}`,
    lastModified: p.date || new Date().toISOString(),
  }))
  return [...routes, ...posts]
}
```

**Create: `app/robots.ts`**
```ts
import { MetadataRoute } from 'next'
import { site } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url.replace(/\\/$/,'')}/sitemap.xml`,
  }
}
```

> Ensure `lib/seo.ts` has your real `site.url` before deploy.

---

## 8) (Optional) JSON-LD helper for Article schema
**Create: `components/JsonLd.tsx`**
```tsx
export default function JsonLd({ json }: { json: Record<string, any> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}
```

Use in `app/writing/[slug]/page.tsx` if desired:
```tsx
/*
<JsonLd json={{
  '@context':'https://schema.org',
  '@type':'Article',
  headline: meta.title,
  datePublished: meta.date,
  author: { '@type': 'Person', name: 'Amir Firouz' }
}} />
*/
```

---

## 9) Keep your existing project case studies
Nothing changes under `app/projects/*/page.mdx`. They remain MDX pages and show up under Projects as before.

If you want the **Writing** card grid on Home, add a short “Latest Posts” section that consumes `getAllPostMeta().slice(0,3)`.

---

## 10) Sanity check & run
```bash
pnpm dev
# visit /writing -> index
# visit /writing/local-first-ai -> post
# visit /sitemap.xml and /robots.txt
```

---

## 11) Future niceties (optional)
- **RSS feed** using `feed` + `gray-matter` (switch from lightweight parser if needed).
- **OG Images per post**: add `app/og/[slug]/route.tsx` with Satori or use a static image field in frontmatter.
- **Contentlayer** if you want a typed content pipeline (more setup, more power).

---

## 12) Summary (what changed)
- Added `content/posts/*` MDX content + minimal frontmatter
- Upgraded `/writing` to a blog index listing posts
- Added dynamic post route `/writing/[slug]` rendering MDX
- Added `sitemap.ts` + `robots.ts`
- Optional typography plugin + JSON-LD

Everything else stays the same (Home/Projects/Services/About/Contact). This matches the “Vercel portfolio-with-blog” spirit while preserving your current IA and components.
