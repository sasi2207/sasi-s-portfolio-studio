import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight } from 'lucide-react';

export default function BlazonShowcase() {
  const [activeTab, setActiveTab] = useState('gapp');

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      once: true, // Trigger animations only once on scroll
      easing: 'ease-out-cubic',
    });
  }, []);

  const productsData = {
    gapp: {
      badge: "GApp",
      title: "Blazon's Bullion Industry Software",
      subtitle: "Streamline, Comply, Prosper",
      description: "Blazon developed GApp for the bullion industry with the goal of automating workflow, ensuring compliance, and increasing efficiency and profitability with continuous updates and maintenance.",
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
      badge: "BOSApp",
      title: "Blazon's Industry-Optimized BOSApp",
      subtitle: "Efficiency, Excellence & Ease of Operations",
      description: "BOSApp Software is our in-house innovation for smooth business optimization. Its efficiency makes it essential to increase productivity in finance, manufacturing, and more industries.",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", 
          label: "Financial Reports" 
        },
        { 
          url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", 
          label: "Manufacturing Control" 
        }
      ]
    },
    offset: {
      badge: "Offset",
      title: "Blazon's Printing Industry Software",
      subtitle: "Precision, Profitability, and Peace of Mind",
      description: "Blazon's Offset Software, created for the printing industry, meets the demands for precision and speed. With our innovative solution, you can improve your process and simplify operations.",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", 
          label: "Press Operations" 
        },
        { 
          url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80", 
          label: "Precision Management" 
        }
      ]
    },
    ecommerce: {
      badge: "e-Commerce",
      title: "Blazon's Next-Gen e-Commerce Platform",
      subtitle: "Scale Sales, Delight Customers",
      description: "Our e-Commerce solutions empower businesses to build lightning-fast online storefronts, integrate secure payment gateways, and deliver seamless shopping experiences across all devices.",
      images: [
        { 
          url: "https://images.unsplash.com/photo-1556742049-0a67d553c2a5?auto=format&fit=crop&w=600&q=80", 
          label: "Online Storefront" 
        },
        { 
          url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80", 
          label: "Global Retail Analytics" 
        }
      ]
    }
  };

  const currentProduct = productsData[activeTab];

  return (
    <div className="w-full bg-white text-slate-800 font-sans px-4 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* SECTION 1: The BLAZON Narrative */}
        <div 
          className="text-center space-y-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              The <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600'>TechSasi</span> Narrative
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-2 rounded-full" />
          </div>

          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                3<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">+</span>
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-600">Years Of Experience</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                20<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">+</span>
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-600">Satisfied Clients</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                47<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">+</span>
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-600">Solutions Deployed</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                5<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">+</span>
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-600">Software Release</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Our Products */}
        <div className="space-y-10">
          <div 
            className="text-center space-y-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600'>Products</span> 
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
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
              { id: 'gapp', label: 'GApp' },
              { id: 'bosapp', label: 'BOSApp' },
              { id: 'offset', label: 'Offset' },
              { id: 'ecommerce', label: 'e-Commerce' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/30 shadow-md ring-2 ring-cyan-400'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-cyan-400 hover:text-cyan-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Showcase Card */}
          <div 
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-12 shadow-lg relative overflow-hidden transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Text & CTAs */}
              <div 
                className="lg:col-span-6 space-y-6"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
                  {currentProduct.badge}
                </span>

                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  {currentProduct.title}
                </h3>

                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  {currentProduct.subtitle}
                </h4>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {currentProduct.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 group text-sm cursor-pointer">
                    Know More
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-cyan-500/20 transition-all duration-300 group text-sm cursor-pointer">
                    Get Quote
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Optimized & Fast-Loading Images Grid */}
              <div 
                className="lg:col-span-6 grid grid-cols-2 gap-4"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {currentProduct.images.map((img, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-2 shadow-md flex flex-col justify-between group overflow-hidden"
                  >
                    <div className="overflow-hidden rounded-xl h-40 bg-slate-100">
                      <img 
                        src={img.url} 
                        alt={img.label} 
                        loading="lazy" 
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <span className="text-xs font-bold text-slate-700">{img.label}</span>
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