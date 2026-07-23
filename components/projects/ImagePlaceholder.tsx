import Image from 'next/image'

type ImagePlaceholderProps = {
  alt: string
  caption?: string
  heightClass?: string
  label: string
  src?: string
}

export default function ImagePlaceholder({
  alt,
  caption,
  heightClass = 'h-64',
  label,
  src,
}: ImagePlaceholderProps) {
  return (
    <div className="rounded-lg bg-slate-800 p-6 text-center">
      <p className="mb-4 text-gray-400">{label}</p>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded border border-slate-700 bg-slate-700 ${heightClass}`}
      >
        {src ? (
          <Image alt={alt} className="object-cover" fill src={src} unoptimized />
        ) : (
          <span className="px-4 text-gray-500">{caption ?? `${alt} placeholder`}</span>
        )}
      </div>
    </div>
  )
}
