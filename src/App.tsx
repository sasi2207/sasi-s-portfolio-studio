import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";

import "./app.css";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import Proposal from "./pages/Proposal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Utils & Modals
import { ScrollToTop } from "./ScrollToTop";

import ProposalDetails from "./pages/Get/ProposalDetails";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./Auth/Dashboard";
import ContactList from "./pages/Get/ContactList";
import ContactDetails from "./pages/Get/ContactDetails";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";


import Services from "./pages/Services";
import DynamicWebServices from "./pages/services/DynamicWebService";
import BusinessWebServices from "./pages/services/BusinessWebService";
import EcommerceWebService from "./pages/services/EcommerceWebService";
import AppDevelopmentService from "./pages/services/AppDevelopmentService";
import DeploymentHostingService from "./pages/services/DeploymentHostingService";
import DigitalMarketingService from "./pages/services/DigitalMarketingService";
import ComputerCoachingServices from "./pages/services/ComputerCoachingServices";
import ErpSoftwareService from "./pages/services/ErpSoftwareService";
import SrmCrmService from "./pages/services/SrmCrmService";
import HrmSoftwareService from "./pages/services/HrmSoftwareService";
import BillingSoftwareService from "./pages/services/BillingSoftwareService";

// Modals
import CourseEnquiryModal from "./CourseEnquiry";
import ServiceEnquiryForm from "./ServiceEnquiryForm"; 

// --- NEW ADMIN MODULE IMPORTS ---
import AdminLogin from "@/Auth/AdminLogin";
import AdminControlCenter from "@/Auth/AdminControlCenter";
import { Careers } from "./pages/Careers";
import { AdminPostJob } from "./pages/AdminPostJob";
import { JobApply } from "./pages/JobApply";
import StaticWebsite from "./pages/services/StaticWebService";
import AppDevelopment from "./pages/services/AppDevelopmentService";
import TechSasiLoader from "@/components/TechSasiLoader";
import PrivacyPolicy from "./pages/Privacypolicy";
import TermsOfService from "./pages/Termsofservice";

const queryClient = new QueryClient();

