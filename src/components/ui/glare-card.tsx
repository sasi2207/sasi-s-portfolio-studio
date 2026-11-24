import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface GlareCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}

export const GlareCard: React.FC<GlareCardProps> = ({
  children,
  className = "",
  glareColor = "rgba(255, 255, 255, 0.2)",
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number; opacity: number }>({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y, opacity: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCoords((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl overflow-hidden border border-[var(--border-line)] bg-[var(--card-bg)] transition-all duration-300",
        "hover:shadow-2xl hover:border-[var(--accent)]/40 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Glare Sheen Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20"
        style={{
          opacity: coords.opacity,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glareColor}, transparent 65%)`,
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default GlareCard;
