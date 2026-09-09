import React from 'react';
import { educationList } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-[#EDE9DF] text-[#111111] py-24 sm:py-32 px-6 sm:px-10 hairline-b overflow-hidden"
      aria-label="Education"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Ruler */}
        <div className="flex items-center justify-between pb-4 hairline-b font-mono text-xs tracking-widest uppercase text-[#77736B]">
          <span>05 / ACADEMIA</span>
          <span>SCHOLASTIC FOUNDATIONS</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold block mb-2">
              DEGREES & SPECIALIZATIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#111111]">
              EDUCATION
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#77736B] max-w-md">
            GRADUATE AND UNDERGRADUATE TRAINING ACROSS DATA SCIENCE, COMPUTER APPLICATIONS, AND ADVANCED STATISTICAL COMPUTATION.
          </p>
        </div>

        {/* Editorial Academic Spread */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-8 bg-[#F4F1E9] hairline-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#111111]/15 pb-2 font-mono text-[10px] uppercase tracking-widest text-[#77736B]">
                  <span>{edu.number} // {edu.status}</span>
                  <span>{edu.period}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
                    {edu.institution}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold mt-2">
                    {edu.degree}
                  </p>
                  <p className="font-serif text-lg text-[#77736B] italic mt-1">
                    {edu.specialization}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#111111]/15 font-mono text-[10px] uppercase tracking-wider text-[#77736B]">
                📍 {edu.location}
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework Banner */}
        <div className="p-6 bg-[#F4F1E9] hairline-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-orange font-bold block mb-1">
              FOUNDATIONAL CURRICULUM // RESUME AUDIT
            </span>
            <span className="font-serif text-xl sm:text-2xl font-light text-[#111111]">
              RELEVANT COURSEWORK
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Machine Learning", "Deep Learning", "Data Structures", "Database Management Systems", "Statistics", "Data Analytics"].map((cw) => (
              <span key={cw} className="px-3 py-1 bg-[#EDE9DF] hairline-all font-mono text-[11px] uppercase tracking-wider text-[#111111] font-medium">
                {cw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
