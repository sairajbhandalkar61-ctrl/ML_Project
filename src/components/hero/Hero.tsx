import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../../data/profile';
import portraitImg from '../../assets/profile/sairaj_portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-title-line',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.15, delay: 0.2 }
      )
      .fromTo(
        portraitRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        '-=0.8'
      )
      .fromTo(
        metaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.6'
      );

      // ScrollTrigger Parallax
      if (containerRef.current && portraitRef.current && headlineRef.current) {
        gsap.to(portraitRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          }
        });

        gsap.to(headlineRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[1080px] w-full bg-[#EDE9DF] text-[#111111] pt-28 pb-16 px-6 sm:px-10 flex flex-col justify-between overflow-hidden hairline-b"
      aria-label="Editorial Cover"
    >
      {/* Top Metadata Rulers */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[10px] tracking-widest uppercase text-[#77736B] pb-4 hairline-b">
        <div>
          <span className="text-[#111111] font-semibold">LOCATION:</span> PUNE, INDIA
        </div>
        <div>
          <span className="text-[#111111] font-semibold">DEGREE:</span> MCA (DATA SCIENCE)
        </div>
        <div className="hidden sm:block">
          <span className="text-[#111111] font-semibold">INSTITUTE:</span> MIT ADT UNIVERSITY
        </div>
        <div className="text-right">
          <span className="text-[#111111] font-semibold">STATUS:</span> 2026 DOSSIER
        </div>
      </div>

      {/* Main Magazine Cover Grid: Massive Typography & Editorial Portrait */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left / Center: Monumental Headline & Disciplines */}
        <div ref={headlineRef} className="lg:col-span-8 flex flex-col justify-center z-10">
          <div className="overflow-hidden">
            <h1 className="hero-title-line font-serif text-huge-editorial font-light tracking-tight uppercase leading-tightest text-[#111111]">
              SAIRAJ
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-line font-serif text-huge-editorial font-light tracking-tight uppercase leading-tightest text-[#111111]">
              BHANDALKAR
            </h1>
          </div>

          <div className="mt-8 pt-6 hairline-t max-w-xl">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#111111] font-medium flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-orange" />
              <span>AI / ML • DATA SCIENCE • PYTHON</span>
            </p>
            <p className="mt-3 font-serif text-lg sm:text-xl text-[#77736B] italic">
              “Engineering reproducible predictive intelligence and clinical computer vision from data.”
            </p>
          </div>
        </div>

        {/* Right: Editorial Cropped Portrait with Slit-Scan Mask & Coordinate Badge */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div
            ref={portraitRef}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] bg-[#F4F1E9] hairline-all p-3 shadow-lg group"
          >
            {/* Top Frame Tab */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#111111]/15 font-mono text-[9px] uppercase tracking-wider text-[#77736B]">
              <span>FIG. 01 // PORTRAIT</span>
              <span>18.5204° N, 73.8567° E</span>
            </div>

            {/* Actual Portrait Image with Slit-Scan Raster Fringe */}
            <div className="relative w-full h-[calc(100%-28px)] overflow-hidden bg-[#111111]">
              <img
                src={portraitImg}
                alt="Sairaj Bhandalkar in professional attire"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Bottom Slit-Scan Vertical Raster Fringe (Reference Signature) */}
              <div 
                className="absolute bottom-0 left-0 w-full h-14 vertical-fringe-pattern pointer-events-none opacity-60"
                aria-hidden="true"
              />

              {/* Inset Badge */}
              <div className="absolute top-3 right-3 bg-[#EDE9DF]/90 backdrop-blur-sm hairline-all px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-[#111111]">
                MIT ADT // DS
              </div>
            </div>

            {/* Corner Decorative Crosses */}
            <span className="absolute -top-1.5 -left-1.5 text-[10px] font-mono text-[#111111] leading-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-[10px] font-mono text-[#111111] leading-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-[10px] font-mono text-[#111111] leading-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-[10px] font-mono text-[#111111] leading-none">+</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Action prompt & Coordinates */}
      <div ref={metaRef} className="max-w-7xl mx-auto w-full pt-4 hairline-t flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#77736B]">
        <div className="flex flex-wrap items-center gap-3 text-[#111111]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-ping" />
            <span>AVAILABLE FOR DATA SCIENCE & AI OPPORTUNITIES</span>
          </div>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4F1E9] hairline-all font-mono text-[10px] uppercase tracking-wider text-[#111111] hover:bg-[#111111] hover:text-[#EDE9DF] transition-all duration-200"
            aria-label="Connect with Sairaj on LinkedIn"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3 h-3 text-accent-orange" />
          </a>
        </div>

        <a
          href="#work"
          className="inline-flex items-center gap-2 py-1 text-[#111111] hover:text-accent-orange transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
