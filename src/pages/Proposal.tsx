import { useEffect, useState } from "react";
import AOS from "aos";
import { jsPDF } from "jspdf";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Send, Download, Check } from "lucide-react";
import { toast } from "sonner";

const Proposal = () => {
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
    if (
      !formData.clientName ||
      !formData.email ||
      !formData.phone ||
      !formData.projectName
    ) {
      toast.error("Please fill all required contact details");
      return;
    }

    const doc = new jsPDF();
    let y = 20;
    const lh = 7;

    // Header
    doc.setFontSize(22);
    doc.setTextColor(15, 118, 110);
    doc.text("Project Proposal", 20, y);
    y += 14;

    doc.setFontSize(11);
    doc.setTextColor(80);
    doc.text(`Prepared for: ${formData.clientName}`, 20, y);
    y += lh;
    doc.text(`Company: ${formData.companyName || "N/A"}`, 20, y);
    y += lh;
    doc.text(`Email: ${formData.email}`, 20, y);
    y += lh;
    doc.text(`Phone: ${formData.phone}`, 20, y);
    y += lh;
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, y);
    y += 12;

    // Project Details
    doc.setFontSize(15);
    doc.setTextColor(15, 23, 42);
    doc.text("Project Details", 20, y);
    y += 8;

    doc.setFontSize(11);
    doc.setTextColor(60);
    doc.text(`Project Name: ${formData.projectName}`, 20, y);
    y += lh;
    doc.text(`Project Type: ${formData.projectType}`, 20, y);
    y += lh;
    doc.text(`Timeline: ${formData.timeline}`, 20, y);
    y += lh;
    doc.text(`Budget Range: ₹${formData.budget}`, 20, y);
    y += 12;

    // Description
    if (formData.description) {
      doc.setFontSize(15);
      doc.setTextColor(15, 23, 42);
      doc.text("Project Description", 20, y);
      y += 8;

      doc.setFontSize(11);
      doc.setTextColor(60);
      const lines = doc.splitTextToSize(formData.description, 170);
      doc.text(lines, 20, y);
      y += lines.length * lh + 8;
    }

    // Features
    if (formData.features.length > 0) {
      doc.setFontSize(15);
      doc.setTextColor(15, 23, 42);
      doc.text("Selected Features", 20, y);
      y += 8;

      doc.setFontSize(11);
      doc.setTextColor(60);
      formData.features.forEach((f) => {
        doc.text(`• ${f}`, 25, y);
        y += lh;
      });
    }

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text(
      "SasiKumar | Full-Stack Developer",
      20,
      280
    );
    doc.text(
      "Phone: +91 7448788879 | Email: sasikumarp2207@gmail.com",
      20,
      285
    );

    doc.save(`proposal-${formData.projectName}.pdf`);
    toast.success("Proposal PDF downloaded successfully");
  };

  /* ------------------------------
     SEND EMAIL
  ------------------------------- */
  const sendProposal = () => {
    if (
      !formData.clientName ||
      !formData.email ||
      !formData.phone ||
      !formData.projectName
    ) {
      toast.error("Please fill all required contact details");
      return;
    }

    const subject = encodeURIComponent(
      `Project Proposal - ${formData.projectName}`
    );

    const body = encodeURIComponent(
      `Client Details\n` +
        `----------------------\n` +
        `Name: ${formData.clientName}\n` +
        `Company: ${formData.companyName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Project Details\n` +
        `----------------------\n` +
        `Project Name: ${formData.projectName}\n` +
        `Type: ${formData.projectType}\n` +
        `Timeline: ${formData.timeline}\n` +
        `Budget: ₹${formData.budget}\n\n` +
        `Description:\n${formData.description}\n\n` +
        `Features:\n${formData.features.join(", ")}`
    );

    window.open(
      `mailto:sasikumarp2207@gmail.com?subject=${subject}&body=${body}`
    );
    toast.success("Opening email client...");
  };

  return (
    <Layout>
      {/* Hero */}
      <ParallaxSection className="pt-32 pb-16">
        <div className="container-custom ">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-up"
          >
            Get a <span className="gradient-text">Project Proposal</span>
          </h1>
          <p
            className="text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Fill the details below to generate and send your proposal.
          </p>
        </div>
      </ParallaxSection>

      {/* Form */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="card-hover p-8" data-aos="fade-up">
            <div className="space-y-6">
              {/* Client Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your Name *"
                />
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Company Name"
                />
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Email Address *"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Phone Number *"
                />
              </div>

              {/* Project */}
              <input
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="input-field"
                placeholder="Project Name *"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="static-website">Static Website</option>
                  <option value="dynamic-website">Dynamic Website</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="business">Business Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="dashboard">Admin Dashboard</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="deployment">Deployment & Hosting</option>
                </select>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="< 1 month">Less than 1 month</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </div>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="input-field"
              >
                <option value="15000-25000">₹15,000 – ₹25,000</option>
                <option value="25000-40000">₹25,000 – ₹40,000</option>
                <option value="40000-60000">₹40,000 – ₹60,000</option>
                <option value="60000+">₹60,000+</option>
              </select>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="input-field resize-none"
                placeholder="Project description"
              />

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {featureOptions.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => handleFeatureToggle(f)}
                    className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2
                      ${
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
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={generatePDF}
                  className="btn-primary flex items-center gap-2"
                >
                  <Download size={18} /> Generate PDF
                </button>

                <button
                  onClick={sendProposal}
                  className="btn-accent flex items-center gap-2"
                >
                  <Send size={18} /> Send Proposal
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
