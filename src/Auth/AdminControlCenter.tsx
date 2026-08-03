import { useState, useEffect } from "react";
import { adminApi } from "@/services/adminApi";
import { AdminSidebar } from "@/Auth/AdminSidebar";
import { Trash2, Plus, Loader2, Menu, X, CheckCircle2, XCircle } from "lucide-react";
import Swal from "sweetalert2";

interface AdminControlCenterProps {
  onLogout: () => void;
}

export default function AdminControlCenter({ onLogout }: AdminControlCenterProps) {
  const [activeTab, setActiveTab] = useState('stats');
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Data States
  const [enquiries, setEnquiries] = useState([]);
  const [serviceEnquiries, setServiceEnquiries] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const [enqRes, serviceEnqRes, courseRes] = await Promise.all([
        adminApi.getEnquiries(), 
        fetch("https://techsasi.com/Rakshan/api/admin_api.php?action=get_service_enquiries").then(res => res.json()),
        adminApi.getCourses()
      ]);
      
      const formattedEnq = (enqRes.data || []).map((item: any) => ({ ...item, status: item.status || "Pending" }));
      const formattedServiceEnq = (serviceEnqRes.data || []).map((item: any) => ({ ...item, status: item.status || "Pending" }));

      setEnquiries(formattedEnq);
      setServiceEnquiries(formattedServiceEnq);
      setCourses(courseRes.data || []);
    } catch (error) {
      console.error("Failed to fetch dashboard records", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCourse = async () => {
    if (!newCourse.trim()) return;
    try {
      const res = await adminApi.addCourse(newCourse);
      setNewCourse("");
      fetchData();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Course added successfully.',
        background: '#18181b',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to add course.',
        background: '#18181b',
        color: '#fff',
        confirmButtonColor: '#f97316'
      });
    }
  };

  const handleDeleteCourse = async (id: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f97316',
      cancelButtonColor: '#27272a',
      confirmButtonText: 'Yes, delete it!',
      background: '#18181b',
      color: '#fff'
    });

    if (result.isConfirmed) {
      try {
        await adminApi.deleteCourse(id);
        fetchData();
        Swal.fire({
          title: 'Deleted!',
          text: 'Course has been deleted.',
          icon: 'success',
          background: '#18181b',
          color: '#fff',
          confirmButtonColor: '#f97316'
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to delete course.',
          background: '#18181b',
          color: '#fff',
          confirmButtonColor: '#f97316'
        });
      }
    }
  };

  // --- Status Update Handler (Accept / Reject) with SweetAlert ---
  const handleUpdateStatus = async (id: number, type: "courses" | "services", status: "Accepted" | "Rejected") => {
    const result = await Swal.fire({
      title: `Mark as ${status}?`,
      text: `Do you want to change this enquiry status to ${status}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: status === 'Accepted' ? '#10b981' : '#ef4444',
      cancelButtonColor: '#27272a',
      confirmButtonText: `Yes, ${status}!`,
      background: '#18181b',
      color: '#fff'
    });

    if (result.isConfirmed) {
      try {
        const res = await adminApi.updateEnquiryStatus(type, id, status);
        if (res.success) {
          if (type === "courses") {
            setEnquiries((prev: any) => prev.map((item: any) => item.id === id ? { ...item, status } : item));
          } else {
            setServiceEnquiries((prev: any) => prev.map((item: any) => item.id === id ? { ...item, status } : item));
          }
          Swal.fire({
            title: 'Updated!',
            text: `Enquiry has been marked as ${status}.`,
            icon: 'success',
            background: '#18181b',
            color: '#fff',
            confirmButtonColor: '#f97316'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: res.message || "Failed to update status",
            background: '#18181b',
            color: '#fff',
            confirmButtonColor: '#f97316'
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "Error connecting to server.",
          background: '#18181b',
          color: '#fff',
          confirmButtonColor: '#f97316'
        });
      }
    }
  };

  // --- Delete Enquiry Handler with SweetAlert ---
  const handleDeleteEnquiry = async (id: number, type: "courses" | "services") => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover this enquiry record!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#27272a',
      confirmButtonText: 'Yes, delete it!',
      background: '#18181b',
      color: '#fff'
    });

    if (result.isConfirmed) {
      try {
        const res = await adminApi.deleteEnquiry(type, id);
        if (res.success) {
          if (type === "courses") {
            setEnquiries((prev: any) => prev.filter((item: any) => item.id !== id));
          } else {
            setServiceEnquiries((prev: any) => prev.filter((item: any) => item.id !== id));
          }
          Swal.fire({
            title: 'Deleted!',
            text: 'Enquiry has been deleted.',
            icon: 'success',
            background: '#18181b',
            color: '#fff',
            confirmButtonColor: '#f97316'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: res.message || "Failed to delete enquiry",
            background: '#18181b',
            color: '#fff',
            confirmButtonColor: '#f97316'
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "Error connecting to server.",
          background: '#18181b',
          color: '#fff',
          confirmButtonColor: '#f97316'
        });
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white relative">
      
      {/* Mobile Header Bar with Hamburger Menu Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <h1 className="font-bold tracking-tight text-orange-500">TechSasi Admin</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white bg-zinc-800/60 rounded-xl transition cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar for Desktop & Mobile Overlay Drawer */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-black border-r border-zinc-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
        ${isMobileMenuOpen ? "translate-x-0 pt-16 lg:pt-0" : "-translate-x-full"}
      `}>
        <AdminSidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsMobileMenuOpen(false);
          }} 
          onLogout={onLogout} 
        />
      </div>

      {/* Mobile Drawer Backdrop overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="fixed inset-0 bg-black/80 z-30 lg:hidden backdrop-blur-sm"
        />
      )}
      
      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {loading ? (
          <div className="h-64 lg:h-full flex items-center justify-center">
            <Loader2 className="animate-spin text-orange-500" size={40} />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto space-y-6">
            
            {activeTab === 'stats' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-zinc-800">
                  <p className="text-zinc-500 font-mono text-xs sm:text-sm">Course Enquiries</p>
                  <h2 className="text-4xl sm:text-5xl font-bold mt-2">{enquiries.length}</h2>
                </div>
                <div className="bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-zinc-800">
                  <p className="text-zinc-500 font-mono text-xs sm:text-sm">Service Enquiries</p>
                  <h2 className="text-4xl sm:text-5xl font-bold mt-2">{serviceEnquiries.length}</h2>
                </div>
                <div className="bg-zinc-900/80 p-6 sm:p-8 rounded-3xl border border-zinc-800">
                  <p className="text-zinc-500 font-mono text-xs sm:text-sm">Active Courses</p>
                  <h2 className="text-4xl sm:text-5xl font-bold mt-2">{courses.length}</h2>
                </div>
              </div>
            )}

            {/* Course Enquiries Tab */}
            {activeTab === 'enquiries' && (
              <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-xl">
                <div className="p-5 border-b border-zinc-800">
                  <h3 className="font-bold text-lg text-white">Course Enquiries</h3>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left min-w-[750px]">
                    <thead className="bg-zinc-800/80 text-zinc-400 font-mono text-xs uppercase">
                      <tr>
                        <th className="p-4 sm:p-5">Name</th>
                        <th className="p-4 sm:p-5">Course</th>
                        <th className="p-4 sm:p-5">Contact</th>
                        <th className="p-4 sm:p-5">Status</th>
                        <th className="p-4 sm:p-5 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {enquiries.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-10 text-zinc-500 font-mono text-sm">
                            No course enquiries found.
                          </td>
                        </tr>
                      ) : (
                        enquiries.map((enq: any) => (
                          <tr key={enq.id} className="hover:bg-zinc-800/50 transition">
                            <td className="p-4 sm:p-5 font-bold text-sm sm:text-base">
                              {enq.full_name}
                              <span className="block text-[11px] font-mono text-zinc-500">#{enq.id}</span>
                            </td>
                            <td className="p-4 sm:p-5 text-orange-500 font-medium text-sm sm:text-base">{enq.course}</td>
                            <td className="p-4 sm:p-5 text-zinc-400 text-xs sm:text-sm">
                              {enq.mobile}<br/><span className="text-zinc-500 text-[11px]">{enq.email}</span>
                            </td>
                            <td className="p-4 sm:p-5">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                                enq.status === "Accepted" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" :
                                enq.status === "Rejected" ? "bg-red-500/10 border border-red-500/20 text-red-400" :
                                "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                              }`}>
                                {enq.status || "Pending"}
                              </span>
                            </td>
                            <td className="p-4 sm:p-5">
                              <div className="flex items-center justify-center gap-2">
                                <button 
                                  onClick={() => handleUpdateStatus(enq.id, "courses", "Accepted")}
                                  title="Accept"
                                  className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl transition cursor-pointer"
                                >
                                  <CheckCircle2 size={16} />
                                </button>
                                <button 
                                  onClick={() => handleUpdateStatus(enq.id, "courses", "Rejected")}
                                  title="Reject"
                                  className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition cursor-pointer"
                                >
                                  <XCircle size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteEnquiry(enq.id, "courses")}
                                  title="Delete"
                                  className="p-2 bg-zinc-800 hover:bg-red-600/20 border border-zinc-700 hover:border-red-500/40 text-zinc-400 hover:text-red-400 rounded-xl transition cursor-pointer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Service Enquiries Tab */}
            {activeTab === 'service-enquiries' && (
              <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-xl">
                <div className="p-5 border-b border-zinc-800">
                  <h3 className="font-bold text-lg text-white">Web Development Service Enquiries</h3>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left min-w-[850px]">
                    <thead className="bg-zinc-800/80 text-zinc-400 font-mono text-xs uppercase">
                      <tr>
                        <th className="p-4 sm:p-5">Client Name</th>
                        <th className="p-4 sm:p-5">Service Type</th>
                        <th className="p-4 sm:p-5">Contact Info</th>
                        <th className="p-4 sm:p-5">Requirements</th>
                        <th className="p-4 sm:p-5">Status</th>
                        <th className="p-4 sm:p-5 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {serviceEnquiries.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-10 text-zinc-500 font-mono text-sm">
                            No service enquiries found.
                          </td>
                        </tr>
                      ) : (
                        serviceEnquiries.map((se: any) => (
                          <tr key={se.id} className="hover:bg-zinc-800/50 transition">
                            <td className="p-4 sm:p-5 font-bold text-sm sm:text-base">
                              {se.full_name}
                              <span className="block text-[11px] font-mono text-zinc-500">#{se.id}</span>
                            </td>
                            <td className="p-4 sm:p-5 text-orange-500 font-medium text-sm sm:text-base">{se.service_type}</td>
                            <td className="p-4 sm:p-5 text-zinc-400 text-xs sm:text-sm">
                              {se.mobile}<br/><span className="text-zinc-500 text-[11px]">{se.email}</span>
                            </td>
                            <td className="p-4 sm:p-5 text-zinc-300 text-xs sm:text-sm max-w-xs truncate">{se.message || "No message provided"}</td>
                            <td className="p-4 sm:p-5">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                                se.status === "Accepted" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" :
                                se.status === "Rejected" ? "bg-red-500/10 border border-red-500/20 text-red-400" :
                                "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                              }`}>
                                {se.status || "Pending"}
                              </span>
                            </td>
                            <td className="p-4 sm:p-5">
                              <div className="flex items-center justify-center gap-2">
                                <button 
                                  onClick={() => handleUpdateStatus(se.id, "services", "Accepted")}
                                  title="Accept"
                                  className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl transition cursor-pointer"
                                >
                                  <CheckCircle2 size={16} />
                                </button>
                                <button 
                                  onClick={() => handleUpdateStatus(se.id, "services", "Rejected")}
                                  title="Reject"
                                  className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition cursor-pointer"
                                >
                                  <XCircle size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteEnquiry(se.id, "services")}
                                  title="Delete"
                                  className="p-2 bg-zinc-800 hover:bg-red-600/20 border border-zinc-700 hover:border-red-500/40 text-zinc-400 hover:text-red-400 rounded-xl transition cursor-pointer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Courses Management Tab */}
            {activeTab === 'courses' && (
              <div className="space-y-6 max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="text" 
                    placeholder="Enter new course name..." 
                    className="flex-1 p-3 sm:p-4 bg-zinc-900 border border-zinc-800 rounded-2xl outline-none focus:border-orange-500 text-sm sm:text-base text-white placeholder-zinc-600 transition"
                    value={newCourse}
                    onChange={(e) => setNewCourse(e.target.value)}
                  />
                  <button 
                    onClick={handleAddCourse} 
                    className="px-6 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold rounded-2xl flex items-center justify-center gap-2 transition cursor-pointer text-sm sm:text-base"
                  >
                    <Plus size={20} /> Add Course
                  </button>
                </div>
                
                <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-xl">
                  {courses.length === 0 ? (
                    <div className="p-8 text-center text-zinc-500 font-mono text-sm">
                      No dynamic courses added yet.
                    </div>
                  ) : (
                    courses.map((c: any) => (
                      <div key={c.id} className="flex justify-between items-center p-4 sm:p-5 border-b border-zinc-800 last:border-0 hover:bg-zinc-800/30 transition">
                        <span className="font-bold text-sm sm:text-base">{c.course_name}</span>
                        <button 
                          onClick={() => handleDeleteCourse(c.id)} 
                          className="text-red-500 hover:bg-red-500/10 p-2 sm:p-2.5 rounded-xl transition cursor-pointer"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

          </div>
        )}
      </main>
    </div>
  );
}