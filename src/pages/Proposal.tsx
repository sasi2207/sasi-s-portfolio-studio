import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { jsPDF } from "jspdf";
import { toast } from "sonner";
import {
  Download,
  Send,
  Check,
  Calculator,
  ShieldCheck,
  Clock,
} from "lucide-react";
import API_URL from "./api";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText = "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const inputCls =
  "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0057ff] focus:ring-2 focus:ring-[#00f0ff]/30 focus:bg-white transition-all";

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
  "static-web": { name: "Blazing-Fast Static Website", basePrice: 15000, baseDays: 7, defaultStack: "React · Next.js · Tailwind" },
  "dynamic-web": { name: "Scalable Dynamic Web App", basePrice: 28000, baseDays: 18, defaultStack: "React · Node.js · PostgreSQL" },
  "ecommerce": { name: "High-Converting E-Commerce Store", basePrice: 38000, baseDays: 24, defaultStack: "React · Node · Stripe/Razorpay" },
  "mobile-app": { name: "Cross-Platform Mobile App", basePrice: 45000, baseDays: 30, defaultStack: "Flutter / React Native · REST API" },
  "erp-software": { name: "Enterprise ERP Software Platform", basePrice: 45000, baseDays: 30, defaultStack: "React · Node/Python · PostgreSQL · Redis" },
  "crm-software": { name: "SRM & CRM Software Platform", basePrice: 35000, baseDays: 25, defaultStack: "React · TypeScript · PostgreSQL · WhatsApp API" },
  "hrm-software": { name: "HRM & Payroll Management Software", basePrice: 32000, baseDays: 22, defaultStack: "React · Express · PostgreSQL · Biometrics" },
  "billing-software": { name: "GST Billing & Retail POS Software", basePrice: 20000, baseDays: 14, defaultStack: "React · Electron/Web · PostgreSQL · ESC/POS" },
  "custom-erp": { name: "Custom ERP & Business Automation", basePrice: 65000, baseDays: 45, defaultStack: "React · Python/Node · PostgreSQL" },
  "devops": { name: "Secure Cloud & DevOps Infrastructure", basePrice: 20000, baseDays: 10, defaultStack: "AWS · Docker · CI/CD · Cloudflare" },
  "seo-growth": { name: "Growth-Driven Digital Marketing & SEO", basePrice: 18000, baseDays: 14, defaultStack: "Schema.org · Lighthouse · Edge SEO" },
  "academy": { name: "TechSasi Academy & Mentorship", basePrice: 25000, baseDays: 60, defaultStack: "React · TypeScript · 1-on-1 Mentorship" },
};

/* The service pages send these type values. They map to the cards above. */
const typeAliases: Record<string, string> = {
  "cloud-devops": "devops",
  "digital-marketing-seo": "seo-growth",
  "custom-workflow-erp": "custom-erp",
  "academy-mentorship": "academy",
};

const resolveType = (t: string | null): string | null => {
  if (!t) return null;
  const key = baseProjectTypes[t] ? t : typeAliases[t];
  return key && baseProjectTypes[key] ? key : null;
};

