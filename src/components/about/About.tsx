import React, { useState } from 'react';
import { profile } from '../../data/profile';
import { ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="about"
      className="relative w-full bg-[#EDE9DF] text-[#111111] py-24 sm:py-32 px-6 sm:px-10 hairline-b overflow-hidden"
      aria-label="About Sairaj Bhandalkar"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-4 hairline-b font-mono text-xs tracking-widest uppercase text-[#77736B]">
          <span>01 / ABOUT</span>
          <span>PHILOSOPHY & CURRICULUM</span>
        </div>

        {/* Monumental Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-subhuge-editorial font-light tracking-tight uppercase leading-tightest text-[#111111]">
              I BUILD<br />
              INTELLIGENT<br />
              SYSTEMS.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 pt-2 font-sans text-[#111111]/85 text-base sm:text-lg leading-relaxed">
            <p>
              I am pursuing my <strong>Master of Computer Applications (MCA) in Data Science at MIT ADT University</strong> in Pune, India. My passion centers on transforming raw data into high-stakes automated decisions.
            </p>
            <p className="text-sm sm:text-base text-[#77736B]">
              From exploratory data analysis and mathematical feature engineering to deep neural network inference, I construct the full pipeline — eliminating false optimism through disciplined uncertainty calibration and reproducible metrics.
            </p>

            <div className="pt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wider text-[#111111]">
              {profile.disciplines.map((d) => (
                <span key={d} className="px-2.5 py-1 bg-[#F4F1E9] hairline-all">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* The End-to-End Data Science Lifecycle Navigator */}
        <div className="pt-8 hairline-t space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
              THE COMPLETE DATA SCIENCE LIFECYCLE
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-[#77736B]">
              INTERACTIVE PIPELINE BREAKDOWN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Stage Selector Tabs */}
            <div className="lg:col-span-5 space-y-2">
              {profile.lifecycleStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={stage.number}
                    onClick={() => setActiveStage(idx)}
                    className={`w-full text-left p-4 hairline-all transition-all duration-200 flex items-center justify-between font-mono text-xs uppercase tracking-wider ${
                      isActive 
                        ? 'bg-[#111111] text-[#EDE9DF] shadow-md' 
                        : 'bg-[#F4F1E9] text-[#111111] hover:bg-[#E2DDCF]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-accent-orange font-bold' : 'text-[#77736B]'}>
                        {stage.number}
                      </span>
                      <span className="font-medium">{stage.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-accent-orange' : 'text-[#77736B]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Stage Detailed Inspector Panel */}
            <div className="lg:col-span-7 bg-[#F4F1E9] hairline-all p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-[#111111]/15 pb-3">
                <span className="font-mono text-xs text-accent-orange font-bold uppercase tracking-widest">
                  STAGE {profile.lifecycleStages[activeStage].number} // METHODOLOGY
                </span>
                <span className="font-mono text-xs text-[#77736B]">
                  VERIFIED PROTOCOL
                </span>
              </div>

              <h4 className="font-serif text-3xl sm:text-4xl font-light text-[#111111]">
                {profile.lifecycleStages[activeStage].name}
              </h4>

              <p className="font-sans text-base sm:text-lg text-[#111111]/80 leading-relaxed">
                {profile.lifecycleStages[activeStage].desc}
              </p>

              <div className="pt-4 border-t border-[#111111]/15 font-mono text-xs text-[#77736B] uppercase tracking-wider space-y-2">
                <p className="text-[#111111] font-semibold">CORE CAPABILITIES:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent-orange rounded-full" />
                    Reproducible Python & SQL workflows
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent-orange rounded-full" />
                    Zero-Trust validation thresholds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent-orange rounded-full" />
                    Scikit-learn / PyTorch pipeline serialization
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent-orange rounded-full" />
                    Production telemetry & drift monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
