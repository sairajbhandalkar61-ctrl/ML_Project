import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Indian Standard Time (UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(now.toLocaleTimeString('en-GB', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-[#EDE9DF] hairline-t pt-16 pb-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#EDE9DF]/15">
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#EDE9DF]/60">
              EDITORIAL DOSSIER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#EDE9DF]">
              SAIRAJ BHANDALKAR
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-[#EDE9DF]/70">
              AI / MACHINE LEARNING • DATA SCIENCE • PYTHON
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto flex items-center gap-2 border border-[#EDE9DF]/30 hover:border-[#EDE9DF] px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200 hover:bg-[#EDE9DF] hover:text-[#111111]"
            aria-label="Return to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mid Tier: Coordinates & Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-[#EDE9DF]/80">
          <div>
            <span className="block text-[10px] tracking-widest text-[#EDE9DF]/50 uppercase mb-2">LOCATION</span>
            <p>PUNE, MAHARASHTRA</p>
            <p className="text-[11px] text-[#EDE9DF]/60">{profile.coordinates}</p>
          </div>

          <div>
            <span className="block text-[10px] tracking-widest text-[#EDE9DF]/50 uppercase mb-2">LOCAL TIME</span>
            <p className="text-accent-orange font-semibold">{istTime || "12:00:00 IST"}</p>
            <p className="text-[11px] text-[#EDE9DF]/60">TIMEZONE: ASIA / KOLKATA</p>
          </div>

          <div>
            <span className="block text-[10px] tracking-widest text-[#EDE9DF]/50 uppercase mb-2">TRANSMISSION</span>
            <a 
              href={`mailto:${profile.contact.email}`}
              className="block hover:text-accent-orange transition-colors truncate"
            >
              {profile.contact.email}
            </a>
            <p className="text-[11px] text-[#EDE9DF]/60">{profile.contact.phone}</p>
          </div>

          <div>
            <span className="block text-[10px] tracking-widest text-[#EDE9DF]/50 uppercase mb-2">NETWORKS</span>
            <div className="flex flex-col space-y-1">
              <a 
                href={profile.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent-orange transition-colors"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a 
                href={profile.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent-orange transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 border-t border-[#EDE9DF]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-widest uppercase text-[#EDE9DF]/50">
          <p>© {new Date().getFullYear()} SAIRAJ BHANDALKAR. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH EDITORIAL ART DIRECTION & REPRODUCIBLE CODE.</p>
        </div>
      </div>
    </footer>
  );
};
