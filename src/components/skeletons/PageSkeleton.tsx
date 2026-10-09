import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden animate-in fade-in duration-300">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,100,100,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,100,100,0.08)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[450px] h-[220px] bg-amber-400/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* 1. HERO SECTION SKELETON */}
        <div className="max-w-3xl space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-28 rounded-full" />
            <span className="text-muted-foreground">·</span>
            <Skeleton className="h-4 w-36 rounded" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-10 sm:h-12 md:h-14 w-11/12 rounded-xl" />
            <Skeleton className="h-10 sm:h-12 md:h-14 w-3/4 rounded-xl" />
          </div>

          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Skeleton className="h-11 w-40 rounded-xl" />
            <Skeleton className="h-11 w-32 rounded-xl" />
          </div>
        </div>

        {/* 2. METRICS / STATS STRIP SKELETON */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-y border-border py-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`metric-skel-${i}`} className="space-y-2">
              <Skeleton className="h-8 w-24 rounded-lg" />
              <Skeleton className="h-3.5 w-32 rounded" />
            </div>
          ))}
        </div>

        {/* 3. CARD GRID SKELETON */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-4 w-28 rounded" />
              <Skeleton className="h-8 w-64 rounded-lg" />
            </div>
            <Skeleton className="h-8 w-32 rounded-lg hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`page-skel-card-${i}`}
                className="rounded-2xl bg-card border border-border overflow-hidden flex flex-col justify-between shadow-sm"
              >
                <div className="p-6 border-b border-border bg-muted/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-20 rounded" />
                    <Skeleton className="h-3 w-14 rounded" />
                  </div>
                  <Skeleton className="h-6 w-4/5 rounded-lg" />
                  <Skeleton className="h-3.5 w-full rounded" />
                  <Skeleton className="h-3.5 w-3/4 rounded" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-3.5 w-full rounded" />
                    <Skeleton className="h-3.5 w-5/6 rounded" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <Skeleton className="h-6 w-16 rounded" />
                    <Skeleton className="h-6 w-14 rounded" />
                    <Skeleton className="h-6 w-20 rounded" />
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Skeleton className="h-4 w-24 rounded" />
                    <Skeleton className="h-4 w-16 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SPLIT SHOWCASE SKELETON */}
        <div className="rounded-3xl bg-card border border-border p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
          <div className="lg:col-span-7 space-y-4">
            <Skeleton className="h-4 w-28 rounded" />
            <Skeleton className="h-8 md:h-10 w-4/5 rounded-xl" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-11/12 rounded" />
              <Skeleton className="h-4 w-3/4 rounded" />
            </div>
            <div className="pt-4 flex items-center gap-3">
              <Skeleton className="h-10 w-36 rounded-xl" />
              <Skeleton className="h-10 w-28 rounded-xl" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <Skeleton className="h-60 sm:h-72 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
