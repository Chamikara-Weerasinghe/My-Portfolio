"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-theme py-10 md:py-12" role="contentinfo">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto group cursor-default"
        >
          <p className="text-base md:text-lg text-muted leading-relaxed mb-4 transition-all duration-500 group-hover:text-foreground">
            Turning Ideas Into Real-World Digital Experiences.
          </p>
          <p className="text-xs md:text-sm text-muted/70 tracking-wide transition-all duration-500 group-hover:gradient-text group-hover:opacity-100">
            &copy; 2026 Chamikara Weerasinghe
          </p>
          <div
            className="mt-6 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-500"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </footer>
  );
}
