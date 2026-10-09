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
} from "lucide-react";
import { toast } from "sonner";

interface ProposalSummary {
  id: number;
  client_name: string;
  company_name: string | null;
  project_name: string;
  budget: string | null;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

const DEFAULT_PROPOSALS: ProposalSummary[] = [
  {
    id: 1,
    client_name: "Dr. Ramesh Babu",
    company_name: "Apex Healthcare Systems",
    project_name: "Hospital Patient Portal & Telemedicine",
    budget: "68000",
    status: "approved",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 2,
    client_name: "Meenakshi Sundaram",
    company_name: "Tamil Nadu Agro Exports",
    project_name: "B2B Export Logistics & Inventory Suite",
    budget: "115000",
    status: "pending",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
];

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
  const username = localStorage.getItem("username") || "techsasi_admin";
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);
  const [proposals, setProposals] = useState<ProposalSummary[]>(DEFAULT_PROPOSALS);
  const [contactsCount, setContactsCount] = useState<number>(2);
  const [showLogout, setShowLogout] = useState(false);

  /* ---------------- AUTH CHECK ---------------- */
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });

    if (!token) {
      toast.error("Please login to access the dashboard");
      navigate("/login");
      return;
    }

    // Load persisted proposals or mock
    const loadDashboardData = () => {
      try {
        const rawProposals = localStorage.getItem("techsasi_proposals");
        if (rawProposals) {
          const parsed = JSON.parse(rawProposals);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setProposals(parsed);
          }
        }

        const rawContacts = localStorage.getItem("techsasi_contacts");
        if (rawContacts) {
          const parsed = JSON.parse(rawContacts);
          if (Array.isArray(parsed)) {
            setContactsCount(parsed.length);
          }
        }
      } catch (e) {
        console.warn("Local storage parse note:", e);
      }
    };

    loadDashboardData();

    // Initial brief skeleton delay for a polished entrance transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [token, navigate]);

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    sessionStorage.setItem("techsasi_explicit_logout", "true");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    toast.success("Signed out successfully");
    navigate("/login");
  };

  /* ---------------- SIMULATE REFRESH ---------------- */
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Dashboard metrics synchronized");
    }, 700);
  };

  // Metric Computations
  const totalProposals = proposals.length;
  const approvedProposals = proposals.filter((p) => p.status === "approved").length;
  const pendingProposals = proposals.filter((p) => p.status === "pending" || !p.status).length;
  const totalPipelineBudget = proposals.reduce((acc, p) => acc + (Number(p.budget) || 0), 0);

  return (
    <Layout>
      {/* TOP PARALLAX BREADCRUMB HEADER */}
      <ParallaxSection className="pt-28 pb-6 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent">
        <div className="container-custom max-w-6xl">
          {/* Breadcrumb Trail */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                TechSasi
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground font-medium">Executive Dashboard</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-500 flex items-center gap-1 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                Live Session
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title="Reload dashboard data with skeleton animation"
              >
                <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
                <span>Synchronize Data</span>
              </button>

              <button
                onClick={() => setShowLogout(true)}
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-medium transition-colors"
              >
                <LogOut size={12} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-heading font-bold tracking-tight text-foreground flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <LayoutDashboard size={26} />
                </div>
                <span>Executive Command Center</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Welcome back, <span className="font-semibold text-foreground">{username}</span>. Review current project estimates, client inquiries, and production pipelines.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/dashboard/proposals"
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-soft flex items-center gap-1.5"
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
      <section className="section-padding pt-2 pb-20">
        <div className="container-custom max-w-6xl">
          {loading ? (
            <DashboardSkeleton />
          ) : (
            <div className="space-y-8 animate-in fade-in duration-300">
              
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
                  <div className="text-2xl font-bold font-mono tabular-nums text-foreground">
                    {totalProposals}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                    <span className="text-emerald-500 font-medium font-mono">{approvedProposals} Approved</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-500 font-medium font-mono">{pendingProposals} Review</span>
                  </div>
                </div>

                {/* Metric 2: Estimated Pipeline Value */}
                <div className="p-5 rounded-2xl border border-border bg-card shadow-soft hover:border-accent/40 transition-colors">
                  <div className="flex justify-between items-center text-muted-foreground mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Pipeline Value</span>
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                      <TrendingUp size={16} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-foreground">
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
                  <div className="text-2xl font-bold font-mono tabular-nums text-foreground">
                    {contactsCount}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>24h Response SLA Active</span>
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
                    CI/CD Cloud Pipelines & SSL Verified
                  </div>
                </div>

              </div>

              {/* 2. CORE WORKBENCH NAVIGATION CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
                
                {/* Module 1: Project Proposals Workbench */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <FileText size={24} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-heading font-bold text-foreground">
                        Project Proposals
                      </h3>
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
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
                </div>

                {/* Module 2: Inbound Contacts & Leads */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <MessageSquare size={24} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-heading font-bold text-foreground">
                        Inquiries & Contacts
                      </h3>
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">
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
                </div>

                {/* Module 3: Instant Scope & Quote Generator */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Sparkles size={24} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-heading font-bold text-foreground">
                        Create Proposal
                      </h3>
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500">
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
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold text-xs transition-all shadow-sm"
                    >
                      <FileCode2 size={15} />
                      <span>Launch Proposal Builder</span>
                      <ArrowRight size={14} className="ml-0.5" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* 3. RECENT PROPOSALS ACTIVITY PREVIEW */}
              <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-heading font-bold text-foreground text-base">
                      Recent Project Proposals
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Latest software requests received from Tamil Nadu and global clients
                    </p>
                  </div>

                  <Link
                    to="/dashboard/proposals"
                    className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
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
                            className={`px-2 py-0.5 rounded-full text-[10px] font-medium uppercase font-mono ${
                              item.status === "approved"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                : item.status === "rejected"
                                ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
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
                  <span>Authenticated as <strong className="text-foreground">{username}</strong> with administrative privileges.</span>
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
            
            <h3 className="text-lg font-heading font-bold text-center text-foreground mb-1">
              Confirm Logout
            </h3>
            
            <p className="text-xs text-muted-foreground text-center mb-6 leading-relaxed">
              Are you sure you want to end your current administrative session? You will need to log in again to access client proposals.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowLogout(false)}
                className="flex-1 rounded-xl border border-border hover:bg-muted py-2.5 text-xs font-semibold text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={logout}
                className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 text-white py-2.5 text-xs font-semibold transition-colors shadow-soft"
              >
                End Session
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