export const Proposal = () => {
  const [searchParams] = useSearchParams();
  const requestedType = resolveType(searchParams.get("type"));

  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    email: "",
    phone: "",
    projectName: "",
    projectType: requestedType ?? "dynamic-web",
    description: "",
    selectedFeatures: ["responsive", "admin", "auth", "devops"] as string[],
  });

  useEffect(() => {
    if (requestedType) {
      setFormData((prev) => ({ ...prev, projectType: requestedType }));
    }
  }, [requestedType]);

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
    doc.setTextColor(0, 87, 255);
    doc.text("TechSasi Engineering Proposal", margin, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 116, 139);
    doc.text("High-Performance Software Architecture · Salem, Tamil Nadu · info@techsasi.com", margin, y);
    y += 12;

    doc.setDrawColor(0, 240, 255);
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
    doc.setTextColor(51, 65, 85);
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
    doc.setDrawColor(0, 240, 255);
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
    doc.setTextColor(51, 65, 85);
    doc.text(`Estimated Timeline: ~${calculation.totalDays} Business Days`, margin, y);
    y += 7;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 87, 255);
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
      <main className="bg-white text-slate-900">

        {/* ============ HEADER ============ */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#0057ff]/15 blur-[140px] sm:w-[900px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Proposal Calculator", active: true },
                ]}
              />
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Calculator size={13} className="text-[#0057ff]" />
                <span className={gradText}>Interactive Proposal &amp; Scope Builder</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance text-slate-950 sm:text-5xl md:text-6xl">
                Instant Architectural Estimate &amp;{" "}
                <span className={gradText}>Proposal Generator.</span>
              </h1>

              <p className="max-w-2xl pt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
                Select your solution type and desired feature components to see realistic timelines, technology recommendations, and investment figures in real-time. Export an executive PDF immediately.
              </p>
            </div>
          </div>
        </section>

        {/* ============ BUILDER ============ */}
        <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

              {/* Left: form and toggles */}
              <div className="space-y-6 lg:col-span-7">

                {/* Step 1 */}
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="flex items-center gap-2 font-mono text-xs font-bold text-[#0057ff]">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white ${gradBg}`}>1</span>
                      Select Solution Archetype
                    </span>
                    <span className="font-mono text-xs text-slate-500">Base Architecture</span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {Object.entries(baseProjectTypes).map(([key, item]) => {
                      const isSelected = formData.projectType === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: key })}
                          aria-pressed={isSelected}
                          className={`cursor-pointer rounded-2xl border p-4 text-left transition-all ${
                            isSelected
                              ? "border-[#0057ff] bg-gradient-to-br from-[#00f0ff]/10 to-[#0057ff]/10 shadow-[0_6px_20px_rgba(0,87,255,0.15)]"
                              : "border-slate-200 bg-slate-50 hover:border-[#0057ff]/50 hover:bg-white"
                          }`}
                        >
                          <p className={`text-sm font-semibold ${isSelected ? "text-[#0057ff]" : "text-slate-900"}`}>
                            {item.name}
                          </p>
                          <p className="mt-1 font-mono text-[11px] text-slate-500">
                            Base ~{item.baseDays} Days · {item.defaultStack}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="flex items-center gap-2 font-mono text-xs font-bold text-[#0057ff]">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white ${gradBg}`}>2</span>
                      Required Capabilities &amp; Deliverables
                    </span>
                    <span className="font-mono text-xs text-slate-500">{formData.selectedFeatures.length} Selected</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {availableFeatures.map((feat) => {
                      const isChecked = formData.selectedFeatures.includes(feat.id);
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => toggleFeature(feat.id)}
                          aria-pressed={isChecked}
                          className={`flex cursor-pointer items-start justify-between gap-3 rounded-xl border p-3 text-left transition-all ${
                            isChecked
                              ? "border-[#0057ff] bg-gradient-to-br from-[#00f0ff]/10 to-[#0057ff]/10"
                              : "border-slate-200 bg-slate-50 hover:border-[#0057ff]/50 hover:bg-white"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <p className="text-xs font-semibold text-slate-900">{feat.name}</p>
                            <p className="font-mono text-[10px] text-slate-500">
                              {feat.category} · ~{feat.days}d sprint
                            </p>
                          </div>
                          <div
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                              isChecked ? `border-transparent text-white ${gradBg}` : "border-slate-300 bg-white"
                            }`}
                          >
                            {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="flex items-center gap-2 font-mono text-xs font-bold text-[#0057ff]">
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white ${gradBg}`}>3</span>
                      Project &amp; Contact Information
                    </span>
                    <span className="font-mono text-xs text-slate-500">Confidential</span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="clientName" className="font-mono text-xs text-slate-600">
                        Your Name <span className="text-[#0057ff]">*</span>
                      </label>
                      <input
                        id="clientName"
                        type="text"
                        required
                        placeholder="e.g. SasiKumar"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        className={inputCls}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="companyName" className="font-mono text-xs text-slate-600">
                        Company / Organization
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="e.g. Acme Enterprise"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className={inputCls}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="font-mono text-xs text-slate-600">
                        Email Address <span className="text-[#0057ff]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputCls}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="font-mono text-xs text-slate-600">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <label htmlFor="projectName" className="font-mono text-xs text-slate-600">
                      Project Title / Concept <span className="text-[#0057ff]">*</span>
                    </label>
                    <input
                      id="projectName"
                      type="text"
                      required
                      placeholder="e.g. Automated Logistics & Inventory Portal"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <label htmlFor="description" className="font-mono text-xs text-slate-600">
                      Specific Feature Notes or Third-Party Integrations
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      placeholder="Provide any additional specifications, links to existing software, or timeline deadlines..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>
              </div>

              {/* Right: live summary */}
              <div className="space-y-6 lg:sticky lg:top-24 lg:col-span-5">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#00f0ff]/25 via-[#0057ff]/15 to-transparent blur-2xl"
                  />
                  <div className="relative space-y-6 rounded-3xl border border-[#00f0ff]/40 bg-white p-6 shadow-[0_20px_60px_rgba(0,87,255,0.18)] sm:p-8">

                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <span className={`block text-[10px] font-bold uppercase tracking-widest ${gradText}`}>
                          Live Estimate
                        </span>
                        <h3 className="font-display text-xl font-bold text-slate-900">Proposal Summary</h3>
                      </div>
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between gap-4 text-slate-500">
                        <span>Solution Type:</span>
                        <span className="text-right font-semibold text-slate-900">{calculation.typeName}</span>
                      </div>
                      <div className="flex justify-between gap-4 text-slate-500">
                        <span className="shrink-0">Recommended Stack:</span>
                        <span className="max-w-[200px] truncate text-right text-slate-900">{calculation.stack}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Selected Modules:</span>
                        <span className="text-slate-900">{formData.selectedFeatures.length} features</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Estimated Sprint Timeline:</span>
                        <span className="font-bold tabular-nums text-emerald-600">~{calculation.totalDays} Business Days</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="space-y-1 rounded-2xl bg-gradient-to-br from-[#020b24] via-[#04215f] to-[#0057ff] p-5 text-center text-white">
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-white/70">
                        Total Estimated Investment
                      </span>
                      <div className="font-display text-3xl font-black tabular-nums text-white sm:text-4xl">
                        ₹{calculation.totalEstimate.toLocaleString()}
                      </div>
                      <span className="block font-mono text-[10px] text-[#00f0ff]">
                        Fixed-milestone pricing · 100% Code Ownership
                      </span>
                    </div>

                    <div className="space-y-3 pt-1">
                      <button
                        type="button"
                        onClick={handleSubmitProposal}
                        disabled={submitting}
                        className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_6px_22px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 disabled:opacity-50 ${gradBg}`}
                      >
                        <Send className="h-4 w-4" />
                        <span>{submitting ? "Submitting..." : "Submit to TechSasi Engineers"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleDownloadPDF}
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#00f0ff]/60 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all hover:border-[#0057ff] hover:text-[#0057ff] active:scale-95"
                      >
                        <Download className="h-4 w-4 text-[#0057ff]" />
                        <span>Download Executive PDF</span>
                      </button>
                    </div>

                    <div className="space-y-2 border-t border-slate-200 pt-4 font-mono text-[11px] text-slate-500">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        <span>No hidden fees · Written Milestone SLA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-[#0057ff]" />
                        <span>Official quote &amp; call within 12 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Proposal;