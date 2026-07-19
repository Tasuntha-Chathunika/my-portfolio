import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Code2, Layers, BookOpen } from 'lucide-react';
import profileImage from '../assets/IMG_20240613_205017.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stats = [
  { icon: <Code2 size={20} />, value: '3+', label: 'Years Coding', color: 'var(--theme-accent-3)' },
  { icon: <Layers size={20} />, value: '10+', label: 'Projects Built', color: 'var(--theme-accent-1)' },
  { icon: <BookOpen size={20} />, value: 'BICT (Hons)', label: 'Undergraduate', color: 'var(--theme-accent-2)' },
];

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.to('.about-image-container', {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, { scope: aboutRef });

  return (
    <section ref={aboutRef} id="about" className="py-28 md:py-36 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-1/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-3/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-accent-1 to-accent-2"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Image + Stats */}
          <motion.div
            className="about-image-container w-full max-w-xs lg:max-w-sm relative group flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Outer animated gradient ring (Glow) */}
            <div className="absolute -inset-1 rounded-[1.3rem] opacity-40 blur-xl"
              style={{
                background: 'linear-gradient(135deg, var(--theme-accent-1), var(--theme-accent-2), var(--theme-accent-3), var(--theme-accent-1))',
                backgroundSize: '300% 300%',
                animation: 'border-rotate 4s ease infinite',
              }}
            ></div>
            
            {/* Animated Gradient Stroke (Border) */}
            <div className="absolute -inset-[2px] rounded-[1.3rem] opacity-100"
              style={{
                background: 'linear-gradient(135deg, var(--theme-accent-1), var(--theme-accent-2), var(--theme-accent-3), var(--theme-accent-1))',
                backgroundSize: '300% 300%',
                animation: 'border-rotate 4s ease infinite',
              }}
            ></div>

            {/* Inner Content containing the image */}
            <div className="relative bg-bg p-2 rounded-2xl overflow-hidden z-10 h-full">
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Tasuntha Chathunika Dayasiri"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Image overlay shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-1/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Stats Row below image */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-3 flex flex-col items-center text-center gap-1.5 hover:-translate-y-1 transition-all duration-300 cursor-default relative overflow-hidden group/stat"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  style={{ '--stat-color': stat.color }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover/stat:opacity-20 transition-opacity duration-300" style={{ backgroundColor: stat.color }}></div>
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                  <span className="font-extrabold font-display text-lg leading-none" style={{ color: stat.color }}>{stat.value}</span>
                  <span className="text-[10px] text-muted font-medium leading-tight">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
              Developing robust solutions with a focus on{' '}
              <span className="gradient-text">user experience</span>.
            </h3>

            <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
              <p>
                Hello! I'm{' '}
                <strong className="text-text font-semibold">Tasuntha Chathunika Dayasiri</strong>,
                a highly motivated and results-oriented student at the University of Vavuniya.
              </p>
              <p>
                I am currently pursuing a Bachelor of Information and Communication Technology (Hons). 
                My primary goal is to leverage my growing technical skills and creativity 
                to contribute to impactful projects in the tech industry.
              </p>
              <p>
                I have a strong foundation in modern web development (HTML, CSS, JavaScript, React, Tailwind CSS)
                and backend systems (Node.js). I'm also enthusiastic about exploring creative coding with Three.js and p5.js.
              </p>
              <p>
                Beyond web development, my skillset extends to C, C++, C#, and Java. I am equally passionate about creative design,
                utilizing professional tools like Adobe Photoshop, Illustrator, Premiere Pro, and Figma to craft visually compelling experiences.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Full-Stack Web', 'UI/UX Design', 'Creative Coding', 'Problem Solving'].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full glass-card border border-border text-muted hover:text-accent-3 hover:border-accent-3/30 transition-all duration-300"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#" /* REPLACE '#' WITH YOUR RESUME GOOGLE DRIVE OR PDF LINK */
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden
                  bg-gradient-to-r from-accent-1 to-accent-2
                  hover:shadow-xl hover:shadow-accent-1/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Animated shine sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                Download Resume <Download size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-text
                  glass-card neon-border hover:border-accent-3/50 hover:shadow-accent-3/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
