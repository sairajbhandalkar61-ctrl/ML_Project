import React, { useEffect } from 'react';
import { X, ArrowUpRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#EDE9DF]/95 backdrop-blur-md p-4 sm:p-8 flex justify-center animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl bg-[#F4F1E9] hairline-all p-6 sm:p-12 my-auto shadow-2xl text-[#111111] space-y-10">
        {/* Modal Top Controls */}
        <div className="flex items-center justify-between border-b border-[#111111]/20 pb-4">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
            <span className="text-accent-orange font-bold">{project.number}</span>
            <span className="text-[#77736B]">// CASE STUDY DOSSIER</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest py-1.5 px-3 hairline-all hover:bg-[#111111] hover:text-[#EDE9DF] transition-colors"
            aria-label="Close case study"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header Block: Title & Category */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold">
            {project.category}
          </span>
          <h2
            id="case-study-title"
            className="font-serif text-4xl sm:text-6xl font-light text-[#111111]"
          >
            {project.title}
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#77736B] italic">
            “{project.description}”
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#111111]/15">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-[#EDE9DF] p-4 hairline-all">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#77736B] block">
                {m.label}
              </span>
              <span className="font-serif text-xl sm:text-2xl font-semibold text-[#111111]">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#111111]/15">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-light text-[#111111]">
              THE PROBLEM
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#111111]/80 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-light text-[#111111]">
              THE ENGINEERED SOLUTION
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#111111]/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 6-Stage Architecture Blueprint */}
        <div className="space-y-6 pt-6 border-t border-[#111111]/15">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
              {project.architecture.title}
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-[#77736B]">
              END-TO-END METHODOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.architecture.steps.map((step, idx) => (
              <div key={step} className="bg-[#EDE9DF] p-4 hairline-all space-y-2">
                <span className="font-mono text-xs text-accent-orange font-bold">
                  STEP 0{idx + 1}
                </span>
                <p className="font-sans text-xs text-[#111111]/80 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-[#111111]/15">
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736B] block">
              TECHNOLOGIES DEPLOYED:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#EDE9DF] hairline-all font-mono text-[11px] uppercase tracking-wider text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 bg-[#111111] text-[#EDE9DF] font-mono text-xs uppercase tracking-widest hover:bg-accent-orange transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB REPO</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 hairline-all font-mono text-xs uppercase tracking-widest text-[#111111] hover:bg-[#EDE9DF] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>LIVE SYSTEM</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
