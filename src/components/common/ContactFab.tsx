import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const ContactFab = () => {
  const whatsappUrl =
    "https://wa.me/917448788897?text=Hi%20SasiKumar%2C%20I%27m%20interested%20in%20TechSasi%20services.";
  const callUrl = "tel:+917448788879";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
      {/* Phone Call Button */}
      <a
        href={callUrl}
        aria-label="Direct Phone Consultation"
        className="group relative w-11 h-11 rounded-full bg-[#0E1422] border border-white/[0.1] text-amber-400 hover:text-white hover:bg-amber-500 hover:border-amber-400 flex items-center justify-center shadow-xl transition-all duration-200 hover:-translate-y-0.5"
      >
        <Phone size={18} />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0C111E] text-slate-200 text-xs font-mono rounded-lg border border-white/[0.1] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call +91 7448788879
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105"
      >
        <FaWhatsapp size={24} />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0C111E] text-slate-200 text-xs font-mono rounded-lg border border-white/[0.1] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Direct
        </span>
      </a>
    </div>
  );
};

export default ContactFab;
