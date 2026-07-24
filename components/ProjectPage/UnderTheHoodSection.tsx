'use client';

import { TechStackItem, KeyDecision } from '@/lib/projects';

interface UnderTheHoodSectionProps {
  architectureDiagramSvg: string;
  techStack: TechStackItem[];
  keyDecisions: KeyDecision[];
}

export default function UnderTheHoodSection({
  architectureDiagramSvg,
  techStack,
  keyDecisions,
}: UnderTheHoodSectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Section 3: Under the Hood</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Architecture Diagram</h3>
          <div className="bg-slate-800 rounded-lg p-6 overflow-x-auto">
            <div dangerouslySetInnerHTML={{ __html: architectureDiagramSvg }} />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Technology Stack</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-2 font-semibold text-cyan-400">Layer</th>
                  <th className="px-4 py-2 font-semibold text-cyan-400">Technology</th>
                  <th className="px-4 py-2 font-semibold text-cyan-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((item, i) => (
                  <tr key={i} className="border-b border-slate-800">
                    <td className="px-4 py-3">{item.layer}</td>
                    <td className="px-4 py-3">{item.technology}</td>
                    <td className="px-4 py-3">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Key Technical Decisions</h3>
          <div className="space-y-6">
            {keyDecisions.map((decision, i) => (
              <div key={i}>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">{decision.title}</h4>
                <p className="text-gray-300">{decision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}