import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { TrendingUp, Search, Target, Globe, BarChart3, Megaphone, CheckCircle2, Zap } from "lucide-react";

const digitalMarketingData: ServicePageData = {
  serviceId: "digital-marketing",
  serviceNumber: "07",
  title: "Digital Marketing & SEO",
  headline: "Growth-Driven Digital Marketing & SEO",
  badgeText: "Search Visibility & Acquisition Funnels",
  description:
    "Boost your online visibility, drive targeted organic traffic, and maximize ROI with data-backed marketing strategies. Combining technical SEO, Generative Engine Optimization (GEO), and high-intent local citations.",
  proposalType: "seo-growth",
  iconType: "digital-marketing",
  iconPng: "/images/services/icons/digital-marketing.png",
  previewImage: "/images/services/digital-marketing-preview.png",
  timeline: "2–4 Weeks",
  stats: [
    { value: "95+", label: "Lighthouse Technical SEO Score" },
    { value: "GEO / AEO", label: "Generative Engine Optimization" },
    { value: "#1 Local", label: "Google Business Profile Citations" },
    { value: "+140%", label: "Average Qualified Inbound Growth" },
  ],
  capabilitiesTitle: "Technical Search Engineering & Conversion Marketing",
  capabilitiesSubtitle:
    "We don't post random filler graphics. We engineer your code, schema, and content so high-intent buyers find your business first.",
  capabilities: [
    {
      title: "Core Web Vitals & Speed Acceleration",
      description: "Compress images, minify scripts, eliminate render-blocking resources, and ensure 95+ performance metrics to rank higher on Google.",
      icon: Zap,
      badge: "Core Web Vitals",
    },
    {
      title: "Structured Schema.org & Rich Snippets",
      description: "JSON-LD structured data implementation (Organization, LocalBusiness, FAQ, Product, and Service schemas) for eye-catching search cards.",
      icon: Search,
      badge: "JSON-LD Schema",
    },
    {
      title: "Generative Engine Optimization (GEO & AEO)",
      description: "Optimize your entity associations so OpenAI ChatGPT, Perplexity, and Google Gemini cite and recommend your brand in AI answers.",
      icon: Target,
      badge: "AI Search Ready",
    },
    {
      title: "High-Intent Local SEO & Google Business",
      description: "Dominance across local Google Maps search terms in Salem, Tamil Nadu, and regional markets with citation synchronization and reviews.",
      icon: Globe,
      badge: "Google Maps Rank",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "A/B copy testing, call-to-action button placements, mobile form streamlining, and heatmap analysis to turn visitors into paying inquiries.",
      icon: TrendingUp,
      badge: "Funnel Tuning",
    },
    {
      title: "Google Analytics 4 & Search Telemetry",
      description: "Full event tracking, conversion goal funnels, monthly keyword movement reports, and Google Search Console indexing error fixes.",
      icon: BarChart3,
      badge: "Actionable Telemetry",
    },
  ],
  deliverables: [
    "Full technical code audit, speed optimization, and Core Web Vitals remediation",
    "Complete JSON-LD structured data implementation for rich search snippet eligibility",
    "Google Search Console sitemap indexing, robots.txt tuning, and crawl error fixes",
    "High-intent keyword research mapping and on-page metadata optimization",
    "Google Business Profile optimization for regional Google Maps dominance",
    "Monthly executive search ranking and organic visitor conversion analytics report",
  ],
  techStack: ["Google Search Console", "Google Analytics 4", "Lighthouse", "Schema.org", "SEMrush", "Edge SEO"],
  packagesTitle: "Digital Marketing & SEO Packages",
  packages: [
    {
      id: "seo-audit",
      name: "Technical SEO & Speed Sprint",
      price: "₹6,999",
      timeline: "5–7 Days",
      idealFor: "Existing Websites with Poor Google Ranks & Slow Load Speeds",
      description: "One-time deep technical audit and code repair to score 95+ in Google Lighthouse and fix indexing errors.",
      popular: false,
      features: [
        "Core Web Vitals code audit & asset compression",
        "JSON-LD Schema structured data setup",
        "Google Search Console indexing & sitemap submission",
        "Meta title, description, and OpenGraph card optimization",
        "Before/After PageSpeed score verification report",
      ],
    },
    {
      id: "growth-seo",
      name: "Organic Growth & Local SEO Suite",
      price: "₹14,999",
      timeline: "2–4 Weeks",
      idealFor: "Local Businesses, Clinics, Professional Firms & Retail Stores",
      description: "Comprehensive local dominance package designed to rank your company in top Google Maps and search results.",
      popular: true,
      features: [
        "Targeted high-intent local keyword optimization",
        "Google Business Profile setup, categories & citation sync",
        "5 Optimized service landing pages with local keyword focus",
        "Generative Engine Optimization (GEO) entity mapping",
        "Monthly keyword ranking report & inquiry tracking",
      ],
    },
    {
      id: "scale-marketing",
      name: "Full-Funnel Commercial Growth",
      price: "₹28,000+",
      timeline: "Ongoing Sprint",
      idealFor: "E-Commerce Stores, SaaS Platforms & Commercial Enterprises",
      description: "Continuous organic search engineering, conversion rate optimization, Google Ads campaign setup, and funnel tuning.",
      popular: false,
      features: [
        "Continuous technical SEO & content expansion sprints",
        "High-converting Google Search Ad campaign setup & tracking",
        "Funnel analytics: Heatmaps, bounce rate audits & CTA optimization",
        "Competitor gap analysis & backlink acquisition roadmap",
        "Bi-weekly performance review call with growth engineer",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Technical SEO Audit",
      description: "We inspect your website code for crawl errors, slow scripts, missing tags, and mobile accessibility bottlenecks.",
    },
    {
      number: "02",
      title: "Keyword & Entity Mapping",
      description: "We research exact keywords that your target customers type when ready to hire or purchase your services.",
    },
    {
      number: "03",
      title: "On-Page & Schema Coding",
      description: "We inject clean JSON-LD structured data, optimize headings, and accelerate Core Web Vitals to score 95+.",
    },
    {
      number: "04",
      title: "Local Sync & Monthly Telemetry",
      description: "We sync Google Business Profiles, verify indexation, and track organic keyword rank climb every month.",
    },
  ],
  faqs: [
    {
      question: "How long does it take to see results from SEO?",
      answer: "Technical SEO and speed fixes yield indexing improvements in as little as 1 to 2 weeks. Organic search rankings for competitive terms typically compound over 1 to 3 months as search engines recrawl your structured schema.",
    },
    {
      question: "What is Generative Engine Optimization (GEO)?",
      answer: "GEO is modern SEO tailored for AI answer engines (ChatGPT, Google Gemini, and Perplexity). We structure your brand entities, citations, and factual data so when potential clients ask AI tools for service recommendations, your company is highlighted as the authoritative answer.",
    },
    {
      question: "Will my website score 95+ on Google Lighthouse?",
      answer: "Yes, our technical sprint specifically guarantees high 90+ scores on Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift, and First Input Delay).",
    },
    {
      question: "Do you handle Google Maps listings (Local SEO)?",
      answer: "Yes! We optimize your Google Business Profile with proper secondary categories, verified business geo-coordinates, working website URLs, and citation consistency to rank in the Google Maps 3-Pack.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I want to grow my search rankings with Digital Marketing & SEO.",
};

export const DigitalMarketingService: React.FC = () => {
  return <ServicePageTemplate data={digitalMarketingData} />;
};

export default DigitalMarketingService;
