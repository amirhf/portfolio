const faqs = [
  {
    question: 'How does the small specialist studio model work?',
    answer:
      'AandZ.tech stays senior and focused. Amir leads the technical direction and implementation, then brings in trusted specialists only when a project needs added capacity.',
  },
  {
    question: 'What project sizes are a fit?',
    answer:
      'The best fit is a focused delivery window: architecture reviews, AI MVPs, production hardening, service-boundary work, or fractional principal engineer support.',
  },
  {
    question: 'Can you work with our existing engineering team?',
    answer:
      'Yes. Most engagements are designed to support an internal product or platform team with design docs, implementation help, review habits, and clear handover.',
  },
  {
    question: 'Do you implement or only advise?',
    answer:
      'Both. We can advise on architecture, but the strongest fit is hands-on work where strategy, implementation, testing, observability, and handover stay connected.',
  },
]

export default function FAQ() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((item) => (
        <details key={item.question} className="rounded-2xl border border-line bg-surface p-5">
          <summary className="cursor-pointer text-sm font-semibold text-ink">{item.question}</summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
