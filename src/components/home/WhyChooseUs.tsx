import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Database } from 'lucide-react';

export default function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState('gapp');

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const productsData = {
    gapp: {
      badge: "TechSasi BullionERP",
      title: "TechSasi Bullion & Jewelry Industry Software",
      subtitle: "Streamline, Comply & Maximize Margins",
      description: "Custom-developed by TechSasi for bullion traders and jewelers to automate live rates, purity tracking, compliance records, and inventory accounting with zero latency.",
      highlights: ["Live Metal Rate Auto-Sync", "Hallmark & Purity Ledger", "Instant GST Bill Generation", "Multi-branch Vault Audit"],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80", 
          label: "Bullion Analytics" 
        },
        { 
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", 
          label: "Live Market Dashboard" 
        }
      ]
    },
    bosapp: {
      badge: "TechSasi BOS",
      title: "TechSasi Business Optimization Suite",
      subtitle: "Efficiency, Operations & Real-time Intelligence",
      description: "Our proprietary enterprise management system built to streamline manufacturing, supply chain tracking, and financial reconciliation for ambitious modern companies.",
      highlights: ["ERP & Supply Chain Hub", "Automated Financial Statements", "Barcode Counter Billing", "Role-Based Staff Access"],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", 
          label: "Financial Intelligence" 
        },
        { 
          url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", 
          label: "Workflow Control" 
        }
      ]
    },
    offset: {
      badge: "TechSasi PrintFlow",
      title: "TechSasi Offset & Printing Automation",
      subtitle: "Precision, Cost Estimation & Production Speed",
      description: "Created specifically for commercial printers, packaging converters, and digital presses to deliver accurate paper cut estimation, ink calculations, and client job tracking.",
      highlights: ["Paper Cut & GSM Cost Calculator", "Pre-Press Workflow Queue", "Automated Job Delivery Tracking", "Plate & Ink Consumption Logs"],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", 
          label: "Press Operations" 
        },
        { 
          url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80", 
          label: "Precision Metrics" 
        }
      ]
    },
    ecommerce: {
      badge: "TechSasi Commerce",
      title: "TechSasi High-Speed E-Commerce Platform",
      subtitle: "Scale Traffic, Boost Conversions & Delight Shoppers",
      description: "Headless, sub-second loading storefronts equipped with automated payment gateways, real-time inventory synchronization, and WhatsApp order notification pipelines.",
      highlights: ["Sub-second Page Load Speed", "Integrated UPI & Global Gateways", "Abandoned Cart WhatsApp Alerts", "Multi-vendor Catalog Support"],
      images: [
        { 
          url: "https://images.unsplash.com/photo-1556742049-0a67d553c2a5?auto=format&fit=crop&w=600&q=80", 
          label: "Online Storefront" 
        },
        { 
          url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80", 
          label: "Omnichannel Analytics" 
        }
      ]
    }
  };

  const currentProduct = productsData[activeTab as keyof typeof productsData];

  return (
    <div className="w-full bg-white text-[#111827] font-sans px-4 py-16 md:py-24 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* SECTION 1: The TechSasi Track Record */}
        <div 
          className="text-center space-y-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5FF] border border-[#66CCFF]/40 text-xs font-bold text-[#0061FF]">
              <span>Proven Impact &amp; Reliability</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] tracking-tight">
              The <span className="bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">TechSasi</span> Track Record
            </h2>
            <p className="text-sm md:text-base text-[#64748B] max-w-2xl mx-auto">
              Real results for growing businesses. Our custom web solutions, software applications, and digital marketing engines drive measurable growth.
            </p>
          </div>

          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="p-6 rounded-2xl bg-[#F5F8FF] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-4xl md:text-5xl font-black text-[#0061FF]">
                3<span className="text-[#00E5FF]">+</span>
              </h3>
              <p className="text-xs md:text-sm font-bold text-[#111827] mt-2">Years Of Experience</p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Continuous Innovation</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F5F8FF] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-4xl md:text-5xl font-black text-[#0061FF]">
                20<span className="text-[#00E5FF]">+</span>
              </h3>
              <p className="text-xs md:text-sm font-bold text-[#111827] mt-2">Satisfied Clients</p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Across India &amp; Global</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F5F8FF] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-4xl md:text-5xl font-black text-[#0061FF]">
                47<span className="text-[#00E5FF]">+</span>
              </h3>
              <p className="text-xs md:text-sm font-bold text-[#111827] mt-2">Solutions Deployed</p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Web, POS &amp; Mobile</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F5F8FF] border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-4xl md:text-5xl font-black text-[#0061FF]">
                5<span className="text-[#00E5FF]">+</span>
              </h3>
              <p className="text-xs md:text-sm font-bold text-[#111827] mt-2">Core Software Products</p>
              <p className="text-[11px] text-[#64748B] mt-0.5">Enterprise Ready</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Our Software Solutions */}
        <div className="space-y-10">
          <div 
            className="text-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5FF] border border-[#66CCFF]/40 text-xs font-bold text-[#0061FF]">
              <span>Proprietary Platforms</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] tracking-tight">
              Software Engineered For <span className="bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">Scale</span> 
            </h2>
            <p className="text-sm text-[#64748B] max-w-xl mx-auto">
              Explore our suite of industry-standard software solutions crafted to automate workflow and maximize growth.
            </p>
          </div>

          {/* Product Pill Navigation */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {[
              { id: 'gapp', label: 'BullionERP' },
              { id: 'bosapp', label: 'TechSasi BOS' },
              { id: 'offset', label: 'PrintFlow' },
              { id: 'ecommerce', label: 'E-Commerce' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0061FF] text-white shadow-[0_4px_16px_rgba(0,97,255,0.3)] ring-2 ring-[#0061FF]'
                    : 'bg-[#F5F8FF] text-[#64748B] border border-slate-200 hover:border-[#0061FF] hover:text-[#0061FF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Showcase Card */}
          <div 
            className="bg-[#F5F8FF] border border-slate-200 rounded-3xl p-6 md:p-12 shadow-[0_12px_40px_rgba(0,97,255,0.06)] relative overflow-hidden transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0061FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Text & CTAs */}
              <div 
                className="lg:col-span-6 space-y-6"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#0061FF] bg-[#EAF5FF] border border-[#66CCFF]/40 px-3 py-1 rounded-full">
                  {currentProduct.badge}
                </span>

                <h3 className="text-3xl md:text-4xl font-extrabold text-[#111827] leading-tight">
                  {currentProduct.title}
                </h3>

                <h4 className="text-lg font-bold bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">
                  {currentProduct.subtitle}
                </h4>

                <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Highlights Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {currentProduct.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#111827]">
                      <CheckCircle2 className="w-4 h-4 text-[#0061FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link 
                    to={`/proposal?product=${activeTab}`}
                    className="inline-flex items-center gap-2 bg-[#0061FF] hover:bg-[#0033CC] text-white font-bold px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(0,97,255,0.3)] transition-all duration-300 group text-sm cursor-pointer"
                  >
                    <span>Request Demo &amp; Quote</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#EAF5FF] text-[#001B66] font-bold px-6 py-3.5 rounded-xl border border-slate-300 transition-all duration-300 text-sm cursor-pointer"
                  >
                    <span>Talk to Engineer</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Images Grid */}
              <div 
                className="lg:col-span-6 grid grid-cols-2 gap-4"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {currentProduct.images.map((img, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-2.5 shadow-md flex flex-col justify-between group overflow-hidden"
                  >
                    <div className="overflow-hidden rounded-xl h-44 bg-slate-100">
                      <img 
                        src={img.url} 
                        alt={img.label} 
                        loading="lazy" 
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <span className="text-xs font-bold text-[#111827]">{img.label}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}