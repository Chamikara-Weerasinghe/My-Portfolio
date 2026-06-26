"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Globe,
  Server,
} from "lucide-react";

const icons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0 },
  { Icon: Cloud, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Database, x: "75%", y: "70%", delay: 1 },
  { Icon: GitBranch, x: "15%", y: "75%", delay: 1.5 },
  { Icon: Terminal, x: "90%", y: "45%", delay: 2 },
  { Icon: Cpu, x: "5%", y: "50%", delay: 2.5 },
  { Icon: Globe, x: "50%", y: "10%", delay: 3 },
  { Icon: Server, x: "45%", y: "85%", delay: 3.5 },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute floating-icon"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
}
