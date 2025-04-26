"use client";

import type React from "react";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold inline-block relative font-poppins">
        {children}
        <span className="block h-1 w-1/2 mx-auto mt-2 bg-gradient bg-linear-to-r from-primary-light to-primary-dark rounded-full"></span>
      </h2>
    </motion.div>
  );
}
