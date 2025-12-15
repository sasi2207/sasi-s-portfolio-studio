import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PageLoader = () => {
  const bars = [0, 1, 2, 3, 4];
  const [visible, setVisible] = useState(true);

  // ⏱ Auto hide after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-white
      "
    >
      <div className="flex items-end gap-5 h-10">
        {bars.map((i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-full bg-orange-500"
            animate={{
              height: ["30%", "100%", "30%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.12,
              ease: [0.4, 0.0, 0.6, 1.0], // TS-safe
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
