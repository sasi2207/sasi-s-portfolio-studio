import React from "react";
import { ServicePageTemplate, ServicePageData } from "@/components/services/ServicePageTemplate";
import { GraduationCap, Code2, Users, Briefcase, Award, Terminal, CheckCircle2, BookOpen } from "lucide-react";

const academyMentorshipData: ServicePageData = {
  serviceId: "academy",
  serviceNumber: "08",
  title: "TechSasi Developer Academy & Mentorship",
  headline: "TechSasi Academy & Mentorship",
  badgeText: "Hands-On Software Engineering Coaching",
  description:
    "Master in-demand programming skills through hands-on training, real-world projects, and expert 1-on-1 mentorship. No boring theoretical slides — students code directly on production codebases.",
  proposalType: "academy",
  iconType: "academy-mentorship",
  iconPng: "/images/services/icons/coaching.png",
  previewImage: "/images/services/coaching-preview.png",
  timeline: "8–16 Weeks",
  stats: [
    { value: "1-on-1", label: "Direct Mentor Code Reviews" },
    { value: "Real PRs", label: "Live GitHub Project Submissions" },
    { value: "100%", label: "Hands-On Practical Coding" },
    { value: "Salem", label: "In-Person & Online Flexibility" },
  ],
  capabilitiesTitle: "Production-Grade Engineering Curriculum",
  capabilitiesSubtitle:
    "Designed for college students, fresh graduates, and career switchers looking to build verified commercial portfolios that impress tech hiring managers.",
  capabilities: [
    {
      title: "Modern React & Frontend Engineering",
      description: "Hooks, state management, Tailwind CSS, TypeScript, component architecture, and responsive design patterns.",
      icon: Code2,
      badge: "React & TypeScript",
    },
    {
      title: "Node.js & Backend Architecture",
      description: "RESTful APIs, Express, PostgreSQL relational modeling, authentication middleware, and database indexing.",
      icon: Terminal,
      badge: "Node & PostgreSQL",
    },
    {
      title: "Real Client Production Projects",
      description: "Work on actual production codebases. Gain experience submitting GitHub pull requests and resolving senior code reviews.",
      icon: Briefcase,
      badge: "Production Code",
    },
    {
      title: "1-on-1 Doubt Clearance & Mentorship",
      description: "Direct personal mentorship with Sasi Kumar. Ask questions freely, debug complex roadblocks, and master clean code practices.",
      icon: Users,
      badge: "Personal Mentor",
    },
    {
      title: "Git, GitHub & Cloud DevOps",
      description: "Master branch workflows, Git rebasing, merge conflict resolution, Docker containerization, and live server deployments.",
      icon: BookOpen,
      badge: "CI/CD & DevOps",
    },
    {
      title: "Placement & Interview Preparation",
      description: "Resume crafting, portfolio website development, technical mock interviews, and direct placement guidance for top tech jobs.",
      icon: Award,
      badge: "Career Ready",
    },
  ],
  deliverables: [
    "Comprehensive curriculum in React, TypeScript, Node.js, and Full-Stack Architecture",
    "Verified portfolio with at least 3 live deployed full-stack web applications",
    "Active GitHub profile with real commit history, pull requests, and code reviews",
    "Hands-on practice deploying web apps to live staging and production cloud servers",
    "1-on-1 resume optimization, LinkedIn profile audit, and technical mock interviews",
    "Course completion certificate backed by TechSasi software development company",
  ],
  techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Java", "Python", "Git", "Docker"],
  packagesTitle: "Academy Training & Mentorship Programs",
  packages: [
    {
      id: "frontend-course",
      name: "Frontend React Mastery",
      price: "₹7,999",
      timeline: "6–8 Weeks",
      idealFor: "Beginners, College Students & UI Designers",
      description: "Master HTML5, CSS3, modern JavaScript (ES6+), React, and Tailwind CSS through 5 practical web projects.",
      popular: false,
      features: [
        "Deep dive into React components, hooks & props",
        "Tailwind CSS responsive design systems",
        "Working with REST APIs & asynchronous JavaScript",
        "Deployment to Vercel with custom domain setup",
        "Weekly 1-on-1 code review and doubt clearance",
      ],
    },
    {
      id: "fullstack-pro",
      name: "Full-Stack Web Engineering",
      price: "₹15,999",
      timeline: "12–14 Weeks",
      idealFor: "Career Switchers, Fresh Engineers & Aspiring Software Developers",
      description: "Complete full-stack coaching: React, TypeScript, Node.js, Express, and PostgreSQL with real production project work.",
      popular: true,
      features: [
        "Everything in Frontend React Mastery",
        "Node.js & Express REST API architecture",
        "PostgreSQL database modeling & migrations",
        "Role-based authentication (JWT) & security",
        "Live pull request submissions on client projects",
        "Resume crafting & technical mock interview sessions",
      ],
    },
    {
      id: "mentorship-elite",
      name: "1-on-1 Career Placement Accelerator",
      price: "₹24,999",
      timeline: "16 Weeks",
      idealFor: "Students Seeking Guaranteed Job-Ready Placement Confidence",
      description: "Intensive 1-on-1 coaching where you work side-by-side with senior developers, building complex SaaS apps from scratch.",
      popular: false,
      features: [
        "Unlimited personal 1-on-1 mentorship sessions",
        "Build a custom SaaS product with payments & auth",
        "Docker containerization & AWS deployment",
        "Direct referral & placement assistance network",
        "Lifetime access to TechSasi alumni engineering group",
      ],
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Foundations & Environment Setup",
      description: "We set up VS Code, Git, GitHub, Node.js, and establish clean professional coding habits on day one.",
    },
    {
      number: "02",
      title: "Interactive Project Sprints",
      description: "You build real apps module by module, understanding both the frontend rendering and backend databases.",
    },
    {
      number: "03",
      title: "Code Reviews & Refactoring",
      description: "Your mentor reviews your code line-by-line, teaching you how senior software engineers write scalable code.",
    },
    {
      number: "04",
      title: "Portfolio Launch & Interviews",
      description: "You deploy your live web projects, finalize your professional resume, and prepare for company technical interviews.",
    },
  ],
  faqs: [
    {
      question: "Do I need previous coding experience to join?",
      answer: "No! We start from fundamental principles and build step-by-step. All you need is a laptop and dedication to practice.",
    },
    {
      question: "Is this training available in Salem or online?",
      answer: "Both! We provide direct in-person coaching in Salem, Tamil Nadu as well as live interactive 1-on-1 sessions online for remote students.",
    },
    {
      question: "How is TechSasi different from ordinary computer coaching centers?",
      answer: "Ordinary training institutes teach out-dated textbook theory on whiteboards. At TechSasi, you train inside an active software development company, working with the exact tools and technologies modern tech firms hire for.",
    },
    {
      question: "Will I receive a course completion certificate?",
      answer: "Yes, you receive an industry-recognized certificate from TechSasi highlighting the verified technical competencies and live projects you engineered.",
    },
  ],
  whatsappMessage: "Hi TechSasi, I am interested in the Developer Academy & Mentorship program.",
};

export const ComputerCoachingServices: React.FC = () => {
  return <ServicePageTemplate data={academyMentorshipData} />;
};

export default ComputerCoachingServices;
