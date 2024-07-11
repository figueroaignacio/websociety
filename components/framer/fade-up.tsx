// Framer Motion
import { motion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  ease?: string | number[]; // Allow for both preset and custom easing
  yOffset?: number; // Allow custom offset for the Y-axis
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  ease = "easeOut", // Default easing
  yOffset = 20, // Default Y offset
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: ease,
      }}
    >
      {children}
    </motion.div>
  );
}
