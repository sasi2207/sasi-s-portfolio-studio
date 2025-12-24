"use client";

import React from "react";

/* ================= TYPES ================= */
interface Proposal {
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

/* ================= STATUS BADGE ================= */
const StatusBadge = ({ status = "pending" }: { status?: string }) => {
  const styles: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status.toUpperCase()}
    </span>
  );
};

/* ================= MODAL ================= */
const ProposalDetailsModal = ({
  proposal,
  onClose
}: {
  proposal: Proposal;
  onClose: () => void;
}) => {
  return (
   <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center px-4">
  <div className="bg-background w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden">
   
        {/* ================= HEADER ================= */}
        <div className="border-b px-6 py-4 flex justify-between items-start gap-4">
          <div>
            <h2 className="text-xl font-bold leading-tight">
              {proposal.project_name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Proposal ID #{proposal.id}
            </p>
          </div>

          <StatusBadge status={proposal.status} />
        </div>

        {/* ================= BODY ================= */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">

          {/* CLIENT INFO */}
          <section>
            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
              CLIENT INFORMATION
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Client Name</p>
                <p className="font-medium">{proposal.client_name}</p>
              </div>

              <div>
                <p className="text-muted-foreground">Company</p>
                <p className="font-medium">
                  {proposal.company_name || "-"}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium break-all">
                  {proposal.email}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="font-medium">{proposal.phone}</p>
              </div>
            </div>
          </section>

          {/* PROJECT DETAILS */}
          <section>
            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
              PROJECT DETAILS
            </h3>

            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Type</p>
                <p className="font-medium">
                  {proposal.project_type || "-"}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">Timeline</p>
                <p className="font-medium">
                  {proposal.timeline || "-"}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">Budget</p>
                <p className="font-semibold text-primary">
                  {proposal.budget ? `₹${proposal.budget}` : "-"}
                </p>
              </div>
            </div>
          </section>

          {/* DESCRIPTION */}
          <section>
            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
              DESCRIPTION
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {proposal.description || "No description provided."}
            </p>
          </section>

          {/* FEATURES */}
          <section>
            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
              FEATURES
            </h3>

            {proposal.features ? (
              <div className="flex flex-wrap gap-2">
                {proposal.features.split(",").map(feature => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                  >
                    {feature.trim()}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No features selected.
              </p>
            )}
          </section>

          {/* META */}
          <section>
            <h3 className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
              META
            </h3>

            <p className="text-xs text-muted-foreground">
              Submitted on{" "}
              {new Date(proposal.created_at).toLocaleString()}
            </p>
          </section>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="border-t px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetailsModal;
