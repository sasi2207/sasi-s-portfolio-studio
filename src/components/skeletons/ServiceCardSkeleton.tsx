import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.08] p-8 flex flex-col justify-between shadow-sm animate-pulse">
      <div className="space-y-6">
        {/* Top Tag & Timeline */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24 rounded-full" />
          <Skeleton className="h-3.5 w-20 rounded" />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2.5">
          <Skeleton className="h-6 w-3/4 rounded-lg" />
          <Skeleton className="h-3.5 w-full rounded" />
          <Skeleton className="h-3.5 w-4/5 rounded" />
        </div>

        {/* Key Deliverables Section */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
          <Skeleton className="h-3 w-28 rounded" />
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="w-3.5 h-3.5 rounded-full shrink-0" />
                <Skeleton className="h-3 w-5/6 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-14 rounded" />
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-8 flex items-center justify-between">
        <Skeleton className="h-8 w-36 rounded-lg" />
        <Skeleton className="h-4 w-16 rounded" />
      </div>
    </div>
  );
};

export const ServiceGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ServiceCardSkeleton key={`service-skel-${i}`} />
      ))}
    </div>
  );
};

export default ServiceGridSkeleton;
