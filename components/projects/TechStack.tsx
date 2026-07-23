type TechStackProps = {
  items: string[]
}

export default function TechStack({ items }: TechStackProps) {
  return (
    <section className="bg-slate-900 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold">Tools & Technologies</h2>
        <div className="rounded-lg bg-slate-800 p-6">
          <div className="flex flex-wrap gap-3">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
