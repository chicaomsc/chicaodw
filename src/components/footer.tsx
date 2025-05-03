"use client";

import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Heart, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Footer({
  scrollToSection,
  aboutRef,
  skillsRef,
  resumeRef,
  projectsRef,
  contactRef,
}: FooterProps) {
  return (
    <footer className="py-12 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Francisco Costa
            </h3>
            <p className="text-white/60 mb-4">
              Engenheiro de Software especializado em desenvolvimento Full Stack
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                href="https://linkedin.com/in/chicaodw"
                name="LinkedIn"
                icon={<Linkedin className="w-4 h-4" />}
              />
              <SocialIcon
                href="https://github.com/chicaodw"
                name="GitHub"
                icon={<Github className="w-4 h-4" />}
              />
              <SocialIcon
                href="https://instagram.com/chicaodw"
                name="Instagram"
                icon={<Instagram className="w-4 h-4" />}
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <FooterLink onClick={() => scrollToSection(aboutRef)}>
                Sobre
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(skillsRef)}>
                Habilidades
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(resumeRef)}>
                Jornada
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(projectsRef)}>
                Projetos
              </FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Mais</h4>
            <nav className="flex flex-col gap-2">
              <FooterLink onClick={() => scrollToSection(contactRef)}>
                Contato
              </FooterLink>
              <Link
                href="/FranciscoCosta_CV.pdf"
                download="CV_FranciscoCosta.pdf"
                className="text-white/60 hover:text-primary-light transition-colors duration-300">
                Baixar CV
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contato</h4>
            <div className="flex flex-col gap-2 text-white/60">
              <p>Recife, Pernambuco, Brasil</p>
              <p>
                <Link
                  href="mailto:contato@franciscocosta.dev.br"
                  className="hover:text-primary-light transition-colors duration-300">
                  contato@franciscocosta.dev.br
                </Link>
              </p>
              <p>
                <Link
                  href="https://wa.me/5599984289317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors duration-300">
                  +55 (99) 98428-9317
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Francisco Costa. Todos os direitos
            reservados.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-sm text-white/50 flex items-center">
            Desenvolvido com
            <Heart size={14} className="mx-1 text-primary-light" />
            por{" "}
            <Link
              href="https://www.instagram.com/chicaodw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:underline ml-1">
              @chicaodw
            </Link>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

function FooterLink({ children, onClick }: FooterLinkProps) {
  return (
    <button
      onClick={onClick}
      className="text-white/60 hover:text-primary-light transition-colors duration-300 text-left cursor-pointer">
      {children}
    </button>
  );
}

interface SocialIconProps {
  href: string;
  name: string;
  icon: React.ReactNode;
}

function SocialIcon({ href, name, icon }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-background-lighter flex items-center justify-center text-white/70 hover:text-primary-light hover:bg-background-light transition-all duration-300"
      aria-label={name}>
      {icon}
      <span className="sr-only">{name}</span>
    </Link>
  );
}
