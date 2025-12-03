import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import { Layout } from '@/components/layout/Layout';
import { ParallaxSection } from '@/components/common/ParallaxSection';
import { ArrowLeft, ExternalLink, Github, Clock, TrendingUp, Users, LucideIcon } from 'lucide-react';
import projectsData from '@/data/projects.json';

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
  const project = projectsData.projects.find(p => p.id === id);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-primary hover:underline">
              Back to Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-32 pb-16 bg-hero-pattern"
        bgClassName="bg-gradient-to-b from-primary/5 to-transparent"
      >
        <div className="container-custom">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            data-aos="fade-up"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
          
          <div className="max-w-3xl">
            <div className="chip mb-4" data-aos="fade-up" data-aos-delay="100">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6" data-aos="fade-up" data-aos-delay="150">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8" data-aos="fade-up" data-aos-delay="200">
              {project.description}
            </p>
            
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="250">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Github size={18} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Metrics */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(project.metrics).map(([key, value], index) => {
              const IconComponent = metricIcons[key] || TrendingUp;
              return (
                <div 
                  key={key} 
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <IconComponent size={24} className="mx-auto text-primary mb-2" />
                  <div className="text-2xl font-heading font-bold">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Problem */}
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                The Problem
              </h2>
              <p className="text-muted-foreground pl-11">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                The Solution
              </h2>
              <p className="text-muted-foreground pl-11">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12" data-aos="fade-up" data-aos-delay="150">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2 pl-11">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">4</span>
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
