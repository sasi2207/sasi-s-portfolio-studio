import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Share2,
  Cookie,
  Clock,
  UserCheck,
  Mail,
  FileText,
  MessageCircle,
  ArrowRight,
  ListChecks,
  Baby,
  RefreshCw,
  Globe,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG  (edit these before publishing)                            */
/* ------------------------------------------------------------------ */
const COMPANY_NAME = "TechSasi";
const CONTACT_EMAIL = "info@techsasi.com";
const COMPANY_LOCATION = "Salem, Tamil Nadu, India";
const WHATSAPP_NUMBER = "917448788897";
const LAST_UPDATED = "28 October 2026";

/* Grievance officer: replace with the real person before publishing */
const GRIEVANCE_OFFICER = {
  name: "[Name of Grievance Officer]",
  email: CONTACT_EMAIL,
  response: "We acknowledge requests within 3 working days and aim to resolve them within 30 days.",
};

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi TechSasi, I have a question about your privacy policy."
)}`;

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText = "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const highlights = [
  { icon: Database, title: "We collect only what we need", desc: "Mainly the details you type into our forms or send us on WhatsApp." },
  { icon: Share2, title: "We do not sell your data", desc: "Your details are never sold or rented to anyone for marketing." },
  { icon: Lock, title: "You stay in control", desc: "You can ask us to see, correct or delete your data at any time." },
];

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

interface PolicySection {
  id: string;
  icon: React.ElementType;
  title: string;
  blocks: Block[];
}

const sections: PolicySection[] = [
  {
    id: "who-we-are",
    icon: FileText,
    title: "1. Who we are and what this policy covers",
    blocks: [
      {
        type: "p",
        text: `${COMPANY_NAME} is a software engineering and training company based in ${COMPANY_LOCATION}. This policy explains what personal data we collect through our website and services, why we collect it, how we use it, and the choices you have. It applies to visitors of our website, people who send us an enquiry or proposal request, clients, and students of TechSasi Academy.`,
      },
      {
        type: "p",
        text: "For the data you give us on this website, we decide why and how it is used. In the language of the Digital Personal Data Protection Act, 2023 (DPDP Act), we are the data fiduciary and you are the data principal.",
      },
    ],
  },
  {
    id: "what-we-collect",
    icon: Database,
    title: "2. What information we collect",
    blocks: [
      { type: "p", text: "We collect information in three ways." },
      {
        type: "list",
        items: [
          "Information you give us: your name, email address, phone number, company name, project title, selected features, and any notes you write in our proposal builder, enquiry or contact forms.",
          "Information from conversations: messages you send us on WhatsApp, email or phone, including any files you choose to share.",
          "Information collected automatically: basic technical data such as browser type, device type, pages visited and approximate region, which is common to most websites. We do not use this to identify you personally.",
        ],
      },
      {
        type: "p",
        text: "We do not ask for sensitive data such as bank passwords, card numbers or government ID numbers through our website forms. Please do not send them to us in notes or messages.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "3. Why we use your information",
    blocks: [
      { type: "p", text: "We use your information only for purposes that you can reasonably expect." },
      {
        type: "list",
        items: [
          "To reply to your enquiry and prepare a quote, estimate or proposal.",
          "To deliver the software, cloud, marketing or training service you ask for, and to support you after launch.",
          "To enrol you in a TechSasi Academy program and communicate about sessions and assignments.",
          "To send service messages such as project updates, invoices and support replies.",
          "To keep our website secure, fix errors and understand which pages are useful.",
          "To meet legal, tax and accounting requirements.",
        ],
      },
      {
        type: "p",
        text: "We send marketing messages only if you have agreed to receive them, and you can stop them at any time.",
      },
    ],
  },
  {
    id: "consent",
    icon: UserCheck,
    title: "4. Consent and legal basis",
    blocks: [
      {
        type: "p",
        text: "When you submit a form or message us, you agree that we may use the details you provide for the purposes in this policy. You can withdraw that consent at any time by writing to us. Withdrawing consent does not affect what we did before, and it may mean we can no longer provide a service that needs the data. We may also keep or use data where the law allows or requires it, for example to keep tax records or to respond to a legal request.",
      },
    ],
  },
  {
    id: "sharing",
    icon: Share2,
    title: "5. Who we share information with",
    blocks: [
      { type: "p", text: "We do not sell your personal data. We share it only in these situations." },
      {
        type: "list",
        items: [
          "Service providers who help us run our business, such as website hosting, email delivery, cloud storage and messaging platforms like WhatsApp. They may process data only to provide their service to us.",
          "Our own team members and contractors who need the information to work on your request, under confidentiality duties.",
          "Authorities, courts or other parties when the law requires us to, or to protect our rights and the safety of others.",
          "A buyer or successor if our business is ever merged or sold. We would tell you if this changed how your data is handled.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "6. Cookies and browser storage",
    blocks: [
      {
        type: "p",
        text: "Our website uses your browser's local storage to remember information that makes the site work, such as your theme choice and a copy of a proposal you submit, so you do not have to type it again. This stays on your device.",
      },
      {
        type: "p",
        text: "If we use analytics or advertising tools, they may set cookies to measure visits and the performance of our pages. You can block or delete cookies in your browser settings. Doing so may change how some parts of the site work.",
      },
    ],
  },
  {
    id: "security",
    icon: Lock,
    title: "7. How we protect your information",
    blocks: [
      {
        type: "p",
        text: "We use reasonable security measures, including encrypted connections (HTTPS), restricted access to client data, and secure hosting. No method of sending or storing data online is completely secure, so we cannot promise absolute security. If a breach affects your personal data, we will tell you and the authorities as the law requires.",
      },
    ],
  },
  {
    id: "retention",
    icon: Clock,
    title: "8. How long we keep your information",
    blocks: [
      {
        type: "p",
        text: "We keep personal data only as long as we need it for the purpose it was collected, or as the law requires.",
      },
      {
        type: "list",
        items: [
          "Enquiries and proposal requests that do not become a project: up to 12 months, then deleted.",
          "Client project records and invoices: for the period required by tax and accounting laws.",
          "Academy student records: for the duration of the program and a reasonable period afterwards.",
        ],
      },
    ],
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "9. Your rights",
    blocks: [
      { type: "p", text: "Under the DPDP Act, you have these rights over your personal data." },
      {
        type: "list",
        items: [
          "Access: ask for a summary of the personal data we hold about you and how we use it.",
          "Correction: ask us to fix data that is wrong or out of date, or complete data that is missing.",
          "Erasure: ask us to delete your data when it is no longer needed, unless we must keep it by law.",
          "Withdraw consent: stop us from using your data for purposes that depend on your consent.",
          "Grievance redressal: complain to us about how your data is handled.",
          "Nominate: choose another person to exercise these rights for you if you die or cannot act for yourself.",
        ],
      },
      {
        type: "p",
        text: "To use any of these rights, write to us at the email address in the contact section below. We may need to confirm your identity first. If you are not satisfied with our response, you may approach the Data Protection Board of India once it is operational.",
      },
    ],
  },
  {
    id: "children",
    icon: Baby,
    title: "10. Children's information",
    blocks: [
      {
        type: "p",
        text: "Our services are meant for adults and businesses. TechSasi Academy may enrol students who are under 18 only with the verifiable consent of a parent or legal guardian. We do not track or target children with advertising. If you believe a child has given us data without a parent's consent, contact us and we will delete it.",
      },
    ],
  },
  {
    id: "transfers",
    icon: Globe,
    title: "11. Storage and transfers outside India",
    blocks: [
      {
        type: "p",
        text: "Some of our service providers, such as cloud hosting or email platforms, may store or process data in other countries. We choose providers that protect data with appropriate safeguards, and we transfer data outside India only as the law permits.",
      },
    ],
  },
  {
    id: "links",
    icon: Globe,
    title: "12. Links to other websites",
    blocks: [
      {
        type: "p",
        text: "Our website may link to other sites, such as WhatsApp, social media pages or client project examples. We do not control those sites and are not responsible for their privacy practices. Please read their policies before sharing information with them.",
      },
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "13. Changes to this policy",
    blocks: [
      {
        type: "p",
        text: `We may update this policy from time to time, for example when our services or the law change. The date at the top of this page shows when it was last updated. If a change is significant, we will highlight it on the website or contact you directly.`,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const PrivacyPolicy: React.FC = () => {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  /* Highlight the section currently in view in the contents list */
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <Layout>
      <main className="relative bg-white text-slate-900">

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-32 sm:pt-36 pb-14 sm:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#0057ff]/15 blur-[140px] sm:w-[900px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0057ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <BreadcrumbNav
                items={[
                  { label: "Home", href: "/" },
                  { label: "Privacy Policy", active: true },
                ]}
              />
            </div>

            <div className="max-w-3xl space-y-4" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={13} className="text-[#0057ff]" />
                <span className={gradText}>Legal • Privacy</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance text-slate-950 sm:text-5xl lg:text-6xl">
                Privacy Policy: how we handle{" "}
                <span className={gradText}>your information.</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We keep this policy in plain language. It explains what we collect, why we collect it, who sees it and how you can control it.
              </p>

              <p className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-500">
                <Clock size={13} className="text-[#0057ff]" />
                Last updated: {LAST_UPDATED}
              </p>
            </div>
          </div>
        </section>

        {/* ============ AT A GLANCE ============ */}
        <section className="border-b border-slate-200 bg-slate-50/80 py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center gap-2" data-aos="fade-up">
              <ListChecks size={16} className="text-[#0057ff]" />
              <span className={`text-xs font-bold uppercase tracking-wider ${gradText}`}>The short version</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="rounded-3xl border border-slate-200 bg-white p-5 transition-all hover:border-[#0057ff]/60 hover:shadow-md"
                >
                  <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white ${gradBg}`}>
                    <Icon size={19} />
                  </div>
                  <h2 className="font-display text-base font-bold">{title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ POLICY BODY ============ */}
        <section className="border-b border-slate-200 py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">

            {/* Contents list */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <nav
                aria-label="Policy contents"
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 lg:sticky lg:top-24"
              >
                <p className="mb-3 px-2 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  On this page
                </p>
                <ul className="max-h-[60vh] space-y-0.5 overflow-y-auto">
                  {sections.map((s) => {
                    const isActive = active === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          type="button"
                          onClick={() => goTo(s.id)}
                          aria-current={isActive ? "true" : undefined}
                          className={`w-full cursor-pointer rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
                            isActive
                              ? `text-white shadow-[0_4px_14px_rgba(0,87,255,0.3)] ${gradBg}`
                              : "text-slate-600 hover:bg-white hover:text-[#0057ff]"
                          }`}
                        >
                          {s.title}
                        </button>
                      </li>
                    );
                  })}
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo("contact")}
                      className={`w-full cursor-pointer rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
                        active === "contact"
                          ? `text-white shadow-[0_4px_14px_rgba(0,87,255,0.3)] ${gradBg}`
                          : "text-slate-600 hover:bg-white hover:text-[#0057ff]"
                      }`}
                    >
                      14. Contact and grievance officer
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Sections */}
            <div className="space-y-6 lg:col-span-8 xl:col-span-9">
              {sections.map(({ id, icon: Icon, title, blocks }) => (
                <article
                  key={id}
                  id={id}
                  data-aos="fade-up"
                  className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${gradBg}`}>
                      <Icon size={19} />
                    </span>
                    <h2 className="font-display text-lg font-bold sm:text-xl">{title}</h2>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {blocks.map((b, i) =>
                      b.type === "p" ? (
                        <p key={i}>{b.text}</p>
                      ) : (
                        <ul key={i} className="space-y-2.5">
                          {b.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${gradBg}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                </article>
              ))}

              {/* Contact */}
              <article
                id="contact"
                data-aos="fade-up"
                className="scroll-mt-28 rounded-3xl border border-[#00f0ff]/40 bg-gradient-to-br from-[#00f0ff]/5 to-[#0057ff]/5 p-6 sm:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${gradBg}`}>
                    <Mail size={19} />
                  </span>
                  <h2 className="font-display text-lg font-bold sm:text-xl">14. Contact and grievance officer</h2>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  For any question about this policy, or to use your rights over your data, contact us. {GRIEVANCE_OFFICER.response}
                </p>

                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">Grievance officer</dt>
                    <dd className="mt-1 font-semibold text-slate-900">{GRIEVANCE_OFFICER.name}</dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">Email</dt>
                    <dd className="mt-1 font-semibold text-slate-900">
                      <a href={`mailto:${GRIEVANCE_OFFICER.email}`} className="text-[#0057ff] hover:underline">
                        {GRIEVANCE_OFFICER.email}
                      </a>
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:col-span-2">
                    <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">Address</dt>
                    <dd className="mt-1 font-semibold text-slate-900">
                      {COMPANY_NAME}, {COMPANY_LOCATION}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20request`}
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                  >
                    <Mail size={16} />
                    Email a privacy request
                  </a>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#00f0ff]/60 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-all hover:border-[#0057ff] hover:text-[#0057ff] active:scale-95"
                  >
                    <MessageCircle size={16} />
                    Ask on WhatsApp
                  </a>
                </div>
              </article>

              <p className="px-1 text-xs leading-relaxed text-slate-500">
                See also our{" "}
                <Link to="/terms" className="font-semibold text-[#0057ff] hover:underline">
                  Terms of Service
                </Link>{" "}
                and the{" "}
                <Link to="/contact" className="inline-flex items-center gap-1 font-semibold text-[#0057ff] hover:underline">
                  contact page <ArrowRight size={12} />
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;