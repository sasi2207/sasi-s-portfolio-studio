import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import {
  Globe,
  Layers,
  LayoutDashboard,
  Cloud,
  Check,
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

import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { BubbleBackground } from "@/components/home/BubbleBackground";
import servicesData from "@/data/services.json";

/* ----------------------------------
   ICON MAP
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

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <BubbleBackground />

      <ParallaxSection
        className="pt-32 pb-20"
        bgClassName="bg-gradient-to-b from-orange-50 via-orange-100/40 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Scalable, secure, and high-performance digital solutions designed
              to grow your business.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {servicesData.services.map((service, index) => {
              const Icon = iconMap[service.icon];

              return (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative rounded-2xl bg-white p-8 pb-14 shadow-md hover:shadow-xl transition-all"
                >
                  <BubbleBackground/>
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${service.iconColor}33, transparent)`,
                    }}
                  />

                  {/* CONTENT */}
                  <div
                    className="
                      relative z-10
                      flex flex-col items-center text-center
                      sm:flex-row sm:items-start sm:text-left
                      gap-6
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        w-16 h-16 rounded-2xl
                        flex items-center justify-center
                        shrink-0
                      "
                      style={{
                        backgroundColor: `${service.iconColor}22`,
                      }}
                    >
                      {Icon && (
                        <Icon size={30} style={{ color: service.iconColor }} />
                      )}
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-3">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-5">
                        {service.description}
                      </p>

                      {/* FEATURES */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="
                              flex items-center gap-2 text-sm
                              justify-center sm:justify-start
                            "
                          >
                            <Check
                              size={16}
                              style={{ color: service.iconColor }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* PRICE */}
                      <span
                        className="text-lg font-semibold"
                        style={{ color: service.iconColor }}
                      >
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* VIEW DETAILS */}
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-orange-50/50">
        <div className="container-custom">
          <SectionHeader
            title="My Process"
            subtitle="A transparent and result-driven development workflow"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { step: "01", title: "Discovery", desc: "Understanding goals" },
              { step: "02", title: "Planning", desc: "Roadmap & wireframes" },
              { step: "03", title: "Development", desc: "Clean code" },
              { step: "04", title: "Launch", desc: "Deploy & support" },
            ].map((item, index) => (
              <div
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative text-center bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="text-6xl font-heading font-bold text-orange-200 absolute -top-6 left-1/2 -translate-x-1/2">
                  {item.step}
                </div>

                <h3 className="text-lg font-heading font-semibold mt-8 mb-2">
                  {item.title}
                </h3>

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
