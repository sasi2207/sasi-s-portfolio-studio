import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

type Contact = {
  id: number;
  name: string;
  phone: string;
  subject: string;
  created_at: string;
};

const ITEMS_PER_PAGE = 5;

const ContactList = () => {
  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    fetch(`${API_URL}/get-contacts.php`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setData(json.data);
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
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* ---------------- EXPORT CSV ---------------- */
  const exportToCSV = () => {
    const headers = ["Name", "Phone", "Subject", "Date"];
    const rows = filteredData.map((d) => [
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
    a.download = "contact-messages.csv";
    a.click();
  };

  return (
    <Layout>
      {/* ==============================
          HERO / PARALLAX HEADER
      =============================== */}
      <ParallaxSection
        className="pt-32 pb-16"
        bgClassName="bg-gradient-to-b from-orange-50 to-transparent"
      >
        <div className="container-custom">
          <h1 className="text-4xl font-heading font-bold mb-2">
            Contact Messages
          </h1>
          <p className="text-muted-foreground">
            Manage all customer enquiries
          </p>
        </div>
      </ParallaxSection>

      {/* ==============================
          CONTENT SECTION
      =============================== */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Toolbar */}
          <div className="flex flex-wrap gap-4 justify-between mb-6">
            <input
              type="text"
              placeholder="Search name / phone / subject"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-72 rounded-xl border px-4 py-2 focus:ring-2 focus:ring-orange-400"
            />

            <button
              onClick={exportToCSV}
              className="rounded-xl bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
            >
              Export to Excel
            </button>
          </div>

          {/* Table */}
          <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-orange-50 text-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Phone</th>
                  <th className="px-6 py-4 text-left">Subject</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {loading && (
                  <tr>
                    <td colSpan={5} className="text-center py-10">
                      Loading messages...
                    </td>
                  </tr>
                )}

                {!loading && paginatedData.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-10">
                      No messages found
                    </td>
                  </tr>
                )}

                {paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-orange-50 transition"
                  >
                    <td className="px-6 py-4 font-medium">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">{item.phone}</td>
                    <td className="px-6 py-4">{item.subject}</td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/admin/contact/${item.id}`}
                        className="inline-block rounded-lg bg-orange-500 px-4 py-1.5 text-white hover:bg-orange-600"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === i + 1
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ContactList;
