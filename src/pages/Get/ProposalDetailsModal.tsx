"use client";

import React from "react";
import {
  X,
  Building,
  User,
  Mail,
  Phone,
  Calendar,
  Layers,
  Clock,
  IndianRupee,
  CheckCircle,
  XCircle,
  Printer,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

export interface Proposal {
  id: number;
  client_name: string;
  company_name: string | null;
  email: string;
  phone: string;
  project_name: string;
  project_type: string | null;
  timeline: string | null;
  budget: string | null;
  description: string | null;
  features: string | null;
  created_at: string;
  status?: "pending" | "approved" | "rejected";
}

interface ProposalDetailsModalProps {
  proposal: Proposal;
  onClose: () => void;
  onStatusChange?: (id: number, status: "pending" | "approved" | "rejected") => void;
}

const ProposalDetailsModal: React.FC<ProposalDetailsModalProps> = ({
  proposal,
  onClose,
  onStatusChange,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `TechSasi Proposal #${proposal.id}
Client: ${proposal.client_name} (${proposal.company_name || "Individual"})
Project: ${proposal.project_name} (${proposal.project_type || "Custom Web/Software"})
Budget: ₹${proposal.budget || "TBD"}
Timeline: ${proposal.timeline || "Standard"}
Status: ${proposal.status || "pending"}
Contact: ${proposal.email} | ${proposal.phone}`;

    navigator.clipboard.writeText(text);
    toast.success("Proposal summary copied to clipboard");
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-card border border-border w-full max-w-2xl rounded-2xl shadow-elevated overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* ================= HEADER ================= */}
        <div className="border-b border-border px-6 py-4 flex justify-between items-start gap-4 bg-muted/30">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                #{String(proposal.id).padStart(3, "0")}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase font-mono tracking-wider ${
                  proposal.status === "approved"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                    : proposal.status === "rejected"
                    ? "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                    : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                }`}
              >
                {proposal.status || "pending"}
              </span>
            </div>
            
            <h2 className="text-xl font-heading font-bold text-foreground">
              {proposal.project_name}
            </h2>
            <p className="text-xs text-muted-foreground">
              Received on {new Date(proposal.created_at).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="Print Proposal"
            >
              <Printer size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="Close Dialog"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* 1. FINANCIAL & TIMELINE SUMMARY CALLOUT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                <IndianRupee size={12} className="text-primary" />
                Budget Scope
              </span>
              <p className="text-lg font-bold font-mono text-primary tabular-nums mt-0.5">
                {proposal.budget ? `₹${Number(proposal.budget).toLocaleString("en-IN")}` : "Custom Quote"}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                <Clock size={12} className="text-amber-500" />
                Estimated Timeline
              </span>
              <p className="text-sm font-semibold text-foreground mt-1">
                {proposal.timeline || "20-30 Days"}
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                <Layers size={12} className="text-blue-500" />
                Architecture
              </span>
              <p className="text-sm font-semibold text-foreground mt-1 truncate">
                {proposal.project_type || "Full-Stack Web/App"}
              </p>
            </div>
          </div>

          {/* 2. CLIENT INFORMATION */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <User size={13} />
              Client Dossier
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Primary Contact</span>
                <span className="font-semibold text-sm text-foreground">{proposal.client_name}</span>
              </div>

              <div className="p-3 rounded-lg border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Company / Organization</span>
                <span className="font-semibold text-sm text-foreground">
                  {proposal.company_name || "Individual / Independent Client"}
                </span>
              </div>

              <div className="p-3 rounded-lg border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Email Address</span>
                <a
                  href={`mailto:${proposal.email}`}
                  className="font-medium text-primary hover:underline flex items-center gap-1 break-all"
                >
                  <Mail size={12} />
                  <span>{proposal.email}</span>
                </a>
              </div>

              <div className="p-3 rounded-lg border border-border bg-card">
                <span className="text-muted-foreground block text-[11px]">Direct Phone / WhatsApp</span>
                <a
                  href={`tel:${proposal.phone}`}
                  className="font-mono font-medium text-foreground hover:text-primary flex items-center gap-1"
                >
                  <Phone size={12} />
                  <span>{proposal.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3. PROJECT REQUIREMENTS & DESCRIPTION */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Scope of Work & Requirements
            </h3>

            <div className="p-4 rounded-xl bg-card border border-border text-sm leading-relaxed text-foreground whitespace-pre-line">
              {proposal.description || "Client requested standard bespoke development with full mobile responsiveness, SEO optimization, and secure API backend."}
            </div>
          </div>

          {/* 4. SELECTED SYSTEM FEATURES */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
              <Sparkles size={13} className="text-amber-500" />
              Included Technical Modules & Features
            </h3>

            {proposal.features ? (
              <div className="flex flex-wrap gap-1.5">
                {proposal.features.split(",").map((feature, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-secondary text-foreground text-xs font-medium border border-border"
                  >
                    {feature.trim()}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground italic">
                Standard deliverables package (Production Deployment, Custom UI/UX, Cloud DB setup).
              </p>
            )}
          </div>

        </div>

        {/* ================= FOOTER / STATUS ACTIONS ================= */}
        <div className="border-t border-border px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-muted/20">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopySummary}
              className="text-xs font-medium px-3 py-2 rounded-xl border border-border hover:bg-muted text-foreground transition-colors w-full sm:w-auto"
            >
              Copy Summary
            </button>
          </div>

          {/* Administrative Status Approval Controls */}
          {onStatusChange && (
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => {
                  onStatusChange(proposal.id, "rejected");
                  onClose();
                }}
                disabled={proposal.status === "rejected"}
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  proposal.status === "rejected"
                    ? "opacity-50 cursor-not-allowed bg-red-500/10 text-red-500"
                    : "border border-red-500/30 text-red-500 hover:bg-red-500/10"
                }`}
              >
                <XCircle size={14} />
                <span>Mark Rejected</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onStatusChange(proposal.id, "approved");
                  onClose();
                }}
                disabled={proposal.status === "approved"}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  proposal.status === "approved"
                    ? "opacity-50 cursor-not-allowed bg-emerald-500/10 text-emerald-500"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft"
                }`}
              >
                <CheckCircle size={14} />
                <span>Approve Proposal</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalDetailsModal;
