import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/tasuntha-chathunika', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaGithub size={18} />, href: 'https://github.com/Tasuntha-Chathunika', label: 'GitHub', color: 'var(--theme-text)' },
  { icon: <FaFacebook size={18} />, href: 'https://www.facebook.com/share/1Eq64hpb1T/', label: 'Facebook', color: '#1877f2' },
  { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/YOUR_INSTAGRAM_USERNAME', label: 'Instagram', color: '#e1306c' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg/50">
      {/* Animated gradient top border */}
      <div
        className="w-full h-px animated-gradient-bg"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--theme-accent-1), var(--theme-accent-2), var(--theme-accent-3), var(--theme-accent-1), transparent)',
          backgroundSize: '200% 100%',
          animation: 'gradient-shift 4s ease infinite',
        }}
      ></div>

      {/* Subtle glow above the border */}
      <div className="absolute top-0 left-1/4 right-1/4 h-12 bg-gradient-to-b from-accent-1/5 to-transparent pointer-events-none"></div>

      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="group inline-block">
              <span className="font-display font-extrabold text-2xl tracking-tight">
                Tasuntha<span className="text-accent-2">.</span>
              </span>
            </a>
            <p className="text-xs text-muted mt-1 flex items-center justify-center md:justify-start gap-1.5">
              <Code2 size={11} className="text-accent-3" />
              Building the future, one project at a time.
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-muted hover:text-accent-3 transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.label}
                className="p-2.5 rounded-xl glass-card text-muted hover:-translate-y-1 transition-all duration-300"
                style={{ '--social-color': social.color }}
              >
                <div className="absolute inset-0 border border-transparent hover:border-[var(--social-color)] opacity-40 transition-colors duration-300 rounded-xl pointer-events-none z-20"></div>
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 rounded-xl" style={{ boxShadow: `0 0 14px ${social.color}30` }}></div>
                <span className="relative z-30 transition-colors duration-300 hover:text-[var(--social-color)]">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()}{' '}
            <span className="gradient-text font-semibold">Tasuntha Chathunika Dayasiri</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-muted flex items-center gap-1.5">
            Made with <Heart size={11} className="text-accent-2 fill-accent-2 animate-pulse" /> in Sri Lanka
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl flex items-center justify-center z-50
          bg-gradient-to-r from-accent-1 to-accent-2 text-white
          shadow-lg shadow-accent-1/30
          hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent-2/50 transition-all duration-300
          ${showScroll ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
