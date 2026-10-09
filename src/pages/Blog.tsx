import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  Sparkles, 
  BookOpen,
  Filter,
  ChevronRight,
  Terminal
} from "lucide-react";

import { Layout } from "@/components/layout/Layout";
import { BlogGridSkeleton } from "@/components/skeletons";

const categories = ["All Articles", "Engineering", "DevOps", "Cybersecurity", "Automation"];

const blogPosts = [
  {
    id: 1,
    title: "Architecting High-Availability Systems for 99.999% Uptime",
    excerpt: "An in-depth analysis of multi-region redundant clusters, database isolation mechanics, and automated failover network architectures.",
    category: "DevOps",
    date: "July 08, 2026",
    readTime: "8 min read",
    author: "Alex Rivers",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Bypassing Modern Browser Trackers with First-Party Server Pools",
    excerpt: "How server-side telemetry integration helps businesses reclaim analytical precision amid aggressive third-party data blocking.",
    category: "Engineering",
    date: "July 02, 2026",
    readTime: "5 min read",
    author: "Elena Rostova",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Hardening Virtual Networks Against Decentralized Zero-Day Exploits",
    excerpt: "A defensive guide to configuring granular transport access rules and automated runtime container sandbox isolation parameters.",
    category: "Cybersecurity",
    date: "June 28, 2026",
    readTime: "6 min read",
    author: "Marcus Vance",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Optimizing Client Execution Performance on Complex UI Frameworks",
    excerpt: "Strategies for improving visual layouts by utilizing pre-rendered database graphs and eliminating main thread blockages.",
    category: "Automation",
    date: "June 15, 2026",
    readTime: "4 min read",
    author: "Siddharth Nair",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  }
];

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Initial load skeleton simulation (0.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (cat: string) => {
    if (cat === selectedCategory) return;
    setIsLoading(true);
    setSelectedCategory(cat);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.isFeatured);
  const regularPosts = filteredPosts.filter((post) => !post.isFeatured || selectedCategory !== "All Articles");

  return (
    <Layout>
      <div className="min-h-screen bg-[#06090F] pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-amber-400/[0.03] rounded-full blur-[100px] pointer-events-none" />

        {/* HEADER BLOCK */}
        <div className="max-w-6xl mx-auto mb-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/[0.08] pb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>TechSasi Insights & Architecture</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] text-balance">
                Engineering <span className="text-amber-400">Articles</span> & Guides.
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Architecture reviews, high-concurrency database benchmarks, frontend performance tips, and software engineering deep-dives.
              </p>
            </div>

            {/* SEARCH INPUT */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0C111E] border border-white/[0.08] focus:border-amber-400/60 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white outline-none transition-all placeholder:text-slate-500 font-mono"
              />
            </div>
          </div>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className="max-w-6xl mx-auto mb-12 relative z-10 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                    : "bg-[#0C111E] border border-white/[0.08] text-slate-300 hover:text-white hover:border-amber-400/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SKELETON LOADER STATE */}
        {isLoading ? (
          <div className="max-w-6xl mx-auto mb-20 relative z-10">
            <BlogGridSkeleton count={6} showFeatured={selectedCategory === "All Articles" && searchQuery === ""} />
          </div>
        ) : (
          <>
            {/* FEATURED POST */}
            {featuredPost && selectedCategory === "All Articles" && searchQuery === "" && (
              <div className="max-w-6xl mx-auto mb-16 relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-3xl bg-[#0B101D] border border-white/[0.08] hover:border-amber-400/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group relative shadow-2xl transition-all duration-300"
                >
                  <div className="lg:col-span-6 h-64 lg:h-auto min-h-[280px] relative overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span className="text-amber-400 font-semibold">{featuredPost.category}</span>
                        <span>·</span>
                        <span>{featuredPost.date}</span>
                        <span>·</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
                      <span className="text-xs font-mono text-slate-400">Author: {featuredPost.author}</span>
                      <button className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-all">
                        <span>Read Full Guide</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* REGULAR POSTS GRID */}
            <div className="max-w-6xl mx-auto mb-24 relative z-10">
              {regularPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post, idx) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="rounded-2xl bg-[#0B101D] border border-white/[0.08] hover:border-amber-400/40 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-md"
                    >
                      <div>
                        <div className="h-44 overflow-hidden relative">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute bottom-3 left-3 bg-[#06090F]/90 backdrop-blur-md border border-white/[0.08] text-amber-400 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded">
                            {post.category}
                          </span>
                        </div>

                        <div className="p-6 space-y-3">
                          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className="font-display text-lg font-bold text-white tracking-tight line-clamp-2 group-hover:text-amber-300 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 mt-2 flex items-center justify-between border-t border-white/[0.06] pt-4">
                        <span className="text-[11px] font-mono text-slate-500">By {post.author}</span>
                        <button className="text-xs font-semibold text-white group-hover:text-amber-400 flex items-center gap-1 transition-colors">
                          <span>Read Article</span>
                          <ChevronRight size={14} className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 border border-white/[0.08] rounded-2xl bg-[#0C111E] p-8 space-y-2">
                  <p className="text-sm font-semibold text-white">No articles matching your search</p>
                  <p className="text-xs text-slate-400">Try adjusting your keywords or switching back to "All Articles".</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* NEWSLETTER SUBSCRIBE CALLOUT */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="rounded-3xl bg-[#0B101D] border border-white/[0.08] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-display text-xl font-bold text-white">
                Subscribe to TechSasi Architecture Dispatch
              </h4>
              <p className="text-xs text-slate-400 max-w-md">
                Weekly articles on high-speed web architectures, Flutter mobile tips, and cloud DevOps directly to your inbox.
              </p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="bg-black/50 border border-white/[0.08] focus:border-amber-400/50 text-xs text-white px-4 py-2.5 rounded-lg outline-none w-full md:w-64 placeholder:text-slate-500 font-mono"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default BlogPage;
