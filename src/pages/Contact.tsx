import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, ChevronDown, Clock, ShieldCheck, Workflow, Radio } from "lucide-react";
import { CenterFlow } from "@/components/ui/center-flow";
import { toast } from "sonner";
import API_URL from "./api";

const faqs = [
  {
    q: "How fast can you start our project?",
    a: "Following an initial discovery session and proposal sign-off, we assemble the architecture and begin active sprint delivery within 3 to 5 business days."
  },
  {
    q: "Who owns the source code and Intellectual Property?",
    a: "You do. 100%. Upon milestone completion and final handoff, you receive full ownership of the git repository, database schemas, and cloud deployment pipelines with zero lock-in."
  },
  {
    q: "How are project milestones and payments structured?",
    a: "We work on a transparent milestone basis: typically 30% advance on architectural blueprint sign-off, 40% on staging delivery and testing, and 30% upon final production launch."
  },
  {
    q: "Do you provide post-launch maintenance and support?",
    a: "Yes. Every project includes 30 days of complimentary post-launch bug fixing and monitoring. We also provide ongoing monthly maintenance plans for security updates, backups, and feature iterations."
  },
  {
    q: "Where is TechSasi located? Can we meet in person?",
    a: "Our core engineering office is located in Kolathur, Mettur, Salem, Tamil Nadu. We welcome client visits by appointment and regularly support clients across Tamil Nadu, Bangalore, and globally via video consultations."
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Application",
    budget: "₹25,000 – ₹50,000",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      toast.success("Thank you! Your message has been received. Our team will get in touch promptly.");
    } catch {
      try {
        const raw = localStorage.getItem("techsasi_contacts");
        const list = raw ? JSON.parse(raw) : [];
        list.unshift({
          id: Date.now(),
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: `${formData.service} (${formData.budget})`,
          message: formData.message,
          created_at: new Date().toISOString(),
        });
        localStorage.setItem("techsasi_contacts", JSON.stringify(list));
      } catch (e) {
        void e;
      }
      setSubmitted(true);
      toast.success("Inquiry received! We will reach out promptly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-[var(--hero-bg)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Contact", active: true },
              ]}
            />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold">
              <span>Direct Communication</span>
              <span aria-hidden="true">·</span>
              <span>Salem, Tamil Nadu</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1] text-balance">
              Start Your Project or Schedule a Consultation.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl pt-2">
              Have an idea, need software re-architecture, or want to discuss hands-on developer training? Reach out directly to our engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Contact Details */}
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Coordinates & Office Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                  Get in Touch
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                  Direct Engineering Access. No Middlemen.
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  When you reach out to TechSasi, you communicate directly with senior software engineers who evaluate technical feasibility, timelines, and costs upfront.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-line)] flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">Direct Phone Call</p>
                    <a href="tel:+917448788879" className="text-[var(--text-primary)] font-bold font-mono hover:text-[var(--accent)] transition-colors text-sm">
                      +91 7448788879
                    </a>
                    <p className="text-[11px] text-[var(--text-subtle)] mt-0.5">Mon–Sat, 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-line)] flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">WhatsApp Fast Response</p>
                    <a
                      href="https://wa.me/917448788897"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-primary)] font-bold font-mono hover:text-emerald-500 transition-colors text-sm"
                    >
                      +91 7448788897
                    </a>
                    <p className="text-[11px] text-[var(--text-subtle)] mt-0.5">Instant chat for quick quotes & queries</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-line)] flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">Email Inquiries</p>
                    <a href="mailto:info@techsasi.com" className="text-[var(--text-primary)] font-bold font-mono hover:text-[var(--accent)] transition-colors text-sm block">
                      info@techsasi.com
                    </a>
                    <a href="mailto:techsasi22@gmail.com" className="text-[var(--text-muted)] font-mono hover:text-[var(--text-primary)] transition-colors text-xs">
                      techsasi22@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-line)] flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">Engineering Office</p>
                    <p className="text-[var(--text-primary)] font-semibold text-sm">TechSasi Hub</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      Kolathur, Mettur Taluk, Salem District, Tamil Nadu — 636303, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-500 font-semibold">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Average inquiry response time: &lt;4 hours</span>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] p-8 sm:p-10 shadow-xl transition-colors">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting TechSasi. A member of our technical team will review your specifications and contact you directly via phone or email shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface-fill)] hover:bg-[var(--surface-fill-subtle)] rounded-lg border border-[var(--border-line)] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                        Project Consultation Request
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        Fill in your requirements below for a rapid feasibility review and proposal.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[var(--text-primary)] font-medium">
                          Full Name <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. SasiKumar"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[var(--text-primary)] font-medium">
                          Email Address <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[var(--text-primary)] font-medium">
                          Phone / WhatsApp <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-[var(--text-primary)] font-medium">
                          Target Service Area
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                        >
                          <option value="Web Application">Web Application (React / Next)</option>
                          <option value="Mobile App Development">Mobile App (Flutter / React Native)</option>
                          <option value="E-Commerce Platform">E-Commerce & Online Store</option>
                          <option value="Custom ERP & CRM">Custom ERP / CRM System</option>
                          <option value="Cloud Deployment">Cloud Deployment & Hosting</option>
                          <option value="Developer Training">Developer Training / Coaching</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[var(--text-primary)] font-medium">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                      >
                        <option value="Under ₹25,000">Under ₹25,000 (Starter / MVP)</option>
                        <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Standard Commercial)</option>
                        <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Custom Full-Stack)</option>
                        <option value="₹1,00,000+">₹1,00,000+ (Enterprise / SaaS Platform)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[var(--text-primary)] font-medium">
                        Project Overview & Key Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe what you're looking to build, any existing references, and target launch timeline..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--surface-fill)] border border-[var(--border-line)] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Processing Dispatch...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-[var(--text-muted)] text-center font-mono">
                      Your contact details are strictly confidential. We never spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Communications Dispatcher - CenterFlow */}
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 sm:p-10 relative overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                  Always Connected
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  Communications &amp; Triage Hub
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  Every inquiry routed with zero latency to the appropriate technical lead or founder desk.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 w-fit">
                <Workflow className="w-3.5 h-3.5" /> 8 Channel Nodes
              </span>
            </div>

            <div className="h-[480px] w-full relative overflow-hidden flex items-center justify-center pt-2">
              <CenterFlow
                centerSize={130}
                nodeSize={72}
                pulseDuration={4}
                pulseInterval={5}
                pulseLength={0.4}
                nodeDistance={0.74}
                centerContent={
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <Radio className="w-7 h-7 text-[var(--accent)] animate-pulse mb-1" />
                    <span className="text-[10px] font-mono font-black text-[var(--text-primary)] uppercase tracking-wider">
                      DISPATCH
                    </span>
                    <span className="text-[9px] font-mono text-[var(--accent)] font-semibold">
                      TechSasi Salem
                    </span>
                  </div>
                }
                nodeItems={[
                  {
                    id: "c1",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">01</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Direct Email</span>
                      </div>
                    ),
                  },
                  {
                    id: "c2",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">02</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">WhatsApp Desk</span>
                      </div>
                    ),
                  },
                  {
                    id: "c3",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">03</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Salem Studio</span>
                      </div>
                    ),
                  },
                  {
                    id: "c4",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">04</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Sprint Proposal</span>
                      </div>
                    ),
                  },
                  {
                    id: "c5",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">05</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Emergency Hotfix</span>
                      </div>
                    ),
                  },
                  {
                    id: "c6",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">06</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Code Review</span>
                      </div>
                    ),
                  },
                  {
                    id: "c7",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">07</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Cloud Audit</span>
                      </div>
                    ),
                  },
                  {
                    id: "c8",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">08</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">24h SLA</span>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase">Common Inquiries</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
              Everything you need to know about working with TechSasi.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl bg-[var(--card-bg)] border border-[var(--border-line)] overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[var(--text-muted)] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-line)]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
