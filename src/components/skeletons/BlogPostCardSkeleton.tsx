import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogPostCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0B101D] dark:bg-[#0B101D] border border-white/[0.08] dark:border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-sm animate-in fade-in duration-300">
      <div>
        {/* Post Image Thumbnail Skeleton */}
        <div className="h-44 w-full relative">
          <Skeleton className="h-full w-full rounded-none" />
          <div className="absolute bottom-3 left-3">
            <Skeleton className="h-5 w-20 rounded" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-20 rounded" />
            <span className="text-slate-600">·</span>
            <Skeleton className="h-3 w-16 rounded" />
          </div>

          <Skeleton className="h-5 w-5/6 rounded" />
          <Skeleton className="h-5 w-2/3 rounded" />

          <div className="space-y-1.5 pt-1">
            <Skeleton className="h-3.5 w-full rounded" />
            <Skeleton className="h-3.5 w-11/12 rounded" />
            <Skeleton className="h-3.5 w-4/5 rounded" />
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="p-5 pt-0 mt-2 flex items-center justify-between border-t border-white/[0.06] dark:border-white/[0.06] pt-4">
        <Skeleton className="h-3 w-24 rounded" />
        <Skeleton className="h-3 w-20 rounded" />
      </div>
    </div>
  );
};

export const FeaturedBlogSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#0B101D] dark:bg-[#0B101D] border border-white/[0.08] dark:border-white/[0.08] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-lg animate-in fade-in duration-300 mb-12">
      {/* Image Skeleton */}
      <div className="lg:col-span-6 h-64 lg:h-auto min-h-[260px] relative">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      {/* Content Skeleton */}
      <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-24 rounded" />
            <Skeleton className="h-3 w-28 rounded" />
          </div>

          <Skeleton className="h-7 w-4/5 rounded-lg" />
          <Skeleton className="h-7 w-3/5 rounded-lg" />

          <div className="space-y-2 pt-2">
            <Skeleton className="h-3.5 w-full rounded" />
            <Skeleton className="h-3.5 w-11/12 rounded" />
            <Skeleton className="h-3.5 w-4/5 rounded" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] dark:border-white/[0.06]">
          <Skeleton className="h-3.5 w-28 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
      </div>
    </div>
  );
};

export const BlogGridSkeleton: React.FC<{ count?: number; showFeatured?: boolean }> = ({ 
  count = 6, 
  showFeatured = false 
}) => {
  return (
    <div className="space-y-10">
      {showFeatured && <FeaturedBlogSkeleton />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <BlogPostCardSkeleton key={`blog-skeleton-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default BlogPostCardSkeleton;
