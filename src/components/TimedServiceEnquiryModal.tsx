import { useState, useEffect } from "react";
import { Loader2, Send, X } from "lucide-react";

export default function TimedServiceEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
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

  // 5 Seconds delay trigger after component mounts (user lands or interacts with course enquiry)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if already submitted in this session so it doesn't annoy the user
      const hasShown = sessionStorage.getItem("service_popup_shown");
      if (!hasShown) {
        setIsOpen(true);
        sessionStorage.setItem("service_popup_shown", "true");
      }
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost/Rakshan/api/admin_api.php?action=create_service_enquiry", {
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
        setTimeout(() => {
          setIsOpen(false);
        }, 2500); // Close modal automatically after 2.5s on success
      } else {
        setErrorMsg(result.message || "Failed to submit enquiry.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl max-w-xl w-full text-white relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white bg-zinc-800/60 rounded-xl transition cursor-pointer"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl sm:text-2xl font-bold mb-2">Looking for Web Development?</h3>
        <p className="text-zinc-400 text-xs sm:text-sm mb-6">We noticed you're exploring our courses. Need a professional website built for your business? Let us know!</p>

        {successMsg && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-sm">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Full Name</label>
            <input 
              type="text" 
              required
              placeholder="Enter your name"
              className="w-full p-3.5 bg-black border border-zinc-800 rounded-2xl outline-none focus:border-orange-500 text-white text-sm transition"
              value={formData.full_name}
              onChange={(e) => setFormData({...formData, full_name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="name@example.com"
                className="w-full p-3.5 bg-black border border-zinc-800 rounded-2xl outline-none focus:border-orange-500 text-white text-sm transition"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Mobile Number</label>
              <input 
                type="tel" 
                required
                placeholder="9876543210"
                className="w-full p-3.5 bg-black border border-zinc-800 rounded-2xl outline-none focus:border-orange-500 text-white text-sm transition"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Select Service Type</label>
            <select 
              className="w-full p-3.5 bg-black border border-zinc-800 rounded-2xl outline-none focus:border-orange-500 text-white text-sm transition"
              value={formData.service_type}
              onChange={(e) => setFormData({...formData, service_type: e.target.value})}
            >
              <option value="Static Website">Static Website Development</option>
              <option value="Dynamic Website">Dynamic Website Development</option>
              <option value="E-Commerce Website">E-Commerce Website</option>
              <option value="Mobile Application">Mobile Application Development</option>
              <option value="SEO & Deployment">SEO Optimization & Deployment</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Project Details / Message</label>
            <textarea 
              rows={3}
              placeholder="Tell us about your project requirements..."
              className="w-full p-3.5 bg-black border border-zinc-800 rounded-2xl outline-none focus:border-orange-500 text-white text-sm transition resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-zinc-950 font-bold rounded-2xl flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
            Submit Service Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}