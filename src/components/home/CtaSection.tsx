import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
            data-aos="fade-up"
          >
<<<<<<< HEAD
            Ready to Start Your <span className="text-orange-400">Project?</span>
=======
            Ready to Start Your <span className="text-primary">Project?</span>
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
          </h2>
          <p 
            className="text-lg text-secondary-foreground/70 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's discuss your ideas and turn them into reality. I'm available for freelance 
            projects and long-term collaborations.
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/proposal" className="btn-accent inline-flex items-center gap-2">
              Get Free Proposal
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline border-secondary-foreground/30 text-secondary-foreground 
                                          hover:bg-secondary-foreground hover:text-secondary inline-flex items-center gap-2">
              Contact Me
            </Link>
          </div>

          <div 
            className="flex flex-wrap justify-center gap-8 text-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a 
              href="mailto:sasikumarp2207@gmail.com" 
              className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={16} />
              sasikumarp2207@gmail.com
            </a>
            <a 
              href="tel:+917448788879" 
              className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              <Phone size={16} />
              +91 7448788879
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
