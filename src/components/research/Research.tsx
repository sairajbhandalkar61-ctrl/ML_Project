import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="relative w-full bg-[#111111] text-[#EDE9DF] py-28 sm:py-36 px-6 sm:px-10 dark-hairline-b overflow-hidden"
      aria-label="Experimental Research & Future Horizons"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Top Header Ruler */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EDE9DF]/15 font-mono text-xs tracking-widest uppercase text-[#EDE9DF]/60">
          <span>07 / RESEARCH & EXPERIMENTAL FRONTIERS</span>
          <span>EDITORIAL ART BOOK DOSSIER</span>
        </div>

        {/* Grand Typography Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-subhuge-editorial font-light tracking-tight uppercase leading-tightest text-[#EDE9DF]">
              BUILDING<br />
              BEYOND<br />
              THE PROTOTYPE.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6 font-mono text-xs text-[#EDE9DF]/75 leading-relaxed">
            <p>
              AI is only as dependable as its uncertainty bounds. Sairaj investigates robust multi-modal perception, longitudinal change modeling, and ethical skin-tone fairness in clinical computer vision.
            </p>
            <div className="p-4 border border-[#EDE9DF]/20 bg-[#1A1A18] space-y-2 text-[11px]">
              <span className="text-accent-orange uppercase font-bold block">// RESEARCH FOCUS:</span>
              <p>• Zero-Trust Image Abstention</p>
              <p>• Longitudinal Digital Twin Architectures</p>
              <p>• Diverse Fitzpatrick I–VI Calibration</p>
              <p>• Temporal Skincare Causal Inference</p>
            </div>
          </div>
        </div>

        {/* Art Book Marquee Band */}
        <div className="pt-12 border-t border-[#EDE9DF]/15 space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#EDE9DF]/50 block">
            CORE DOMAIN HORIZONS:
          </span>
          <div className="flex flex-wrap gap-3 font-serif text-xl sm:text-2xl text-[#EDE9DF]/80">
            <span>ARTIFICIAL INTELLIGENCE</span>
            <span className="text-accent-orange">•</span>
            <span>MACHINE LEARNING</span>
            <span className="text-accent-orange">•</span>
            <span>COMPUTER VISION</span>
            <span className="text-accent-orange">•</span>
            <span>NATURAL LANGUAGE PROCESSING</span>
            <span className="text-accent-orange">•</span>
            <span>GENERATIVE AI</span>
            <span className="text-accent-orange">•</span>
            <span>DATA SCIENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
