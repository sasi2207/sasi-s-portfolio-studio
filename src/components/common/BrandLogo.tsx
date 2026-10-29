import React from "react";
import { useTheme } from "@/context/useTheme";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
  showColorDot?: boolean;
  techTextColor?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = "", 
  size = "md",
  align = "center",
  showColorDot = false,
  techTextColor: customTechTextColor,
}) => {
  const isLeft = align === "left";
  const { theme, brandConfig } = useTheme();

  const sizeClasses = {
    sm: {
      title: "text-xl sm:text-2xl md:text-3xl",
      subtitle: "text-[8px] sm:text-[9px] md:text-[10px]",
      line: "w-2.5 sm:w-3 md:w-4",
    },
    md: {
      title: "text-2xl md:text-3xl",
      subtitle: "text-[9px] md:text-[10px]",
      line: "w-3 md:w-4",
    },
    lg: {
      title: "text-3xl sm:text-4xl md:text-5xl",
      subtitle: "text-[10px] md:text-[12px]",
      line: "w-4 md:w-6",
    },
  };

  const currentSize = sizeClasses[size];

  // Pick dynamic gradient matching active Brand Color
  const gradientClass = theme === "light" 
    ? brandConfig.lightGradientText 
    : brandConfig.gradientText;

  // Render "TECH" with black text color (explicit or light theme default)
  const techTextColor = customTechTextColor || (theme === "light" ? "text-black" : "text-white");

  return (
    <div className={`leading-none ${isLeft ? "text-left" : "text-center"} select-none group/logo ${className}`}>
      <h1 className={`${currentSize.title} font-black tracking-tight inline-flex items-center gap-0.5 ${isLeft ? "justify-start" : "justify-center"}`}>
        {/* Dynamic color for TECH */}
        <span className={`${techTextColor} font-black transition-colors duration-200 drop-shadow-xs`}>
          TECH
        </span>
        <span
          className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent font-black tracking-tight transition-all duration-300 drop-shadow-xs`}
        >
          SASI
        </span>
        {showColorDot && (
          <span
            className={`w-1.5 h-1.5 rounded-full ${brandConfig.dotColor} shrink-0 ml-0.5 animate-pulse`}
            title={`Active Brand Color: ${brandConfig.name}`}
          />
        )}
      </h1>

      <div className={`flex items-center ${isLeft ? "justify-start" : "justify-center"} gap-1.5 mt-1 ${currentSize.subtitle} font-bold uppercase text-muted-foreground tracking-wider transition-colors duration-200`}>
        <div 
          className={`${currentSize.line} h-[1.5px] rounded-full shrink-0 transition-colors duration-300`}
          style={{ background: `linear-gradient(to right, var(--accent-from), var(--accent-to))` }}
        />
        <span>Learn</span>
        <span style={{ color: "var(--accent)" }}>•</span>
        <span>Build</span>
        <span style={{ color: "var(--accent)" }}>•</span>
        <span>Grow</span>
        <div 
          className={`${currentSize.line} h-[1.5px] rounded-full shrink-0 transition-colors duration-300`}
          style={{ background: `linear-gradient(to right, var(--accent-to), var(--accent-from))` }}
        />
      </div>
    </div>
  );
};

export default BrandLogo;