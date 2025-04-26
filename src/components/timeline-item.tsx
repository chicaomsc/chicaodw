"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  delay?: number;
}

export default function TimelineItem({
  year,
  title,
  organization,
  description,
  delay = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative pl-8 border-l-2 border-background-dark hover:border-primary-light transition-colors duration-300 group"
      whileHover={{ x: 5 }}>
      <motion.div
        className="absolute left-[-8px] top-0 w-3.5 h-3.5 bg-background-dark rounded-full group-hover:bg-primary-light transition-colors duration-300"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.2 }}
      />
      <span className="text-sm bg-gradient bg-linear-to-r from-primary-light to-primary-dark bg-clip-text text-transparent font-medium">
        {year}
      </span>
      <h4 className="text-lg font-bold mt-1 group-hover:text-primary-light transition-colors duration-300">
        {title}
      </h4>
      <p className="text-white/60">{organization}</p>
      <p className="text-sm text-white/70 mt-2">{description}</p>
    </motion.div>
  );
}
