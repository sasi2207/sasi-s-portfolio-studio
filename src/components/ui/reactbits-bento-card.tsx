import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ReactBitsBentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  hasShimmer?: boolean;
}

export const ReactBitsBentoCard: React.FC<ReactBitsBentoCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(207, 128, 71, 0.16)",
  borderColor = "rgba(207, 128, 71, 0.4)",
  hasShimmer = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl overflow-hidden border border-[var(--border-line)] bg-[var(--card-bg)] text-[var(--text-primary)] p-6 md:p-8 transition-all duration-300",
        "hover:shadow-2xl hover:border-[var(--accent)]/50 hover:-translate-y-1.5 flex flex-col justify-between",
        className
      )}
      {...props}
    >
      {/* Interactive ReactBits Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mouseX.get()}px ${mouseY.get()}px, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Luminous Interactive Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          border: `1px solid ${borderColor}`,
          maskImage: `radial-gradient(280px circle at ${mouseX.get()}px ${mouseY.get()}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(280px circle at ${mouseX.get()}px ${mouseY.get()}px, black 30%, transparent 80%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default ReactBitsBentoCard;
