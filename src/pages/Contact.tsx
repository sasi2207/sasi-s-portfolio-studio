import { useEffect, useState } from "react";
import AOS from "aos";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

/* ----------------------------------
   VALIDATION SCHEMA
----------------------------------- */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  /* ----------------------------------
     INPUT CHANGE
  ----------------------------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  /* ----------------------------------
     SUBMIT → WHATSAPP
  ----------------------------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);

      const whatsappMessage = encodeURIComponent(
        `📩 New Contact Inquiry - TechSasi\n\n` +
          `👤 Name: ${validated.name}\n` +
          `📧 Email: ${validated.email}\n` +
          `📝 Subject: ${validated.subject}\n\n` +
          `💬 Message:\n${validated.message}`
      );

      // 👉 YOUR WHATSAPP NUMBER (COUNTRY CODE INCLUDED)
      const whatsappNumber = "917448788879";

      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank"
      );

      toast.success("Redirecting to WhatsApp...");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fix the form errors");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* ==============================
          HERO SECTION
      =============================== */}
      <ParallaxSection
        className="pt-32 pb-16"
        bgClassName="bg-gradient-to-b from-orange-50 to-transparent"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
              data-aos="fade-up"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p
              className="text-lg text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Have a project in mind? Let’s build something amazing together.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* ==============================
          CONTACT SECTION
      =============================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* CONTACT INFO */}
            <div data-aos="fade-right">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h2>

              <p className="text-muted-foreground mb-8">
                Reach out through phone, WhatsApp, or email. I usually reply
                within 24 hours.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+917448788879"
                  className="flex gap-4 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Phone className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 7448788879</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/917448788879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <MessageCircle className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">Chat instantly</p>
                  </div>
                </a>

                <a
                  href="mailto:sasikumarp2207@gmail.com"
                  className="flex gap-4 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Mail className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      sasikumarp2207@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex gap-4 p-4 rounded-xl bg-orange-50 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <MapPin className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      Mettur, Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div data-aos="fade-left">
              <div className="p-8 rounded-2xl bg-white shadow-lg">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {["name", "email", "subject"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-2 capitalize">
                        {field} *
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                          errors[field]
                            ? "border-red-500"
                            : "border-gray-200"
                        }`}
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                        errors.message
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 transition shadow-md"
                  >
                    <Send size={18} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
