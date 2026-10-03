import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { jsPDF } from "jspdf";
import { toast } from "sonner";
import { 
  FileText, 
  Download, 
  Send, 
  Check, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import API_URL from "./api";

interface ProjectFeature {
  id: string;
  name: string;
  price: number;
  days: number;
  category: string;
}

const availableFeatures: ProjectFeature[] = [
  { id: "responsive", name: "Custom Responsive UI/UX Design", price: 6000, days: 3, category: "Frontend" },
  { id: "admin", name: "Executive Admin Dashboard & CMS", price: 12000, days: 6, category: "Backend" },
  { id: "auth", name: "Role-Based Auth (JWT & Social OAuth)", price: 8000, days: 4, category: "Security" },
  { id: "payments", name: "Payment Gateway (Razorpay/Stripe/UPI)", price: 9000, days: 4, category: "Commerce" },
  { id: "database", name: "PostgreSQL Database & Architecture", price: 8000, days: 4, category: "Database" },
  { id: "api", name: "RESTful / GraphQL Decoupled APIs", price: 10000, days: 5, category: "Backend" },
  { id: "seo", name: "Technical SEO, GEO & Schema.org Setup", price: 5000, days: 2, category: "Growth" },
  { id: "whatsapp", name: "WhatsApp & SMS Automated Alerts", price: 6000, days: 3, category: "Integrations" },
  { id: "devops", name: "AWS Cloud Deploy & CI/CD Pipeline", price: 9000, days: 4, category: "DevOps" },
  { id: "reports", name: "Automated PDF & Excel Reporting", price: 7000, days: 3, category: "Analytics" },
];

const baseProjectTypes: Record<string, { name: string; basePrice: number; baseDays: number; defaultStack: string }> = {
  "static-web": { name: "High-Speed Business Website", basePrice: 15000, baseDays: 7, defaultStack: "React · Next.js · Tailwind" },
  "dynamic-web": { name: "Dynamic Web Application", basePrice: 28000, baseDays: 18, defaultStack: "React · Node.js · PostgreSQL" },
  "ecommerce": { name: "Full E-Commerce Platform", basePrice: 38000, baseDays: 24, defaultStack: "React · Node · Stripe/Razorpay" },
  "mobile-app": { name: "Cross-Platform Mobile App", basePrice: 45000, baseDays: 30, defaultStack: "Flutter / React Native · REST API" },
  "custom-erp": { name: "Custom ERP & CRM Enterprise Suite", basePrice: 65000, baseDays: 45, defaultStack: "React · Python/Node · PostgreSQL" },
};

export const Proposal = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    email: "",
    phone: "",
    projectName: "",
    projectType: "dynamic-web",
    description: "",
    selectedFeatures: ["responsive", "admin", "auth", "devops"] as string[],
  });

  const [submitting, setSubmitting] = useState(false);

  // Dynamic Cost Calculation
  const calculation = useMemo(() => {
    const base = baseProjectTypes[formData.projectType] || baseProjectTypes["dynamic-web"];
    let featureTotal = 0;
    let featureDays = 0;

    formData.selectedFeatures.forEach((fid) => {
      const feat = availableFeatures.find((f) => f.id === fid);
      if (feat) {
        featureTotal += feat.price;
        featureDays += feat.days;
      }
    });

    const totalEstimate = base.basePrice + featureTotal;
    const totalDays = Math.ceil(base.baseDays + featureDays * 0.7); // concurrency discount on timeline

    return {
      basePrice: base.basePrice,
      featureTotal,
      totalEstimate,
      totalDays,
      stack: base.defaultStack,
      typeName: base.name,
    };
  }, [formData.projectType, formData.selectedFeatures]);

  const toggleFeature = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedFeatures: prev.selectedFeatures.includes(id)
        ? prev.selectedFeatures.filter((item) => item !== id)
        : [...prev.selectedFeatures, id],
    }));
  };

  const handleDownloadPDF = () => {
    if (!formData.clientName || !formData.email || !formData.projectName) {
      toast.error("Please enter Client Name, Email, and Project Title before generating the document.");
      return;
    }

    const doc = new jsPDF();
    const margin = 20;
    let y = 25;

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42);
    doc.text("TechSasi Engineering Proposal", margin, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("High-Performance Software Architecture · Salem, Tamil Nadu · info@techsasi.com", margin, y);
    y += 12;

    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y, 190, y);
    y += 12;

    // Client & Project Box
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text("1. Project Specification", margin, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    doc.text(`Client Name: ${formData.clientName}`, margin, y);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 130, y);
    y += 6;
    doc.text(`Organization: ${formData.companyName || "N/A"}`, margin, y);
    doc.text(`Contact: ${formData.phone || "N/A"} · ${formData.email}`, 130, y);
    y += 6;
    doc.text(`Project Title: ${formData.projectName}`, margin, y);
    y += 6;
    doc.text(`Solution Type: ${calculation.typeName}`, margin, y);
    y += 6;
    doc.text(`Recommended Stack: ${calculation.stack}`, margin, y);
    y += 14;

    // Scope & Features
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text("2. Engineered Capabilities & Scope", margin, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    formData.selectedFeatures.forEach((fid) => {
      const feat = availableFeatures.find((f) => f.id === fid);
      if (feat && y < 240) {
        doc.text(`• ${feat.name} (${feat.category})`, margin + 4, y);
        y += 6;
      }
    });

    if (formData.description) {
      y += 4;
      doc.setFont("helvetica", "bold");
      doc.text("Custom Notes / Requirements:", margin, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      const splitNotes = doc.splitTextToSize(formData.description, 165);
      doc.text(splitNotes, margin, y);
      y += splitNotes.length * 6;
    }

    y += 10;
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y, 190, y);
    y += 12;

    // Financial & Timeline Estimate
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text("3. Budget & Schedule Summary", margin, y);
    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`Estimated Timeline: ~${calculation.totalDays} Business Days`, margin, y);
    y += 7;
    doc.setFont("helvetica", "bold");
    doc.text(`Estimated Investment: INR ${calculation.totalEstimate.toLocaleString()} (Excl. Taxes)`, margin, y);
    y += 12;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text("Note: This proposal provides an initial engineering estimate. Final commercial milestones", margin, y);
    y += 5;
    doc.text("will be formalized upon detailed sprint architecture confirmation.", margin, y);

    doc.save(`TechSasi_Proposal_${formData.projectName.replace(/\s+/g, "_")}.pdf`);
    toast.success("Executive Proposal PDF generated and downloaded.");
  };

  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.email || !formData.projectName) {
      toast.error("Please fill in Client Name, Email, and Project Title.");
      return;
    }

    setSubmitting(true);
    try {
      await fetch(`${API_URL}/enquiry.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.clientName,
          email: formData.email,
          mobile: formData.phone,
          course: `Proposal: ${formData.projectName} (${calculation.typeName} - Est: ₹${calculation.totalEstimate})`,
          message: `Features: ${formData.selectedFeatures.join(", ")}. Notes: ${formData.description}`,
        }),
      }).catch(() => null);

      // Persist locally
      try {
        const raw = localStorage.getItem("techsasi_proposals");
        const list = raw ? JSON.parse(raw) : [];
        list.unshift({
          id: Date.now(),
          client_name: formData.clientName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          project_name: formData.projectName,
          project_type: calculation.typeName,
          timeline: `~${calculation.totalDays} Days`,
          budget: String(calculation.totalEstimate),
          description: formData.description,
          features: formData.selectedFeatures.join(", "),
          created_at: new Date().toISOString(),
          status: "pending",
        });
        localStorage.setItem("techsasi_proposals", JSON.stringify(list));
      } catch (e) {
        void e;
      }

      toast.success("Proposal submitted directly to TechSasi engineering team. We will review and contact you within 12 hours.");
    } catch {
      toast.success("Proposal logged! Our team will reach out promptly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-36 pb-20 bg-slate-50 dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Proposal Calculator", active: true },
              ]}
            />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Proposal & Scope Builder</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
              Instant Architectural Estimate & Proposal Generator.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-2">
              Select your solution type and desired feature components to see realistic timelines, technology recommendations, and investment figures in real-time. Export an executive PDF immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Builder Grid */}
      <section className="py-20 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 Columns: Form & Feature Toggles */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Solution Paradigm */}
              <div className="rounded-2xl bg-[#0C111E] border border-white/[0.08] p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-bold text-amber-400">01. Select Solution Archetype</span>
                  <span className="text-xs font-mono text-slate-500">Base Architecture</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(baseProjectTypes).map(([key, item]) => {
                    const isSelected = formData.projectType === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: key })}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          isSelected
                            ? "bg-amber-400/10 border-amber-400/60 shadow-md"
                            : "bg-black/40 border-white/[0.06] hover:border-white/[0.15]"
                        }`}
                      >
                        <p className={`font-semibold text-sm ${isSelected ? "text-amber-300" : "text-white"}`}>
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1 font-mono">
                          Base ~{item.baseDays} Days · {item.defaultStack}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Feature Matrix Selection */}
              <div className="rounded-2xl bg-[#0C111E] border border-white/[0.08] p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-bold text-amber-400">02. Required Capabilities & Deliverables</span>
                  <span className="text-xs font-mono text-slate-400">{formData.selectedFeatures.length} Selected</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableFeatures.map((feat) => {
                    const isChecked = formData.selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3 rounded-lg border text-left flex items-start justify-between gap-3 transition-colors ${
                          isChecked
                            ? "bg-white/[0.08] border-amber-400/40 text-white"
                            : "bg-black/30 border-white/[0.04] text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs font-semibold text-white">{feat.name}</p>
                          <p className="text-[10px] font-mono text-slate-400">
                            {feat.category} · ~{feat.days}d sprint
                          </p>
                        </div>
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 ${
                          isChecked ? "bg-amber-400 border-amber-400 text-slate-950" : "border-slate-700"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Project & Client Details */}
              <div className="rounded-2xl bg-[#0C111E] border border-white/[0.08] p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs font-bold text-amber-400">03. Project & Contact Information</span>
                  <span className="text-xs font-mono text-slate-500">Confidential</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SasiKumar"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Enterprise"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-mono text-slate-300">
                    Project Title / Concept <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Automated Logistics & Inventory Portal"
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-mono text-slate-300">
                    Specific Feature Notes or Third-Party Integrations
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any additional specifications, links to existing software, or timeline deadlines..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Real-Time Proposal Preview & Actions */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              <div className="rounded-2xl bg-[#0B101D] border border-white/[0.1] p-6 sm:p-8 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                      Live Estimate
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      Proposal Summary
                    </h3>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Scope Breakdown */}
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Solution Type:</span>
                    <span className="text-white font-semibold">{calculation.typeName}</span>
                  </div>

                  <div className="flex justify-between text-slate-400">
                    <span>Recommended Stack:</span>
                    <span className="text-slate-300 truncate max-w-[200px] text-right">{calculation.stack}</span>
                  </div>

                  <div className="flex justify-between text-slate-400">
                    <span>Selected Modules:</span>
                    <span className="text-white">{formData.selectedFeatures.length} features</span>
                  </div>

                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Sprint Timeline:</span>
                    <span className="text-emerald-400 font-bold tabular-nums">~{calculation.totalDays} Business Days</span>
                  </div>
                </div>

                {/* Big Price Display */}
                <div className="pt-4 pb-2 border-t border-white/[0.08] text-center space-y-1 bg-black/40 rounded-xl p-4 border border-white/[0.04]">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                    Total Estimated Investment
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-black text-amber-400 tabular-nums">
                    ₹{calculation.totalEstimate.toLocaleString()}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 block">
                    Fixed-milestone pricing · 100% Code Ownership
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSubmitProposal}
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Submitting..." : "Submit to TechSasi Engineers"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadPDF}
                    className="w-full py-3.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-white/[0.08] hover:border-white/[0.15] transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Download Executive PDF</span>
                  </button>
                </div>

                {/* Guarantees */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>No hidden fees · Written Milestone SLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Official quote & call within 12 hours</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proposal;
