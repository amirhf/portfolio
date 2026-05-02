const organizations = ['Microsoft', 'AWS', 'Property Finder', 'DataGardens']

export default function FounderExperienceStrip() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-muted">Founder experience includes</div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Career experience from Amir Firouzmanesh. These are background credentials, not current clients,
            partnerships, or endorsements of AandZ.tech.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:min-w-[420px]">
          {organizations.map((organization) => (
            <div
              key={organization}
              className="rounded-xl border border-line bg-bg px-3 py-2 text-center text-sm font-semibold tracking-tight text-ink"
            >
              {organization}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
