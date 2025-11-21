import fs from 'node:fs'
import path from 'node:path'

export type PostMeta = {
  slug: string
  title: string
  description?: string
  date?: string
  tags?: string[]
  externalUrl?: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export function parseFrontmatter(src: string) {
  if (!src.startsWith('---')) return [{}, src] as const
  const end = src.indexOf('---', 3)
  if (end === -1) return [{}, src] as const
  const raw = src.slice(3, end).trim()
  const body = src.slice(end + 3)
  const meta: Record<string, any> = {}
  for (const line of raw.split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/)
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
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))
  const all = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const src = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
    const [meta] = parseFrontmatter(src)
    return {
      slug,
      title: (meta as any).title ?? slug,
      description: (meta as any).description ?? '',
      date: (meta as any).date ?? '',
      tags: Array.isArray((meta as any).tags) ? (meta as any).tags : [],
      externalUrl: (meta as any).externalUrl || undefined,
    } as PostMeta
  })
  return all.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

export function getPostContent(slug: string) {
  const fp = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fp)) return null
  const src = fs.readFileSync(fp, 'utf8')
  const [meta, body] = parseFrontmatter(src)
  return { meta: meta as Record<string, any>, body }
}
