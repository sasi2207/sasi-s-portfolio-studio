import { useEffect, useState } from "react";
import AOS from "aos";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Mail, Phone, MapPin, Send, Terminal, Sparkles } from "lucide-react";
import { toast } from "sonner";
import API_URL from "./api";

/* ----------------------------------
   VALIDATION SCHEMA (Maintained)
----------------------------------- */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number is required")
    .max(15, "Invalid phone number"),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  /* ----------------------------------
      INPUT CHANGE (Maintained)
  ----------------------------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* ----------------------------------
      FORM SUBMIT (Maintained)
  ----------------------------------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/contact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed");
      }

      toast.success("Message packet transmitted successfully 🚀");

      setFormData({
        name: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Transmission failed. Please verify endpoint connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-zinc-300 font-mono selection:bg-amber-400/20 selection:text-amber-400 relative overflow-hidden">
        
        {/* Technical Blueprint Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121214_1px,transparent_1px),linear-gradient(to_bottom,#121214_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-amber-400/[0.02] rounded-full blur-[120px] pointer-events-none" />

        {/* HERO HEADER */}
        <ParallaxSection
          className="pt-36 pb-12 relative z-10"
          bgClassName="bg-transparent"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-sm">
                <Terminal size={11} className="text-amber-400 animate-pulse" />
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  SECURE_COMMS // ESTABLISH_LINK
                </span>
              </div>
              
              <h1
                className="text-4xl md:text-6xl font-light tracking-tight text-white uppercase"
                data-aos="fade-up"
              >
                Get In <span className="font-bold text-amber-400">Touch</span>
              </h1>
              <p
                className="text-xs md:text-sm text-zinc-500 font-sans max-w-xl leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Have a project in mind? Initialize a direct socket transmission. Let's engineer something unyielding together.
              </p>
            </div>
          </div>
        </ParallaxSection>

        {/* INTERACTION SECTION */}
        <section className="pb-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* TELEMETRY INFO BLOCKS */}
              <div data-aos="fade-right" className="lg:col-span-5 space-y-8">
                <div className="space-y-2 border-b border-zinc-900 pb-4">
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider">
                    Node Infrastructure
                  </h2>
                  <p className="text-xs text-zinc-500 font-sans">
                    System messages are validated and queued instantly into high-availability communication parameters.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* PHONE CONNECTOR */}
                  <div className="flex gap-4 p-4 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-black border border-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Gateway Comms</h3>
                      <p className="text-sm text-white font-sans mt-0.5">+91 7448788879</p>
                    </div>
                  </div>

                  {/* EMAIL CONNECTOR */}
                  <div className="flex gap-4 p-4 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-black border border-zinc-900 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Direct Endpoint</h3>
                      <p className="text-sm text-white font-sans mt-0.5">techsasi22@gmail.com</p>
                    </div>
                  </div>

                  {/* LOCATION CONNECTOR */}
                  <div className="flex gap-4 p-4 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-black border border-zinc-900 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Coordinates</h3>
                      <p className="text-sm text-white font-sans mt-0.5">Mettur, Salem, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* INDUSTRIAL INPUT FORM */}
              <div data-aos="fade-left" className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-sm bg-zinc-950 border border-zinc-900 shadow-2xl relative">
                  
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      Transmission_Payload
                    </h2>
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">fields with * are required</span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {["name", "phone", "subject"].map((field) => (
                      <div key={field} className="relative">
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          {field} <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          name={field}
                          value={(formData as any)[field]}
                          onChange={handleChange}
                          autoComplete="off"
                          className={`w-full bg-black rounded-sm border px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400/60 transition-all ${
                            errors[field] ? "border-red-500/60" : "border-zinc-900"
                          }`}
                        />
                        {errors[field] && (
                          <p className="text-red-500 text-[11px] mt-1.5 font-sans">
                            ⚠️ {errors[field]}
                          </p>
                        )}
                      </div>
                    ))}

                    <div className="relative">
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Message <span className="text-amber-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-black rounded-sm border px-4 py-3 text-xs text-white resize-none focus:outline-none focus:border-amber-400/60 transition-all ${
                          errors.message ? "border-red-500/60" : "border-zinc-900"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-[11px] mt-1.5 font-sans">
                          ⚠️ {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-sm bg-amber-400 hover:bg-amber-500 disabled:bg-zinc-900 disabled:text-zinc-600 text-black font-bold text-xs uppercase tracking-widest py-3.5 transition-all shadow-lg disabled:opacity-50"
                    >
                      <Send size={13} className={isSubmitting ? "animate-bounce" : ""} />
                      {isSubmitting ? "Transmitting..." : "Execute Post Loop"}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;