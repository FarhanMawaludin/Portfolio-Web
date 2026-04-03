import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import GradientText from './GradientText';
import LogoLoop from './LogoLoop';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiPython,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
  SiVercel,
  SiDart,
  SiFlutter,
} from 'react-icons/si';

const techLogos = [
  {
    name: 'JavaScript',
    node: <SiJavascript className="text-[28px]" style={{ color: '#f7df1e' }} />,
  },
  {
    name: 'TypeScript',
    node: <SiTypescript className="text-[28px]" style={{ color: '#3178c6' }} />,
  },
  {
    name: 'React',
    node: <SiReact className="text-[28px]" style={{ color: '#61dafb' }} />,
  },
  {
    name: 'TailwindCSS',
    node: <SiTailwindcss className="text-[28px]" style={{ color: '#38bdf8' }} />,
  },
  {
    name: 'PHP',
    node: <SiPhp className="text-[28px]" style={{ color: '#777bb4' }} />,
  },
  {
    name: 'Laravel',
    node: <SiLaravel className="text-[28px]" style={{ color: '#ff2d20' }} />,
  },
  {
    name: 'Python',
    node: <SiPython className="text-[28px]" style={{ color: '#4b8bbe' }} />,
  },
  {
    name: 'HTML5',
    node: <SiHtml5 className="text-[28px]" style={{ color: '#e34f26' }} />,
  },
  {
    name: 'CSS3',
    node: <SiCss className="text-[28px]" style={{ color: '#1572b6' }} />,
  },
  {
    name: 'Git',
    node: <SiGit className="text-[28px]" style={{ color: '#f05032' }} />,
  },
  {
    name: 'GitHub',
    node: <SiGithub className="text-[28px]" style={{ color: '#ffffff' }} />,
  },
  {
    name: 'Figma',
    node: <SiFigma className="text-[28px]" style={{ color: '#f24e1e' }} />,
  },
  {
    name: 'Vite',
    node: <SiVite className="text-[28px]" style={{ color: '#646cff' }} />,
  },
  {
    name: 'Vercel',
    node: <SiVercel className="text-[28px]" style={{ color: '#ffffff' }} />,
  },
  {
    name: 'Dart',
    node: <SiDart className="text-[28px]" style={{ color: '#0175c2' }} />,
  },
  {
    name: 'Flutter',
    node: <SiFlutter className="text-[28px]" style={{ color: '#02569b' }} />,
  },
];

const SKILLS = [
  { name: 'JavaScript', level: 80, color: '#f7df1e' },
  { name: 'TypeScript', level: 72, color: '#3178c6' },
  { name: 'React', level: 78, color: '#61dafb' },
  { name: 'HTML5', level: 90, color: '#e34f26' },
  { name: 'CSS3', level: 85, color: '#1572b6' },
  { name: 'TailwindCSS', level: 82, color: '#38bdf8' },
  { name: 'PHP', level: 72, color: '#777bb4' },
  { name: 'Laravel', level: 70, color: '#ff2d20' },
  { name: 'Python', level: 65, color: '#4b8bbe' },
  { name: 'Dart', level: 45, color: '#0175c2' },     // basic
  { name: 'Flutter', level: 48, color: '#02569b' },  // basic
];

const TOOLS = [
  'VS Code',
  'Git',
  'GitHub',
  'Figma',
  'Vite',
  'npm',
  'Vercel',
  'Postman',
  'ESLint',
];

const STATS = [
  { n: '10+', label: 'Projects' },
  { n: '1+', label: 'Tahun Coding' },
  { n: '8+', label: 'Tech Stack' },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle,#FF9FFC,transparent)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: '#B19EEF' }}
            >
              Skills
            </span>
          </div>

          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-tight">
            <GradientText
              colors={['#ffffff', '#888888', '#444444']}
              animationSpeed={12}
            >
              Tech
            </GradientText>
            <span className="ml-3" style={{ color: '#1e1e1e' }}>
              Stack.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Skill bars */}
          <div>
            <p
              className="font-display font-medium text-base mb-8"
              style={{ color: '#666' }}
            >
              Proficiency Level
            </p>

            <div className="space-y-5">
              {SKILLS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-mono" style={{ color: '#999' }}>
                      {s.name}
                    </span>
                    <span className="text-xs font-mono" style={{ color: '#444' }}>
                      {s.level}%
                    </span>
                  </div>

                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${s.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: i * 0.06,
                        ease: 'easeOut',
                      }}
                      style={{
                        background: `linear-gradient(90deg, ${s.color}66, ${s.color})`,
                        boxShadow: `0 0 8px ${s.color}40`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Tools + stats */}
          <div>
            <p
              className="font-display font-medium text-base mb-8"
              style={{ color: '#666' }}
            >
              Tools & Technologies
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {TOOLS.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: i * 0.035,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className="skill-tag"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                  className="glass-card rounded-2xl p-5 text-center"
                >
                  <p className="font-display font-bold text-2xl mb-1 gradient-text-accent">
                    {s.n}
                  </p>
                  <p className="text-xs font-mono" style={{ color: '#444' }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Optional note for basic skills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-6 rounded-2xl p-4"
              style={{
                background: 'rgba(177,158,239,0.03)',
                border: '1px solid rgba(177,158,239,0.08)',
              }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                Saat ini saya juga sedang mengeksplorasi{' '}
                <span style={{ color: '#B19EEF' }}>Dart</span> dan{' '}
                <span style={{ color: '#B19EEF' }}>Flutter</span> untuk memperluas
                kemampuan di pengembangan aplikasi mobile.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div
        className="mt-20"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          fadeOut
        />
      </div>
    </section>
  );
}