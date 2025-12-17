import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  Building2,
  Users,
  Target,
  Briefcase,
  ShieldCheck,
  Search,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

const BusinessWebsite = () => {
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
        bgClassName="bg-gradient-to-b from-slate-50 via-blue-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Business / Corporate{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Website Development
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Professional corporate websites designed to build trust, showcase
              services, and convert visitors into real business leads.
            </p>

            <Link
              to="/proposal"
              data-aos="zoom-in"
              data-aos-delay="200"
              className="inline-flex items-center gap-2
                         bg-blue-700 hover:bg-blue-800
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
          WHAT IS A BUSINESS WEBSITE
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-blue-700">
              What is a Business Website?
            </h2>

            <p className="text-muted-foreground mb-6">
              A business or corporate website represents your company online,
              communicates your services, values, and credibility, and acts as a
              24/7 digital salesperson.
            </p>

            <ul className="space-y-4">
              {[
                "Build trust & brand credibility",
                "Showcase company services & expertise",
                "Generate leads & inquiries",
                "Professional corporate presence",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Building2 className="text-indigo-600" />
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
          KEY SECTIONS
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Key Sections Included
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Target className="text-blue-600" />
                <p className="text-muted-foreground">
                  About Company – mission, vision & values.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
                <Briefcase className="text-blue-600" />
                <p className="text-muted-foreground">
                  Services – detailed offerings with CTA.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4">
                <Users className="text-blue-600" />
                <p className="text-muted-foreground">
                  Team – leadership & company culture.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4">
                <ShieldCheck className="text-blue-600" />
                <p className="text-muted-foreground">
                  Trust elements – testimonials & certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          SEO & LEAD GENERATION
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-blue-700">
              SEO Optimized & Lead Focused
            </h2>

            <p className="text-muted-foreground mb-6">
              Corporate websites are built with SEO, performance, and conversion
              in mind to ensure maximum business growth.
            </p>

            <ul className="space-y-4">
              {[
                "SEO-friendly structure & content",
                "Fast loading & mobile optimized",
                "Conversion-focused CTAs",
                "Google Analytics & Search Console ready",
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
          <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Business Website Package
            </h2>

            <p className="text-white/90 mb-6">
              Ideal for startups, companies, enterprises, and service-based
              businesses.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹15,000
            </div>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2
                         bg-white text-blue-700
                         font-semibold px-7 py-3 rounded-xl
                         hover:gap-3 hover:bg-blue-50 transition"
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

export default BusinessWebsite;
