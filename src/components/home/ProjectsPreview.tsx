import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ParallaxSection } from '../common/ParallaxSection';
import projectsData from '@/data/projects.json';

export const ProjectsPreview = () => {
<<<<<<< HEAD
  const featuredProjects = projectsData.projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <ParallaxSection
      className="section-padding"
      bgClassName="bg-gradient-to-b from-orange-50 to-white"
=======
  const featuredProjects = projectsData.projects.filter(p => p.featured).slice(0, 3);

  return (
    <ParallaxSection 
      className="section-padding"
      bgClassName="bg-gradient-to-b from-background to-muted/20"
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
    >
      <div className="container-custom">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing diverse skills and solutions"
        />

<<<<<<< HEAD
        {/* PROJECT GRID */}
=======
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
<<<<<<< HEAD
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
=======
              className="card-hover overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold text-primary/20">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-secondary/90 flex items-center justify-center gap-4 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="
                      p-3 rounded-full
                      bg-orange-500 text-white
                      hover:scale-110
                      transition-transform
                    "
                  >
                    <ExternalLink size={20} />
                  </a>

=======
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="
                      p-3 rounded-full
                      bg-gray-100 text-gray-700
                      hover:bg-gray-200
                      hover:scale-110
                      transition-transform
                    "
=======
                    className="p-3 rounded-full bg-card text-foreground hover:scale-110 transition-transform"
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

<<<<<<< HEAD
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
=======
              {/* Content */}
              <div className="p-6">
                <div className="chip mb-3">{project.category}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
                    >
                      {tech}
                    </span>
                  ))}
                </div>

<<<<<<< HEAD
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
=======
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold 
                           hover:gap-2 transition-all"
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
                >
                  View Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
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
=======
        <div className="text-center mt-10" data-aos="fade-up">
          <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
};
