import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import profileImage from '../assets/IMG_20240613_205017.jpg';
import Reveal from './Reveal';

const socialLinks = [
  { icon: <FaFacebook size={18} />, href: 'https://www.facebook.com/tasunthachathunika', label: 'Facebook' },
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/tasuntha-chathunika', label: 'LinkedIn' },
  { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/tasuntha_chathunika', label: 'Instagram' },
  { icon: <FaGithub size={18} />, href: 'https://github.com/Tasuntha-Chathunika', label: 'GitHub' },
];

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-bg">
      <div className="section-container w-full z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="flex-1 flex flex-col items-start text-left max-w-2xl"
            style={{ y: yText, opacity: opacityText }}
          >
            <Reveal direction="up" delay={0.1}>
              <h3 className="text-xl md:text-2xl font-semibold text-text mb-2">
                Hello, It's Me
              </h3>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white mb-2 leading-tight">
                Tasuntha Chathunika
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-6">
                And I'm a <span className="text-accent-3">Frontend Developer</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                I'm a highly motivated BICT (Hons) undergraduate passionate about crafting beautiful, functional, and user-centric web experiences.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-4 mb-8">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="w-12 h-12 rounded-full border-2 border-accent-3 text-accent-3 flex items-center justify-center
                               hover:bg-accent-3 hover:text-bg hover:shadow-[0_0_15px_var(--theme-accent-3)] transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.6}>
              <motion.a
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-bg bg-accent-3
                           shadow-[0_0_20px_var(--theme-accent-3)] hover:shadow-[0_0_30px_var(--theme-accent-3)] 
                           transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </Reveal>
          </motion.div>

          {/* Right Column: Hexagon Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end items-center w-full max-w-md lg:max-w-lg relative"
            style={{ y: yImage, opacity: opacityImage }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Hexagon Wrapper with Glow */}
            <div className="relative hex-glow p-2">
               {/* Inner Hexagon for Border */}
               <div className="w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] bg-accent-3 hex-clip flex items-center justify-center">
                  {/* Image Hexagon */}
                  <div className="w-[98%] h-[98%] bg-card hex-clip overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Tasuntha Chathunika" 
                      className="w-full h-full object-cover scale-110 translate-y-4"
                    />
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
