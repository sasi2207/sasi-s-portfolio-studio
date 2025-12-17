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
} from "lucide-react";
import { Link } from "react-router-dom";

import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { SectionHeader } from "@/components/common/SectionHeader";

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
        className="pt-32 pb-20"
        bgClassName="bg-gradient-to-b from-indigo-50 via-sky-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
              data-aos="fade-up"
            >
              About{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                TechSasi
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I’m Sasi Kumar — a freelance full-stack developer helping
              startups, businesses, and entrepreneurs build fast, secure,
              and scalable digital products.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* ==============================
          WHO I AM
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Who I Am
            </h2>

            <p className="text-muted-foreground mb-6">
              I’m a passionate freelance software developer and the founder
              of <strong>TechSasi</strong>. I specialize in building modern
              websites, web applications, mobile apps, and scalable backend
              systems for real-world business needs.
            </p>

            <p className="text-muted-foreground mb-6">
              With hands-on experience in React, Node.js, Java, Spring Boot,
              cloud deployment, and UI/UX design, I deliver end-to-end
              solutions — from idea to production.
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

          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white shadow-lg p-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code, label: "Clean Code" },
                { icon: Globe, label: "Global Clients" },
                { icon: Rocket, label: "Fast Delivery" },
                { icon: Award, label: "Quality Focus" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                >
                  <item.icon className="text-sky-500" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          WHAT I DO
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
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
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <item.icon className="text-indigo-600 mb-4" size={32} />
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          WHY CHOOSE ME
      =============================== */}
      <section className="section-padding">
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
                "Affordable pricing & transparent communication",
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
              Whether you’re a startup, small business, or individual,
              I can help turn your ideas into powerful digital products.
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
