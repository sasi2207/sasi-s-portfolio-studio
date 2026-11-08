import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  enableTilt?: boolean;
  tiltMaxAngle?: number;
  glareEffect?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(207, 128, 71, 0.18)",
  borderColor = "rgba(207, 128, 71, 0.4)",
  enableTilt = true,
  tiltMaxAngle = 8,
  glareEffect = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate values relative to card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Normalized tilt coordinates (-0.5 to 0.5)
  const tiltX = useSpring(useTransform(mouseX, [0, 400], [tiltMaxAngle, -tiltMaxAngle]), {
    stiffness: 250,
    damping: 25,
  });
  const tiltY = useSpring(useTransform(mouseY, [0, 400], [-tiltMaxAngle, tiltMaxAngle]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt && isHovered
          ? {
              rotateX: tiltY,
              rotateY: tiltX,
              transformPerspective: 1000,
            }
          : undefined
      }
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300",
        "bg-[var(--card-bg)] border border-[var(--border-line)]",
        isHovered && "shadow-2xl -translate-y-1",
        className
      )}
      {...(props as any)}
    >
      {/* Dynamic ReactBits Mouse Spotlight Radial Gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, ${spotlightColor}, transparent 70%)`,
        }}
      />

      {/* Luminous Interactive Border Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          border: `1px solid ${borderColor}`,
          maskImage: `radial-gradient(320px circle at ${mouseX.get()}px ${mouseY.get()}px, black 40%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(320px circle at ${mouseX.get()}px ${mouseY.get()}px, black 40%, transparent 80%)`,
        }}
      />

      {/* Specular Glare Effect */}
      {glareEffect && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.25 : 0,
            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Card Body Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
};

export default SpotlightCard;
