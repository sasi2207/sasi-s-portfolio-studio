import React from "react";
import { useTheme } from "@/context/useTheme";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
  showColorDot?: boolean;
  showEmblem?: boolean;
  techTextColor?: string;
  subtitleColor?: string;
  subtitle?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = "", 
  size = "md",
  align = "center",
  showColorDot = false,
  showEmblem = true,
  techTextColor: customTechTextColor,
  subtitleColor: customSubtitleColor,
  subtitle = "WEB & APP SOLUTIONS",
}) => {
  const isLeft = align === "left";
  const { theme } = useTheme();

  const sizeClasses = {
    sm: {
      emblem: "w-9 h-9 sm:w-10 sm:h-10",
      title: "text-lg sm:text-xl md:text-2xl",
      subtitle: "text-[7.5px] sm:text-[8.5px] md:text-[9px]",
      line: "w-2 sm:w-2.5 md:w-3",
      gap: "gap-2 sm:gap-2.5",
    },
    md: {
      emblem: "w-11 h-11 md:w-12 md:h-12",
      title: "text-xl md:text-3xl",
      subtitle: "text-[8.5px] md:text-[10px]",
      line: "w-2.5 md:w-4",
      gap: "gap-2.5 md:gap-3",
    },
    lg: {
      emblem: "w-14 h-14 sm:w-16 sm:h-16",
      title: "text-2xl sm:text-4xl md:text-5xl",
      subtitle: "text-[9.5px] md:text-[11.5px]",
      line: "w-3.5 md:w-5",
      gap: "gap-3 md:gap-4",
    },
  };

  const currentSize = sizeClasses[size];

  // TechSasi Brand Gradient: Neon Cyan #00E5FF to Primary Blue #0061FF
  const gradientClass = "from-[#00E5FF] to-[#0061FF]";

  // Render "TECH" with dark text color (#111827) or white in dark containers
  const techTextColor = customTechTextColor || (theme === "light" ? "text-[#111827]" : "text-white");
  const subtitleColor = customSubtitleColor || (theme === "light" ? "text-[#0061FF]" : "text-[#00E5FF]");

  return (
    <div 
      className={`inline-flex items-center ${currentSize.gap} ${isLeft ? "justify-start text-left" : "justify-center text-center"} leading-none select-none group/logo ${className}`}
      title="TechSasi Web & App Solutions"
      aria-label="TechSasi Web & App Solutions"
    >
      {showEmblem && (
        <span className={`${currentSize.emblem} rounded-full bg-white p-[1px] ring-1 ring-[#0061FF]/25 shadow-[0_2px_10px_rgba(0,97,255,0.16)] overflow-hidden shrink-0 transition-transform duration-300 group-hover/logo:scale-105`}>
          <img
            src="/lo.png"
            alt="TechSasi Logo"
            className="w-full h-full object-contain rounded-full"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </span>
      )}

      <div className="flex flex-col leading-none">
        <div className={`${currentSize.title} font-black tracking-tight inline-flex items-center gap-0.5 ${isLeft ? "justify-start" : "justify-center"}`}>
          {/* TECH in Dark Text (#111827) or custom color */}
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
              title="TechSasi Web & App Solutions"
            />
          )}
        </div>

        {subtitle && (
          <div className={`flex items-center ${isLeft ? "justify-start" : "justify-center"} gap-1.5 mt-0.5 ${currentSize.subtitle} font-bold uppercase tracking-[0.18em] ${subtitleColor} transition-colors duration-200 whitespace-nowrap`}>
            <div 
              className={`${currentSize.line} h-[1.5px] rounded-full shrink-0 transition-colors duration-300`}
              style={{ background: "linear-gradient(to right, #00E5FF, #0061FF)" }}
              aria-hidden="true"
            />
            <span className="font-bold tracking-[0.18em]">{subtitle}</span>
            <div 
              className={`${currentSize.line} h-[1.5px] rounded-full shrink-0 transition-colors duration-300`}
              style={{ background: "linear-gradient(to right, #0061FF, #00E5FF)" }}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;