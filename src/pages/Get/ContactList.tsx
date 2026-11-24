import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  MessageSquare,
  Search,
  Download,
  Eye,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Server,
  User,
  Phone,
  Calendar,
} from "lucide-react";

type Contact = {
  id: number;
  name: string;
  phone: string;
  subject: string;
  created_at: string;
};

const ITEMS_PER_PAGE = 6;

const ContactList = () => {
  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  /* ---------------- FETCH DATA FROM DATABASE ONLY ---------------- */
  useEffect(() => {
    fetch(`${API_URL}/get-contacts.php`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json && Array.isArray(json.data)) {
          setData(json.data);
        } else if (Array.isArray(json)) {
          setData(json);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.error("Database error querying contacts:", err);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  /* ---------------- SEARCH FILTER ---------------- */
  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.phone.includes(search) ||
        item.subject.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* ---------------- EXPORT CSV ---------------- */
  const exportToCSV = () => {
    const headers = ["ID", "Name", "Phone", "Subject", "Date"];
    const rows = filteredData.map((d) => [
      d.id,
      d.name,
      d.phone,
      d.subject,
      d.created_at,
    ]);

    let csv = headers.join(",") + "\n";
    rows.forEach((row) => {
      csv += row.map((v) => `"${v}"`).join(",") + "\n";
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `techsasi-inquiries-${Date.now()}.csv`;
    a.click();
  };

  return (
    <Layout>
      {/* ==============================
          HERO / PARALLAX HEADER
      =============================== */}
      <ParallaxSection
        className="pt-28 pb-8 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent"
      >
        <div className="container-custom max-w-6xl">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link to="/dashboard" className="hover:text-foreground transition-colors">
              Client Portal
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-semibold">Contact Inquiries</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-foreground flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <MessageSquare size={26} />
                </div>
                <span>Inbound Inquiries &amp; Messages</span>
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                Direct client consultations received and synchronized via PHP REST backend
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Return to Portal</span>
              </Link>

              <button
                onClick={exportToCSV}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-sm transition-all cursor-pointer"
              >
                <Download size={14} />
                <span>Export CSV</span>
              </button>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* ==============================
          CONTENT SECTION
      =============================== */}
      <section className="section-padding pt-2 pb-24">
        <div className="container-custom max-w-6xl">
          {/* Toolbar */}
          <div className="p-4 rounded-2xl border border-border bg-card shadow-soft flex flex-col sm:flex-row gap-3 justify-between items-center mb-6">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search name, phone, or scope..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-input bg-background text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-mono">{filteredData.length} total records</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[11px] text-emerald-500 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                PHP REST Sync
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs sm:text-sm text-left">
                <thead className="bg-muted/40 border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  <tr>
                    <th className="px-6 py-4">Client Name</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Project Subject</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {loading && (
                    <tr>
                      <td colSpan={5} className="text-center py-12 text-muted-foreground">
                        Synchronizing inquiries with PHP backend...
                      </td>
                    </tr>
                  )}

                  {!loading && paginatedData.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center py-12 text-muted-foreground">
                        No contact inquiries found matching criteria.
                      </td>
                    </tr>
                  )}

                  {paginatedData.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono shrink-0">
                            {item.name.charAt(0)}
                          </div>
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                        <a href={`tel:${item.phone}`} className="hover:text-primary transition-colors">
                          {item.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 font-medium text-foreground">
                        {item.subject}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground font-mono text-xs">
                        {new Date(item.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          to={`/contact-details/${item.id}`}
                          className="inline-flex items-center gap-1 rounded-lg border border-border hover:bg-muted px-3 py-1.5 text-xs font-semibold text-foreground transition-colors"
                        >
                          <Eye size={13} />
                          <span>View</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 text-xs text-muted-foreground">
              <span>
                Showing Page {currentPage} of {totalPages}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`min-w-[32px] h-8 rounded-lg font-mono font-semibold transition-colors cursor-pointer ${
                      currentPage === i + 1
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border hover:bg-muted text-foreground"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ContactList;
