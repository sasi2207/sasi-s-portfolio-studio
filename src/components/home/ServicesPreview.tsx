import { Link } from "react-router-dom";
import {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
  ArrowRight,
  LucideIcon,
  FileCode,
  RefreshCw,
  ShoppingCart,
  User,
  Briefcase,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import { SectionHeader } from "../common/SectionHeader";
import servicesData from "@/data/services.json";
import { BubbleBackground } from "./BubbleBackground";

/* ----------------------------------
   FULL ICON MAP
----------------------------------- */
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
  FileCode,
  RefreshCw,
  ShoppingCart,
  User,
  Briefcase,
  Smartphone,
  TrendingUp,
};

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-orange-50/40">
      <div className="container-custom">
        <SectionHeader
          title="What I Do"
          subtitle="Specialized services to help your business thrive in the digital world"
        />

        {/* ==============================
            SERVICES GRID
        =============================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
             <div
  key={service.id}
  className="
    relative
    group
    rounded-2xl
    bg-white
    p-6
    pb-14
    border border-orange-100
    shadow-sm
    hover:shadow-lg
    hover:-translate-y-1
    transition-all duration-300
  "
  data-aos="fade-up"
  data-aos-delay={index * 100}
>
  {/* <BubbleBackground /> */}

  {/* Hover Gradient */}
  <div
    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
    style={{
      background: `linear-gradient(135deg, ${service.iconColor}22, transparent)`,
    }}
  />

  {/* ICON */}
  <div
    className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center
               transition-all duration-300 group-hover:scale-110"
    style={{ backgroundColor: `${service.iconColor}22` }}
  >
    {Icon && <Icon size={28} style={{ color: service.iconColor }} />}
  </div>

  {/* TITLE */}
  <h3 className="text-lg font-semibold mb-2 text-gray-900">
    {service.title}
  </h3>

  {/* DESCRIPTION */}
  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
    {service.description}
  </p>

 

  {/* ==============================
      VIEW DETAILS – RIGHT BOTTOM
  =============================== */}
  <Link
    to={service.path}
    className="
      absolute bottom-5 right-6
      inline-flex items-center gap-2
      text-sm font-semibold
      transition-all hover:gap-3
    "
    style={{ color: service.iconColor }}
  >
    View Details
    <ArrowRight size={16} />
  </Link>
</div>

            );
          })}
        </div>

        {/* ==============================
            VIEW ALL
        =============================== */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
            style={{ color: "#f97316" }}
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
