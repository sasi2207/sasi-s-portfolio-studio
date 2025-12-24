import { useEffect, useState } from "react";
import AOS from "aos";
import { jsPDF } from "jspdf";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Send, Download, Check } from "lucide-react";
import { toast } from "sonner";
import API_URL from "./api";

/* ✅ BACKEND API URL */
// const API_URL = "http://localhost/Rakshan/api/save-proposal.php";


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
     PDF GENERATION
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
    doc.setTextColor(15, 118, 110);
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
    toast.success("Proposal PDF downloaded");
  };

  /* ------------------------------
     SAVE TO DATABASE (API)
  ------------------------------- */
  const sendProposal = async () => {
    if (!formData.clientName || !formData.email || !formData.phone || !formData.projectName) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      toast.loading("Saving proposal...");

     const response = await fetch(`${API_URL}/save-proposal.php`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});


      const data = await response.json();
      toast.dismiss();

      if (!response.ok) throw new Error(data.error || "Failed to save proposal");

      toast.success("Proposal saved successfully!");

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
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ParallaxSection className="pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get a <span className="gradient-text">Project Proposal</span>
          </h1>
          <p className="text-muted-foreground">
            Fill the details below to generate and save your proposal.
          </p>
        </div>
      </ParallaxSection>

      <section className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="card-hover p-8">
            <div className="space-y-6">

              {/* Client Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <input name="clientName" value={formData.clientName} onChange={handleChange} className="input-field" placeholder="Your Name *" />
                <input name="companyName" value={formData.companyName} onChange={handleChange} className="input-field" placeholder="Company Name" />
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-4">
                <input name="email" type="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="Email *" />
                <input name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="Phone *" />
              </div>

              {/* Project */}
              <input name="projectName" value={formData.projectName} onChange={handleChange} className="input-field" placeholder="Project Name *" />

              <div className="grid md:grid-cols-2 gap-4">
                <select name="projectType" value={formData.projectType} onChange={handleChange} className="input-field">
                  <option value="static-website">Static Website</option>
                  <option value="dynamic-website">Dynamic Website</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="business">Business</option>
                  <option value="webapp">Web App</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="ecommerce">E-commerce</option>
                </select>

                <select name="timeline" value={formData.timeline} onChange={handleChange} className="input-field">
                  <option value="1-2 months">1-2 months</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>

              <select name="budget" value={formData.budget} onChange={handleChange} className="input-field">
                <option value="15000-25000">₹15k-25k</option>
                <option value="25000-40000">₹25k-40k</option>
                <option value="40000-60000">₹40k-60k</option>
                <option value="60000+">₹60k+</option>
              </select>

              <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Project description" />

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {featureOptions.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => handleFeatureToggle(f)}
                    className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
                      formData.features.includes(f)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10"
                    }`}
                  >
                    {formData.features.includes(f) && <Check size={14} />}
                    {f}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                {/* <button onClick={generatePDF} className="btn-primary flex gap-2">
                  <Download size={18} /> PDF
                </button> */}

                <button onClick={sendProposal} disabled={loading} className="btn-accent flex gap-2">
                  <Send size={18} />
                  {loading ? "Saving..." : "Save Proposal"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proposal;
