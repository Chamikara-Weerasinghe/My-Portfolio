"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cloud } from "lucide-react";

const PARTICLES = [
  { radius: 52, duration: 14, size: 3, delay: 0 },
  { radius: 52, duration: 14, size: 2, delay: 4.67 },
  { radius: 52, duration: 14, size: 2.5, delay: 9.33 },
  { radius: 62, duration: 20, size: 2, delay: 0 },
  { radius: 62, duration: 20, size: 2.5, delay: 6.67 },
  { radius: 62, duration: 20, size: 2, delay: 13.33 },
];

function OrbitParticle({
  radius,
  duration,
  size,
  delay,
  reduced,
}: {
  radius: number;
  duration: number;
  size: number;
  delay: number;
  reduced: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={reduced ? undefined : { rotate: 360 }}
      transition={
        reduced
          ? undefined
          : { duration, repeat: Infinity, ease: "linear", delay }
      }
    >
      <div
        className="absolute left-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
        style={{
          width: size,
          height: size,
          top: `calc(50% - ${radius}px)`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 6px rgba(59, 130, 246, 0.6)",
        }}
      />
    </motion.div>
  );
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          aria-label="Loading"
          role="status"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-8 flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40"
          >
            {/* Ambient gradient glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 blur-3xl" />
            <motion.div
              className="absolute h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl sm:h-28 sm:w-28"
              animate={
                reduced
                  ? undefined
                  : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }
              }
              transition={
                reduced
                  ? undefined
                  : { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            />

            {/* Orbiting particles */}
            {PARTICLES.map((p, i) => (
              <OrbitParticle key={i} {...p} reduced={reduced} />
            ))}

            {/* Animated ring */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="loading-ring-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="rgba(59, 130, 246, 0.08)"
                strokeWidth="0.5"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="url(#loading-ring-gradient)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="70 206"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={
                  reduced
                    ? undefined
                    : { duration: 3, repeat: Infinity, ease: "linear" }
                }
                style={{ transformOrigin: "50px 50px" }}
              />
            </svg>

            {/* Cloud icon */}
            <motion.div
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-surface/80 backdrop-blur-sm glow-blue sm:h-14 sm:w-14"
              animate={
                reduced
                  ? undefined
                  : { scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }
              }
              transition={
                reduced
                  ? undefined
                  : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Cloud
                className="h-6 w-6 text-primary sm:h-7 sm:w-7"
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-sm font-medium tracking-wide text-muted"
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
