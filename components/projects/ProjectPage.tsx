import Link from 'next/link'
import type { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProjectPage({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="space-y-10">
          <div className="mb-2 text-sm">
            <Link
              href="/case-studies"
              className="text-ink-muted hover:text-ink underline underline-offset-4"
            >
              Back to case studies
            </Link>
          </div>
          {children}
          <section className="rounded-2xl border border-line bg-surface p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-ink">Need help with a similar system?</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  Share the product goal, technical risk, and timeline. We will map the right next step from there.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl bg-brand px-4 py-2 text-sm font-medium text-black hover:brightness-110 focus-visible:ring-2 ring-brand/60 outline-none"
              >
                Start a project
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
