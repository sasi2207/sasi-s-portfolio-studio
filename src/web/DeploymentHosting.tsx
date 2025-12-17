import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  ArrowRight,
  Cloud,
  Server,
  ShieldCheck,
  Settings,
  Database,
  Activity,
} from "lucide-react";

import { Layout as PageLayout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";

const DeploymentHosting = () => {
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
        bgClassName="bg-gradient-to-b from-slate-50 via-cyan-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Deployment &{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Hosting Services
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Secure, scalable, and production-ready deployment solutions for
              websites, web apps, and mobile backends.
            </p>

            <Link
              to="/proposal"
              data-aos="zoom-in"
              data-aos-delay="200"
              className="inline-flex items-center gap-2
                         bg-blue-600 hover:bg-blue-700
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
          DEPLOYMENT PLATFORMS
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-blue-700">
              Deployment Platforms
            </h2>

            <ul className="space-y-4">
              {[
                "AWS (EC2, S3, RDS, CloudFront)",
                "Microsoft Azure App Services",
                "VPS / Dedicated Servers",
                "Shared Hosting (cPanel / hPanel)",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Cloud className="text-cyan-600" />
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
          VPS & SERVER CONFIG
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64 hover:scale-[1.02] transition"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              VPS & Server Configuration
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Server className="text-blue-600" />
                <p className="text-muted-foreground">
                  Linux server setup (Ubuntu / CentOS).
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex gap-4"
              >
                <Settings className="text-blue-600" />
                <p className="text-muted-foreground">
                  Nginx / Apache, Node.js, PHP, Java setup.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex gap-4"
              >
                <Database className="text-blue-600" />
                <p className="text-muted-foreground">
                  MySQL / PostgreSQL / MongoDB configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          CPANEL & HPANEL
      =============================== */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-heading font-bold mb-4 text-cyan-700">
              cPanel & hPanel Hosting
            </h2>

            <div className="space-y-4">
              <div data-aos="fade-up" className="flex gap-4">
                <Settings className="text-cyan-600" />
                <p className="text-muted-foreground">
                  Domain setup, subdomains & DNS configuration.
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex gap-4"
              >
                <ShieldCheck className="text-cyan-600" />
                <p className="text-muted-foreground">
                  SSL (HTTPS), email & security configuration.
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
          SECURITY & MONITORING
      =============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white shadow-xl h-64"
          />

          <div data-aos="fade-left">
            <h2 className="text-3xl font-heading font-bold mb-4 text-indigo-700">
              Security, CI/CD & Monitoring
            </h2>

            <ul className="space-y-4">
              {[
                "SSL & firewall setup",
                "GitHub CI/CD pipeline",
                "Automated builds & deployment",
                "Server uptime monitoring",
              ].map((item, i) => (
                <li
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="flex items-center gap-3"
                >
                  <Activity className="text-blue-600" />
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
        <div className="container-custom" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Deployment & Hosting Package
            </h2>

            <p className="text-white/90 mb-6">
              Ideal for startups, enterprises, SaaS products & e-commerce
              platforms.
            </p>

            <div className="text-4xl font-bold mb-6">
              Starting at ₹7,000
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

export default DeploymentHosting;
