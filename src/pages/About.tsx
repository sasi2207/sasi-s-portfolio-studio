import { useEffect } from 'react';
import AOS from 'aos';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ParallaxSection } from '@/components/common/ParallaxSection';
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';

const skills = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'MongoDB',
  'Tailwind CSS', 'AWS', 'Docker', 'Git', 'REST APIs', 'GraphQL',
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Freelance Developer',
    description: 'Working with clients worldwide on complex web applications',
    icon: Briefcase,
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    description: 'Developed enterprise solutions for various industries',
    icon: Award,
  },
  {
    year: '2020',
    title: 'Started Freelancing',
    description: 'Began offering web development services independently',
    icon: Briefcase,
  },
  {
    year: '2019',
    title: 'Computer Science Degree',
    description: 'Graduated with focus on software engineering',
    icon: GraduationCap,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Passionate developer crafting digital experiences from Mettur, Salem.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-8xl font-heading font-bold text-primary/30">SK</span>
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 glass-card rounded-xl">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Full-Stack Developer & Problem Solver
              </h2>
              <p className="text-muted-foreground mb-4">
                I'm SasiKumar, a passionate full-stack developer based in Mettur, Salem. 
                I specialize in building modern web applications that are not only visually 
                appealing but also highly performant and user-friendly.
              </p>
              <p className="text-muted-foreground mb-6">
                With expertise in React, Node.js, and cloud technologies, I help businesses 
                transform their ideas into scalable digital solutions. I believe in clean code, 
                attention to detail, and delivering exceptional results.
              </p>
              
              <a 
                href="/resume.pdf" 
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader title="Skills & Technologies" subtitle="Tools and technologies I work with" />
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <span 
                key={skill} 
                className="chip"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title="My Journey" subtitle="Key milestones in my professional career" />
          
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className="relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <item.icon size={14} className="text-primary-foreground" />
                </div>
                <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                <h3 className="text-lg font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
