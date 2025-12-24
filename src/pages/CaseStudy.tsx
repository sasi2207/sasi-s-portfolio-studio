import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Clock,
  TrendingUp,
  Users,
  LucideIcon,
} from "lucide-react";
import projectsData from "@/data/projects.json";

/* Metric Icons */
const metricIcons: Record<string, LucideIcon> = {
  loadTime: Clock,
  conversions: TrendingUp,
  users: Users,
  activeUsers: Users,
  uptime: TrendingUp,
  dataPoints: TrendingUp,
  satisfaction: TrendingUp,
  bookings: TrendingUp,
  noShows: TrendingUp,
  revenue: TrendingUp,
  conversionRate: TrendingUp,
  leads: Users,
  bounceRate: TrendingUp,
  engagement: TrendingUp,
};

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectsData.projects.find((p) => p.id === id);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-orange-600 hover:underline">
              Back to Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <ParallaxSection className="pt-32 pb-20 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
        <div className="container-custom">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-amber-600 mb-6 transition"
            data-aos="fade-up"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="max-w-3xl">
            <span
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs bg-amber-100 text-amber-700"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {project.category}
            </span>

            <h1
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {project.title}
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {project.description}
            </p>

            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="250">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200 transition inline-flex items-center gap-2"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* ================= METRICS ================= */}
      <section className="py-14 bg-orange-50/60">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(project.metrics).map(([key, value], index) => {
              const IconComponent = metricIcons[key] || TrendingUp;
              return (
                <div
                  key={key}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <IconComponent
                    size={26}
                    className="mx-auto text-orange-500 mb-2"
                  />
                  <div className="text-2xl font-heading font-bold">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Problem */}
            <div className="mb-14" data-aos="fade-up">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
                  1
                </span>
                The Problem
              </h2>
              <p className="text-muted-foreground pl-11">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-14" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm">
                  2
                </span>
                The Solution
              </h2>
              <p className="text-muted-foreground pl-11">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-14" data-aos="fade-up" data-aos-delay="150">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-yellow-400 text-white flex items-center justify-center text-sm">
                  3
                </span>
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-2 pl-11">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="mb-14" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm">
                  4
                </span>
                The Outcome
              </h2>
              <p className="text-muted-foreground pl-11">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
