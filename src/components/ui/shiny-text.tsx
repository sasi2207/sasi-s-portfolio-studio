import React from "react";
import { cn } from "@/lib/utils";

export interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  shimmerWidth?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3,
  className = "",
  shimmerWidth = 100,
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-no-repeat",
        !disabled && "animate-shimmer",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(120deg, var(--text-primary) 0%, var(--text-primary) 35%, var(--accent) 50%, var(--text-primary) 65%, var(--text-primary) 100%)",
        backgroundSize: `${shimmerWidth * 2}% 100%`,
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
