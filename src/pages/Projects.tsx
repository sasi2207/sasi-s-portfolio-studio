import { useEffect, useState } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ParallaxSection } from '@/components/common/ParallaxSection';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import projectsData from '@/data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  const filteredProjects = filter === 'All' 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-32 pb-16 bg-hero-pattern"
        bgClassName="bg-gradient-to-b from-primary/5 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-aos="fade-up">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              A showcase of my recent work and case studies.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Filter & Projects */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
            {projectsData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  'px-5 py-2 rounded-full font-medium transition-all duration-300',
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4 text-xs">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-primary font-semibold">{value}</span>
                        <span className="text-muted-foreground ml-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
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
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
