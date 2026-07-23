import type { ProjectDecision } from '@/types/project'

type KeyDecisionsProps = {
  items: ProjectDecision[]
}

export default function KeyDecisions({ items }: KeyDecisionsProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={item.title}>
          <h4 className="mb-2 text-lg font-semibold text-cyan-400">
            {index + 1}. {item.title}
          </h4>
          <p className="text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
