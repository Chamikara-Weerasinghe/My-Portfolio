"use client";

import Image from "next/image";
import { aboutHighlights, stats } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile photo */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-square rounded-3xl glass-strong overflow-hidden glow-purple">
                <Image
                  src="/profile.png"
                  alt="Chamikara Weerasinghe"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 -z-10 blur-xl"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Passionate Developer &{" "}
                <span className="gradient-text">Problem Solver</span>
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                I&apos;m a Software Engineering undergraduate with hands-on
                experience as a DevOps Engineer Intern at Sri Lanka Telecom PLC.
                I love building full-stack applications, automating workflows,
                and exploring cloud technologies that make systems more
                efficient and reliable.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {aboutHighlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full glass text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="p-6 rounded-2xl glass text-center hover:bg-white/[0.07] transition-colors group">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-sm text-muted group-hover:text-foreground transition-colors">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
