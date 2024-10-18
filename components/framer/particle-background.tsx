"use client";

// Hooks
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

// Icons
import {
  CSSIcon,
  Github,
  HTMLIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../tech-icons";

import { motion } from "framer-motion";

const programmingChars = ["{", "}", "=", ";", ":", "0", "1"];

const elements = [
  ...programmingChars,
  "NextIcon",
  "TypescriptIcon",
  "ReactIcon",
  "TailwindIcon",
  "CSSIcon",
  "Github",
  "HTMLIcon",
  "JavascriptIcon",
];

const useParticles = (count: number) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        element: elements[Math.floor(Math.random() * elements.length)],
        size: Math.random() * 20 + 10,
        speed: Math.random() * 5 + 1,
      })),
    [count]
  );

  return particles;
};

export function ParticleBackground() {
  const { resolvedTheme } = useTheme();
  const particles = useParticles(50); // Aumentar la cantidad de partículas a 50
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${
            resolvedTheme === "dark" ? "text-gray-700" : "text-gray-300"
          }`}
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            fontSize: `${particle.size}px`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30],
            y: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30],
            rotate: [0, 360 * Math.random()],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          {particle.element === "NextIcon" ? (
            <NextIcon />
          ) : particle.element === "TypescriptIcon" ? (
            <TypescriptIcon />
          ) : particle.element === "ReactIcon" ? (
            <ReactIcon />
          ) : particle.element === "TailwindIcon" ? (
            <TailwindIcon />
          ) : particle.element === "CSSIcon" ? (
            <CSSIcon />
          ) : particle.element === "Github" ? (
            <Github />
          ) : particle.element === "HTMLIcon" ? (
            <HTMLIcon />
          ) : particle.element === "JavascriptIcon" ? (
            <JavascriptIcon />
          ) : (
            particle.element
          )}
        </motion.div>
      ))}
    </div>
  );
}
