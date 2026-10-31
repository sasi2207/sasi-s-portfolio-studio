import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Receipt,
  ScanBarcode,
  Printer,
  ShieldCheck,
  Zap,
  WifiOff,
  Boxes,
  Smartphone,
  ExternalLink,
  MessageCircle,
  Clock,
  Play,
  CreditCard,
} from "lucide-react";

const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I saw your billing software at billing.techsasi.com. I want to try the 1 month free trial and discuss purchasing it for my business.";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const BillingSoftwareBanner: React.FC = () => {
  const [selectedDemoTab, setSelectedDemoTab] = useState<"retail" | "supermarket" | "restaurant">("retail");

  const demoItems = {
    retail: [
      { name: "Cotton Casual Shirt (Size L)", qty: 2, price: 899, gst: "5%" },
      { name: "Denim Jeans Slim Fit", qty: 1, price: 1499, gst: "12%" },
      { name: "Leather Formal Belt", qty: 1, price: 499, gst: "18%" },
    ],
    supermarket: [
      { name: "Organic Basmati Rice (5kg)", qty: 1, price: 480, gst: "0%" },
      { name: "Cold Pressed Sunflower Oil (1L)", qty: 2, price: 165, gst: "5%" },
      { name: "Whole Wheat Biscuits Pack", qty: 3, price: 40, gst: "18%" },
    ],
    restaurant: [
      { name: "Special Chicken Biryani Meal", qty: 2, price: 260, gst: "5%" },
      { name: "Butter Naan & Paneer Butter", qty: 1, price: 220, gst: "5%" },
      { name: "Fresh Mango Lassi", qty: 2, price: 70, gst: "5%" },
    ],
  };

  const activeList = demoItems[selectedDemoTab];
  const subtotal = activeList.reduce((acc, item) => acc + item.qty * item.price, 0);
  const gstEstimate = Math.round(subtotal * 0.08); // avg estimate
  const grandTotal = subtotal + gstEstimate;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#020617] via-[#05112e] to-[#020617] text-white border-y border-cyan-500/20">
      {/* Ambient background glow & grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Pill */}
        <div className="text-center space-y-4 max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Featured Product • Live at billing.techsasi.com</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Try Our Billing Software{" "}
            <span className="bg-gradient-to-r from-[#00f0ff] via-cyan-300 to-[#38bdf8] bg-clip-text text-transparent">
              1 Month Free
            </span>{" "}
            Before You Purchase
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Test our production-grade GST Billing &amp; POS software at your shop counter. Experience barcode scanning, thermal receipt printing, and stock tracking live at <strong className="text-white underline decoration-cyan-400">billing.techsasi.com</strong> with zero cost for 30 days. Interested? Purchase anytime for lifetime license or cloud subscription!
          </p>
        </div>

        {/* 2-Column Main Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Value Proposition & Trial Pitch */}
          <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
            
            {/* Feature Checklist */}
            <div className="space-y-3 font-sans">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/70 border border-cyan-500/30 backdrop-blur-md">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Free 30-Day Full Trial</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Zero credit card needed. Instant setup at <span className="font-mono text-cyan-300 font-semibold">billing.techsasi.com</span>. All features unlocked.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300 shrink-0">
                  <ScanBarcode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sub-Second Barcode Counter Checkout</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Works with any USB or wireless barcode scanner. Fast search and keyboard hotkeys keep queues moving rapidly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 shrink-0">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">GST Invoices, Thermal Receipts &amp; WhatsApp Bills</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Instant CGST/SGST/IGST breakdown with HSN codes. 2-inch and 3-inch thermal printing + digital WhatsApp receipts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 shrink-0">
                  <WifiOff className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Offline Resilience &amp; Mobile Owner Dashboard</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Never stop billing when internet goes down. Syncs automatically. Check daily profit and stock live on your smartphone.
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://billing.techsasi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm shadow-[0_10px_30px_rgba(0,240,255,0.35)] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Try 1 Month Free (billing.techsasi.com)</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                to="/proposal?type=billing-software"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-cyan-400/40 text-white font-bold text-sm backdrop-blur-md transition-all active:scale-95 hover:border-cyan-300"
              >
                <span>Purchase Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Consultation Links */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Instant Demo</span>
              </a>
              <span>•</span>
              <Link
                to="/services/billing"
                className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <span>Full Billing Specs &amp; Hardware</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Live App Mockup */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <div className="relative rounded-3xl border border-cyan-500/40 bg-slate-950/90 p-5 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,180,255,0.3)] backdrop-blur-xl">
              
              {/* Window Titlebar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    POS Counter Terminal v4.2
                  </span>
                </div>

                {/* Live URL Pill */}
                <a
                  href="https://billing.techsasi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-400/50 text-[11px] font-mono text-cyan-300 hover:text-white hover:border-cyan-300 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold">billing.techsasi.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Business Type Switcher for Demo */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 mb-4 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setSelectedDemoTab("retail")}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-colors ${
                    selectedDemoTab === "retail"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Clothing &amp; Retail
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDemoTab("supermarket")}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-colors ${
                    selectedDemoTab === "supermarket"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Supermarket / Grocery
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDemoTab("restaurant")}
                  className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition-colors ${
                    selectedDemoTab === "restaurant"
                      ? "bg-cyan-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Cafe / Restaurant
                </button>
              </div>

              {/* Counter Items Simulation */}
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800/80 p-3.5 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800">
                  <span>Item &amp; Description</span>
                  <div className="flex items-center gap-6">
                    <span>Qty</span>
                    <span>GST</span>
                    <span className="w-16 text-right">Amount</span>
                  </div>
                </div>

                {activeList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-slate-200 py-1 border-b border-slate-800/40 text-[11px]"
                  >
                    <span className="truncate pr-2 font-medium">{item.name}</span>
                    <div className="flex items-center gap-6 shrink-0">
                      <span className="text-cyan-300 font-bold">{item.qty}x</span>
                      <span className="text-slate-400">{item.gst}</span>
                      <span className="w-16 text-right font-bold text-white">
                        ₹{(item.qty * item.price).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Subtotal & Grand Total */}
                <div className="pt-2 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Taxable Subtotal:</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>GST (CGST + SGST):</span>
                    <span>₹{gstEstimate.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-slate-700">
                    <span className="text-cyan-300">Total Invoice Amount:</span>
                    <span className="text-emerald-400 text-base font-black">
                      ₹{grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hardware & Cloud Status Tags */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <span className="text-cyan-400 block font-bold">Thermal Print</span>
                  <span>58mm / 80mm USB</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <span className="text-emerald-400 block font-bold">1-Month Trial</span>
                  <span>100% Free Active</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <span className="text-blue-400 block font-bold">Data Transfer</span>
                  <span>Keep Upon Purchase</span>
                </div>
              </div>

              {/* Bottom Direct Trial Launch Button */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400 font-mono">
                  No installation required — runs on browser &amp; PC.
                </span>

                <a
                  href="https://billing.techsasi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-slate-950" />
                  <span>Launch Free Trial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
