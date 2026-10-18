import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CareerCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] p-6 flex flex-col justify-between shadow-sm animate-pulse">
      <div className="space-y-4">
        {/* Department & Job Type */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06]">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3.5 w-16 rounded" />
        </div>

        {/* Title */}
        <Skeleton className="h-6 w-4/5 rounded-lg" />

        {/* Location & Experience */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-3.5 w-28 rounded" />
          <Skeleton className="h-3.5 w-20 rounded" />
        </div>

        {/* Description Lines */}
        <div className="space-y-2 pt-1">
          <Skeleton className="h-3 w-full rounded" />
          <Skeleton className="h-3 w-11/12 rounded" />
          <Skeleton className="h-3 w-3/4 rounded" />
        </div>

        {/* Requirements Badges */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-16 rounded" />
          ))}
        </div>
      </div>

      {/* Footer Details & Apply Button */}
      <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06] mt-6 flex items-center justify-between">
        <Skeleton className="h-4 w-20 rounded" />
        <Skeleton className="h-8 w-28 rounded-lg" />
      </div>
    </div>
  );
};

export const CareerGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CareerCardSkeleton key={`career-skel-${i}`} />
      ))}
    </div>
  );
};

export default CareerGridSkeleton;
