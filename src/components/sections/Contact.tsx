"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GetInTouchForm from "@/components/ui/GetInTouchForm";

export default function Contact() {
  const contactLinks = [
    { icon: Github, label: "GitHub", href: siteConfig.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin },
    {
      icon: Mail,
      label: "Email",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=Portfolio%20Inquiry`,
    },
    { icon: MapPin, label: siteConfig.location, href: "#" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Let&apos;s work{" "}
                <span className="gradient-text">together</span>
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out!
              </p>

              <div className="space-y-4">
                {contactLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-xl glass hover-card transition-colors group"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className="text-muted group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="p-6 md:p-8 rounded-2xl glass-strong glow-purple">
              <GetInTouchForm idPrefix="contact" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
