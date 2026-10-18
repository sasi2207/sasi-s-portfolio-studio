import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, X, CheckCircle2, Workflow, Sparkles, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchJobsFromAPI, Job } from "./jobService"; 
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import { CareerGridSkeleton } from "@/components/skeletons";
import { CenterFlow } from "@/components/ui/center-flow";

const careerDepartments = [
  "All",
  "Softwaredevelopment",
  "Media",
  "Administration",
  "Engineering"
];

export const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const liveJobs = await fetchJobsFromAPI();
        setJobs(Array.isArray(liveJobs) ? liveJobs : []);
      } catch (err) {
        console.error("Database error loading careers:", err);
        setJobs([]);
      } finally {
        setIsLoading(false);
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
      <section className="pt-36 pb-20 bg-[var(--hero-bg)] border-b border-[var(--border-line)] relative transition-colors duration-300">
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
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Engineering Careers</span>
              <span aria-hidden="true">·</span>
              <span>Salem, Tamil Nadu</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] tracking-tight leading-[1.1] text-balance">
              Work on Production Software. Elevate Your Engineering.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl pt-2">
              Join a disciplined software studio and coaching ecosystem. We hire passionate problem-solvers who care about clean code, high speed, and measurable client success.
            </p>
          </div>
        </div>
      </section>

      {/* Department Filter Segmented Control with Navigation Animation */}
      <section className="py-6 bg-[var(--card-bg)]/90 border-b border-[var(--border-line)] sticky top-16 z-30 backdrop-blur-md transition-colors duration-300">
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
                      ? "text-white font-bold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-fill)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCareerDeptPill"
                      className="absolute inset-0 bg-[var(--accent)] rounded-lg shadow-sm -z-10"
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
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] transition-colors duration-300">
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
                  <div className="col-span-full text-center py-16 bg-[var(--card-bg)] border border-[var(--border-line)] rounded-2xl p-8 shadow-xs">
                    <p className="text-sm font-mono text-[var(--text-muted)]">No active positions in {selectedDepartment} right now.</p>
                    <button
                      onClick={() => handleDepartmentChange("All")}
                      className="mt-4 px-4 py-2 text-xs font-semibold bg-[var(--accent)] text-white rounded-lg cursor-pointer"
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
                      className="rounded-2xl bg-[var(--card-bg)] border border-[var(--border-line)] hover:border-[var(--accent)]/50 p-6 flex flex-col justify-between transition-all duration-300 group shadow-xs"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-line)] text-xs font-mono">
                          <span className="text-[var(--accent)] font-semibold">{job.department}</span>
                          <span className="text-[var(--text-muted)] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.type}
                          </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                            {job.experience}
                          </span>
                        </div>

                        <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                          {job.description}
                        </p>

                        {job.requirements && (
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {job.requirements.map((req) => (
                              <span
                                key={req}
                                className="text-[10px] font-mono text-[var(--text-primary)] bg-[var(--surface-fill)] px-2 py-0.5 rounded border border-[var(--border-line)]"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-6 border-t border-[var(--border-line)] mt-6 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setSelectedJob(job)}
                          className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] underline cursor-pointer"
                        >
                          View Details
                        </button>

                        <Link
                          to={`/careers/apply/${job.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md transition-transform hover:-translate-y-0.5"
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

      {/* Engineering Growth & Mentorship - CenterFlow */}
      <section className="py-20 bg-[var(--surface-fill)] border-b border-[var(--border-line)] relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-line)] p-6 sm:p-10 relative overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                  Career Trajectory
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                  The TechSasi Engineer Flywheel
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                  How talent grows inside our Salem studio: from fundamental logic to shipping enterprise systems.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 w-fit">
                <Workflow className="w-3.5 h-3.5" /> 8 Career Vectors
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
                    <GraduationCap className="w-7 h-7 text-[var(--accent)] animate-pulse mb-1" />
                    <span className="text-[10px] font-mono font-black text-[var(--text-primary)] uppercase tracking-wider">
                      GROWTH
                    </span>
                    <span className="text-[9px] font-mono text-[var(--accent)] font-semibold">
                      TechSasi Academy
                    </span>
                  </div>
                }
                nodeItems={[
                  {
                    id: "g1",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">01</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Live Code PRs</span>
                      </div>
                    ),
                  },
                  {
                    id: "g2",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">02</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Founder 1-on-1</span>
                      </div>
                    ),
                  },
                  {
                    id: "g3",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">03</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Polyglot Stacks</span>
                      </div>
                    ),
                  },
                  {
                    id: "g4",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">04</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Clean Architecture</span>
                      </div>
                    ),
                  },
                  {
                    id: "g5",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">05</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Cloud Devops</span>
                      </div>
                    ),
                  },
                  {
                    id: "g6",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">06</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Regional Uplift</span>
                      </div>
                    ),
                  },
                  {
                    id: "g7",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">07</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Zero Redtape</span>
                      </div>
                    ),
                  },
                  {
                    id: "g8",
                    content: (
                      <div className="flex flex-col items-center justify-center text-center p-1 w-full h-full">
                        <span className="text-[8px] font-mono font-bold text-[var(--accent)]">08</span>
                        <span className="text-[9px] font-bold text-[var(--text-primary)] leading-tight">Global Clients</span>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
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
              className="bg-[var(--card-bg)] border border-[var(--border-line)] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 text-[var(--text-primary)] shadow-2xl relative space-y-6"
            >
              <div className="flex items-start justify-between pb-4 border-b border-[var(--border-line)]">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[var(--accent)] font-semibold">{selectedJob.department}</span>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">{selectedJob.title}</h3>
                  <p className="text-xs font-mono text-[var(--text-muted)]">{selectedJob.location} · {selectedJob.type} · {selectedJob.experience}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-[var(--text-muted)] leading-relaxed">
                <h4 className="font-semibold text-[var(--text-primary)] uppercase text-[11px] font-mono">Role Description:</h4>
                <p>{selectedJob.description}</p>
              </div>

              {selectedJob.requirements && (
                <div className="space-y-2 text-xs text-[var(--text-muted)]">
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase text-[11px] font-mono">Key Qualifications & Skills:</h4>
                  <ul className="space-y-1.5">
                    {selectedJob.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-[var(--text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-[var(--border-line)] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to={`/careers/apply/${selectedJob.id}`}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent)] hover:opacity-95 shadow-md"
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
