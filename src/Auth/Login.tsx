import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  User,
  Lock,
  LogIn,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Server,
  AlertTriangle,
  FileText,
  Activity,
  Layers,
} from "lucide-react";
import { login, API_BASE_URL, pingPhpBackend } from "./auth";
import { toast } from "sonner";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

export const LoginSkeletonCard = () => (
  <div className="w-full max-w-md space-y-6 animate-pulse">
    <div className="space-y-3">
      <Skeleton className="h-8 w-48 rounded-lg" />
      <Skeleton className="h-4 w-64 rounded-md" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-24 rounded" />
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-20 rounded" />
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
    <Skeleton className="h-12 w-full rounded-xl" />
    <Skeleton className="h-4 w-40 rounded mx-auto" />
  </div>
);

const features = [
  {
    icon: FileText,
    title: "Project Proposals",
    desc: "Track every proposal and its approval status in one place.",
  },
  {
    icon: Activity,
    title: "Live Milestones",
    desc: "See development progress as it happens, not weekly summaries.",
  },
  {
    icon: Layers,
    title: "Project Records",
    desc: "Secure access to your files, invoices and delivery history.",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [capsOn, setCapsOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authReason, setAuthReason] = useState<string | null>(null);
  const [phpConnected, setPhpConnected] = useState<boolean | null>(null);
  const [initialSkeletonLoading, setInitialSkeletonLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });

    const reason = sessionStorage.getItem("techsasi_auth_required_reason");
    if (reason) setAuthReason(reason);

    pingPhpBackend()
      .then((res) => setPhpConnected(res.connected))
      .catch(() => setPhpConnected(false));

    const timer = setTimeout(() => setInitialSkeletonLoading(false), 450);
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

        toast.success("Authenticated! Opening client portal...");

        const destination =
          (location.state as any)?.from?.pathname || "/dashboard";

        setTimeout(() => navigate(destination, { replace: true }), 350);
      } else {
        toast.error(res?.error || "Invalid username or password");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.message || "Authentication failed. Please check credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loading) executeLogin(username, password);
  };

  const statusLabel =
    phpConnected === null
      ? "Checking server..."
      : phpConnected
      ? "Server online"
      : "Standby mode";

  const statusDot =
    phpConnected === null
      ? "bg-slate-300"
      : phpConnected
      ? "bg-emerald-400"
      : "bg-amber-400";

  return (
    <Layout>
      <main className="relative min-h-screen bg-white pt-20 sm:pt-24 overflow-hidden">
        {/* subtle mesh background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035]"
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl lg:grid-cols-2 sm:min-h-[calc(100vh-6rem)]">
          {/* ================= LEFT: BRAND PANEL (desktop only) ================= */}
          <aside
            className="relative hidden lg:flex flex-col justify-between overflow-hidden m-6 xl:m-8 rounded-[2rem] p-10 xl:p-14 text-white bg-gradient-to-br from-[#020b24] via-[#04215f] to-[#0057ff]"
            data-aos="fade-right"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#00f0ff]/30 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#0057ff]/50 blur-[100px]"
            />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest backdrop-blur">
                <ShieldCheck size={13} className="text-[#00f0ff]" />
                Secure Client Portal
              </div>

              <h1 className="font-heading text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight text-balance">
                Your projects.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-white">
                  One secure place.
                </span>
              </h1>

              <p className="max-w-md text-sm xl:text-base leading-relaxed text-white/70">
                Sign in to follow proposals, milestones and live project records
                from the TechSasi engineering team.
              </p>
            </div>

            <ul className="relative z-10 mt-10 space-y-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#0057ff] shadow-lg shadow-[#0057ff]/30">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="text-xs leading-relaxed text-white/60">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* ================= RIGHT: FORM ================= */}
          <section className="relative flex items-center justify-center px-4 py-10 sm:px-8 lg:px-10 xl:px-16">
            <div className="w-full max-w-md" data-aos="fade-up">
              {/* Mobile / tablet brand header */}
              <div className="mb-8 lg:hidden text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00f0ff] to-[#0057ff] text-white shadow-lg shadow-[#0057ff]/30">
                  <Lock size={24} />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-widest">
                  <span className={gradText}>Secure Client Portal</span>
                </div>
              </div>

              {/* Auth required banner */}
              {authReason && (
                <div
                  role="alert"
                  className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 p-4 text-xs sm:text-sm text-amber-900"
                  data-aos="fade-down"
                >
                  <AlertTriangle
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  <div>
                    <span className="block font-bold">
                      Authentication required
                    </span>
                    <span>{authReason}</span>
                  </div>
                </div>
              )}

              {initialSkeletonLoading ? (
                <LoginSkeletonCard />
              ) : (
                <>
                  <div className="mb-8 space-y-2 text-center lg:text-left">
                    <h2 className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                      Welcome <span className={gradText}>back</span>
                    </h2>
                    <p className="text-sm text-slate-600">
                      Sign in to access your TechSasi client dashboard.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* USERNAME */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="username"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600"
                      >
                        Username / Client ID
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          autoFocus
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="e.g. techsasi_admin"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-[#0057ff] focus:bg-white focus:ring-4 focus:ring-[#0057ff]/15"
                        />
                      </div>
                    </div>

                    {/* PASSWORD */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="password"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Lock
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyUp={(e) =>
                            setCapsOn(e.getModifierState("CapsLock"))
                          }
                          onBlur={() => setCapsOn(false)}
                          placeholder="••••••••••••"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-[#0057ff] focus:bg-white focus:ring-4 focus:ring-[#0057ff]/15"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((s) => !s)}
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-900"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                      {capsOn && (
                        <p className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
                          <AlertTriangle size={13} /> Caps Lock is on
                        </p>
                      )}
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 flex h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0057ff] text-sm font-bold text-white shadow-[0_6px_22px_rgba(0,87,255,0.35)] transition-all hover:shadow-[0_8px_28px_rgba(0,240,255,0.5)] hover:brightness-105 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <RefreshCw size={18} className="animate-spin" />
                          <span>Signing in...</span>
                        </>
                      ) : (
                        <>
                          <LogIn size={18} />
                          <span>Sign In</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>

                  {/* REGISTER */}
                  <p className="mt-6 text-center text-sm text-slate-600">
                    New client?{" "}
                    <Link
                      to="/register"
                      className="font-bold text-[#0057ff] hover:underline"
                    >
                      Create an account
                    </Link>
                  </p>

                  {/* TRUST + STATUS */}
                  <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-emerald-500"
                      />
                      Protected by TLS encryption &amp; secure PHP sessions
                    </p>
                   
                  </div>

                  {/* FOOTER LINKS */}
                  <div className="mt-6 flex items-center justify-between text-xs font-medium text-slate-500">
                    <Link
                      to="/"
                      className="transition-colors hover:text-slate-900"
                    >
                      ← Back to website
                    </Link>
                    <Link
                      to="/proposal"
                      className="font-semibold text-[#0057ff] hover:underline"
                    >
                      Submit proposal →
                    </Link>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Login;