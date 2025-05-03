"use client";

import type React from "react";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Settings,
  Cloud,
  Layout,
  Database,
  Smartphone,
} from "lucide-react";
import SectionTitle from "./section-title";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  const skills = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Frontend",
      skills: [
        "Angular",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS / Styled Components",
      ],
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Backend",
      skills: ["Java", "Spring Boot", "Node.js", "Express", "python"],
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "UI/UX Design",
      skills: [
        "Implementação de Designs (Figma)",
        "Responsividade & Mobile-first",
        "Design System (Componentização)",
        "Otimização de Usabilidade",
      ],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Banco de Dados",
      skills: ["PostgreSQL", "Redis", "DynamoDB", "MongoDB"],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile",
      skills: [
        "React Native",
        "Integração com APIs REST",
        "Armazenamento Local (AsyncStorage)",
        "Publicação",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background-dark relative">
      <div
        className="absolute top-0 left-0 w-full h-20 bg-background-light"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}></div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-background-light"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)",
        }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Habilidades Técnicas</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  index: number;
}

function SkillCard({ icon, title, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-background-lighter rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 group">
      <div className="mb-6 text-primary-light group-hover:text-primary-light transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-primary-light transition-colors duration-300">
        {title}
      </h3>
      {Array.isArray(skills) ? (
        <ul className="list-disc list-inside text-white/70 space-y-2">
          {skills.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-white/70">{skills}</p>
      )}
    </motion.div>
  );
}
