import { Link } from 'react-router-dom';
import {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
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
    <section className="section-padding bg-orange-50/40">
      <div className="container-custom">
        <SectionHeader
          title="What I Do"
          subtitle="Specialized services to help your business thrive in the digital world"
        />

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
              </div>
            );
          })}
        </div>

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
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
