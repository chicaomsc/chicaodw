"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Code, Shield, Database, Layout, Globe, Cpu } from "lucide-react"
import SectionTitle from "./section-title"

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desenvolvimento Full Stack",
      description:
        "Criação de aplicações web completas, do backend ao frontend, utilizando as tecnologias mais modernas do mercado.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Segurança de Aplicações",
      description:
        "Implementação de práticas de segurança, auditorias e correção de vulnerabilidades em sistemas existentes.",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Arquitetura de Dados",
      description:
        "Modelagem e otimização de bancos de dados, implementação de soluções escaláveis e de alta performance.",
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e experiências de usuário que combinam estética e funcionalidade.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Desenvolvimento Cloud",
      description: "Implementação de soluções em nuvem utilizando AWS, com foco em escalabilidade e disponibilidade.",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Consultoria Técnica",
      description:
        "Assessoria especializada para empresas em transição digital ou que buscam melhorar seus processos tecnológicos.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-background-dark relative">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-background-light"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-background-light"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Meus Serviços</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

Services.displayName = "Services"

export default Services

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-background-lighter rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 group"
    >
      <div className="mb-6 text-primary-light group-hover:text-primary-light transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-primary-light transition-colors duration-300">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  )
}
