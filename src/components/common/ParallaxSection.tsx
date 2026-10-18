import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  bgClassName?: string;
  speed?: number;
}

export const ParallaxSection = ({ 
  children, 
  className, 
  bgClassName,
  speed = 0.3 
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > 0 && rect.bottom > 0) {
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section ref={sectionRef} className={cn('parallax-container relative overflow-hidden', className)}>
      <div 
        className={cn('absolute inset-0 -z-10', bgClassName)}
        style={{ transform: `translateY(${offset}px)` }}
      />
      {children}
    </section>
  );
};
