// App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "./Auth/ProtectedRoute";
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
import ProposalDetails from "./pages/Get/ProposalDetails";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./Auth/Dashboard";
import ContactList from "./pages/Get/ContactList";
import ContactDetails from "./pages/Get/ContactDetails";
import OfferForm from "./Offers/OfferForm";







import ReactInternshipsPage from "./pages/internships/ReactInternship";
import JavaInternshipsPage from "./pages/internships/JavaInternship";


import { DynamicWebService } from "./pages/services/DynamicWebService";
import { BusinessWebService } from "./pages/services/BusinessWebService";
import { EcommerceWebService } from "./pages/services/EcommerceWebService";
import { AppDevelopmentService } from "./pages/services/AppDevelopmentService";
import { DeploymentHostingService } from "./pages/services/DeploymentHostingService";
import { DigitalMarketingService } from "./pages/services/DigitalMarketingService";
import { CoachingCenterLabsService } from "./pages/services/CoachingCenterLabsService";
import { BlogPage } from "./pages/Blog";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";
import AwsCourse from "./pages/courses/AwsCourse";
import PythonFullStackCourse from "./pages/courses/PythonFullStackCourse";
import JavaFullStackCourse from "./pages/courses/JavaFullStackCourse";
import MernStackCourse from "./pages/courses/MernStackCourse";
import ReactJsCourse from "./pages/courses/React Development";
import UiUxCourse from "./pages/courses/UiUxCourse";
import PythonInternshipsPage from "./pages/internships/PythonInternship";
import AiFullStackInternshipsPage from "./pages/internships/FullStackInternship";
import DigitalMarketingInternshipsPage from "./pages/internships/DigitalMarketingInternship";
import AwsInternshipsPage from "./pages/internships/awsInternships";





// Course Page Components
// import ReactCourse from './pages/courses/ReactCourse';
// import PythonFullStackCourse from './pages/courses/PythonFullStackCourse';
// import JavaFullStackCourse from './pages/courses/JavaFullStackCourse';
// import MernStackCourse from './pages/courses/MernStackCourse';
// import UiUxCourse from './pages/courses/UiUxCourse';
// import AwsCourse from './pages/courses/AwsCourse';

// Internship Page Components
// import WebDevInternship from './pages/internships/WebDevInternship';
// import PythonInternship from './pages/internships/PythonInternship';
// import ReactInternship from './pages/internships/ReactInternship';
// import JavaInternship from './pages/internships/JavaInternship';
// import FullStackInternship from './pages/internships/FullStackInternship';
// import DigitalMarketingInternship from './pages/internships/DigitalMarketingInternship';

// 404 Component
// import NotFound from './pages/NotFound';

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
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="service/static-website" element={<StaticWebsite/>} />
        <Route path="service/dynamic-website" element={<DynamicWebsite/>} />
        <Route path="service/ecommerce-website" element={<EcommerceWebsite/>} />
        <Route path="service/portfolio-website" element={<PortfolioWebsite/>} />
        <Route path="service/business-website" element={<BusinessWebsite/>} />
        <Route path="service/MobileApplication-Development" element={<MobileAppDevelopment/>} />
        <Route path="service/SeoOptimization" element={<SeoOptimization/>} />
        <Route path="/service/DeploymentHosting" element={<DeploymentHosting/>} />

        <Route path="Offers" element={<OfferForm/>} />



{/* --- COURSES MODULE ROUTES --- */}
            <Route path="/courses/react" element={<ReactJsCourse/>} />
            <Route path="/courses/python-fullstack" element={<PythonFullStackCourse/>} />
            <Route path="/courses/java-fullstack" element={<JavaFullStackCourse/>} />
             <Route path="/courses/mern-stack" element={<MernStackCourse/>} />
             <Route path="/courses/ui-ux" element={<UiUxCourse/>} />
            <Route path="/courses/aws" element={<AwsCourse/>} />

            {/* --- INTERNSHIP PROGRAM MODULE ROUTES --- */}
           <Route path="/internships/Aws-Internship" element={<AwsInternshipsPage/>} />
          <Route path="/internships/python" element={<PythonInternshipsPage/>} />
              <Route path="/internships/react" element={<ReactInternshipsPage/>} />
             <Route path="/internships/java" element={<JavaInternshipsPage/>} />
             <Route path="/internships/full-stack" element={<AiFullStackInternshipsPage/>} />
            <Route path="/internships/digital-marketing" element={<DigitalMarketingInternshipsPage/>} /> 


  {/* Services */}
                   <Route path="/services/static-web" element={<StaticWebsite/>} />
          <Route path="/services/dynamic-web" element={<DynamicWebService/>} />
              <Route path="/services/business-web" element={<BusinessWebService/>} />
               <Route path="/services/ecommerce" element={<EcommerceWebService/>} />
            <Route path="/servicesapp-development" element={<AppDevelopmentService/>} />
          <Route path="/services/deployment-hosting" element={<DeploymentHostingService/>} /> 
 <Route path="/services/digital-marketing" element={<DigitalMarketingService/>} />
  <Route path="/services/coaching" element={<CoachingCenterLabsService/>} />  

          <Route path="/services/MaintenanceSupport" element={<MaintenanceSupport/>} />  






            {/* Fallback Route Error Handling */}
            <Route path="*" element={<NotFound />} />


        

        <Route path="Register-2207" element={<Register/>}/>
        <Route path="Login"element={<Login/>}/>
    
<Route
  path="dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route path="dashboard/proposals"element={<ProtectedRoute><ProposalDetails /></ProtectedRoute>}/>

  <Route path="dashboard/contacts" element={<ProtectedRoute><ContactList /></ProtectedRoute>} />
    {/* <Route path="dashboard/contact/:id" element={<ContactDetails />} /> */}
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
           

          
    <title>TechSasi — Website & Mobile App Development</title>


   <meta
  name="description"
  content="TechSasi by SasiKumar offers professional website development, mobile app development, and custom software solutions. Expert in React, full-stack development, admin dashboards, and scalable SaaS platforms."
/>

            <meta
              name="keywords"
              content="TechSasi,SasiTech, website development Mettur, app development mettur, full stack course, React training mettur, Java training, software company Mettur, IT institute Mettur, web design services mettur, mobile app development mettur, real time projects"
            />

            <meta name="author" content="TechSasi / SasiTech" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="TechSasi | SasiTech – Website & App Development  in Mettur"
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
