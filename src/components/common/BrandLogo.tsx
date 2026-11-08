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

  // TechSasi Brand Gradient: Neon Cyan #00E5FF to Primary Blue #0061FF
  const gradientClass = "from-[#00E5FF] to-[#0061FF]";

  // Render "TECH" with dark text color (#111827) or white in dark containers
  const techTextColor = customTechTextColor || (theme === "light" ? "text-[#111827]" : "text-white");

  return (
    <div className={`leading-none ${isLeft ? "text-left" : "text-center"} select-none group/logo ${className}`}>
      <div className={`${currentSize.title} font-black tracking-tight inline-flex items-center gap-0.5 ${isLeft ? "justify-start" : "justify-center"}`}>
        {/* TECH in Dark Text (#111827) */}
        <span className={`${techTextColor} font-black transition-colors duration-200`}>
          TECH
        </span>
        {/* SASI in Primary Gradient (Neon Cyan #00E5FF to Primary Blue #0061FF) */}
        <span
          className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent font-black tracking-tight transition-all duration-300`}
        >
          SASI
        </span>
        {showColorDot && (
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] shrink-0 ml-0.5 animate-pulse"
            title="TechSasi Web Solutions"
          />
        )}
      </div>

      <div className={`flex items-center ${isLeft ? "justify-start" : "justify-center"} gap-1.5 mt-1 ${currentSize.subtitle} font-bold uppercase text-[#64748B] tracking-wider transition-colors duration-200`}>
        <div 
          className={`${currentSize.line} h-[1.5px] rounded-full shrink-0 transition-colors duration-300`}
          style={{ background: "linear-gradient(to right, #00E5FF, #0061FF)" }}
        />
        <span>Learn</span>
        <span className="text-[#0061FF] font-black">•</span>
        <span>Build</span>
        <span className="text-[#00E5FF] font-black">•</span>
        <span>Grow</span>
        <div 
          className={`${currentSize.line} h-[1.5px] rounded-full shrink-0 transition-colors duration-300`}
          style={{ background: "linear-gradient(to right, #0061FF, #00E5FF)" }}
        />
      </div>
    </div>
  );
};

export default BrandLogo;