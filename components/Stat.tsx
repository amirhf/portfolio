export default function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-zinc-900/40 border border-zinc-800 px-4 py-3">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
    </div>
  )
}
