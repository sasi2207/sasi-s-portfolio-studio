"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Skeleton } from "@/components/ui/skeleton";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyText } from "@/components/ui/shiny-text";
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
  Server,
  AlertTriangle,
  Globe2,
} from "lucide-react";
import { login, API_BASE_URL, pingPhpBackend } from "./auth";
import { toast } from "sonner";

export const LoginSkeletonCard = () => {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl border border-border bg-card shadow-elevated space-y-6 animate-pulse">
      <div className="space-y-3 text-center flex flex-col items-center">
        <Skeleton className="w-12 h-12 rounded-xl mb-1" />
        <Skeleton className="h-7 w-48 rounded-lg" />
        <Skeleton className="h-4 w-64 rounded-md" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-20 rounded" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-3 w-28 rounded" />
        </div>
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>

      <Skeleton className="h-12 w-full rounded-xl" />
      <Skeleton className="h-16 w-full rounded-xl" />

      <div className="pt-2 flex justify-center">
        <Skeleton className="h-4 w-40 rounded" />
      </div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authReason, setAuthReason] = useState<string | null>(null);
  const [phpConnected, setPhpConnected] = useState<boolean | null>(null);

  const [initialSkeletonLoading, setInitialSkeletonLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });

    // Check if redirected because authentication is mandatory
    const reason = sessionStorage.getItem("techsasi_auth_required_reason");
    if (reason) {
      setAuthReason(reason);
    }

    // Ping PHP Backend status
    pingPhpBackend().then((res) => {
      setPhpConnected(res.connected);
    });

    const timer = setTimeout(() => {
      setInitialSkeletonLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);



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
        sessionStorage.removeItem("techsasi_auth_required_reason");
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.user?.username || usr);

        toast.success("Authenticated with PHP backend! Opening client portal...");

        const destination = (location.state as any)?.from?.pathname || "/dashboard";

        setTimeout(() => {
          navigate(destination, { replace: true });
        }, 350);
      } else {
        toast.error(res?.error || "Invalid username or password");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Authentication failed. Please check credentials.");
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
      <ParallaxSection className="pt-28 pb-8 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent">
        <div className="container-custom max-w-3xl text-center space-y-3">
          
          {/* Security Gate Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/25 mx-auto shadow-xs">
            <Lock size={13} className="text-primary" />
            <span className="font-semibold">Client Portal · Secured Login Gate</span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground"
            data-aos="fade-up"
          >
            Access Your{" "}
            <span className="accent-gradient-text">
              Client Portal
            </span>
          </h1>

          <p
            className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Authentication is required to access client proposals, development milestones,
            and live project records powered by the TechSasi PHP backend.
          </p>

          {/* PHP Backend Engine Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-card/80 border border-border text-[11px] font-mono text-muted-foreground shadow-xs">
            <Server size={12} className="text-primary" />
            <span>PHP API Backend:</span>
            <span className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-none">
              {API_BASE_URL}
            </span>
            <span
              className={`w-2 h-2 rounded-full ${
                phpConnected === false ? "bg-amber-400" : "bg-emerald-400 animate-pulse"
              }`}
              title={phpConnected === false ? "Standby Mode" : "PHP API Active"}
            />
          </div>
        </div>
      </ParallaxSection>

      {/* FORM SECTION */}
      <section className="section-padding pt-2 pb-24">
        <div className="container-custom flex flex-col items-center justify-center">

          {/* ACCESS WARNING BANNER (If unauthenticated access was attempted) */}
          {authReason && (
            <div className="w-full max-w-md mb-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs flex items-start gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2">
              <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Authentication Required</span>
                <span>{authReason}</span>
              </div>
            </div>
          )}



          {/* CONDITIONAL RENDER: SKELETON LOADER VS ACTUAL AUTH FORM */}
          {initialSkeletonLoading ? (
            <div data-aos="fade-in">
              <LoginSkeletonCard />
            </div>
          ) : (
            <SpotlightCard
              className="w-full max-w-md bg-card border border-border rounded-2xl shadow-elevated p-6 sm:p-8 transition-all relative overflow-hidden"
              spotlightColor="rgba(14, 165, 233, 0.18)"
              borderColor="rgba(14, 165, 233, 0.4)"
              enableTilt={true}
              tiltMaxAngle={4}
            >
              {/* Dynamic Border Beam */}
              <BorderBeam size={160} duration={8} colorFrom="#38bdf8" colorTo="#6366f1" borderWidth={1.5} />

              {/* BRAND LOCKUP */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-soft">
                  <Lock size={22} />
                </div>
                <h2 className="text-2xl font-heading font-extrabold text-foreground">
                  Sign In to TechSasi
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Authenticate to connect to the backend system
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
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
                    <span className="text-xs text-primary/80 font-mono text-[11px]">
                      PHP Session Key
                    </span>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
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
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-primary to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-3 px-4 shadow-md transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer text-sm mt-3"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>Authenticating with PHP Backend...</span>
                    </>
                  ) : (
                    <>
                      <LogIn size={16} />
                      <span>Sign In to Client Portal</span>
                      <ArrowRight size={14} className="ml-1 opacity-80" />
                    </>
                  )}
                </button>

                {/* DATABASE AUTH NOTICE */}
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 text-xs text-muted-foreground flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={15} className="text-primary shrink-0" />
                    <span>Only verified database user credentials can log in.</span>
                  </div>
                  <Link to="/register" className="text-primary hover:underline font-semibold text-[11px] shrink-0">
                    Register →
                  </Link>
                </div>

                {/* SECURITY ADVISORY FOOTNOTE */}
                <div className="pt-2 text-center space-y-1">
                  <p className="text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>Protected by TechSasi 256-Bit TLS &amp; PHP Session Security</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground/70 font-mono">
                    Only authorized clients can query proposals and server records.
                  </p>
                </div>
              </div>

              {/* BACK TO HOME LINK */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <Link to="/" className="hover:text-foreground transition-colors">
                  ← Return to Website
                </Link>
                <Link to="/proposal" className="text-primary hover:underline font-medium">
                  Submit New Proposal →
                </Link>
              </div>
            </SpotlightCard>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default Login;
