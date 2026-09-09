import React from 'react';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { ProfileImage } from '../components/profile/ProfileImage';
import { Skills } from '../components/skills/Skills';
import { Projects } from '../components/projects/Projects';
import { Experience } from '../components/experience/Experience';
import { Education } from '../components/education/Education';
import { Certifications } from '../components/certifications/Certifications';
import { Research } from '../components/research/Research';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <main className="w-full bg-[#EDE9DF]">
      <Hero />
      <About />
      <ProfileImage />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
};
