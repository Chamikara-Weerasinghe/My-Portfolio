"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { roles, siteConfig } from "@/lib/data";
import HeroDevOpsIllustration from "@/components/sections/HeroDevOpsIllustration";

function TypingAnimation({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-primary font-mono">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 hero-blob-primary rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 hero-blob-accent rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="text-muted text-lg mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="gradient-text">Chamikara</span>
              <br />
              <span className="text-foreground">Weerasinghe</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="text-lg md:text-xl text-muted mb-6 h-8"
            >
              <TypingAnimation texts={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.3, ease: "easeOut" }}
              className="text-sm md:text-base font-mono tracking-wide text-muted/85 mb-8 max-w-xl"
            >
              Cloud &bull; DevOps &bull; Automation &bull; Software Engineering
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("#projects")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity glow-blue"
                >
                  View Projects
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 rounded-xl glass hover-glass transition-colors font-medium flex items-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-xl glass hover-glass transition-all duration-300 hover:glow-blue"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin size={18} strokeWidth={1.75} />
                  </motion.div>
                  <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                    LinkedIn
                  </span>
                </motion.a>

                <motion.a
                  href="mailto:chamikaraweerasinghe036@gmail.com"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-xl glass hover-glass transition-all duration-300 hover:glow-purple"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors"
                  >
                    <Mail size={18} strokeWidth={1.75} />
                  </motion.div>
                  <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                    Email Me
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right - DevOps illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="relative"
          >
            <HeroDevOpsIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollTo("#about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
