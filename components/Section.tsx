import type { ReactNode } from 'react'

export default function Section({ id, title, children, eyebrow, className }: { id?: string; title: ReactNode; children: ReactNode; eyebrow?: string; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-12 ${className ?? ''}`}>
      {eyebrow && <div className="text-xs uppercase tracking-widest text-ink-muted mb-2">{eyebrow}</div>}
      <h2 className="h2 font-bold tracking-tight text-ink">{title}</h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  )
}
