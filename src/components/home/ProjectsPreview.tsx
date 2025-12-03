import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ParallaxSection } from '../common/ParallaxSection';
import projectsData from '@/data/projects.json';

export const ProjectsPreview = () => {
  const featuredProjects = projectsData.projects.filter(p => p.featured).slice(0, 3);

  return (
    <ParallaxSection 
      className="section-padding"
      bgClassName="bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container-custom">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing diverse skills and solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card text-foreground hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

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
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold 
                           hover:gap-2 transition-all"
                >
                  View Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-aos="fade-up">
          <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
};
