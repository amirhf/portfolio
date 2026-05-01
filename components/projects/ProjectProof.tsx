import type { ReactNode } from 'react'
import Badge from '@/components/Badge'

export function ProjectServiceTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  )
}

export function ProjectOutcomes({
  children,
}: {
  children: ReactNode
}) {
  return <div className="grid gap-3 md:grid-cols-3">{children}</div>
}

export function ProjectOutcome({
  label,
  value,
  children,
}: {
  label: string
  value: string
  children?: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-ink-muted">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-ink">{value}</div>
      {children && <div className="mt-2 text-sm leading-relaxed text-ink-muted">{children}</div>}
    </div>
  )
}
