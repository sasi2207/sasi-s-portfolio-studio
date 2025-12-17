import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  CheckCircle,
  Zap,
  Layout,
  Search,
  Shield,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

/* ----------------------------------
   STATIC WEBSITE PAGE
----------------------------------- */
const StaticWebsite = () => {
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
        bgClassName="bg-gradient-to-b from-indigo-50 via-sky-50 to-transparent"
      >
        <div className="container-custom">
          <div
            className="max-w-3xl"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Static Website{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Lightweight, fast-loading static websites designed for small
              businesses, startups, and high-converting landing pages.
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
          WHAT IS STATIC WEBSITE
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              What is a Static Website?
            </h2>

            <p className="text-muted-foreground mb-6">
              A static website is built using HTML, CSS, and JavaScript where
              content is fixed and served directly to the user without database
              processing.
            </p>

            <p className="text-muted-foreground mb-6">
              Because there is no backend computation, static websites are
              extremely fast, secure, and cost-effective.
            </p>

            <ul className="space-y-4">
              {[
                "Ultra-fast page loading",
                "No database or server-side delays",
                "Highly secure & stable",
                "Low hosting and maintenance cost",
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

          {/* Image placeholder */}
          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white shadow-lg h-64 hover:shadow-xl transition"
          />
        </div>
      </section>

      {/* ==============================
          SPEED & PERFORMANCE
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="order-2 lg:order-1 rounded-2xl bg-white shadow-lg h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left" className="order-1 lg:order-2">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Lightning Fast Performance
            </h2>

            <p className="text-muted-foreground mb-6">
              Static websites load instantly because the browser receives
              pre-built files without server-side processing or database calls.
            </p>

            <div className="space-y-4">
              <div
                data-aos="fade-up"
                className="flex gap-4"
              >
                <Zap className="text-sky-500 animate-bounce" />
                <div>
                  <h4 className="font-semibold">Faster Than CMS</h4>
                  <p className="text-sm text-muted-foreground">
                    No plugins, no backend delays, pure performance.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex gap-4"
              >
                <Shield className="text-sky-500" />
                <div>
                  <h4 className="font-semibold">High Security</h4>
                  <p className="text-sm text-muted-foreground">
                    No database means fewer attack points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          RESPONSIVE DESIGN
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Fully Responsive Design
            </h2>

            <p className="text-muted-foreground mb-6">
              Your website automatically adapts to all screen sizes — mobile,
              tablet, laptop, and desktop.
            </p>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Layout className="text-teal-500" />
                <p className="text-muted-foreground">
                  Mobile-first layouts for better user engagement.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
                <CheckCircle className="text-teal-500" />
                <p className="text-muted-foreground">
                  Touch-friendly UI and clean typography.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white shadow-lg h-64 hover:shadow-xl transition"
          />
        </div>
      </section>

      {/* ==============================
          SEO SECTION
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-lg h-64"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              SEO Friendly Structure
            </h2>

            <p className="text-muted-foreground mb-6">
              Static websites are naturally SEO-friendly due to clean code,
              faster loading speeds, and structured content.
            </p>

            <ul className="space-y-4">
              {[
                "Proper heading hierarchy",
                "Optimized meta tags",
                "Clean URL structure",
                "Fast page speed",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Search className="text-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==============================
          PRICING & CTA
      =============================== */}
      <section className="section-padding">
        <div
          className="container-custom"
          data-aos="zoom-in"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Static Website Package
            </h2>

            <p className="text-white/90 mb-6">
              Ideal for small businesses, startups, and personal brands.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹4,000
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

export default StaticWebsite;
