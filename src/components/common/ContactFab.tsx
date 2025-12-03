import { MessageCircle } from 'lucide-react';

export const ContactFab = () => {
  const whatsappUrl = 'https://wa.me/917448788879?text=Hi%20SasiKumar%2C%20I%27m%20interested%20in%20your%20services.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fab group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} className="text-accent-foreground group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-foreground text-sm font-medium 
                     rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
};
