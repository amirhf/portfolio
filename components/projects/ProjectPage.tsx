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
              href="/projects"
              className="text-ink-muted hover:text-ink underline underline-offset-4"
            >
              ← Back to projects
            </Link>
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
