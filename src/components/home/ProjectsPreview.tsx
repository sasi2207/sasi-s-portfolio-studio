import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ParallaxSection } from '../common/ParallaxSection';
import projectsData from '@/data/projects.json';

export const ProjectsPreview = () => {
  const featuredProjects = projectsData.projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <ParallaxSection
      className="section-padding"
      bgClassName="bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container-custom">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing diverse skills and solutions"
        />

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="
                group
                rounded-2xl
                bg-white
                border border-orange-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
                overflow-hidden
              "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* IMAGE / PLACEHOLDER */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-orange-200">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* HOVER ACTIONS */}
                <div
                  className="
                    absolute inset-0
                    bg-white/90
                    backdrop-blur-sm
                    flex items-center justify-center gap-4
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 rounded-full
                      bg-orange-500 text-white
                      hover:scale-110
                      transition-transform
                    "
                  >
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 rounded-full
                      bg-gray-100 text-gray-700
                      hover:bg-gray-200
                      hover:scale-110
                      transition-transform
                    "
                  >
                    <Github size={20} />
                  </a>
                </div>
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

        {/* VIEW ALL */}
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
      </div>
    </ParallaxSection>
  );
};
