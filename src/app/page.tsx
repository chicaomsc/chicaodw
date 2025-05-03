"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import ScrollToTop from "@/components/scroll-to-top";
import Skills from "@/components/skills";
import type React from "react";

import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={topRef}
      className="bg-gradient-to-b from-background-darker to-background-dark text-white min-h-screen">
      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        resumeRef={resumeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <Hero
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />

      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Resume ref={resumeRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />

      <Footer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        resumeRef={resumeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <ScrollToTop />
    </div>
  );
}
