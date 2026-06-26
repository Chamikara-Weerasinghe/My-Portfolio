"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Cloud, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  wrench: Wrench,
  cloud: Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <SectionHeading title="Skills & Technologies" subtitle="What I Know" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code2;

            return (
              <ScrollReveal key={category.title} delay={catIndex * 0.1}>
                <div className="p-6 rounded-2xl glass hover:bg-white/[0.07] transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-surface-light/50 border border-white/5 text-muted hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
