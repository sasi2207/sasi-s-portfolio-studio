import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import {
  Receipt,
  ScanBarcode,
  Printer,
  Monitor,
  Store,
  Boxes,
  Package,
  Wallet,
  Banknote,
  CreditCard,
  Smartphone,
  WifiOff,
  Percent,
  FileText,
  FileCheck,
  Landmark,
  Truck,
  Users,
  Tag,
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Layers,
  Plug,
  Bell,
  Cpu,
  Code2,
  Server,
  Database,
  MessageCircle,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  Rocket,
  PenTool,
  Gauge,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG                                                            */
/* ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "917448788897";
const WHATSAPP_MESSAGE =
  "Hi TechSasi, I want a GST billing and POS system with hardware for my shop / business. Can we discuss the features, hardware and timeline?";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/* Proposal form type used by every "Get my billing system" button */
const PROPOSAL_TYPE = "gst-billing-pos";

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: Layers, text: "Software and hardware, one vendor" },
  { icon: Clock, text: "Go live in 3–6 weeks" },
  { icon: ShieldCheck, text: "You own the source code" },
];

const benefits = [
  {
    icon: Percent,
    title: "GST Invoices Without Errors",
    desc: "CGST, SGST, IGST, HSN codes and place of supply are applied automatically, so every invoice is correct the first time.",
  },
  {
    icon: ScanBarcode,
    title: "Bill In Seconds At The Counter",
    desc: "Scan a barcode, confirm the item and print the receipt. Queues move faster and cashiers need almost no training.",
  },
  {
    icon: Boxes,
    title: "Stock That Updates Itself",
    desc: "Every sale reduces stock, every purchase increases it, and low-stock alerts reach you before a shelf goes empty.",
  },
  {
    icon: WifiOff,
    title: "Keeps Billing When Internet Drops",
    desc: "The POS continues to bill offline and syncs everything to the cloud as soon as the connection returns.",
  },
  {
    icon: Landmark,
    title: "GST Returns Made Simple",
    desc: "Sales and purchase data is organised for GSTR-1 and GSTR-3B, so your accountant gets clean reports, not a pile of bills.",
  },
  {
    icon: BarChart3,
    title: "Know What Sells",
    desc: "Daily sales, top-selling items, profit by product and cashier-wise collection, visible on your phone from anywhere.",
  },
];

