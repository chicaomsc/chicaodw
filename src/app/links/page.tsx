"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  ExternalLink,
  MessageCircle,
  Instagram,
} from "lucide-react";
import ParticlesBackground from "@/components/particles-background";

export default function LinksPage() {
  const links = [
    {
      title: "Meu site",
      description: "Conheça meus projetos e habilidades",
      url: "https://franciscocosta.dev.br",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "WhatsApp",
      description: "Para mais informações!",
      url: "https://wa.me/5599984289317?text=Olá%20Francisco!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20possível%20projeto.",
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      url: "https://linkedin.com/in/chicaodw",
    },
    {
      name: "GitHub",
      icon: <Github />,
      url: "https://github.com/chicaodw",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: "https://instagram.com/chicaodw",
    },
    { name: "Email", icon: <Mail />, url: "mailto:francyscocosta@gmail.com" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center py-12 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <ParticlesBackground />
      </div>

      <div className="container max-w-2xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6">
            <div className="relative z-10 rounded-full overflow-hidden w-32 h-32 border-2 border-white/10 shadow-xl">
              <Image
                src="/dw3.webp"
                alt="Francisco Costa"
                fill
                sizes="128px"
                className="object-cover scale-[1.4] translate-y-5"
                priority
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-light to-primary-dark rounded-full blur-md opacity-30 -z-10"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold font-poppins text-gradient mb-2 text-center">
            Francisco Costa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/80 text-center mb-8 max-w-md">
            Engenheiro de Software especialista em Full Stack & Cloud.
            Construindo soluções seguras e escaláveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4 mb-10">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background-lighter p-3 rounded-full text-white/70 hover:text-primary-light transition-colors duration-300 hover:bg-background-light"
                aria-label={social.name}>
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full space-y-4">
            {links.map((link, index) => (
              <motion.div key={index} variants={item}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-background-lighter hover:bg-background-light rounded-lg border border-white/5 transition-all duration-300 group hover:border-primary-light/30 hover:shadow-lg hover:shadow-primary-light/5">
                  <div className="mr-4 text-primary-light">{link.icon}</div>
                  <div className="flex-1">
                    <h2 className="font-medium group-hover:text-primary-light transition-colors duration-300">
                      {link.title}
                    </h2>
                    <p className="text-sm text-white/60">{link.description}</p>
                  </div>
                  <div className="text-white/30 group-hover:text-primary-light transition-colors duration-300">
                    <ExternalLink size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Francisco Costa</p>
            <p className="mt-1">Todos os direitos reservados</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
