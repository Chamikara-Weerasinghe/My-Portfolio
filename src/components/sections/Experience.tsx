"use client";

import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-px"
            aria-hidden="true"
          />

          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 0.2}>
              <div className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10 glow-blue" />

                {/* Content card */}
                <div className={`md:col-start-${i % 2 === 0 ? "1" : "2"}`}>
                  <div className="p-6 rounded-2xl glass hover-card transition-colors md:mr-8">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-mono">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                        <p className="text-muted mb-4">{exp.company}</p>

                        <ul className="space-y-2">
                          {exp.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-sm text-muted"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
