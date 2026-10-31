import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Globe, 
  Smartphone, 
  Layers, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  MessageCircle, 
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Workflow,
  ArrowUpRight
} from "lucide-react";

import { CenterFlow } from "@/components/ui/center-flow";
import { PrismCarousel, PrismCarouselItem } from "@/components/ui/prism-carousel";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyText } from "@/components/ui/shiny-text";

interface SolutionItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  targetAudience: string;
  priceTag: string;
  deliveryTime: string;
  icon: React.ElementType;
  accentColor: string;
  features: string[];
  primaryLink: string;
  primaryLinkText: string;
  whatsappMessage: string;
}

const solutions: SolutionItem[] = [
  {
    id: "website",
    category: "Web Engineering",
    title: "Business & Company Websites",
    tagline: "High-speed modern websites designed to attract clients and convert visitors into paying inquiries.",
    targetAudience: "For retail shops, healthcare clinics, manufacturing firms, schools, and professional consultants.",
    priceTag: "Starting from ₹9,999",
    deliveryTime: "5–7 Days Delivery",
    icon: Globe,
    accentColor: "from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/30",
    features: [
      "Sub-second load time on all mobile devices",
      "Free SSL certificate, domain connection & cloud hosting",
      "1-Click WhatsApp chat button & lead inquiry form",
      "Full Google SEO setup & Google Business sync"
    ],
    primaryLink: "/services/static-web",
    primaryLinkText: "Explore Website Packages",
    whatsappMessage: "Hi TechSasi, I want to build a business website. Can you share details and a quote?"
  },
  {
    id: "mobile-app",
    category: "Mobile Mobility",
    title: "iOS & Android Mobile Applications",
    tagline: "Smooth, native-feeling mobile applications built for customer engagement and daily utility.",
    targetAudience: "For startups, delivery services, customer loyalty clubs, and appointment booking apps.",
    priceTag: "Milestone-Based Quotes",
    deliveryTime: "2–4 Weeks Launch",
    icon: Smartphone,
    accentColor: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    features: [
      "Single codebase for both Apple App Store and Google Play",
      "Instant push notifications & offline data caching",
      "Secure mobile OTP, Google, and password authentication",
      "Integrated payment gateways (UPI, Cards, NetBanking)"
    ],
    primaryLink: "/services/mobile-app",
    primaryLinkText: "Explore Mobile App Specs",
    whatsappMessage: "Hi TechSasi, I have an idea for an iOS/Android mobile app. Let's discuss."
  },
  {
    id: "billing-software",
    category: "Cloud Product",
    title: "GST Billing & Retail POS Software",
    tagline: "Live at billing.techsasi.com — Try 1 month free before you purchase! High-speed counter billing with barcode scanning & thermal printing.",
    targetAudience: "For retail shops, supermarkets, pharmacies, cafes, and wholesale distributors.",
    priceTag: "1-Month Free Trial",
    deliveryTime: "Instant Free Trial (30 Days)",
    icon: Layers,
    accentColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    features: [
      "1-Month 100% Free Trial available now at billing.techsasi.com",
      "Sub-second counter checkout with barcode scanner & hotkeys",
      "Instant GST invoice generation, thermal print & WhatsApp sharing",
      "Real-time stock deduction, low stock alerts & purchase sync"
    ],
    primaryLink: "/services/billing",
    primaryLinkText: "Try 1 Month Free / Purchase",
    whatsappMessage: "Hi TechSasi, I saw your billing software at billing.techsasi.com. I want to try the 1 month free trial and discuss purchasing."
  },
  {
    id: "coaching",
    category: "Skill Mentorship",
    title: "IT Coaching & Internship Training",
    tagline: "Learn modern full-stack engineering through hands-on code and real-world client project building.",
    targetAudience: "For college students, fresh graduates, and career changers looking for high-paying IT jobs.",
    priceTag: "Affordable Student Fees",
    deliveryTime: "Flexible Batches",
    icon: GraduationCap,
    accentColor: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
    features: [
      "Master React, TypeScript, Node.js & Database architecture",
      "Build and deploy 3 real live projects to your portfolio",
      "Direct 1-on-1 code reviews with experienced senior engineers",
      "Verified course completion certificate and job referral support"
    ],
    primaryLink: "/services/coaching",
    primaryLinkText: "Explore Coaching Program",
    whatsappMessage: "Hi TechSasi, I want to learn more about your IT coaching and internship batches."
  }
];

export const SolutionFinder: React.FC = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Animation triggers only once when scrolling down
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section 
      className="w-full max-w-8xl mx-auto text-center py-16 px-6 sm:px-10 bg-white  shadow-sm border border-cyan-100/60"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Main Heading with Electric Cyan-to-Blue Gradient */}
      <h1 
        className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <span className="bg-gradient-to-r from-cyan-500 via-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow-sm">
          SEO
        </span>{" "}
        Friendly Web Designs
      </h1>

      {/* Subtitle / Description */}
      <p 
        className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 font-normal leading-relaxed mb-3"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        TechSasi creates SEO-friendly website designs that increase your online presence, 
        attract more visitors, and provide a seamless user experience.
      </p>

      {/* Italic Callout Tagline */}
      <p 
        className="text-base sm:text-lg text-cyan-700/80 italic font-light mb-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Let's improve your website together!
      </p>

      {/* Call To Action Button with Electric Cyan-Blue Glow */}
      <div 
        className="flex justify-center"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <Link 
          to="/proposal"
          aria-label="Get instant quote for SEO friendly web designs"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:from-[#00b4eb] hover:to-[#005edb] active:scale-95 text-white font-semibold text-base rounded-xl transition-all duration-200 shadow-[0_8px_25px_-5px_rgba(0,180,255,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(0,180,255,0.6)] transform hover:-translate-y-0.5 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 border border-cyan-300/30 cursor-pointer"
        >
          <span>Get Quote</span>
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default SolutionFinder;