import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Database,
  Layers,
  Workflow,
  ShieldCheck,
  BarChart3,
  Boxes,
  Truck,
  CreditCard,
  Building2,
  Cpu,
  FileSpreadsheet,
} from "lucide-react";

const erpSoftwareData: ServicePageData = {
  serviceId: "erp-software",
  serviceNumber: "05",
  title: "Enterprise ERP Software",
  headline: "Next-Gen Enterprise ERP Platform",
  badgeText: "Unified Supply Chain & Financial Intelligence",
  description:
    "End-to-end Enterprise Resource Planning software tailored for growing manufacturers, distributors, and trading companies. Seamlessly unify inventory, procurement, production planning, accounting, and multi-branch operations with automated compliance and real-time ledger sync.",
  proposalType: "erp-software",
  iconType: "erp",
  iconPng: "/images/services/icons/business-web.png",
  previewImage: "/images/services/business-web-preview.png",
  previewImageAlt: "TechSasi Enterprise ERP Architecture & Module Dashboard",
  timeline: "4–8 Weeks",
  stats: [
    { value: "100%", label: "Real-Time Stock & Ledger Sync" },
    { value: "0", label: "Spreadsheet Data Discrepancies" },
    { value: "10x", label: "Faster Purchase Order Cycles" },
    { value: "99.9%", label: "Cloud Uptime & Data Encryption" },
  ],
  capabilitiesTitle: "Mission-Critical Modules Engineered for Enterprise Velocity",
  capabilitiesSubtitle:
    "Say goodbye to rigid, legacy ERPs. Our custom modular platform empowers your teams with automated approvals, smart warehouse dispatching, and executive business telemetry.",
  capabilities: [
    {
      title: "Multi-Warehouse & Smart Inventory",
      description:
        "Real-time stock valuation across multiple locations, batch/serial tracking, automated re-order triggers, bin locations, and barcode-driven dispatch validation.",
      icon: Boxes,
      badge: "Real-Time Sync",
    },
    {
      title: "Supply Chain & Automated Procurement",
      description:
        "Vendor quotations comparison, digital purchase requisitions, automated PO dispatch, goods receipt notes (GRN), and 3-way matching invoice approvals.",
      icon: Truck,
      badge: "Zero Leakage",
    },
    {
      title: "Manufacturing & Production BOM",
      description:
        "Multi-level Bill of Materials (BOM), work orders scheduling, scrap management, machine utilization tracking, and real-time finished goods costing.",
      icon: Workflow,
      badge: "Smart Shopfloor",
    },
    {
      title: "Double-Entry Accounting & GST E-Way Bills",
      description:
        "Automated general ledger, accounts payable/receivable, bank reconciliation, direct GST e-invoicing, e-way bill generation, and financial audit trails.",
      icon: CreditCard,
      badge: "GST Compliant",
    },
    {
      title: "Multi-Branch & Role-Based RBAC Security",
      description:
        "Granular permission controls for operators, managers, auditors, and executive CXOs. Immutable audit logs for every transaction and modification.",
      icon: ShieldCheck,
      badge: "Bank-Grade RBAC",
    },
    {
      title: "Real-Time Executive BI Cockpit",
      description:
        "Interactive analytics dashboards tracking gross margin per product line, DSO receivables, inventory turnover rates, and operational bottleneck alerts.",
      icon: BarChart3,
      badge: "Live Telemetry",
    },
  ],
  deliverables: [
    "Full-featured custom ERP web application & responsive tablet terminal UI",
    "Multi-branch database schema architecture on PostgreSQL with daily encrypted cloud backups",
    "Automated GST e-invoice, e-way bill & printable thermal/laser invoice templates",
    "Role-based authentication system with granular access control lists (ACL)",
    "Staff training sessions, comprehensive video documentation & API developer guides",
    "Complete commercial source code handover and 12-month technical SLA warranty",
  ],
  techStack: ["React", "TypeScript", "Node.js / Express", "PostgreSQL", "Docker", "Redis", "Tailwind CSS"],
  packagesTitle: "Curated ERP Implementation Tiers",
  packages: [
    {
      id: "erp-starter",
      name: "Commercial ERP Standard",
      price: "₹34,999",
      timeline: "3–4 Weeks",
      idealFor: "Growing Traders, Wholesalers & Single-Factory Plants",
      description:
        "Core operations engine covering inventory, vendor management, invoicing, customer orders, and basic accounting.",
      popular: false,
      features: [
        "Up to 2 Warehouses & 15 Team Users",
        "Inventory management & low-stock alerts",
        "Purchase orders & Goods Receipt Notes (GRN)",
        "GST-compliant billing & customer records",
        "Role-based access & basic analytics",
      ],
    },
    {
      id: "erp-pro",
      name: "Enterprise Multi-Branch Suite",
      price: "₹69,999",
      timeline: "5–7 Weeks",
      idealFor: "Multi-Branch Distributors, Manufacturers & Mid-Market Enterprises",
      description:
        "Complete enterprise platform with manufacturing BOM, automated procurement approvals, multi-location stock, and financial ledgers.",
      popular: true,
      features: [
        "Unlimited Branches & Warehouses",
        "Manufacturing BOM & Work Order Scheduling",
        "Automated 3-Way Invoice Matching & PO Workflows",
        "Direct GST E-Invoicing & E-Way Bill Integration",
        "Executive Business Intelligence & Profitability Reports",
        "Priority 24/7 dedicated engineering support",
      ],
    },
    {
      id: "erp-custom",
      name: "Custom Enterprise Architecture",
      price: "₹1,24,999+",
      timeline: "8–12 Weeks",
      idealFor: "Large Scale Industrial Plants & Multi-Entity Conglomerates",
      description:
        "100% custom-architected ERP with IoT machine telemetry, custom mobile warehouse barcode apps, and external legacy software integrations.",
      popular: false,
      features: [
        "Tailored custom database schemas & bespoke workflows",
        "IoT weighing scale, machine & barcode scanner integrations",
        "Custom mobile app for warehouse pickers & delivery drivers",
        "Dedicated cloud infrastructure deployment (AWS / Azure)",
        "On-premise deployment option with SLA guarantees",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Business Process Audit & Workflow Mapping",
      description:
        "We shadow your key operators to catalog every approval step, inventory transfer rule, and tax ledger requirement.",
    },
    {
      number: "02",
      title: "Schema Engineering & UI Prototyping",
      description:
        "We build relational database schemas and interactive React prototypes with keyboard-optimized data entry screens.",
    },
    {
      number: "03",
      title: "Core Module Assembly & Integration",
      description:
        "We develop inventory, accounting, and supply chain modules, connecting automated triggers, PDF generators, and audit logs.",
    },
    {
      number: "04",
      title: "User Acceptance Testing & Go-Live",
      description:
        "We migrate legacy spreadsheets, conduct staff hands-on onboarding workshops, and monitor production rollout 24/7.",
    },
  ],
  faqs: [
    {
      question: "Can this ERP replace our current Excel spreadsheets without data loss?",
      answer:
        "Yes, absolutely. We provide full data migration services. We sanitize, structure, and import all your legacy customer records, supplier histories, item catalogs, and opening balances directly into the new PostgreSQL database.",
    },
    {
      question: "Can different staff members have restricted view permissions?",
      answer:
        "Yes. Our granular Role-Based Access Control (RBAC) allows you to define custom roles (e.g., Billing Clerk, Warehouse Storekeeper, Sales Manager, Accountant, Director). Warehouse staff will only see stock movements, while profit margins and bank balances remain strictly confidential.",
    },
    {
      question: "Does the system support GST e-invoices and e-way bills?",
      answer:
        "Yes, our billing and dispatch modules are engineered to automatically generate compliant GST invoices with QR codes, HSN summaries, and automated e-way bill payloads.",
    },
    {
      question: "Can we access the ERP from phones, tablets, or remote locations?",
      answer:
        "Yes, the application is cloud-native and responsive. Store managers and executives can securely access dashboards and approve purchase orders from any smartphone, tablet, or laptop worldwide.",
    },
  ],
  whatsappMessage:
    "Hello TechSasi, I am interested in Enterprise ERP Software development. Please share a customized quote and system architecture demo.",
};

export const ErpSoftwareService: React.FC = () => {
  return <ServicePageTemplate data={erpSoftwareData} />;
};

export default ErpSoftwareService;
