import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { Smartphone, Tablet, Bell, WifiOff, Fingerprint, CloudLightning, ShieldCheck, Gauge } from "lucide-react";

const mobileAppData: ServicePageData = {
  serviceId: "mobile-apps",
  serviceNumber: "04",
  title: "Mobile Application Development",
  headline: "Cross-Platform Mobile Apps",
  badgeText: "iOS & Android Engineering",
  description:
    "Deliver seamless, native-feeling mobile experiences for iOS and Android built with modern frameworks. Single codebase efficiency with native device hardware performance.",
  proposalType: "mobile-app",
  iconType: "mobile-apps",
  iconPng: "/images/services/icons/mobile-app.png",
  previewImage: "/images/services/mobile-app-preview.png",
  timeline: "4–8 Weeks",
  stats: [
    { value: "60 FPS", label: "Smooth Hardware Acceleration" },
    { value: "iOS + Android", label: "Unified Cross-Platform Code" },
    { value: "Offline Sync", label: "SQLite Local Data Caching" },
    { value: "Full Store", label: "Google Play & App Store Launch" },
  ],
  capabilitiesTitle: "Mobile Engineering for Frictionless Daily Engagement",
  capabilitiesSubtitle:
    "We build Flutter and React Native mobile applications that feel fast, responsive, and natural in users' hands.",
  capabilities: [
    {
      title: "Cross-Platform Synergy",
      description: "One single clean codebase deployed simultaneously to Google Play Store and Apple App Store, cutting engineering costs in half.",
      icon: Smartphone,
      badge: "Flutter & React Native",
    },
    {
      title: "Native Device Hardware APIs",
      description: "Deep integration with native hardware: Camera, GPS Geolocation, Bluetooth, Push Sensors, File Storage, and Biometric auth.",
      icon: Fingerprint,
      badge: "Native APIs",
    },
    {
      title: "Real-Time Push Notification Engine",
      description: "Engage users with transactional alerts, promotional campaigns, and automated reminders via Firebase Cloud Messaging (FCM).",
      icon: Bell,
      badge: "Firebase FCM",
    },
    {
      title: "Offline-First Data Synchronization",
      description: "Users can create and edit data without network access; changes queue in local SQLite storage and sync seamlessly upon reconnection.",
      icon: WifiOff,
      badge: "Offline Ready",
    },
    {
      title: "Mobile Payment SDKs & In-App Purchases",
      description: "Seamless mobile checkout flows integrating Razorpay UPI SDKs, Google Play Billing, and Apple In-App Purchase flows.",
      icon: CloudLightning,
      badge: "In-App Payments",
    },
    {
      title: "App Store & Play Store Release Pipeline",
      description: "End-to-end guidance through developer account setup, privacy policy compliance, icon assets, test builds, and production approval.",
      icon: ShieldCheck,
      badge: "100% Approval",
    },
  ],
  deliverables: [
    "Cross-platform mobile application compiled for Android (.apk/.aab) and iOS (.ipa)",
    "Clean REST API backend integration with secure JWT token session storage",
    "Firebase push notification system for instant broadcast and user-specific alerts",
    "Local SQLite caching enabling continuous offline usability",
    "Full submission handling on Google Play Console and Apple Developer Account",
    "Complete source code repository ownership and production environment keys",
  ],
  techStack: ["Flutter", "React Native", "Firebase", "Node.js", "TypeScript", "SQLite", "FCM"],
  packagesTitle: "Mobile Application Development Packages",
  packages: [
    {
      id: "mvp-app",
      name: "Starter MVP Application",
      price: "₹24,999+",
      timeline: "3–4 Weeks",
      idealFor: "Startups, Concept Validation & Simple Utility Apps",
      description: "Focused cross-platform mobile app with core functional screens, user authentication, and backend API connection.",
      popular: false,
      features: [
        "Up to 6 custom mobile screens",
        "User registration with Phone/OTP or Email",
        "Backend REST API integration",
        "Firebase push notification setup",
        "Google Play Store release bundle",
      ],
    },
    {
      id: "business-app",
      name: "Complete Business Mobile Suite",
      price: "₹44,999+",
      timeline: "5–7 Weeks",
      idealFor: "Service Bookings, On-Demand Delivery & Member Communities",
      description: "Feature-rich mobile experience with live status tracking, mobile payment gateways, in-app messaging, and dual store release.",
      popular: true,
      features: [
        "Up to 14 interactive UI screens with smooth transitions",
        "Dual deployment: Google Play Store + Apple App Store",
        "Integrated mobile payment gateway (Razorpay / Stripe)",
        "Offline caching & local SQLite sync",
        "Admin web portal to manage app content & push notifications",
      ],
    },
    {
      id: "enterprise-app",
      name: "High-Concurrency Custom App",
      price: "₹79,999+",
      timeline: "7–10 Weeks",
      idealFor: "Fintech, Logistics Fleets, Health Portals & Social Platforms",
      description: "High-scale mobile software with real-time geolocation tracking, encrypted biometric auth, and high-frequency backend synchronization.",
      popular: false,
      features: [
        "Real-time GPS tracking & live location updates",
        "Biometric fingerprint / FaceID secure authentication",
        "Complex relational workflows & background sync tasks",
        "Automated CI/CD build pipelines for continuous releases",
        "60 Days priority app monitoring & bug-fix warranty",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "UI/UX Mobile Prototyping",
      description: "We map user journeys, bottom navigation bars, and mobile touch interactions for clean ergonomics.",
    },
    {
      number: "02",
      title: "API & Backend Alignment",
      description: "We create secure backend endpoints, token authenticators, and database schemas supporting mobile workloads.",
    },
    {
      number: "03",
      title: "Mobile App Coding & QA",
      description: "We code using Flutter/React Native, test on physical Android & iOS devices, and verify memory performance.",
    },
    {
      number: "04",
      title: "App Store Publishing",
      description: "We build signed release bundles, upload store screenshots, pass review guidelines, and launch to production.",
    },
  ],
  faqs: [
    {
      question: "Will the app work on both Android phones and iPhones?",
      answer: "Yes! Using modern cross-platform frameworks (Flutter or React Native), we write a single, unified codebase that compiles to native binary code for both Android and iOS devices.",
    },
    {
      question: "Do you help with publishing the app on Google Play and Apple App Store?",
      answer: "Yes, we handle the entire release process: generating cryptographic signing keys, setting up privacy disclosures, uploading assets, submitting review forms, and resolving any store feedback.",
    },
    {
      question: "Can the app send push notifications to users even when closed?",
      answer: "Yes. We configure Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs) so your app can deliver rich push notifications to locked devices at any time.",
    },
    {
      question: "Will the app work if the user loses internet connection?",
      answer: "Yes. We engineer offline caching using local on-device SQLite databases, so users can still browse cached data and queue actions that sync automatically once internet returns.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I want to develop a Cross-Platform Mobile App. Can we discuss scope?",
};

export const AppDevelopmentService: React.FC = () => {
  return <ServicePageTemplate data={mobileAppData} />;
};

export default AppDevelopmentService;
