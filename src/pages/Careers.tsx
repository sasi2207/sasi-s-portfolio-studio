import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, MapPin, Clock, ArrowRight, X, CheckCircle2, Workflow, GraduationCap, Sparkles } from "lucide-react";
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

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
      duration: 800,
    });
  }, []);

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
      <div className="w-full min-h-screen bg-white text-slate-900">
        {/* Hero Header */}
        <section 
          className="pt-36 pb-20 bg-white border-b border-slate-200 relative overflow-hidden"
          data-aos="fade-up"
        >
          {/* Subtle Ambient Electric Glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[340px] bg-gradient-to-b from-[#00f0ff]/20 via-[#0070f3]/10 to-transparent blur-[140px] rounded-full" 
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-6">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Careers", active: true },
                ]}
              />
            </div>

            <div className="max-w-3xl space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/80 border border-cyan-200 text-xs font-mono font-bold tracking-wide uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00a8ff]" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff] font-extrabold">
                  Engineering Careers
                </span>
                <span className="text-cyan-300">·</span>
                <span className="text-slate-500">Salem, Tamil Nadu</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] text-balance">
                Work on Production Software. Elevate Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8e0] via-[#0080ff] to-[#0048ff] drop-shadow-xs">
                  Engineering.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl pt-2">
                Join a disciplined software studio and coaching ecosystem. We hire passionate problem-solvers who care about clean code, high speed, and measurable client success.
              </p>
            </div>
          </div>
        </section>

        {/* Department Filter Segmented Control */}
        <section 
          className="py-5 bg-white/95 border-b border-slate-200 sticky top-16 z-30 backdrop-blur-md"
          data-aos="fade-down"
          data-aos-delay="150"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {careerDepartments.map((dept) => {
                const isActive = selectedDepartment === dept;
                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => handleDepartmentChange(dept)}
                    className={`relative px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-cyan-700 hover:bg-cyan-50/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCareerDeptPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#00d2ff] via-[#0088ff] to-[#0051ff] rounded-xl shadow-[0_4px_16px_rgba(0,168,255,0.4)] -z-10"
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

        {/* Jobs Grid with Skeleton Loader & AOS */}
        <section 
          className="py-20 bg-white border-b border-slate-200"
          data-aos="fade-up"
        >
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
                    <div className="col-span-full text-center py-16 bg-white border border-slate-200 rounded-2xl p-8 shadow-xs" data-aos="zoom-in">
                      <p className="text-sm font-mono text-slate-500">No active positions in {selectedDepartment} right now.</p>
                      <button
                        onClick={() => handleDepartmentChange("All")}
                        className="mt-4 px-4 py-2 text-xs font-bold bg-gradient-to-r from-[#00d2ff] via-[#0088ff] to-[#0051ff] text-white rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-sm"
                      >
                        View All Open Roles
                      </button>
                    </div>
                  ) : (
                    filteredJobs.map((job, idx) => (
                      <div
                        key={job.id}
                        data-aos="fade-up"
                        data-aos-delay={idx * 60}
                        className="rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 p-6 flex flex-col justify-between transition-all duration-300 group shadow-xs hover:shadow-lg"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff] font-bold">
                              {job.department}
                            </span>
                            <span className="text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#0088ff]" />
                              {job.type}
                            </span>
                          </div>

                          <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-700 transition-all">
                            {job.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                              {job.experience}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                            {job.description}
                          </p>

                          {job.requirements && (
                            <div className="pt-2 flex flex-wrap gap-1.5">
                              {job.requirements.map((req) => (
                                <span
                                  key={req}
                                  className="text-[10px] font-mono text-cyan-700 bg-cyan-50/80 px-2 py-0.5 rounded-md border border-cyan-200"
                                >
                                  {req}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setSelectedJob(job)}
                            className="text-xs font-mono text-slate-600 hover:text-cyan-600 underline cursor-pointer transition-colors"
                          >
                            View Details
                          </button>

                          <Link
                            to={`/careers/apply/${job.id}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#00d2ff] via-[#0088ff] to-[#0051ff] hover:brightness-105 shadow-sm transition-transform hover:-translate-y-0.5"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl relative space-y-6"
              >
                <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0051ff]">
                      {selectedJob.department}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-900">{selectedJob.title}</h3>
                    <p className="text-xs font-mono text-slate-500">{selectedJob.location} · {selectedJob.type} · {selectedJob.experience}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <h4 className="font-semibold text-slate-900 uppercase text-[11px] font-mono">Role Description:</h4>
                  <p>{selectedJob.description}</p>
                </div>

                {selectedJob.requirements && (
                  <div className="space-y-2 text-xs text-slate-600">
                    <h4 className="font-semibold text-slate-900 uppercase text-[11px] font-mono">Key Qualifications & Skills:</h4>
                    <ul className="space-y-1.5">
                      {selectedJob.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 text-xs font-mono text-slate-500 hover:text-slate-800 cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to={`/careers/apply/${selectedJob.id}`}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#00d2ff] via-[#0088ff] to-[#0051ff] hover:brightness-105 shadow-sm transition-transform hover:scale-105"
                  >
                    <span>Proceed to Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Careers;