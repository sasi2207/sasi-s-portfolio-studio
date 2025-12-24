"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProposalDetailsModal from "./ProposalDetailsModal";

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

interface ApiResponse {
  success: boolean;
  data: Proposal[];
}

/* ================= API ================= */
const API = {
  GET: "https://techsasi.com/Rakshan/api/get-proposal.php"
};

/* ================= STATUS BADGE ================= */
const StatusBadge = ({ status = "pending" }: { status?: string }) => {
  const map: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}>
      {status.toUpperCase()}
    </span>
  );
};

/* ================= COMPONENT ================= */
const ProposalsPage: React.FC = () => {
  const userRole: "admin" | "viewer" = "admin";

  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Proposal | null>(null);

  const [sortBy, setSortBy] = useState<
    "date-desc" | "date-asc" | "budget-asc" | "budget-desc"
  >("date-desc");

  const PER_PAGE = 5;

  /* ================= INIT ================= */
  useEffect(() => {
    AOS.init({ duration: 600, once: true });

    fetch(API.GET)
      .then(res => res.json())
      .then((res: ApiResponse) => {
        if (res.success) {
          setProposals(
            res.data.map(p => ({
              ...p,
              status: p.status || "pending"
            }))
          );
        } else toast.error("Failed to load proposals");
      })
      .catch(() => toast.error("Server error"))
      .finally(() => setLoading(false));
  }, []);

  /* ================= FILTER ================= */
  const filtered = useMemo(() => {
    return proposals.filter(p =>
      `${p.client_name} ${p.project_name} ${p.email}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [proposals, search]);

  /* ================= SORT ================= */
  const sorted = useMemo(() => {
    const arr = [...filtered];

    if (sortBy === "date-desc") {
      arr.sort(
        (a, b) =>
          new Date(b.created_at).getTime() -
          new Date(a.created_at).getTime()
      );
    }

    if (sortBy === "date-asc") {
      arr.sort(
        (a, b) =>
          new Date(a.created_at).getTime() -
          new Date(b.created_at).getTime()
      );
    }

    if (sortBy === "budget-asc") {
      arr.sort(
        (a, b) =>
          Number(a.budget || 0) - Number(b.budget || 0)
      );
    }

    if (sortBy === "budget-desc") {
      arr.sort(
        (a, b) =>
          Number(b.budget || 0) - Number(a.budget || 0)
      );
    }

    return arr;
  }, [filtered, sortBy]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const paginated = sorted.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  /* ================= STATUS UPDATE ================= */
  const updateStatus = (id: number, status: Proposal["status"]) => {
    setProposals(prev =>
      prev.map(p =>
        p.id === id ? { ...p, status } : p
      )
    );
    toast.success(`Proposal marked as ${status}`);
  };

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={2500} />

      {/* HERO */}
      <ParallaxSection className="pt-32 ">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Project <span className="gradient-text">Proposals</span>
          </h1>
          <p className="text-muted-foreground">
            Sort, review and approve proposals
          </p>
        </div>
      </ParallaxSection>

      {/* CONTENT */}
      <section className="section-padding">
        <div className="container-custom space-y-6">

          {/* SEARCH + SORT */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="input-field w-full md:w-1/2"
              placeholder="Search proposals..."
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="input-field md:w-1/4"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="budget-desc">Budget High → Low</option>
              <option value="budget-asc">Budget Low → High</option>
            </select>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden md:block card-hover p-6" data-aos="fade-up">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th>ID</th>
                  <th>Client</th>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Budget</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={7} className="text-center py-6">
                      Loading...
                    </td>
                  </tr>
                )}

                {!loading &&
                  paginated.map(p => (
                    <tr
                      key={p.id}
                      className="border-b hover:bg-muted/30"
                    >
                      <td>#{p.id}</td>
                      <td>
                        <div className="font-medium">{p.client_name}</div>
                        <div className="text-xs">{p.email}</div>
                      </td>
                      <td>{p.project_name}</td>
                      <td><StatusBadge status={p.status} /></td>
                      <td className="font-semibold text-primary">
                        {p.budget ? `₹${p.budget}` : "-"}
                      </td>
                      <td>
                        {new Date(p.created_at).toLocaleDateString()}
                      </td>

                      <td className="flex gap-2 flex-wrap">
                        <button
                          className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200"
                          onClick={() => setSelected(p)}
                        >
                          View
                        </button>

                        {userRole === "admin" && (
                          <>
                            <button
                              disabled={p.status === "approved"}
                              onClick={() => updateStatus(p.id, "approved")}
                              className={`px-3 py-1 rounded-md ${
                                p.status === "approved"
                                  ? "bg-green-50 text-green-400 cursor-not-allowed"
                                  : "bg-green-100 text-green-700 hover:bg-green-200"
                              }`}
                            >
                              Approve
                            </button>

                            <button
                              disabled={p.status === "rejected"}
                              onClick={() => updateStatus(p.id, "rejected")}
                              className={`px-3 py-1 rounded-md ${
                                p.status === "rejected"
                                  ? "bg-red-50 text-red-400 cursor-not-allowed"
                                  : "bg-red-100 text-red-700 hover:bg-red-200"
                              }`}
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW */}
          <div className="grid gap-4 md:hidden">
            {paginated.map(p => (
              <div key={p.id} className="card-hover p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">
                    #{p.id}
                  </span>
                  <StatusBadge status={p.status} />
                </div>

                <h3 className="font-semibold">{p.project_name}</h3>
                <p className="text-sm">{p.client_name}</p>
                <p className="text-xs text-muted-foreground">
                  {p.email} • {p.phone}
                </p>

                <p className="font-semibold text-primary">
                  {p.budget ? `₹${p.budget}` : "-"}
                </p>

                {/* MOBILE ACTIONS */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <button
                    className="bg-blue-100 text-blue-700 rounded-md py-2 text-sm"
                    onClick={() => setSelected(p)}
                  >
                    View
                  </button>

                  {userRole === "admin" && (
                    <>
                      <button
                        disabled={p.status === "approved"}
                        onClick={() => updateStatus(p.id, "approved")}
                        className={`rounded-md py-2 text-sm ${
                          p.status === "approved"
                            ? "bg-green-50 text-green-400"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        Approve
                      </button>

                      <button
                        disabled={p.status === "rejected"}
                        onClick={() => updateStatus(p.id, "rejected")}
                        className={`rounded-md py-2 text-sm ${
                          p.status === "rejected"
                            ? "bg-red-50 text-red-400"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2 pt-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIEW MODAL */}
      {selected && (
        <ProposalDetailsModal
          proposal={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </Layout>
  );
};

export default ProposalsPage;
