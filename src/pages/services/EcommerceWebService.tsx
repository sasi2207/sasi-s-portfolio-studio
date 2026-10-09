import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { ShoppingCart, CreditCard, ShieldCheck, Truck, Package, Tag, Bell, BarChart3 } from "lucide-react";

const ecommerceData: ServicePageData = {
  serviceId: "ecommerce",
  serviceNumber: "03",
  title: "E-Commerce Development",
  headline: "High-Converting E-Commerce Stores",
  badgeText: "Digital Commerce & Payment Platforms",
  description:
    "Turn visitors into loyal customers with secure payment gateways, smooth checkout flows, and inventory management. Engineered for zero checkout drop-offs and seamless mobile shopping.",
  proposalType: "ecommerce",
  iconType: "ecommerce",
  iconPng: "/images/services/icons/ecommerce.png",
  previewImage: "/images/services/ecommerce-preview.png",
  timeline: "3–5 Weeks",
  stats: [
    { value: "<3 Steps", label: "Frictionless Checkout Flow" },
    { value: "UPI/Cards", label: "Razorpay, PhonePe & Stripe" },
    { value: "Real-Time", label: "Live Stock & Inventory Sync" },
    { value: "Automated", label: "GST Tax Invoicing & SMS Alerts" },
  ],
  capabilitiesTitle: "Commerce Architecture Engineered for Conversion",
  capabilitiesSubtitle:
    "We build modern digital storefronts that eliminate checkout friction, automate fulfillment tracking, and provide real-time sales telemetry.",
  capabilities: [
    {
      title: "Zero-Friction Checkout Funnel",
      description: "One-page checkout optimized for Indian & international buyers. Supports UPI QR, PhonePe, Google Pay, Credit/Debit Cards, and NetBanking.",
      icon: CreditCard,
      badge: "Zero Drop-Off",
    },
    {
      title: "Real-Time Inventory Management",
      description: "Automated stock counters, out-of-stock indicators, variant pricing (sizes/colors), and automated low-stock warnings to avoid overselling.",
      icon: Package,
      badge: "Stock Tracker",
    },
    {
      title: "Automated GST Invoicing",
      description: "Compliant tax calculation, automated PDF invoice generation with your business GSTIN, and instant customer download upon order completion.",
      icon: Tag,
      badge: "GST Compliant",
    },
    {
      title: "WhatsApp & SMS Order Alerts",
      description: "Automated transactional messages sent to buyers when an order is placed, dispatched, out for delivery, or successfully completed.",
      icon: Bell,
      badge: "Instant Alerts",
    },
    {
      title: "Store Admin & Revenue Analytics",
      description: "Executive sales overview displaying daily revenue, average order value (AOV), best-selling items, and customer retention metrics.",
      icon: BarChart3,
      badge: "Sales Telemetry",
    },
    {
      title: "Courier & Shipping Integrations",
      description: "Integration hooks for Shiprocket, Delhivery, and local delivery partners for automated tracking number generation and tracking links.",
      icon: Truck,
      badge: "Logistics Ready",
    },
  ],
  deliverables: [
    "Full-featured custom product catalog with smart filtering & instant search",
    "Secure payment gateway integration (Razorpay, Cashfree, Stripe, or PhonePe)",
    "Customer shopping cart, saved addresses, and order history portal",
    "Admin store dashboard for product uploads, coupon codes & order processing",
    "Automated PDF tax invoices and WhatsApp/SMS notification triggers",
    "Mobile-first responsive storefront optimized for 60fps scrolling on smartphones",
  ],
  techStack: ["React", "Node.js", "PostgreSQL", "Razorpay", "Stripe", "Tailwind CSS", "Redis"],
  packagesTitle: "E-Commerce Launch Packages",
  packages: [
    {
      id: "starter-store",
      name: "Starter Merchant Store",
      price: "₹19,999+",
      timeline: "2–3 Weeks",
      idealFor: "Boutiques, D2C Startups & Niche Product Sellers",
      description: "Core e-commerce store with catalog up to 100 products, Razorpay/UPI integration, and simple admin panel.",
      popular: false,
      features: [
        "Up to 100 product listings with image galleries",
        "UPI, NetBanking & Card payment gateway setup",
        "Clean mobile shopping cart & checkout flow",
        "Admin panel for managing products & viewing orders",
        "Automated email order confirmation to buyers",
      ],
    },
    {
      id: "growth-store",
      name: "Growth Commerce Engine",
      price: "₹34,999+",
      timeline: "3–5 Weeks",
      idealFor: "Established Retail Brands, Wholesalers & High-Volume Sellers",
      description: "Advanced digital commerce system with discount coupon engine, variant management, automated GST billing, and WhatsApp alerts.",
      popular: true,
      features: [
        "Unlimited product catalog with multi-category filters",
        "Promotional coupon codes & volume discount rules",
        "Automated GST invoice generation & PDF downloads",
        "WhatsApp & SMS order confirmation alerts",
        "Shiprocket / Delhivery courier tracking sync",
      ],
    },
    {
      id: "custom-commerce",
      name: "Enterprise Multi-Vendor Commerce",
      price: "₹65,000+",
      timeline: "5–8 Weeks",
      idealFor: "Marketplace Platforms, Multi-Branch Chains & B2B Portals",
      description: "Bespoke digital commerce platform supporting vendor commissions, customized subscription billing, and enterprise ERP integration.",
      popular: false,
      features: [
        "Multi-vendor seller accounts with revenue split payouts",
        "Recurring subscription billing & automated renewals",
        "Custom ERP & accounting database synchronization",
        "High-concurrency caching for seasonal flash sales",
        "Dedicated launch manager & 60 days priority maintenance",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Store Catalog Planning",
      description: "We organize your product categories, pricing models, shipping regions, and payment provider credentials.",
    },
    {
      number: "02",
      title: "Storefront UI/UX Design",
      description: "We design a frictionless shopping cart, instant search bar, product detail gallery, and rapid checkout screen.",
    },
    {
      number: "03",
      title: "Payment & Gateway Testing",
      description: "We configure live API keys, verify webhook callbacks, run test transactions, and test automated refund workflows.",
    },
    {
      number: "04",
      title: "Live Store Deployment",
      description: "We deploy on scalable cloud hosting with SSL, configure domain email, and train your staff on product management.",
    },
  ],
  faqs: [
    {
      question: "Which payment gateways do you support?",
      answer: "We support Razorpay, PhonePe, Cashfree, Paytm, Stripe, and PayPal. For Indian customers, buyers can pay instantly via any UPI app (GPay, PhonePe, Paytm, CRED) or debit/credit card.",
    },
    {
      question: "Can I manage product inventory, prices, and photos myself?",
      answer: "Yes! You get a simple, secure administrative control panel where you can add new items, update prices, upload photos, mark items as out-of-stock, and view customer orders without any technical coding.",
    },
    {
      question: "Are there any recurring transaction commissions charged by TechSasi?",
      answer: "No. TechSasi charges zero sales commission on your store. You keep 100% of your earnings; only standard payment gateway processing fees apply directly from your bank/gateway.",
    },
    {
      question: "Can we integrate automated WhatsApp messages for buyers?",
      answer: "Yes, we integrate official WhatsApp Business APIs so customers receive instant confirmation and tracking links directly on WhatsApp as soon as an order is confirmed.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I want to launch a High-Converting E-Commerce Store. Let's discuss details.",
};

export const EcommerceWebService: React.FC = () => {
  return <ServicePageTemplate data={ecommerceData} />;
};

export default EcommerceWebService;
