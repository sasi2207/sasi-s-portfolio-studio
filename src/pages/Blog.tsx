import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

import { Layout as PageLayout } from "@/components/layout/Layout";

const categories = ["All Nodes", "Engineering", "DevOps", "Cybersecurity", "Automation"];

const blogPosts = [
  {
    id: 1,
    title: "Architecting High-Availability Systems for 99.999% Uptime",
    excerpt: "An in-depth analysis of multi-region redundant clusters, database isolation mechanics, and automated failover network matrices.",
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
    excerpt: "Strategies for improving visual layouts by utilizing pre-rendered database graphs and eliminating thread blockages.",
    category: "Automation",
    date: "June 15, 2026",
    readTime: "4 min read",
    author: "Siddharth Nair",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  }
];

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Nodes");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Nodes" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.isFeatured);
  const regularPosts = filteredPosts.filter(post => !post.isFeatured || selectedCategory !== "All Nodes");

  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-zinc-300 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-mono selection:bg-amber-400/20 selection:text-amber-400">
        
        {/* Technical Grid Blueprint Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121214_1px,transparent_1px),linear-gradient(to_bottom,#121214_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-amber-400/[0.02] rounded-full blur-[100px] pointer-events-none" />

        {/* HEADER BLOCK */}
        <div className="max-w-6xl mx-auto mb-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-sm">
                <Terminal size={11} className="text-amber-400 animate-pulse" />
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  CORE_REPOSITORY // ACTIVE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white uppercase">
                System <span className="font-bold text-amber-400">Logs</span>
              </h1>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed max-w-xl font-sans">
                Deep-level architecture metrics, zero-trust cryptographic setups, framework stress evaluations, and direct transaction pipeline audits.
              </p>
            </div>

            {/* MONOCHROME SEARCH INPUT */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 w-3.5 h-3.5" />
              <input
                type="text"
                placeholder="search_query_param..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-900 focus:border-amber-400/40 rounded-sm pl-9 pr-4 py-2 text-xs text-zinc-200 outline-none transition-all placeholder:text-zinc-700 font-mono"
              />
            </div>
          </div>
        </div>

        {/* BRUTALIST CATEGORY PILLS */}
        <div className="max-w-6xl mx-auto mb-12 relative z-10 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 pb-2 border-b border-zinc-900/40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-sm text-xs transition-all uppercase tracking-wider ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-black font-bold"
                    : "bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED POST (Brutalist Inverted Card layout) */}
        {featuredPost && selectedCategory === "All Nodes" && searchQuery === "" && (
          <div className="max-w-6xl mx-auto mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-zinc-950 border border-zinc-900 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden hidden md:block">
                <div className="absolute top-[-10px] right-[-40px] bg-zinc-900 text-zinc-500 text-[9px] font-bold uppercase py-1 px-10 rotate-45 border-b border-zinc-800 text-center tracking-widest">
                  NEW_LOG
                </div>
              </div>

              <div className="lg:col-span-6 h-64 lg:h-auto relative overflow-hidden grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[11px] text-zinc-600">
                    <span className="text-amber-400 font-bold uppercase">[{featuredPost.category}]</span>
                    <span>/</span>
                    <span className="flex items-center gap-1">{featuredPost.date}</span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                  <span className="text-[10px] text-zinc-600 uppercase">SYS_AUTH: {featuredPost.author}</span>
                  <button className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-amber-400 transition-all">
                    <span>EXECUTE_READ</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform text-amber-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* GRID OF SYSTEM PACKETS */}
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
                  className="bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-40 overflow-hidden relative grayscale brightness-90 group-hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black border border-zinc-900 text-zinc-400 text-[9px] uppercase tracking-widest px-2 py-0.5">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-600">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-sm font-bold text-zinc-100 tracking-tight line-clamp-2 uppercase group-hover:text-amber-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 font-sans">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-4 flex items-center justify-between border-t border-zinc-900/60">
                    <span className="text-[9px] text-zinc-600">BY: {post.author.toUpperCase()}</span>
                    <button className="text-[10px] font-bold text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
                      <span>FETCH_DAT</span>
                      <ChevronRight size={12} className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-zinc-900 bg-zinc-950/40">
              <p className="text-xs text-zinc-600">⚠️ ERR_NO_MATCHING_TELEMETRY_FOUND</p>
            </div>
          )}
        </div>

        {/* INDUSTRIAL DESPATCH SUBSCRIPTION */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-zinc-950 border border-zinc-900 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sync_Matrix_Despatch</h4>
              <p className="text-xs text-zinc-600 font-sans">
                Weekly deployment logs, security architecture reviews, and zero-latency performance audits.
              </p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="root@endpoint.com"
                className="bg-black border border-zinc-900 focus:border-amber-400/40 text-xs text-zinc-300 px-3 py-2 rounded-sm outline-none w-full md:w-56 placeholder:text-zinc-800"
              />
              <button 
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs px-4 py-2 rounded-sm transition-colors uppercase tracking-wider"
              >
                Connect
              </button>
            </form>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};