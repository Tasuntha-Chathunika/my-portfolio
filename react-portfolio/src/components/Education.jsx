import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Information and Communication Technology (Hons)",
    institution: "University of Vavuniya",
    location: "Vavuniya, Sri Lanka",
    period: "2021 – Present",
    description: "Focusing on software engineering, web development, database management, and networking. Actively involved in practical projects and seeking to apply theoretical knowledge to real-world scenarios.",
    color: 'from-neon-cyan to-neon-blue',
    accentColor: '#00d4ff',
    badge: 'Undergraduate',
  },
  {
    degree: "Secondary Education — A/L & O/L",
    institution: "Katukurunda Dharmapala M.V.",
    location: "Katukurunda, Sri Lanka",
    period: "Completed",
    description: "Completed G.C.E. Advanced Level in the Physical Science stream and G.C.E. Ordinary Level with excellent results.",
    color: 'from-neon-pink to-neon-purple',
    accentColor: '#ff2d7b',
    badge: 'Completed',
  }
];

const Education = () => {
  return (
    <section id="education" className="py-28 md:py-36 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-purple/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto"></div>
          <p className="mt-4 text-dark-muted max-w-xl mx-auto">
            Building a strong foundation in technology and computer science.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan/60 via-neon-purple/40 to-transparent pointer-events-none"></div>

          <div className="flex flex-col gap-10">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6 md:gap-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.18 }}
              >
                {/* Timeline dot with icon */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 0 24px ${item.accentColor}40` }}
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.18 + 0.2 }}
                  >
                    <GraduationCap size={22} className="text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 group glass-card p-6 md:p-8 overflow-hidden relative hover:-translate-y-1 transition-all duration-300"
                  style={{ '--accent': item.accentColor }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.accentColor + '40';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${item.accentColor}15, 0 0 0 1px ${item.accentColor}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  {/* Colorful top border */}
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${item.color}`}></div>

                  {/* Subtle bg glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at top left, ${item.accentColor}, transparent 60%)` }}
                  ></div>

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3 relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-dark-text leading-snug pr-2">{item.degree}</h3>
                    {/* Shimmer badge */}
                    <span
                      className={`self-start sm:self-auto flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r ${item.color}`}
                      style={{
                        backgroundSize: '200% auto',
                        animation: 'badge-shine 3s linear infinite',
                        boxShadow: `0 0 10px ${item.accentColor}40`,
                      }}
                    >
                      <Calendar size={11} />
                      {item.period}
                    </span>
                  </div>

                  {/* Institution + location */}
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <MapPin size={13} style={{ color: item.accentColor }} />
                    <span className="text-sm font-semibold" style={{ color: item.accentColor }}>{item.institution}</span>
                    <span className="text-dark-muted text-sm">— {item.location}</span>
                  </div>

                  <p className="text-dark-muted leading-relaxed text-sm md:text-base relative z-10">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
