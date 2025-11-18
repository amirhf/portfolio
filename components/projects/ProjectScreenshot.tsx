import Image from 'next/image'

export default function ProjectScreenshot({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="mt-4 space-y-2">
      <div className="overflow-hidden rounded-2xl border border-line bg-black/60 shadow-card">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>
      {caption && <figcaption className="text-xs text-ink-muted">{caption}</figcaption>}
    </figure>
  )
}