/* -------------------------------------------
   ROUTE HANDLER WITH LOADER & TIMERS
-------------------------------------------- */
const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Modal States
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [hasSubmittedCourse, setHasSubmittedCourse] = useState(false);

  // --- URL PATH MAPPING FOR DIRECT SEARCH/HIT ---
  useEffect(() => {
    if (location.pathname === "/courses") {
      setIsCourseModalOpen(true);
      setIsServiceModalOpen(false);
    } else if (location.pathname === "/development-services") {
      setIsServiceModalOpen(true);
      setIsCourseModalOpen(false);
    }
  }, [location.pathname]);

  // Safe close handler to clean URL back to home when closing modal
  const handleCloseModal = () => {
    setIsCourseModalOpen(false);
    setIsServiceModalOpen(false);
    if (location.pathname === "/courses" || location.pathname === "/development-services") {
      navigate("/");
    }
  };

  // Admin authentication state helper
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(
    localStorage.getItem("techsasi_admin_auth") === "true"
  );

  const handleAdminLoginSuccess = () => {
    localStorage.setItem("techsasi_admin_auth", "true");
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("techsasi_admin_auth");
    setIsAdminAuthenticated(false);
  };

  return (
    <>
      <ScrollToTop />

      {/* 1. Course Enquiry Modal */}
      <CourseEnquiryModal
        open={isCourseModalOpen}
        onClose={handleCloseModal}
        onSuccessSubmit={() => {
          setHasSubmittedCourse(true); // Triggers the 6s countdown on successful submit
          handleCloseModal();
        }}
      />

      {/* 2. Service Enquiry Popup Modal */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 bg-zinc-900 text-zinc-400 hover:bg-orange-500 hover:text-zinc-950 rounded-full p-2 transition duration-200 cursor-pointer"
            >
              ✕
            </button>

            {/* Service Enquiry Landscape Form Component */}
            <ServiceEnquiryForm />
            
          </div>
        </div>
      )}

      {/* Routes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />

        <Route path="/Careers" element={<Careers/>} />
        <Route path="/careers" element={<Careers/>} />

        <Route path="/Careers/apply/:jobId" element={<JobApply/>} />
        <Route path="/careers/apply/:jobId" element={<JobApply/>} />

        <Route path="/AdminPostJob" element={<AdminPostJob/>} />
        <Route path="/adminpostjob" element={<AdminPostJob/>} />


        
        {/* Active Route Support without 404 or TS errors */}
        <Route path="/courses" element={<Index />} />
        <Route path="/development-services" element={<Index />} />

        {/* Services Hub Route */}
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<CaseStudy />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/contact" element={<Contact />} />

        {/* Removed Blog & Offers Pages */}
        <Route path="/blog" element={<Navigate to="/" replace />} />
        <Route path="/offers" element={<Navigate to="/" replace />} />
        <Route path="/Offers" element={<Navigate to="/" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-service" element={<TermsOfService/>} />
        {/* --- COURSES MODULE ROUTES --- */}


        {/* --- INTERNSHIP PROGRAM MODULE ROUTES --- */}

        {/* Services */}
        <Route path="/services/static-web" element={<StaticWebsite/>} />
        <Route path="/services/mobile-app" element={<AppDevelopmentService/>} />
        <Route path="/services/mobile-apps" element={<AppDevelopmentService/>} />
        <Route path="/service/MobileApplication-Development" element={<AppDevelopmentService/>} />
        <Route path="/servicesapp-development" element={<AppDevelopmentService/>} />
        <Route path="/services/dynamic-web" element={<DynamicWebServices/>} />
        <Route path="/services/ecommerce" element={<EcommerceWebService/>} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingService/>} />

        {/* --- ENTERPRISE SOFTWARE SUITE ROUTES --- */}
        <Route path="/services/erp" element={<ErpSoftwareService />} />
        <Route path="/services/erp-software" element={<ErpSoftwareService />} />
        <Route path="/services/crm" element={<SrmCrmService />} />
        <Route path="/services/srm" element={<SrmCrmService />} />
        <Route path="/services/srm-crm" element={<SrmCrmService />} />
        <Route path="/services/crm-software" element={<SrmCrmService />} />
        <Route path="/services/hrm" element={<HrmSoftwareService />} />
        <Route path="/services/hrm-software" element={<HrmSoftwareService />} />
        <Route path="/services/billing" element={<BillingSoftwareService />} />
        <Route path="/services/billing-software" element={<BillingSoftwareService />} />
        <Route path="/services/pos" element={<BillingSoftwareService />} />

        <Route path="/services/business-web" element={<BusinessWebServices/>} />
        <Route path="/services/deployment-hosting" element={<DeploymentHostingService/>} /> 
        <Route path="/services/coaching" element={<ComputerCoachingServices/>} />   
        <Route path="/services/MaintenanceSupport" element={<MaintenanceSupport/>} />   
        <Route path="/services/maintenance-support" element={<MaintenanceSupport/>} />   

        {/* --- ADMIN DASHBOARD & LOGIN ROUTE --- */}
        <Route 
          path="/admin" 
          element={
            !isAdminAuthenticated ? (
              <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />
            ) : (
              <AdminControlCenter onLogout={handleAdminLogout} />
            )
          } 
        />

        <Route path="/Register-2207" element={<Register/>}/>
        <Route path="/register-2207" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/client-portal" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/portal" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/claim" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/claim-portal" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/dashboard/proposals" element={<ProtectedRoute><ProposalDetails /></ProtectedRoute>}/>
        <Route path="/dashboard/contacts" element={<ProtectedRoute><ContactList /></ProtectedRoute>} />
        <Route path="/dashboard/contacts/:id" element={<ProtectedRoute><ContactDetails /></ProtectedRoute>} />
        <Route path="/contact-details/:id" element={<ProtectedRoute><ContactDetails /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

/* -------------------------------------------
   MAIN APP
-------------------------------------------- */
const App: React.FC = () => {
  // Loading screen active on initial arrival
  const [isSiteLoading, setIsSiteLoading] = useState<boolean>(true);

  // Global replay listener for on-demand playback from any component
  useEffect(() => {
    const handleReplay = () => {
      setIsSiteLoading(true);
    };
    window.addEventListener("techsasi:replay-loader", handleReplay);
    return () => window.removeEventListener("techsasi:replay-loader", handleReplay);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Helmet>
            <title>TechSasi — Website & Mobile App Development</title>
            <meta
              name="description"
              content="TechSasi by SasiKumar offers professional website development, mobile app development, and custom software solutions."
            />
          </Helmet>

          <Toaster />
          <Sonner />

          {/* Premium TechSasi Website Loading Screen */}
          {isSiteLoading && (
            <TechSasiLoader onComplete={() => setIsSiteLoading(false)} />
          )}

          <ThemeProvider>
            <BrowserRouter>
              <AnimatedRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;