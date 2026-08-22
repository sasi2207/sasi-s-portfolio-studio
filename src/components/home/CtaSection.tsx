import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden tech-grid-pattern border-t border-slate-900">
      {/* Custom Grid Pattern Styles */}
      <style>{`
        .tech-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
        }
      `}</style>

      {/* Background decoration & Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6"
            data-aos="fade-up"
          >
            Ready to Start Your <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">Project?</span>
          </h2>
          <p 
            className="text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's discuss your ideas and turn them into reality. We are available for professional development projects and long-term tech collaborations.
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link 
              to="/proposal" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition shadow-lg hover:shadow-amber-500/20"
            >
              Get Free Proposal
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:text-white px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold backdrop-blur-sm transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div 
            className="flex flex-wrap justify-center gap-8 text-sm pt-4 border-t border-slate-900/80"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a 
              href="mailto:techsasi22@gmail.com" 
              className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Mail size={16} className="text-amber-400" />
              techsasi22@gmail.com
            </a>
            <a 
              href="tel:+917448788879" 
              className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Phone size={16} className="text-amber-400" />
              +91 7448788879
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;