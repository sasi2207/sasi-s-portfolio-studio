import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RotatingCardItem {
  id: string | number;
  content?: React.ReactNode;
  image?: string;
  background?: string;
  title?: string;
  description?: string;
  badge?: string;
  icon?: React.ReactNode;
  [key: string]: any;
}

export interface RotatingCardsProps {
  cards: RotatingCardItem[];
  radius?: number;
  duration?: number;
  cardWidth?: number;
  cardHeight?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  draggable?: boolean;
  autoPlay?: boolean;
  onCardClick?: (card: RotatingCardItem, index: number) => void;
  mouseWheel?: boolean;
  className?: string;
  cardClassName?: string;
  initialRotation?: number;
}

export const RotatingCards: React.FC<RotatingCardsProps> = ({
  cards,
  radius = 360,
  duration = 20,
  cardWidth = 160,
  cardHeight = 190,
  pauseOnHover = true,
  reverse = false,
  draggable = true,
  autoPlay = true,
  onCardClick,
  mouseWheel = false,
  className = "",
  cardClassName = "",
  initialRotation = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(() => !cards.some((c) => !!c.image));
  const [cardsSignature, setCardsSignature] = useState(() => JSON.stringify(cards.map((c) => c.id)));

  const containerRef = useRef<HTMLDivElement>(null);
  const currentRotationRef = useRef<number>(initialRotation);
  const lastTimeRef = useRef<number | null>(null);
  const dragStartAngleRef = useRef<number>(0);
  const dragBaseRotationRef = useRef<number>(0);

  const rawRotation = useMotionValue(initialRotation);
  const smoothRotation = useSpring(rawRotation, {
    damping: 30,
    stiffness: 200,
    mass: 0.5,
  });

  // Calculate coordinates for cards evenly arranged around the circular ring
  const cardPositions = useMemo(() => {
    if (!cards || cards.length === 0) return [];
    const step = (2 * Math.PI) / cards.length;
    return cards.map((_, idx) => {
      const angleRad = step * idx + (initialRotation * Math.PI) / 180;
      return {
        x: Math.cos(angleRad) * radius,
        y: Math.sin(angleRad) * radius,
        angleDeg: (angleRad * 180) / Math.PI,
      };
    });
  }, [cards, radius, initialRotation]);

  // Keep track of cards signature to reset image loading if cards change
  const currentSignature = JSON.stringify(cards.map((c) => c.id));
  if (currentSignature !== cardsSignature) {
    setCardsSignature(currentSignature);
    setImagesLoaded(!cards.some((c) => !!c.image));
  }

  // Preload card images if provided
  useEffect(() => {
    let isCancelled = false;
    const preload = async () => {
      const imageCards = cards.filter((c) => !!c.image);
      if (imageCards.length === 0) {
        setImagesLoaded(true);
        return;
      }
      const loaders = imageCards.map(
        (c) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = c.image!;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      );

      try {
        await Promise.all(loaders);
        if (!isCancelled) setImagesLoaded(true);
      } catch {
        if (!isCancelled) setImagesLoaded(true);
      }
    };

    preload();
    return () => {
      isCancelled = true;
    };
  }, [cards]);

  // Continuous rotation loop
  useEffect(() => {
    let animId: number;
    lastTimeRef.current = null;

    const tick = (time: number) => {
      if (lastTimeRef.current !== null && !isHovered && !isDragging && autoPlay && imagesLoaded) {
        const delta = time - lastTimeRef.current;
        const degPerSec = 360 / Math.max(1, duration);
        const stepDeg = degPerSec * (delta / 1000) * (reverse ? -1 : 1);
        currentRotationRef.current += stepDeg;
        rawRotation.set(currentRotationRef.current);
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [duration, reverse, isHovered, isDragging, autoPlay, rawRotation, imagesLoaded]);

  // Polar angle calculation relative to container center
  const getPointerAngle = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return (Math.atan2(clientY - centerY, clientX - centerX) * 180) / Math.PI;
  }, []);

  const handleDragStart = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent) => {
      setIsDragging(true);
      const clientX = "clientX" in event ? event.clientX : (event as TouchEvent).touches[0].clientX;
      const clientY = "clientY" in event ? event.clientY : (event as TouchEvent).touches[0].clientY;
      dragStartAngleRef.current = getPointerAngle(clientX, clientY);
      dragBaseRotationRef.current = currentRotationRef.current;
    },
    [getPointerAngle]
  );

  const handleDrag = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (!isDragging) return;
      const currentAngle = getPointerAngle(info.point.x, info.point.y);
      const angleDiff = currentAngle - dragStartAngleRef.current;
      const nextRotation = dragBaseRotationRef.current + angleDiff;
      currentRotationRef.current = nextRotation;
      rawRotation.set(nextRotation);
    },
    [isDragging, getPointerAngle, rawRotation]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Optional mouse wheel rotation
  useEffect(() => {
    if (!mouseWheel || !containerRef.current) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const step = e.deltaY * 0.4 * (reverse ? -1 : 1);
      currentRotationRef.current += step;
      rawRotation.set(currentRotationRef.current);
    };

    const el = containerRef.current;
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [mouseWheel, reverse, rawRotation]);

  const handleCardClickInternal = useCallback(
    (card: RotatingCardItem, index: number) => {
      if (onCardClick) onCardClick(card, index);
    },
    [onCardClick]
  );

  const containerDiameter = radius * 2;

  return (
    <div
      ref={containerRef}
      className={cn("relative flex items-center justify-center select-none overflow-visible", className)}
      style={{
        width: `${containerDiameter + cardWidth}px`,
        height: `${containerDiameter + cardHeight}px`,
      }}
    >
      <motion.div
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        style={{
          rotate: smoothRotation,
          willChange: "transform",
        }}
        drag={draggable}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {cards.map((card, idx) => {
          const pos = cardPositions[idx];
          if (!pos) return null;

          return (
            <motion.div
              key={`${card.id}-${cards.length}`}
              className={cn(
                "absolute rounded-2xl shadow-xl backdrop-blur-md overflow-hidden cursor-pointer transition-colors",
                "border border-[var(--border-line)] bg-[var(--card-bg)] text-[var(--text-primary)]",
                cardClassName
              )}
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                left: "50%",
                top: "50%",
                x: pos.x,
                y: pos.y,
                marginLeft: `-${cardWidth / 2}px`,
                marginTop: `-${cardHeight / 2}px`,
                background:
                  card.background ||
                  (card.image ? `url(${card.image}) center/cover` : undefined),
                willChange: "transform",
                rotate: pos.angleDeg + 90,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: imagesLoaded ? 1 : 0, scale: imagesLoaded ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.04 * idx, ease: "easeOut" }}
              onMouseEnter={() => pauseOnHover && setIsHovered(true)}
              onMouseLeave={() => pauseOnHover && setIsHovered(false)}
              onClick={() => handleCardClickInternal(card, idx)}
              whileHover={pauseOnHover ? { scale: 1.06, transition: { duration: 0.2 } } : undefined}
            >
              <div className="w-full h-full flex flex-col justify-between p-4 relative z-10">
                {card.content ? (
                  card.content
                ) : (
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between">
                      {card.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                          {card.badge}
                        </span>
                      )}
                      {card.icon && <div className="text-[var(--accent)]">{card.icon}</div>}
                    </div>

                    <div className="space-y-1">
                      {card.title && (
                        <h4 className="text-xs font-bold text-[var(--text-primary)] tracking-tight">
                          {card.title}
                        </h4>
                      )}
                      {card.description && (
                        <p className="text-[11px] text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

RotatingCards.displayName = "RotatingCards";
export default RotatingCards;
