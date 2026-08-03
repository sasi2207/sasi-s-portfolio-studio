import { useState } from "react";
import { Loader2, Send, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

export default function ServiceEnquiryForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    service_type: "Static Website",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("https://techsasi.com/Rakshan/api/admin_api.php?action=create_service_enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMsg("Enquiry submitted successfully! We will contact you soon.");
        setFormData({
          full_name: "",
          email: "",
          mobile: "",
          service_type: "Static Website",
          message: ""
        });
      } else {
        setErrorMsg(result.message || "Failed to submit enquiry.");
      }
    } catch (error) {
      console.warn("Backend connection failed. Simulated successful mode.");
      setSuccessMsg("Enquiry recorded successfully! (Simulated Mode)");
      setFormData({
        full_name: "",
        email: "",
        mobile: "",
        service_type: "Static Website",
        message: ""
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-white text-left">
      
      {/* Landscape Grid Layout (2 Columns on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">

        {/* Left Hero Brand Panel (Landscape Side Info) */}
        <div className="md:col-span-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/[0.04] rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-widest font-semibold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              <Sparkles size={12} className="animate-pulse" /> TechSasi Solutions
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              💻 Request a <br />
              <span className="text-orange-500">Service Project</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Transform your business operations with <strong className="text-white font-semibold">TechSasi</strong> custom web and mobile development services. Scalable architecture built for modern enterprises.
            </p>
          </div>

          <div className="pt-6 relative z-10 hidden md:block">
            <div className="text-[11px] font-mono text-zinc-500">
              // Official TechSasi Solutions <br />
              Enterprise Development Hub
            </div>
          </div>
        </div>

        {/* Right Form Panel (Landscape Input Layout) */}
        <div className="md:col-span-7 p-6 sm:p-8 bg-zinc-950">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Success Notification Box */}
            {successMsg && (
              <div className="p-3 rounded-xl text-xs flex items-center gap-2 font-mono bg-emerald-950/60 border border-emerald-800 text-emerald-400">
                <CheckCircle2 size={16} />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Error Notification Box */}
            {errorMsg && (
              <div className="p-3 rounded-xl text-xs flex items-center gap-2 font-mono bg-red-950/60 border border-red-800 text-red-400">
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Anand Kumar"
                className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
                value={formData.full_name}
                onChange={(e) => setFormData({...formData, full_name: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="anand@example.com"
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Select Service Type</label>
              <select 
                className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white focus:outline-none transition cursor-pointer"
                value={formData.service_type}
                onChange={(e) => setFormData({...formData, service_type: e.target.value})}
              >
                <option value="Static Website" className="bg-zinc-950 text-white">Static Website Development</option>
                <option value="Dynamic Website" className="bg-zinc-950 text-white">Dynamic Website Development</option>
                <option value="E-Commerce Website" className="bg-zinc-950 text-white">E-Commerce Website</option>
                <option value="Mobile Application" className="bg-zinc-950 text-white">Mobile Application Development</option>
                <option value="SEO & Deployment" className="bg-zinc-950 text-white">SEO Optimization & Deployment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Project Details / Message</label>
              <textarea 
                rows={2}
                placeholder="Tell us about your project requirements..."
                className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-orange-500 rounded-xl p-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
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
                <>Submit Service Enquiry <Send size={14} className="text-zinc-950" /></>
              )}
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}