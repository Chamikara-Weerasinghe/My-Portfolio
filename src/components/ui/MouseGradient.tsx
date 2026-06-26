"use client";

import { useEffect, useState } from "react";

export default function MouseGradient() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-all duration-1000 ease-out mouse-gradient-bg"
      style={{
        background: `radial-gradient(600px circle at ${position.x}% ${position.y}%, var(--theme-mouse-gradient), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
}
