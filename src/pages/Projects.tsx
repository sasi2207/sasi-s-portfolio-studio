import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import projectsData from "@/data/projects.json";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const filteredProjects =
    filter === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <ParallaxSection className="pt-32 pb-20 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-heading font-bold mb-6 blur-text"
              data-aos="fade-up"
            >
              My{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground blur-text"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Live previews of real-world applications and platforms.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* ===== FILTER + GRID ===== */}
      <section className="section-padding">
        <div className="container-custom">
          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-3 mb-14" data-aos="fade-up">
            {projectsData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  filter === category
                    ? "bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-md"
                    : "bg-orange-100 text-orange-700 hover:bg-amber-100 hover:text-amber-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {/* ===== LIVE URL PREVIEW ===== */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-48 overflow-hidden"
                >
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="w-full h-full pointer-events-none scale-[0.35] origin-top-left"
                    style={{
                      width: "285%",
                      height: "285%",
                    }}
                    loading="lazy"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-amber-500/80 
                                  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-3 rounded-full bg-white text-orange-600">
                      <ExternalLink size={20} />
                    </span>
                  </div>
                </a>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs bg-amber-100 text-amber-700">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-orange-600 text-sm font-semibold hover:text-amber-600 hover:gap-2 transition-all"
                  >
                    View Case Study
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
