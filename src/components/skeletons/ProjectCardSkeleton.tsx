import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0B101D] dark:bg-[#0B101D] border border-white/[0.08] dark:border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-sm animate-in fade-in duration-300">
      {/* Top Bar Preview Frame */}
      <div className="p-6 border-b border-white/[0.06] dark:border-white/[0.06] bg-gradient-to-br from-[#0F1626]/80 to-[#0B101D]/80">
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3 w-16 rounded" />
        </div>

        <Skeleton className="h-6 w-3/4 mb-2.5 rounded-lg" />
        <Skeleton className="h-3.5 w-full mb-1.5 rounded" />
        <Skeleton className="h-3.5 w-4/5 rounded mb-4" />

        {/* Metrics Row Skeleton */}
        <div className="pt-3 border-t border-white/[0.06] dark:border-white/[0.06] grid grid-cols-3 gap-2">
          <div className="space-y-1">
            <Skeleton className="h-2.5 w-12 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-2.5 w-12 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-2.5 w-12 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
          </div>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
        <div className="space-y-3">
          <Skeleton className="h-3 w-28 rounded" />
          <Skeleton className="h-3.5 w-full rounded" />
          <Skeleton className="h-3.5 w-11/12 rounded" />
          <Skeleton className="h-3.5 w-3/4 rounded" />

          {/* Tech tags skeleton */}
          <div className="flex flex-wrap gap-1.5 pt-3">
            <Skeleton className="h-6 w-16 rounded" />
            <Skeleton className="h-6 w-20 rounded" />
            <Skeleton className="h-6 w-14 rounded" />
            <Skeleton className="h-6 w-18 rounded" />
          </div>
        </div>

        {/* Footer Actions Skeleton */}
        <div className="pt-4 border-t border-white/[0.06] dark:border-white/[0.06] flex items-center justify-between">
          <Skeleton className="h-4 w-32 rounded" />
          <Skeleton className="h-4 w-20 rounded" />
        </div>
      </div>
    </div>
  );
};

export const ProjectGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={`project-skeleton-${i}`} />
      ))}
    </div>
  );
};

export default ProjectCardSkeleton;
