import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/tasuntha-chathunika', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaGithub size={18} />, href: 'https://github.com/Tasuntha-Chathunika', label: 'GitHub', color: '#e6e6e6' },
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
    <footer className="relative bg-dark-bg/50">
      {/* Animated gradient top border */}
      <div
        className="w-full h-px animated-gradient-bg"
        style={{
          background: 'linear-gradient(90deg, transparent, #a855f7, #ff2d7b, #00d4ff, #a855f7, transparent)',
          backgroundSize: '200% 100%',
          animation: 'gradient-shift 4s ease infinite',
        }}
      ></div>

      {/* Subtle glow above the border */}
      <div className="absolute top-0 left-1/4 right-1/4 h-12 bg-gradient-to-b from-neon-purple/5 to-transparent pointer-events-none"></div>

      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="group inline-block">
              <span
                className="font-display font-extrabold text-2xl tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #f0f0ff, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.3))',
                  transition: 'filter 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 16px rgba(168,85,247,0.7))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(168,85,247,0.3))';
                }}
              >
                Tasuntha<span style={{ WebkitTextFillColor: '#ff2d7b' }}>.</span>
              </span>
            </a>
            <p className="text-xs text-dark-muted mt-1 flex items-center justify-center md:justify-start gap-1.5">
              <Code2 size={11} className="text-neon-cyan" />
              Building the future, one project at a time.
            </p>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-dark-muted hover:text-neon-cyan transition-colors duration-300 uppercase tracking-wider"
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
                className="p-2.5 rounded-xl glass-card text-dark-muted hover:-translate-y-1 transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.borderColor = social.color + '40';
                  e.currentTarget.style.boxShadow = `0 0 14px ${social.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-dark-muted">
            © {new Date().getFullYear()}{' '}
            <span className="gradient-text font-semibold">Tasuntha Chathunika Dayasiri</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-dark-muted flex items-center gap-1.5">
            Made with <Heart size={11} className="text-neon-pink fill-neon-pink animate-pulse" /> in Sri Lanka
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl flex items-center justify-center z-50
          bg-gradient-to-r from-neon-purple to-neon-pink text-white
          shadow-lg shadow-neon-purple/30
          hover:-translate-y-1.5 hover:shadow-xl hover:shadow-neon-pink/50 transition-all duration-300
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
