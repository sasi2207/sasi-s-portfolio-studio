import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  GraduationCap, Users, Video, Code2, GitBranch, Rocket, Target, FileText,
  MessageCircle, ClipboardCheck, Briefcase, Mic, Layers, Clock, Check, X,
  ChevronDown, ArrowRight, ShieldCheck, PenTool, Gauge, Cpu, Bell, Cloud,
  Database, Smartphone, Search, BookOpen, Award, LifeBuoy, Eye, Workflow,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi Academy, I am interested in the mentorship program. Can we discuss the track, schedule and fees?";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const PROPOSAL_TYPE = "academy-mentorship";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText = "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Users, text: "1-on-1 guidance from working engineers" },
  { icon: Code2, text: "Learn by building real projects" },
  { icon: ShieldCheck, text: "Honest feedback, no empty promises" },
];

const benefits = [
  { icon: Users, title: "A Mentor, Not Just A Video", desc: "A working engineer reviews your code, answers your doubts and tells you exactly what to learn next." },
  { icon: Code2, title: "Real Projects, Real Code", desc: "You build projects that look like actual work, with Git history and a live demo you can show an interviewer." },
  { icon: ClipboardCheck, title: "Weekly Reviews", desc: "Every week you submit work and get written feedback, so mistakes are fixed early instead of repeated for months." },
  { icon: FileText, title: "Resume & Portfolio Help", desc: "We help you shape your resume, GitHub and LinkedIn so they show your skills clearly." },
  { icon: Mic, title: "Mock Interviews", desc: "Practice technical and HR rounds with feedback, so the first real interview is not your first attempt." },
  { icon: Target, title: "A Plan Built For You", desc: "Your starting level, time and goal decide your roadmap, whether you are a student, a fresher or switching careers." },
];

