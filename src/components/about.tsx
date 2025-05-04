"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillBar from "./skill-bar";
import SectionTitle from "./section-title";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-background-light relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light/5 to-transparent rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-dark/5 to-transparent rounded-tr-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <SectionTitle>Sobre Mim</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-light to-primary-dark rounded-lg opacity-20 blur-sm"></div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-light/30 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="/dw1.webp"
                alt="Francisco Costa - Engenheiro de Software Full Stack e Cloud"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6 font-poppins bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Engenheiro de Software
            </h3>

            <p className="text-lg text-white/80 mb-6">
              Com mais de 7 anos de experiência em projetos web e mobile,
              atualmente aprofundo meus conhecimentos como mestrando em
              Engenharia de Software pela CESAR School.
            </p>

            <p className="text-lg text-white/80 mb-6">
              Domínio em tecnologias como React, Next.js, Angular, Java (Spring
              Boot), Node.js e AWS, atuando de forma end-to-end e aplicando as
              melhores práticas em arquitetura limpa e metodologias ágeis.
            </p>

            <p className="text-lg text-white/80 mb-8">
              Focado em desenvolver aplicações que aliam eficiência, segurança e
              usabilidade, entregando valor direto ao negócio e impulsionando a
              inovação contínua.
            </p>

            <div className="flex flex-col gap-6">
              <SkillBar
                skill="Frontend: React, Next.js, Angular"
                percentage={90}
              />
              <SkillBar
                skill="Backend: Java (Spring Boot), Node.js"
                percentage={85}
              />
              <SkillBar skill="Mobile: React Native" percentage={80} />
              <SkillBar skill="Cloud: AWS" percentage={75} />
              <SkillBar skill="Banco de Dados: PostgreSQL" percentage={85} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
