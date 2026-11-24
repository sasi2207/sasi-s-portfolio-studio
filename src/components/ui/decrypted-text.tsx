import React, { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view" | "both";
  revealDirection?: "start" | "end" | "center";
  sequential?: boolean;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 45,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=",
  className = "",
  parentClassName = "",
  encryptedClassName = "text-[var(--accent)] font-mono",
  animateOn = "hover",
  revealDirection = "start",
  sequential = true,
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);
  const iterationRef = useRef<number>(0);

  const triggerAnimation = useCallback(() => {
    setIsScrambling(true);
    iterationRef.current = 0;
    setRevealedIndices(new Set());
  }, []);

  useEffect(() => {
    if (animateOn === "view" || animateOn === "both") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            triggerAnimation();
          }
        },
        { threshold: 0.2 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      return () => observer.disconnect();
    }
  }, [animateOn, triggerAnimation]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isScrambling) {
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex =
                revealDirection === "end"
                  ? text.length - 1 - prevRevealed.size
                  : prevRevealed.size;
              const nextSet = new Set(prevRevealed);
              nextSet.add(nextIndex);
              return nextSet;
            } else {
              setIsScrambling(false);
              return prevRevealed;
            }
          } else {
            iterationRef.current++;
            if (iterationRef.current >= maxIterations) {
              setIsScrambling(false);
              return new Set(Array.from({ length: text.length }, (_, i) => i));
            }
            return prevRevealed;
          }
        });

        setDisplayText((_) =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (revealedIndices.has(index)) return char;
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
      }, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isScrambling, text, characters, speed, sequential, revealDirection, maxIterations, revealedIndices]);

  const handleMouseEnter = () => {
    if (animateOn === "hover" || animateOn === "both") {
      setIsHovering(true);
      triggerAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover" || animateOn === "both") {
      setIsHovering(false);
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-block cursor-default select-none", parentClassName)}
    >
      <span className={className}>
        {displayText.split("").map((char, index) => {
          const isRevealed = !isScrambling || revealedIndices.has(index);
          return (
            <span
              key={index}
              className={isRevealed ? undefined : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default DecryptedText;
