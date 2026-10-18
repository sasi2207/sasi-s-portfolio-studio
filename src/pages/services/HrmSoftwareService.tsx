import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Users2,
  CalendarCheck,
  CreditCard,
  FileBadge,
  Fingerprint,
  TrendingUp,
  ShieldCheck,
  Clock,
  Award,
  FileSpreadsheet,
} from "lucide-react";

const hrmSoftwareData: ServicePageData = {
  serviceId: "hrm-software",
  serviceNumber: "07",
  title: "HRM & Payroll Software",
  headline: "Automated HRM & Payroll Management",
  badgeText: "Zero-Error Payroll, Biometric Attendance & Staff Self-Service",
  description:
    "End-to-end Human Resource Management platform engineered to automate employee lifecycles from recruitment to retirement. Eliminate manual payroll calculation stress with one-click automated salary slips, biometric fingerprint/facial device integration, PF/ESI/TDS tax deductions, and an intuitive Employee Self-Service (ESS) portal.",
  proposalType: "hrm-software",
  iconType: "hrm",
  iconPng: "/images/services/icons/business-web.png",
  previewImage: "/images/services/business-web-preview.png",
  previewImageAlt: "TechSasi HRM & Payroll Management System Architecture",
  timeline: "3–5 Weeks",
  stats: [
    { value: "100%", label: "Statutory PF, ESI & TDS Compliance" },
    { value: "<5 min", label: "Monthly Full-Company Payroll Run" },
    { value: "0", label: "Attendance Punch Discrepancies" },
    { value: "Self-Service", label: "Mobile ESS Portal for Leaves & Slips" },
  ],
  capabilitiesTitle: "Comprehensive Workforce Architecture Engineered for Precision",
  capabilitiesSubtitle:
    "Automate every HR administrative burden with seamless hardware biometric sync, automated statutory compliance, and transparent employee records.",
  capabilities: [
    {
      title: "Biometric & Geo-Fenced Mobile Attendance",
      description:
        "Direct API integration with biometric hardware (eSSUE, ZKTeco) and mobile GPS geo-fenced check-ins for field sales staff with real-time late/overtime logs.",
      icon: Fingerprint,
      badge: "Hardware Synced",
    },
    {
      title: "1-Click Payroll & Tax Engine",
      description:
        "Automated salary computations factoring in loss of pay (LOP), overtime, allowances, Provident Fund (PF), ESI, Professional Tax (PT), and TDS deductions.",
      icon: CreditCard,
      badge: "Tax Compliant",
    },
    {
      title: "Employee Self-Service (ESS) Mobile Portal",
      description:
        "Staff can check their remaining leave balances, submit leave and expense reimbursement requests, download encrypted PDF payslips, and view holiday calendars.",
      icon: Users2,
      badge: "Self-Service",
    },
    {
      title: "Leave Policy & Multi-Level Approvals",
      description:
        "Configurable casual leave, sick leave, paid time off, and compensatory off accrual rules with automated manager notification and multi-stage sign-offs.",
      icon: CalendarCheck,
      badge: "Policy Automation",
    },
    {
      title: "Digital Document Vault & Onboarding",
      description:
        "Paperless onboarding checklists, digital offer letter acceptance, KYC document storage, and automated contract expiration and probation review alerts.",
      icon: FileBadge,
      badge: "Paperless HR",
    },
    {
      title: "Performance Appraisals & OKR Tracking",
      description:
        "Quarterly 360-degree performance review cycles, team OKR milestone tracking, employee feedback logs, and automated increment letter generation.",
      icon: Award,
      badge: "Talent Growth",
    },
  ],
  deliverables: [
    "Full-featured HR Admin Console with employee directory and organization chart",
    "Employee Self-Service (ESS) mobile-responsive portal for all team members",
    "Automated payroll generator with bulk bank payout CSV files and PDF payslip emailing",
    "Biometric punch sync script connecting your physical biometric scanner to cloud",
    "Statutory PF, ESI, Form 16, and monthly labor compliance reports",
    "Complete source code ownership, documentation, and dedicated training for your HR team",
  ],
  techStack: ["React", "TypeScript", "Node.js / Express", "PostgreSQL", "Tailwind CSS", "ZKTeco SDK", "Docker"],
  packagesTitle: "Transparent HRM Implementation Packages",
  packages: [
    {
      id: "hrm-starter",
      name: "HRM Essentials",
      price: "₹24,999",
      timeline: "2–3 Weeks",
      idealFor: "Startups, Small Agencies & Clinics (Up to 30 Employees)",
      description:
        "Core human resources platform covering employee records, digital leave applications, and automated monthly salary slips.",
      popular: false,
      features: [
        "Up to 30 active employees",
        "Employee records & document vault",
        "Leave management & approval workflows",
        "Automated monthly payroll calculation & PDF payslips",
        "Employee self-service web login",
      ],
    },
    {
      id: "hrm-enterprise",
      name: "Enterprise HRM & Biometrics",
      price: "₹49,999",
      timeline: "3–5 Weeks",
      idealFor: "Factories, Schools, Retail Chains & Mid-Sized Businesses (30–300+ Staff)",
      description:
        "Complete enterprise system with biometric scanner hardware integration, multi-shift scheduling, statutory tax deductions, and performance reviews.",
      popular: true,
      features: [
        "Unlimited employees & multiple branch offices",
        "Direct Biometric device hardware sync (ZKTeco/eSSUE)",
        "Overtime, night shift allowances & multi-shift rosters",
        "Automated PF, ESI, PT, and TDS tax calculations",
        "Bulk bank disbursement format generation",
        "Performance reviews & OKR evaluation modules",
        "Priority dedicated deployment & setup support",
      ],
    },
    {
      id: "hrm-custom",
      name: "Custom Enterprise Workforce Platform",
      price: "₹89,999+",
      timeline: "6–8 Weeks",
      idealFor: "Multi-Location Corporations & Large Industrial Workforce (500+ Staff)",
      description:
        "Custom-architected HRMS with field staff live GPS tracking, contract labor contractor compliance, and integration with legacy ERP systems.",
      popular: false,
      features: [
        "Mobile GPS live geo-fencing for field executives",
        "Contract labor compliance, gate pass & contractor billing",
        "Bi-directional sync with SAP, Tally, or custom ERP systems",
        "Custom compensation & benefits equity modeling",
        "Dedicated cloud server hosting with 99.9% uptime SLA",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Salary Structure & Policy Definition",
      description:
        "We configure your salary heads (Basic, HRA, DA, Special Allowance), tax brackets, leave types, and shift schedules.",
    },
    {
      number: "02",
      title: "Biometric Hardware Integration",
      description:
        "We configure network listeners to automatically stream punch-in and punch-out events from your physical biometric machines.",
    },
    {
      number: "03",
      title: "Employee Data Import & Portal Verification",
      description:
        "We import all employee master profiles, bank details, PF numbers, and generate individual secure ESS login access.",
    },
    {
      number: "04",
      title: "Live Payroll Trial Run & Handover",
      description:
        "We execute a parallel dry run alongside your existing payroll to guarantee 100% numerical accuracy before go-live.",
    },
  ],
  faqs: [
    {
      question: "Can our existing biometric thumb/face machine connect to this system?",
      answer:
        "Yes! We support integration with industry-standard biometric machines (such as ZKTeco, eSSUE, Realtime, and Mantra). Attendance punches are pulled automatically into the cloud without manual pen-drive transfers.",
    },
    {
      question: "Are PF, ESI, and Professional Tax calculations automated?",
      answer:
        "Yes, our payroll formula engine automatically applies current Indian statutory guidelines for Provident Fund (PF), Employee State Insurance (ESI), Professional Tax according to your state, and TDS income tax deductions.",
    },
    {
      question: "How do employees receive their salary slips?",
      answer:
        "Once HR approves the monthly payroll with one click, password-protected PDF payslips can be automatically emailed to each employee, and they are also immediately available to download inside their mobile ESS portal.",
    },
    {
      question: "Can staff apply for leaves from their smartphones?",
      answer:
        "Yes, the Employee Self-Service (ESS) portal is fully mobile-optimized. Employees can check remaining leave quotas, apply for emergency or planned leave, and track approval status in real-time.",
    },
  ],
  whatsappMessage:
    "Hello TechSasi, I am interested in HRM & Payroll Software development. Please share a customized quote and system demo.",
};

export const HrmSoftwareService: React.FC = () => {
  return <ServicePageTemplate data={hrmSoftwareData} />;
};

export default HrmSoftwareService;
