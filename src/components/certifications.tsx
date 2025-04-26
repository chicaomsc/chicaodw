"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionTitle from "./section-title";

const Certifications = forwardRef<HTMLDivElement>((props, ref) => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      url: "#",
    },
    {
      title: "Certified Secure Software Lifecycle Professional (CSSLP)",
      issuer: "ISC²",
      date: "2023",
      url: "#",
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      url: "#",
    },
    {
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2021",
      url: "#",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background-light relative">
      <div className="container mx-auto px-4">
        <SectionTitle>Certificações</SectionTitle>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                url={cert.url}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-background-lighter rounded-lg border border-white/5 text-center">
            <p className="text-white/80">
              Além das certificações listadas, estou constantemente me
              atualizando através de cursos online e workshops. Veja meu perfil
              completo no LinkedIn para mais informações.
            </p>
            <Link
              href="https://linkedin.com/in/chicaodw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent hover:text-primary-light transition-colors duration-300 group">
              Ver perfil completo
              <ExternalLink
                size={14}
                className="ml-1 group-hover:text-primary-light transition-colors"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Certifications.displayName = "Certifications";

export default Certifications;

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  url: string;
  index: number;
}

function CertificationCard({
  title,
  issuer,
  date,
  url,
  index,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-background-lighter p-6 rounded-lg shadow-lg border border-white/5 flex items-start">
      <div className="mr-4 mt-1 text-primary-light">
        <Award size={24} />
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-white/70 text-sm">{issuer}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white/50 text-xs">{date}</span>
          <Link
            href={url}
            className="text-primary-light text-xs hover:underline flex items-center">
            Ver certificado
            <ExternalLink size={10} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
