import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const NavbarSkeleton: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border py-3 sm:py-3.5 md:py-4 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-12 w-full">
          {/* Zone 1: Brand Wordmark Skeleton */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Skeleton className="h-5 sm:h-6 w-24 md:w-28 rounded-md" />
            <Skeleton className="h-2 w-24 sm:w-28 md:w-32 rounded-full mt-1.5" />
          </div>

          {/* Zone 2: Navigation Links Skeleton */}
          {/* Desktop Skeleton (>= 1024px) */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 mx-4">
            <Skeleton className="h-4 w-12 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
            <Skeleton className="h-4 w-14 rounded" />
            <Skeleton className="h-4 w-12 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
            <Skeleton className="h-4 w-14 rounded" />
          </div>

          {/* Tablet Skeleton (768px - 1023px) */}
          <div className="hidden md:flex lg:hidden items-center justify-center gap-2 md:gap-3 mx-2">
            <Skeleton className="h-8 w-14 rounded-lg" />
            <Skeleton className="h-8 w-16 rounded-lg" />
            <Skeleton className="h-8 w-16 rounded-lg" />
            <Skeleton className="h-8 w-14 rounded-lg" />
            <Skeleton className="h-8 w-16 rounded-lg" />
          </div>

          {/* Zone 3: Actions Skeleton (Theme Toggle, Phone, CTA, Menu Trigger) */}
          <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
            <Skeleton className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg" />
            <Skeleton className="hidden xl:inline-flex h-8 w-28 rounded-lg" />
            <Skeleton className="hidden sm:inline-flex h-8 sm:h-9 w-28 sm:w-32 rounded-lg" />
            <Skeleton className="lg:hidden w-9 h-9 rounded-xl" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarSkeleton;
