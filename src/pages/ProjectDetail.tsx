import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';
import { Footer } from '../components/layout/Footer';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const project = projects.find((p) => p.id === projectId) || projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="w-full min-h-screen bg-[#EDE9DF] text-[#111111] pt-28">
      {/* Top Back Navigation Bar */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-8 border-b border-[#111111]/20 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#111111] hover:text-accent-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO DOSSIER</span>
        </button>

        <span className="font-mono text-xs text-[#77736B] tracking-widest uppercase">
          {project.number} // DEEP CASE STUDY
        </span>
      </div>

      {/* Case Study Header Spread */}
      <article className="max-w-6xl mx-auto px-6 sm:px-10 py-16 space-y-16">
        <div className="space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-orange block">
            {project.category}
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-[#111111] uppercase tracking-tight">
            {project.title}
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-[#77736B] italic max-w-3xl leading-snug">
            “{project.description}”
          </p>
        </div>

        {/* Hero Visual Presentation */}
        <div className="w-full bg-[#F4F1E9] hairline-all p-8 sm:p-12 shadow-lg space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#111111]/15 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111] font-semibold">
              PRIMARY SYSTEM BLUEPRINT
            </span>
            <span className="font-mono text-[10px] text-accent-orange font-bold uppercase tracking-wider">
              {project.discipline}
            </span>
          </div>

          <div className="relative w-full aspect-[16/9] bg-[#FFFFFF] hairline-all p-8 flex flex-col justify-between overflow-hidden">
            {project.id === 'skinnova' ? (
              <>
                <div className="flex items-center justify-between">
                  <img
                    src="/assets/projects/skinnova-logo.png"
                    alt="Skinnova Logo"
                    className="h-12 sm:h-16 w-auto object-contain"
                  />
                  <div className="text-right font-mono text-[10px] uppercase text-[#77736B]">
                    <p className="text-accent-orange font-bold">ZERO-TRUST AI VERIFIED</p>
                    <p>SCIN & DDI BENCHMARK</p>
                  </div>
                </div>

                <div className="my-auto text-center space-y-3">
                  <p className="font-serif text-3xl sm:text-4xl text-[#111111] italic">
                    “Existing apps analyze a snapshot; SKINNOVA analyzes the journey.”
                  </p>
                  <p className="font-mono text-xs text-[#77736B] uppercase tracking-widest">
                    LONGITUDINAL DIGITAL TWIN • WHY ENGINE • CLINICAL EVIDENCE PACK
                  </p>
                </div>

                <div className="border-t border-[#111111]/10 pt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#77736B] uppercase">
                  <span>STANFORD DDI DIVERSE SKIN-TONE SUBGROUP AUDIT</span>
                  <span className="text-[#111111] font-semibold">FITZPATRICK TYPES I — VI CALIBRATED</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center h-full text-center space-y-4">
                <h3 className="font-serif text-4xl text-[#111111]">{project.title}</h3>
                <p className="font-mono text-xs text-[#77736B] max-w-md">{project.overview}</p>
              </div>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#111111]/15">
          {project.metrics.map((m) => (
            <div key={m.label} className="p-6 bg-[#F4F1E9] hairline-all space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736B] block">
                {m.label}
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111]">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Deep Narrative: Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#111111]/15">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-light text-[#111111]">
              THE OPERATIONAL PROBLEM
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#111111]/85 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-light text-[#111111]">
              THE ARCHITECTURAL SOLUTION
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#111111]/85 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Multi-Stage Architecture */}
        <div className="space-y-8 pt-12 border-t border-[#111111]/15">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#111111]">
              {project.architecture.title}
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-[#77736B]">
              DISCIPLINED PROTOCOL BLUEPRINT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.architecture.steps.map((step, idx) => (
              <div key={step} className="p-6 bg-[#F4F1E9] hairline-all space-y-3">
                <span className="font-mono text-xs text-accent-orange font-bold uppercase">
                  PHASE 0{idx + 1}
                </span>
                <p className="font-sans text-sm text-[#111111]/85 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-12 border-t border-[#111111]/15">
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736B] block">
              DEPLOYMENT ENVIRONMENT & STACK:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1 bg-[#F4F1E9] hairline-all font-mono text-xs text-[#111111]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 bg-[#111111] text-[#EDE9DF] font-mono text-xs uppercase tracking-widest hover:bg-accent-orange transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-6 hairline-all font-mono text-xs uppercase tracking-widest text-[#111111] hover:bg-[#F4F1E9] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};
