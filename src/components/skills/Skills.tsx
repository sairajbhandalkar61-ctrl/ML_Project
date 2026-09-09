import React, { useState } from 'react';
import { editorialSkills } from '../../data/skills';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Skills: React.FC = () => {
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState<number>(0);
  const activeSkill = editorialSkills[hoveredSkillIndex] || editorialSkills[0];

  return (
    <section
      id="skills"
      className="relative w-full bg-[#EDE9DF] text-[#111111] py-24 sm:py-32 px-6 sm:px-10 hairline-b overflow-hidden"
      aria-label="Editorial Skills"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Header Ruler */}
        <div className="flex items-center justify-between pb-4 hairline-b font-mono text-xs tracking-widest uppercase text-[#77736B]">
          <span>02 / EXPERTISE</span>
          <span>TYPOGRAPHIC INDEX OF COMPETENCIES</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold block mb-2">
              DISCIPLINES & STACK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#111111]">
              TECHNICAL MASTERY
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#77736B] max-w-sm">
            HOVER OVER ANY DISCIPLINE TO REVEAL MATHEMATICAL & ARCHITECTURAL FOUNDATIONS.
          </p>
        </div>

        {/* Main Grid: Left Typographic List, Right Inset Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Typographic Words List */}
          <div className="lg:col-span-7 space-y-1">
            {editorialSkills.map((skill, index) => {
              const isSelected = hoveredSkillIndex === index;
              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkillIndex(index)}
                  className="group relative cursor-pointer py-3.5 border-b border-[#111111]/15 transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-[#77736B] tracking-widest group-hover:text-accent-orange transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight transition-all duration-300 ${
                          isSelected
                            ? 'text-[#111111] translate-x-3 italic'
                            : 'text-[#111111]/70 group-hover:text-[#111111] group-hover:translate-x-2'
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>

                    <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-[#77736B] group-hover:text-[#111111] transition-colors">
                      {skill.category}
                    </span>
                  </div>

                  {/* Active Highlight Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-accent-orange transition-all duration-300 ${
                      isSelected ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Floating Inspection Deck */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#F4F1E9] hairline-all p-8 sm:p-10 space-y-6 shadow-md transition-all duration-300">
              <div className="flex items-center justify-between border-b border-[#111111]/15 pb-3">
                <span className="font-mono text-[10px] text-accent-orange font-bold uppercase tracking-widest">
                  INDEX // {String(hoveredSkillIndex + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#77736B]">
                  {activeSkill.category}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#111111]">
                  {activeSkill.name}
                </h3>
                <p className="mt-3 font-sans text-sm sm:text-base text-[#111111]/80 leading-relaxed">
                  {activeSkill.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#111111]/15 space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736B] block">
                  APPLIED FRAMEWORKS & CONCEPTS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSkill.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#EDE9DF] hairline-all font-mono text-xs uppercase tracking-wider text-[#111111]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 font-mono text-[9px] text-[#77736B] tracking-widest uppercase">
                // GROUNDED IN SAIRAJ BHANDALKAR'S MCA RESEARCH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
