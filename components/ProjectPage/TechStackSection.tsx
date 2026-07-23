'use client';

interface TechStackSectionProps {
  technologies: string[];
}

export default function TechStackSection({ technologies }: TechStackSectionProps) {
  return (
    <section className="bg-slate-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
        <div className="bg-slate-800 rounded-lg p-6">
          <p className="text-gray-300 leading-relaxed">{technologies.join(' · ')}</p>
        </div>
      </div>
    </section>
  );
}