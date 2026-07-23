'use client';

interface WhatWhySectionProps {
  problem: string;
  solution: string[];
  impact: string[];
}

export default function WhatWhySection({ problem, solution, impact }: WhatWhySectionProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Section 1: What & Why</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">The Problem</h3>
          <p className="text-gray-300 leading-relaxed">{problem}</p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">The Solution</h3>
          <p className="text-gray-300 mb-4">An end-to-end early warning system that:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            {solution.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">The Impact</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            {impact.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}