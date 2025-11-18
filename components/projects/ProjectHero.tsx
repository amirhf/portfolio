import type { ReactNode } from 'react'

export default function ProjectHero({
  title,
  tagline,
  children,
}: {
  title: string
  tagline: string
  children?: ReactNode
}) {
  return (
    <section className="rounded-3xl border border-line bg-surface/80 px-6 py-8 shadow-card backdrop-blur">
      <div className="space-y-4">
        <div className="text-xs uppercase tracking-[0.2em] text-ink-muted">Case Study</div>
        <h1 className="h1 font-semibold text-ink">{title}</h1>
        <p className="max-w-2xl text-sm font-medium text-ink">{tagline}</p>
        {children && <div className="mt-4 space-y-4 text-sm md:text-base text-ink-muted">{children}</div>}
      </div>
    </section>
  )
}