/* Solution sets (the explorer) */
const solutionSets = [
  {
    id: "billing",
    label: "GST Billing",
    full: "GST Billing & Accounting",
    summary:
      "Create compliant invoices, track payments and keep your tax data ready, for shops, wholesalers and service businesses.",
    solutions: [
      {
        icon: FileText,
        title: "Tax Invoices & Bills of Supply",
        desc: "Branded invoices with automatic GST split, HSN or SAC codes, discounts and amount in words.",
      },
      {
        icon: FileCheck,
        title: "E-Invoice & E-Way Bill",
        desc: "Generate e-invoices and e-way bills from the same screen, through a GST suvidha provider connection.",
      },
      {
        icon: Receipt,
        title: "Quotations & Proforma",
        desc: "Send quotes on WhatsApp, get approval and convert accepted quotes into invoices in one click.",
      },
      {
        icon: RefreshCw,
        title: "Returns & Credit Notes",
        desc: "Handle sales returns, credit notes and debit notes with stock and GST adjusted automatically.",
      },
      {
        icon: Wallet,
        title: "Payments & Outstanding",
        desc: "Track part payments, due dates and customer balances, with payment reminders sent on WhatsApp.",
      },
      {
        icon: Landmark,
        title: "GST Reports",
        desc: "GSTR-1, GSTR-3B and HSN summary data, ready to export in the formats your accountant uses.",
      },
      {
        icon: Truck,
        title: "Purchase & Supplier Bills",
        desc: "Record purchase bills with input tax credit, and see what you owe each supplier.",
      },
      {
        icon: Users,
        title: "Customers & Suppliers",
        desc: "Party ledgers with GSTIN validation, transaction history and credit limits.",
      },
    ],
  },
  {
    id: "pos",
    label: "POS & Inventory",
    full: "Point of Sale & Inventory",
    summary:
      "A fast counter system with stock control, built for retail shops, restaurants, pharmacies and supermarkets.",
    solutions: [
      {
        icon: ScanBarcode,
        title: "Fast Counter Billing",
        desc: "Barcode, quick search and favourite-item buttons, with hold and resume for busy counters.",
      },
      {
        icon: Boxes,
        title: "Inventory & Batches",
        desc: "Track stock by item, variant, batch and expiry, with reorder levels and low-stock alerts.",
      },
      {
        icon: Tag,
        title: "Offers & Discounts",
        desc: "Item discounts, bill-level offers, combo deals and coupon codes, applied automatically at billing.",
      },
      {
        icon: CreditCard,
        title: "Cash, Card & UPI",
        desc: "Accept split payments across cash, card and UPI QR, with every payment reconciled at day end.",
      },
      {
        icon: Users,
        title: "Loyalty & Customer Data",
        desc: "Capture customers at billing, give reward points and send offers and bills on WhatsApp.",
      },
      {
        icon: Store,
        title: "Multi-Store & Stock Transfer",
        desc: "Run several branches from one login and move stock between stores with a full record.",
      },
      {
        icon: Banknote,
        title: "Shift & Cash Management",
        desc: "Open and close shifts, track cash in the drawer and see cashier-wise collection and differences.",
      },
      {
        icon: Smartphone,
        title: "Owner App & Alerts",
        desc: "Daily sales summary, low stock and large discounts reported to your phone in real time.",
      },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    full: "POS Hardware Supply & Setup",
    summary:
      "We supply, install and configure the devices, and test them with your software before you open the counter.",
    solutions: [
      {
        icon: Monitor,
        title: "Touch POS Terminals",
        desc: "All-in-one touchscreen billing machines, or use your own PC, laptop or tablet.",
      },
      {
        icon: ScanBarcode,
        title: "Barcode Scanners",
        desc: "Handheld and counter-top scanners for 1D and 2D barcodes and QR codes.",
      },
      {
        icon: Printer,
        title: "Thermal Receipt Printers",
        desc: "58 mm and 80 mm receipt printers with auto-cutter, over USB, LAN or Bluetooth.",
      },
      {
        icon: Tag,
        title: "Label & Barcode Printers",
        desc: "Print price tags and barcode labels for your products directly from the software.",
      },
      {
        icon: Banknote,
        title: "Cash Drawers",
        desc: "Printer-triggered cash drawers that open automatically when a cash bill is completed.",
      },
      {
        icon: Gauge,
        title: "Weighing Scales",
        desc: "Connect weighing scales so loose items are weighed and billed in one step.",
      },
      {
        icon: CreditCard,
        title: "Card & UPI Terminals",
        desc: "Connect payment terminals and QR displays so the amount appears on the machine automatically.",
      },
      {
        icon: Monitor,
        title: "Customer Display",
        desc: "A second screen that shows the customer each item, price and total as it is billed.",
      },
    ],
  },
];

/* How a sale moves through the system */
const flow = [
  { icon: ScanBarcode, title: "Scan", desc: "The cashier scans items, or searches by name." },
  { icon: Receipt, title: "Bill", desc: "GST, discounts and totals are calculated instantly." },
  { icon: CreditCard, title: "Pay & Print", desc: "Customer pays by cash, card or UPI and gets a receipt." },
  { icon: Landmark, title: "Report", desc: "Stock updates and the sale lands in your GST reports." },
];

const techGroups = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "Electron (desktop)", "TypeScript", "Tailwind CSS", "PWA / offline mode"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Node.js", "Python (Django / FastAPI)", "Java (Spring Boot)", ".NET Core", "PHP (Laravel)", "REST APIs"],
  },
  {
    label: "Database & Cloud",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQLite (offline)", "Redis", "AWS / Azure / Google Cloud", "Docker"],
  },
  {
    label: "Hardware & Integrations",
    icon: Plug,
    items: ["ESC/POS printers", "Barcode scanners", "Weighing scales", "GST suvidha provider (e-invoice)", "Razorpay / UPI", "Tally export"],
  },
];

const goodFor = [
  "Retail shops, supermarkets and pharmacies billing on paper or basic software",
  "Wholesalers and distributors who raise many GST invoices every day",
  "Restaurants, cafes and service counters that need fast, printed bills",
  "Owners with more than one outlet who want one view of stock and sales",
];

const notIdeal = [
  "A very small shop that bills a handful of customers a day",
  "A business whose needs are met by ready-made billing software",
  "A purely online store with no counter, stock or printed bills",
];

