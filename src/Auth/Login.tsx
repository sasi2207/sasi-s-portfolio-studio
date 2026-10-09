"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Skeleton } from "@/components/ui/skeleton";
import {
  User,
  Lock,
  LogIn,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layers,
} from "lucide-react";
import { login } from "./auth";
import { toast } from "sonner";

export const LoginSkeletonCard = () => {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl border border-border bg-card shadow-elevated space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-3 text-center flex flex-col items-center">
        <Skeleton className="w-12 h-12 rounded-xl mb-1" />
        <Skeleton className="h-7 w-48 rounded-lg" />
        <Skeleton className="h-4 w-64 rounded-md" />
      </div>

      {/* Input Field 1 Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-20 rounded" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>

      {/* Input Field 2 Skeleton */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-3 w-28 rounded" />
        </div>
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>

      {/* Submit Button Skeleton */}
      <Skeleton className="h-12 w-full rounded-xl" />

      {/* Demo Credentials Box Skeleton */}
      <Skeleton className="h-16 w-full rounded-xl" />

      {/* Footer Info Skeleton */}
      <div className="pt-2 flex justify-center">
        <Skeleton className="h-4 w-40 rounded" />
      </div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Skeleton loader preview state (runs on initial mount or can be toggled to test skeleton animation)
  const [initialSkeletonLoading, setInitialSkeletonLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });

    // Provide a brief skeleton simulation on first mount to show the smooth loader
    const timer = setTimeout(() => {
      setInitialSkeletonLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleQuickDemoFill = (autoSubmit = false) => {
    setUsername("techsasi_admin");
    setPassword("techsasi2026");
    toast.info("Demo credentials populated: techsasi_admin");

    if (autoSubmit) {
      executeLogin("techsasi_admin", "techsasi2026");
    }
  };

  const executeLogin = async (usr: string, pwd: string) => {
    if (!usr.trim() || !pwd.trim()) {
      toast.error("Please enter both username and password");
      return;
    }

    setLoading(true);

    try {
      const res = await login(usr, pwd);

      if (res?.token) {
        sessionStorage.removeItem("techsasi_explicit_logout");
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.user?.username || usr);

        toast.success("Authentication successful! Loading dashboard...");

        setTimeout(() => {
          navigate("/dashboard");
        }, 300);
      } else {
        toast.error(res?.error || "Invalid username or password");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Authentication failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  const submit = () => {
    executeLogin(username, password);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <ParallaxSection className="pt-28 pb-10 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent">
        <div className="container-custom max-w-3xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mx-auto">
            <ShieldCheck size={14} className="text-primary" />
            <span>TechSasi Client & Admin Portal</span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-heading font-bold tracking-tight"
            data-aos="fade-up"
          >
            Access Your{" "}
            <span className="accent-gradient-text">
              Project Dashboard
            </span>
          </h1>

          <p
            className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Review project proposals, monitor development milestones, track deliverables,
            and inspect live inquiry details in real time.
          </p>
        </div>
      </ParallaxSection>

      {/* FORM SECTION */}
      <section className="section-padding pt-4 pb-20">
        <div className="container-custom flex flex-col items-center justify-center">

          {/* SKELETON PREVIEW TOGGLE CONTROLLER */}
          <div className="mb-4 flex items-center gap-2">
            <button
              onClick={() => {
                setInitialSkeletonLoading(true);
                setTimeout(() => setInitialSkeletonLoading(false), 1200);
              }}
              className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Test skeleton loader animation"
            >
              <RefreshCw size={12} className={initialSkeletonLoading ? "animate-spin" : ""} />
              <span>Simulate Skeleton Animation</span>
            </button>

            <button
              onClick={() => handleQuickDemoFill(true)}
              className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium border border-primary/20 transition-colors"
            >
              <Sparkles size={12} />
              <span>1-Click Instant Demo Login</span>
            </button>
          </div>

          {/* CONDITIONAL RENDER: SKELETON LOADER VS ACTUAL AUTH FORM */}
          {initialSkeletonLoading ? (
            <div data-aos="fade-in">
              <LoginSkeletonCard />
            </div>
          ) : (
            <div
              className="w-full max-w-md bg-card border border-border rounded-2xl shadow-elevated p-6 sm:p-8 transition-all animate-in fade-in zoom-in-95 duration-300"
              data-aos="zoom-in"
            >
              {/* BRAND LOCKUP */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-soft">
                  <Lock size={22} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Sign In to TechSasi
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Enter your credentials or use the demo login below
                </p>
              </div>

              {/* INPUT FIELDS */}
              <div className="space-y-4" onKeyDown={handleKeyDown}>
                {/* USERNAME */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Username / Client ID
                  </label>

                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background/80 focus:bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
                      placeholder="e.g. techsasi_admin"
                      autoFocus
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Password
                    </label>
                    <span className="text-xs text-primary/80 hover:text-primary cursor-pointer transition-colors">
                      Encrypted Key
                    </span>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-input bg-background/80 focus:bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
                      placeholder="••••••••••••"
                    />

                    {/* SHOW / HIDE PASSWORD BUTTON */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="button"
                  onClick={submit}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 shadow-md transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer text-sm mt-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>Verifying Session...</span>
                    </>
                  ) : (
                    <>
                      <LogIn size={16} />
                      <span>Sign In to Dashboard</span>
                      <ArrowRight size={14} className="ml-1 opacity-70" />
                    </>
                  )}
                </button>

                {/* QUICK DEMO CREDENTIALS SHORTCUT BOX */}
                <div className="p-3.5 rounded-xl bg-secondary/50 border border-border space-y-2 mt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground flex items-center gap-1.5">
                      <Sparkles size={13} className="text-amber-500" />
                      Demo Sandbox Credentials
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuickDemoFill(false)}
                      className="text-primary hover:underline font-medium text-[11px]"
                    >
                      Auto-Fill Form
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-1.5 rounded bg-background/80 border border-border/60">
                      <span className="text-muted-foreground text-[10px] block">User</span>
                      <span className="text-foreground font-medium">techsasi_admin</span>
                    </div>
                    <div className="p-1.5 rounded bg-background/80 border border-border/60">
                      <span className="text-muted-foreground text-[10px] block">Pass</span>
                      <span className="text-foreground font-medium">techsasi2026</span>
                    </div>
                  </div>
                </div>

                {/* SECURITY ADVISORY FOOTNOTE */}
                <div className="pt-2 text-center">
                  <p className="text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>Protected by TechSasi 256-Bit TLS Security</span>
                  </p>
                </div>
              </div>

              {/* BACK TO HOME LINK */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <Link to="/" className="hover:text-foreground transition-colors">
                  ← Return to Website
                </Link>
                <Link to="/proposal" className="text-primary hover:underline">
                  Submit New Proposal →
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default Login;
