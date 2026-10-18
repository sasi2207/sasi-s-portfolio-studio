import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { Briefcase, Layers, Users, FileText, Database, ShieldCheck, BarChart2, Workflow } from "lucide-react";

const businessErpData: ServicePageData = {
  serviceId: "custom-erp",
  serviceNumber: "05",
  title: "Custom ERP, CRM & Business Automation",
  headline: "Custom ERP & Business Automation",
  badgeText: "Enterprise Operational Backbone",
  description:
    "Streamline your operations, manage customer relationships, and automate repetitive workflows tailored to your business model. Eliminate spreadsheet chaos with a unified operations platform.",
  proposalType: "custom-erp",
  iconType: "custom-erp",
  iconPng: "/images/services/icons/business-web.png",
  previewImage: "/images/services/business-web-preview.png",
  timeline: "4–10 Weeks",
  stats: [
    { value: "0", label: "Manual Spreadsheet Chaos" },
    { value: "100%", label: "Custom Tailored to Workflow" },
    { value: "Multi-Role", label: "Staff, Manager & Executive Access" },
    { value: "Daily Cloud", label: "Encrypted Automatic Backups" },
  ],
  capabilitiesTitle: "Operations Software Engineered for Your Exact Workflow",
  capabilitiesSubtitle:
    "Off-the-shelf software forces you to change how your company works. Our custom ERP and CRM solutions adapt 100% to your existing commercial processes.",
  capabilities: [
    {
      title: "Custom Workflow Pipeline Automation",
      description: "Automate purchase orders, multi-stage approval hierarchies, vendor follow-ups, and quotation lifecycles without human delays.",
      icon: Workflow,
      badge: "Zero Delays",
    },
    {
      title: "Inventory & Warehouse Synchronization",
      description: "Live raw material tracking, stock movement across branches, batch numbering, re-order alerts, and shrinkage auditing.",
      icon: Layers,
      badge: "Multi-Branch Sync",
    },
    {
      title: "CRM & Customer Engagement Pipeline",
      description: "Consolidate customer leads, quotation histories, communication logs, service renewal dates, and outstanding payment balances.",
      icon: Users,
      badge: "Lead to Cash",
    },
    {
      title: "Automated GST Invoicing & Financial Billing",
      description: "Compliant GST invoice printing, receipt vouchers, vendor payment vouchers, and automated Excel exports for your chartered accountant.",
      icon: FileText,
      badge: "Tax Compliant",
    },
    {
      title: "Staff Attendance & Permission Matrix",
      description: "Employee role assignments, shift tracking, commission calculations, and immutable audit logs of every system transaction.",
      icon: ShieldCheck,
      badge: "Full Audit Trail",
    },
    {
      title: "Executive Business Intelligence & BI",
      description: "Real-time executive cockpit displaying profit margins, overdue accounts receivables, team output, and quarterly forecast trends.",
      icon: BarChart2,
      badge: "Live Cockpit",
    },
  ],
  deliverables: [
    "Tailored operations software tailored to your specific industry workflow",
    "Multi-role user permission matrix (Superadmin, Branch Manager, Billing, Staff)",
    "Comprehensive inventory, purchase order, vendor, and customer tracking modules",
    "Automated GST billing, PDF quote generation, and financial ledger exports",
    "Automated daily encrypted database backups with high-availability disaster recovery",
    "On-site / remote staff training, video tutorials, and user manual documentation",
  ],
  techStack: ["React", "Python / Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"],
  packagesTitle: "Custom ERP & Automation Implementation Tiers",
  packages: [
    {
      id: "essential-erp",
      name: "Essential Operations ERP",
      price: "₹35,000+",
      timeline: "3–5 Weeks",
      idealFor: "Workshops, Clinics, Retail Wholesalers & Single-Branch Units",
      description: "Streamlined operational system covering inventory, customer billing, and daily sales accounting.",
      popular: false,
      features: [
        "Inventory stock tracking with low-stock alerts",
        "Customer billing, quotation & PDF invoice generator",
        "Staff login with permission restrictions",
        "Daily automated database cloud backups",
        "Staff training session & operational documentation",
      ],
    },
    {
      id: "automation-pro",
      name: "Full Business Automation Suite",
      price: "₹65,000+",
      timeline: "5–8 Weeks",
      idealFor: "Manufacturing Plants, Multi-Location Retailers & Distributors",
      description: "Comprehensive ERP backbone with multi-stage approval pipelines, vendor tracking, employee attendance, and executive BI reports.",
      popular: true,
      features: [
        "Multi-branch warehouse stock transfer & batch tracking",
        "Vendor purchase orders & accounts payable management",
        "Automated WhatsApp alerts for dispatch & payment dues",
        "Granular audit trails for every edit and deletion",
        "Executive dashboard with profit & loss reporting",
      ],
    },
    {
      id: "enterprise-custom",
      name: "Complete Enterprise Transformation",
      price: "₹1,20,000+",
      timeline: "8–12 Weeks",
      idealFor: "Large Scale Industries, Logistics Fleets & Corporate Groups",
      description: "Bespoke digital architecture replacing all legacy software: custom mobile apps for field staff, biometric hardware sync, and dedicated private server hosting.",
      popular: false,
      features: [
        "Companion mobile app for warehouse staff & delivery agents",
        "Biometric device / barcode scanner hardware integration",
        "Dedicated private cloud infrastructure setup (AWS / Azure)",
        "Custom accounting integration & legacy database migration",
        "90 Days dedicated on-call technical support & SLA guarantee",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Operational Workflow Mapping",
      description: "We visit your facility or meet virtually to document how your paper forms, registers, and spreadsheets move between teams.",
    },
    {
      number: "02",
      title: "Custom Architecture & Prototyping",
      description: "We design data models and interactive prototype screens for your staff to test and validate before coding.",
    },
    {
      number: "03",
      title: "Development & Data Migration",
      description: "We code the ERP modules, integrate automated report generators, and migrate existing spreadsheet records into PostgreSQL.",
    },
    {
      number: "04",
      title: "Staff Training & Cutover",
      description: "We conduct hands-on training with your managers and billing staff, verify backups, and transition smoothly to live production.",
    },
  ],
  faqs: [
    {
      question: "Why build a custom ERP instead of using Tally or SAP?",
      answer: "Generic software like Tally or SAP is either too rigid or overwhelmingly complex and expensive. A custom ERP gives you exactly what your business requires without paying thousands in annual license fees for features you never use.",
    },
    {
      question: "Can we import our existing Excel sheets and customer registers?",
      answer: "Yes! We build data migration scripts to import your historical customer contacts, past invoices, and product catalogs directly into the new database.",
    },
    {
      question: "Can staff members access the software from their phones or homes?",
      answer: "Yes, our ERP platforms are accessible securely via modern web browsers on phones, tablets, or computers with multi-factor authentication and role limits.",
    },
    {
      question: "Who owns the code and database?",
      answer: "You own 100% of your software code, database records, and infrastructure. There is no vendor lock-in.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I want to discuss Custom ERP & Business Automation for my company.",
};

export const BusinessWebsite: React.FC = () => {
  return <ServicePageTemplate data={businessErpData} />;
};

export default BusinessWebsite;
