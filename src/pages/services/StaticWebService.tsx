import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { Zap, Layout, ShieldCheck, Search, Globe, Smartphone, Gauge, Layers } from "lucide-react";

const staticWebData: ServicePageData = {
  serviceId: "static-web",
  serviceNumber: "01",
  title: "Static Website Development",
  headline: "Blazing-Fast Static Websites",
  badgeText: "High-Performance Web Presences",
  description:
    "Perfect for portfolios, landing pages, and small businesses needing secure, ultra-fast, and cost-effective web presence. Engineered for 98+ Google Lighthouse scores and zero maintenance friction.",
  proposalType: "static-web",
  iconType: "static-web",
  iconPng: "/images/services/icons/static-web.png",
  previewImage: "/images/services/static-web-preview.png",
  timeline: "1–2 Weeks",
  stats: [
    { value: "98+", label: "Google PageSpeed Score" },
    { value: "<0.8s", label: "Average First Contentful Paint" },
    { value: "100%", label: "Responsive Mobile & Tablet Layout" },
    { value: "0", label: "Monthly Server Maintenance Hassle" },
  ],
  capabilitiesTitle: "Static Architecture Built for Maximum Speed",
  capabilitiesSubtitle:
    "We build modern, clean, and conversion-focused static websites using React, Next.js, and edge deployment.",
  capabilities: [
    {
      title: "Portfolio & Landing Pages",
      description: "High-impact layouts engineered to showcase products, creative work, and convert incoming traffic into qualified client leads.",
      icon: Layout,
      badge: "Lead Optimized",
    },
    {
      title: "Sub-Second Global Edge Delivery",
      description: "Distributed via high-speed Edge CDNs (Vercel & Cloudflare). Assets load instantaneously worldwide with zero cold starts.",
      icon: Zap,
      badge: "Edge Cached",
    },
    {
      title: "Technical SEO & Social Cards",
      description: "Semantic HTML5, automated XML sitemaps, JSON-LD schema, and rich OpenGraph cards for WhatsApp, Twitter, and LinkedIn previews.",
      icon: Search,
      badge: "Search Index Ready",
    },
    {
      title: "Mobile-First Fluid UI/UX",
      description: "Custom touch target sizing, responsive typography scales, and fluid flexbox grids ensuring flawless navigation on all smartphones.",
      icon: Smartphone,
      badge: "60fps Fluid",
    },
    {
      title: "Bulletproof Security & SSL",
      description: "Zero database vulnerability exposure. Auto-renewing SSL certificates and DDoS edge defenses protect your brand 24/7.",
      icon: ShieldCheck,
      badge: "A+ SSL Grade",
    },
    {
      title: "Interactive Lead Capture Forms",
      description: "Seamless contact, quote request, and WhatsApp inquiry buttons routed directly to your business phone or email inbox.",
      icon: Globe,
      badge: "Direct Contact",
    },
  ],
  deliverables: [
    "Custom mobile-first responsive architecture designed for your brand",
    "Technical SEO structure, Meta tags, and OpenGraph social share cards",
    "Instant WhatsApp chat integration & interactive validated lead capture forms",
    "Google Analytics 4 & Google Search Console indexing configuration",
    "Free SSL certificate setup, custom domain connection & Edge CDN hosting",
    "100% clean source code ownership and environment documentation",
  ],
  techStack: ["React", "Next.js", "Tailwind CSS", "Vercel", "Cloudflare", "TypeScript"],
  packagesTitle: "Transparent Static Website Packages",
  packages: [
    {
      id: "basic",
      name: "Starter Launch Suite",
      price: "₹4,999",
      timeline: "3–5 Days",
      idealFor: "Freelancers, Personal Portfolios & Single Landing Pages",
      description: "Single-page responsive layout engineered for rapid go-to-market discovery and direct lead inquiries.",
      popular: false,
      features: [
        "Single-page high-converting section flow",
        "Mobile & tablet responsive touch navigation",
        "Semantic SEO structure & social share cards",
        "Global Edge CDN deployment & SSL",
        "1-Click direct WhatsApp lead chat button",
      ],
    },
    {
      id: "professional",
      name: "Professional Business Tier",
      price: "₹8,999",
      timeline: "5–7 Days",
      idealFor: "Small Businesses, Retail Stores & Consulting Agencies",
      description: "Multi-page structured architecture designed to build credibility, showcase services, and capture inbound quote requests.",
      popular: true,
      features: [
        "Multi-page architecture (Up to 5 Pages: Home, About, Services, Gallery, Contact)",
        "Bespoke branded color palette & modern typography",
        "High-performance asset compression & 98+ PageSpeed",
        "Interactive validated contact form & WhatsApp link",
        "Google Maps & business location embedding",
      ],
    },
    {
      id: "premium",
      name: "Custom Enterprise Marketing",
      price: "₹15,999",
      timeline: "7–10 Days",
      idealFor: "Established Companies, Product Drops & Corporate Firms",
      description: "Bespoke corporate architecture with custom micro-interactions, rich animation curves, and advanced technical schema.",
      popular: false,
      features: [
        "Up to 10 structured pages with custom sub-service flows",
        "Framer Motion micro-animations & interactive UI elements",
        "Deep JSON-LD Schema.org rich snippet optimization",
        "Multi-channel inquiry routing (WhatsApp, SMS, Email)",
        "30 Days of priority post-launch technical support",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discovery & Structure",
      description: "We review your brand assets, target audience, and content sections to draft a high-converting page wireframe.",
    },
    {
      number: "02",
      title: "UI/UX Design & Coding",
      description: "We build responsive React components with high-contrast typography, brand accents, and clean modular code.",
    },
    {
      number: "03",
      title: "Speed & SEO Audits",
      description: "We audit Core Web Vitals, compress visual media, configure canonical tags, and verify search engine readability.",
    },
    {
      number: "04",
      title: "Production Deployment",
      description: "We map your domain, activate edge caching and SSL, and hand over the live website with complete documentation.",
    },
  ],
  faqs: [
    {
      question: "What is a static website and why should I choose it?",
      answer: "A static website serves pre-built HTML, CSS, and JavaScript directly from global content delivery networks. Because it doesn't query a slow server database on every visitor request, it loads in milliseconds, has virtually zero maintenance cost, and cannot be hacked through database injections.",
    },
    {
      question: "Can I connect my own custom domain name (e.g. .com or .in)?",
      answer: "Yes, absolutely. We will configure DNS records and link your custom domain (from GoDaddy, Namecheap, Hostinger, etc.) with free automated SSL certificates.",
    },
    {
      question: "How will visitors contact me through the website?",
      answer: "We integrate direct 1-click WhatsApp buttons, click-to-call phone buttons, and interactive lead capture forms that forward messages straight to your WhatsApp or email inbox.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer: "Yes. All projects include post-launch support. Because static websites have no vulnerable database plugins to update, ongoing maintenance is extremely simple and affordable.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I am interested in building a Blazing-Fast Static Website. Can we discuss options?",
};

export const StaticWebsite: React.FC = () => {
  return <ServicePageTemplate data={staticWebData} />;
};

export default StaticWebsite;
