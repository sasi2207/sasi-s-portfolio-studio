import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ParallaxSection } from '@/components/common/ParallaxSection';
import { Globe, Layers, LayoutDashboard, Cloud, Check, ArrowRight, LucideIcon } from 'lucide-react';
import servicesData from '@/data/services.json';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
};

const Services = () => {
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
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground" data-aos="fade-up" data-aos-delay="100">
              Professional web development services tailored to your business needs.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="card-hover p-8 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0
                                  group-hover:bg-primary transition-colors duration-300">
                      {IconComponent && (
                        <IconComponent 
                          size={32} 
                          className="text-primary group-hover:text-primary-foreground transition-colors" 
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <Check size={16} className="text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">{service.price}</span>
                        <Link 
                          to="/proposal" 
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                        >
                          Get Quote
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader title="My Process" subtitle="How I work with clients to deliver exceptional results" />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed roadmap' },
              { step: '03', title: 'Development', desc: 'Building with best practices' },
              { step: '04', title: 'Launch', desc: 'Deploying and ongoing support' },
            ].map((item, index) => (
              <div 
                key={item.step}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl font-heading font-bold text-primary/20 mb-2">{item.step}</div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
