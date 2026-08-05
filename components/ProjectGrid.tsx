'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: 'Project Request App',
    category: 'Web App',
    description: 'A self-service workflow app where employees request Foundry projects, admins approve with one click, and projects are automatically created with the correct permissions assigned.',
    image: 'https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/components/03%20Project%20Request%20Hero.png',
    link: '/project-request-app',
  },
  {
    id: 2,
    title: 'Asteroid Watch',
    category: 'Space Tech',
    description: 'A real-time asteroid monitoring dashboard that pulls live data from NASA, detects close approaches, and sends AI-powered email alerts when space rocks get too close for comfort.',
    image: 'https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/components/02%20Asteroid%20Hero.png',
    link: '/asteroid-watch',
  },
  {
    id: 3,
    title: 'Spotify Analysis',
    category: 'Data Analysis',
    description: 'A full-stack analytics platform that transforms raw Spotify listening history into an interactive dashboard with AI-powered genre classification, smart recommendations, and a conversational chatbot.',
    image: 'https://raw.githubusercontent.com/odduroddur/foundry-projects/refs/heads/main/components/01%20Spotify%20Hero.png',
    link: '/spotify-analysis',
  },
];

const CATEGORIES = ['All', ...new Set(SAMPLE_PROJECTS.map((p) => p.category))];

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? SAMPLE_PROJECTS
      : SAMPLE_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary text-center mb-2">Palantir Foundry Projects</h2>
        <p className="text-sm text-gray-400 text-center mb-12">
          End-to-end projects — from raw data to interactive AI-powered applications
        </p>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-secondary text-white'
                  : 'text-gray-400 hover:text-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={project.link}>
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
