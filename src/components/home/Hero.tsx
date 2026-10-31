import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./img/Man in Blue Suit Against Ribbed Wall.png";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  Smartphone,
  Globe,
  Server,
  GraduationCap,
  Clock,
  Sparkles,
  BarChart3,
  ArrowUp,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  MousePointer,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";

interface SolutionTab {
  id: "web" | "app" | "erp" | "training";
  label: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  features: string[];
  timeline: string;
  startingPrice: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const solutionTabs: SolutionTab[] = [
  {
    id: "web",
    label: "Websites",
    icon: Globe,
    title: "High-Performance Business Websites",
    subtitle: "Built with React & Next.js for sub-second speeds and top Google search rankings.",
    features: [
      "100% mobile responsive on all devices",
      "Free SSL certificate & secure cloud hosting setup",
      "WhatsApp chat integration & enquiry forms",
      "Full SEO setup with Google Search Console",
    ],
    timeline: "Ready in 5–10 Days",
    startingPrice: "Affordable Fixed Quotes",
    ctaText: "Get Website Quote",
    ctaLink: "/proposal",
    badge: "<0.8s FCP",
  },
  {
    id: "app",
    label: "Mobile Apps",
    icon: Smartphone,
    title: "iOS & Android Native Mobile Apps",
    subtitle: "Cross-platform mobile applications engineered with Flutter & React Native.",
    features: [
      "Smooth 60fps animations on iOS & Android",
      "Real-time push notifications & offline storage",
      "Secure user logins (OTP, Google, Mobile)",
      "App Store & Google Play Store submission",
    ],
    timeline: "2–4 Weeks Turnaround",
    startingPrice: "Milestone-Based",
    ctaText: "Plan Your Mobile App",
    ctaLink: "/proposal",
    badge: "iOS & Android",
  },
  {
    id: "erp",
    label: "Custom ERP",
    icon: Server,
    title: "Business Billing, Invoicing & ERP",
    subtitle: "Tailor-made management software designed around your exact business workflow.",
    features: [
      "GST-compliant automated invoice & bill generation",
      "Live inventory & stock movement tracking",
      "Multi-user roles with admin permissions",
      "Automated WhatsApp & PDF reports",
    ],
    timeline: "Custom Milestone Scope",
    startingPrice: "Transparent Scope",
    ctaText: "Discuss ERP Requirements",
    ctaLink: "/contact",
    badge: "GST Automated",
  },
  {
    id: "training",
    label: "AI Coaching",
    icon: GraduationCap,
    title: "Hands-on Software Coaching & Placement",
    subtitle: "Practical training in React, Node.js, and Full-Stack development from Salem.",
    features: [
      "100% project-based real application building",
      "Direct 1-on-1 mentorship from working engineers",
      "Resume building & mock interview drills",
      "Internship completion certificate & referral",
    ],
    timeline: "Flexible Batches",
    startingPrice: "Student Friendly",
    ctaText: "Enroll in Coaching",
    ctaLink: "/services/coaching",
    badge: "1-on-1 Mentorship",
  },
];

export const HeroSolutionShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<SolutionTab["id"]>(solutionTabs[0].id);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tabId: SolutionTab["id"]) => {
    if (tabId === activeTabId) return;
    setIsLoading(true);
    setActiveTabId(tabId);
    setTimeout(() => {
      setIsLoading(false);
    }, 220);
  };

  const currentTab = solutionTabs.find((t) => t.id === activeTabId) || solutionTabs[0];

  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <SpotlightCard
        className="p-6 md:p-8 shadow-2xl space-y-5 relative transition-colors duration-300 bg-white/85 backdrop-blur-xl rounded-3xl border border-cyan-300/60 shadow-[0_15px_50px_-15px_rgba(0,180,255,0.25)]"
        spotlightColor="rgba(0, 210, 255, 0.28)"
        borderColor="rgba(0, 102, 255, 0.5)"
        enableTilt={true}
        tiltMaxAngle={6}
      >
        {/* High-Voltage Electric Beam: Neon Cyan to Electric Blue */}
        <BorderBeam 
          size={200} 
          duration={8} 
          colorFrom="#00f2fe" 
          colorTo="#4facfe" 
          borderWidth={2} 
        />

       <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
  
  {/* Outer Glowing Dashed Circle Ring */}
