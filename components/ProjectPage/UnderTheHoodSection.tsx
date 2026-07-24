'use client';

import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Section 3: Under the Hood</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Architecture Diagram</h3>
          <div className="bg-slate-800 rounded-lg p-6 w-full cursor-pointer hover:bg-slate-700 transition" 
               style={{ minHeight: '600px', overflowX: 'auto' }}
               onClick={() => setIsModalOpen(true)}>
            <img 
              src="https://raw.githubusercontent.com/odduroddur/foundry-projects/main/app/asteroid-watch/08%20Architecture%20Diagram.svg" 
              alt="Architecture Diagram"
              style={{ maxHeight: '100%', width: 'auto' }}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="bg-slate-800 rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-400">Architecture Diagram</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              <img 
                src="https://raw.githubusercontent.com/odduroddur/foundry-projects/main/app/asteroid-watch/08%20Architecture%20Diagram.svg" 
                alt="Architecture Diagram"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        )}

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
