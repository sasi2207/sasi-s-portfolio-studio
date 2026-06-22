import { useEffect, useState } from "react";
import AOS from "aos";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import API_URL from "./api";

/* ----------------------------------
   VALIDATION SCHEMA
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
     INPUT CHANGE
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
     FORM SUBMIT
     → GLOBAL API CALL
     → BACKEND SENDS TO WHATSAPP
  ----------------------------------- */

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  /* -----------------------------
     ZOD VALIDATION
  ----------------------------- */
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

    toast.success("Message sent successfully 🚀");

    setFormData({
      name: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
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
                Reach out through phone or email. I usually reply within 24
                hours.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-orange-50 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Phone className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 7448788879</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-orange-50 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Mail className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                       techsasi22@gmail.com
                    </p>
                  </div>
                </div>

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
                  {["name", "phone", "subject"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium mb-2 capitalize">
                        {field} *
                      </label>
                      <input
                        type="text"
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
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 transition shadow-md disabled:opacity-60"
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
