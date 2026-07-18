import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/tasuntha-chathunika', color: '#0077b5', label: 'LinkedIn' },
  { icon: <FaGithub size={20} />, href: 'https://github.com/Tasuntha-Chathunika', color: '#e6e6e6', label: 'GitHub' },
  { icon: <FaFacebook size={20} />, href: 'https://www.facebook.com/share/1Eq64hpb1T/', color: '#1877f2', label: 'Facebook' },
  { icon: <FaInstagram size={20} />, href: 'https://www.instagram.com/YOUR_INSTAGRAM_USERNAME', color: '#e1306c', label: 'Instagram' },
  { icon: <Mail size={20} />, href: 'mailto:tasunthachathunika@gmail.com', color: '#ec4899', label: 'Email' },
  { icon: <Phone size={20} />, href: 'tel:0750561571', color: '#a855f7', label: 'Phone' },
];

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'tasunthachathunika@gmail.com',
    href: 'mailto:tasunthachathunika@gmail.com',
    color: '#ec4899',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+94 75 056 1571',
    href: 'tel:0750561571',
    color: '#a855f7',
  },
];

const Toast = ({ type, message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className={`fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl glass-card border
      ${type === 'success' ? 'border-neon-green/30' : 'border-neon-pink/30'}`}
  >
    {type === 'success'
      ? <CheckCircle size={20} className="text-neon-green flex-shrink-0" />
      : <XCircle size={20} className="text-neon-pink flex-shrink-0" />
    }
    <span className="text-sm font-medium">{message}</span>
    <button onClick={onClose} className="ml-2 text-dark-muted hover:text-dark-text text-lg leading-none">&times;</button>
  </motion.div>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        showToast('success', 'Message sent! I\'ll get back to you soon. 🎉');
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      showToast('error', 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
        )}
      </AnimatePresence>

      <div className="section-container relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-neon-pink to-neon-cyan mx-auto"></div>
          <p className="mt-4 text-dark-muted max-w-lg mx-auto text-sm md:text-base">
            Have a project or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left - Info */}
              <div className="flex-1 p-8 md:p-12 bg-dark-surface/30 border-b md:border-b-0 md:border-r border-white/5 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">
                  Let's build something <span className="gradient-text">together.</span>
                </h3>
                <p className="text-dark-muted text-sm md:text-base leading-relaxed mb-8 relative z-10">
                  Have a project, an idea, or just want to chat? Fill out the form or connect through my channels.
                </p>

                {/* Direct contact info cards */}
                <div className="flex flex-col gap-3 mb-8 relative z-10">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-center gap-3 p-3.5 rounded-xl glass-card hover:-translate-x-1 transition-all duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = info.color + '40';
                        e.currentTarget.style.boxShadow = `0 0 14px ${info.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: info.color + '20', color: info.color }}
                      >
                        {info.icon}
                      </span>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-dark-muted">{info.label}</div>
                        <div className="text-sm font-medium text-dark-text group-hover:text-white transition-colors">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social links with hover labels */}
                <div className="relative z-10">
                  <p className="text-xs text-dark-muted font-semibold uppercase tracking-widest mb-3">Connect</p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl glass-card text-dark-muted
                          hover:-translate-y-1 transition-all duration-300 text-sm font-medium overflow-hidden"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = social.color;
                          e.currentTarget.style.borderColor = social.color + '40';
                          e.currentTarget.style.boxShadow = `0 0 16px ${social.color}25`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '';
                          e.currentTarget.style.borderColor = '';
                          e.currentTarget.style.boxShadow = '';
                        }}
                      >
                        {social.icon}
                        <span className="text-xs">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="flex-[1.3] p-8 md:p-12 relative">
                {/* REPLACE YOUR_FORMSPREE_ID WITH YOUR ACTUAL FORMSPREE ID */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name Field */}
                  <div className="group flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-dark-muted group-focus-within:text-neon-cyan transition-colors">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text" id="name" name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-dark-text
                          focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all placeholder-dark-muted/40"
                        placeholder="Tasuntha Chathunika"
                        required
                      />
                      {/* Animated underline */}
                      <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-dark-muted group-focus-within:text-neon-pink transition-colors">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email" id="email" name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-dark-text
                          focus:outline-none focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 transition-all placeholder-dark-muted/40"
                        placeholder="you@example.com"
                        required
                      />
                      <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-neon-pink to-neon-purple scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-dark-muted group-focus-within:text-neon-purple transition-colors">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message" name="message" rows="4"
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-dark-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-dark-text
                          focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all resize-none placeholder-dark-muted/40"
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                      <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-2 group relative w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl
                      font-bold text-lg text-white overflow-hidden
                      bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink
                      hover:shadow-xl hover:shadow-neon-purple/30 hover:-translate-y-0.5 transition-all duration-300 animated-gradient-bg
                      disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {/* Shine sweep on hover */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>

                    {status === 'sending' ? (
                      <><Loader2 size={20} className="animate-spin" /> Sending...</>
                    ) : status === 'success' ? (
                      <><CheckCircle size={20} /> Message Sent!</>
                    ) : (
                      <><Send size={20} /> Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
