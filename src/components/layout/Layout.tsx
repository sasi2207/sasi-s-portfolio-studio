import { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ContactFab } from "../common/ContactFab";
import { PageSkeleton } from "@/components/skeletons/PageSkeleton";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);

  // Exactly 0.5 seconds skeleton loader animation on all pages on mount/route transition
  useEffect(() => {
    setIsSkeletonLoading(true);
    const timer = setTimeout(() => {
      setIsSkeletonLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar isLoading={isSkeletonLoading} />
      <main className="flex-1">
        {isSkeletonLoading ? (
          <PageSkeleton />
        ) : (
          <div className="animate-in fade-in duration-300">
            {children}
          </div>
        )}
      </main>
      <Footer />
      <ContactFab />
    </div>
  );
};
