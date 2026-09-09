import React, { useState } from 'react';
import { X } from 'lucide-react';

export const CookieBadge: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Editorial Notice"
      className="fixed bottom-6 left-6 z-40 max-w-[280px] bg-[#EDE9DF] p-3 text-[#111111] hairline-all shadow-sm transition-all duration-300 font-sans"
    >
      <div className="flex items-center justify-between border-b border-[#111111]/15 pb-1.5 mb-2">
        <span className="font-serif font-semibold text-xs tracking-wider uppercase">
          COOKIES
        </span>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-[10px] font-mono tracking-widest text-[#77736B] hover:text-[#111111] transition-colors flex items-center gap-0.5"
          aria-label="Close cookie notice"
        >
          [X]
        </button>
      </div>
      
      <p className="font-mono text-[9px] leading-relaxed text-[#77736B] uppercase tracking-wider mb-2.5">
        BY CONTINUING TO EXPLORE THIS DOSSIER, YOU ACKNOWLEDGE REPRODUCIBLE ALGORITHMIC DATA INTELLIGENCE.
      </p>

      <div className="flex items-center justify-between pt-1 border-t border-[#111111]/10">
        <span className="text-[9px] font-mono text-[#77736B]">INDEX // 2026</span>
        <button
          onClick={() => setIsVisible(false)}
          className="font-mono text-[10px] font-semibold text-[#111111] hover:text-accent-orange uppercase tracking-widest transition-colors underline underline-offset-2"
        >
          OK
        </button>
      </div>
    </aside>
  );
};
