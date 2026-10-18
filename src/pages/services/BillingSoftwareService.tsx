import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import {
  Receipt,
  ScanBarcode,
  Printer,
  CreditCard,
  QrCode,
  Zap,
  Boxes,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";

const billingSoftwareData: ServicePageData = {
  serviceId: "billing-software",
  serviceNumber: "08",
  title: "GST Billing & POS Software",
  headline: "Fast GST Billing & Retail POS Software",
  badgeText: "Sub-Second Checkout, Barcode Printing & Real-Time Stock",
  description:
    "High-velocity billing and Point of Sale (POS) software built for supermarkets, retail boutiques, hardware shops, distribution counters, and multi-store chains. Engineered for lightning-fast keyboard-first billing, 2-inch & 3-inch thermal printing, dynamic UPI QR checkout, instant GST returns reporting, and real-time inventory deduction.",
  proposalType: "billing-software",
  iconType: "billing",
  iconPng: "/images/services/icons/ecommerce.png",
  previewImage: "/images/services/ecommerce-preview.png",
  previewImageAlt: "TechSasi GST Billing & Retail POS Software Terminal",
  timeline: "2–4 Weeks",
  stats: [
    { value: "<2 sec", label: "Average Cashier Checkout Speed" },
    { value: "100%", label: "GST Compliant Invoicing & QR" },
    { value: "Offline-First", label: "Zero Disruption During Internet Outages" },
    { value: "Multi-Counter", label: "Unlimited Cash Registers & Shifts" },
  ],
  capabilitiesTitle: "Retail & Wholesale Billing Architecture Engineered for Maximum Velocity",
  capabilitiesSubtitle:
    "Never keep customers waiting in queue. Built with instant hotkey shortcuts, barcode scanner automation, and instant thermal receipt dispatch.",
  capabilities: [
    {
      title: "Sub-Second Keyboard & Barcode Billing",
      description:
        "Fastest checkout experience in the industry. Full keyboard navigation shortcuts, instant laser barcode scanner detection, item weight scale sync, and quick price overrides.",
      icon: ScanBarcode,
      badge: "Ultra-Fast",
    },
    {
      title: "Direct UPI Dynamic QR Code & Card Checkout",
      description:
        "Displays dynamic payment QR codes with exact bill amount directly on customer screens for instant PhonePe/GPay payments, minimizing cashier cash-handling errors.",
      icon: QrCode,
      badge: "Zero Fraud",
    },
    {
      title: "Thermal & Laser Multi-Format Printing",
      description:
        "Seamless printing to 2-inch (58mm) and 3-inch (80mm) ESC/POS thermal printers, full A4 / A5 laser GST tax invoices, and custom barcode sticker label printers.",
      icon: Printer,
      badge: "Hardware Ready",
    },
    {
      title: "Live Inventory & Automatic Re-Order Alerts",
      description:
        "Stock balances deduct automatically upon bill print. Get notified of fast-moving products, out-of-stock items, supplier purchase prices, and batch expiration dates.",
      icon: Boxes,
      badge: "Auto-Deduct",
    },
    {
      title: "Multi-Counter Cashier Register & Shift Settlement",
      description:
        "Open/close counter registers with opening float balances, cash drop verification, card/UPI ledger separation, and cashier discrepancy prevention reports.",
      icon: CreditCard,
      badge: "Cash Control",
    },
    {
      title: "GST R1, R3B & Daily Sales Profit Analytics",
      description:
        "Generate one-click GST tax summaries, HSN code sales breakdown, daily gross profit margins, top-selling customer lists, and export files ready for your accountant.",
      icon: TrendingUp,
      badge: "CA-Ready",
    },
  ],
  deliverables: [
    "High-speed Point of Sale (POS) desktop/web counter application with offline capability",
    "Complete product inventory master with barcode generation, batch numbers, and price tiers",
    "Driver configuration for thermal printers, barcode scanners, cash drawers, and customer displays",
    "Customer WhatsApp bill sharing integration for digital paperless receipts",
    "Daily automated cloud backup of transaction ledgers and customer debt registers",
    "Complete software handover, staff training, and 12-month technical SLA warranty",
  ],
  techStack: ["React", "TypeScript", "Node.js / Electron", "PostgreSQL / SQLite", "Tailwind CSS", "ESC/POS"],
  packagesTitle: "Transparent Billing Software Packages",
  packages: [
    {
      id: "billing-starter",
      name: "Retail POS Starter",
      price: "₹14,999",
      timeline: "1–2 Weeks",
      idealFor: "Single Retail Shops, Boutiques & Small Supermarkets",
      description:
        "Complete standalone billing and stock software with barcode scanning and thermal receipt printing.",
      popular: false,
      features: [
        "1 Billing Counter Terminal",
        "Barcode scanning & keyboard shortcuts",
        "Thermal printer support (58mm & 80mm)",
        "Inventory stock tracking & low-stock alerts",
        "GST invoice templates & daily sales summary",
      ],
    },
    {
      id: "billing-pro",
      name: "Multi-Counter Business Suite",
      price: "₹29,999",
      timeline: "2–3 Weeks",
      idealFor: "Supermarkets, Departmental Stores, Restaurants & Wholesale Outlets",
      description:
        "Multi-counter network setup with live central warehouse sync, customer credit accounts, and dynamic UPI QR screens.",
      popular: true,
      features: [
        "Up to 4 Billing Counters + Central Admin Console",
        "Dynamic UPI QR display for PhonePe, GPay & Paytm",
        "Customer debt ledger (Khaata) & automated SMS/WhatsApp alerts",
        "Barcode label sticker design & printing module",
        "GST R1/R3B filing reports & accountant export",
        "Offline-first sync: works even if internet drops",
      ],
    },
    {
      id: "billing-enterprise",
      name: "Chain Store Multi-Branch POS",
      price: "₹59,999+",
      timeline: "3–5 Weeks",
      idealFor: "Multi-Location Retail Chains, Franchises & Large Wholesale Hubs",
      description:
        "Enterprise cloud network synchronizing pricing, promotions, inventory, and sales telemetry across multiple retail branch outlets.",
      popular: false,
      features: [
        "Unlimited Branch Outlets & Counters",
        "Centralized product price & discount promotion management",
        "Inter-branch stock transfer & transit tracking",
        "Customer loyalty points & gift coupon engine",
        "Executive real-time mobile app for branch owners",
        "Dedicated cloud database hosting & 24/7 priority support",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Hardware & Item Catalog Discovery",
      description:
        "We catalog your existing printers, scanners, and import your product items list with prices and HSN codes.",
    },
    {
      number: "02",
      title: "Counter Setup & Template Customization",
      description:
        "We brand your thermal and A4 invoice formats with your logo, GSTIN, bank details, and custom promotional footers.",
    },
    {
      number: "03",
      title: "Barcode & Hardware Device Testing",
      description:
        "We test hardware triggers: thermal printer speeds, barcode scanners, weight scales, and dynamic QR display screens.",
    },
    {
      number: "04",
      title: "Cashier Training & Live Launch",
      description:
        "We train your cashiers on lightning-fast keyboard shortcuts, return handling, register closing, and go live.",
    },
  ],
  faqs: [
    {
      question: "Will the software work if our store internet connection goes down?",
      answer:
        "Yes! Our system is architected offline-first. Cashiers can continue scanning items and printing bills without interruption. As soon as the internet reconnects, all sales and inventory changes sync automatically to the cloud.",
    },
    {
      question: "Does it support my existing thermal printer and barcode scanner?",
      answer:
        "Yes. We support all industry-standard USB and LAN thermal printers (including TVS, Epson, Posiflex, NGX, Retsol) and standard plug-and-play USB/wireless barcode scanners.",
    },
    {
      question: "Can we send bills directly to customer WhatsApp instead of printing paper?",
      answer:
        "Yes! Cashiers can simply enter the customer's mobile number, and a professional digital PDF bill with your store branding is instantly dispatched to their WhatsApp.",
    },
    {
      question: "Can we manage customer credit balances (Khaata)?",
      answer:
        "Yes, our built-in customer ledger module tracks outstanding balances, credit limits, and payment receipts, with automatic WhatsApp reminder links for easy collection.",
    },
  ],
  whatsappMessage:
    "Hello TechSasi, I am interested in GST Billing & Retail POS Software development. Please share a customized quote and system demo.",
};

export const BillingSoftwareService: React.FC = () => {
  return <ServicePageTemplate data={billingSoftwareData} />;
};

export default BillingSoftwareService;
