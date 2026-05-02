export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-xs text-ink-muted">
      <div>© {new Date().getFullYear()} AandZ.tech. A&amp;Z Technology Solutions.</div>
      <div className="mt-2">
        Project inquiries:{' '}
        <a className="underline underline-offset-4 hover:text-ink" href="mailto:hello@aandz.tech">
          hello@aandz.tech
        </a>
      </div>
    </footer>
  )
}
