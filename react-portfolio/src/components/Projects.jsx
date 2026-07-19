import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, X, Code2, Database, Layout, ArrowRight } from 'lucide-react';
import { FaGithub, FaFigma } from 'react-icons/fa';
import Reveal from './Reveal';
import pricepulseImg from '../assets/prisepluse.png';
import attendanceImg from '../assets/hero.png';

const projectsData = [
  {
    title: 'PricePulse',
    description: 'A web platform designed to track product prices and set alerts for online stores in Sri Lanka. Helps users monitor price fluctuations and secure the best deals.',
    fullDescription: 'PricePulse is a robust price tracking platform tailored for Sri Lankan e-commerce sites. It enables users to monitor product prices over time, visualize price trends, and receive automated alerts when prices drop below a desired threshold.',
    architecture: 'Frontend built with React for a dynamic UI. Backend powered by Node.js and Express. Web scraping is implemented to extract real-time pricing data from target e-commerce platforms.',
    technologies: ['React', 'Node.js', 'Express', 'Web Scraping', 'Tailwind CSS'],
    challenges: 'The primary challenge was reliably scraping data from websites that load content dynamically. This was addressed by implementing advanced scraping techniques and scheduling automated cron jobs to keep data fresh without overloading the target servers.',
    image: pricepulseImg,
    tags: [
      { name: 'React', color: '#61dafb' },
      { name: 'Node.js', color: '#68a063' },
      { name: 'Express', color: 'var(--theme-text)' },
    ],
    links: { github: 'https://github.com/Tasuntha-Chathunika/PricePulse-Project' },
    gradient: 'from-accent-3 to-accent-1',
    accentColor: 'var(--theme-accent-3)',
    featured: true,
  },
  {
    title: 'Attendance Management',
    description: 'A comprehensive ATMS for managing lecturer and student schedules with strict user role management, course assignments, and data integrity protocols.',
    fullDescription: 'This Attendance Management System (ATMS) is designed to streamline academic administration. It provides dedicated dashboards for administrators, lecturers, and students, ensuring accurate tracking of attendance and course assignments.',
    architecture: 'Developed using a traditional LAMP-like stack with PHP handling server-side logic and MySQL for robust relational data management. The interface is styled using Tailwind CSS for a modern look.',
    technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    challenges: 'Ensuring strict data integrity and role-based access control was critical. I implemented secure session management and parameterized SQL queries to prevent unauthorized access and SQL injection vulnerabilities.',
    image: attendanceImg,
    tags: [
      { name: 'PHP', color: '#8993be' },
      { name: 'MySQL', color: '#f29111' },
      { name: 'Tailwind CSS', color: '#06b6d4' },
    ],
    links: { github: '#' }, 
    gradient: 'from-accent-1 to-accent-2',
    accentColor: 'var(--theme-accent-1)',
    featured: false,
  },
  {
    title: 'UI/UX Design Concepts',
    description: 'Modern, user-centric interface designs created with Figma, focusing on usability, professional aesthetics, and seamless user experiences.',
    fullDescription: 'A collection of UI/UX design projects focusing on creating intuitive, accessible, and visually stunning digital experiences across web and mobile platforms.',
    architecture: 'Design systems built meticulously in Figma, utilizing auto-layout, components, and variables to ensure consistency and ease of developer handoff.',
    technologies: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems'],
    challenges: 'Balancing aesthetic appeal with functional usability. I overcame this by conducting user research and iterating on wireframes before committing to high-fidelity designs.',
    icon: <FaFigma size={36} />,
    tags: [
      { name: 'Figma', color: '#f24e1e' },
      { name: 'UI/UX Design', color: 'var(--theme-accent-1)' },
    ],
    links: { demo: '#' }, 
    gradient: 'from-accent-2 to-accent-1',
    accentColor: 'var(--theme-accent-2)',
    featured: false,
  },
];

const ProjectCard = ({ project, index, onClick }) => {
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
      onClick={() => onClick(project)}
      className="group rounded-2xl overflow-hidden flex flex-col relative cursor-pointer
                 glass-card hover:border-accent-1/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease',
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
          className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold text-white"
          style={{
            background: 'linear-gradient(135deg, var(--theme-accent-2), var(--theme-accent-1))',
            boxShadow: '0 0 12px var(--theme-accent-2)',
          }}
        >
          <Star size={12} fill="white" />
          Featured
        </div>
      )}

      {/* Image / Icon Area */}
      <div className="h-52 w-full overflow-hidden relative bg-black/40">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out opacity-90"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}></div>
            <div
              className="transition-all duration-500 z-10 opacity-50 group-hover:opacity-100 transform scale-100 group-hover:scale-125"
              style={{ color: project.accentColor }}
            >
              {project.icon}
            </div>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80"></div>
        
        {/* Click to view text on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
           <span className="px-6 py-2 rounded-full glass-card border border-white/20 text-white font-semibold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             View Case Study <ArrowRight size={16} />
           </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10 bg-bg/40">
        <h3
          className="text-2xl font-bold mb-3 transition-colors duration-300 text-text"
          style={{ color: 'inherit' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = project.accentColor; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = ''; }}
        >
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

        {/* Colored tags */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Links (Stop propagation so clicking links doesn't open modal) */}
        <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                glass-card text-sm font-semibold text-text hover:bg-border transition-all duration-300"
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
                hover:shadow-[0_0_20px_rgba(var(--tw-shadow-color),0.4)] transition-all duration-300`}
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

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-card rounded-3xl border border-border shadow-2xl overflow-hidden my-auto"
        style={{ boxShadow: `0 0 60px ${project.accentColor}20` }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md"
        >
          <X size={24} />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 md:h-80 w-full bg-bg flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-bg">
              <div style={{ color: project.accentColor, opacity: 0.5 }} className="transform scale-150">
                {project.icon}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
             <h2 className="text-3xl md:text-5xl font-black text-text mb-4 drop-shadow-lg">{project.title}</h2>
             <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag.name} className="px-3 py-1 rounded-full text-xs font-bold border border-border bg-bg/40 backdrop-blur-md text-text">
                    {tag.name}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
           
           <div className="md:col-span-2 space-y-8">
              <div>
                <h4 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                  <Layout size={20} style={{ color: project.accentColor }}/> Overview
                </h4>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                  <Database size={20} style={{ color: project.accentColor }}/> Architecture
                </h4>
                <p className="text-muted leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
                  <Code2 size={20} style={{ color: project.accentColor }}/> Challenges Solved
                </h4>
                <p className="text-muted leading-relaxed">
                  {project.challenges}
                </p>
              </div>
           </div>

           {/* Sidebar Links & Tech */}
           <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-text mb-4">Technologies</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <li key={tech} className="px-3 py-1.5 rounded-lg bg-bg/50 border border-border text-sm font-medium text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass-card text-text font-bold hover:bg-border transition-all"
                  >
                    <FaGithub size={18} /> View Source Code
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all`}
                    style={{ '--tw-shadow-color': project.accentColor }}
                  >
                    <ExternalLink size={18} /> Live Demonstration
                  </a>
                )}
              </div>
           </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-2/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-accent-1/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-accent-3 to-accent-1 mx-auto"></div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted max-w-lg mx-auto text-sm md:text-base">
              A selection of things I've built with passion. Click on a project to view detailed case studies.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
