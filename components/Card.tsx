export default function Card({ title, subtitle, children, actions }: { title: string; subtitle?: string; children?: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold leading-tight text-ink">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children && <div className="mt-4 text-sm text-ink-muted">{children}</div>}
    </div>
  )
}
