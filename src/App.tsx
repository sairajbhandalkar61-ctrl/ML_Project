import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/layout/Navbar';
import { Cursor } from './components/layout/Cursor';
import { GrainOverlay } from './components/layout/GrainOverlay';
import { CookieBadge } from './components/layout/CookieBadge';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

import { About } from './components/about/About';
import { ProfileImage } from './components/profile/ProfileImage';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Education } from './components/education/Education';
import { Certifications } from './components/certifications/Certifications';
import { Research } from './components/research/Research';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const proj = params.get('project');
    if (proj) {
      setCurrentProjectId(proj);
    }
    const v = params.get('view');
    if (v) {
      setCurrentView(v);
    }

    // Initialize 144Hz-optimized smooth momentum scrolling
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Hash navigation
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 0.85 });
          }
        }, 200);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const handleOpenProject = (id: string) => {
    setCurrentProjectId(id);
    const url = new URL(window.location.href);
    url.searchParams.set('project', id);
    window.history.pushState({}, '', url);
  };

  const handleBackToHome = () => {
    setCurrentProjectId(null);
    setCurrentView(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    url.searchParams.delete('view');
    window.history.pushState({}, '', url);
  };

  return (
    <div className="relative min-h-screen bg-[#EDE9DF] text-[#111111] selection:bg-[#111111] selection:text-[#EDE9DF]">
      <GrainOverlay />
      <Cursor />
      <CookieBadge />
      <Navbar onOpenProject={handleOpenProject} />

      {currentProjectId ? (
        <ProjectDetail projectId={currentProjectId} onBack={handleBackToHome} />
      ) : currentView === 'about' ? (
        <main className="pt-24"><About /><Footer /></main>
      ) : currentView === 'skills' ? (
        <main className="pt-24"><Skills /><Footer /></main>
      ) : currentView === 'projects' ? (
        <main className="pt-24"><Projects /><Footer /></main>
      ) : currentView === 'experience' ? (
        <main className="pt-24"><Experience /><Footer /></main>
      ) : currentView === 'education' ? (
        <main className="pt-24"><Education /><Footer /></main>
      ) : currentView === 'certifications' ? (
        <main className="pt-24"><Certifications /><Footer /></main>
      ) : currentView === 'research' ? (
        <main className="pt-24"><Research /><Footer /></main>
      ) : currentView === 'contact' ? (
        <main className="pt-24"><Contact /><Footer /></main>
      ) : currentView === 'profile' ? (
        <main className="pt-24"><ProfileImage /><Footer /></main>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
