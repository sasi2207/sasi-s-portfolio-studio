"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Skeleton } from "@/components/ui/skeleton";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "sonner";
import ProposalDetailsModal, { Proposal } from "./ProposalDetailsModal";
import {
  FileText,
  Search,
  ArrowUpDown,
  Filter,
  CheckCircle,
  XCircle,
  Eye,
  RefreshCw,
  TrendingUp,
  Download,
  IndianRupee,
  Layers,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Building,
  User,
  Calendar,
  Sparkles,
  Inbox,
} from "lucide-react";

/* ================= API ================= */
const API_URL = "https://techsasi.com/Rakshan/api/get-proposal.php";

const DEFAULT_PROPOSALS: Proposal[] = [
  {
    id: 1,
    client_name: "Dr. Ramesh Babu",
    company_name: "Apex Healthcare Systems",
    email: "ramesh@apexhealth.in",
    phone: "+91 94441 23456",
    project_name: "Hospital Patient Portal & Telemedicine",
    project_type: "Dynamic Web Application",
    timeline: "~24 Business Days",
    budget: "68000",
    description:
      "Doctor appointment scheduling, HIPAA-ready patient health records, and Razorpay OPD payment gateway integration.",
    features: "Custom Responsive UI/UX, Executive Admin Dashboard, Role-Based Auth, AWS Cloud Deploy",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "approved",
  },
  {
    id: 2,
    client_name: "Meenakshi Sundaram",
    company_name: "Tamil Nadu Agro Exports",
    email: "meena@tnagro.com",
    phone: "+91 98840 98765",
    project_name: "B2B Export Logistics & Inventory Suite",
    project_type: "Custom ERP & CRM Enterprise Suite",
    timeline: "~38 Business Days",
    budget: "115000",
    description:
      "Warehouse pallet tracking, GST invoice generator, multi-currency support, and container dispatch logistics.",
    features: "PostgreSQL Database, Decoupled APIs, Automated PDF & Excel Reporting, WhatsApp Alerts",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    status: "pending",
  },
  {
    id: 3,
    client_name: "Karthikeyan Venkat",
    company_name: "Zenith Retail Solutions",
    email: "karthik@zenithretail.com",
    phone: "+91 91234 56789",
    project_name: "Multi-Store Omni-Channel Commerce & POS",
    project_type: "Ecommerce & Billing System",
    timeline: "~30 Business Days",
    budget: "95000",
    description:
      "Integrated POS billing, barcode barcode reader synchronization, cloud inventory sync across 3 branch outlets.",
    features: "Realtime Inventory Webhook, Offline Billing Mode, Thermal Receipt Print, Staff Roles",
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
    status: "pending",
  },
  {
    id: 4,
    client_name: "Ananya S.",
    company_name: "CloudBridge Global Education",
    email: "ananya@cloudbridge.io",
    phone: "+91 98765 43210",
    project_name: "Student LMS Portal & Course Enrollment",
    project_type: "Learning Management Platform",
    timeline: "~20 Business Days",
    budget: "55000",
    description:
      "Video course streaming, student progress tracking, automated completion certificates, and test assessment engine.",
    features: "Video CDN Hosting, Automated Certificates, Razorpay Subscription, Quiz Engine",
    created_at: new Date(Date.now() - 86400000 * 6).toISOString(),
    status: "approved",
  },
];

