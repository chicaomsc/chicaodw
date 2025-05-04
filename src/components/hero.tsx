"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import ParticlesBackground from "./particles-background";
import Image from "next/image";

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  resumeRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({
  scrollToSection,
  aboutRef,
  resumeRef,
  contactRef,
}: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center md:text-left">
            <motion.h2
              variants={item}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-poppins">
              <span className="block text-white">Francisco Costa</span>
              <span className="block leading-snug text-5xl mt-4 bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
                Engenheiro de Software
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-white/80 mb-10">
              Construindo soluções de software desde 2014.
              <span className="block mt-2">
                Transformando ideias em experiências digitais de alto impacto.
              </span>
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollToSection(resumeRef)}
                className="bg-gradient bg-linear-to-r from-primary-light to-primary-dark hover:from-primary-dark hover:to-primary-light text-white px-8 py-4 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-primary-light/20 transform hover:-translate-y-1 cursor-pointer">
                Visualizar Currículo
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                Fale Comigo
              </button>
            </motion.div>

            <motion.div
              className="mt-10 flex justify-center md:justify-start space-x-6"
              variants={item}>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
                  7+
                </span>

                <span className="text-sm text-white/70 mt-1">
                  Anos de Experiência
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
                  15+
                </span>
                <span className="text-sm text-white/70 mt-1">
                  Tecnologias Dominadas
                </span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:block">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-2 border-white/10">
                <Image
                  src="/dw2.webp"
                  alt="Francisco Costa - Engenheiro de Software Full Stack e Cloud"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-light to-primary-dark rounded-lg -z-10 opacity-20 blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-light/30 rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}>
          <ChevronsDown
            size={30}
            className="animate-bounce text-primary-light"
          />
        </motion.div>
      </div>
    </section>
  );
}
