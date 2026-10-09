import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = "", 
  size = "md",
  align = "center" 
}) => {
  const isLeft = align === "left";

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

  return (
    <div className={`leading-none ${isLeft ? "text-left" : "text-center"} select-none ${className}`}>
      <h1 className={`${currentSize.title} font-black tracking-tight inline-flex items-center ${isLeft ? "justify-start" : "justify-center"}`}>
        <span className="text-gray-900 dark:text-white transition-colors duration-200">TECH</span>
        <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 dark:from-amber-400 dark:via-amber-300 dark:to-orange-400 bg-clip-text text-transparent">
          SASI
        </span>
      </h1>

      <div className={`flex items-center ${isLeft ? "justify-start" : "justify-center"} gap-1.5 mt-1 ${currentSize.subtitle} font-bold uppercase text-gray-400 dark:text-gray-400 tracking-wider`}>
        <div className={`${currentSize.line} h-[1.5px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shrink-0`} />
        <span>Learn</span>
        <span className="text-amber-500">•</span>
        <span>Build</span>
        <span className="text-amber-500">•</span>
        <span>Grow</span>
        <div className={`${currentSize.line} h-[1.5px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full shrink-0`} />
      </div>
    </div>
  );
};

export default BrandLogo;
