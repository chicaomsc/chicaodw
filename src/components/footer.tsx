"use client";

import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  blogRef: React.RefObject<HTMLDivElement | null>;
  certificationsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Footer({
  scrollToSection,
  aboutRef,
  servicesRef,
  resumeRef,
  projectsRef,
  blogRef,
  certificationsRef,
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
              e soluções de segurança.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://linkedin.com" name="LinkedIn" />
              <SocialIcon href="https://github.com" name="GitHub" />
              <SocialIcon href="https://twitter.com" name="Twitter" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <FooterLink onClick={() => scrollToSection(aboutRef)}>
                Sobre
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(servicesRef)}>
                Serviços
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(resumeRef)}>
                Currículo
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(projectsRef)}>
                Projetos
              </FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Mais</h4>
            <nav className="flex flex-col gap-2">
              <FooterLink onClick={() => scrollToSection(blogRef)}>
                Blog
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(certificationsRef)}>
                Certificações
              </FooterLink>
              <FooterLink onClick={() => scrollToSection(contactRef)}>
                Contato
              </FooterLink>
              <Link
                href="/cv.pdf"
                download
                className="text-white/60 hover:text-primary-light transition-colors duration-300">
                Baixar CV
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contato</h4>
            <div className="flex flex-col gap-2 text-white/60">
              <p>São Luís, Maranhão, Brasil</p>
              <p>
                <Link
                  href="mailto:francisco@exemplo.com"
                  className="hover:text-primary-light transition-colors duration-300">
                  francisco@exemplo.com
                </Link>
              </p>
              <p>
                <Link
                  href="tel:+5598999999999"
                  className="hover:text-primary-light transition-colors duration-300">
                  +55 (98) 99999-9999
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
            usando Next.js e Tailwind CSS
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
      className="text-white/60 hover:text-primary-light transition-colors duration-300 text-left">
      {children}
    </button>
  );
}

interface SocialIconProps {
  href: string;
  name: string;
}

function SocialIcon({ href, name }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-background-lighter flex items-center justify-center text-white/70 hover:text-primary-light hover:bg-background-light transition-all duration-300"
      aria-label={name}>
      <span className="sr-only">{name}</span>
    </Link>
  );
}
