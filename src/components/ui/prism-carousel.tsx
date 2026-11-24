import React, { useState, useEffect, useRef, useCallback, useId } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ExternalLink, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PrismCarouselItem {
  id?: string | number;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  tagline?: string;
  category?: string;
  badge?: string;
  priceTag?: string;
  deliveryTime?: string;
  features?: string[];
  primaryLink?: string;
  primaryLinkText?: string;
  whatsappMessage?: string;
  href?: string;
  [key: string]: any;
}

export interface PrismCarouselProps {
  items: PrismCarouselItem[];
  startIndex?: number;
  aspect?: number;
  size?: number;
  neighborScale?: number;
  gap?: number;
  radius?: number;
  saturation?: number;
  dim?: number;
  sweep?: number;
  sweepDuration?: number;
  dispersion?: number;
  autoplay?: boolean;
  interval?: number;
  loop?: boolean;
  captions?: boolean;
  controls?: boolean;
  draggable?: boolean;
  wheel?: boolean;
  pauseOnHover?: boolean;
  backgroundColor?: string;
  paused?: boolean;
  ariaLabel?: string;
  onIndexChange?: (index: number) => void;
  onSelect?: (item: PrismCarouselItem, index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const PrismCarousel: React.FC<PrismCarouselProps> = ({
  items,
  startIndex = 0,
  aspect = 1.5,
  size = 0.62,
  neighborScale = 0.72,
  gap = 20,
  radius = 20,
  saturation = 0,
  dim = 0.25,
  sweep = 1,
  sweepDuration = 1.1,
  dispersion = 1,
  autoplay = true,
  interval = 4.5,
  loop = true,
  captions = true,
  controls = true,
  draggable = true,
  wheel = false,
  pauseOnHover = true,
  backgroundColor = "transparent",
  paused = false,
  ariaLabel = "Prism carousel: A coverflow that sweeps color into each new image",
  onIndexChange,
  onSelect,
  className = "",
  style = {},
}) => {
  const [activeIndex, setActiveIndex] = useState(
    Math.min(Math.max(0, startIndex), Math.max(0, items.length - 1))
  );
  const [sweepKey, setSweepKey] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dispersionOffset, setDispersionOffset] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartXRef = useRef<number>(0);
  const currentDragXRef = useRef<number>(0);

  const carouselId = useId();
  const count = items.length;

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      let target = index;
      if (loop) {
        target = (target % count + count) % count;
      } else {
        target = Math.max(0, Math.min(target, count - 1));
      }

      if (target !== activeIndex) {
        setActiveIndex(target);
        setSweepKey((prev) => prev + 1);
        if (onIndexChange) onIndexChange(target);
      }
    },
    [count, loop, activeIndex, onIndexChange]
  );

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [goTo, activeIndex]);

  const prev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [goTo, activeIndex]);

  // Autoplay loop
  useEffect(() => {
    if (!autoplay || paused || (pauseOnHover && isHovered) || isDragging || count <= 1) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      next();
    }, interval * 1000);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [autoplay, paused, isHovered, pauseOnHover, isDragging, count, interval, next]);

  // Drag handling
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!draggable) return;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    currentDragXRef.current = e.clientX;
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    currentDragXRef.current = e.clientX;
    const diff = e.clientX - dragStartXRef.current;
    setDragOffset(diff);

    if (dispersion > 0) {
      const disp = Math.max(-12, Math.min(12, diff * 0.08 * dispersion));
      setDispersionOffset(disp);
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDispersionOffset(0);

    const threshold = 55;
    if (dragOffset > threshold) {
      prev();
    } else if (dragOffset < -threshold) {
      next();
    }
    setDragOffset(0);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "Enter" || e.key === " ") {
      if (items[activeIndex]) {
        e.preventDefault();
        if (onSelect) onSelect(items[activeIndex], activeIndex);
        if (items[activeIndex].href) {
          window.location.href = items[activeIndex].href;
        }
      }
    }
  };

  const currentItem = items[activeIndex] || items[0];

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) handlePointerUp();
      }}
      className={cn(
        "relative w-full select-none outline-none overflow-hidden rounded-3xl transition-colors duration-300",
        className
      )}
      style={{
        backgroundColor,
        minHeight: "460px",
        ...style,
      }}
    >
      {/* Prismatic Header Badge */}
      <div className="flex items-center justify-between px-6 pt-6 pb-2 z-20 relative">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse" />
            React Bits Pro · Prism Carousel
          </span>
          <span className="text-[11px] font-mono text-[var(--text-muted)] hidden sm:inline-block">
            Chromatic Color Sweep Coverflow
          </span>
        </div>

        {controls && (
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
            <span className="font-bold text-[var(--accent)]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(count).padStart(2, "0")}</span>
          </div>
        )}
      </div>

      {/* 3D Coverflow Stage with Prismatic Sweep */}
      <div
        className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing perspective-[1200px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {items.map((item, idx) => {
          // Calculate relative position to active index
          let offset = idx - activeIndex;
          if (loop) {
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
          }

          const isActive = offset === 0;
          const isPrev = offset === -1;
          const isNext = offset === 1;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          // Spatial calculations for coverflow
          const xBase = offset * (280 + gap) + dragOffset * 0.75;
          const rotateY = offset * -22;
          const zBase = Math.abs(offset) * -140;
          const scale = isActive ? 1 : neighborScale;
          const opacity = Math.abs(offset) > 1.5 ? 0.3 : Math.abs(offset) === 1 ? 0.82 : 1;

          return (
            <motion.div
              key={`${item.id || idx}-${idx}`}
              className={cn(
                "absolute rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-300",
                "border border-[var(--border-line)] bg-[var(--card-bg)]",
                isActive ? "z-30 ring-2 ring-[var(--accent)]/40 shadow-[0_20px_50px_rgba(0,0,0,0.35)]" : "z-10 hover:border-[var(--accent)]/60"
              )}
              style={{
                width: "min(92vw, 480px)",
                height: "min(68vw, 300px)",
                transformStyle: "preserve-3d",
              }}
              animate={{
                x: xBase,
                z: zBase,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
              }}
              onClick={() => {
                if (!isActive) {
                  goTo(idx);
                } else if (onSelect) {
                  onSelect(item, idx);
                }
              }}
            >
              {/* Image Container with Prismatic Sweep Shader & Chromatic Aberration */}
              <div className="relative w-full h-full overflow-hidden bg-black/40">
                <img
                  src={item.src}
                  alt={item.alt || item.title || "Preview image"}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-500",
                    isActive
                      ? "filter-none"
                      : "filter grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-90"
                  )}
                  style={{
                    filter: isActive
                      ? undefined
                      : `grayscale(${100 - saturation * 100}%) brightness(${1 - dim})`,
                  }}
                  onError={(e) => {
                    // Fallback to high-contrast graphic placeholder if image not found
                    (e.currentTarget as HTMLImageElement).src = "/images/services/static-web-preview.png";
                  }}
                />

                {/* Dispersion Chromatic RGB Split during movement */}
                {isActive && Math.abs(dispersionOffset) > 1 && (
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70"
                    style={{
                      backgroundImage: `url(${item.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: `translateX(${dispersionOffset}px)`,
                      filter: "hue-rotate(90deg) contrast(150%)",
                    }}
                  />
                )}

                {/* Active Chromatic Rainbow Prism Sweep Effect */}
                {isActive && sweep > 0 && (
                  <motion.div
                    key={`prism-sweep-${sweepKey}`}
                    initial={{ x: "-100%", opacity: 0.95 }}
                    animate={{ x: "200%", opacity: 0 }}
                    transition={{
                      duration: sweepDuration,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 pointer-events-none z-20"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255, 60, 0, 0.45) 15%, rgba(255, 185, 0, 0.6) 30%, rgba(0, 240, 140, 0.65) 48%, rgba(0, 170, 255, 0.7) 65%, rgba(180, 0, 255, 0.5) 82%, transparent 100%)",
                      mixBlendMode: "color-dodge",
                      filter: "blur(4px)",
                    }}
                  />
                )}

                {/* Prismatic Shimmer Scanline Overlay on active */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                )}

                {/* Card In-Image Category & Pricing Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  {item.category && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-black/70 text-white backdrop-blur-md border border-white/10">
                      {item.category}
                    </span>
                  )}
                  {item.priceTag && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-[var(--accent)] text-white shadow-sm">
                      {item.priceTag}
                    </span>
                  )}
                </div>

                {/* Bottom title preview for quick reference */}
                <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight drop-shadow-md truncate">
                    {item.title}
                  </h4>
                  {item.deliveryTime && (
                    <span className="text-[10px] font-mono text-white/80 drop-shadow-sm">
                      {item.deliveryTime}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls (Left/Right Arrows) */}
      {controls && (
        <div className="flex items-center justify-center gap-4 py-2 z-20 relative">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-line)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-fill)] border border-[var(--border-line)]">
            {items.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  i === activeIndex
                    ? "w-6 bg-[var(--accent)]"
                    : "w-1.5 bg-[var(--border-line)] hover:bg-[var(--text-muted)]"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border-line)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Active Card Detailed Captions & Integrated Business Actions */}
      {captions && currentItem && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`caption-${activeIndex}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 bg-[var(--card-bg)] border-t border-[var(--border-line)] rounded-b-3xl mt-2 transition-colors duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Details & Deliverables */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                    {currentItem.category || "Solution Package"}
                  </span>
                  <span className="text-[var(--border-line)]" aria-hidden="true">·</span>
                  <span className="text-xs font-mono text-[var(--text-muted)] font-medium">
                    {currentItem.deliveryTime || "Fast Delivery"}
                  </span>
                  <span className="text-[var(--border-line)]" aria-hidden="true">·</span>
                  <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                    {currentItem.priceTag}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
                  {currentItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {currentItem.tagline || currentItem.subtitle}
                </p>

                {currentItem.targetAudience && (
                  <p className="text-xs font-mono text-[var(--text-subtle)]">
                    <span className="text-[var(--text-primary)] font-medium">Ideal for:</span>{" "}
                    {currentItem.targetAudience}
                  </p>
                )}

                {/* Key feature pills */}
                {currentItem.features && currentItem.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {currentItem.features.slice(0, 4).map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--text-primary)] font-mono">
                        <span className="text-[var(--accent)] font-bold">✓</span>
                        <span className="text-[11px] leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: CTA Buttons */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center gap-3">
                {currentItem.primaryLink && (
                  <a
                    href={currentItem.primaryLink}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-transform hover:-translate-y-0.5 text-center"
                  >
                    <span>{currentItem.primaryLinkText || "Explore Solution"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                {currentItem.whatsappMessage && (
                  <a
                    href={`https://wa.me/919597727142?text=${encodeURIComponent(
                      currentItem.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-[var(--text-primary)] bg-[var(--surface-fill)] hover:bg-[var(--surface-fill-subtle)] border border-[var(--border-line)] transition-colors text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

PrismCarousel.displayName = "PrismCarousel";
export default PrismCarousel;
