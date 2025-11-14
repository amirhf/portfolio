import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Section title="Page not found" eyebrow="404">
          <p className="text-zinc-300">
            This page doesn&apos;t exist or may have moved. Use the navigation above to find your way.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
