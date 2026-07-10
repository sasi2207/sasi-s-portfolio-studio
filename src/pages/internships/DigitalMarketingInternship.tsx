import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  BarChart3, Target, Search, Share2, Mail, Terminal, Sliders, Database, 
  Activity, ShieldCheck, Globe, Users, Cpu, Layers, CheckCircle2, 
  PlayCircle, FileText, ArrowUpRight, Calendar, Award, Rocket,
  LucideIcon
} from 'lucide-react';
import { Layout as PageLayout } from "@/components/layout/Layout";

// Define the exact type block blueprint shape
interface ConceptItem {
  id: string;
  label: string;
  icon: LucideIcon; // 👈 Enforce the structural icon class component type definition
  color: string;
  bgLight: string;
  textLight: string;
  headline: string;
  desc: string;
  perks: string[];
}

const marketing15Concepts: ConceptItem[] = [
  { id: "seo-architecture", label: "1. Crawl Optimization (SEO)", icon: Search, color: "from-blue-600 to-indigo-700", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Search Indexation & Structural Schema Nodes", desc: "Master technical auditing of semantic code maps, configuring page render thresholds, and deploying structured JSON-LD schema layers for spider engine extractions.", perks: ["Core Web Vitals Page Speed Optimization", "JSON-LD Entity Schema Injection Mapping", "Crawl Budget Extraction Log File Analytics", "Canonical Token Hierarchy Routing Rules"] },
  { id: "paid-search", label: "2. Programmatic Paid Search", icon: Target, color: "from-red-500 to-orange-600", bgLight: "bg-red-50/80", textLight: "text-red-600", headline: "Google Ads Auction Algorithms Optimization", desc: "Deconstruct Quality Score calculations matrices, adjusting keyword vector bounds, and programming automated target ROAS calculation parameters.", perks: ["Ad Rank Quality Score Weight Modulators", "Negative Vector Match Keyword Pruning Rules", "Dynamic Search Ads (DSA) Structural Feeds", "Smart Bidding Data Ingestion Signals Tuning"] },
  { id: "meta-capi", label: "3. Conversions API (CAPI)", icon: Cpu, color: "from-sky-500 to-blue-600", bgLight: "bg-sky-50/80", textLight: "text-sky-600", headline: "Server-to-Server Event Telemetry Tracking", desc: "Bypass typical browser tracking blockings configuring clean node script event payload dispatches straight into social media engine databases pipelines.", perks: ["Server-Side Event Matching Quality Logs", "Deduplication Token Verification Controls", "FBP / FBC Identifier Payload Extraction", "First-Party Cookie Lifecycle Optimization Guards"] },
  { id: "content-funnels", label: "4. Behavioral Content Funnels", icon: Layers, color: "from-purple-500 to-fuchsia-600", bgLight: "bg-purple-50/80", textLight: "text-purple-600", headline: "Intent-Mapped Multi Tier Media Acquisition", desc: "Architect progressive sequence visual assets targeting specific acquisition framework checkpoints across TOFU, MOFU, and BOFU client states map.", perks: ["Search Query User Intent Match Profiling", "Lead Magnet Optimization Friction Decreases", "Retargeting Frequency Horizon Pacing Rules", "Dynamic Creative Optimization (DCO) Layouts"] },
  { id: "marketing-automation", label: "5. Lifecycle Automation Engines", icon: Sliders, color: "from-amber-500 to-yellow-600", bgLight: "bg-amber-50/80", textLight: "text-amber-600", headline: "Webhook Driven Web App Interaction Triggers", desc: "Build automated marketing interaction loops syncing client behaviors triggers parameters across corporate pipeline engines securely fields.", perks: ["HubSpot Event Flow Branch Logic Optimizations", "Dynamic User Action Webhook Listener Links", "User Profile Traversal Scoring Segment Automations", "Cart Abandonment Timeout Hook Trigger Setups"] },
  { id: "attribution-modeling", label: "6. Multi-Touch Attributions", icon: Activity, color: "from-emerald-500 to-teal-600", bgLight: "bg-emerald-50/80", textLight: "text-emerald-600", headline: "Touchpoint Conversion Fraction Weight Distribution", desc: "Examine multichannel performance matrices implementing math split calculation rules separating touch channels validation properties fields.", perks: ["Data-Driven Custom Algorithmic Split Inferences", "Time-Decay Value Degradation Horizon Formulas", "Cross-Device Tracking Identity Stitching Methods", "Media Mix Modeling (MMM) Performance Audits"] },
  { id: "cro-ab-testing", label: "7. Yield Optimization (CRO)", icon: BarChart3, color: "from-pink-500 to-rose-600", bgLight: "bg-pink-50/80", textLight: "text-pink-600", headline: "Statistical Significance Conversion Optimization", desc: "Formulate rigorous landing page split testing matrices analyzing micro conversion bottlenecks using behavioral tracking loops datasets logs.", perks: ["Z-Score Confidence Interval Bound Validations", "Friction Element Dynamic Heatmap Diagnostics", "Layout Element Real-time Swap Multi Tests", "User Intent Checkout Dropoff Remediation Schemes"] },
  { id: "retention-email", label: "8. Retention Lifecycle Email", icon: Mail, color: "from-indigo-600 to-violet-700", bgLight: "bg-indigo-50/80", textLight: "text-indigo-600", headline: "Transactional Dynamic Customer Lifetime Optimization", desc: "Configure database cluster user segment lists broadcasting conditional value triggers ensuring zero domain IP cold blacklists constraints.", perks: ["Klaviyo Flow Liquid Syntax Code Customizations", "Domain Authentication SPF/DKIM/DMARC Keys Secure", "Predictive Churn Risk Group Classification Sorting", "Dynamic Price Feed Array Injection Block Layouts"] },
  { id: "sql-growth", label: "9. Growth Analytics SQL", icon: Database, color: "from-slate-700 to-slate-900", bgLight: "bg-slate-100/80", textLight: "text-slate-700", headline: "Data Warehouse Query Cohort Extractions", desc: "Write raw data query parameters calculating transactional user metrics, cohort retentions and lifetime metrics calculations logs.", perks: ["Cohort Retention Decay Matrix Grouping Calculations", "Customer Acquisition Cost (CAC) Multi-Source Query", "LTV to CAC Ratio Aggregation Calculations Paths", "Window Function Transaction Sequencing Tracks"] },
  { id: "social-telemetry", label: "10. Social Listening Telemetry", icon: Share2, color: "from-cyan-500 to-blue-600", bgLight: "bg-cyan-50/80", textLight: "text-cyan-600", headline: "Natural Language Sentiment Signal Processing", desc: "Build program tracker setups indexing digital message mentions, mapping emotional trend charts and parsing market signal spikes arrays.", perks: ["API Stream Text Ingestion Parsing Frameworks", "Sentiment Score Mapping Vector Classifications", "Brand Velocity Acceleration Metric Early Alerts", "Competitor Share of Voice (SOV) Cluster Compiles"] },
  { id: "native-arbitrage", label: "11. Native Ad Programmatics", icon: Globe, color: "from-orange-500 to-red-600", bgLight: "bg-orange-50/80", textLight: "text-orange-600", headline: "Content Recommendation Distribution Networks", desc: "Manage bulk contextual image links distribution strategies configuring recommendation network engines parameters maximizing budget yields fields.", perks: ["Contextual Placement Publisher Filter Block Lists", "CTR Engine Learning Acceleration Bidding Overrides", "Dynamic Headline Variant Matrix Arbitrage Matching", "Arbitrage Content Landing Page Cost Optimization"] },
  { id: "server-gtm", label: "12. Server-Side GTM Tagging", icon: ShieldCheck, color: "from-teal-600 to-emerald-700", bgLight: "bg-teal-50/80", textLight: "text-teal-600", headline: "Privacy Compliant Proxied Tracking Boundaries", desc: "Erect a secure analytics interface cloud container filtering outgoing marketing event payloads before cloud endpoint handshakes lines.", perks: ["Cloud Run Container Node Allocation Performance", "PII Sanitization Regex Mask Execution Scripts", "Vendor Script Execution Sandbox Isolation Filters", "Custom HTTP Header Verification State Injectors"] },
  { id: "influencer-economics", label: "13. Influencer Unit Economics", icon: Users, color: "from-violet-500 to-purple-600", bgLight: "bg-violet-50/80", textLight: "text-purple-600", headline: "Earned Media Coefficient Conversion Optimization", desc: "Model exact affiliate payout tiers tracking performance curves mapping custom checkout identifier keys tracking parameters clean.", perks: ["Equivalent Media Value (EMV) Formula Calculations", "Affiliate UTM Token Tracking Mapping Pipelines", "Contractual Attribution Multiplier Threshold Rules", "Audience Engagement Integrity Fraud Screen Audits"] },
  { id: "cdp-integration", label: "14. Customer Data Platforms", icon: Database, color: "from-blue-600 to-cyan-700", bgLight: "bg-blue-50/80", textLight: "text-blue-600", headline: "Omnichannel User Identity Stitching Matrices", desc: "Aggregate anonymous visitor cookie traces and authenticated database entries into one cohesive structural master user track record.", perks: ["Segment Identity Resolution Mapping Logic Schemas", "Cross-Channel Event Profile Synchronization Channels", "Real-Time Audience Sync Target Match Triggers", "Compliance Data Policy Consent Expiry Controllers"] },
  { id: "dashboard-pipelines", label: "15. Reporting Pipelines", icon: BarChart3, color: "from-rose-500 to-red-600", bgLight: "bg-rose-50/80", textLight: "text-rose-600", headline: "Automated Executive Data Visualization Dashboards", desc: "Stream production data sources straight into central analytics storage tables generating beautiful real-time performance indicator dashboard metrics layouts.", perks: ["BigQuery Connector Marketing Data Lake Consolidation", "Looker Studio Custom Dynamic Parameter Controls", "Blended Data Metric Source Calculation Formulations", "Automated Slack Performance Summary Report Triggers"] }
];

export const DigitalMarketingInternship15Hub = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>("seo-architecture");
  const overallContainerRef = useRef<HTMLDivElement>(null);

  // SCROLL-LINKED BLUR MATRIX TRANSFORMations CONTROLLER ENGINE
  const { scrollYProgress } = useScroll({
    target: overallContainerRef,
    offset: ["start start", "end end"]
  });

  const scrollLinkBlur = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["blur(30px)", "blur(65px)", "blur(40px)", "blur(12px)"]);
  const adaptiveScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  return (
    <PageLayout>
      <div ref={overallContainerRef} className="bg-slate-50 min-h-screen pt-28 pb-24 overflow-hidden relative font-sans antialiased selection:bg-indigo-600 selection:text-white">
        
        {/* 🌪️ INTERACTIVE SCROLL-LINKED BLUR AMBIENT ATMOSPHERE MESH */}
        <motion.div style={{ filter: scrollLinkBlur }} className="absolute inset-0 pointer-events-none z-0 transition-all duration-300">
          <div className="absolute top-[-5%] left-[-8%] w-[650px] h-[650px] bg-blue-100/40 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-indigo-100/20 rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute bottom-[5%] left-[5%] w-[600px] h-[600px] bg-rose-100/30 rounded-full mix-blend-multiply blur-2xl" />
        </motion.div>

        {/* TOP HERO ANCHOR BLOCK */}
        <motion.section style={{ scale: adaptiveScale }} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
            
            <div className="max-w-4xl space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-indigo-500/30 backdrop-blur-sm">
                <Rocket size={14} className="text-indigo-400" /> Programmatic Data Growth Track
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Digital Marketing <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-400">
                  15 Industrial Core Syllabus
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
                Technical SEO indexation structures, programmatic search bidding math, server-to-server tracking APIs, automated user retention lifecycle funnels, attribution modelling, matrum cloud executive visualization reporting dashboards trackers.
              </p>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-sm">
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Calendar size={14} className="text-indigo-400" /> 12 Weeks Tracks</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program Mode</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Users size={14} className="text-emerald-400" /> Remote Interactive</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scope</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Target size={14} className="text-sky-400" /> Growth Engineering</p></div>
                <div className="space-y-1"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcome</p><p className="font-bold text-slate-100 flex items-center gap-1.5"><Award size={14} className="text-pink-400" /> Industry Spec Matrix</p></div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TWO-COLUMN GRID DATA EXPLORATION PANEL */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT CHIPS NAVIGATION CONTROLLER COLUMN (SCROLLABLE) */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[760px] overflow-y-auto pr-2 custom-scrollbar">
              {marketing15Concepts.map((item) => {
                const CurrentIcon = item.icon;
                const activeFlag = activeConceptId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveConceptId(item.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between shadow-xs ${
                      activeFlag 
                        ? 'bg-white border-slate-900 ring-1 ring-slate-900 shadow-xs' 
                        : 'bg-white/70 border-slate-200/50 backdrop-blur-sm hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-lg ${item.bgLight} ${item.textLight}`}>
                        <CurrentIcon size={18} />
                      </div>
                      <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">{item.label}</span>
                    </div>
                    <ArrowUpRight size={16} className={`${activeFlag ? 'text-slate-990' : 'text-slate-300'} transition-colors`} />
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT DETAILED BLUEPRINT SHOWCASE DISPLAY WINDOW */}
            <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xs relative min-h-[550px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {marketing15Concepts.map((concept) => concept.id === activeConceptId && (
                  <motion.div
                    key={concept.id}
                    initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(5px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <span className={`px-3 py-1 bg-gradient-to-r ${concept.color} text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-xs`}>
                          Track Syllabus Blueprint Matrix Spec
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight sm:text-3xl">
                          {concept.headline}
                        </h2>
                        <p className="text-slate-500 font-light text-base leading-relaxed">
                          {concept.desc}
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-6 space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">What you will engineering deploy:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {concept.perks.map((topic, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.04 }}
                              className="flex items-start gap-2.5 text-sm text-slate-600"
                            >
                              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="font-light leading-tight">{topic}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100/80 flex flex-wrap gap-3">
                      <button className="flex-1 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-xs">
                        <PlayCircle size={16} /> Submit Application For This Track
                      </button>
                      <button className="px-5 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100/70 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
                        <FileText size={16} className="text-slate-400" /> Syllabus Specs Blueprint
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </section>

      </div>
    </PageLayout>
  );
};