import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaJava, FaFigma, FaPalette, FaCut, FaVideo,
  FaAws
} from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiMysql, SiMongodb, SiPostgresql } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { BsCCircleFill } from "react-icons/bs";
import { Code2, Brush, Cloud, Database } from 'lucide-react';
import Reveal from './Reveal';

const programmingSkills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', mastery: 5 },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#2965f1', mastery: 5 },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e', mastery: 4 },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06b6d4', mastery: 5 },
  { name: 'React', icon: <FaReact />, color: '#61dafb', mastery: 4 },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', mastery: 3 },
  { name: 'C', icon: <BsCCircleFill />, color: '#555555', mastery: 4 },
  { name: 'C++', icon: <SiCplusplus />, color: '#00599c', mastery: 3 },
  { name: 'C#', icon: <TbBrandCSharp />, color: '#68217a', mastery: 3 },
  { name: 'Java', icon: <FaJava />, color: '#ec2025', mastery: 3 },
  { name: 'Three.js', icon: <span className="font-extrabold text-lg font-display">3D</span>, color: 'var(--theme-text)', mastery: 3 },
  { name: 'p5.js', icon: <span className="font-extrabold text-lg font-display">p5</span>, color: '#ed225d', mastery: 3 },
];

const databaseSkills = [
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', mastery: 4 },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', mastery: 3 },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', mastery: 3 },
];

const cloudSkills = [
  { name: 'AWS', icon: <FaAws />, color: '#ff9900', mastery: 2 },
  { name: 'Azure', icon: <span className="font-extrabold text-sm font-display">Az</span>, color: '#0089d6', mastery: 2 },
];

const designSkills = [
  { name: 'Photoshop', icon: <FaPalette />, color: '#31a8ff', mastery: 4 },
  { name: 'Illustrator', icon: <FaPalette />, color: '#ff9a00', mastery: 4 },
  { name: 'CapCut', icon: <FaCut />, color: 'var(--theme-text)', mastery: 4 },
  { name: 'Figma', icon: <FaFigma />, color: '#f24e1e', mastery: 5 },
];

const MasteryDots = ({ mastery, color }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((dot) => (
      <motion.div
        key={dot}
        className="w-1.5 h-1.5 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: dot * 0.05, duration: 0.3, type: 'spring' }}
        style={{
          backgroundColor: dot <= mastery ? color : 'var(--theme-border)',
          boxShadow: dot <= mastery ? `0 0 6px ${color}80` : 'none',
        }}
      />
    ))}
  </div>
);

const SkillCard = ({ skill, index }) => (
  <div className="skill-card-wrapper">
    <motion.div
      className="group relative glass-card p-5 flex flex-col items-center justify-center gap-3 cursor-default overflow-hidden transition-all duration-300"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      style={{ '--icon-color': skill.color }}
    >
      {/* Hover glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-400 rounded-2xl"
        style={{ backgroundColor: skill.color }}
      ></div>

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${skill.color}15 0%, transparent 70%)`,
        }}
      ></div>

      {/* Icon */}
      <motion.div
        className="text-3xl md:text-4xl relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: skill.color }}
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        {skill.icon}
      </motion.div>

      {/* Name */}
      <span className="font-semibold text-xs text-muted group-hover:text-text transition-colors relative z-10">
        {skill.name}
      </span>

      {/* Mastery Dots */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
        <MasteryDots mastery={skill.mastery} color={skill.color} />
      </div>
    </motion.div>
  </div>
);

const SectionLabel = ({ icon, label, color, gradientClass }) => (
  <Reveal direction="left" delay={0.1}>
    <div className="flex items-center gap-3 mb-6">
      <motion.div
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${gradientClass}`}
        style={{ boxShadow: `0 0 16px ${color}40` }}
        whileHover={{ scale: 1.05 }}
      >
        {icon}
        {label}
      </motion.div>
      <div className="flex-1 h-px bg-gradient-to-r from-accent-1/20 to-transparent"></div>
    </div>
  </Reveal>
);

const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-36 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-1/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-3/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-accent-2 to-accent-1 mx-auto"></div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted max-w-lg mx-auto text-sm md:text-base">
              Hover over a card to see my mastery level. ✦
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-14">

          {/* Development */}
          <div>
            <SectionLabel
              icon={<Code2 size={15} />}
              label="Development"
              color="var(--theme-accent-3)"
              gradientClass="from-accent-3 to-accent-1"
            />
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {programmingSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Database */}
          <div>
            <SectionLabel
              icon={<Database size={15} />}
              label="Database"
              color="#47a248"
              gradientClass="from-[#47a248] to-[#336791]"
            />
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {databaseSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div>
            <SectionLabel
              icon={<Cloud size={15} />}
              label="Cloud"
              color="#ff9900"
              gradientClass="from-[#ff9900] to-[#0089d6]"
            />
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {cloudSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Design */}
          <div>
            <SectionLabel
              icon={<Brush size={15} />}
              label="Design & Creative"
              color="var(--theme-accent-2)"
              gradientClass="from-accent-2 to-accent-1"
            />
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {designSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
