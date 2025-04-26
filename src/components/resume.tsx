"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import TimelineItem from "./timeline-item";
import SectionTitle from "./section-title";

const Resume = forwardRef<HTMLDivElement>((props, ref) => {
  const education = [
    {
      year: "2023-2025",
      title: "Mestrado - Engenharia de Software",
      organization: "CESAR School",
      description:
        "Pesquisa em segurança de aplicações e metodologias ágeis. Foco em desenvolvimento de frameworks para análise de vulnerabilidades.",
    },
    {
      year: "2010-2015",
      title: "Bacharelado - Ciência da Computação",
      organization: "FAESF",
      description:
        "Foco em desenvolvimento de software e sistemas distribuídos. Projeto de conclusão sobre otimização de algoritmos de busca.",
    },
  ];

  const experience = [
    {
      year: "2023-atual",
      title: "Frontend Lead e Engenheiro Full Stack",
      organization: "Bidweb Security IT",
      description:
        "Liderança no desenvolvimento de plataformas de segurança, implementação de arquiteturas escaláveis e mentoria de equipes.",
    },
    {
      year: "2017-2023",
      title: "Desenvolvedor Full Stack",
      organization: "Prefeitura de Coroatá",
      description:
        "Desenvolvimento de plataformas educacionais e sistemas de gestão pública, otimizando processos internos e melhorando a experiência dos usuários.",
    },
    {
      year: "2014-2017",
      title: "Desenvolvedor Web",
      organization: "DW Agência Digital",
      description:
        "Criação de soluções web e mobile para diversos clientes, utilizando tecnologias modernas e implementando designs responsivos.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background-light relative">
      <div className="container mx-auto px-4">
        <SectionTitle>Minha Jornada</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-8 inline-block bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Formação Acadêmica
            </h3>

            <div className="flex flex-col gap-10">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-8 inline-block bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Experiência Profissional
            </h3>

            <div className="flex flex-col gap-10">
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Resume.displayName = "Resume";

export default Resume;
