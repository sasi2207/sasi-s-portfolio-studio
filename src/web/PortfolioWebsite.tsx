import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  User,
  Briefcase,
  FileText,
  Image,
  Mail,
  Star,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

const PortfolioWebsite = () => {
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
        bgClassName="bg-gradient-to-b from-purple-50 via-pink-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Portfolio Website{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A modern personal or professional portfolio website to showcase
              your skills, projects, experience, and achievements.
            </p>

            <Link
              to="/proposal"
              data-aos="zoom-in"
              data-aos-delay="200"
              className="inline-flex items-center gap-2
                         bg-purple-600 hover:bg-purple-700
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
          WHAT IS A PORTFOLIO WEBSITE
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-purple-700">
              What is a Portfolio Website?
            </h2>

            <p className="text-muted-foreground mb-6">
              A portfolio website is a personal brand platform where you present
              your work, skills, experience, and contact details in a clean and
              professional manner.
            </p>

            <ul className="space-y-4">
              {[
                "Showcase your skills & expertise",
                "Highlight real projects & case studies",
                "Build trust with potential clients",
                "Get direct inquiries & job offers",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Star className="text-pink-500 animate-pulse" />
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
          SECTIONS INCLUDED
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Sections Included in Portfolio
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <User className="text-indigo-500" />
                <p className="text-muted-foreground">
                  About Me – your background, skills, and journey.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4">
                <Briefcase className="text-indigo-500" />
                <p className="text-muted-foreground">
                  Projects – real work samples with descriptions.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4">
                <FileText className="text-indigo-500" />
                <p className="text-muted-foreground">
                  Resume – downloadable CV or experience section.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4">
                <Mail className="text-indigo-500" />
                <p className="text-muted-foreground">
                  Contact – direct inquiry form and social links.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          DESIGN & RESPONSIVENESS
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-purple-700">
              Clean Design & Responsive Layout
            </h2>

            <p className="text-muted-foreground mb-6">
              Your portfolio will look stunning on all devices with modern UI
              design, smooth animations, and fast performance.
            </p>

            <ul className="space-y-4">
              {[
                "Mobile, tablet & desktop responsive",
                "Smooth animations & transitions",
                "Fast loading & optimized assets",
                "SEO friendly personal branding",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Image className="text-pink-500" />
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
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Portfolio Website Package
            </h2>

            <p className="text-white/90 mb-6">
              Perfect for freelancers, professionals, designers, and developers.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹10,000
            </div>

            <Link
              to="/proposal"
              className="inline-flex items-center gap-2
                         bg-white text-purple-700
                         font-semibold px-7 py-3 rounded-xl
                         hover:gap-3 hover:bg-purple-50 transition"
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

export default PortfolioWebsite;
