import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from 'framer-motion';
import servicesData from "@/data/services.json";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const quickLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
];

const courses = [
  { name: "React.js Development", path: "/courses/react" },
  { name: "Python Full Stack", path: "/courses/python-fullstack" },
  { name: "Java Full Stack", path: "/courses/java-fullstack" },
  { name: "MERN Stack", path: "/courses/mern-stack" },
  { name: "UI/UX Design", path: "/courses/ui-ux" },
  { name: "AWS Cloud", path: "/courses/aws" },
];

const internships = [
  { name: "Web Development Internship", path: "/internships/web-development" },
  { name: "Python Internship", path: "/internships/python" },
  { name: "React Internship", path: "/internships/react" },
  { name: "Java Internship", path: "/internships/java" },
  { name: "Full Stack Internship", path: "/internships/full-stack" },
  { name: "Digital Marketing Internship", path: "/internships/digital-marketing" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkStyles = "text-secondary-foreground/70 hover:text-orange-500 transition-all duration-300 ease-in-out text-sm";

  return (
    <footer className="bg-secondary text-secondary-foreground w-full">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">

          {/* Brand Column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left sm:col-span-2 md:col-span-3 lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="leading-none">
                <h1 className="text-4xl font-black tracking-tight">
                  <span className="text-dark">TECH</span>
                  <span className="text-orange-500">SASI</span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-[11px] font-semibold uppercase text-gray-300">
                  <div className="w-6 h-[2px] bg-orange-500"></div>
                  <span className="text-light">Learn</span>
                  <span className="text-orange-500">•</span>
                  <span className="text-light">Build</span>
                  <span className="text-orange-500">•</span>
                  <span className="text-light">Grow</span>
                  <div className="w-6 h-[2px] bg-orange-500"></div>
                </div>
              </div>
            </motion.div>

            <p className="mt-4 text-secondary-foreground/70 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern web experiences. Based in Mettur, Salem.
            </p>

            {/* Social Icons */}
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

          {/* Courses Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-secondary-foreground">
              Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.path}>
                  <Link to={course.path} className={linkStyles}>
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Internships Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-secondary-foreground">
              Internships
            </h4>
            <ul className="space-y-3">
              {internships.map((internship) => (
                <li key={internship.path}>
                  <Link to={internship.path} className={linkStyles}>
                    {internship.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-secondary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkStyles}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-secondary-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesData?.services?.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className={linkStyles}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-secondary-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917448788879" className={`flex items-center gap-3 ${linkStyles}`}>
                  <Phone size={16} className="shrink-0" />
                  <span>+91 7448788879</span>
                </a>
              </li>

              <li>
                <a href="mailto:techsasi22@gmail.com" className={`flex items-center gap-3 ${linkStyles}`}>
                  <Mail size={16} className="shrink-0" />
                  <span className="break-all">techsasi22@gmail.com</span>
                </a>
              </li>

              <li className={`flex items-center gap-3 cursor-pointer ${linkStyles}`}>
                <MapPin size={16} className="shrink-0" />
                <span>Mettur, Salem, TN</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-secondary-foreground/50 text-sm">
              &copy; {currentYear} TechSasi. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-secondary-foreground/50">
              <a
                href="https://www.techsasi.com/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                TechSasi Projects
              </a>
              <Link to="/contact" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};