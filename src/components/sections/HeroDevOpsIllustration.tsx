"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Network,
  Package,
  Zap,
  GitBranch,
} from "lucide-react";

const ORBIT_NODES = [
  { Icon: Cloud, label: "Cloud", angle: -90, delay: 0 },
  { Icon: Container, label: "Docker", angle: -30, delay: 0.4 },
  { Icon: GitBranch, label: "CI/CD", angle: 30, delay: 0.8 },
  { Icon: Network, label: "Kubernetes", angle: 90, delay: 1.2 },
  { Icon: Package, label: "Deployment", angle: 150, delay: 1.6 },
  { Icon: Zap, label: "Automation", angle: 210, delay: 2.0 },
] as const;

const RADIUS = 118;
const CENTER = 200;

function polarToCartesian(angleDeg: number, radius: number) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + Math.cos(angleRad) * radius,
    y: CENTER + Math.sin(angleRad) * radius,
  };
}

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: 20 + ((i * 31) % 360),
  y: 15 + ((i * 47) % 370),
  size: 2 + (i % 3),
  duration: 4 + (i % 4),
  delay: i * 0.3,
}));

export default function HeroDevOpsIllustration() {
  return (
    <div
      className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent/10 blur-[70px] translate-x-8 translate-y-4" />

      {/* Connection lines */}
      <svg
        className="absolute w-[min(100%,380px)] h-[min(100%,380px)] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id="devops-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="devops-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle orbit ring */}
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="url(#devops-line)"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {ORBIT_NODES.map((node) => {
          const { x, y } = polarToCartesian(node.angle, RADIUS);
          return (
            <motion.line
              key={node.label}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="url(#devops-line)"
              strokeWidth="1"
              animate={{
                opacity: [0.12, 0.5, 0.12],
                strokeWidth: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        <circle cx={CENTER} cy={CENTER} r="52" fill="url(#devops-hub-glow)" />
      </svg>

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${(p.x / 400) * 100}%`,
            top: `${(p.y / 400) * 100}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central hub */}
      <motion.div
        className="absolute z-10 flex items-center justify-center"
        animate={{
          y: [0, -6, 0],
          rotate: [0, 1.5, -1.5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-strong glow-blue"
          animate={{
            boxShadow: [
              "0 0 30px rgba(59,130,246,0.15), 0 0 60px rgba(59,130,246,0.05)",
              "0 0 40px rgba(139,92,246,0.2), 0 0 70px rgba(59,130,246,0.08)",
              "0 0 30px rgba(59,130,246,0.15), 0 0 60px rgba(59,130,246,0.05)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cloud
            className="text-primary"
            size={36}
            strokeWidth={1.5}
          />
          <motion.div
            className="absolute inset-0 rounded-2xl border border-primary/20"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Orbit nodes */}
      {ORBIT_NODES.map((node) => {
        const { x, y } = polarToCartesian(node.angle, RADIUS);
        const left = `${(x / 400) * 100}%`;
        const top = `${(y / 400) * 100}%`;

        return (
          <motion.div
            key={node.label}
            className="absolute z-10 flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"
            style={{ left, top }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4 + (node.delay % 2),
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl glass glow-purple"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3.5,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <node.Icon
                className="text-accent-light"
                size={18}
                strokeWidth={1.5}
              />
            </motion.div>
            <span className="text-[10px] md:text-xs text-muted/80 font-mono tracking-wide whitespace-nowrap">
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Subtle outer rotation wrapper for depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-[12%] left-[18%] w-1 h-1 rounded-full bg-accent/30" />
        <div className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-primary/30" />
        <div className="absolute top-[35%] right-[22%] w-1 h-1 rounded-full bg-accent/25" />
      </motion.div>
    </div>
  );
}
