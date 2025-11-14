const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-bg/60 border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-surface ring-1 ring-line flex items-center justify-center text-xs text-ink">AF</div>
          <div className="font-medium tracking-tight">Amir Firouz · Portfolio</div>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-lg px-3 py-1.5 text-ink-muted hover:text-ink hover:bg-white/5">
              {n.label}
            </a>
          ))}
          <a
            href="/contact"
            className="rounded-lg bg-brand text-black px-3 py-1.5 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  )
}
