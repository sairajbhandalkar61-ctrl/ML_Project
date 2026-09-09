import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const isSkinnova = project.id === 'skinnova';

  return (
    <article
      data-cursor-project="true"
      className="relative w-full min-h-[85vh] flex flex-col justify-between p-6 sm:p-12 hairline-b bg-[#EDE9DF] text-[#111111] overflow-hidden group"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Top Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#111111]/20">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-accent-orange">
            {project.number}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736B]">
            {project.category}
          </span>
        </div>

        <button
          onClick={() => onOpenModal(project)}
          className="self-start sm:self-auto inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#111111] hover:text-accent-orange group-hover:translate-x-1 transition-all"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Center Cinematic Composition: Title, Narrative & Interactive Visual Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
        {/* Left: Oversized Project Title & Details */}
        <div className="lg:col-span-6 space-y-6">
          <h3
            id={`project-title-${project.id}`}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#111111] uppercase leading-tightest"
          >
            {project.title}
          </h3>

          <p className="font-sans text-base sm:text-lg text-[#111111]/85 leading-relaxed max-w-xl">
            {project.description}
          </p>

          <div className="space-y-4 pt-4 border-t border-[#111111]/15">
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-[#F4F1E9] p-3 hairline-all">
                  <span className="block text-[9px] uppercase tracking-widest text-[#77736B]">
                    {m.label}
                  </span>
                  <span className="font-serif text-lg font-semibold text-[#111111]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#F4F1E9] hairline-all font-mono text-[10px] uppercase tracking-wider text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Bespoke Visual Presentation */}
        <div className="lg:col-span-6 flex justify-center">
          <div 
            onClick={() => onOpenModal(project)}
            className="w-full max-w-xl bg-[#F4F1E9] hairline-all p-4 sm:p-6 shadow-md transition-all duration-300 group-hover:shadow-xl cursor-pointer"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#111111]/15 font-mono text-[10px] uppercase tracking-widest text-[#77736B]">
              <span>INTERFACE SCHEMA // {project.id}</span>
              <span>INTERACTIVE CASE STUDY</span>
            </div>

            {/* Custom Interactive Preview Frame */}
            {isSkinnova ? (
              <div className="relative w-full aspect-[16/10] bg-[#FFFFFF] hairline-all overflow-hidden p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <img
                    src="/assets/projects/skinnova-logo.png"
                    alt="Skinnova Clinical AI Logo"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                  <span className="px-2 py-0.5 bg-[#EDE9DF] hairline-all font-mono text-[9px] tracking-widest text-accent-orange font-bold uppercase">
                    ZERO-TRUST AI
                  </span>
                </div>

                <div className="space-y-2 py-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#77736B] uppercase">
                    <span>SMART SCAN TRUST ENGINE</span>
                    <span className="text-[#111111] font-semibold">CALIBRATED</span>
                  </div>
                  <div className="w-full bg-[#EDE9DF] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-accent-orange h-full w-[94%]" />
                  </div>
                  <p className="font-serif text-sm italic text-[#111111]">
                    “Existing apps analyze a snapshot; SKINNOVA analyzes the journey.”
                  </p>
                </div>

                <div className="pt-3 border-t border-[#111111]/10 flex items-center justify-between font-mono text-[9px] text-[#77736B] uppercase">
                  <span>SCIN & DDI BENCHMARKED</span>
                  <span className="text-[#111111] underline">CLICK TO EXPAND DOSSIER →</span>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/10] bg-[#111111] text-[#EDE9DF] hairline-all overflow-hidden p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-[#EDE9DF]/15 pb-2">
                  <span className="font-mono text-[10px] text-accent-orange font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="font-mono text-[9px] text-[#EDE9DF]/60">LIVE TELEMETRY</span>
                </div>

                <div className="space-y-3 py-3">
                  <div className="font-serif text-2xl text-[#EDE9DF] italic">
                    {project.title}
                  </div>
                  <div className="space-y-1 font-mono text-[11px] text-[#EDE9DF]/70">
                    <p>• {project.architecture.steps[0]}</p>
                    <p>• {project.architecture.steps[1]}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EDE9DF]/15 flex items-center justify-between font-mono text-[9px] text-[#EDE9DF]/60 uppercase">
                  <span>DEPLOYED ON FASTAPI / STREAMLIT</span>
                  <span className="text-[#EDE9DF] underline">EXPLORE METRICS →</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Hairline Metadata */}
      <div className="pt-4 border-t border-[#111111]/15 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#77736B]">
        <span>ENGINEERED BY SAIRAJ BHANDALKAR</span>
        <span>VERIFIED CODEBASE & EVALUATION</span>
      </div>
    </article>
  );
};
