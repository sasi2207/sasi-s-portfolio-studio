import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { Wrench, ShieldAlert, RefreshCw, Activity, Lock, Database, Clock, Zap } from "lucide-react";

const maintenanceData: ServicePageData = {
  serviceId: "maintenance-support",
  serviceNumber: "09",
  title: "Website Maintenance & Support",
  headline: "Continuous Maintenance & Dedicated Support",
  badgeText: "24/7 Site Reliability & Protection",
  description:
    "Keep your web applications secure, updated, and running smoothly with proactive technical support. We handle bug fixes, security patches, regular backups, and performance surveillance.",
  proposalType: "devops",
  iconType: "cloud-devops",
  iconPng: "/images/services/icons/deployment-hosting.png",
  previewImage: "/images/services/deployment-hosting-preview.png",
  timeline: "Monthly Retainer",
  stats: [
    { value: "<2 Hours", label: "Critical Incident Response Time" },
    { value: "Daily", label: "Automated Offsite Cloud Backups" },
    { value: "100%", label: "Uptime & SSL Renewal Surveillance" },
    { value: "Zero Stress", label: "Dedicated On-Call Technical Partner" },
  ],
  capabilitiesTitle: "Proactive Protection & Operational Continuity",
  capabilitiesSubtitle:
    "Don't wait for your site to crash or get hacked. Our proactive maintenance plans keep your systems running at peak speed.",
  capabilities: [
    {
      title: "Immediate Bug Fixes & Code Patches",
      description: "Quick turnaround resolution for UI glitches, broken forms, broken links, database errors, and browser compatibility bugs.",
      icon: Wrench,
      badge: "Fast Patching",
    },
    {
      title: "Security Auditing & Vulnerability Scans",
      description: "Proactive malware scanning, outdated npm package updates, security firewall tuning, and brute-force intrusion defense.",
      icon: ShieldAlert,
      badge: "Security Hardened",
    },
    {
      title: "Automated Daily Database Backups",
      description: "Encrypted daily snapshots stored in isolated off-site cloud buckets with quick 1-click restore capabilities.",
      icon: Database,
      badge: "Encrypted Snapshots",
    },
    {
      title: "Speed Optimization & Core Web Vitals",
      description: "Continuous database table vacuuming, cache tuning, image compression, and CDN purging to maintain top Google speeds.",
      icon: Zap,
      badge: "Peak Performance",
    },
    {
      title: "SSL Certificate & Domain Renewals",
      description: "Automated surveillance of your SSL expiration dates, DNS records, and domain renewals so your site never goes offline.",
      icon: Lock,
      badge: "Zero Downtime",
    },
    {
      title: "24/7 Server Health & Uptime Probing",
      description: "Continuous 60-second health prober. If your server ever becomes unreachable, our engineers receive instant alert dispatches.",
      icon: Activity,
      badge: "24/7 Surveillance",
    },
  ],
  deliverables: [
    "Monthly technical health check, security scan, and performance audit report",
    "Priority bug fix hours allocated every month for design and content adjustments",
    "Automated daily database backups with verified disaster recovery restores",
    "24/7 automated uptime and SSL certificate status monitoring",
    "Emergency technical on-call assistance for critical server or payment outages",
    "Direct WhatsApp and phone access to your dedicated lead engineer",
  ],
  techStack: ["Linux", "Nginx", "Docker", "Node.js", "PostgreSQL", "Cloudflare", "AWS S3"],
  packagesTitle: "Monthly Website Maintenance Plans",
  packages: [
    {
      id: "essential-care",
      name: "Essential Site Care",
      price: "₹2,999 / mo",
      timeline: "Monthly Plan",
      idealFor: "Portfolios, Small Business Websites & Landing Pages",
      description: "Proactive security, uptime monitoring, daily backups, and up to 3 hours of monthly content updates or bug fixes.",
      popular: false,
      features: [
        "Daily automated database cloud backups",
        "24/7 uptime & SSL expiration monitoring",
        "Up to 3 hours of monthly developer bug fixes / tweaks",
        "Monthly security scan & software package updates",
        "Priority email & WhatsApp support response",
      ],
    },
    {
      id: "growth-care",
      name: "Growth & Commerce Support",
      price: "₹6,499 / mo",
      timeline: "Monthly Plan",
      idealFor: "E-Commerce Stores, Active Web Portals & Booking Engines",
      description: "Comprehensive care for revenue-critical web applications with fast 2-hour response times and 8 hours of monthly engineering.",
      popular: true,
      features: [
        "Daily automated database & file system backups",
        "Payment gateway webhook & checkout flow testing",
        "Up to 8 hours of monthly feature additions / bug fixes",
        "Speed optimization & Core Web Vitals tuning",
        "2-Hour emergency SLA response window",
      ],
    },
    {
      id: "enterprise-retainer",
      name: "Dedicated Engineering Retainer",
      price: "₹14,999 / mo",
      timeline: "Monthly Plan",
      idealFor: "Custom ERP Systems, High-Traffic Platforms & Corporate Fleets",
      description: "Dedicated developer on retainer for continuous feature sprints, server cluster optimization, and 24/7 emergency priority.",
      popular: false,
      features: [
        "Hourly database backups with point-in-time recovery",
        "Up to 20 hours of monthly development & feature builds",
        "Server load monitoring & cloud auto-scaling management",
        "Direct phone line to senior technical architect",
        "Comprehensive monthly ROI, security & traffic audit report",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Initial System Audit",
      description: "We audit your existing code, server setup, database health, and security vulnerabilities to establish a baseline.",
    },
    {
      number: "02",
      title: "Automated Defense Setup",
      description: "We configure automated daily off-site backups, SSL renewal monitors, and 24/7 health probers.",
    },
    {
      number: "03",
      title: "Monthly Maintenance Sprints",
      description: "Each month, we update dependencies, clean temporary logs, optimize database tables, and implement your requested changes.",
    },
    {
      number: "04",
      title: "Emergency On-Call Dispatch",
      description: "If an unexpected issue or third-party outage occurs, our engineers jump in immediately to restore full functionality.",
    },
  ],
  faqs: [
    {
      question: "Can I use my monthly hours for new feature additions?",
      answer: "Yes! Your allocated monthly developer hours can be used for anything you need: adding new pages, updating text/photos, integrating new payment options, or fixing bugs.",
    },
    {
      question: "What happens if our website goes down outside business hours?",
      answer: "Our automated monitoring checks your site every 60 seconds. In the rare event of downtime, our technical alerts trigger immediately, and our engineers investigate and resolve the issue.",
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer: "No, our maintenance retainers are billed month-to-month with no lock-in. You can pause or cancel at any time with 15 days notice.",
    },
    {
      question: "Can you maintain a website that wasn't originally built by TechSasi?",
      answer: "Yes! We frequently take over, audit, and maintain websites built by other agencies or freelance developers after an initial codebase health check.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I am interested in a Website Maintenance & Support plan for my business.",
};

export const MaintenanceSupport: React.FC = () => {
  return <ServicePageTemplate data={maintenanceData} />;
};

export default MaintenanceSupport;
