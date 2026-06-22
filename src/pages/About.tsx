import { useEffect } from "react";
import AOS from "aos";
import {
  Code,
  Globe,
  Rocket,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { SectionHeader } from "@/components/common/SectionHeader";

/* ----------------------------------
   COLOR SET (3 COLORS)
----------------------------------- */
const cardColors = [
  {
    bg: "from-indigo-50 to-indigo-100/60",
    icon: "text-indigo-600",
    border: "border-indigo-200",
  },
  {
    bg: "from-sky-50 to-sky-100/60",
    icon: "text-sky-600",
    border: "border-sky-200",
  },
  {
    bg: "from-teal-50 to-teal-100/60",
    icon: "text-teal-600",
    border: "border-teal-200",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <Layout>
      {/* ==============================
          HERO SECTION
      =============================== */}
      <ParallaxSection
        className="pt-32 pb-24 relative overflow-hidden"
        bgClassName="bg-gradient-to-b from-indigo-50 via-sky-50 to-transparent"
      >
        {/* Background Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />

       

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                TechSasi
              </span>
            </h1>

            <p className="text-lg text-muted-foreground">
              I’m Sasi Kumar — a freelance full-stack developer helping startups,
              businesses, and entrepreneurs build fast, secure, and scalable
              digital products.
            </p>
          </div>

          
        </div>
      </ParallaxSection>

      {/* ==============================
          WHO I AM
      =============================== */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Who I Am
            </h2>

            <p className="text-muted-foreground mb-6">
              I’m a passionate freelance software developer and the founder of{" "}
              <strong>TechSasi</strong>. I build modern websites, web
              applications, mobile apps, and scalable backend systems.
            </p>

            <p className="text-muted-foreground mb-6">
              With strong experience in React, Node.js, Java, Spring Boot, and
              cloud deployment, I deliver complete solutions from idea to
              production.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700
                         text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Let’s Work Together
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* 3-Color Info Cards */}
          <div
            data-aos="fade-left"
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Code, label: "Clean Code" },
              { icon: Globe, label: "Global Clients" },
              { icon: Rocket, label: "Fast Delivery" },
              { icon: Award, label: "Quality Focus" },
            ].map((item, index) => {
              const color = cardColors[index % 3];

              return (
                <div
                  key={item.label}
                  className={`bg-gradient-to-br ${color.bg} border ${color.border}
                              rounded-2xl p-5 shadow-sm hover:shadow-md transition`}
                >
                  <item.icon className={`${color.icon} mb-2`} />
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================
          WHAT I DO
      =============================== */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <SectionHeader
            title="What I Do"
            subtitle="Services I provide as a freelancer under TechSasi"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Globe,
                title: "Website Development",
                desc: "Static, dynamic, business, e-commerce & portfolio websites",
              },
              {
                icon: Code,
                title: "Web Applications",
                desc: "Admin dashboards, CRM, ERP & custom software solutions",
              },
              {
                icon: Rocket,
                title: "Deployment & Cloud",
                desc: "AWS, Azure, VPS, cPanel, CI/CD & server management",
              },
            ].map((item, index) => {
              const color = cardColors[index % 3];

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`bg-gradient-to-br ${color.bg} border ${color.border}
                              rounded-2xl p-6 shadow-md hover:shadow-lg transition`}
                >
                  <item.icon className={`${color.icon} mb-4`} size={32} />
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================
          WHY CHOOSE ME
      =============================== */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Why Choose TechSasi?
            </h2>

            <ul className="space-y-4">
              {[
                "Freelancer with full project ownership",
                "Business-focused solutions",
                "Clean, scalable & secure code",
                "Affordable pricing & clear communication",
                "Long-term support & maintenance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Briefcase className="text-teal-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            className="bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-500
                       rounded-3xl p-10 text-white"
          >
            <Users size={36} className="mb-4" />
            <h3 className="text-2xl font-heading font-semibold mb-3">
              Let’s Build Something Great
            </h3>
            <p className="text-white/90 mb-6">
              I help ideas turn into powerful, production-ready digital
              products.
            </p>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 bg-white text-indigo-700
                         font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition"
            >
              Get a Free Proposal
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
