import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxAngle?: number;
  scaleOnHover?: number;
  showGlare?: boolean;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  containerClassName = "",
  maxAngle = 12,
  scaleOnHover = 1.03,
  showGlare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [maxAngle, -maxAngle]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxAngle, maxAngle]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  }, [x, y]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  }, [x, y]);

  return (
    <div
      className={cn("perspective-1000", containerClassName)}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative rounded-2xl transition-shadow duration-300",
          isHovered ? "shadow-2xl" : "shadow-md",
          className
        )}
      >
        {children}

        {/* Specular Holographic Glare Overlay */}
        {showGlare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden mix-blend-overlay transition-opacity duration-300 z-30"
            style={{
              opacity: isHovered ? 0.35 : 0,
              background: `radial-gradient(circle at ${x.get() * 100}% ${y.get() * 100}%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TiltedCard;
