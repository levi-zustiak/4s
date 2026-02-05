import { motion } from 'motion/react';
import { ReactNode } from 'react';

const transitionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={transitionVariants}
    >
      {children}
    </motion.div>
  );
}
