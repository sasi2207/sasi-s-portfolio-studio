import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  CheckCircle,
  Database,
  Shield,
  LayoutDashboard,
  RefreshCw,
  Users,
  Search,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

const DynamicWebsite = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <PageLayout>
      {/* ==============================
          HERO SECTION
      =============================== */}
      <ParallaxSection
        className="pt-32 pb-24"
        bgClassName="bg-gradient-to-b from-indigo-50 via-purple-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Dynamic Website{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Powerful, database-driven websites with admin panels, user
              interaction, and real-time content updates.
            </p>

            <Link
              to="/proposal"
              data-aos="zoom-in"
              data-aos-delay="200"
              className="inline-flex items-center gap-2 
                         bg-indigo-600 hover:bg-indigo-700
                         text-white font-semibold px-7 py-3 rounded-xl transition
                         hover:gap-3"
            >
              Get Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* ==============================
          WHAT IS DYNAMIC WEBSITE
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              What is a Dynamic Website?
            </h2>

            <p className="text-muted-foreground mb-6">
              A dynamic website displays content that changes based on user
              actions, database data, or admin inputs.
            </p>

            <ul className="space-y-4">
              {[
                "Admin-controlled content",
                "Database-driven pages",
                "User authentication & roles",
                "Real-time updates",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-teal-500 animate-pulse" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white shadow-xl h-64 hover:shadow-2xl transition"
          />
        </div>
      </section>

      {/* ==============================
          ADMIN PANEL
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-purple-700">
              Admin Panel & Database
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <LayoutDashboard className="text-indigo-600" />
                <p className="text-muted-foreground">
                  Manage content, users, and settings from one dashboard.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
                <Database className="text-indigo-600" />
                <p className="text-muted-foreground">
                  Secure and structured database architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          USER FEATURES
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              User Interaction & Features
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Users className="text-teal-500" />
                <p className="text-muted-foreground">
                  User login, registration & dashboards.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
                <RefreshCw className="text-teal-500 animate-spin-slow" />
                <p className="text-muted-foreground">
                  Live updates without page reload.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4">
                <Shield className="text-teal-500" />
                <p className="text-muted-foreground">
                  Secure authentication & access control.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white shadow-xl h-64"
          />
        </div>
      </section>

      {/* ==============================
          SEO & SCALABILITY
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-purple-700">
              SEO Friendly & Scalable
            </h2>

            <ul className="space-y-4">
              {[
                "SEO-optimized URLs",
                "Fast page rendering",
                "Scalable backend APIs",
                "Future-ready architecture",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Search className="text-indigo-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==============================
          CTA
      =============================== */}
      <section className="section-padding">
        <div className="container-custom" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Build a Scalable Dynamic Website
            </h2>

            <p className="text-white/90 mb-6">
              Perfect for businesses that require flexibility and control.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹15,000
            </div>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2 
                         bg-white text-indigo-700
                         font-semibold px-7 py-3 rounded-xl
                         hover:gap-3 hover:bg-indigo-50 transition"
            >
              Get Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DynamicWebsite;