const solutionSets = [
  {
    id: "web",
    label: "Web & App Development",
    full: "Full-Stack Web Development Track",
    summary: "From HTML to a deployed full-stack product, with a mentor reviewing every step.",
    solutions: [
      { icon: Code2, title: "HTML, CSS & JavaScript", desc: "Strong basics: layouts, responsive design, DOM and modern JavaScript that you can explain in an interview." },
      { icon: Layers, title: "React & TypeScript", desc: "Components, state, routing and API calls, building the same kind of UI used in real products." },
      { icon: Database, title: "Node.js & Databases", desc: "REST APIs, authentication and PostgreSQL or MongoDB, connected to your front end." },
      { icon: GitBranch, title: "Git & Teamwork", desc: "Branches, pull requests and code review, the way real teams ship code." },
      { icon: Rocket, title: "Deploy Your Project", desc: "Put your app online with a domain, so anyone can open and try it." },
      { icon: Smartphone, title: "Mobile App Basics", desc: "Optional: build a React Native app that uses the same backend you created." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    full: "Cloud & DevOps Engineering Track",
    summary: "Learn how software is deployed, scaled and kept running, using hands-on labs.",
    solutions: [
      { icon: Cloud, title: "AWS Fundamentals", desc: "Servers, storage, networking and permissions, practised in your own account with budget alerts." },
      { icon: Workflow, title: "CI/CD Pipelines", desc: "Automate build, test and deploy with GitHub Actions on a project you own." },
      { icon: Code2, title: "Docker & Containers", desc: "Package an application so it runs the same on your laptop and in the cloud." },
      { icon: Layers, title: "Terraform & Linux", desc: "Write infrastructure as code and work confidently in the Linux command line." },
      { icon: Eye, title: "Monitoring & Logs", desc: "Set up dashboards and alerts, then find and fix a failure you caused on purpose." },
      { icon: ShieldCheck, title: "Cloud Security Basics", desc: "Least-privilege access, secrets handling and safe defaults, explained with real examples." },
    ],
  },
  {
    id: "career",
    label: "Career & Freelance",
    full: "Career, Interview & Freelance Support",
    summary: "Turn your skills into a job offer or your first paying client.",
    solutions: [
      { icon: FileText, title: "Resume & GitHub Review", desc: "Line-by-line feedback so your projects and skills are easy for a recruiter to see." },
      { icon: Mic, title: "Mock Technical Interviews", desc: "Live practice on coding questions, project discussion and system basics, with written feedback." },
      { icon: Briefcase, title: "Job Search Strategy", desc: "Where to apply, how to write to recruiters and how to follow up without being pushy." },
      { icon: Search, title: "Freelance Start Guide", desc: "Find your first clients, set a fair price and write a simple proposal." },
      { icon: BookOpen, title: "Study Habits & Doubts", desc: "A weekly rhythm that fits your college or job, plus a place to ask doubts without feeling judged." },
      { icon: Award, title: "Project Showcase", desc: "Present your best project to the TechSasi team and get honest, detailed feedback." },
    ],
  },
];

const flow = [
  { icon: BookOpen, title: "Learn", desc: "Short lessons and resources, matched to your level." },
  { icon: Code2, title: "Build", desc: "Apply it straight away in a real project." },
  { icon: ClipboardCheck, title: "Review", desc: "Your mentor checks your code and gives feedback." },
  { icon: Briefcase, title: "Show", desc: "Publish your work and prepare for interviews or clients." },
];

const techGroups = [
  { label: "Frontend", icon: Code2, items: ["HTML / CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"] },
  { label: "Backend & Data", icon: Database, items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
  { label: "Cloud & DevOps", icon: Cloud, items: ["AWS", "Docker", "GitHub Actions", "Terraform", "Linux"] },
  { label: "Career Tools", icon: Briefcase, items: ["Git & GitHub", "LinkedIn", "Notion", "Google Meet", "VS Code"] },
];

const goodFor = [
  "Students and freshers who feel lost about what to learn first",
  "Self-learners who finish tutorials but cannot build a project alone",
  "Working professionals switching into software or cloud roles",
  "Anyone who wants regular feedback from an engineer, not just videos",
];

const notIdeal = [
  "Someone looking for a certificate only, without doing the practice",
  "Anyone expecting a guaranteed job in a fixed number of days",
  "A learner who cannot give at least 6 to 8 hours a week",
];

const packages = [
  {
    id: "guided", name: "Guided Start", price: "₹4,999", time: "per month",
    forWho: "Beginners who need direction and doubt support", popular: false,
    features: [
      "Personal roadmap based on your level",
      "2 group mentor sessions every month",
      "Doubt support on WhatsApp on weekdays",
      "Weekly assignment with written feedback",
      "Access to project templates and resources",
    ],
  },
  {
    id: "mentor-pro", name: "1-on-1 Mentorship", price: "₹9,999", time: "per month",
    forWho: "Serious learners building a portfolio", popular: true,
    features: [
      "Everything in Guided Start",
      "4 one-on-one sessions every month",
      "Code review on every project you build",
      "2 portfolio projects with live deployment",
      "Resume, GitHub and LinkedIn review",
    ],
  },
  {
    id: "career-accelerator", name: "Career Accelerator", price: "₹24,999", time: "3 months",
    forWho: "Job seekers and career switchers", popular: false,
    features: [
      "Everything in 1-on-1 Mentorship",
      "Industry-style capstone project with a mentor",
      "4 mock technical and HR interviews",
      "Job search plan and referral-style outreach tips",
      "Project showcase to the TechSasi engineering team",
    ],
  },
];

const steps = [
  { icon: Users, title: "Free Discovery Call", desc: "We learn your level, goal and weekly time, and tell you honestly whether mentorship is right for you." },
  { icon: PenTool, title: "Get Your Roadmap", desc: "You receive a week-by-week plan with projects, resources and clear milestones." },
  { icon: Gauge, title: "Build With Feedback", desc: "You learn, build and submit work every week. Your mentor reviews it and helps you improve." },
  { icon: Rocket, title: "Showcase & Apply", desc: "You finish with a live portfolio, a better resume and practice for real interviews or clients." },
];

const included = [
  "Free 20-minute discovery call before you pay",
  "A personal roadmap that you can keep",
  "Written feedback on every assignment",
  "Private community for doubts and peer support",
  "Recordings of all group sessions",
  "Switch your plan or pause any month",
];

const faqs = [
  { q: "I am a complete beginner. Can I join?", a: "Yes. We start from your level, whether that is writing your first HTML page or building your first API. The Guided Start plan is designed for beginners who need structure and someone to ask." },
  { q: "Will you guarantee me a job?", a: "No, and be careful of anyone who does. We guarantee the mentoring: regular feedback, real projects, resume help and mock interviews. Your effort and the market decide the outcome, and we help you give yourself the best chance." },
  { q: "How much time do I need every week?", a: "Plan for at least 6 to 8 hours a week for steady progress. Sessions are scheduled around your college or job, with evening and weekend slots available." },
  { q: "Are the classes live or recorded?", a: "Mentor sessions are live on Google Meet, and group sessions are recorded for you to rewatch. Assignments and feedback happen on your own time during the week." },
  { q: "Can working professionals join?", a: "Yes. Many learners are working professionals moving into software or cloud roles. We build a plan that fits an evening and weekend schedule, so you do not need to leave your job." },
  { q: "What if the mentorship is not right for me?", a: "Start with the free discovery call. If you join and it does not suit you, you can pause or stop after any month. There is no long contract." },
];

const sampleActivity = [
  { label: "Portfolio project v1 submitted", tag: "Submitted", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Code review from mentor received", tag: "Feedback", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  { label: "API assignment passed review", tag: "Passed", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Mock interview booked for Saturday", tag: "Booked", tone: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const TechSasiAcademyMentorship: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [setId, setSetId] = useState<string>(solutionSets[0].id);
  const activeSet = solutionSets.find((s) => s.id === setId) ?? solutionSets[0];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <Layout>
      <main className="relative bg-white text-slate-900 pb-24 lg:pb-0">

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#0057ff]/15 blur-[140px] sm:w-[900px]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <GraduationCap size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Academy • Mentorship Program</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                Learn Tech With A Mentor Who{" "}
                <span className={gradText}>Reviews Your Real Work.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Work with TechSasi engineers on a personal roadmap, build projects you can show, and get honest feedback every week, so you move from watching tutorials to building real software.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Book free discovery call
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00f0ff]/60 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-all hover:border-[#0057ff] hover:text-[#0057ff] shadow-xs"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-3">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${gradBg}`}>
                      <Icon size={14} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: mentorship console */}
            <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="150">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div aria-hidden="true" className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#00f0ff]/30 via-[#0057ff]/20 to-transparent blur-3xl pointer-events-none" />

                <div className="relative rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 text-white shadow-[0_25px_70px_rgba(0,87,255,0.25)] backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-cyan-400">
                      <Cpu size={12} />
                      <span>Mentorship Dashboard</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <Video size={14} />
                        <span>Sessions done</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">8</p>
                      <p className="text-[10px] text-slate-400">Next: Saturday, 11 AM</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Rocket size={14} />
                        <span>Projects shipped</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">2</p>
                      <p className="text-[10px] text-slate-400">Both live online</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Learning activity</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Sample data
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-[11px]">
                      {sampleActivity.map((a) => (
                        <li key={a.label} className="flex items-center justify-between gap-3">
                          <span className="text-slate-300">{a.label}</span>
                          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] ${a.tone}`}>{a.tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>Mentor Reviewed</span>
                    </span>
                    <span className="text-cyan-400 font-bold">Your Pace, Your Plan</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>Free Call</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Before You Pay</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Why choose mentorship</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">What a mentor changes in your learning</h2>
              <p className="mt-3 text-slate-600">Clear direction, faster progress and proof of skill that you can show.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0057ff] hover:shadow-[0_12px_32px_rgba(0,87,255,0.18)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00f0ff]/40 bg-gradient-to-br from-[#00f0ff]/15 to-[#0057ff]/15 text-[#0057ff] transition-all group-hover:scale-110 group-hover:from-[#00f0ff] group-hover:to-[#0057ff] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold group-hover:text-[#0057ff]">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TRACK EXPLORER ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Choose your track</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">What you will learn and build</h2>
              <p className="mt-3 text-slate-600">Switch between development, cloud and career support. Your mentor shapes it to your goal.</p>
            </div>

            <div className="mb-8 flex justify-center" data-aos="fade-up">
              <div role="tablist" aria-label="Mentorship track" className="inline-flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
                {solutionSets.map((s) => {
                  const active = s.id === setId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSetId(s.id)}
                      className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all active:scale-95 sm:px-6 ${
                        active ? `text-white shadow-[0_4px_16px_rgba(0,87,255,0.3)] ${gradBg}` : "text-slate-700 hover:text-[#0057ff]"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div role="tabpanel">
              <div className="mx-auto mb-8 max-w-2xl text-center">
                <h3 className="font-display text-xl font-bold">{activeSet.full}</h3>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">{activeSet.summary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeSet.solutions.map(({ icon: Icon, title, desc }) => (
                  <div key={`${activeSet.id}-${title}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-[#0057ff]/60 hover:bg-white hover:shadow-md">
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </div>
                    <h4 className="font-display text-base font-bold">{title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ LEARNING LOOP ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>How every week works</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Learn, build, review, show</h2>
              <p className="mt-3 text-slate-600">A simple weekly loop that turns knowledge into proof of skill.</p>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="flip-up"
                  data-aos-delay={i * 100}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white ${gradBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  {i < flow.length - 1 && (
                    <ArrowRight aria-hidden="true" size={18} className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white text-[#0057ff] lg:block" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ TECHNOLOGY ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Skills and tools</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Tools used in real jobs</h2>
              <p className="mt-3 text-slate-600">Your mentor picks the right ones for your track. You will not need all of these.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {techGroups.map(({ label, icon: Icon, items }, i) => (
                <div key={label} data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display text-lg font-bold">{label}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span key={t} className="rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold text-slate-800 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FIT ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Is mentorship the right fit for you?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Ideal For Mentorship</p>
                <ul className="space-y-3">
                  {goodFor.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium">
                      <Check size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" data-aos="fade-left">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Probably Not For You</p>
                <ul className="space-y-3">
                  {notIdeal.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                      <X size={18} className="mt-0.5 shrink-0 text-slate-400" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0057ff] hover:underline">
                  Talk to our academy team <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section id="pricing" className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Transparent Fees</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Simple plans. Pick what fits your goal.</h2>
              <p className="mt-3 text-slate-600">
                Fees are starting points and may change by track and batch. Start with a free discovery call, and pause or stop after any month on the monthly plans.
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className={`relative flex flex-col rounded-3xl bg-white p-6 sm:p-8 transition-all ${
                    pkg.popular
                      ? "border-2 border-[#0057ff] shadow-[0_16px_48px_rgba(0,87,255,0.25)] lg:-translate-y-3"
                      : "border border-slate-200 hover:border-[#0057ff]/60 hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white ${gradBg}`}>
                      Most popular choice
                    </span>
                  )}

                  <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{pkg.forWho}</p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className={`font-display text-4xl font-black ${gradText}`}>{pkg.price}</span>
                    <span className="mb-1 flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={12} /> {pkg.time}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                          <Check size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/proposal?type=${PROPOSAL_TYPE}&package=${pkg.id}`}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all active:scale-95 ${
                      pkg.popular
                        ? `text-white shadow-[0_6px_22px_rgba(0,87,255,0.35)] hover:brightness-105 ${gradBg}`
                        : "border border-[#00f0ff]/60 text-slate-800 hover:border-[#0057ff] hover:text-[#0057ff]"
                    }`}
                  >
                    Choose {pkg.name}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>Your Journey</span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">From first call to portfolio in 4 steps</h2>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 75}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <span className={`absolute right-5 top-4 font-display text-4xl font-black opacity-30 ${gradText}`}>0{i + 1}</span>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white ${gradBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ INCLUDED ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-display text-2xl font-black tracking-tight sm:text-3xl" data-aos="fade-up">
              Every mentorship plan includes
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {included.map((t, i) => (
                <li
                  key={t}
                  data-aos="fade-up"
                  data-aos-delay={(i % 2) * 80}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                >
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                    <Check size={12} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen ? "border-[#0057ff]/60 bg-white shadow-md" : "border-slate-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-bold sm:text-base">{f.q}</span>
                      <ChevronDown size={18} className={`shrink-0 text-[#0057ff] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div
            data-aos="zoom-in"
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#020b24] via-[#04215f] to-[#0057ff] px-6 py-14 text-center text-white sm:px-12 shadow-2xl"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#00f0ff]/30 blur-[90px]" />
            <div className="relative space-y-5">
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl text-balance">
                Ready to stop guessing and start building?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us your level and your goal. We will reply with a free discovery call, an honest suggestion for your track and a clear fee.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0057ff] shadow-lg transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
                >
                  Join the mentorship <ArrowRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur transition-all hover:bg-white/20 sm:w-auto"
                >
                  <MessageCircle size={16} /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MOBILE STICKY BAR ============ */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden shadow-lg">
          <div className="mx-auto flex max-w-md items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00f0ff]/60 text-[#0057ff]"
            >
              <MessageCircle size={20} />
            </a>
            <Link
              to={`/proposal?type=${PROPOSAL_TYPE}`}
              className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,87,255,0.35)] active:scale-95 ${gradBg}`}
            >
              Book free discovery call <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default TechSasiAcademyMentorship;