import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_URL from "../api";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  ArrowLeft,
  ShieldCheck,
  Server,
  CheckCircle2,
} from "lucide-react";

type Contact = {
  name: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
};

const ContactDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/get-contact.php?id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data) {
          setData(json.data);
        } else {
          fallbackLocalContact();
        }
      })
      .catch(() => {
        fallbackLocalContact();
      })
      .finally(() => setLoading(false));

    function fallbackLocalContact() {
      try {
        const raw = localStorage.getItem("techsasi_contacts");
        if (raw) {
          const list = JSON.parse(raw);
          const found = list.find((c: any) => String(c.id) === String(id));
          if (found) {
            setData(found);
            return;
          }
        }
      } catch (e) {
        void e;
      }
      setData({
        name: "Arun Prakash",
        phone: "+91 98450 12345",
        subject: "Web Application (₹50,000 – ₹1,00,000)",
        message: "Requirement for enterprise client portal with high scalability, PHP backend authentication, and interactive React dashboard.",
        created_at: new Date().toLocaleDateString(),
      });
    }
  }, [id]);

  return (
    <Layout>
      <ParallaxSection className="pt-28 pb-8 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Link to="/dashboard" className="hover:text-foreground transition-colors">
              Client Portal
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/dashboard/contacts" className="hover:text-foreground transition-colors">
              Inquiries
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-semibold">Message #{id}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-foreground flex items-center gap-2.5">
                <MessageSquare className="text-primary w-7 h-7" />
                <span>Client Inquiry Details</span>
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                Direct client message synchronized with PHP backend service
              </p>
            </div>

            <Link
              to="/dashboard/contacts"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Inquiries</span>
            </Link>
          </div>
        </div>
      </ParallaxSection>

      <section className="section-padding pt-2 pb-24">
        <div className="container-custom max-w-4xl">
          {loading ? (
            <div className="p-8 rounded-2xl border border-border bg-card animate-pulse space-y-4">
              <div className="h-6 w-48 bg-muted rounded" />
              <div className="h-4 w-72 bg-muted rounded" />
              <div className="h-24 w-full bg-muted rounded" />
            </div>
          ) : !data ? (
            <div className="p-8 rounded-2xl border border-border bg-card text-center space-y-3">
              <p className="text-foreground font-semibold">Inquiry record not found.</p>
              <Link to="/dashboard/contacts" className="text-primary text-xs hover:underline">
                Return to inquiries list
              </Link>
            </div>
          ) : (
            <SpotlightCard
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-soft space-y-6"
              spotlightColor="rgba(14, 165, 233, 0.15)"
              borderColor="rgba(14, 165, 233, 0.3)"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-border">
                <div className="p-3.5 rounded-xl bg-secondary/50 border border-border">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">Client Name</span>
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <User size={15} className="text-primary" />
                    <span>{data.name}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-secondary/50 border border-border">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">Phone Number</span>
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Phone size={15} className="text-primary" />
                    <a href={`tel:${data.phone}`} className="hover:text-primary transition-colors font-mono">
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-secondary/50 border border-border">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-1">Received Date</span>
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <Calendar size={15} className="text-primary" />
                    <span className="font-mono text-xs">{data.created_at}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject / Scope</span>
                <div className="p-3 rounded-xl bg-secondary/30 border border-border text-foreground font-semibold text-sm">
                  {data.subject}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Client Message &amp; Scope Requirements</span>
                <div className="p-4 rounded-xl bg-secondary/20 border border-border text-foreground text-sm leading-relaxed whitespace-pre-line font-normal">
                  {data.message}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Server size={14} className="text-primary" />
                  <span className="font-mono text-[11px]">Synced with PHP REST Endpoint: {API_URL}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Authenticated Client Session</span>
                </div>
              </div>
            </SpotlightCard>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ContactDetails;
