import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbNav } from "@/components/navigation/BreadcrumbNav";
import {
  Scale,
  FileText,
  Calculator,
  Wallet,
  Code2,
  Users,
  LifeBuoy,
  GraduationCap,
  ShieldCheck,
  Lock,
  AlertTriangle,
  XCircle,
  Gavel,
  RefreshCw,
  Mail,
  MessageCircle,
  ArrowRight,
  Clock,
  ListChecks,
  Handshake,
  Link2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG  (edit these before publishing)                            */
/* ------------------------------------------------------------------ */
const COMPANY_NAME = "TechSasi";
const CONTACT_EMAIL = "info@techsasi.com";
const COMPANY_LOCATION = "Salem, Tamil Nadu, India";
const WHATSAPP_NUMBER = "917448788897";
const LAST_UPDATED = "28 October 2026";

/* Courts that will hear disputes. Confirm with your lawyer. */
const JURISDICTION = "Salem, Tamil Nadu";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi TechSasi, I have a question about your terms of service."
)}`;

/* Dual color system: Cyan #00f0ff + Electric Blue #0057ff */
const gradText = "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";
const gradBg = "bg-gradient-to-r from-[#00f0ff] to-[#0057ff]";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                           */
/* ------------------------------------------------------------------ */
const highlights = [
  { icon: Code2, title: "You own your code", desc: "Once the project is paid in full, the work we build for you belongs to you." },
  { icon: Calculator, title: "Estimates are not final quotes", desc: "Online estimates are a starting point. Your written quote and milestones decide the price." },
  { icon: Handshake, title: "Clear exits for both sides", desc: "Either side can end a project in writing, and work done up to that point is paid for." },
];

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

interface TermsSection {
  id: string;
  icon: React.ElementType;
  title: string;
  blocks: Block[];
}

const sections: TermsSection[] = [
  {
    id: "agreement",
    icon: FileText,
    title: "1. About these terms",
    blocks: [
      {
        type: "p",
        text: `These terms apply when you use the ${COMPANY_NAME} website or ask us for software development, cloud and DevOps, digital marketing and SEO, ERP, maintenance and support, or TechSasi Academy services. By using our website or by accepting a quote, proposal or enrolment, you agree to these terms.`,
      },
      {
        type: "p",
        text: "For a paid project, the written quote or agreement that we both accept (the project agreement) forms part of the contract. If the project agreement and these terms disagree, the project agreement applies for that project. If you are accepting on behalf of a company, you confirm that you have the authority to do so.",
      },
    ],
  },
  {
    id: "estimates",
    icon: Calculator,
    title: "2. Estimates, quotes and proposals",
    blocks: [
      {
        type: "p",
        text: "The estimate calculator and the PDF it produces give an initial guide to cost and time based on the options you choose. They are not a binding offer or a final price.",
      },
      {
        type: "list",
        items: [
          "A quote becomes binding only when we send it in writing and you accept it in writing, by email, WhatsApp or signature.",
          "Quotes stay valid for the period written on them. If none is stated, they stay valid for 30 days.",
          "Prices are in Indian Rupees and do not include GST or other taxes unless the quote says so.",
          "If your needs change after the quote, we will tell you how the change affects price and timeline before we do the work.",
        ],
      },
    ],
  },
  {
    id: "payments",
    icon: Wallet,
    title: "3. Fees and payment",
    blocks: [
      {
        type: "p",
        text: "Projects are normally billed in milestones that are written in the project agreement. Unless the agreement says otherwise, the following applies.",
      },
      {
        type: "list",
        items: [
          "An advance payment is due before work starts, and the remaining milestones are due when the matching deliverable is ready for your review.",
          "Invoices are due within 7 days of the invoice date unless another period is stated.",
          "We may pause work if a payment is overdue, and the timeline moves by the length of the delay.",
          "Third-party costs, such as cloud hosting, domains, paid plugins, SMS, WhatsApp and payment gateway fees, are billed to you directly by the provider or at cost, and are not part of our fee unless the quote says so.",
          "Advance and milestone payments for work already done are non-refundable, unless the law requires otherwise or we agree in writing.",
        ],
      },
    ],
  },
  {
    id: "delivery",
    icon: Users,
    title: "4. Project delivery and your responsibilities",
    blocks: [
      {
        type: "p",
        text: "We will carry out the work with reasonable skill and care and share progress with you at the milestones in the agreement. Timelines are estimates and depend on you giving us what we need on time.",
      },
      {
        type: "list",
        items: [
          "Give us accurate requirements, content, logos, access and approvals promptly.",
          "Review each deliverable and send feedback within 5 working days. If we hear nothing within that time, we may treat the deliverable as accepted.",
          "Make sure you have the right to use any text, images, data, fonts or software that you give us.",
          "Keep your account passwords and access keys safe, and tell us quickly if you think they have been exposed.",
          "Changes beyond the agreed scope are handled as a change request with its own price and timeline.",
        ],
      },
    ],
  },
  {
    id: "ip",
    icon: Code2,
    title: "5. Ownership and intellectual property",
    blocks: [
      {
        type: "list",
        items: [
          "Your work: when you have paid all fees in full, you own the source code, designs and content we create specifically for you under the project agreement.",
          "Our tools: we keep ownership of our pre-existing tools, libraries, templates and know-how. We give you a permanent, non-exclusive licence to use them as part of your delivered product.",
          "Open source and third-party software remain under their own licences, which continue to apply to you.",
          "Until full payment is received, we keep ownership of the work and you may use it only as the agreement allows.",
          "Unless you ask us not to, we may mention that you are a client and show non-confidential screenshots of the finished work in our portfolio.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    icon: Lock,
    title: "6. Confidentiality",
    blocks: [
      {
        type: "p",
        text: "Each side agrees to keep the other's non-public business and technical information confidential, to use it only for the project, and to share it only with people who need it and are bound to the same care. This does not apply to information that is already public, that we or you already knew, or that the law requires us to disclose. This duty continues after the project ends.",
      },
    ],
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "7. Warranty, maintenance and support plans",
    blocks: [
      {
        type: "list",
        items: [
          "Fix period: bugs in our own work that are reported within the support period stated in your package or agreement are fixed at no extra charge. This does not cover new features, changes you ask for, or problems caused by your edits or by third parties.",
          "Monthly plans for maintenance, SEO and marketing are billed monthly in advance. You can cancel with 30 days' written notice.",
          "Hours or services included in a monthly plan must be used within the plan period unless your plan says unused hours roll over.",
          "Response times in our plans are targets for starting work and are not a promise of when an issue will be resolved.",
          "SEO, advertising and marketing results depend on search engines, platforms, competition and your market. We do not guarantee any ranking, traffic, lead count or sales figure.",
        ],
      },
    ],
  },
  {
    id: "academy",
    icon: GraduationCap,
    title: "8. TechSasi Academy and mentorship",
    blocks: [
      {
        type: "list",
        items: [
          "Mentorship and training give guidance and feedback. We do not guarantee a job, a salary, a freelance income or an interview result.",
          "Fees are stated when you enrol. Monthly plans can be paused or stopped at the end of any month with notice. For fixed-term programs, refunds, if any, follow the policy given at enrolment.",
          "Learning materials, recordings and project templates are for your own personal use. You may not copy, resell or share them publicly.",
          "Students are expected to behave respectfully toward mentors and other learners. We may end access without a refund for serious or repeated misconduct, plagiarism or sharing of paid materials.",
          "Students under 18 may enrol only with the consent of a parent or legal guardian.",
        ],
      },
    ],
  },
  {
    id: "acceptable-use",
    icon: ShieldCheck,
    title: "9. Acceptable use of our website",
    blocks: [
      { type: "p", text: "When you use our website and forms, you agree not to:" },
      {
        type: "list",
        items: [
          "Use the website for anything unlawful, or to build or send malware, spam or fraudulent content.",
          "Try to break, overload, scan or gain unauthorised access to our website, systems or other users' data.",
          "Submit false, misleading or someone else's personal details.",
          "Copy, scrape or reuse our content, designs or code without our written permission.",
        ],
      },
      {
        type: "p",
        text: "We will not build software whose purpose is illegal, deceptive or harmful, and we may decline or stop a project for this reason.",
      },
    ],
  },
  {
    id: "third-party",
    icon: Link2,
    title: "10. Third-party services and links",
    blocks: [
      {
        type: "p",
        text: "Our work often uses services run by others, such as AWS, Google, Meta, payment gateways, WhatsApp and app stores. These providers set their own terms, prices and uptime, and may change or stop their services. We are not responsible for their actions or outages, but we will help you deal with the effects as part of any support plan you have with us. Links on our website to other sites are for your convenience, and we are not responsible for their content.",
      },
    ],
  },
  {
    id: "liability",
    icon: AlertTriangle,
    title: "11. Disclaimers and limit of liability",
    blocks: [
      {
        type: "p",
        text: "We work hard to deliver reliable software, but no software is free of errors, and no system can be guaranteed to run without interruption. Our website and any free content are provided as they are.",
      },
      {
        type: "list",
        items: [
          "We are not liable for indirect or consequential losses, such as lost profit, lost business, lost data or loss of goodwill.",
          "Our total liability for any claim connected with a project is limited to the fees you paid us for that project in the 3 months before the claim arose (for monthly plans, the fees for the last 3 months).",
          "Nothing in these terms limits liability that cannot be limited by law, including for fraud or wilful misconduct.",
        ],
      },
      {
        type: "p",
        text: "You are responsible for keeping your own backups of important data unless a backup service is part of your signed plan.",
      },
    ],
  },
  {
    id: "termination",
    icon: XCircle,
    title: "12. Ending a project or these terms",
    blocks: [
      {
        type: "list",
        items: [
          "Either side may end a project by written notice. You will pay for all work done and costs committed up to the date of ending, plus any milestone that is already due.",
          "We may stop work immediately if you do not pay, break these terms, or ask us to do something unlawful.",
          "After the project ends, sections on payment, ownership, confidentiality, liability and disputes continue to apply.",
          "We may suspend or limit access to our website or services if we reasonably believe these terms are being broken.",
        ],
      },
    ],
  },
  {
    id: "law",
    icon: Gavel,
    title: "13. Governing law and disputes",
    blocks: [
      {
        type: "p",
        text: `These terms are governed by the laws of India. We both agree to try to settle any dispute first through a good-faith discussion for at least 30 days. If that does not work, the courts at ${JURISDICTION} will have exclusive jurisdiction, unless the project agreement provides for arbitration or another process.`,
      },
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "14. Changes to these terms",
    blocks: [
      {
        type: "p",
        text: "We may update these terms from time to time. The date at the top of this page shows when they were last changed. An update applies to new work from the date it is posted. For a project already under way, the terms that applied when you accepted the quote continue to apply unless we both agree in writing to change them.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export const TermsOfService: React.FC = () => {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  /* Highlight the section currently in view in the contents list */
  useEffect(() => {
    const els = [...sections.map((s) => s.id), "contact"]
      .map((id) => document.getElementById(id))
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
                  { label: "Terms of Service", active: true },
                ]}
              />
            </div>

            <div className="max-w-3xl space-y-4" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/50 bg-gradient-to-r from-[#00f0ff]/10 to-[#0057ff]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Scale size={13} className="text-[#0057ff]" />
                <span className={gradText}>Legal • Terms</span>
              </span>

              <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-balance text-slate-950 sm:text-5xl lg:text-6xl">
                Terms of Service: the rules for{" "}
                <span className={gradText}>working with us.</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We keep these terms in plain language. They explain how quotes, payments, ownership, support and training work, so both sides know what to expect.
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
            <p className="mt-5 text-xs text-slate-500">
              This summary is for convenience only. The full terms below are what apply.
            </p>
          </div>
        </section>

        {/* ============ TERMS BODY ============ */}
        <section className="border-b border-slate-200 py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">

            {/* Contents list */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <nav
                aria-label="Terms contents"
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
                      aria-current={active === "contact" ? "true" : undefined}
                      className={`w-full cursor-pointer rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
                        active === "contact"
                          ? `text-white shadow-[0_4px_14px_rgba(0,87,255,0.3)] ${gradBg}`
                          : "text-slate-600 hover:bg-white hover:text-[#0057ff]"
                      }`}
                    >
                      15. Contact us
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
                  <h2 className="font-display text-lg font-bold sm:text-xl">15. Contact us</h2>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  If you have a question about these terms, or want to discuss a term before you sign a project agreement, write to us. We are happy to explain anything in plain words.
                </p>

                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">Email</dt>
                    <dd className="mt-1 font-semibold text-slate-900">
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0057ff] hover:underline">
                        {CONTACT_EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">Address</dt>
                    <dd className="mt-1 font-semibold text-slate-900">
                      {COMPANY_NAME}, {COMPANY_LOCATION}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Question%20about%20Terms%20of%20Service`}
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,87,255,0.35)] transition-all hover:brightness-105 active:scale-95 ${gradBg}`}
                  >
                    <Mail size={16} />
                    Email us
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
                <Link to="/privacy" className="font-semibold text-[#0057ff] hover:underline">
                  Privacy Policy
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

export default TermsOfService;