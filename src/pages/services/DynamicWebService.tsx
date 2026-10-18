import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { Database, Server, Lock, Layers, Cpu, Code2, Users, FileText } from "lucide-react";

const dynamicWebData: ServicePageData = {
  serviceId: "dynamic-web",
  serviceNumber: "02",
  title: "Dynamic Web Development",
  headline: "Scalable Dynamic Web Apps",
  badgeText: "Database-Driven Portals & SaaS",
  description:
    "Feature-rich, database-driven web applications customized with robust backend logic and interactive user interfaces. Designed for businesses that need authentication, admin dashboards, and custom operational workflows.",
  proposalType: "dynamic-web",
  iconType: "dynamic-web",
  iconPng: "/images/services/icons/dynamic-web.png",
  previewImage: "/images/services/dynamic-web-preview.png",
  timeline: "3–6 Weeks",
  stats: [
    { value: "100%", label: "Role-Based Access Security" },
    { value: "<200ms", label: "Optimized Database Queries" },
    { value: "REST/GraphQL", label: "Decoupled Modern APIs" },
    { value: "Automated", label: "PDF Reports & Excel Exports" },
  ],
  capabilitiesTitle: "Full-Stack Web Architecture for Real Business Logic",
  capabilitiesSubtitle:
    "We build custom customer portals, internal business management dashboards, and SaaS platforms with decoupled React frontends and Node.js/PostgreSQL backends.",
  capabilities: [
    {
      title: "Interactive Client & Staff Portals",
      description: "Dedicated account zones for customers, vendors, and staff with secure JWT/OAuth authentication and real-time status dashboards.",
      icon: Users,
      badge: "Multi-Role RBAC",
    },
    {
      title: "Executive Admin Dashboard & CMS",
      description: "Comprehensive CRUD interfaces allowing your managers to create, edit, filter, search, and manage records with zero technical skills.",
      icon: Layers,
      badge: "Real-Time CRUD",
    },
    {
      title: "Relational Database Engineering",
      description: "Optimized PostgreSQL schemas, indexing, foreign keys, and connection pooling engineered to handle concurrent transactions without latency.",
      icon: Database,
      badge: "PostgreSQL & Prisma",
    },
    {
      title: "Secure RESTful & Webhook APIs",
      description: "Decoupled backend API endpoints with rate-limiting, CORS configuration, schema validation, and automated third-party webhook receivers.",
      icon: Server,
      badge: "REST / Webhooks",
    },
    {
      title: "Automated Report & Invoice Generation",
      description: "Instant PDF and spreadsheet generation for bills, monthly client statements, employee attendance, and financial balance sheets.",
      icon: FileText,
      badge: "PDF & Excel Sync",
    },
    {
      title: "Enterprise Security & Audit Trails",
      description: "Encrypted password hashing (bcrypt), token rotation, session invalidation, and granular activity logging for full compliance.",
      icon: Lock,
      badge: "End-to-End Guarded",
    },
  ],
  deliverables: [
    "Role-based authentication system (Admin, Manager, Customer, Staff)",
    "Custom administrative control panel with dynamic search, filter & pagination",
    "PostgreSQL relational database schema design, migrations & backups",
    "Secure RESTful backend API service built with Node.js & Express",
    "Automated PDF invoice generation and Excel report downloads",
    "Turnkey cloud deployment on AWS / DigitalOcean with SSL & monitoring",
  ],
  techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Docker", "JWT"],
  packagesTitle: "Dynamic Web Application Packages",
  packages: [
    {
      id: "starter-app",
      name: "Starter Dynamic Portal",
      price: "₹18,000+",
      timeline: "2–3 Weeks",
      idealFor: "Service Portals, Booking Engines & Member Directories",
      description: "Lightweight dynamic web application with user authentication, custom database records, and responsive client dashboard.",
      popular: false,
      features: [
        "User registration, login & password recovery",
        "Client dashboard with live record status",
        "PostgreSQL database setup & schema models",
        "Admin control panel for managing users & requests",
        "Direct email alerts upon new submissions",
      ],
    },
    {
      id: "pro-app",
      name: "Full Business Application",
      price: "₹28,000+",
      timeline: "3–5 Weeks",
      idealFor: "SaaS Startups, B2B Operations & Multi-User Portals",
      description: "Comprehensive multi-role application with granular permissions, automated reports, payment gateway hooks, and executive analytics.",
      popular: true,
      features: [
        "Multi-role access hierarchy (Admin, Staff, Customer)",
        "Advanced CRUD management with multi-criteria filtering",
        "Razorpay / Stripe payment gateway integration",
        "Automated PDF invoice & Excel statement exports",
        "Docker container setup & automated cloud backups",
      ],
    },
    {
      id: "enterprise-app",
      name: "Custom Enterprise Platform",
      price: "₹50,000+",
      timeline: "5–8 Weeks",
      idealFor: "High-Volume Platforms, Multi-Branch Operations & Custom SaaS",
      description: "High-scale decoupled web system with real-time websocket updates, complex relational workflows, and dedicated microservice architecture.",
      popular: false,
      features: [
        "Custom workflow state machines & automated approvals",
        "Real-time notifications & webhook data synchronization",
        "Load-balanced cloud server infrastructure with 99.9% uptime",
        "Extensive API documentation for internal & 3P developers",
        "60 Days dedicated technical support & maintenance",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Data Modeling & Architecture",
      description: "We map out database entities, user roles, permission matrices, and system workflows before writing code.",
    },
    {
      number: "02",
      title: "Backend & API Engineering",
      description: "We build secure Node.js REST APIs, database migrations, and authentication middleware.",
    },
    {
      number: "03",
      title: "Frontend UI/UX Development",
      description: "We craft interactive React dashboards with optimistic updates, responsive data tables, and modal forms.",
    },
    {
      number: "04",
      title: "Security Testing & Deployment",
      description: "We perform penetration and stress tests, configure production SSL, and launch on dedicated cloud containers.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between a static site and a dynamic web app?",
      answer: "A static site displays fixed content (like a brochure or portfolio). A dynamic web application has a real-time database, allows user accounts, processes inputs, generates personalized dashboards, and performs custom business calculations on the server.",
    },
    {
      question: "Can different users see different data (Role-Based Access)?",
      answer: "Yes. We implement strict Role-Based Access Control (RBAC). For instance, clients only see their own orders, employees see assigned tasks, and super-admins have full control over system settings and revenue analytics.",
    },
    {
      question: "How do we backup the database so data is never lost?",
      answer: "We configure automated daily encrypted database snapshots to off-site cloud storage (such as AWS S3), along with point-in-time recovery capabilities.",
    },
    {
      question: "Will the web app work seamlessly on mobile phones?",
      answer: "Yes. All web applications are engineered with responsive fluid layouts, collapsible mobile navigation drawers, and touch-optimized data tables.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I need a Scalable Dynamic Web Application. Let's discuss requirements.",
};

export const DynamicWebServices: React.FC = () => {
  return <ServicePageTemplate data={dynamicWebData} />;
};

export default DynamicWebServices;
