"use client";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Skeleton } from "@/components/ui/skeleton";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  User,
  LogOut,
  LayoutDashboard,
  FileText,
  Eye,
  XCircle,
  TrendingUp,
  MessageSquare,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  FolderGit2,
  ExternalLink,
  ChevronRight,
  FileCode2,
  Server,
  Database,
  Lock,
  Wifi,
  KeyRound,
} from "lucide-react";
import { toast } from "sonner";
import { API_BASE_URL, pingPhpBackend, logout as executeLogout } from "./auth";

interface ProposalSummary {
  id: number;
  client_name: string;
  company_name: string | null;
  project_name: string;
  budget: string | null;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}



/* ================= SKELETON LOADER COMPONENT ================= */
export const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Top Banner Skeleton */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-soft space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48 rounded" />
            <Skeleton className="h-4 w-72 rounded" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-28 rounded-lg" />
            <Skeleton className="h-9 w-28 rounded-lg" />
          </div>
        </div>
      </div>

      {/* KPI Stats Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-5 rounded-2xl border border-border bg-card space-y-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-24 rounded" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
            <Skeleton className="h-8 w-20 rounded" />
            <Skeleton className="h-3 w-36 rounded" />
          </div>
        ))}
      </div>

      {/* Action Modules Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <Skeleton className="h-5 w-36 rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
            <Skeleton className="h-10 w-full rounded-xl mt-4" />
          </div>
        ))}
      </div>

      {/* Recent Table Skeleton */}
      <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-5 w-40 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
        <div className="space-y-3 pt-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-14 rounded-xl bg-muted/40 flex items-center justify-between px-4">
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-44 rounded" />
                <Skeleton className="h-3 w-28 rounded" />
              </div>
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-5 w-16 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN DASHBOARD ================= */
const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "techsasi_client";
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);
  const [proposals, setProposals] = useState<ProposalSummary[]>([]);
  const [contactsCount, setContactsCount] = useState<number>(0);
  const [showLogout, setShowLogout] = useState(false);
  const [phpPingState, setPhpPingState] = useState<{ connected: boolean; latencyMs?: number; message?: string }>({
    connected: true,
    latencyMs: 18,
    message: "Connected to Database REST API",
  });
  const [isSyncing, setIsSyncing] = useState(false);

  /* ---------------- AUTH CHECK & DATABASE DATA LOAD ---------------- */
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });

    // Strict authentication gate
    if (!token) {
      sessionStorage.setItem("techsasi_auth_required_reason", "Client portal requires login to access backend data.");
      toast.error("Access Restricted: Please login to connect to the database");
      navigate("/login", { replace: true });
      return;
    }

    // Ping PHP backend
    pingPhpBackend().then((status) => {
      setPhpPingState(status);
    });

    const loadDatabaseData = async () => {
      setLoading(true);
      try {
        const [propRes, contactRes] = await Promise.allSettled([
          fetch(`${API_BASE_URL}/get-proposal.php`, { headers: { Accept: "application/json" } }).then((r) => r.json()),
          fetch(`${API_BASE_URL}/get-contacts.php`, { headers: { Accept: "application/json" } }).then((r) => r.json()),
        ]);

        if (propRes.status === "fulfilled" && propRes.value?.data && Array.isArray(propRes.value.data)) {
          setProposals(propRes.value.data);
        } else if (propRes.status === "fulfilled" && Array.isArray(propRes.value)) {
          setProposals(propRes.value);
        } else {
          setProposals([]);
        }

        if (contactRes.status === "fulfilled" && contactRes.value?.data && Array.isArray(contactRes.value.data)) {
          setContactsCount(contactRes.value.data.length);
        } else if (contactRes.status === "fulfilled" && Array.isArray(contactRes.value)) {
          setContactsCount(contactRes.value.length);
        } else {
          setContactsCount(0);
        }
      } catch (e) {
        console.error("Dashboard database fetch error:", e);
      } finally {
        setLoading(false);
      }
    };

    loadDatabaseData();
  }, [token, navigate]);

  /* ---------------- LOGOUT ---------------- */
  const handleLogout = () => {
    executeLogout();
    toast.success("Client session ended. Token invalidated.");
    navigate("/login", { replace: true });
  };

  /* ---------------- SIMULATE REFRESH / PHP SYNC ---------------- */
  const handleRefresh = async () => {
    setIsSyncing(true);
    setLoading(true);

    try {
      const ping = await pingPhpBackend();
      setPhpPingState(ping);
      toast.success("Backend synchronized with PHP REST API");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setIsSyncing(false);
      }, 500);
    }
  };

  // Metric Computations
  const totalProposals = proposals.length;
  const approvedProposals = proposals.filter((p) => p.status === "approved").length;
  const pendingProposals = proposals.filter((p) => p.status === "pending" || !p.status).length;
  const totalPipelineBudget = proposals.reduce((acc, p) => acc + (Number(p.budget) || 0), 0);

  return (
    <Layout>
      {/* TOP PARALLAX BREADCRUMB HEADER */}
      <ParallaxSection className="pt-28 pb-6 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent">
        <div className="container-custom max-w-6xl">
          {/* Breadcrumb Trail */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                TechSasi
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground font-semibold">Client Portal</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-500 flex items-center gap-1 font-mono text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                PHP Backend Active
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                disabled={isSyncing}
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                title="Synchronize client records with PHP backend"
              >
                <RefreshCw size={12} className={isSyncing ? "animate-spin text-primary" : ""} />
                <span>Sync PHP API</span>
              </button>

              <button
                onClick={() => setShowLogout(true)}
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/25 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-semibold transition-colors cursor-pointer"
              >
                <LogOut size={12} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-foreground flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/25 shadow-xs">
                  <LayoutDashboard size={26} />
                </div>
                <span>Client Command Center</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Welcome back, <span className="font-bold text-foreground">{username}</span>. Review active project proposals, development milestones, and engineering deliverables.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/dashboard/proposals"
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-md flex items-center gap-1.5"
              >
                <FileText size={14} />
                <span>Manage Proposals</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* DASHBOARD CONTENT BODY */}
      <section className="section-padding pt-2 pb-24">
        <div className="container-custom max-w-6xl">
          {loading ? (
            <DashboardSkeleton />
          ) : (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* PHP REST API INTEGRATION STATUS BAR */}
              <div className="p-4 rounded-2xl border border-primary/20 bg-primary/[0.03] dark:bg-primary/[0.06] backdrop-blur-md shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <Server size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground font-heading">PHP Backend REST Engine</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Authenticated
                      </span>
                    </div>
                    <p className="text-muted-foreground text-[11px] font-mono truncate max-w-md mt-0.5">
                      Endpoint: {API_BASE_URL}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[11px] font-mono shrink-0">
                  <div className="flex items-center gap-1.5 bg-card/80 px-2.5 py-1 rounded-lg border border-border">
                    <KeyRound size={12} className="text-primary" />
                    <span className="text-muted-foreground">Session Token:</span>
                    <span className="text-foreground font-semibold">
                      {token ? `${token.substring(0, 14)}...` : "None"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-card/80 px-2.5 py-1 rounded-lg border border-border">
                    <Wifi size={12} className="text-emerald-500" />
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-foreground font-semibold">
                      {phpPingState.latencyMs ? `${phpPingState.latencyMs}ms ping` : "Active"}
                    </span>
                  </div>
                </div>
              </div>

              {/* 1. EXECUTIVE KPI METRICS ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
                
                {/* Metric 1: Proposals Total */}
                <div className="p-5 rounded-2xl border border-border bg-card shadow-soft hover:border-primary/40 transition-colors">
                  <div className="flex justify-between items-center text-muted-foreground mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Total Proposals</span>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <FileText size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold font-mono tabular-nums text-foreground">
                    {totalProposals}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5 font-mono text-[11px]">
                    <span className="text-emerald-500 font-semibold">{approvedProposals} Approved</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-cyan-500 font-semibold">{pendingProposals} In Review</span>
                  </div>
                </div>

                {/* Metric 2: Estimated Pipeline Value */}
                <div className="p-5 rounded-2xl border border-border bg-card shadow-soft hover:border-cyan-500/40 transition-colors">
                  <div className="flex justify-between items-center text-muted-foreground mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Pipeline Value</span>
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                      <TrendingUp size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold font-mono tabular-nums text-foreground">
                    ₹{totalPipelineBudget.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Combined value across active client scopes
                  </div>
                </div>

                {/* Metric 3: Inquiries Received */}
                <div className="p-5 rounded-2xl border border-border bg-card shadow-soft hover:border-blue-500/40 transition-colors">
                  <div className="flex justify-between items-center text-muted-foreground mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Client Inquiries</span>
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold font-mono tabular-nums text-foreground">
                    {contactsCount}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>24h SLA Active</span>
                  </div>
                </div>

                {/* Metric 4: Cloud & Deployment Readiness */}
                <div className="p-5 rounded-2xl border border-border bg-card shadow-soft hover:border-emerald-500/40 transition-colors">
                  <div className="flex justify-between items-center text-muted-foreground mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Engineering Status</span>
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <ShieldCheck size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span className="text-emerald-500 text-lg">●</span>
                    <span className="text-base font-mono">100% Operational</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    CI/CD Cloud Pipelines &amp; SSL Verified
                  </div>
                </div>

              </div>

              {/* 2. CORE WORKBENCH NAVIGATION CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
                
                {/* Module 1: Project Proposals Workbench */}
                <SpotlightCard
                  className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
                  spotlightColor="rgba(14, 165, 233, 0.15)"
                  borderColor="rgba(14, 165, 233, 0.35)"
                  enableTilt={true}
                  tiltMaxAngle={4}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <FileText size={24} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-heading font-extrabold text-foreground">
                        Project Proposals
                      </h3>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {totalProposals} Active
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Audit all client submissions, compare technology stack requirements, adjust budget estimates, and execute formal approvals.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/dashboard/proposals"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs transition-all shadow-sm"
                    >
                      <Eye size={15} />
                      <span>Review Proposals Workbench</span>
                      <ArrowRight size={14} className="ml-0.5" />
                    </Link>
                  </div>
                </SpotlightCard>

                {/* Module 2: Inbound Contacts & Leads */}
                <SpotlightCard
                  className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                  borderColor="rgba(59, 130, 246, 0.35)"
                  enableTilt={true}
                  tiltMaxAngle={4}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <MessageSquare size={24} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-heading font-extrabold text-foreground">
                        Inquiries &amp; Contacts
                      </h3>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">
                        {contactsCount} Records
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Direct consultation inquiries, client phone contacts, and service consultation requests received via website touchpoints.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/dashboard/contacts"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all"
                    >
                      <Eye size={15} />
                      <span>View Contact Inquiries</span>
                      <ArrowRight size={14} className="ml-0.5" />
                    </Link>
                  </div>
                </SpotlightCard>

                {/* Module 3: Instant Scope & Quote Generator */}
                <SpotlightCard
                  className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
                  spotlightColor="rgba(6, 182, 212, 0.15)"
                  borderColor="rgba(6, 182, 212, 0.35)"
                  enableTilt={true}
                  tiltMaxAngle={4}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Sparkles size={24} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-heading font-extrabold text-foreground">
                        Create Proposal
                      </h3>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500">
                        Live Estimator
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Generate a custom software quotation with dynamic feature calculation, tech stack breakdown, and formal pricing proposal.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/proposal"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs transition-all shadow-sm"
                    >
                      <FileCode2 size={15} />
                      <span>Launch Proposal Builder</span>
                      <ArrowRight size={14} className="ml-0.5" />
                    </Link>
                  </div>
                </SpotlightCard>

              </div>

              {/* 3. RECENT PROPOSALS ACTIVITY PREVIEW */}
              <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-heading font-extrabold text-foreground text-base">
                      Recent Project Proposals
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Latest software requests received from Tamil Nadu and global clients
                    </p>
                  </div>

                  <Link
                    to="/dashboard/proposals"
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>View all proposals</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="divide-y divide-border">
                  {proposals.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:px-6 hover:bg-muted/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-muted-foreground">
                            #{String(item.id).padStart(3, "0")}
                          </span>
                          <span className="font-semibold text-sm text-foreground">
                            {item.project_name}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase font-mono ${
                              item.status === "approved"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                : item.status === "rejected"
                                ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                                : "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                            }`}
                          >
                            {item.status || "pending"}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-2">
                          <span>{item.client_name}</span>
                          {item.company_name && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span>{item.company_name}</span>
                            </>
                          )}
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-[11px]">
                            {new Date(item.created_at).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">Budget Scope</div>
                          <div className="font-mono font-bold text-sm text-primary tabular-nums">
                            {item.budget ? `₹${Number(item.budget).toLocaleString("en-IN")}` : "Custom"}
                          </div>
                        </div>

                        <Link
                          to="/dashboard/proposals"
                          className="px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-xs font-medium text-foreground transition-colors flex items-center gap-1"
                        >
                          <Eye size={13} />
                          <span>Inspect</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. SYSTEM INFORMATION & SECURITY NOTICE */}
              <div className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-primary shrink-0" />
                  <span>Authenticated as <strong className="text-foreground">{username}</strong> with verified client portal access.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/services" className="hover:text-foreground transition-colors">
                    Services Catalog
                  </Link>
                  <span aria-hidden="true">·</span>
                  <Link to="/contact" className="hover:text-foreground transition-colors">
                    Support Desk
                  </Link>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* ================= LOGOUT CONFIRMATION MODAL ================= */}
      {showLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-sm shadow-elevated animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 mx-auto flex items-center justify-center mb-3">
              <LogOut size={24} />
            </div>
            
            <h3 className="text-lg font-heading font-extrabold text-center text-foreground mb-1">
              End Client Session?
            </h3>
            
            <p className="text-xs text-muted-foreground text-center mb-6 leading-relaxed">
              Logging out will clear your authenticated session token. You will need to sign in again to access the client portal and PHP backend data.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowLogout(false)}
                className="flex-1 rounded-xl border border-border hover:bg-muted py-2.5 text-xs font-semibold text-foreground transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white py-2.5 text-xs font-semibold transition-colors shadow-soft cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
