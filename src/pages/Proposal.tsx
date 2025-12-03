import { useEffect, useState } from 'react';
import AOS from 'aos';
import { jsPDF } from 'jspdf';
import { Layout } from '@/components/layout/Layout';
import { ParallaxSection } from '@/components/common/ParallaxSection';
import { FileText, Send, Download, Check } from 'lucide-react';
import { toast } from 'sonner';

const Proposal = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    projectName: '',
    projectType: 'website',
    description: '',
    timeline: '1-2 months',
    budget: '25000-50000',
    features: [] as string[],
  });

  const featureOptions = [
    'Responsive Design',
    'Admin Dashboard',
    'User Authentication',
    'Payment Integration',
    'API Development',
    'Database Setup',
    'SEO Optimization',
    'Analytics Integration',
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const lineHeight = 7;
    let y = 20;

    // Header
    doc.setFontSize(24);
    doc.setTextColor(15, 118, 110);
    doc.text('Project Proposal', 20, y);
    y += 15;

    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Prepared for: ${formData.clientName || 'Client'}`, 20, y);
    y += lineHeight;
    doc.text(`Company: ${formData.companyName || 'N/A'}`, 20, y);
    y += lineHeight;
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, y);
    y += 15;

    // Project Details
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text('Project Details', 20, y);
    y += 10;

    doc.setFontSize(11);
    doc.setTextColor(60);
    doc.text(`Project Name: ${formData.projectName || 'Untitled Project'}`, 20, y);
    y += lineHeight;
    doc.text(`Type: ${formData.projectType}`, 20, y);
    y += lineHeight;
    doc.text(`Timeline: ${formData.timeline}`, 20, y);
    y += lineHeight;
    doc.text(`Budget Range: ₹${formData.budget}`, 20, y);
    y += 15;

    // Description
    if (formData.description) {
      doc.setFontSize(16);
      doc.setTextColor(15, 23, 42);
      doc.text('Project Description', 20, y);
      y += 10;

      doc.setFontSize(11);
      doc.setTextColor(60);
      const descLines = doc.splitTextToSize(formData.description, 170);
      doc.text(descLines, 20, y);
      y += descLines.length * lineHeight + 10;
    }

    // Features
    if (formData.features.length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(15, 23, 42);
      doc.text('Selected Features', 20, y);
      y += 10;

      doc.setFontSize(11);
      doc.setTextColor(60);
      formData.features.forEach(feature => {
        doc.text(`• ${feature}`, 25, y);
        y += lineHeight;
      });
    }

    // Footer
    y = 270;
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('SasiKumar - Full-Stack Developer', 20, y);
    doc.text('Phone: +91 7448788879 | Email: sasikumarp2207@gmail.com', 20, y + 5);

    doc.save(`proposal-${formData.projectName || 'project'}.pdf`);
    toast.success('Proposal PDF downloaded successfully!');
  };

  const sendProposal = () => {
    const subject = encodeURIComponent(`Project Proposal: ${formData.projectName}`);
    const body = encodeURIComponent(
      `Hi SasiKumar,\n\nI would like to discuss a project:\n\n` +
      `Project: ${formData.projectName}\n` +
      `Type: ${formData.projectType}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Budget: ₹${formData.budget}\n\n` +
      `Description:\n${formData.description}\n\n` +
      `Features: ${formData.features.join(', ')}\n\n` +
      `Best regards,\n${formData.clientName}`
    );
    window.open(`mailto:sasikumarp2207@gmail.com?subject=${subject}&body=${body}`);
    toast.success('Opening email client...');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-32 pb-16 bg-hero-pattern"
        bgClassName="bg-gradient-to-b from-primary/5 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-aos="fade-up">
              Get a <span className="gradient-text">Proposal</span>
            </h1>
            <p className="text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Fill out the form below to generate a custom project proposal.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card-hover p-8" data-aos="fade-up">
              <div className="space-y-6">
                {/* Client Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <label className="block text-sm font-medium mb-2">Project Name *</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="E-commerce Website"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="website">Website</option>
                      <option value="webapp">Web Application</option>
                      <option value="dashboard">Admin Dashboard</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
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
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range (INR)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="< 25000">Less than ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                    <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                    <option value="200000+">₹2,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium mb-3">Features Needed</label>
                  <div className="grid grid-cols-2 gap-2">
                    {featureOptions.map((feature) => (
                      <button
                        key={feature}
                        type="button"
                        onClick={() => handleFeatureToggle(feature)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all
                                  ${formData.features.includes(feature) 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'bg-muted text-muted-foreground hover:bg-primary/10'}`}
                      >
                        {formData.features.includes(feature) && <Check size={14} />}
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={generatePDF}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Download size={18} />
                    Generate PDF
                  </button>
                  <button
                    onClick={sendProposal}
                    className="btn-accent inline-flex items-center gap-2"
                  >
                    <Send size={18} />
                    Send Proposal
                  </button>
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
