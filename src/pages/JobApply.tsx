import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Globe, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  MapPin,
  Clock,
  Plus,
  Trash2,
  ExternalLink,
  Upload,
  FileCheck
} from "lucide-react";
import { fetchJobByIdAPI, submitJobApplicationAPI, Job } from "./jobService"; 
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";

interface ProfessionalLink {
  id: string;
  type: "GitHub" | "LinkedIn" | "Portfolio" | "Other";
  url: string;
}

export const JobApply = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();

  const [job, setJob] = useState<Job | null>(null);
  const [jobLoading, setJobLoading] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceYears: "",
    coverLetter: "",
  });

  // Resume File State
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);

  // Dynamic Links State (Portfolio, GitHub, LinkedIn)
  const [linksList, setLinksList] = useState<ProfessionalLink[]>([]);
  const [currentLinkType, setCurrentLinkType] = useState<"GitHub" | "LinkedIn" | "Portfolio" | "Other">("GitHub");
  const [currentLinkUrl, setCurrentLinkUrl] = useState("");
  const [linkError, setLinkError] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch single job details directly from backend
  useEffect(() => {
    let isMounted = true;

    const getJobDetails = async () => {
      if (!jobId) {
        setError("Invalid Job ID provided in URL.");
        setJobLoading(false);
        return;
      }

      try {
        setJobLoading(true);
        setError(null);
        
        const jobData = await fetchJobByIdAPI(jobId);

        if (!isMounted) return;

        if (jobData && (jobData.id || jobData.title)) {
          setJob(jobData);
        } else {
          setError("Job position not found or has been closed.");
        }
      } catch (err: any) {
        console.error("Error fetching job details:", err);
        if (isMounted) {
          setError(err.message || "Failed to fetch job details. Please check your backend connection.");
        }
      } finally {
        if (isMounted) {
          setJobLoading(false);
        }
      }
    };

    getJobDetails();

    return () => {
      isMounted = false;
    };
  }, [jobId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Resume File Change & Validation (Max 2MB & PDF/Docx check)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setResumeError(null);

    if (!file) return;

    // Check File Size (2MB Limit)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setResumeError("File size exceeds 2MB limit. Please upload a smaller file.");
      e.target.value = "";
      setResumeFile(null);
      return;
    }

    // Allowed formats
    const allowedTypes = [
      "application/pdf", 
      "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    
    if (!allowedTypes.includes(file.type)) {
      setResumeError("Only PDF or Word documents are allowed.");
      e.target.value = "";
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  // Add Link Handler
  const handleAddLink = () => {
    if (!currentLinkUrl.trim()) {
      setLinkError("Please enter a valid URL.");
      return;
    }

    try {
      new URL(currentLinkUrl);
    } catch (_) {
      setLinkError("Please enter a valid URL starting with https://");
      return;
    }

    const newLinkItem: ProfessionalLink = {
      id: Date.now().toString(),
      type: currentLinkType,
      url: currentLinkUrl.trim(),
    };

    setLinksList([...linksList, newLinkItem]);
    setCurrentLinkUrl("");
    setLinkError("");
  };

  const handleRemoveLink = (id: string) => {
    setLinksList(linksList.filter((item) => item.id !== id));
  };

  // Form Submission Handler (Updated with camelCase keys to match Pydantic schema)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setResumeError("Please upload your resume file.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const dataToSend = new FormData();
      
      // Backend expects camelCase keys based on your Pydantic validation error
      dataToSend.append("jobId", String(job?.id || jobId || ""));
      dataToSend.append("jobTitle", job?.title || "");
      dataToSend.append("department", job?.department || "");
      dataToSend.append("fullName", formData.fullName);
      dataToSend.append("email", formData.email);
      dataToSend.append("phone", formData.phone);
      dataToSend.append("experienceYears", formData.experienceYears);
      dataToSend.append("coverLetter", formData.coverLetter);
      dataToSend.append("professionalLinks", JSON.stringify(linksList));
      dataToSend.append("appliedAt", new Date().toISOString()); // Added if required by backend
      dataToSend.append("resume", resumeFile);

      await submitJobApplicationAPI(dataToSend);

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (jobLoading) {
    return (
      <Layout>
        <div className="min-h-[80vh] bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center font-mono transition-colors duration-300">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[var(--text-muted)] text-sm">Loading position details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 md:py-20 relative overflow-hidden transition-colors duration-300">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 pt-16">
          
          {/* Breadcrumb Navigation & Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Careers", href: "/careers" },
                { label: job ? job.title : "Apply", active: true },
              ]}
            />
            <Link 
              to="/careers" 
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <ArrowLeft size={14} /> Back to Careers
            </Link>
          </div>

          {!job || error ? (
            <div className="bg-[var(--card-bg)] border border-[var(--border-line)] p-8 rounded-3xl text-center space-y-4 shadow-sm transition-colors">
              <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Application Error</h2>
              <p className="text-[var(--text-muted)] text-sm">{error || "Requested job opening is unavailable."}</p>
              <button
                onClick={() => navigate("/careers")}
                className="bg-[var(--accent)] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 transition cursor-pointer shadow-sm"
              >
                Browse Open Careers
              </button>
            </div>
          ) : submitted ? (
            
            /* SUCCESS STATE */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[var(--card-bg)] border border-[var(--border-line)] p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-xl backdrop-blur-md transition-colors"
            >
              <div className="w-16 h-16 bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/25 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-[var(--text-primary)]">Application Submitted!</h2>
                <p className="text-[var(--text-muted)] text-sm mt-2 max-w-md mx-auto">
                  Thank you for applying for <span className="text-[var(--accent)] font-semibold">{job.title}</span>. Our team will review your application and contact you soon.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => navigate("/careers")}
                  className="bg-[var(--surface-ink)] text-white hover:opacity-90 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-sm"
                >
                  View More Positions
                </button>
              </div>
            </motion.div>

          ) : (

            /* FORM STATE */
            <div className="space-y-8">
              
              {/* Job Header Summary */}
              <div className="bg-[var(--hero-bg)] border border-[var(--border-line)] p-6 md:p-8 rounded-3xl shadow-sm transition-colors">
                <h1 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] mb-3">{job.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock size={12} className="text-[var(--accent)]" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-[var(--accent)]" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} className="text-[var(--accent)]" /> {job.experience}
                  </span>
                </div>
              </div>

              {/* Application Form */}
              <div className="bg-[var(--card-bg)] border border-[var(--border-line)] p-6 md:p-10 rounded-3xl shadow-sm transition-colors space-y-6">
                <div className="border-b border-[var(--border-line)] pb-4">
                  <h3 className="text-xl font-extrabold text-[var(--text-primary)]">Candidate Information</h3>
                  <p className="text-[var(--text-muted)] text-xs mt-1">Please fill in your correct details and upload your resume.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="job-fullname" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 flex items-center gap-1.5">
                      <User size={14} className="text-[var(--accent)]" /> Full Name *
                    </label>
                    <input
                      id="job-fullname"
                      type="text"
                      name="fullName"
                      required
                      aria-required="true"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sasi Kumar"
                      className="w-full bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] text-[var(--text-primary)] transition"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="job-email" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 flex items-center gap-1.5">
                        <Mail size={14} className="text-[var(--accent)]" /> Email Address *
                      </label>
                      <input
                        id="job-email"
                        type="email"
                        name="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sasi@example.com"
                        className="w-full bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] text-[var(--text-primary)] transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="job-phone" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 flex items-center gap-1.5">
                        <Phone size={14} className="text-[var(--accent)]" /> Phone / WhatsApp Number *
                      </label>
                      <input
                        id="job-phone"
                        type="tel"
                        name="phone"
                        required
                        aria-required="true"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] text-[var(--text-primary)] transition"
                      />
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label htmlFor="job-experience" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 flex items-center gap-1.5">
                      <Briefcase size={14} className="text-[var(--accent)]" /> Total Years of Relevant Experience *
                    </label>
                    <input
                      id="job-experience"
                      type="text"
                      name="experienceYears"
                      required
                      aria-required="true"
                      value={formData.experienceYears}
                      onChange={handleChange}
                      placeholder="e.g. Fresher / 2 Years in React.js"
                      className="w-full bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] text-[var(--text-primary)] transition"
                    />
                  </div>

                  {/* DYNAMIC PROFESSIONAL LINKS */}
                  <div className="bg-[var(--surface-fill)] border border-[var(--border-line)] p-4 md:p-5 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
                        <Globe size={14} className="text-[var(--accent)]" /> Professional Profiles &amp; Portfolios
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] font-mono">Optional</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      <label htmlFor="job-link-type" className="sr-only">
                        Link Platform
                      </label>
                      <select
                        id="job-link-type"
                        aria-label="Link platform or type"
                        value={currentLinkType}
                        onChange={(e) => setCurrentLinkType(e.target.value as any)}
                        className="bg-[var(--card-bg)] border border-[var(--border-line)] rounded-xl px-3 py-2.5 text-xs text-[var(--accent)] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] cursor-pointer"
                      >
                        <option value="GitHub">GitHub</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="Other">Other</option>
                      </select>

                      <div className="sm:col-span-3 flex gap-2">
                        <label htmlFor="job-link-url" className="sr-only">
                          Profile or Portfolio URL
                        </label>
                        <input
                          id="job-link-url"
                          type="url"
                          aria-label="Profile or Portfolio URL"
                          value={currentLinkUrl}
                          onChange={(e) => {
                            setCurrentLinkUrl(e.target.value);
                            setLinkError("");
                          }}
                          placeholder="https://..."
                          className="flex-1 bg-[var(--card-bg)] border border-[var(--border-line)] rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] text-[var(--text-primary)] transition"
                        />
                        <button
                          type="button"
                          onClick={handleAddLink}
                          aria-label="Add professional link"
                          className="bg-[var(--accent)] text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 transition cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          <Plus size={16} /> Add
                        </button>
                      </div>
                    </div>

                    {linkError && (
                      <p role="alert" className="text-rose-500 text-[11px]">
                        {linkError}
                      </p>
                    )}

                    {linksList.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <p className="text-[11px] font-semibold text-[var(--text-muted)]">Added Links ({linksList.length}):</p>
                        <div className="flex flex-col gap-2">
                          <AnimatePresence>
                            {linksList.map((item) => (
                              <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex items-center justify-between bg-[var(--card-bg)] border border-[var(--border-line)] px-3.5 py-2 rounded-xl text-xs"
                              >
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 shrink-0">
                                    {item.type}
                                  </span>
                                  <a 
                                    href={item.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-[var(--text-primary)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:underline truncate flex items-center gap-1 transition"
                                  >
                                    {item.url} <ExternalLink size={11} />
                                  </a>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveLink(item.id)}
                                  className="text-[var(--text-muted)] hover:text-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded p-1 cursor-pointer shrink-0 transition"
                                  title={`Remove ${item.type} link`}
                                  aria-label={`Remove ${item.type} link`}
                                >
                                  <Trash2 size={14} />
                                </button>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* MANUAL RESUME UPLOAD */}
                  <div className="space-y-1.5">
                    <label htmlFor="job-resume-file" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5 flex items-center gap-1.5 cursor-pointer">
                      <FileText size={14} className="text-[var(--accent)]" /> Upload Resume (PDF / DOCX, Max 2MB) *
                    </label>

                    <div className="relative border-2 border-dashed border-[var(--border-line)] hover:border-[var(--accent)] focus-within:border-[var(--accent)] focus-within:ring-2 focus-within:ring-[var(--accent)]/30 bg-[var(--surface-fill)] rounded-2xl p-6 text-center transition group cursor-pointer">
                      <input
                        id="job-resume-file"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        aria-required="true"
                        aria-label="Upload resume file in PDF, DOC, or DOCX format, maximum 2MB"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 focus-visible:outline-none"
                      />
                      
                      <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                        {resumeFile ? (
                          <>
                            <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20">
                              <FileCheck size={20} />
                            </div>
                            <p className="text-xs font-bold text-[var(--accent)]">{resumeFile.name}</p>
                            <p className="text-[10px] text-[var(--text-muted)]">
                              {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB — Ready to submit
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] text-[var(--text-muted)] group-hover:text-[var(--accent)] flex items-center justify-center border border-[var(--border-line)] transition">
                              <Upload size={18} />
                            </div>
                            <p className="text-xs text-[var(--text-primary)] font-semibold">
                              Drag &amp; drop your resume here, or <span className="text-[var(--accent)] underline">browse</span>
                            </p>
                            <p className="text-[10px] text-[var(--text-muted)]">Supports PDF, DOC, DOCX up to 2MB</p>
                          </>
                        )}
                      </div>
                    </div>

                    {resumeError && (
                      <p role="alert" className="text-rose-500 text-xs mt-1 font-medium">
                        {resumeError}
                      </p>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="job-cover-letter" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                      Cover Note / Why should we hire you?
                    </label>
                    <textarea
                      id="job-cover-letter"
                      name="coverLetter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Briefly describe your key skills, projects, or achievements..."
                      className="w-full bg-[var(--surface-fill)] border border-[var(--border-line)] rounded-xl p-4 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus:border-[var(--accent)] text-[var(--text-primary)] resize-none transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    aria-busy={submitting}
                    className="w-full bg-[var(--accent)] text-white font-bold py-4 rounded-xl uppercase tracking-wider text-xs sm:text-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 transition shadow-lg shadow-[var(--accent)]/20 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      "Submitting Application..."
                    ) : (
                      <>
                        Submit Application <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};