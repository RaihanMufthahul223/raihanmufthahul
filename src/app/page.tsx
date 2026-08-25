'use client';

import { useCallback, useRef, useState } from 'react';
import Preloader from '@/components/Preloader';
import FullPageSlider from '@/components/FullPageSlider';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const SECTIONS = [
  <Hero key="hero" />,
  <About key="about" />,
  <Skills key="skills" />,
  <Projects key="projects" />,
  <Contact key="contact" />,
];

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raihan Mufthahul",
    url: "https://raihanmufthahul.vercel.app/",
    sameAs: [
      "https://github.com/RaihanMufthahul223",
      "https://www.instagram.com/raihanmufthahul/",
      "https://www.facebook.com/raihan.mufthahul.3/",
    ],
    jobTitle: "Web Developer",
    knowsAbout: ["JavaScript", "TypeScript", "Node.js", "Express", "PHP", "Python", "Next.js", "Tailwind CSS"],
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const prevSection = useRef(0);

  const handleNavigate = useCallback((index: number) => {
    const dir = index > prevSection.current ? 1 : -1;
    setDirection(dir);
    setCurrentSection(index);
    prevSection.current = index;
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Main content — renders behind preloader so hero is ready on reveal */}

      <FullPageSlider
        sections={SECTIONS}
        currentSection={currentSection}
        direction={direction}
        onNavigate={handleNavigate}
      />

      {/* Preloader — on top of everything (z-index: 9999) */}
      {!isLoaded && (
        <Preloader onComplete={() => setIsLoaded(true)} />
      )}
    </>
  );
}
