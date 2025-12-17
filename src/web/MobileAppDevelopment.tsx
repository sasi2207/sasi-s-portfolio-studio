import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  Smartphone,
  Code2,
  Layers,
  Bell,
  ShieldCheck,
  Search,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

const MobileAppDevelopment = () => {
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
        bgClassName="bg-gradient-to-b from-sky-50 via-indigo-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Mobile Application{" "}
              <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              High-performance Android & iOS mobile applications built with
              modern UI/UX, scalable architecture, and secure APIs.
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
          WHAT IS A MOBILE APP
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              What is a Mobile Application?
            </h2>

            <p className="text-muted-foreground mb-6">
              A mobile application is a software solution designed for
              smartphones and tablets that enables users to interact with your
              services anytime, anywhere.
            </p>

            <ul className="space-y-4">
              {[
                "Android & iOS applications",
                "Fast, smooth & responsive UI",
                "Secure backend & APIs",
                "Real-time data & notifications",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Smartphone className="text-indigo-600" />
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
          TECHNOLOGIES & STACK
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-purple-700">
              Technologies & Development Stack
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Code2 className="text-indigo-600" />
                <p className="text-muted-foreground">
                  React Native / Flutter for cross-platform apps.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex gap-4"
              >
                <Layers className="text-indigo-600" />
                <p className="text-muted-foreground">
                  Scalable backend with REST APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          FEATURES & USER EXPERIENCE
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Features & User Experience
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Bell className="text-purple-600" />
                <p className="text-muted-foreground">
                  Push notifications & real-time alerts.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex gap-4"
              >
                <ShieldCheck className="text-purple-600" />
                <p className="text-muted-foreground">
                  Secure authentication & data protection.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-4"
              >
                <Search className="text-purple-600" />
                <p className="text-muted-foreground">
                  Optimized performance & smooth navigation.
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
          PRICING & CTA
      =============================== */}
      <section className="section-padding">
        <div className="container-custom" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Mobile App Development Package
            </h2>

            <p className="text-white/90 mb-6">
              Ideal for startups, enterprises, and product-based businesses.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹60,000
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

export default MobileAppDevelopment;
