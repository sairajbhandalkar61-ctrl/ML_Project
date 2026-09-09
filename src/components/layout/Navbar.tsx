import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

interface NavbarProps {
  onOpenProject?: (projectId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#EDE9DF]/90 backdrop-blur-md hairline-b py-3.5' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Top-Left Minimal Identity */}
          <a 
            href="#" 
            className="group flex flex-col focus:outline-none"
            aria-label="Sairaj Bhandalkar — Home"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#111111] group-hover:opacity-75 transition-opacity">
              SAIRAJ BHANDALKAR
            </span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#77736B]">
              MCA (DATA SCIENCE) @ MIT ADT
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-[#111111]">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 uppercase text-[#111111]/80 hover:text-[#111111] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1 px-3 hairline-all font-mono text-[11px] uppercase tracking-wider text-[#111111] hover:bg-[#111111] hover:text-[#EDE9DF] transition-all duration-200"
              aria-label="Sairaj Bhandalkar LinkedIn Profile"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1 px-3 hairline-all font-mono text-[11px] uppercase tracking-wider text-[#111111] hover:bg-[#111111] hover:text-[#EDE9DF] transition-all duration-200"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase py-1 px-2.5 hairline-all"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#EDE9DF] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#77736B] pb-2 hairline-b">
              NAVIGATION // 01 — 05
            </span>

            {navLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between group"
              >
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#111111] group-hover:italic transition-all">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-[#77736B]">0{index + 1}</span>
              </a>
            ))}

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between pt-4 hairline-t font-mono text-xs uppercase tracking-widest text-[#111111] font-semibold hover:text-accent-orange transition-colors"
            >
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between pt-2 font-mono text-xs uppercase tracking-widest text-accent-orange font-semibold"
            >
              <span>DOWNLOAD RESUME (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6 hairline-t font-mono text-[10px] text-[#77736B] uppercase tracking-wider space-y-2">
            <p>PUNE, MAHARASHTRA, INDIA</p>
            <p>{profile.contact.email}</p>
            <p>TEL: {profile.contact.phone}</p>
          </div>
        </div>
      )}
    </>
  );
};