/* ================= SKELETON LOADER COMPONENT ================= */
export const ProposalTableSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* 4 Stat Cards Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 rounded-xl border border-border bg-card space-y-2">
            <Skeleton className="h-3 w-20 rounded" />
            <Skeleton className="h-7 w-24 rounded" />
            <Skeleton className="h-2 w-32 rounded" />
          </div>
        ))}
      </div>

      {/* Filter and Search Bar Skeleton */}
      <div className="p-4 rounded-xl border border-border bg-card flex flex-col md:flex-row gap-3 justify-between items-center">
        <Skeleton className="h-10 w-full md:w-80 rounded-xl" />
        <div className="flex gap-2 w-full md:w-auto">
          <Skeleton className="h-10 w-36 rounded-xl" />
          <Skeleton className="h-10 w-36 rounded-xl" />
        </div>
      </div>

      {/* Table Skeleton (Desktop) */}
      <div className="hidden md:block rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        <div className="h-12 border-b border-border bg-muted/30 flex items-center px-6 gap-6">
          <Skeleton className="h-4 w-12 rounded" />
          <Skeleton className="h-4 w-36 rounded" />
          <Skeleton className="h-4 w-48 rounded" />
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-24 rounded ml-auto" />
        </div>
        <div className="divide-y divide-border">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-4 px-6 flex items-center gap-6">
              <Skeleton className="h-4 w-10 rounded font-mono" />
              <div className="space-y-1.5 w-44">
                <Skeleton className="h-4 w-32 rounded" />
                <Skeleton className="h-3 w-24 rounded" />
              </div>
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-4 w-48 rounded" />
                <Skeleton className="h-3 w-28 rounded" />
              </div>
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-20 rounded font-mono" />
              <div className="flex gap-2 ml-auto">
                <Skeleton className="h-8 w-16 rounded-lg" />
                <Skeleton className="h-8 w-16 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card Stack Skeleton */}
      <div className="grid gap-3 md:hidden">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 rounded-xl border border-border bg-card space-y-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-12 rounded" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
            <Skeleton className="h-5 w-48 rounded" />
            <Skeleton className="h-4 w-32 rounded" />
            <div className="flex justify-between items-center pt-2">
              <Skeleton className="h-5 w-20 rounded" />
              <Skeleton className="h-8 w-24 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ================= STATUS PILL ================= */