<div className="relative w-full max-w-md mx-auto my-12 p-6 flex items-center justify-center">
  
  {/* Background Glow Effect */}
  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none" />

  {/* Main Circular Image Container (Pushed down by 20px using mt-[20px] or pt-[20px]) */}
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-b from-cyan-400 via-sky-300 to-blue-500 shadow-[0_0_50px_rgba(0,210,255,0.3)] z-20 mt-[20px]">
    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 relative flex items-start justify-center">
      <img 
        src={img1} 
        alt="Professional Business Woman" 
        className="w-full h-full object-cover object-[50%_0%] filter drop-shadow-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* FLOATING CARD 1: Solutions Deployed (Top Left Pill) */}
  <div 
    data-aos="fade-right"
    className="absolute top-2 left-2 sm:left-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-cyan-100/50 flex items-center gap-3 z-30"
  >
    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
      <TrendingUp className="w-5 h-5 stroke-[2.5]" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Solutions</span>
      <span className="text-base sm:text-lg font-black text-slate-800 dark:text-white">200+ Deployed</span>
    </div>
  </div>

  {/* FLOATING CARD 2: Monthly Traffic (Bottom Right Card) */}
  <div 
    data-aos="fade-left"
    className="absolute bottom-2 right-2 sm:right-0 bg-gradient-to-br from-slate-900/95 to-blue-950/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] w-[160px] sm:w-[180px] space-y-2 border border-cyan-500/30 z-30"
  >
    <div className="flex items-center justify-between">
      <span className="text-xs font-semibold text-cyan-300 tracking-wide">Monthly Traffic</span>
      <BarChart3 className="w-4 h-4 text-cyan-400" />
    </div>
    
    {/* Mini Bar Chart */}
    <div className="flex items-end gap-1.5 h-10 pt-1">
      <div className="w-1/4 bg-cyan-500/40 rounded-t h-[40%]"></div>
      <div className="w-1/4 bg-cyan-500/70 rounded-t h-[65%]"></div>
      <div className="w-1/4 bg-cyan-400 rounded-t h-[85%]"></div>
      <div className="w-1/4 bg-white rounded-t h-[100%] shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
    </div>
  </div>

  {/* FLOATING BADGE 3: Security Shield (Bottom Left) */}
  <div 
    data-aos="zoom-in"
    className="absolute bottom-8 left-4 sm:left-2 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white p-3 rounded-2xl shadow-[0_0_20px_rgba(0,198,255,0.6)] border-2 border-white/80 z-30"
  >
    <ShieldCheck className="w-5 h-5" />
  </div>

</div>
</div>
      </SpotlightCard>
    </div>
  );
};

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
      easing: "ease-out-cubic",
    });
  }, []);

  // Dynamic typing animation effect for header accent
  useEffect(() => {
    const words = ["Design", "Develop", "Deploy", "Deliver"];
    const currentWord = words[textIndex % words.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden selection:bg-cyan-200 selection:text-blue-900">
      
      {/* Background Decorative Dashed/Curved Lines in Electric Cyan */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 150 80 Q 450 -20 500 250 T 200 500" 
          fill="none" 
          stroke="#00D2FF" 
          strokeWidth="1.5" 
          strokeDasharray="6 6" 
        />
        <path 
          d="M 300 350 Q 550 550 800 280 T 1100 400" 
          fill="none" 
          stroke="#0080FF" 
          strokeWidth="1.5" 
          strokeDasharray="6 6" 
        />
      </svg>

      {/* Main Hero Section */}
      <main className="relative mt-20 z-10 max-w-7xl mx-auto px-6 pt-8 pb-24 lg:pt-16 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headline & Content */}
        <div className="lg:col-span-7 space-y-8" data-aos="fade-right" data-aos-duration="800">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-cyan-50/90 border border-cyan-300 text-cyan-800 text-sm font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>
                We <span className="underline decoration-[#00D2FF] underline-offset-4 font-black">{typedText}</span>
                <span className="animate-pulse text-cyan-500 font-black">|</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              We Do IT All, So You Can <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">Excel</span>
            </h1>
          </div>

          <div className="space-y-4 max-w-2xl text-slate-600 leading-relaxed text-base sm:text-lg">
            <p className="font-semibold text-slate-800">
              We meticulously plan every step, ensuring your digital journey aligns seamlessly with your goals.
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Discover a new era of work dynamics with <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">techsasi</span>'s dedicated service. We redefine efficiency as pioneers in <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">Best Technology Services</span>, making each aspect easily managed for a streamlined and user-centric experience.
            </p>
          </div>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-2 gap-3 max-w-md pt-2 text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="100">
              <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Custom IT Solutions</span>
            </div>
            <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="200">
              <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Dedicated Support</span>
            </div>
            <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="300">
              <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Data Security</span>
            </div>
            <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="400">
              <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Proven ROI</span>
            </div>
          </div>

          {/* Featured Live Product Trial Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-sky-500/10 border border-cyan-400/40 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3" data-aos="fade-up" data-aos-delay="450">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wide">
                  Live Software • billing.techsasi.com
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-800 font-bold font-mono">
                  1 Mo Free Trial
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                GST Billing Software: Try 1 month free before you purchase!
              </p>
              <p className="text-[11px] text-slate-600">
                Test POS billing, barcode scanning and GST invoices at your counter.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://billing.techsasi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs transition-all shadow-sm active:scale-95"
              >
                <span>Try 1 Month Free</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/proposal?type=billing-software"
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-800 font-bold text-xs transition-all shadow-xs"
              >
                <span>Purchase Now</span>
              </Link>
            </div>
          </div>

          {/* Interactive Get in Touch Button Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a 
              href="https://wa.me/917448788897?text=Hi%20TechSasi%2C%20I%20have%20an%20engineering%20inquiry%20regarding%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold text-base shadow-[0_8px_25px_-5px_rgba(0,150,255,0.45)] hover:shadow-[0_12px_30px_-5px_rgba(0,180,255,0.6)] hover:-translate-y-0.5 transition-all active:scale-95 group border border-cyan-300/30"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white fill-white/20" />
              </div>
              <span>Get in Touch</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <Link
              to="/services/billing"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-800 font-semibold text-base transition-all hover:-translate-y-0.5 shadow-xs"
            >
              <span>Explore Billing System</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>

        </div>

        {/* Right Column: Interactive Solution Showcase Component */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0 w-full" data-aos="fade-left" data-aos-duration="800">
          <HeroSolutionShowcase />
        </div>

      </main>

    </div>
  );
}