const packages = [
  {
    id: "billing-starter",
    name: "GST Billing Starter",
    price: "₹19,999+",
    time: "3–4 weeks",
    forWho: "Shops and service businesses billing from one computer",
    popular: false,
    features: [
      "GST tax invoices, quotes and credit notes",
      "Customer, supplier and payment tracking",
      "Basic stock management",
      "GSTR-1 and GSTR-3B report exports",
      "Up to 3 users with role-based access",
    ],
  },
  {
    id: "pos-retail",
    name: "POS Retail",
    price: "₹44,999+",
    time: "5–8 weeks",
    forWho: "Retail counters that need speed and stock control",
    popular: true,
    features: [
      "Everything in Starter, plus full POS counter",
      "Barcode billing, batches, offers and loyalty",
      "Offline billing with automatic sync",
      "Hardware setup for printer, scanner and drawer",
      "60 days of post-launch support",
    ],
  },
  {
    id: "multi-store-hardware",
    name: "Multi-Store + Hardware",
    price: "₹89,999+",
    time: "8–14 weeks",
    forWho: "Chains and growing businesses with several outlets",
    popular: false,
    features: [
      "Multi-store, stock transfer and central reports",
      "E-invoice, e-way bill and Tally integration",
      "Complete hardware supply and on-site installation",
      "Owner app with live sales and stock alerts",
      "90 days of priority support",
    ],
  },
];

const steps = [
  {
    icon: Users,
    title: "Understand Your Counter",
    desc: "We learn how you bill, what you sell, how many outlets you run and which GST rules apply to your business.",
  },
  {
    icon: PenTool,
    title: "Design Billing & Hardware",
    desc: "We design the billing screens and invoice format, and recommend the hardware that suits your counter and budget.",
  },
  {
    icon: Gauge,
    title: "Build, Connect & Test",
    desc: "We build the system, import your products and customers, connect every device and test with real bills.",
  },
  {
    icon: Rocket,
    title: "Install, Train & Launch",
    desc: "We set up the counter on site or remotely, train your staff and stay available during your first busy days.",
  },
];

const included = [
  "Requirement workshop and written scope document",
  "Invoice and receipt format designed to your brand",
  "Import of products, customers and opening stock",
  "Role-based access with a full audit log",
  "Daily backups and sales reports on your phone",
  "Full source code ownership with documentation",
];

const faqs = [
  {
    q: "Why build custom billing software instead of buying a ready-made one?",
    a: "Ready-made software works well for standard shops. A custom system makes sense when you have your own pricing rules, multiple outlets, special invoice formats, hardware that needs to be connected, or you want to own the software instead of paying a monthly fee for it.",
  },
  {
    q: "Does it support GST, e-invoice and e-way bill?",
    a: "Yes. Invoices are created with the correct CGST, SGST or IGST, HSN codes and place of supply. E-invoice and e-way bill generation work through a GST suvidha provider connection, and we confirm the rules that apply to your turnover during the requirement workshop.",
  },
  {
    q: "Will billing work when the internet is down?",
    a: "Yes. The POS counter keeps billing offline and stores the sales on the device. When the connection returns, everything syncs to the cloud automatically.",
  },
  {
    q: "Do you supply the hardware too?",
    a: "Yes. We can supply and install terminals, scanners, receipt and label printers, cash drawers and scales, and test them with your software. Hardware is quoted separately at actual cost, or you can keep using devices you already own if they are compatible.",
  },
  {
    q: "Can I manage more than one shop?",
    a: "Yes. The Multi-Store package gives you one login to see sales, stock and cashier reports for every outlet, and to transfer stock between stores.",
  },
  {
    q: "Will you move our existing data in?",
    a: "Yes. We import your products, customers, suppliers and opening stock from Excel or your current software, and check the results with you before go-live.",
  },
];

