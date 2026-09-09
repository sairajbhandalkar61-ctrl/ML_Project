import React from 'react';
import { certifications } from '../../data/certifications';
import { Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-[#EDE9DF] text-[#111111] py-20 px-6 sm:px-10 hairline-b overflow-hidden"
      aria-label="Certifications"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Ruler */}
        <div className="flex items-center justify-between pb-4 hairline-b font-mono text-xs tracking-widest uppercase text-[#77736B]">
          <span>06 / CREDENTIALS</span>
          <span>VERIFIED SPECIALIZATIONS</span>
        </div>

        {/* Minimal Minimalist Separator List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 bg-[#F4F1E9] hairline-all flex flex-col justify-between space-y-4 hover:border-[#111111] transition-colors"
            >
              <div className="flex items-start justify-between">
                <Award className="w-5 h-5 text-accent-orange" />
                <span className="font-mono text-[10px] text-[#77736B] uppercase tracking-widest">
                  {cert.year}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg sm:text-xl font-light text-[#111111] uppercase tracking-tight">
                  {cert.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#77736B] mt-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
