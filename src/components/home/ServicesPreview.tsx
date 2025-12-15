import { Link } from 'react-router-dom';
<<<<<<< HEAD
import {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
=======
import { Globe, Layers, LayoutDashboard, Cloud, ArrowRight, LucideIcon } from 'lucide-react';
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
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
<<<<<<< HEAD
    <section className="section-padding bg-orange-50/40">
=======
    <section className="section-padding bg-muted/30">
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
      <div className="container-custom">
        <SectionHeader
          title="What I Do"
          subtitle="Specialized services to help your business thrive in the digital world"
        />

<<<<<<< HEAD
        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                className="
                  group
                  rounded-2xl
                  bg-white
                  p-6
                  border border-orange-100
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-300
                "
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* ICON */}
                <div
                  className="
                    w-14 h-14 mb-4
                    rounded-xl
                    bg-orange-100
                    flex items-center justify-center
                    group-hover:bg-orange-500
                    group-hover:scale-110
                    transition-all duration-300
                  "
                >
                  {IconComponent && (
                    <IconComponent
                      size={28}
                      className="
                        text-orange-500
                        group-hover:text-white
                        transition-colors
                      "
                    />
                  )}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* PRICE */}
                <div className="text-sm font-semibold text-orange-500">
                  {service.price}
                </div>
=======
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
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
              </div>
            );
          })}
        </div>

<<<<<<< HEAD
        {/* VIEW ALL */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="/services"
            className="
              inline-flex items-center gap-2
              text-orange-500 font-semibold
              hover:text-orange-600
              hover:gap-3
              transition-all
            "
=======
        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
