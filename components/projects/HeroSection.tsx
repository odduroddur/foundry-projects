import ImagePlaceholder from '@/components/projects/ImagePlaceholder'
import type { Project } from '@/types/project'

type HeroSectionProps = {
  project: Project
}

export default function HeroSection({ project }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {project.category}
        </p>
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">{project.hero.title}</h1>
        <p className="mb-8 max-w-3xl text-xl text-gray-300">
          {project.hero.description}
        </p>

        <div className="space-y-6">
          {project.hero.media.map((item) => (
            <ImagePlaceholder
              key={item.label}
              alt={item.alt}
              caption={item.caption}
              heightClass={item.heightClass}
              label={item.label}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
