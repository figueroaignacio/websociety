// Framer Motion
import { motion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: 0;
}

export const FadeUp = ({ children, delay }: FadeUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
