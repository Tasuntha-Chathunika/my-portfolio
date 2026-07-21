import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImage from '../assets/IMG_20240613_205017.jpg';
import Reveal from './Reveal';

const About = () => {
  const aboutRef = useRef(null);

  return (
    <section ref={aboutRef} id="about" className="py-28 md:py-36 relative overflow-hidden bg-[#242b36]">
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Hexagon Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-start items-center w-full max-w-md lg:max-w-lg relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Hexagon Wrapper with Glow */}
            <div className="relative hex-glow p-2">
               {/* Inner Hexagon for Border */}
               <div className="w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] bg-accent-3 hex-clip flex items-center justify-center">
                  {/* Image Hexagon */}
                  <div className="w-[98%] h-[98%] bg-card hex-clip overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Tasuntha Chathunika Dayasiri" 
                      className="w-full h-full object-cover scale-110 translate-y-4"
                    />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="flex-1 flex flex-col items-start text-left max-w-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white mb-2 tracking-tight">
                About <span className="text-accent-3">Me</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Frontend Developer!
              </h3>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed mb-8">
                <p>
                  Hello! I'm <strong className="text-white">Tasuntha Chathunika Dayasiri</strong>, a highly motivated and results-oriented student at the University of Vavuniya.
                </p>
                <p>
                  I am currently pursuing a Bachelor of Information and Communication Technology (Hons). My primary goal is to leverage my growing technical skills and creativity to contribute to impactful projects in the tech industry.
                </p>
                <p>
                  I have a strong foundation in modern web development (HTML, CSS, JavaScript, React, Tailwind CSS) and backend systems (Node.js). I'm also enthusiastic about exploring creative coding with Three.js and p5.js.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <motion.a
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-bg bg-accent-3
                           shadow-[0_0_20px_var(--theme-accent-3)] hover:shadow-[0_0_30px_var(--theme-accent-3)] 
                           transition-all duration-300 gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More <ArrowRight size={18} />
              </motion.a>
            </Reveal>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