const StatusBadge = ({ status = "pending" }: { status?: string }) => {
  const styles: Record<string, { bg: string; text: string; border: string; label: string }> = {
    approved: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-500/20",
      label: "Approved",
    },
    rejected: {
      bg: "bg-red-500/10",
      text: "text-red-600 dark:text-red-400",
      border: "border-red-500/20",
      label: "Rejected",
    },
    pending: {
      bg: "bg-amber-500/10",
      text: "text-amber-600 dark:text-amber-400",
      border: "border-amber-500/20",
      label: "Pending Review",
    },
  };

  const current = styles[status] || styles.pending;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono uppercase tracking-wider border ${current.bg} ${current.text} ${current.border}`}
    >
      {current.label}
    </span>
  );
};

/* ================= COMPONENT ================= */
const ProposalsPage: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Proposal | null>(null);

  const [sortBy, setSortBy] = useState<
    "date-desc" | "date-asc" | "budget-asc" | "budget-desc"
  >("date-desc");

  const PER_PAGE = 6;

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    const fetchProposals = async () => {
      try {
        const res = await fetch(API_URL);
        if (res.ok) {
          const json = await res.json();
          if (json?.success && Array.isArray(json.data) && json.data.length > 0) {
            setProposals(
              json.data.map((p: any) => ({
                ...p,
                status: p.status || "pending",
              }))
            );
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("Using local proposals store:", err);
      }

      // Local storage fallback
      try {
        const raw = localStorage.getItem("techsasi_proposals");
        if (raw) {
          const list = JSON.parse(raw);
          if (Array.isArray(list) && list.length > 0) {
            setProposals(list);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        void e;
      }

      setProposals(DEFAULT_PROPOSALS);
      setLoading(false);
    };

    fetchProposals();
  }, []);

  /* ================= SIMULATE REFRESH / SKELETON ================= */
  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Proposals updated successfully");
    }, 600);
  };

  /* ================= STATUS UPDATE ================= */
  const updateStatus = (id: number, status: Proposal["status"]) => {
    setProposals((prev) => {
      const updated = prev.map((p) => (p.id === id ? { ...p, status } : p));
      localStorage.setItem("techsasi_proposals", JSON.stringify(updated));
      return updated;
    });

    if (selected && selected.id === id) {
      setSelected((prev) => (prev ? { ...prev, status } : null));
    }

    if (status === "approved") {
      toast.success(`Proposal #${id} approved! Client notified.`);
    } else {
      toast.error(`Proposal #${id} rejected.`);
    }
  };

  /* ================= FILTERING ================= */
  const filtered = useMemo(() => {
    return proposals.filter((p) => {
      const matchesSearch =
        `${p.client_name} ${p.project_name} ${p.email} ${p.company_name || ""} ${p.features || ""}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ? true : (p.status || "pending") === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [proposals, search, statusFilter]);

  /* ================= SORTING ================= */
  const sorted = useMemo(() => {
    const arr = [...filtered];

    if (sortBy === "date-desc") {
      arr.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (sortBy === "date-asc") {
      arr.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (sortBy === "budget-asc") {
      arr.sort((a, b) => Number(a.budget || 0) - Number(b.budget || 0));
    } else if (sortBy === "budget-desc") {
      arr.sort((a, b) => Number(b.budget || 0) - Number(a.budget || 0));
    }

    return arr;
  }, [filtered, sortBy]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));
  const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  /* ================= METRIC TOTALS ================= */
  const counts = useMemo(() => {
    const total = proposals.length;
    const pending = proposals.filter((p) => (p.status || "pending") === "pending").length;
    const approved = proposals.filter((p) => p.status === "approved").length;
    const rejected = proposals.filter((p) => p.status === "rejected").length;
    const totalBudget = proposals.reduce(
      (acc, p) => acc + (Number(p.budget) || 0),
      0
    );

    return { total, pending, approved, rejected, totalBudget };
  }, [proposals]);

  const handleExportCSV = () => {
    const headers = ["ID", "Client", "Company", "Email", "Phone", "Project", "Budget", "Status", "Date"];
    const rows = proposals.map((p) => [
      p.id,
      `"${p.client_name}"`,
      `"${p.company_name || ""}"`,
      p.email,
      p.phone,
      `"${p.project_name}"`,
      p.budget || "0",
      p.status || "pending",
      new Date(p.created_at).toLocaleDateString(),
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `techsasi_proposals_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Proposals exported to CSV");
  };

  return (
    <Layout>
      {/* TOP HEADER */}
      <ParallaxSection className="pt-28 pb-6 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent">
        <div className="container-custom max-w-6xl">
          {/* Breadcrumb Trail */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                TechSasi
              </Link>
              <span aria-hidden="true">/</span>
              <Link to="/dashboard" className="hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground font-medium">Proposals Workbench</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title="Simulate refreshing data with skeleton loader"
              >
                <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
                <span>Simulate Reload</span>
              </button>

              <button
                onClick={handleExportCSV}
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-colors"
              >
                <Download size={12} />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-heading font-bold tracking-tight text-foreground flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <FileText size={26} />
                </div>
                <span>Project Proposals Workbench</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Audit client requirements, approve scopes of work, and track pricing pipelines across dynamic web, mobile app, and ERP inquiries.
              </p>
            </div>

            <Link
              to="/proposal"
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-soft flex items-center gap-1.5 self-start md:self-auto"
            >
              <PlusCircle size={14} />
              <span>Create New Proposal</span>
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* MAIN CONTENT SECTION */}
      <section className="section-padding pt-2 pb-20">
        <div className="container-custom max-w-6xl space-y-6">

          {/* 1. TOP PIPELINE METRIC STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4" data-aos="fade-up">
            <div className="p-4 rounded-xl border border-border bg-card shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Total Submissions
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-foreground">
                {counts.total}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                All client proposals
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Pipeline Value
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-primary">
                ₹{counts.totalBudget.toLocaleString("en-IN")}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                Combined scope value
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Pending Review
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-amber-500">
                {counts.pending}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                Awaiting sign-off
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Approved Deals
              </div>
              <div className="text-2xl font-bold font-mono tabular-nums text-emerald-500">
                {counts.approved}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                Ready for staging
              </div>
            </div>
          </div>

          {/* 2. SEARCH & SEGMENTED FILTER CONTROLS */}
          <div className="p-4 rounded-xl border border-border bg-card shadow-soft space-y-4" data-aos="fade-up">
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="text"
                  placeholder="Search by client, project name, company, or tech stack..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ArrowUpDown size={14} />
                  <span className="hidden sm:inline">Sort:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 rounded-xl border border-input bg-background text-xs font-medium text-foreground focus:ring-2 focus:ring-primary/40 outline-none cursor-pointer"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="budget-desc">Budget: High → Low</option>
                  <option value="budget-asc">Budget: Low → High</option>
                </select>
              </div>

            </div>

            {/* Segmented Filter Buttons (Compliant with frontend-design rule A: Interactive buttons with click handlers) */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-border">
              <span className="text-xs text-muted-foreground mr-1.5 flex items-center gap-1">
                <Filter size={12} />
                Status:
              </span>

              <button
                type="button"
                onClick={() => {
                  setStatusFilter("all");
                  setPage(1);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  statusFilter === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                All Proposals ({counts.total})
              </button>

              <button
                type="button"
                onClick={() => {
                  setStatusFilter("pending");
                  setPage(1);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  statusFilter === "pending"
                    ? "bg-amber-500 text-zinc-950 font-semibold shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Pending Review ({counts.pending})
              </button>

              <button
                type="button"
                onClick={() => {
                  setStatusFilter("approved");
                  setPage(1);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  statusFilter === "approved"
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Approved ({counts.approved})
              </button>

              <button
                type="button"
                onClick={() => {
                  setStatusFilter("rejected");
                  setPage(1);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  statusFilter === "rejected"
                    ? "bg-red-500 text-white font-semibold shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                Rejected ({counts.rejected})
              </button>

              {statusFilter !== "all" && (
                <button
                  onClick={() => setStatusFilter("all")}
                  className="text-xs text-primary hover:underline ml-auto"
                >
                  Reset Status
                </button>
              )}
            </div>
          </div>

          {/* 3. PROPOSALS DATA TABLE / SKELETON */}
          {loading ? (
            <ProposalTableSkeleton />
          ) : sorted.length === 0 ? (
            /* EMPTY STATE */
            <div className="p-12 text-center rounded-2xl border border-dashed border-border bg-card space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <Inbox size={24} />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">
                No Proposals Found
              </h3>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                No project proposals match the search query &quot;{search}&quot; with filter &quot;{statusFilter}&quot;.
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("all");
                  }}
                  className="px-3 py-2 rounded-xl border border-border text-xs font-medium hover:bg-muted"
                >
                  Clear Filters
                </button>
                <Link
                  to="/proposal"
                  className="px-3 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium"
                >
                  Submit New Proposal
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* DESKTOP HIGH-DENSITY TABLE */}
              <div className="hidden md:block rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/40 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <th className="py-3 px-4 w-16">ID</th>
                      <th className="py-3 px-4">Client & Company</th>
                      <th className="py-3 px-4">Project Scope</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Estimated Budget</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    {paginated.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-muted/30 transition-colors group"
                      >
                        {/* ID */}
                        <td className="py-3.5 px-4 font-mono font-bold text-xs text-muted-foreground">
                          #{String(item.id).padStart(3, "0")}
                        </td>

                        {/* CLIENT */}
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                            <User size={13} className="text-muted-foreground" />
                            <span>{item.client_name}</span>
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                            {item.company_name ? (
                              <span className="flex items-center gap-1 truncate max-w-[180px]">
                                <Building size={11} />
                                {item.company_name}
                              </span>
                            ) : (
                              <span>Independent</span>
                            )}
                            <span aria-hidden="true">·</span>
                            <span className="text-[11px] truncate max-w-[150px]">{item.email}</span>
                          </div>
                        </td>

                        {/* PROJECT */}
                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="font-medium text-foreground text-sm line-clamp-1">
                            {item.project_name}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Layers size={11} />
                            <span>{item.project_type || "Custom Web App"}</span>
                            {item.timeline && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span>{item.timeline}</span>
                              </>
                            )}
                          </div>
                        </td>

                        {/* STATUS */}
                        <td className="py-3.5 px-4">
                          <StatusBadge status={item.status} />
                        </td>

                        {/* BUDGET */}
                        <td className="py-3.5 px-4 font-mono font-bold text-primary tabular-nums">
                          {item.budget ? `₹${Number(item.budget).toLocaleString("en-IN")}` : "Custom Quote"}
                        </td>

                        {/* DATE */}
                        <td className="py-3.5 px-4 text-xs text-muted-foreground font-mono">
                          {new Date(item.created_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>

                        {/* ACTIONS */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() => setSelected(item)}
                              className="px-2.5 py-1.5 rounded-lg border border-border hover:bg-muted text-xs font-medium text-foreground transition-colors flex items-center gap-1"
                              title="Inspect full proposal details"
                            >
                              <Eye size={13} />
                              <span>View</span>
                            </button>

                            <button
                              type="button"
                              disabled={item.status === "approved"}
                              onClick={() => updateStatus(item.id, "approved")}
                              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                item.status === "approved"
                                  ? "opacity-40 cursor-not-allowed bg-emerald-500/10 text-emerald-500"
                                  : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft"
                              }`}
                              title="Approve Proposal"
                            >
                              Approve
                            </button>

                            <button
                              type="button"
                              disabled={item.status === "rejected"}
                              onClick={() => updateStatus(item.id, "rejected")}
                              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                item.status === "rejected"
                                  ? "opacity-40 cursor-not-allowed bg-red-500/10 text-red-500"
                                  : "border border-red-500/30 text-red-500 hover:bg-red-500/10"
                              }`}
                              title="Reject Proposal"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE RESPONSIVE CARDS */}
              <div className="grid gap-3 md:hidden">
                {paginated.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-border bg-card shadow-soft space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-muted-foreground">
                          #{String(item.id).padStart(3, "0")}
                        </span>
                        <StatusBadge status={item.status} />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">
                        {new Date(item.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-foreground text-sm">
                        {item.project_name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Client: <strong className="text-foreground">{item.client_name}</strong>
                        {item.company_name ? ` · ${item.company_name}` : ""}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-border">
                      <div className="text-xs">
                        <span className="text-muted-foreground block text-[10px]">Estimated Budget</span>
                        <span className="font-mono font-bold text-sm text-primary tabular-nums">
                          {item.budget ? `₹${Number(item.budget).toLocaleString("en-IN")}` : "Custom Quote"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelected(item)}
                          className="px-2.5 py-1.5 rounded-lg border border-border bg-secondary text-foreground text-xs font-medium"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          disabled={item.status === "approved"}
                          onClick={() => updateStatus(item.id, "approved")}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                            item.status === "approved"
                              ? "opacity-50 bg-emerald-500/10 text-emerald-500"
                              : "bg-emerald-600 text-white"
                          }`}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4. PAGINATION FOOTER */}
              <div className="p-4 rounded-xl border border-border bg-card flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                <div>
                  Showing <strong className="text-foreground">{(page - 1) * PER_PAGE + 1}</strong> to{" "}
                  <strong className="text-foreground">
                    {Math.min(page * PER_PAGE, sorted.length)}
                  </strong>{" "}
                  of <strong className="text-foreground">{sorted.length}</strong> proposals
                </div>

                <div className="flex items-center gap-1">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="p-1.5 rounded-lg border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`min-w-8 h-8 rounded-lg text-xs font-medium font-mono transition-colors ${
                        page === i + 1
                          ? "bg-primary text-primary-foreground font-bold shadow-soft"
                          : "border border-border hover:bg-muted text-foreground"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className="p-1.5 rounded-lg border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
                    aria-label="Next Page"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* MODAL DIALOG */}
      {selected && (
        <ProposalDetailsModal
          proposal={selected}
          onClose={() => setSelected(null)}
          onStatusChange={updateStatus}
        />
      )}
    </Layout>
  );
};

export default ProposalsPage;
