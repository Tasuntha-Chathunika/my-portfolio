import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.to('.hero-content', {
      y: 150,
      opacity: 0,
      scale: 0.9,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    
    gsap.to('.hero-blob', {
      y: 200,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, { scope: heroRef });

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="hero-blob absolute top-20 left-10 w-80 h-80 bg-accent-1/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="hero-blob absolute top-40 right-20 w-96 h-96 bg-accent-2/15 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="hero-blob absolute bottom-20 left-1/3 w-72 h-72 bg-accent-3/15 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, var(--theme-text) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="section-container relative z-10 w-full pt-24">
        <div className="hero-content max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card neon-border mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-muted">
              <Sparkles size={14} className="inline mr-1 text-yellow-500" />
              Available for Work
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black font-display leading-[1.1] mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Tasuntha Chathunika</span>
            <span className="text-accent-2">.</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted font-bold mt-4 inline-block">
              Software Engineer &amp; Web Developer.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            I build high-quality software solutions and premium web experiences.
            Currently pursuing my BICT (Hons) and eager to tackle complex challenges.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-accent-3 to-accent-1
                hover:shadow-lg hover:shadow-accent-3/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-text
                glass-card neon-border hover:border-accent-2/50 hover:shadow-lg hover:shadow-accent-2/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
