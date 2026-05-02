import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CaseStudiesIndex from '@/components/CaseStudiesIndex'

export const metadata: Metadata = {
  title: 'Case Studies | AandZ.tech',
  description:
    'Selected AandZ.tech case studies across AI product integration, distributed systems, cloud architecture, and marketplace reliability.',
}

export default function CaseStudies() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <CaseStudiesIndex />
      </main>
      <Footer />
    </>
  )
}
