import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Users,
  Target,
  Handshake,
  MessageSquare,
  BarChart2,
  BellRing,
  Truck,
  CheckCircle2,
  FileCheck2,
  PhoneCall,
} from "lucide-react";

const srmCrmData: ServicePageData = {
  serviceId: "srm-crm-software",
  serviceNumber: "06",
  title: "SRM & CRM Software",
  headline: "Supplier & Customer Relationship Suite",
  badgeText: "High-Velocity Lead Conversion & Supplier Collaboration",
  description:
    "An integrated dual-sided relationship management platform. Accelerate revenue with an intuitive visual sales pipeline, automated WhatsApp & email nurture sequences, customer 360 profiles, combined with a dedicated Supplier Portal for transparent RFQ bidding, PO tracking, and vendor rating scorecards.",
  proposalType: "crm-software",
  iconType: "crm",
  iconPng: "/images/services/icons/business-web.png",
  previewImage: "/images/services/business-web-preview.png",
  previewImageAlt: "TechSasi CRM & SRM Interactive Kanban and Supplier Portal",
  timeline: "3–6 Weeks",
  stats: [
    { value: "3.4x", label: "Increase in Lead Follow-Up Velocity" },
    { value: "100%", label: "Omnichannel Message Tracking" },
    { value: "<2h", label: "Average Vendor RFQ Turnaround" },
    { value: "360°", label: "Customer & Supplier Audit Visibility" },
  ],
  capabilitiesTitle: "Unified Relationship Engine for Both Revenue & Procurement",
  capabilitiesSubtitle:
    "Bridge the gap between inbound sales opportunities and outbound supplier logistics with real-time deal stages and automated supplier collaboration.",
  capabilities: [
    {
      title: "Visual Kanban Sales Pipeline",
      description:
        "Drag-and-drop opportunity cards across customized deal stages. Track expected revenue, probability weighting, closing dates, and automated stale-deal warnings.",
      icon: Target,
      badge: "Pipeline Flow",
    },
    {
      title: "Self-Service Supplier Portal (SRM)",
      description:
        "Dedicated vendor access to view purchase orders, submit RFQ bids, download tax certificates, update shipment dispatch tracking, and upload commercial invoices.",
      icon: Handshake,
      badge: "Vendor Hub",
    },
    {
      title: "Omnichannel WhatsApp & Email Sync",
      description:
        "Consolidated communication history. View all client WhatsApp messages, emails, call logs, and meeting minutes on a single unified customer profile timeline.",
      icon: MessageSquare,
      badge: "WhatsApp Integrated",
    },
    {
      title: "Automated Lead Routing & Follow-Up Bot",
      description:
        "Instant auto-assignment of web leads to sales reps based on region or product category, with automated WhatsApp thank-you messages and SLA escalation alerts.",
      icon: BellRing,
      badge: "Zero Dropped Leads",
    },
    {
      title: "Supplier Performance & Rating Scorecards",
      description:
        "Automated vendor evaluation scoring based on on-time delivery rates, defect/rejection percentages, pricing compliance, and SLA reliability history.",
      icon: Truck,
      badge: "Vendor Metrics",
    },
    {
      title: "Executive Revenue & Forecast Analytics",
      description:
        "Sales rep performance leaderboards, conversion drop-off funnel analysis, customer lifetime value (LTV), and seasonal demand projection charts.",
      icon: BarChart2,
      badge: "Predictive BI",
    },
  ],
  deliverables: [
    "Full-featured CRM sales dashboard with interactive Kanban deal pipelines",
    "Self-service Supplier Relationship Management (SRM) vendor portal with secure login",
    "WhatsApp Business API and SMTP email auto-logging integration",
    "Quotation generation engine with 1-click PDF download and digital approval tracking",
    "Customer 360 profile database with purchase history, tickets, and payment ledger",
    "Complete source code ownership, documentation, and 12-month technical SLA",
  ],
  techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "WhatsApp API", "Docker"],
  packagesTitle: "SRM & CRM Implementation Packages",
  packages: [
    {
      id: "crm-starter",
      name: "Sales CRM Pro",
      price: "₹24,999",
      timeline: "2–3 Weeks",
      idealFor: "Sales Teams, Real Estate Agencies & Consulting Firms",
      description:
        "Focused customer relationship management platform with Kanban pipelines, lead capture, and WhatsApp integration.",
      popular: false,
      features: [
        "Up to 10 Sales Executives",
        "Visual Kanban deal pipeline & custom stages",
        "Direct WhatsApp & Email lead capture",
        "Quotation generation with PDF export",
        "Sales activity logging & conversion reports",
      ],
    },
    {
      id: "crm-srm-suite",
      name: "Unified CRM + SRM Suite",
      price: "₹49,999",
      timeline: "4–6 Weeks",
      idealFor: "Trading Companies, B2B Wholesalers & Production Houses",
      description:
        "Complete dual platform: Full Sales CRM plus dedicated Supplier Portal for RFQ quotation bidding and procurement management.",
      popular: true,
      features: [
        "Unlimited Sales & Procurement Users",
        "Self-Service Supplier Portal for Vendor RFQ & POs",
        "WhatsApp Business Cloud API automation",
        "Automated lead assignment & SLA escalation",
        "Supplier rating scorecards & delivery tracking",
        "Executive revenue forecasting & rep performance BI",
      ],
    },
    {
      id: "crm-enterprise",
      name: "Enterprise Relationship Platform",
      price: "₹89,999+",
      timeline: "6–8 Weeks",
      idealFor: "Multi-Location Enterprise Networks & Distribution Chains",
      description:
        "Fully tailored CRM & SRM platform integrated with your ERP, telephony systems, SMS gateways, and custom loyalty programs.",
      popular: false,
      features: [
        "Cloud telephony IVR & click-to-call integration",
        "Bi-directional sync with existing ERP & Tally systems",
        "Custom vendor compliance audit workflows",
        "Custom customer loyalty points & reward management",
        "Dedicated cloud cluster & SLA guarantee",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Pipeline & Vendor Workflow Discovery",
      description:
        "We identify your sales stages, lead sources, supplier requisition flows, and critical bottleneck areas.",
    },
    {
      number: "02",
      title: "Portal Architecture & UX Design",
      description:
        "We build rapid prototypes for both the internal sales rep cockpit and the external vendor bidding interface.",
    },
    {
      number: "03",
      title: "API Sync & Communications Wireup",
      description:
        "We connect WhatsApp, email, PDF invoice builders, and database relations for automated transaction tracking.",
    },
    {
      number: "04",
      title: "Live Deployment & Training",
      description:
        "We deploy to secure cloud instances, import legacy contacts, train your sales and vendor management staff, and go live.",
    },
  ],
  faqs: [
    {
      question: "Can suppliers log in from their own phones or computers?",
      answer:
        "Yes! The Supplier Portal is completely responsive and mobile-ready. Each approved vendor receives secure login credentials to view open POs, upload delivery notes, submit pricing bids, and track payment clearance statuses.",
    },
    {
      question: "Does this CRM integrate directly with WhatsApp?",
      answer:
        "Yes, we integrate with the official WhatsApp Business Cloud API. Your team can send automated quote notifications, order updates, and chat directly with leads from within the CRM interface.",
    },
    {
      question: "Can we import our existing customer database from Excel or Google Sheets?",
      answer:
        "Yes. We include bulk CSV/Excel import tools and our engineers will help sanitize and map your contact fields, lead sources, and past transaction histories during setup.",
    },
    {
      question: "Is there any recurring per-user monthly subscription fee?",
      answer:
        "No! Unlike Salesforce or HubSpot where you pay steep monthly recurring fees per user, TechSasi builds and deploys your own private platform. You own the code with zero per-seat monthly license fees.",
    },
  ],
  whatsappMessage:
    "Hello TechSasi, I am interested in SRM & CRM Software development. Please share a customized quote and system demo.",
};

export const SrmCrmService: React.FC = () => {
  return <ServicePageTemplate data={srmCrmData} />;
};

export default SrmCrmService;
