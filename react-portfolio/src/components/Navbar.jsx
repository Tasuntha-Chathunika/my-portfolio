import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'py-3 bg-bg/30 backdrop-blur-md border-b border-border shadow-lg shadow-accent-1/10'
          : 'py-5 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-display font-extrabold text-2xl tracking-tight">
          Tasuntha<span className="text-accent-2">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 relative
                    ${activeSection === link.href.substring(1)
                      ? 'text-accent-3'
                      : 'text-muted hover:text-text'}`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-3 rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-surface/50 border border-border hover:border-accent-1/30 transition-all text-text"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white
                bg-gradient-to-r from-accent-1 to-accent-2
                hover:shadow-lg hover:shadow-accent-2/25 transition-all duration-300 animated-gradient-bg"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-surface/50 transition-colors text-text border border-transparent hover:border-border">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-surface/50 transition-colors text-text">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg/90 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium transition-colors
                      ${activeSection === link.href.substring(1) ? 'text-accent-3' : 'text-muted'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
