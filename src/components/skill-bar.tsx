"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-background-dark rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-2.5 rounded-full bg-gradient bg-linear-to-r from-primary-light to-primary-dark"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
