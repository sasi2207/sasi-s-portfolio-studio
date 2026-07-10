import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Info,
  Layers,
  Briefcase,
  Edit3,
  Mail,
  ChevronDown,
  BookOpen,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about', icon: <Info size={18} /> },
  { name: 'Services', path: '/services', icon: <Layers size={18} /> },
  { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
  { name: 'Blog', path: '/blog', icon: <Edit3 size={18} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
];

const courses = [
  { name: "React.js Development", path: "/courses/react" },
  { name: "Python Full Stack", path: "/courses/python-fullstack" },
  { name: "Java Full Stack", path: "/courses/java-fullstack" },
  { name: "MERN Stack", path: "/courses/mern-stack" },
  // { name: "UI/UX Design", path: "/courses/ui-ux" },
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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Mobile accordion state toggle
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileInternshipsOpen, setMobileInternshipsOpen] = useState(false);

  const location = useLocation();

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    setIsOpen(false);
    setMobileCoursesOpen(false);
    setMobileInternshipsOpen(false);
  }, [location]);

  /* Disable body scroll (mobile) */
  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ESC close */
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, handleKey]);

  return (
    <>
      {/* HEADER WRAPPER */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 w-full px-4 sm:px-6 lg:px-8',
          scrolled ? 'py-2' : 'py-4'
        )}
      >
        {/* INNER FLOATING CONTAINER WITH MAX-WIDTH BOUNDS */}
        <div 
          className={cn(
            "container mx-auto max-w-7xl rounded-2xl transition-all duration-300 px-6",
            scrolled 
              ? "bg-white/95 backdrop-blur-md shadow-sm border border-gray-100" 
              : "bg-white/40 backdrop-blur-sm border border-white/20"
          )}
        >
          <nav className="flex items-center justify-between h-16 md:h-20 w-full">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="leading-none">
                    <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                      <span className="text-gray-900">TECH</span>
                      <span className="text-orange-500">SASI</span>
                    </h1>

                    <div className="flex items-center justify-center gap-1 mt-1 text-[9px] md:text-[10px] font-bold uppercase text-gray-400">
                      <div className="w-3 md:w-4 h-[1.5px] bg-orange-500"></div>
                      <span>Learn</span>
                      <span className="text-orange-500">•</span>
                      <span>Build</span>
                      <span className="text-orange-500">•</span>
                      <span>Grow</span>
                      <div className="w-3 md:w-4 h-[1.5px] bg-orange-500"></div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* DESKTOP NAV links inside container */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8 ml-auto">
              {/* Home */}
              <Link
                to="/"
                className={cn(
                  'relative font-medium transition text-sm lg:text-base py-1',
                  location.pathname === '/' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                )}
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div className="relative group py-1">
                <button className="flex items-center gap-1 font-medium text-gray-700 group-hover:text-orange-500 transition text-sm lg:text-base">
                  Courses
                  <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform duration-200" />
                </button>
                {/* Note: Added "before:" pseudo class to bridge the hover gap */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2 before:absolute before:-top-2 before:h-2 before:left-0 before:right-0 before:content-['']">
                  {courses.map((course) => (
                    <Link
                      key={course.path}
                      to={course.path}
                      className={cn(
                        "block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition",
                        location.pathname === course.path && "bg-orange-50 text-orange-600 font-medium"
                      )}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Internships Dropdown */}
              <div className="relative group py-1">
                <button className="flex items-center gap-1 font-medium text-gray-700 group-hover:text-orange-500 transition text-sm lg:text-base">
                  Internships
                  <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform duration-200" />
                </button>
                {/* Note: Added "before:" pseudo class to bridge the hover gap */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2 before:absolute before:-top-2 before:h-2 before:left-0 before:right-0 before:content-['']">
                  {internships.map((internship) => (
                    <Link
                      key={internship.path}
                      to={internship.path}
                      className={cn(
                        "block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition",
                        location.pathname === internship.path && "bg-orange-50 text-orange-600 font-medium"
                      )}
                    >
                      {internship.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Remaining Links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative font-medium transition text-sm lg:text-base',
                    location.pathname === link.path
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Trigger Button */}
            <button
              className="block md:hidden p-2 ml-auto text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER SHEET */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            />

            {/* Side Drawer Body */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 z-[9999] h-screen w-[85%] max-w-[340px] bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Top Branding */}
             <div className="px-5 py-5 border-b flex items-center justify-between">
  {/* Left Side: Logo and Tagline grouped together */}
  <div className="flex flex-col">
    <h1 className="text-2xl font-black tracking-tight">
      <span className="text-gray-900">TECH</span>
      <span className="text-orange-500">SASI</span>
    </h1> 
    
    <div className="flex items-center gap-1 mt-1 text-[9px] md:text-[10px] font-bold uppercase text-gray-400">
      <div className="w-3 md:w-4 h-[1.5px] bg-orange-500"></div>
      <span>Learn</span>
      <span className="text-orange-500">•</span>
      <span>Build</span>
      <span className="text-orange-500">•</span>
      <span>Grow</span>
      <div className="w-3 md:w-4 h-[1.5px] bg-orange-500"></div>
    </div>
  </div>

  {/* Right Side: Close Button */}
  <button
    onClick={() => setIsOpen(false)}
    className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 transition"
  >
    <X size={20} />
  </button>
</div>

              {/* Mobile Sidebar Navigation */}
              <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {/* Home Link */}
                <Link
                  to="/"
                  className={cn(
                    'flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition',
                    location.pathname === '/' ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <Home size={18} className="text-gray-400" />
                  Home
                </Link>

                {/* Courses Accordion Mobile Stack */}
                <div>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-4">
                      <BookOpen size={18} className="text-gray-400" />
                      <span>Courses</span>
                    </div>
                    <ChevronDown size={16} className={cn("text-gray-400 transition-transform", mobileCoursesOpen && "rotate-180")} />
                  </button>
                  <div className={cn("pl-12 pr-4 overflow-hidden transition-all duration-300 max-h-0", mobileCoursesOpen && "max-h-[400px] py-1 space-y-1")}>
                    {courses.map((course) => (
                      <Link
                        key={course.path}
                        to={course.path}
                        className={cn(
                          "block py-2 text-sm text-gray-600 hover:text-orange-500 transition",
                          location.pathname === course.path && "text-orange-500 font-medium"
                        )}
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Internships Accordion Mobile Stack */}
                <div>
                  <button
                    onClick={() => setMobileInternshipsOpen(!mobileInternshipsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-4">
                      <Award size={18} className="text-gray-400" />
                      <span>Internships</span>
                    </div>
                    <ChevronDown size={16} className={cn("text-gray-400 transition-transform", mobileInternshipsOpen && "rotate-180")} />
                  </button>
                  <div className={cn("pl-12 pr-4 overflow-hidden transition-all duration-300 max-h-0", mobileInternshipsOpen && "max-h-[400px] py-1 space-y-1")}>
                    {internships.map((internship) => (
                      <Link
                        key={internship.path}
                        to={internship.path}
                        className={cn(
                          "block py-2 text-sm text-gray-600 hover:text-orange-500 transition",
                          location.pathname === internship.path && "text-orange-500 font-medium"
                        )}
                      >
                        {internship.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Nav items */}
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition',
                      location.pathname === link.path ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    <span className={cn(location.pathname === link.path ? 'text-orange-500' : 'text-gray-400')}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Bottom Copyright Meta */}
              <div className="px-5 py-4 border-t text-xs text-gray-400 bg-gray-50/50">
                &copy; {new Date().getFullYear()} TechSasi. All rights reserved.
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  ); 
};