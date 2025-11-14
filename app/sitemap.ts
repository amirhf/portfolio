import { site } from '@/lib/seo'
import { getAllPostMeta } from '@/lib/mdx'

export default function sitemap() {
  const base = site.url.replace(/\/$/, '')
  const routes = ['', '/projects', '/services', '/writing', '/about', '/contact'].map((r) => ({
    url: base + r,
    lastModified: new Date().toISOString(),
  }))
  const posts = getAllPostMeta().map((p) => ({
    url: `${base}/writing/${p.slug}`,
    lastModified: p.date || new Date().toISOString(),
  }))
  return [...routes, ...posts]
}
