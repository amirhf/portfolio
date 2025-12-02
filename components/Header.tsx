"use client"

import { useState } from 'react'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-bg/60 border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-surface ring-1 ring-line flex items-center justify-center text-xs text-ink">AF</div>
            <div className="font-medium tracking-tight">Amir Firouz · Portfolio</div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-1.5 text-ink-muted hover:text-ink hover:bg-white/5"
              >
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

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-line px-2 py-1 text-xs text-ink bg-surface hover:bg-white/5"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-[3px]">
              <span
                className={`block h-[2px] w-4 rounded bg-ink transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`block h-[2px] w-4 rounded bg-ink transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`block h-[2px] w-4 rounded bg-ink transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile nav menu */}
        {open && (
          <nav className="mt-3 space-y-1 md:hidden text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="block rounded-lg px-3 py-2 text-ink-muted hover:text-ink hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-brand text-black px-3 py-2 text-sm font-medium hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
            >
              Book a call
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
