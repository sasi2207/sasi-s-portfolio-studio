import { Link } from 'react-router-dom';
import { Globe, Layers, LayoutDashboard, Cloud, ArrowRight, LucideIcon } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import servicesData from '@/data/services.json';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
};

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeader
          title="What I Do"
          subtitle="Specialized services to help your business thrive in the digital world"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="card-hover p-6 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  {IconComponent && (
                    <IconComponent 
                      size={28} 
                      className="text-primary group-hover:text-primary-foreground transition-colors" 
                    />
                  )}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="text-sm font-semibold text-primary">{service.price}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
