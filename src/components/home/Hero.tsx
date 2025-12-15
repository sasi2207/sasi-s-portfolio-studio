<<<<<<< HEAD
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { BubbleBackground } from "./BubbleBackground";
// import TechSasiLogo from "./TechSasiLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen mt-5 pt-5 flex items-center justify-center overflow-hidden">
   <BubbleBackground/>
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 radial-glow" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
       

          {/* Floating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
           
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Build Your{" "}
            <span className="gradient-text">Digital Future</span>
            <br />
            With Confidence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Expert web & app development, domain services, and e-commerce solutions. 
            We transform ideas into scalable digital products using React, Node.js, Python, and more.
          </motion.p>

          {/* CTAs */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="flex flex-col sm:flex-row gap-4 justify-center"
>
  <Link to="/proposal">
    <Button
      className="
        group
        bg-orange-400 hover:bg-orange-500
        text-white
        shadow-md
        rounded-full
        px-6 py-3
        transition-all
      "
    >
      Get Proposal
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </Link>

  <Link to="/projects">
    <Button
      variant="outline"
      className="
        border-orange-300
        text-orange-500
        hover:bg-orange-50
        hover:text-orange-600
        rounded-full
        px-6 py-3
        transition-all
      "
    >
      View Projects
    </Button>
  </Link>
</motion.div>


          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>100% NDA Protected</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
=======
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
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
