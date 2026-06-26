"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {subtitle && (
        <span className="text-primary text-sm font-mono tracking-widest uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 id={id} className="text-3xl md:text-4xl lg:text-5xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
    </motion.div>
  );
}
