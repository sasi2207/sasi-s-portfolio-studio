import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const OfferContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    websiteType: "",
    promoCode: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT HANDLER
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: any = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.websiteType)
      newErrors.websiteType = "Select website type";

    // PROMO REQUIRED
    if (!formData.promoCode) {
      newErrors.promoCode = "Promo Code is required";
    } 
    // PROMO MUST MATCH
    else if (formData.promoCode !== "techsasi2026") {
      newErrors.promoCode = "Invalid Promo Code ";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      await axios.post("https://yourdomain.com/offer_register.php", formData);
      alert("🎉 Successfully Registered! Our team will contact you soon.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        websiteType: "",
        promoCode: "",
      });
    } catch (err) {
      alert("Something went wrong! Please try again.");
    }

    setIsSubmitting(false);
  };

  return (

    <Layout>
    <section className="section-padding mt-5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* CONTACT INFO */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Contact Information
            </h2>

            <p className="text-muted-foreground mb-8">
              Reach out through phone or email. I usually reply within 24 hours.
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

          {/* OFFER FORM */}
          <div data-aos="fade-left">
            <div className="p-8 rounded-2xl bg-white shadow-lg">
              <h2 className="text-2xl font-heading font-bold mb-2">
                🎉 New Year 2026 Offer Registration
              </h2>

              <p className="text-sm text-orange-600 font-semibold mb-6">
                Offer Valid: Jan 1 to Jan 7
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter mobile number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Website Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Website Type *
                  </label>

                  <select
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      errors.websiteType
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  >
                    <option value="">Select Website Type</option>
                    <option value="Static Website">Static Website</option>
                    <option value="Dynamic Website">Dynamic Website</option>
                    <option value="Portfolio Website">Portfolio Website</option>
                    <option value="Business Website">Business Website</option>
                    <option value="E-Commerce Website">
                      E-Commerce Website
                    </option>
                  </select>

                  {errors.websiteType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.websiteType}
                    </p>
                  )}
                </div>

                {/* Promo Code */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Promo Code *
                  </label>

                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleChange}
                    placeholder="Enter Promo Code"
                    className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      errors.promoCode
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.promoCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.promoCode}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 transition shadow-md disabled:opacity-60"
                >
                  <Send size={18} />
                  {isSubmitting ? "Submitting..." : "Register Now"}
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

export default OfferContactSection;
