import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  Search,
  TrendingUp,
  Settings,
  FileText,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

const SeoOptimization = () => {
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
        bgClassName="bg-gradient-to-b from-green-50 via-emerald-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              SEO{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Optimization Services
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Data-driven SEO strategies to improve Google rankings, increase
              organic traffic, and convert visitors into customers.
            </p>

            <Link
              to="/proposal"
              data-aos="zoom-in"
              data-aos-delay="200"
              className="inline-flex items-center gap-2
                         bg-green-600 hover:bg-green-700
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
          WHAT IS SEO
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-green-700">
              What is SEO?
            </h2>

            <p className="text-muted-foreground mb-6">
              Search Engine Optimization (SEO) is the process of improving your
              website’s visibility on search engines like Google to attract
              high-quality organic traffic.
            </p>

            <ul className="space-y-4">
              {[
                "Higher Google rankings",
                "Increased organic traffic",
                "Better website credibility",
                "Long-term marketing results",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Search className="text-emerald-600" />
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
          SEO SERVICES INCLUDED
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-emerald-700">
              SEO Services Included
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <FileText className="text-green-600" />
                <p className="text-muted-foreground">
                  On-Page SEO – content, meta tags, headings & structure.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex gap-4"
              >
                <Settings className="text-green-600" />
                <p className="text-muted-foreground">
                  Technical SEO – speed, indexing & performance optimization.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-4"
              >
                <TrendingUp className="text-green-600" />
                <p className="text-muted-foreground">
                  Keyword research & competitor analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          PERFORMANCE & ANALYTICS
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-green-700">
              Performance Tracking & Analytics
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <BarChart3 className="text-emerald-600" />
                <p className="text-muted-foreground">
                  Google Analytics & Search Console setup.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex gap-4"
              >
                <ShieldCheck className="text-emerald-600" />
                <p className="text-muted-foreground">
                  Clean, safe SEO practices (White-Hat only).
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
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              SEO Optimization Package
            </h2>

            <p className="text-white/90 mb-6">
              Ideal for businesses, startups, and e-commerce websites.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹4,000
            </div>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2
                         bg-white text-green-700
                         font-semibold px-7 py-3 rounded-xl
                         hover:gap-3 hover:bg-green-50 transition"
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

export default SeoOptimization;
