"use client";

import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./project-card";
import SectionTitle from "./section-title";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "BidScore",
      category: "segurança",
      description: "Plataforma de maturidade de segurança para empresas.",
      technologies: "React, Node.js, AWS, IA",
      image: "/bid.jpg",
    },
    {
      title: "Sistema de Avaliação de Professores",
      category: "educação",
      description: "Plataforma para avaliação de desempenho docente.",
      technologies: "Angular, Java Spring, PostgreSQL, AWS",
      image: "/avaliacao.webp",
    },
    {
      title: "Biblioteca Virtual Pública",
      category: "educação",
      description: "Sistema de gerenciamento de acervo digital.",
      technologies: "Angular, Java Spring, PostgreSQL, AWS",
      image: "/bib.jpg",
    },
    {
      title: "Plataforma de Ensino Remoto",
      category: "educação",
      description: "Solução para aulas online durante a pandemia.",
      technologies: "Angular, Java Spring, AWS",
      image: "/edu.jpg",
    },
    {
      title: "Stratosage",
      category: "segurança",
      description: "Plataforma para startups.",
      technologies: "React, Java Spring, AWS, IA",
      image: "/st.jpg",
    },
    {
      title: "App para pessoas celíacas",
      category: "mobile",
      description: "Aplicativo para saúde.",
      technologies: "React Native, PostgreSQL, MongoDB, IA",
      image: "/posso.jpg",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <section ref={ref} className="py-20 bg-background-dark relative">
      <div
        className="absolute top-0 left-0 w-full h-20 bg-background-light"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Portfólio de Projetos</SectionTitle>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? "bg-gradient bg-linear-to-r from-primary-light to-primary-dark text-white shadow-lg"
                  : "bg-background-lighter text-white/70 hover:text-white"
              }`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
