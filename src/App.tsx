import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import Services from "./pages/Services";
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
import OfferForm from "./Offers/OfferForm";


import { BlogPage } from "./pages/Blog";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";


import DynamicWebServices from "./pages/services/DynamicWebService";
import BusinessWebServices from "./pages/services/BusinessWebService";
import EcommerceWebService from "./pages/services/EcommerceWebService";
import AppDevelopmentService from "./pages/services/AppDevelopmentService";
import DeploymentHostingService from "./pages/services/DeploymentHostingService";
import DigitalMarketingService from "./pages/services/DigitalMarketingService";
import ComputerCoachingServices from "./pages/services/ComputerCoachingServices";

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

<Route path="/Careers/apply/:jobId" element={<JobApply/>} /> Correct Route
  {/* <Route path="/careers/:jobId" element={<JobApply />} /> */}

        <Route path="/AdminPostJob" element={<AdminPostJob/>} />


        
        {/* Active Route Support without 404 or TS errors */}
        <Route path="/courses" element={<Index />} />
        <Route path="/development-services" element={<Index />} />

        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<CaseStudy />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact" element={<Contact />} />

    

        <Route path="Offers" element={<OfferForm/>} />

        {/* --- COURSES MODULE ROUTES --- */}


        {/* --- INTERNSHIP PROGRAM MODULE ROUTES --- */}

        {/* Services */}
        <Route path="/services/static-web" element={<StaticWebsite/>} />
          <Route path="service/MobileApplication-Development" element={<AppDevelopment/>} />
        <Route path="/services/dynamic-web" element={<DynamicWebServices/>} />
        <Route path="/services/business-web" element={<BusinessWebServices/>} />
        <Route path="/services/ecommerce" element={<EcommerceWebService/>} />
        <Route path="/servicesapp-development" element={<AppDevelopmentService/>} />
        <Route path="/services/deployment-hosting" element={<DeploymentHostingService/>} /> 
        <Route path="/services/digital-marketing" element={<DigitalMarketingService/>} />
        <Route path="/services/coaching" element={<ComputerCoachingServices/>} />   
        <Route path="/services/MaintenanceSupport" element={<MaintenanceSupport/>} />   

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

        <Route path="/dashboard/proposals" element={<ProtectedRoute><ProposalDetails /></ProtectedRoute>}/>
        <Route path="/dashboard/contacts" element={<ProtectedRoute><ContactList /></ProtectedRoute>} />

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
          <Helmet>
            <title>TechSasi — Website & Mobile App Development</title>
            <meta
              name="description"
              content="TechSasi by SasiKumar offers professional website development, mobile app development, and custom software solutions."
            />
          </Helmet>

          <Toaster />
          <Sonner />

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