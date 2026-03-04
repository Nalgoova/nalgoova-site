"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
        transition={{ duration: 0.42, ease: [0.21, 0.61, 0.35, 1] }}
      >
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(4,34,44,0.20), rgba(4,34,44,0.05))",
            zIndex: 60
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
