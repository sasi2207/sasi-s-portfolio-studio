import React, { useState, useEffect } from 'react';
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

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Trigger animations only once on scroll
      easing: 'ease-out-cubic',
    });
  }, []);

  // Service Data Mapping with Cyan / Electric Blue accents
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
        { label: "Brand Discovery", icon: Sparkles, color: "from-cyan-500 to-blue-600" },
        { label: "Creative Concepting", icon: PenTool, color: "from-blue-600 to-cyan-400" },
        { label: "Design Refinement", icon: Layers, color: "from-cyan-400 to-sky-500" }
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
        { label: "Custom Architecture", icon: Cpu, color: "from-cyan-500 to-blue-600" },
        { label: "API Integration", icon: Code2, color: "from-blue-600 to-cyan-400" },
        { label: "Cloud Deployment", icon: Globe, color: "from-cyan-400 to-sky-500" }
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
        { label: "SEO Optimization", icon: Search, color: "from-cyan-500 to-blue-600" },
        { label: "Growth Strategy", icon: TrendingUp, color: "from-blue-600 to-cyan-400" },
        { label: "Social Campaigns", icon: Share2, color: "from-cyan-400 to-sky-500" }
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
        { label: "Responsive Layouts", icon: Smartphone, color: "from-cyan-500 to-blue-600" },
        { label: "Fast Loading Speed", icon: Sparkles, color: "from-blue-600 to-cyan-400" },
        { label: "CMS Integration", icon: Layout, color: "from-cyan-400 to-sky-500" }
      ]
    }
  };

  const currentContent = servicesData[activeTab];

  return (
    <div className="w-full bg-white text-slate-800 font-sans px-4 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div 
          className="text-center space-y-3 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Services
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Your Path to Digital Growth
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
            BLAZON provides a broad range of modern technology services aimed at improving your business and accelerating digital growth. With over a decade of experience in digital services, our knowledge is highly calibrated to create solutions that are targeted to your specific goals and difficulties. We are committed to quality across all of our service offerings.
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
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'design'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/20 shadow-md ring-2 ring-cyan-400'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Palette className="w-4 h-4" />
            Design Services
          </button>

          <button
            onClick={() => { setActiveTab('development'); setActiveSubCategory('Web Apps'); }}
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'development'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/20 shadow-md ring-2 ring-cyan-400'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Development Services
          </button>

          <button
            onClick={() => { setActiveTab('marketing'); setActiveSubCategory('SEO'); }}
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'marketing'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/20 shadow-md ring-2 ring-cyan-400'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Digital Marketing Services
          </button>

          <button
            onClick={() => { setActiveTab('web'); setActiveSubCategory('WordPress'); }}
            className={`flex items-center justify-center gap-3 py-3 px-5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm ${
              activeTab === 'web'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/20 shadow-md ring-2 ring-cyan-400'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            Web Services
          </button>
        </div>

        {/* Dynamic Service Banner Content */}
        <div 
          className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden transition-all duration-500"
          data-aos="zoom-in"
          data-aos-delay="250"
          data-aos-duration="900"
        >
          
          {/* Cyan/Electric Blue Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                {currentContent.title.split(' ').map((word, index) => {
                  if (['Speak', 'Louder', 'Scalable', 'Converts', 'Modern'].includes(word)) {
                    return (
                      <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
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
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      activeSubCategory === cat
                        ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/30'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-cyan-400 hover:text-cyan-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentContent.description}
              </p>

              {/* Get Quote Primary Action Button */}
              <div>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 group">
                  Get Quote
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Interactive Showcase Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Product / Mockup Showcase Card */}
              <div 
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[180px]">
                  <div className="w-16 h-20 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg shadow-md flex items-center justify-center text-white transform group-hover:scale-105 transition-transform">
                    <Box className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-cyan-100/60 px-2.5 py-0.5 rounded-full">
                    {currentContent.featuredCard.badge}
                  </span>
                </div>
                <h4 className="mt-4 text-center font-bold text-slate-800 text-sm">
                  {currentContent.featuredCard.title}
                </h4>
              </div>

              {/* Client Testimonial Card */}
              <div 
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div>
                  <div className="text-cyan-500 font-serif text-3xl font-bold leading-none mb-2">“</div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    {currentContent.testimonial.quote}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      {currentContent.testimonial.author[0]}
                    </div>
                    <span className="text-xs font-semibold text-slate-800">
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
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow sm:col-span-2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex flex-wrap items-center justify-around gap-4">
                  {currentContent.showcaseItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-sm`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
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