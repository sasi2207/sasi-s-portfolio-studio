import { useEffect, useState } from "react";
import AOS from "aos";
import { jsPDF } from "jspdf";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Send, Download, Check, Terminal, Box } from "lucide-react";
import { toast } from "sonner";
import API_URL from "./api";

const Proposal = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    email: "",
    phone: "",
    projectName: "",
    projectType: "static-website",
    description: "",
    timeline: "1-2 months",
    budget: "15000-25000",
    features: [] as string[],
  });

  const featureOptions = [
    "Responsive Design",
    "Admin Dashboard",
    "User Authentication",
    "Payment Integration",
    "API Development",
    "Database Setup",
    "SEO Optimization",
    "Analytics Integration",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  /* ------------------------------
      PDF GENERATION (Maintained)
  ------------------------------- */
  const generatePDF = () => {
    if (!formData.clientName || !formData.email || !formData.phone || !formData.projectName) {
      toast.error("Please fill all required contact details");
      return;
    }

    const doc = new jsPDF();
    let y = 20;
    const lh = 7;

    doc.setFontSize(22);
    doc.setTextColor(251, 191, 36); // Swatched to Amber-400 equivalent hex
    doc.text("Project Proposal", 20, y);
    y += 14;

    doc.setFontSize(11);
    doc.text(`Prepared for: ${formData.clientName}`, 20, y); y += lh;
    doc.text(`Company: ${formData.companyName || "N/A"}`, 20, y); y += lh;
    doc.text(`Email: ${formData.email}`, 20, y); y += lh;
    doc.text(`Phone: ${formData.phone}`, 20, y); y += lh;
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, y); y += 12;

    doc.setFontSize(15);
    doc.text("Project Details", 20, y); y += 8;

    doc.setFontSize(11);
    doc.text(`Project Name: ${formData.projectName}`, 20, y); y += lh;
    doc.text(`Project Type: ${formData.projectType}`, 20, y); y += lh;
    doc.text(`Timeline: ${formData.timeline}`, 20, y); y += lh;
    doc.text(`Budget: ₹${formData.budget}`, 20, y); y += 12;

    if (formData.description) {
      doc.setFontSize(15);
      doc.text("Project Description", 20, y); y += 8;
      doc.setFontSize(11);
      doc.text(doc.splitTextToSize(formData.description, 170), 20, y);
    }

    doc.save(`proposal-${formData.projectName}.pdf`);
    toast.success("Proposal PDF generated and saved");
  };

  /* ------------------------------
      SAVE TO DATABASE (Maintained)
  ------------------------------- */
  const sendProposal = async () => {
    if (!formData.clientName || !formData.email || !formData.phone || !formData.projectName) {
      toast.error("Please fill all required telemetry inputs");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Encrypting and saving proposal payload...");

      const response = await fetch(`${API_URL}/save-proposal.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      toast.dismiss();

      if (!response.ok) throw new Error(data.error || "Failed to save proposal matrix");

      toast.success("Proposal parameters stored completely!");

      setFormData({
        clientName: "",
        companyName: "",
        email: "",
        phone: "",
        projectName: "",
        projectType: "static-website",
        description: "",
        timeline: "1-2 months",
        budget: "15000-25000",
        features: [],
      });

    } catch (err: any) {
      toast.dismiss();
      toast.error(err.message || "Endpoint transmission blockage encountered");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = "w-full bg-black border border-zinc-900 focus:border-amber-400/40 text-xs px-4 py-3 rounded-sm text-white outline-none font-mono transition-colors placeholder:text-zinc-800";

  return (
    <Layout>
      <div className="min-h-screen bg-black text-zinc-300 font-mono selection:bg-amber-400/20 selection:text-amber-400 relative overflow-hidden">
        
        {/* Technical Mesh Wireframe Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121214_1px,transparent_1px),linear-gradient(to_bottom,#121214_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-[550px] h-[250px] bg-amber-400/[0.02] rounded-full blur-[100px] pointer-events-none" />

        {/* HERO ANCHOR ROW */}
        <ParallaxSection className="pt-36 pb-12 relative z-10" bgClassName="bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-sm">
                <Terminal size={11} className="text-amber-400 animate-pulse" />
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  PROPOSAL_ENGINE // MATRIX_GEN
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white uppercase" data-aos="fade-up">
                Get a <span className="font-bold text-amber-400">Project Proposal</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-500 font-sans max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Configure architectural blocks, target timelines, and asset budgets below to generate a client-ready proposal document instantly.
              </p>
            </div>
          </div>
        </ParallaxSection>

        {/* COMPONENT INTERACTION AREA */}
        <section className="pb-24 relative z-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-10 rounded-sm bg-zinc-950 border border-zinc-900 shadow-2xl relative">
              
              {/* Terminal Label Bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
                <h2 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Box size={13} className="text-amber-400" />
                  Configuration_Parameters
                </h2>
                <span className="text-[10px] text-zinc-600 font-mono uppercase">[*] structural dependencies</span>
              </div>

              <div className="space-y-6">
                
                {/* Client Identifiers Grid */}
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2.5">01 // Identity Records</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="clientName" value={formData.clientName} onChange={handleChange} className={inputStyles} placeholder="Client Representative Name *" />
                    <input name="companyName" value={formData.companyName} onChange={handleChange} className={inputStyles} placeholder="Corporate Entity / Company" />
                  </div>
                </div>

                {/* Secure Links Input Rows */}
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2.5">02 // Communication Gateways</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className={inputStyles} placeholder="Transmission Email Address *" />
                    <input name="phone" value={formData.phone} onChange={handleChange} className={inputStyles} placeholder="Comms Primary Phone *" />
                  </div>
                </div>

                {/* Architecture Assignment Node Blocks */}
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2.5">03 // Project Structural Spec</label>
                  <div className="space-y-4">
                    <input name="projectName" value={formData.projectName} onChange={handleChange} className={inputStyles} placeholder="System Framework Name *" />

                    <div className="grid md:grid-cols-2 gap-4">
                      <select name="projectType" value={formData.projectType} onChange={handleChange} className={inputStyles}>
                        <option value="static-website">Static Architecture</option>
                        <option value="dynamic-website">Dynamic Environment</option>
                        <option value="portfolio">Personal Portfolio</option>
                        <option value="business">Enterprise Workspace</option>
                        <option value="webapp">Application Node (Web App)</option>
                        <option value="dashboard">Analytical Dashboard</option>
                        <option value="ecommerce">E-commerce Pipeline</option>
                      </select>

                      <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputStyles}>
                        <option value="1-2 months">Execution: 1-2 months</option>
                        <option value="2-3 months">Execution: 2-3 months</option>
                        <option value="3+ months">Execution: 3+ months</option>
                      </select>
                    </div>

                    <select name="budget" value={formData.budget} onChange={handleChange} className={inputStyles}>
                      <option value="15000-25000">Budget Limit: ₹15k - 25k</option>
                      <option value="25000-40000">Budget Limit: ₹25k - 40k</option>
                      <option value="40000-60000">Budget Limit: ₹40k - 60k</option>
                      <option value="60000+">Budget Limit: ₹60k+</option>
                    </select>

                    <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className={`${inputStyles} resize-none`} placeholder="Elaborate project scope description..." />
                  </div>
                </div>

                {/* Toggle Matrices Matrix */}
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2.5">04 // Integrated Features Select Matrix</label>
                  <div className="grid grid-cols-2 gap-2">
                    {featureOptions.map((f) => {
                      const isSelected = formData.features.includes(f);
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => handleFeatureToggle(f)}
                          className={`px-3 py-2.5 rounded-sm text-xs font-mono transition-all text-left flex items-center justify-between border ${
                            isSelected
                              ? "bg-amber-400 border-amber-400 text-black font-bold shadow-lg shadow-amber-400/5"
                              : "bg-black border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                          }`}
                        >
                          <span className="truncate">{f}</span>
                          {isSelected ? (
                            <Check size={12} className="flex-shrink-0 text-black stroke-[3]" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Trigger Loops */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-zinc-900">
                  <button 
                    onClick={generatePDF} 
                    className="flex-1 flex items-center justify-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 transition-colors rounded-sm"
                  >
                    <Download size={13} className="text-amber-400" /> 
                    Compile PDF Document
                  </button>

                  <button 
                    onClick={sendProposal} 
                    disabled={loading} 
                    className="flex-1 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 disabled:bg-zinc-900 disabled:text-zinc-600 text-black text-xs font-bold uppercase tracking-wider py-3.5 transition-colors rounded-sm shadow-xl shadow-amber-400/5"
                  >
                    <Send size={13} className={loading ? "animate-bounce" : ""} />
                    {loading ? "Transmitting..." : "Execute Save Loop"}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Proposal;