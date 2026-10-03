import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchJobsFromAPI, Job } from "./jobService"; 
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { CareerGridSkeleton } from "@/components/skeletons";

const fallbackJobs: Job[] = [
  {
    id: "sw-py-01",
    title: "Full Stack Python Developer",
    department: "Softwaredevelopment",
    location: "Chennai / Salem / Remote",
    type: "Full-Time",
    experience: "2–4 Years",
    description: "Build robust enterprise backend architectures using Python FastAPI and modern React frontend interfaces with high test coverage.",
    requirements: ["Python 3.11+", "FastAPI", "React.js", "PostgreSQL", "REST APIs & Docker"]
  },
  {
    id: "fe-react-01",
    title: "Full-Stack React & Node Engineer",
    department: "Engineering",
    location: "Salem, Tamil Nadu / Hybrid",
    type: "Full-Time",
    experience: "1–3 Years",
    description: "Build high-frequency web applications, decoupled API systems, and responsive frontends for enterprise clients across India.",
    requirements: ["React 18", "TypeScript", "Node.js / Express", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "media-ai-01",
    title: "Content Creator & AI Video Editor",
    department: "Media",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "0–2 Years",
    description: "Creative content creator to produce engaging engineering demos, social media reels, and visual explainers for our software products.",
    requirements: ["AI Generative Tools", "Adobe Premiere Pro / CapCut", "Canva Pro", "Technical Storytelling"]
  },
  {
    id: "admin-exec-01",
    title: "Office Staff / Executive Administration",
    department: "Administration",
    location: "Salem, Tamil Nadu (On-site)",
    type: "Full-Time",
    experience: "1–3 Years",
    description: "Manage client documentation, onboarding communication, office coordination, and day-to-day studio administration operations.",
    requirements: ["Clear Written & Verbal Communication", "MS Office / Google Docs", "Documentation Management"]
  },
  {
    id: "eng-flutter-02",
    title: "Mobile Application Developer (Flutter & iOS)",
    department: "Engineering",
    location: "Salem, Tamil Nadu / Remote",
    type: "Full-Time",
    experience: "1–2 Years",
    description: "Develop, test, and deploy cross-platform iOS and Android mobile applications integrated with REST and GraphQL backends.",
    requirements: ["Flutter", "Dart", "Firebase", "State Management (Bloc/Riverpod)", "App Store Deploy"]
  },
  {
    id: "sw-intern-03",
    title: "Junior Full Stack Developer & Intern",
    department: "Softwaredevelopment",
    location: "Kolathur / Salem, TN (On-site)",
    type: "Internship",
    experience: "Fresher / Student",
    description: "Hands-on real project development alongside senior engineers. Master modern Git PR workflows, component architecture, and API integration.",
    requirements: ["HTML5 & CSS3", "JavaScript ES6+", "Basic React.js", "Problem Solving Mindset"]
  }
];

const careerDepartments = [
  "All",
  "Softwaredevelopment",
  "Media",
  "Administration",
  "Engineering"
];

export const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>(fallbackJobs);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const liveJobs = await fetchJobsFromAPI();
        if (liveJobs && liveJobs.length > 0) {
          setJobs(liveJobs);
        }
      } catch (err) {
        console.warn("Using fallback jobs array:", err);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    loadJobs();
  }, []);

  const handleDepartmentChange = (dept: string) => {
    if (dept === selectedDepartment) return;
    setIsLoading(true);
    setSelectedDepartment(dept);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  const isMatchDepartment = (jobDept: string, selected: string) => {
    if (selected === "All") return true;
    const cleanSelected = selected.toLowerCase().replace(/[\s-_]/g, "");
    const cleanJob = (jobDept || "").toLowerCase().replace(/[\s-_]/g, "");

    if (cleanJob === cleanSelected) return true;
    if (cleanSelected === "softwaredevelopment" && (cleanJob.includes("software") || cleanJob.includes("development") || cleanJob.includes("mentorship"))) {
      return true;
    }
    if (cleanSelected === "engineering" && (cleanJob.includes("engineer") || cleanJob.includes("mobile") || cleanJob.includes("flutter"))) {
      return true;
    }
    return cleanJob.includes(cleanSelected) || cleanSelected.includes(cleanJob);
  };

  const filteredJobs = jobs.filter((j) => isMatchDepartment(j.department, selectedDepartment));

  return (
    <Layout>
      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-slate-50 dark:bg-[#06090F] border-b border-slate-200 dark:border-white/[0.08] relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/" },
                { label: "Careers", active: true },
              ]}
            />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Engineering Careers</span>
              <span aria-hidden="true">·</span>
              <span>Salem, Tamil Nadu</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
              Work on Production Software. Elevate Your Engineering.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-2">
              Join a disciplined software studio and coaching ecosystem. We hire passionate problem-solvers who care about clean code, high speed, and measurable client success.
            </p>
          </div>
        </div>
      </section>

      {/* Department Filter Segmented Control with Navigation Animation */}
      <section className="py-6 bg-white/90 dark:bg-[#07090E]/90 border-b border-slate-200 dark:border-white/[0.06] sticky top-16 z-30 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {careerDepartments.map((dept) => {
              const isActive = selectedDepartment === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => handleDepartmentChange(dept)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "text-slate-950 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCareerDeptPill"
                      className="absolute inset-0 bg-amber-400 rounded-lg shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{dept}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs Grid with Skeleton Loader & Navigate Animation */}
      <section className="py-20 bg-slate-50/50 dark:bg-[#07090E] border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <CareerGridSkeleton count={filteredJobs.length || 3} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDepartment}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredJobs.length === 0 ? (
                  <div className="col-span-full text-center py-16 bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] rounded-2xl p-8">
                    <p className="text-sm font-mono text-slate-500">No active positions in {selectedDepartment} right now.</p>
                    <button
                      onClick={() => handleDepartmentChange("All")}
                      className="mt-4 px-4 py-2 text-xs font-semibold bg-amber-400 text-slate-950 rounded-lg"
                    >
                      View All Open Roles
                    </button>
                  </div>
                ) : (
                  filteredJobs.map((job, idx) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="rounded-2xl bg-white dark:bg-[#0B101D] border border-slate-200 dark:border-white/[0.08] hover:border-amber-400/40 p-6 flex flex-col justify-between transition-all duration-300 group shadow-sm dark:shadow-none"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06] text-xs font-mono">
                          <span className="text-amber-600 dark:text-amber-400 font-semibold">{job.department}</span>
                          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.type}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-amber-500" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                            {job.experience}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                          {job.description}
                        </p>

                        {job.requirements && (
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {job.requirements.map((req) => (
                              <span
                                key={req}
                                className="text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-slate-200 dark:border-white/[0.05]"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06] mt-6 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setSelectedJob(job)}
                          className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-white underline cursor-pointer"
                        >
                          View Details
                        </button>

                        <Link
                          to={`/careers/apply/${job.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow transition-transform hover:-translate-y-0.5"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0C111E] border border-slate-200 dark:border-white/[0.1] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 text-slate-900 dark:text-white shadow-2xl relative space-y-6"
            >
              <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">{selectedJob.department}</span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{selectedJob.title}</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{selectedJob.location} · {selectedJob.type} · {selectedJob.experience}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <h4 className="font-semibold text-slate-900 dark:text-white uppercase text-[11px] font-mono">Role Description:</h4>
                <p>{selectedJob.description}</p>
              </div>

              {selectedJob.requirements && (
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <h4 className="font-semibold text-slate-900 dark:text-white uppercase text-[11px] font-mono">Key Qualifications & Skills:</h4>
                  <ul className="space-y-1.5">
                    {selectedJob.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to={`/careers/apply/${selectedJob.id}`}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md"
                >
                  <span>Proceed to Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Careers;
