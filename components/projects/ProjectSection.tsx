import type { ReactNode } from 'react'

export default function ProjectSection({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow?: string
  children: ReactNode
}) {
  return (
    <section className="space-y-4">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-ink-muted">{eyebrow}</div>
      )}
      <h2 className="h2 font-semibold text-ink">{title}</h2>
      <div className="space-y-3 text-sm md:text-base text-ink-muted">{children}</div>
    </section>
  )
}
