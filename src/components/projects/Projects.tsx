import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../../types/portfolio';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative w-full bg-[#EDE9DF] text-[#111111] hairline-b"
      aria-label="Selected Projects"
    >
      {/* Section Global Header */}
      <div className="py-16 px-6 sm:px-10 hairline-b max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold block mb-2">
            03 / PORTFOLIO CENTERPIECE
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#111111]">
            FEATURED WORKS
          </h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-[#77736B] max-w-md">
          EACH PROJECT CONSTITUTES AN ART-DIRECTED ARCHITECTURAL CHAPTER FROM RAW DATA TO CLINICAL & PREDICTIVE SYSTEMS.
        </p>
      </div>

      {/* Project Viewport Chapters */}
      <div className="w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={(proj) => setActiveProject(proj)}
          />
        ))}
      </div>

      {/* Dedicated Deep Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
