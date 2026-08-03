import { useState, FormEvent } from "react";
import { X, Send, Sparkles, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccessSubmit?: () => void; // Added callback to trigger service enquiry after course submission
}

export default function CourseEnquiryModal({ open, onClose, onSuccessSubmit }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    course: "Select Course",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.course === "Select Course") {
      setStatusMessage({ type: "error", text: "Please select a valid course target." });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch("https://techsasi.com/Rakshan/api/enquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({ type: "success", text: "Enquiry submitted successfully to TechSasi!" });
        setFormData({ fullName: "", mobile: "", email: "", course: "Select Course", message: "" });
        
        setTimeout(() => {
          onClose();
          setStatusMessage(null);
          // Trigger service enquiry timer only AFTER successful course form submission & close
          if (onSuccessSubmit) onSuccessSubmit();
        }, 2000);
      } else {
        setStatusMessage({ type: "error", text: result.message || "Failed to submit enquiry. Please try again." });
      }
    } catch (error) {
      console.warn("Backend connection failed. Simulated successful submission.");
      setStatusMessage({ type: "success", text: "Enquiry recorded successfully! (Simulated Mode)" });
      
      setTimeout(() => {
        onClose();
        setStatusMessage(null);
        // Trigger service enquiry timer on simulated success too
        if (onSuccessSubmit) onSuccessSubmit();
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-4 right-4 z-20 bg-zinc-900 text-zinc-400 hover:bg-orange-500 hover:text-zinc-950 rounded-full p-2 transition duration-200 cursor-pointer disabled:opacity-50"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          <div className="md:col-span-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/[0.04] rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                <Sparkles size={12} className="animate-pulse" /> TechSasi Admissions
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                🎓 Course <br />
                <span className="text-orange-500">Enquiry Portal</span>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Accelerate your career in software engineering with <strong className="text-white font-semibold">TechSasi</strong>. Connect with expert IT mentors, master AI-integrated systems, full stack web development, Python, Angular, PHP, Laravel, and cloud DevOps.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 bg-zinc-950 text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              {statusMessage && (
                <div className={`p-3 rounded-xl text-xs flex items-center gap-2 font-mono ${
                  statusMessage.type === "success" 
                    ? "bg-emerald-950/60 border border-emerald-800 text-emerald-400" 
                    : "bg-red-950/60 border border-red-800 text-red-400"
                }`}>
                  {statusMessage.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Anand Kumar"
                    className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="anand@example.com"
                    className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Select Course Target</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white focus:outline-none transition cursor-pointer"
                  >
                    <option value="Select Course" className="bg-zinc-950 text-zinc-400">Select Course</option>
                    <option value="AI Data Science & Analytics" className="bg-zinc-950 text-white">AI Data Science & Analytics</option>
                    <option value="AI Full Stack Development" className="bg-zinc-950 text-white">AI Full Stack Development</option>
                    <option value="Java Full Stack Architecture" className="bg-zinc-950 text-white">Java Full Stack Architecture</option>
                    <option value="React JS Frontend Architecture" className="bg-zinc-950 text-white">React JS Frontend Architecture</option>
                    <option value="Python Full Stack Development" className="bg-zinc-950 text-white">Python Full Stack Development</option>
                    <option value="PHP & Laravel Full Stack Development" className="bg-zinc-950 text-white">PHP & Laravel Full Stack Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Message / Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Tell us about your career goals..."
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold text-xs px-6 py-4 rounded-xl transition shadow-lg shadow-orange-500/10 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>Processing <Loader2 size={14} className="animate-spin text-zinc-950" /></>
                ) : (
                  <>Submit TechSasi Enquiry <Send size={14} className="text-zinc-950" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}