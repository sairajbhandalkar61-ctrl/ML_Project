import React from 'react';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#EDE9DF] text-[#111111] py-24 sm:py-32 px-6 sm:px-10 hairline-b overflow-hidden"
      aria-label="Work Experience"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Ruler */}
        <div className="flex items-center justify-between pb-4 hairline-b font-mono text-xs tracking-widest uppercase text-[#77736B]">
          <span>04 / EXPERIENCE</span>
          <span>CHRONOLOGICAL TRACK RECORD</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold block mb-2">
              CAREER & INTERNSHIPS
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#111111]">
              INDUSTRY RECORD
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#77736B] max-w-md">
            PROVEN HANDS-ON COLLABORATION FROM RAW DATA CLEANING AND MODEL EVALUATION TO PRODUCTION SOFTWARE WORKFLOWS.
          </p>
        </div>

        {/* Editorial Timeline Cards */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="p-8 sm:p-12 bg-[#F4F1E9] hairline-all space-y-8"
            >
              {/* Top Row: Large Number & Company */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#111111]/15 pb-6">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-5xl sm:text-6xl font-light text-accent-orange">
                    {exp.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-4xl font-light text-[#111111]">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold mt-1">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-xs uppercase tracking-widest text-[#77736B] sm:text-right space-y-1">
                  <p className="text-[#111111] font-medium">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Middle: Narrative */}
              <p className="font-sans text-base sm:text-lg text-[#111111]/85 leading-relaxed max-w-4xl">
                {exp.description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-3 pt-4 border-t border-[#111111]/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736B] block">
                  KEY DELIVERABLES & PROJECTS:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs font-sans text-[#111111]/80">
                      <span className="font-mono text-accent-orange font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Technologies */}
              <div className="pt-4 border-t border-[#111111]/10 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#EDE9DF] hairline-all font-mono text-[10px] uppercase tracking-wider text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
