// App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./app.css";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import Proposal from "./pages/Proposal";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Utils
import { ScrollToTop } from "./ScrollToTop";
import { PageLoader } from "./PageLoader";
import StaticWebsite from "./web/StaticWebsite";
import DynamicWebsite from "./web/DynamicWebsite";
import EcommerceWebsite from "./web/EcommerceWebsite";
import PortfolioWebsite from "./web/PortfolioWebsite";
import BusinessWebsite from "./web/BusinessWebsite";
import MobileAppDevelopment from "./web/MobileAppDevelopment";
import SeoOptimization from "./web/SeoOptimization";
import DeploymentHosting from "./web/DeploymentHosting";

const queryClient = new QueryClient();

/* -------------------------------------------
   ROUTE HANDLER WITH LOADER
-------------------------------------------- */
const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600); // loader duration
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Page Loader */}
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>

      {/* Routes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<CaseStudy />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="service/static-website" element={<StaticWebsite/>} />
        <Route path="service/dynamic-website" element={<DynamicWebsite/>} />
        <Route path="service/ecommerce-website" element={<EcommerceWebsite/>} />
        <Route path="service/portfolio-website" element={<PortfolioWebsite/>} />
        <Route path="service/business-website" element={<BusinessWebsite/>} />
        <Route path="service/MobileApplication-Development" element={<MobileAppDevelopment/>} />
        <Route path="service/SeoOptimization" element={<SeoOptimization/>} />
        <Route path="/service/DeploymentHosting" element={<DeploymentHosting/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

/* -------------------------------------------
   MAIN APP
-------------------------------------------- */
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          {/* 🔥 GLOBAL SEO */}
          <Helmet>
            <title>
              TechSasi | SasiTech – Website & App Development Training Institute in Mettur
            </title>

            <meta
              name="description"
              content="TechSasi (SasiTech) is a leading website development and app development training institute in Mettur offering full stack courses, live projects, software services, web design, mobile apps and IT solutions."
            />

            <meta
              name="keywords"
              content="TechSasi, SasiTech, website development Mettur, app development training, full stack course, React training, Java training, software company Mettur, IT institute Mettur, web design services, mobile app development, real time projects"
            />

            <meta name="author" content="TechSasi / SasiTech" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="TechSasi | SasiTech – Website & App Development Training Institute in Mettur"
            />
            <meta
              property="og:description"
              content="Learn website and app development with real-time projects at TechSasi (SasiTech), Mettur."
            />
            <meta property="og:url" content="https://www.techsasi.com" />
            <meta
              property="og:image"
              content="https://www.techsasi.com/assets/techsasi-og.jpg"
            />
          </Helmet>

          {/* UI Providers */}
          <Toaster />
          <Sonner />

          {/* Router */}
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
