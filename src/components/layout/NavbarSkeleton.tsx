import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const NavbarSkeleton: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#030d24] px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
        <nav className="flex items-center justify-between h-11 sm:h-12 w-full">
          {/* Zone 1: Brand Wordmark Skeleton */}
          <div className="flex flex-col items-start justify-center shrink-0">
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
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 justify-end">
            <Skeleton className="hidden lg:inline-flex w-8 h-8 rounded-xl" />
            <Skeleton className="hidden lg:inline-flex h-8 w-24 rounded-xl" />
            <Skeleton className="lg:hidden w-10 h-10 rounded-xl" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarSkeleton;
