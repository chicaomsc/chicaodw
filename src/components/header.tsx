"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Download, Menu, X, Instagram } from "lucide-react";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Header({
  scrollToSection,
  aboutRef,
  skillsRef,
  resumeRef,
  projectsRef,
  contactRef,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    scrollToSection(ref);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background-darker/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-gradient-to-b from-black to-transparent py-5"
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <Link href="/" className="group flex items-center">
            <h1 className="text-2xl font-bold font-poppins bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Chicãodw
            </h1>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8 ">
          <NavLink onClick={() => scrollToSection(aboutRef)}>Sobre</NavLink>
          <NavLink onClick={() => scrollToSection(skillsRef)}>
            Habilidades
          </NavLink>
          <NavLink onClick={() => scrollToSection(resumeRef)}>Jornada</NavLink>
          <NavLink onClick={() => scrollToSection(projectsRef)}>
            Projetos
          </NavLink>
          <NavLink onClick={() => scrollToSection(contactRef)}>Contato</NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <SocialLink
            href="https://linkedin.com/in/chicaodw"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/chicaodw"
            icon={<Github size={20} />}
            label="GitHub"
          />

          <SocialLink
            href="https://instagram.com/chicaodw"
            icon={<Instagram size={20} />}
            label="Instagram"
          />

          <Link
            href="/FranciscoCosta_CV.pdf"
            download="CV_FranciscoCosta.pdf"
            className="flex items-center bg-gradient bg-linear-to-r from-primary-light to-primary-dark hover:from-primary-dark hover:to-primary-light text-white px-4 py-2 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-primary-light/20">
            <Download size={16} className="mr-2" />
            Baixar Currículo
          </Link>
        </div>

        <button
          className="md:hidden text-white p-2 focus-visible:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-darker/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <MobileNavLink onClick={() => handleMobileNavClick(aboutRef)}>
                Sobre
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavClick(skillsRef)}>
                Habilidades
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavClick(resumeRef)}>
                Jornada
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavClick(projectsRef)}>
                Projetos
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavClick(contactRef)}>
                Contato
              </MobileNavLink>

              <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
                <SocialLink
                  href="https://linkedin.com/in/chicaodw"
                  icon={<Linkedin size={20} />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://github.com/chicaodw"
                  icon={<Github size={20} />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://github.com/chicaodw"
                  icon={<Instagram size={20} />}
                  label="Instagram"
                />
              </div>

              <Link
                href="/FranciscoCosta_CV.pdf"
                download="CV_FranciscoCosta.pdf"
                className="flex items-center justify-center bg-gradient bg-linear-to-r from-primary-light to-primary-dark hover:from-primary-dark hover:to-primary-light text-white px-4 py-3 rounded-md text-sm transition-all duration-300 shadow-lg hover:shadow-primary-light/20">
                <Download size={16} className="mr-2" />
                Baixar Currículo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

function NavLink({ children, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group cursor-pointer">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient bg-linear-to-r from-primary-light to-primary-dark group-hover:w-full transition-all duration-300"></span>
    </button>
  );
}

function MobileNavLink({ children, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors">
      {children}
    </button>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 hover:text-primary-light transition-colors duration-300"
      aria-label={label}>
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
