import { useEffect, useState } from "react";
import { adminApi } from "@/services/api"; // Make sure path matches your api file
import { Loader2, RefreshCw, AlertCircle, Phone, Mail, BookOpen, Calendar, Briefcase, CheckCircle2, XCircle, Trash2 } from "lucide-react";

interface CourseEnquiry {
  id: number;
  full_name: string;
  mobile: string;
  email: string;
  course: string;
  message: string;
  status?: "Pending" | "Accepted" | "Rejected";
  created_at: string;
}

interface ServiceEnquiry {
  id: number;
  full_name: string;
  mobile: string;
  email: string;
  service_type: string;
  message: string;
  status?: "Pending" | "Accepted" | "Rejected";
  created_at: string;
}

export default function AdminEnquiries() {
  const [activeTab, setActiveTab] = useState<"courses" | "services">("courses");
  
  const [courseEnquiries, setCourseEnquiries] = useState<CourseEnquiry[]>([]);
  const [serviceEnquiries, setServiceEnquiries] = useState<ServiceEnquiry[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllEnquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const [courseRes, serviceRes] = await Promise.all([
        adminApi.getEnquiries(),
        adminApi.getServiceEnquiries()
      ]);

      if (courseRes.success) {
        const formattedCourses = courseRes.data.map((item: any) => ({ ...item, status: item.status || "Pending" }));
        setCourseEnquiries(formattedCourses);
      } else {
        setError(courseRes.message || "Failed to load course enquiries.");
      }

      if (serviceRes.success) {
        const formattedServices = serviceRes.data.map((item: any) => ({ ...item, status: item.status || "Pending" }));
        setServiceEnquiries(formattedServices);
      }
    } catch (err: any) {
      setError(err.message || "Network error. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEnquiries();
  }, []);

  // Handler for Accept / Reject Status update via API
  const handleUpdateStatus = async (id: number, type: "courses" | "services", newStatus: "Accepted" | "Rejected") => {
    try {
      const res = await adminApi.updateEnquiryStatus(type, id, newStatus);
      if (res.success) {
        if (type === "courses") {
          setCourseEnquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
        } else {
          setServiceEnquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
        }
      } else {
        alert(res.message || "Failed to update status");
      }
    } catch (err) {
      alert("Error connecting to server.");
    }
  };

  // Handler for Delete Enquiry via API
  const handleDeleteEnquiry = async (id: number, type: "courses" | "services") => {
    if (confirm("Are you sure you want to delete this enquiry?")) {
      try {
        const res = await adminApi.deleteEnquiry(type, id);
        if (res.success) {
          if (type === "courses") {
            setCourseEnquiries(prev => prev.filter(item => item.id !== id));
          } else {
            setServiceEnquiries(prev => prev.filter(item => item.id !== id));
          }
        } else {
          alert(res.message || "Failed to delete enquiry");
        }
      } catch (err) {
        alert("Error connecting to server.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 sm:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">TechSasi Management Hub</h1>
            <p className="text-sm text-zinc-400 mt-1">Manage, approve, or reject incoming applications and client requests.</p>
          </div>
          <button
            onClick={fetchAllEnquiries}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-sm font-medium px-4 py-2.5 rounded-xl transition cursor-pointer disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh Data
          </button>
        </div>

        {/* Tab Navigation Switcher */}
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === "courses"
                ? "bg-orange-500 text-zinc-950 font-bold shadow-lg shadow-orange-500/20"
                : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
            }`}
          >
            <BookOpen size={16} /> Course Enquiries ({courseEnquiries.length})
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
              activeTab === "services"
                ? "bg-orange-500 text-zinc-950 font-bold shadow-lg shadow-orange-500/20"
                : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
            }`}
          >
            <Briefcase size={16} /> Service Enquiries ({serviceEnquiries.length})
          </button>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-400 text-sm flex items-center gap-2 font-mono">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Loading State */}
        {loading && courseEnquiries.length === 0 && serviceEnquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <Loader2 size={32} className="animate-spin text-orange-500" />
            <p className="text-sm text-zinc-400 font-mono">Fetching requests from server...</p>
          </div>
        ) : (
          /* Table View */
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/80 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    <th className="p-4">Applicant Info</th>
                    <th className="p-4">Contact Details</th>
                    <th className="p-4">{activeTab === "courses" ? "Target Course" : "Requested Service"}</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-center">Actions (Accept / Reject / Delete)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-sm">
                  
                  {/* COURSES TAB DATA */}
                  {activeTab === "courses" && (
                    courseEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-12 text-zinc-500 font-mono">
                          No course enquiries found yet.
                        </td>
                      </tr>
                    ) : (
                      courseEnquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-zinc-900/50 transition">
                          <td className="p-4 font-semibold text-white">
                            {item.full_name}
                            <span className="block text-[11px] font-mono text-zinc-500">ID: #{item.id}</span>
                          </td>
                          <td className="p-4 space-y-1">
                            <div className="flex items-center gap-2 text-xs text-zinc-300">
                              <Phone size={13} className="text-orange-500" /> {item.mobile}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-zinc-400">
                              <Mail size={13} className="text-zinc-500" /> {item.email}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full font-medium">
                              <BookOpen size={12} /> {item.course}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                              item.status === "Accepted" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" :
                              item.status === "Rejected" ? "bg-red-500/10 border border-red-500/20 text-red-400" :
                              "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                            }`}>
                              {item.status || "Pending"}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center gap-2">
                              <button 
                                onClick={() => handleUpdateStatus(item.id, "courses", "Accepted")}
                                title="Accept"
                                className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl transition cursor-pointer"
                              >
                                <CheckCircle2 size={16} />
                              </button>
                              <button 
                                onClick={() => handleUpdateStatus(item.id, "courses", "Rejected")}
                                title="Reject"
                                className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition cursor-pointer"
                              >
                                <XCircle size={16} />
                              </button>
                              <button 
                                onClick={() => handleDeleteEnquiry(item.id, "courses")}
                                title="Delete"
                                className="p-2 bg-zinc-800 hover:bg-red-600/20 border border-zinc-700 hover:border-red-500/40 text-zinc-400 hover:text-red-400 rounded-xl transition cursor-pointer"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )
                  )}

                  {/* SERVICES TAB DATA */}
                  {activeTab === "services" && (
                    serviceEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-12 text-zinc-500 font-mono">
                          No service enquiries found yet.
                        </td>
                      </tr>
                    ) : (
                      serviceEnquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-zinc-900/50 transition">
                          <td className="p-4 font-semibold text-white">
                            {item.full_name}
                            <span className="block text-[11px] font-mono text-zinc-500">ID: #{item.id}</span>
                          </td>
                          <td className="p-4 space-y-1">
                            <div className="flex items-center gap-2 text-xs text-zinc-300">
                              <Phone size={13} className="text-orange-500" /> {item.mobile}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-zinc-400">
                              <Mail size={13} className="text-zinc-500" /> {item.email}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-medium">
                              <Briefcase size={12} /> {item.service_type}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                              item.status === "Accepted" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" :
                              item.status === "Rejected" ? "bg-red-500/10 border border-red-500/20 text-red-400" :
                              "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                            }`}>
                              {item.status || "Pending"}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-center gap-2">
                              <button 
                                onClick={() => handleUpdateStatus(item.id, "services", "Accepted")}
                                title="Accept"
                                className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl transition cursor-pointer"
                              >
                                <CheckCircle2 size={16} />
                              </button>
                              <button 
                                onClick={() => handleUpdateStatus(item.id, "services", "Rejected")}
                                title="Reject"
                                className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition cursor-pointer"
                              >
                                <XCircle size={16} />
                              </button>
                              <button 
                                onClick={() => handleDeleteEnquiry(item.id, "services")}
                                title="Delete"
                                className="p-2 bg-zinc-800 hover:bg-red-600/20 border border-zinc-700 hover:border-red-500/40 text-zinc-400 hover:text-red-400 rounded-xl transition cursor-pointer"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )
                  )}

                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}