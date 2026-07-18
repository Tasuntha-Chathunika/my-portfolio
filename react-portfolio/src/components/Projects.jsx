import { motion } from 'framer-motion';
import { ExternalLink, Users, Star } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { useRef } from 'react';
import pricepulseImg from '../assets/prisepluse.png';
import attendanceImg from '../assets/hero.png';


const projectsData = [
  {
    title: 'PricePulse',
    description: 'A web platform designed to track product prices and set alerts for online stores in Sri Lanka. Helps users monitor price fluctuations and secure the best deals.',
    image: pricepulseImg,
    tags: [
      { name: 'React', color: '#61dafb' },
      { name: 'Node.js', color: '#68a063' },
      { name: 'Express', color: '#ffffff' },
    ],
    links: { github: 'https://github.com/Tasuntha-Chathunika/PricePulse-Project' },
    gradient: 'from-neon-cyan to-neon-blue',
    accentColor: '#00d4ff',
    featured: true,
  },
  {
    title: 'Attendance Management',
    description: 'A comprehensive ATMS for managing lecturer and student schedules with strict user role management, course assignments, and data integrity protocols.',
    image: attendanceImg,
    tags: [
      { name: 'PHP', color: '#8993be' },
      { name: 'MySQL', color: '#f29111' },
      { name: 'Tailwind CSS', color: '#06b6d4' },
    ],
    links: { github: '#' }, /* REPLACE '#' WITH GITHUB LINK */
    gradient: 'from-neon-purple to-neon-pink',
    accentColor: '#a855f7',
    featured: false,
  },

  {
    title: 'UI/UX Design Concepts',
    description: 'Modern, user-centric interface designs created with Figma, focusing on usability, professional aesthetics, and seamless user experiences.',
    icon: <FaFigma size={36} />,
    tags: [
      { name: 'Figma', color: '#f24e1e' },
      { name: 'UI/UX Design', color: '#a855f7' },
    ],
    links: { demo: '#' }, /* REPLACE '#' WITH FIGMA OR DEMO LINK */
    gradient: 'from-neon-orange to-neon-pink',
    accentColor: '#f97316',
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };

  return (
    <motion.div
      ref={cardRef}
      className="group glass-card overflow-hidden flex flex-col relative cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        willChange: 'transform',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 30px 60px ${project.accentColor}20, 0 0 0 1px ${project.accentColor}20`;
      }}
    >
      {/* Animated Gradient Top Bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.gradient} animated-gradient-bg`}
        style={{ backgroundSize: '200% 200%' }}
      ></div>

      {/* Featured Badge */}
      {project.featured && (
        <div
          className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-white"
          style={{
            background: 'linear-gradient(135deg, #f97316, #ff2d7b)',
            boxShadow: '0 0 12px rgba(249,115,22,0.5)',
          }}
        >
          <Star size={10} fill="white" />
          Featured
        </div>
      )}

      {/* Image / Icon Area */}
      <div className="h-48 w-full overflow-hidden relative bg-dark-surface/50">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}></div>
            <div
              className="transition-all duration-300 z-10 opacity-40 group-hover:opacity-90 group-hover:scale-110"
              style={{ color: project.accentColor }}
            >
              {project.icon}
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-card to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-xl font-bold mb-3 transition-colors duration-300"
          style={{ color: 'inherit' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = project.accentColor; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}
        >
          {project.title}
        </h3>
        <p className="text-dark-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Colored tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag.name}
              className="px-3 py-1 rounded-full text-[11px] font-bold border transition-all duration-300"
              style={{
                color: tag.color,
                borderColor: tag.color + '40',
                backgroundColor: tag.color + '10',
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                glass-card text-sm font-semibold text-dark-muted hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <FaGithub size={15} /> Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                text-sm font-bold text-white bg-gradient-to-r ${project.gradient}
                hover:shadow-lg transition-all duration-300`}
              style={{ '--tw-shadow-color': project.accentColor }}
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-neon-blue/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
          <p className="mt-4 text-dark-muted max-w-lg mx-auto text-sm md:text-base">
            A selection of things I've built with passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
