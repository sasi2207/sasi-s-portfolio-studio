import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

import { SectionHeader } from "../common/SectionHeader";
import { ParallaxSection } from "../common/ParallaxSection";
import projectsData from "@/data/projects.json";

export const ProjectsPreview = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const featuredProjects = projectsData.projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <ParallaxSection
      className="section-padding"
      bgClassName="bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container-custom">
        {/* HEADER */}
        <SectionHeader
          title="Featured Projects"
          subtitle="A curated preview of selected projects, crafted with clarity, performance, and purpose."
        />

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="
                rounded-2xl
                bg-white
                border border-orange-100
                shadow-sm
                overflow-hidden
              "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* PREVIEW AREA */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden">
                {/* LIVE PREVIEW (ONLY ON HOME) */}
                {isHome && project.liveUrl ? (
                  <>
                    {/* IFRAME PREVIEW */}
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

                    {/* LIVE LINK ICON */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        absolute bottom-3 right-3
                        p-2 rounded-full
                        bg-white text-orange-500
                        shadow
                        hover:bg-orange-50
                        transition
                      "
                    >
                      <ExternalLink size={18} />
                    </a>
                  </>
                ) : (
                  /* PLACEHOLDER (NOT HOME) */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-orange-200">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* CATEGORY */}
                <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 text-orange-600">
                  {project.category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/projects/${project.id}`}
                  className="
                    inline-flex items-center gap-1
                    text-orange-500 text-sm font-semibold
                    hover:text-orange-600
                    hover:gap-2
                    transition-all
                  "
                >
                  View Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL → ONLY ON HOME */}
        {isHome && (
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/projects"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                rounded-full
                border border-orange-300
                text-orange-500 font-semibold
                hover:bg-orange-50
                transition
              "
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </ParallaxSection>
  );
};
