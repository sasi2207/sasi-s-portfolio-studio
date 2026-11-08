import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagnetButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  activeScale?: number;
}

export const MagnetButton: React.FC<MagnetButtonProps> = ({
  children,
  className = "",
  onClick,
  strength = 0.35,
  activeScale = 0.97,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      whileTap={{ scale: activeScale }}
      onClick={onClick}
      className={cn("inline-block cursor-pointer select-none", className)}
    >
      {children}
    </motion.div>
  );
};

export default MagnetButton;
