import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code, Sparkles } from 'lucide-react';
import { ParallaxSection } from '../common/ParallaxSection';

export const Hero = () => {
  return (
    <ParallaxSection 
      className="min-h-screen flex items-center relative"
      bgClassName="bg-hero-pattern"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              data-aos="fade-up"
            >
              <Sparkles size={16} />
              Available for freelance projects
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hi, I'm <span className="gradient-text">SasiKumar</span>
              <br />
              <span className="text-foreground">Full-Stack Developer</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I craft modern, performant web applications that help businesses grow. 
              Based in Mettur, Salem – available worldwide.
            </p>
            
            <div 
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Hire Me
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="text-3xl font-heading font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Hero Graphic */}
          <div 
            className="relative hidden lg:block"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-slow" />
              
              {/* Code window */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 glass-card rounded-xl p-4 shadow-lg">
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="font-mono text-sm space-y-1">
                  <div><span className="text-primary">const</span> developer = {'{'}</div>
                  <div className="pl-4"><span className="text-muted-foreground">name:</span> <span className="text-accent">"SasiKumar"</span>,</div>
                  <div className="pl-4"><span className="text-muted-foreground">skills:</span> <span className="text-primary">["React", "Node"]</span>,</div>
                  <div className="pl-4"><span className="text-muted-foreground">passion:</span> <span className="text-accent">"Building"</span></div>
                  <div>{'}'}</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 right-10 p-3 glass-card rounded-lg animate-float">
                <Code className="text-primary" size={24} />
              </div>
              <div className="absolute bottom-20 left-5 p-3 glass-card rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="text-accent" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};
