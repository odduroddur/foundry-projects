'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: 'Spotify Analysis',
    category: 'Data Analysis',
    description: 'Built with Palantir Foundry - Comprehensive music consumption analytics and listener insights platform',
    image: '🎵',
    link: '/projects/spotify-analysis',
  },
  {
    id: 2,
    title: 'Asteroid Watch',
    category: 'Space Tech',
    description: 'Near-Earth Object Early Warning System - Real-time tracking and trajectory analysis powered by Palantir Foundry',
    image: '🪨',
    link: '/projects/asteroid-watch',
  },
  {
    id: 3,
    title: 'Project Request App',
    category: 'Web App',
    description: 'Streamlined application for managing project requests with data integration via Palantir Foundry',
    image: '📋',
    link: '/projects/project-request-app',
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
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          My Projects
        </h2>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-secondary border border-gray-300 hover:bg-gray-100'
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