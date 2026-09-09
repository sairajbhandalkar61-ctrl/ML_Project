import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../../data/profile';
import portraitImg from '../../assets/profile/sairaj_portrait.jpg';

gsap.registerPlugin(ScrollTrigger);

export const ProfileImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current && containerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.0 },
          {
            scale: 1.09,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#111111] text-[#EDE9DF] py-20 px-6 sm:px-10 overflow-hidden hairline-b"
      aria-label="Editorial Photographic Spread"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#EDE9DF]/20">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#EDE9DF]/60 block mb-1">
              PORTRAIT ARCHIVE // PLATE 02
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#EDE9DF]">
              SAIRAJ BHANDALKAR
            </h3>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#EDE9DF]/70 text-right">
            PUNE, MAHARASHTRA // {profile.coordinates}
          </div>
        </div>

        {/* Large Photographic Showcase with Slit-Scan Fringe */}
        <div className="relative w-full h-[60vh] sm:h-[75vh] max-h-[750px] overflow-hidden bg-[#1A1A18] border border-[#EDE9DF]/20 group">
          <img
            ref={imageRef}
            src={portraitImg}
            alt="Sairaj Bhandalkar — Editorial Full Portrait"
            className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
            loading="lazy"
          />

          {/* Vertical Slit-Scan / Raster Fringe Overlays at Top and Bottom */}
          <div 
            className="absolute top-0 left-0 w-full h-16 vertical-fringe-pattern-dark pointer-events-none opacity-50"
            aria-hidden="true"
          />
          <div 
            className="absolute bottom-0 left-0 w-full h-20 vertical-fringe-pattern-dark pointer-events-none opacity-60"
            aria-hidden="true"
          />

          {/* Floating Monogram Chip */}
          <div className="absolute bottom-6 left-6 bg-[#111111]/85 backdrop-blur-md border border-[#EDE9DF]/20 p-4 max-w-sm">
            <span className="font-mono text-[9px] text-accent-orange uppercase tracking-widest block mb-1">
              FIELD PROFILE
            </span>
            <p className="font-serif text-lg text-[#EDE9DF] italic leading-snug">
              “Specializing in AI architectures, predictive modeling, and clinical computer vision.”
            </p>
            <p className="mt-2 font-mono text-[10px] text-[#EDE9DF]/60 uppercase tracking-wider">
              MCA DATA SCIENCE @ MIT ADT UNIVERSITY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
