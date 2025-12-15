import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-heading font-bold">
             Tech<span className="text-orange-400">Sasi</span>
            </Link>
            <p className="mt-4 text-secondary-foreground/70 text-sm leading-relaxed">
              Full-stack developer crafting modern web experiences. Based in Mettur, Salem.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>Website Development</li>
              <li>Full-Stack Applications</li>
              <li>Admin Dashboards</li>
              <li>Deployment & Hosting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+917448788879"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  +91 7448788879
                </a>
              </li>
              <li>
                <a
                  href="mailto:sasikumarp2207@gmail.com"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  sasikumarp2207@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                <MapPin size={16} />
                Mettur, Salem, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {currentYear} TechSasi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-secondary-foreground/50">
              <a href="https://soolya.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                TechSasi Projects
              </a>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
