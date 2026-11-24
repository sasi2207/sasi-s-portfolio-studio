import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Palette, 
  Code2, 
  TrendingUp, 
  Globe, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Layout, 
  Layers, 
  Box, 
  PenTool,
  Search,
  Share2,
  Cpu,
  Smartphone
} from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('design');
  const [activeSubCategory, setActiveSubCategory] = useState('Logo');

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const servicesData = {
    design: {
      title: "Designs That Speak Louder Than Words",
      description: "Stand out in the digital crowd with our design services, leaving a lasting impression that sets your brand apart.",
      subCategories: ["Logo", "UI/UX", "Print", "Package"],
      featuredCard: {
        title: "Amazing Packaging Designs",
        badge: "Featured Work",
        type: "package"
      },
      testimonial: {
        quote: "They have a deep understanding of user behavior and design principles, which shows in every interaction.",
        author: "Rupert Vance",
        rating: 5
      },
      showcaseItems: [
        { label: "Brand Discovery", icon: Sparkles },
        { label: "Creative Concepting", icon: PenTool },
        { label: "Design Refinement", icon: Layers }
      ]
    },
    development: {
      title: "Robust & Scalable Software Solutions",
      description: "Build cutting-edge web applications and enterprise platforms engineered for performance, security, and growth.",
      subCategories: ["Web Apps", "Mobile", "APIs", "Cloud"],
      featuredCard: {
        title: "SaaS Platform Architecture",
        badge: "Core Tech",
        type: "dev"
      },
      testimonial: {
        quote: "The development team delivered high-performance code on tight deadlines. Exceptionally reliable team!",
        author: "Sarah Jenkins",
        rating: 5
      },
      showcaseItems: [
        { label: "Custom Architecture", icon: Cpu },
        { label: "API Integration", icon: Code2 },
        { label: "Cloud Deployment", icon: Globe }
      ]
    },
    marketing: {
      title: "Data-Driven Marketing That Converts",
      description: "Amplify your online reach with targeted SEO, high-impact ad campaigns, and ROI-driven digital growth strategies.",
      subCategories: ["SEO", "PPC Ads", "Social", "Content"],
      featuredCard: {
        title: "300% Growth Campaign",
        badge: "Case Study",
        type: "marketing"
      },
      testimonial: {
        quote: "Our organic search traffic skyrocketed by over 200% in under four months. Highly recommended!",
        author: "Marcus Chen",
        rating: 5
      },
      showcaseItems: [
        { label: "SEO Optimization", icon: Search },
        { label: "Growth Strategy", icon: TrendingUp },
        { label: "Social Campaigns", icon: Share2 }
      ]
    },
    web: {
      title: "High-Performance Modern Websites",
      description: "Craft seamless, fast-loading, mobile-first websites tailored to convert visitors into loyal customers.",
      subCategories: ["WordPress", "E-Commerce", "Landing Pages", "Webflow"],
      featuredCard: {
        title: "Next-Gen E-Commerce",
        badge: "Web Store",
        type: "web"
      },
      testimonial: {
        quote: "Our website bounce rate dropped significantly while conversions doubled after the revamp.",
        author: "Elena Rostova",
        rating: 5
      },
      showcaseItems: [
        { label: "Responsive Layouts", icon: Smartphone },
        { label: "Fast Loading Speed", icon: Sparkles },
        { label: "CMS Integration", icon: Layout }
      ]
    }
  };

  const currentContent = servicesData[activeTab as keyof typeof servicesData];

  return (
    <div className="w-full bg-[#F5F8FF] text-[#111827] font-sans px-4 py-16 md:py-24 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div 
          className="text-center space-y-3 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5FF] border border-[#66CCFF]/40 text-xs font-semibold text-[#0061FF]">
            <span>Capabilities &amp; Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111827]">
            Our Services
          </h2>
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">
            Your Path to Digital Growth
          </h3>
          <p className="text-sm md:text-base text-[#64748B] leading-relaxed pt-2">
            TechSasi provides a broad range of modern technology services aimed at improving your business and accelerating digital growth. With over a decade of experience in digital services, our knowledge is highly calibrated to create solutions that are targeted to your specific goals and difficulties.
          </p>
        </div>

        {/* Main Tab Navigation */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          <button
            onClick={() => { setActiveTab('design'); setActiveSubCategory('Logo'); }}
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'design'
                ? 'bg-[#0061FF] text-white shadow-[0_4px_16px_rgba(0,97,255,0.3)] ring-2 ring-[#0061FF]'
                : 'bg-white text-[#64748B] hover:bg-[#EAF5FF] hover:text-[#0061FF] border border-slate-200'
            }`}
          >
            <Palette className="w-4 h-4" />
            Design Services
          </button>

          <button
            onClick={() => { setActiveTab('development'); setActiveSubCategory('Web Apps'); }}
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'development'
                ? 'bg-[#0061FF] text-white shadow-[0_4px_16px_rgba(0,97,255,0.3)] ring-2 ring-[#0061FF]'
                : 'bg-white text-[#64748B] hover:bg-[#EAF5FF] hover:text-[#0061FF] border border-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Development Services
          </button>

          <button
            onClick={() => { setActiveTab('marketing'); setActiveSubCategory('SEO'); }}
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'marketing'
                ? 'bg-[#0061FF] text-white shadow-[0_4px_16px_rgba(0,97,255,0.3)] ring-2 ring-[#0061FF]'
                : 'bg-white text-[#64748B] hover:bg-[#EAF5FF] hover:text-[#0061FF] border border-slate-200'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Digital Marketing
          </button>

          <button
            onClick={() => { setActiveTab('web'); setActiveSubCategory('WordPress'); }}
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'web'
                ? 'bg-[#0061FF] text-white shadow-[0_4px_16px_rgba(0,97,255,0.3)] ring-2 ring-[#0061FF]'
                : 'bg-white text-[#64748B] hover:bg-[#EAF5FF] hover:text-[#0061FF] border border-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            Web Services
          </button>
        </div>

        {/* Dynamic Service Banner Content */}
        <div 
          className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-[0_12px_40px_rgba(0,97,255,0.06)] relative overflow-hidden transition-all duration-500"
          data-aos="zoom-in"
          data-aos-delay="250"
          data-aos-duration="900"
        >
          {/* Subtle Ambient Brand Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0061FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#111827] leading-tight">
                {currentContent.title.split(' ').map((word, index) => {
                  if (['Speak', 'Louder', 'Scalable', 'Converts', 'Modern'].includes(word)) {
                    return (
                      <span key={index} className="bg-gradient-to-r from-[#00E5FF] to-[#0061FF] bg-clip-text text-transparent">
                        {word}{' '}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </h3>

              {/* Sub-category Pill Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentContent.subCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSubCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                      activeSubCategory === cat
                        ? 'bg-[#0061FF] text-white shadow-sm'
                        : 'bg-[#EAF5FF] text-[#0033CC] border border-[#66CCFF]/40 hover:border-[#0061FF] hover:text-[#0061FF]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                {currentContent.description}
              </p>

              {/* Get Quote Primary Action Button */}
              <div>
                <Link
                  to={`/proposal?service=${activeTab}`}
                  className="inline-flex items-center gap-2 bg-[#0061FF] hover:bg-[#0033CC] text-white font-bold px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(0,97,255,0.3)] transition-all duration-300 group"
                >
                  <span>Request Service Quote</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Showcase Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Product / Mockup Showcase Card */}
              <div 
                className="bg-[#F5F8FF] border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[180px]">
                  <div className="w-16 h-20 bg-gradient-to-tr from-[#00E5FF] to-[#0061FF] rounded-xl shadow-md flex items-center justify-center text-white transform group-hover:scale-105 transition-transform">
                    <Box className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0061FF] bg-[#EAF5FF] px-2.5 py-0.5 rounded-full border border-[#66CCFF]/30">
                    {currentContent.featuredCard.badge}
                  </span>
                </div>
                <h4 className="mt-4 text-center font-bold text-[#111827] text-sm">
                  {currentContent.featuredCard.title}
                </h4>
              </div>

              {/* Client Testimonial Card */}
              <div 
                className="bg-[#F5F8FF] border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div>
                  <div className="text-[#0061FF] font-serif text-3xl font-bold leading-none mb-2">“</div>
                  <p className="text-xs text-[#64748B] italic leading-relaxed">
                    {currentContent.testimonial.quote}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#0061FF] text-white font-bold text-xs flex items-center justify-center">
                      {currentContent.testimonial.author[0]}
                    </div>
                    <span className="text-xs font-bold text-[#111827]">
                      {currentContent.testimonial.author}
                    </span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(currentContent.testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Process / Steps Diagram */}
              <div 
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow sm:col-span-2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex flex-wrap items-center justify-around gap-4">
                  {currentContent.showcaseItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#EAF5FF] text-[#0061FF] border border-[#66CCFF]/30 shadow-sm">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#111827]">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}