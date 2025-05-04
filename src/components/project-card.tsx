"use client";

import type React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  image: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-background-lighter rounded-lg overflow-hidden shadow-lg group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} - ${description}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-darker to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex space-x-4 mb-4">
            {/* <ProjectButton icon={<ExternalLink size={16} />} label="Ver Demo" />
            <ProjectButton icon={<Github size={16} />} label="Ver Código" /> */}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary-light transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-medium">
            {technologies}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// interface ProjectButtonProps {
//   icon: React.ReactNode;
//   label: string;
// }

// function ProjectButton({ icon, label }: ProjectButtonProps) {
//   return (
//     <Link
//       href="#"
//       className="flex items-center bg-black/80 backdrop-blur-xs text-white hover:bg-primary-dark px-3 py-2 rounded-md text-xs transition-colors duration-300">
//       <span className="mr-1">{icon}</span>
//       {label}
//     </Link>
//   );
// }
