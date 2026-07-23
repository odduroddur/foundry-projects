import ImagePlaceholder from '@/components/projects/ImagePlaceholder'
import KeyDecisions from '@/components/projects/KeyDecisions'
import type {
  ProjectFeatureListBlock,
  ProjectImageBlock,
  ProjectSection as ProjectSectionType,
  ProjectTableBlock,
  ProjectTextBlock,
} from '@/types/project'

type ProjectSectionProps = {
  section: ProjectSectionType
}

function TextBlock({ block }: { block: ProjectTextBlock }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-blue-400">{block.title}</h3>
      {block.description ? <p className="text-gray-300">{block.description}</p> : null}
      {block.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="leading-relaxed text-gray-300">
          {paragraph}
        </p>
      ))}
      {block.bullets ? (
        <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
          {block.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function ImageBlock({ block }: { block: ProjectImageBlock }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-blue-400">{block.title}</h3>
      {block.description ? <p className="text-gray-300">{block.description}</p> : null}
      <ImagePlaceholder
        alt={block.image.alt}
        caption={block.image.caption}
        heightClass={block.image.heightClass}
        label={block.image.label}
        src={block.image.src}
      />
    </div>
  )
}

function FeatureListBlock({ block }: { block: ProjectFeatureListBlock }) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-blue-400">{block.title}</h3>
      <div className="space-y-8">
        {block.items.map((item) => (
          <div key={item.title}>
            <h4 className="mb-3 text-lg font-semibold text-cyan-400">{item.title}</h4>
            <p className="mb-4 text-gray-300">{item.description}</p>
            <ImagePlaceholder
              alt={item.image.alt}
              caption={item.image.caption}
              heightClass={item.image.heightClass}
              label={item.image.label}
              src={item.image.src}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function TableBlock({ block }: { block: ProjectTableBlock }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-blue-400">{block.title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="border-b border-slate-700">
              {block.columns.map((column) => (
                <th key={column} className="px-4 py-2 font-semibold text-cyan-400">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, index) => (
              <tr
                key={`${row.layer}-${row.technology}`}
                className={index === block.rows.length - 1 ? '' : 'border-b border-slate-800'}
              >
                <td className="px-4 py-3">{row.layer}</td>
                <td className="px-4 py-3">{row.technology}</td>
                <td className="px-4 py-3">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ProjectSection({ section }: ProjectSectionProps) {
  const sectionClassName =
    section.background === 'dark' ? 'bg-slate-900' : 'bg-black'

  return (
    <section className={`${sectionClassName} px-4 py-16`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold">{section.title}</h2>
        <div className="space-y-12">
          {section.blocks.map((block) => {
            switch (block.kind) {
              case 'text':
                return <TextBlock key={block.title} block={block} />
              case 'image':
                return <ImageBlock key={block.title} block={block} />
              case 'features':
                return <FeatureListBlock key={block.title} block={block} />
              case 'table':
                return <TableBlock key={block.title} block={block} />
              case 'decisions':
                return (
                  <div key={block.title} className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-400">{block.title}</h3>
                    <KeyDecisions items={block.items} />
                  </div>
                )
            }
          })}
        </div>
      </div>
    </section>
  )
}
