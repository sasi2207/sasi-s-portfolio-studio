<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  FileText,
  Home,
  Info,
  Layers,
  Briefcase,
  Edit3,
  Mail,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'About', path: '/about', icon: <Info size={18} /> },
  { name: 'Services', path: '/services', icon: <Layers size={18} /> },
  { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
  { name: 'Blog', path: '/blog', icon: <Edit3 size={18} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
=======
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

<<<<<<< HEAD
  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on route change */
=======
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

<<<<<<< HEAD
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
      {/* HEADER */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="container-custom">
          <div className="relative flex items-center justify-between">

            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 font-extrabold text-black shadow-lg">
                TS
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold">TechSasi</span>
                <span className="text-sm font-semibold text-orange-500">
                  டெக் சசி
                </span>
              </div>
            </motion.div>

            {/* DESKTOP NAV – CENTERED */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative font-medium transition text-center',
                    location.pathname === link.path
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500',
                    'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-orange-500 after:transition-all',
                    location.pathname === link.path
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex">
              <Link
                to="/proposal"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow hover:scale-105 transition"
              >
                Get Proposal
                <span className="text-xs uppercase tracking-widest opacity-80">
                  Free
                </span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
  {/* MOBILE MENU – PROFESSIONAL */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
      />

      {/* DRAWER */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        className="
          fixed top-0 left-0 z-[9999]
          h-screen w-[80%] max-w-[360px]
          bg-white
          shadow-2xl
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900">TechSasi</h3>
            <p className="text-xs text-gray-500">Software & Solutions</p>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* PRIMARY CTA */}
        <div className="px-5 py-4">
          <Link
            to="/proposal"
            onClick={() => setIsOpen(false)}
            className="
              flex items-center justify-center gap-2
              w-full rounded-lg py-3
              bg-orange-500 text-white
              font-semibold text-sm
              shadow-md hover:bg-orange-600 transition
            "
          >
            <FileText size={16} />
            Get Free Proposal
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className="flex-1 px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                `
                  flex items-center gap-4
                  px-4 py-3 rounded-md
                  text-sm font-medium
                  transition
                `,
                location.pathname === link.path
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <span className="text-gray-400">
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="px-5 py-4 border-t text-xs text-gray-500">
          © {new Date().getFullYear()} TechSasi
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>

    </>
=======
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
          >
            Sasi<span className="text-primary">Kumar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-medium transition-colors relative py-1',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300',
                  location.pathname === link.path
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/proposal" className="btn-primary text-sm">
              Get Proposal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-2 py-4 bg-card rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-3 font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link to="/proposal" className="btn-accent w-full block text-center text-sm">
                Get Proposal
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
>>>>>>> c6cd4c171dc44d8e0f1e28f785d59919f35800fe
  );
};
