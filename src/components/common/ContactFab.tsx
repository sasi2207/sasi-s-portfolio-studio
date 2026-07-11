import { Phone, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ContactFab = () => {
  const whatsappUrl =
    "https://wa.me/917448788879?text=Hi%20SasiKumar%2C%20I%27m%20interested%20in%20your%20services.";
  const callUrl = "tel:+917448788879";

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3">

      {/* GET PROPOSAL BUTTON */}
      {/* <Link
        to="/proposal"
        aria-label="Get a Proposal"
        className="
          group relative
          w-12 h-12
          rounded-full
          bg-orange-500
          flex items-center justify-center
          shadow-xl
          hover:bg-orange-600
          transition
        "
      >
        <FileText
          size={20}
          className="text-white group-hover:scale-110 transition-transform"
        />

        <span
          className="
            absolute right-full mr-3
            px-3 py-1.5
            bg-white text-gray-800
            text-sm font-medium
            rounded-lg shadow-lg
            opacity-0 group-hover:opacity-100
            transition-opacity
            whitespace-nowrap
          "
        >
          Get a Proposal
        </span>
      </Link> */}

      {/* CALL BUTTON */}
      <a
        href={callUrl}
        aria-label="Call now"
        className="
          group relative
          w-12 h-12
          rounded-full
          bg-white
          border border-blue-200
          flex items-center justify-center
          shadow-lg
          hover:bg-blue-500
          transition
        "
      >
        <Phone
          size={20}
          className="text-blue-500 group-hover:text-white transition-colors"
        />

        <span
          className="
            absolute right-full mr-3
            px-3 py-1.5
            bg-white text-gray-800
            text-sm font-medium
            rounded-lg shadow-lg
            opacity-0 group-hover:opacity-100
            transition-opacity
            whitespace-nowrap
          "
        >
          Call Now
        </span>
      </a>

      {/* WHATSAPP BUTTON – ORIGINAL ICON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          group relative
          w-14 h-14
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-xl
          hover:scale-105
          transition-transform
        "
      >
        <FaWhatsapp
          size={30}
          className="text-white group-hover:scale-110 transition-transform"
        />

        <span
          className="
            absolute right-full mr-3
            px-3 py-1.5
            bg-white text-gray-800
            text-sm font-medium
            rounded-lg shadow-lg
            opacity-0 group-hover:opacity-100
            transition-opacity
            whitespace-nowrap
          "
        >
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
