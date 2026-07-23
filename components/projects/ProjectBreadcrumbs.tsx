import Link from 'next/link'

type ProjectBreadcrumbsProps = {
  title: string
}

export default function ProjectBreadcrumbs({ title }: ProjectBreadcrumbsProps) {
  return (
    <div className="border-b border-slate-800 bg-black px-4 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link className="hover:text-white" href="/#projects">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">{title}</li>
          </ol>
        </nav>

        <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/#projects">
          ← Back to projects
        </Link>
      </div>
    </div>
  )
}