/* Sample rows for the hero console (illustrative data) */
const sampleActivity = [
  { label: "Bill #1042 · 6 items", tag: "UPI", tone: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Receipt printed at Counter 1", tag: "Printed", tone: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Stock low: Basmati Rice 5 kg", tag: "Reorder", tone: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
  { label: "Offline bills synced", tag: "Synced", tone: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const GstBillingPosService: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [setId, setSetId] = useState<string>(solutionSets[0].id);
  const activeSet = solutionSets.find((s) => s.id === setId) ?? solutionSets[0];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Layout>
      <main className="relative bg-white text-slate-900 pb-24 lg:pb-0">

        {/* ============ HERO SECTION ============ */}
        <section className="relative overflow-hidden border-b border-slate-200 pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#0057ff]/15 blur-[140px] sm:w-[900px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">

            {/* Left Content */}
            <div className="space-y-6 lg:col-span-7" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Receipt size={13} className="text-[#0057ff]" />
                <span className={gradText}>TechSasi Engineering • Enterprise Service 08</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl text-slate-950">
                GST Billing, POS &amp; Hardware{" "}
                <span className={gradText}>Ready At Your Counter.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Billing software, stock control and the devices to run it, supplied and set up by one team. Create GST invoices, scan and print in seconds, and see your sales from your phone.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                >
                  Get my billing system
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00f0ff]/60 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition-all hover:border-[#0057ff] hover:text-[#0057ff] shadow-xs"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-3">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${gradBg}`}
                    >
                      <Icon size={14} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: POS console */}
            <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="150">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#00f0ff]/30 via-[#0057ff]/20 to-transparent blur-3xl pointer-events-none"
                />

                <div className="relative rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 text-white shadow-[0_25px_70px_rgba(0,87,255,0.25)] backdrop-blur-xl">

                  {/* Window header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-500" />
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-cyan-400">
                      <Cpu size={12} />
                      <span>POS Counter</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                        <Receipt size={14} />
                        <span>Bills today</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">86</p>
                      <p className="text-[10px] text-slate-400">GST invoices generated</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Boxes size={14} />
                        <span>Low stock</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">7</p>
                      <p className="text-[10px] text-slate-400">Items below reorder level</p>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Bell size={14} />
                        <span>Counter activity</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        Sample data
                      </span>
                    </div>
                    <ul className="space-y-2.5 text-[11px]">
                      {sampleActivity.map((a) => (
                        <li key={a.label} className="flex items-center justify-between gap-3">
                          <span className="text-slate-300">{a.label}</span>
                          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] ${a.tone}`}>
                            {a.tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom bar */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <WifiOff size={14} />
                      <span>Works Offline</span>
                    </span>
                    <span className="text-cyan-400 font-bold">100% Code Ownership</span>
                  </div>
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6 text-slate-900 hidden sm:block">
                  <p className={`text-xl font-black ${gradText}`}>3–14 Weeks</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    Depending On Scope
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============ BENEFITS SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Why build a custom billing system
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                What your counter will do for your business
              </h2>
              <p className="mt-3 text-slate-600">
                Faster billing, accurate GST and stock you can trust, on every shift.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0057ff] hover:shadow-[0_12px_32px_rgba(0,87,255,0.18)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00f0ff]/40 bg-gradient-to-br from-[#00f0ff]/15 to-[#0057ff]/15 text-[#0057ff] transition-all group-hover:scale-110 group-hover:from-[#00f0ff] group-hover:to-[#0057ff] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold group-hover:text-[#0057ff]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SOLUTIONS EXPLORER ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                All solutions we build
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Everything in billing, POS and hardware
              </h2>
              <p className="mt-3 text-slate-600">
                Switch between software and devices. Pick the solutions you need.
              </p>
            </div>

            <div className="mb-8 flex justify-center" data-aos="fade-up">
              <div
                role="tablist"
                aria-label="Solution type"
                className="inline-flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-slate-50 p-1.5"
              >
                {solutionSets.map((s) => {
                  const active = s.id === setId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSetId(s.id)}
                      className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all active:scale-95 sm:px-6 ${
                        active
                          ? `text-white shadow-[0_4px_16px_rgba(0,87,255,0.3)] ${gradBg}`
                          : "text-slate-700 hover:text-[#0057ff]"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div role="tabpanel">
              <div className="mx-auto mb-8 max-w-2xl text-center">
                <h3 className="font-display text-xl font-bold">{activeSet.full}</h3>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">{activeSet.summary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {activeSet.solutions.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={`${activeSet.id}-${title}`}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-[#0057ff]/60 hover:bg-white hover:shadow-md"
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </div>
                    <h4 className="font-display text-base font-bold">{title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ SALE FLOW ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Better together
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                From barcode scan to GST report
              </h2>
              <p className="mt-3 text-slate-600">
                When software and hardware are set up together, one sale updates your bill, your stock and your tax data at once.
              </p>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="flip-up"
                  data-aos-delay={i * 100}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white ${gradBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                  {i < flow.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={18}
                      className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white text-[#0057ff] lg:block"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ TECHNOLOGY ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Technology we use
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Proven tools behind your billing system
              </h2>
              <p className="mt-3 text-slate-600">
                We recommend a focused stack for your project. You will not need all of these.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {techGroups.map(({ label, icon: Icon, items }, i) => (
                <div
                  key={label}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display text-lg font-bold">{label}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold text-slate-800 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ IS THIS FOR YOU SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Is this the right fit for your business?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8" data-aos="fade-right">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Ideal For Custom Billing / POS
                </p>
                <ul className="space-y-3">
                  {goodFor.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium">
                      <Check size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" data-aos="fade-left">
                <p className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Better With Ready-Made Software
                </p>
                <ul className="space-y-3">
                  {notIdeal.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                      <X size={18} className="mt-0.5 shrink-0 text-slate-400" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0057ff] hover:underline"
                >
                  Consult with our engineers <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING PACKAGES ============ */}
        <section id="pricing" className="border-b border-slate-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Transparent Investment
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Simple packages. Pick what fits your counter.
              </h2>
              <p className="mt-3 text-slate-600">
                Software prices are starting points, and hardware is quoted separately at actual cost. We confirm a fixed quote after understanding your business.
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className={`relative flex flex-col rounded-3xl bg-white p-6 sm:p-8 transition-all ${
                    pkg.popular
                      ? "border-2 border-[#0057ff] shadow-[0_16px_48px_rgba(0,87,255,0.25)] lg:-translate-y-3"
                      : "border border-slate-200 hover:border-[#0057ff]/60 hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white ${gradBg}`}
                    >
                      Most popular choice
                    </span>
                  )}

                  <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{pkg.forWho}</p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className={`font-display text-4xl font-black ${gradText}`}>
                      {pkg.price}
                    </span>
                    <span className="mb-1 flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={12} /> {pkg.time}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}
                        >
                          <Check size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/proposal?type=${PROPOSAL_TYPE}&package=${pkg.id}`}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all active:scale-95 ${
                      pkg.popular
                        ? `text-white shadow-[0_6px_22px_rgba(0,87,255,0.35)] hover:brightness-105 ${gradBg}`
                        : "border border-[#00f0ff]/60 text-slate-800 hover:border-[#0057ff] hover:text-[#0057ff]"
                    }`}
                  >
                    Choose {pkg.name}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>
                Execution Workflow
              </span>
              <h2 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                From first call to first bill in 4 steps
              </h2>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 75}
                  className="relative rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <span className={`absolute right-5 top-4 font-display text-4xl font-black opacity-30 ${gradText}`}>
                    0{i + 1}
                  </span>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white ${gradBg}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ INCLUDED ============ */}
        <section className="border-b border-slate-200 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2
              className="mb-8 text-center font-display text-2xl font-black tracking-tight sm:text-3xl"
              data-aos="fade-up"
            >
              Every billing / POS project includes
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {included.map((t, i) => (
                <li
                  key={t}
                  data-aos="fade-up"
                  data-aos-delay={(i % 2) * 80}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                >
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${gradBg}`}>
                    <Check size={12} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ FAQ SECTION ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl" data-aos="fade-up">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen ? "border-[#0057ff]/60 bg-white shadow-md" : "border-slate-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-bold sm:text-base">{f.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#0057ff] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA SECTION ============ */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div
            data-aos="zoom-in"
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#020b24] via-[#04215f] to-[#0057ff] px-6 py-14 text-center text-white sm:px-12 shadow-2xl"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#00f0ff]/30 blur-[90px]" />
            <div className="relative space-y-5">
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl text-balance">
                Ready to bill faster and file GST with confidence?
              </h2>
              <p className="mx-auto max-w-xl text-sm text-white/75 sm:text-base">
                Tell us what you sell and how many counters you run. We will reply with a solution plan, a hardware list and a fixed quote.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  to={`/proposal?type=${PROPOSAL_TYPE}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0057ff] shadow-lg transition-all hover:bg-slate-100 active:scale-95 sm:w-auto"
                >
                  Start my project <ArrowRight size={16} />
                </Link>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold backdrop-blur transition-all hover:bg-white/20 sm:w-auto"
                >
                  <MessageCircle size={16} /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ MOBILE STICKY BAR ============ */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden shadow-lg">
          <div className="mx-auto flex max-w-md items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00f0ff]/60 text-[#0057ff]"
            >
              <MessageCircle size={20} />
            </a>
            <Link
              to={`/proposal?type=${PROPOSAL_TYPE}`}
              className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-[0_4px_16px_rgba(0,87,255,0.35)] active:scale-95 ${gradBg}`}
            >
              Get my billing system <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default GstBillingPosService;