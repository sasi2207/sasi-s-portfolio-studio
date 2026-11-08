import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const NavbarSkeleton: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-2xl border border-[var(--border-line)]/80 bg-[var(--card-bg)]/80 backdrop-blur-xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <nav className="flex items-center justify-between h-11 sm:h-12 w-full">
          {/* Zone 1: Brand Wordmark Skeleton */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Skeleton className="h-6 w-24 sm:w-28 rounded-lg" />
            <Skeleton className="h-2 w-20 sm:w-24 rounded-full mt-1.5 opacity-60" />
          </div>

          {/* Zone 2: Navigation Links Skeleton */}
          <div className="hidden lg:flex items-center gap-2">
            <Skeleton className="h-8 w-14 rounded-xl" />
            <Skeleton className="h-8 w-20 rounded-xl" />
            <Skeleton className="h-8 w-16 rounded-xl" />
            <Skeleton className="h-8 w-14 rounded-xl" />
            <Skeleton className="h-8 w-16 rounded-xl" />
            <Skeleton className="h-8 w-16 rounded-xl" />
          </div>

          {/* Zone 3: Actions Skeleton */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Skeleton className="w-8 h-8 rounded-xl" />
            <Skeleton className="hidden md:inline-flex h-8 w-20 rounded-xl" />
            <Skeleton className="h-8 w-32 rounded-xl" />
            <Skeleton className="lg:hidden w-8 h-8 rounded-xl" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarSkeleton;
