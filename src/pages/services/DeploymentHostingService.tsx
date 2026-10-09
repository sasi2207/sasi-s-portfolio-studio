import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { Cloud, Server, ShieldCheck, Activity, Terminal, Lock, RefreshCw, Cpu } from "lucide-react";

const cloudDevopsData: ServicePageData = {
  serviceId: "cloud-devops",
  serviceNumber: "06",
  title: "Cloud Infrastructure & DevOps",
  headline: "Secure Cloud & DevOps",
  badgeText: "High-Availability Cloud Engineering",
  description:
    "Ensure 99.9% uptime, automated deployments, and scalable cloud architecture on AWS, GCP, or Azure. We migrate legacy servers to containerized, auto-healing cloud environments.",
  proposalType: "devops",
  iconType: "cloud-devops",
  iconPng: "/images/services/icons/deployment-hosting.png",
  previewImage: "/images/services/deployment-hosting-preview.png",
  timeline: "1–3 Weeks",
  stats: [
    { value: "99.9%", label: "Guaranteed Production Uptime SLA" },
    { value: "Zero Downtime", label: "Automated Blue-Green Deployments" },
    { value: "Automated CI/CD", label: "GitHub Actions Build Pipelines" },
    { value: "24/7", label: "Server Health Telemetry & Alerts" },
  ],
  capabilitiesTitle: "Resilient Infrastructure Engineered for Zero Downtime",
  capabilitiesSubtitle:
    "We architect, configure, and secure cloud server fleets so your web applications remain lightning fast and online 24/7/365.",
  capabilities: [
    {
      title: "Docker Containerization",
      description: "Package application dependencies into consistent Docker containers ensuring identical execution across staging and production.",
      icon: Terminal,
      badge: "Docker / Compose",
    },
    {
      title: "Automated GitHub Actions CI/CD",
      description: "Code pushes automatically trigger automated test suites, container builds, and zero-downtime rolling production deploys.",
      icon: RefreshCw,
      badge: "Zero-Downtime CI/CD",
    },
    {
      title: "Cloud Architecture (AWS / GCP / Azure)",
      description: "Virtual Private Clouds (VPC), EC2 / Compute instances, S3 object storage buckets, and Managed PostgreSQL configurations.",
      icon: Cloud,
      badge: "AWS & GCP Certified",
    },
    {
      title: "Cloudflare CDN & DDoS Protection",
      description: "Edge caching, DNS propagation, Web Application Firewall (WAF) rules, and high-capacity defense against malicious traffic.",
      icon: ShieldCheck,
      badge: "DDoS Mitigation",
    },
    {
      title: "SSL & Security Hardening",
      description: "Automated SSL certificate provisioning via Let's Encrypt / Cloudflare, SSH key authentication, UFW firewall locks, and fail2ban setup.",
      icon: Lock,
      badge: "Hardened Linux",
    },
    {
      title: "24/7 Telemetry & Health Monitoring",
      description: "CPU/RAM resource thresholds, server health checks, disk usage monitors, and automated Telegram / Email alert notifications.",
      icon: Activity,
      badge: "Real-Time Telemetry",
    },
  ],
  deliverables: [
    "Production cloud server provisioning on AWS, DigitalOcean, Azure, or Google Cloud",
    "Containerized Docker & Docker Compose production environment configuration",
    "Automated GitHub Actions continuous integration and continuous deployment pipeline",
    "Cloudflare DNS management, SSL encryption, and edge content caching",
    "Automated nightly encrypted database backup scripts with off-site cloud storage",
    "Complete infrastructure architecture documentation, credentials vault, and runbook",
  ],
  techStack: ["AWS", "Google Cloud", "Docker", "Linux Nginx", "Cloudflare", "GitHub Actions", "PostgreSQL"],
  packagesTitle: "Cloud Infrastructure & DevOps Packages",
  packages: [
    {
      id: "vps-setup",
      name: "Starter Cloud Server Setup",
      price: "₹6,999",
      timeline: "2–4 Days",
      idealFor: "Startups, Small Portals & High-Traffic Static Sites",
      description: "Configuration of a clean, hardened Linux VPS with Nginx, SSL, domain connection, and basic database hosting.",
      popular: false,
      features: [
        "Ubuntu/Debian Linux server setup & user permissions",
        "Nginx reverse proxy & Gzip/Brotli compression",
        "Free automated SSL certificate setup",
        "Domain DNS mapping via Cloudflare",
        "Automated daily database backup script",
      ],
    },
    {
      id: "devops-cicd",
      name: "Production DevOps & CI/CD",
      price: "₹14,999",
      timeline: "5–8 Days",
      idealFor: "Growing SaaS, Web Apps & E-Commerce Platforms",
      description: "Full containerized pipeline with automated GitHub Actions deployments, Docker Compose staging, and live monitoring.",
      popular: true,
      features: [
        "Docker multi-stage build containerization",
        "Automated GitHub Actions CI/CD deployment pipeline",
        "Zero-downtime application restart routines",
        "Cloudflare WAF defense & caching rules",
        "Automated server resource monitoring alerts",
      ],
    },
    {
      id: "enterprise-cloud",
      name: "High-Availability AWS Architecture",
      price: "₹29,999+",
      timeline: "2–3 Weeks",
      idealFor: "Enterprise Software, High-Concurrency APIs & FinTech",
      description: "Multi-server cloud topology with Application Load Balancer, managed database clusters (RDS), S3 asset storage, and auto-scaling.",
      popular: false,
      features: [
        "AWS VPC private networking & security groups",
        "Application Load Balancer (ALB) & auto-scaling groups",
        "Managed PostgreSQL RDS with automated failover",
        "S3 bucket asset hosting with CloudFront CDN distribution",
        "Disaster recovery drill & infrastructure-as-code runbook",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Traffic & Workload Assessment",
      description: "We review your compute requirements, expected user traffic peaks, database size, and budget to select the right cloud tiers.",
    },
    {
      number: "02",
      title: "Containerization & Security",
      description: "We build optimized Docker images, harden Linux access ports, configure firewalls, and set up cryptographic SSH keys.",
    },
    {
      number: "03",
      title: "CI/CD Automation",
      description: "We configure GitHub Actions so that committing code automatically builds, tests, and deploys without human intervention.",
    },
    {
      number: "04",
      title: "Testing & Monitoring Live Handover",
      description: "We simulate load, verify SSL grade, test automated backup recovery, and activate Telegram / Slack downtime monitors.",
    },
  ],
  faqs: [
    {
      question: "Which cloud provider should we choose: AWS, DigitalOcean, or Hetzner?",
      answer: "For early-stage startups and small businesses, DigitalOcean or Hetzner provides unmatched price-to-performance (₹800 to ₹3,000/mo). For enterprise systems requiring elastic auto-scaling and managed compliance, AWS or GCP is recommended. We help you choose the most cost-effective option.",
    },
    {
      question: "What is zero-downtime deployment?",
      answer: "With zero-downtime deployments, your website never shows a 'Down for Maintenance' screen when code updates are pushed. The server spins up the new version, verifies it is healthy, and seamlessly switches traffic over without interrupting active users.",
    },
    {
      question: "Do you manage existing servers that are running slow or crashing?",
      answer: "Yes! We perform server health audits, identify memory leaks or slow database queries, optimize Nginx/Node.js configurations, and migrate to clean containerized environments.",
    },
    {
      question: "Will I have full root administrative access to my servers?",
      answer: "Yes, you own 100% of your cloud accounts. All master credentials, SSH keys, and access passwords belong directly to you.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I need help with Cloud Infrastructure & DevOps deployment.",
};

export const DeploymentHostingService: React.FC = () => {
  return <ServicePageTemplate data={cloudDevopsData} />;
};

export default DeploymentHostingService;
