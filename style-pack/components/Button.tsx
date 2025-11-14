
export default function Button({
  children, variant='brand', className='', ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'brand'|'outline' }) {
  const base = "relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:ring-2 ring-brand/60 outline-none group"
  const brand = "bg-brand text-black hover:brightness-110"
  const outline = "border border-line text-ink hover:border-ink/40 hover:bg-white/5"
  return (
    <button {...props} className={[base, variant==='brand'?brand:outline, className].join(' ')}>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition group-hover:translate-x-full" />
    </button>
  )
}
