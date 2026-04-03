import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import PixelBlast from './PixelBlast';
import GradientText from './GradientText';
import RotatingText from './rotating-text';
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
    node: <SiJavascript className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#f7df1e' }} />,
  },
  {
    name: 'TypeScript',
    node: <SiTypescript className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#3178c6' }} />,
  },
  {
    name: 'React',
    node: <SiReact className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#61dafb' }} />,
  },
  {
    name: 'TailwindCSS',
    node: <SiTailwindcss className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#38bdf8' }} />,
  },
  {
    name: 'PHP',
    node: <SiPhp className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#777bb4' }} />,
  },
  {
    name: 'Laravel',
    node: <SiLaravel className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#ff2d20' }} />,
  },
  {
    name: 'Python',
    node: <SiPython className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#4b8bbe' }} />,
  },
  {
    name: 'HTML5',
    node: <SiHtml5 className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#e34f26' }} />,
  },
  {
    name: 'CSS3',
    node: <SiCss className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#1572b6' }} />,
  },
  {
    name: 'Git',
    node: <SiGit className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#f05032' }} />,
  },
  {
    name: 'GitHub',
    node: <SiGithub className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#ffffff' }} />,
  },
  {
    name: 'Figma',
    node: <SiFigma className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#f24e1e' }} />,
  },
  {
    name: 'Vite',
    node: <SiVite className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#646cff' }} />,
  },
  {
    name: 'Vercel',
    node: <SiVercel className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#ffffff' }} />,
  },
  {
    name: 'Dart',
    node: <SiDart className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#0175c2' }} />,
  },
  {
    name: 'Flutter',
    node: <SiFlutter className="text-[22px] sm:text-[24px] md:text-[28px]" style={{ color: '#02569b' }} />,
  },
];

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    if (badgeRef.current) {
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }

    if (headingRef.current) {
      const lines = headingRef.current.querySelectorAll('.hero-line');
      tl.fromTo(
        lines,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.15'
      );
    }

    if (subRef.current) {
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
        '-=0.3'
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.25'
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24 pt-24 sm:pt-28 md:pt-32"
    >
      {/* Background FX */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          color="#B19EEF"
          pixelSize={4}
          speed={0.5}
          enableRipples
          rippleSpeed={0.4}
        />
      </div>

      {/* Dark radial overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(8,8,8,0.18) 0%, rgba(8,8,8,0.86) 65%, #080808 100%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 md:h-48 z-[1]"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }}
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10 min-h-[calc(100svh-5.5rem)] md:min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto w-full pb-20 sm:pb-24 md:pb-28">
          {/* Badge */}
          <div ref={badgeRef} className="opacity-0 flex justify-center mb-4 sm:mb-5 md:mb-6">
            <div
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] md:text-xs font-mono"
              style={{
                background: 'rgba(177,158,239,0.08)',
                border: '1px solid rgba(177,158,239,0.2)',
                color: '#B19EEF',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#B19EEF',
                  boxShadow: '0 0 6px #B19EEF',
                  animation: 'pulse 2s infinite',
                  display: 'inline-block',
                }}
              />
              Open to Learn & Collaborate
            </div>
          </div>

          {/* Heading Block */}
          <div className="mb-5 sm:mb-6 md:mb-7">
            <h1
              ref={headingRef}
              className="font-display font-bold tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2rem, 8vw, 6.25rem)' }}
            >
              <span className="hero-line block opacity-0 text-zinc-300 mb-2 sm:mb-3">
                Hi I’m <span className="text-white">Farhan</span>,
              </span>

              <span className="hero-line flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 opacity-0">
                <RotatingText
                  texts={['Fullstack', 'Frontend', 'Mobile']}
                  mainClassName="inline-flex overflow-hidden py-1 text-white"
                  staggerFrom="last"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
                <span
                  className="inline-block"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(177,158,239,0.45)',
                  }}
                >
                  Developer
                </span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            ref={subRef}
            className="opacity-0 mx-auto mb-8 sm:mb-9 md:mb-10 max-w-[360px] sm:max-w-[540px] md:max-w-[680px] lg:max-w-[760px] px-3 sm:px-4 text-[14px] sm:text-[15px] md:text-lg lg:text-xl leading-7 sm:leading-8 md:leading-9 text-center"
            style={{ color: '#8a8a8a' }}
          >
            I build real-world web applications that solve problems and deliver value.
            <br className="hidden sm:block" /> With experience in fullstack development,
            I focus on creating{' '}
            <GradientText
              colors={['#B19EEF', '#5227FF', '#FF9FFC']}
              animationSpeed={4}
            >
              scalable systems
            </GradientText>
            , intuitive interfaces, and seamless integrations.
            <br className="hidden md:block" /> I enjoy turning ideas into reliable digital
            products while continuously improving my skills every single day.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm font-display text-white"
              style={{
                background: 'linear-gradient(135deg, #5227FF, #B19EEF)',
                boxShadow: '0 0 30px rgba(82,39,255,0.3)',
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 45px rgba(82,39,255,0.45)',
              }}
              whileTap={{ scale: 0.98 }}
              data-cursor="hover"
            >
              View Projects ↗
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm font-display"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#aaa',
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              data-cursor="hover"
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Optional breathing space instead of empty scroll indicator */}
          <div className="mt-10 sm:mt-12 md:mt-14" />
        </div>
      </div>

      {/* Bottom Marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="left"
          logoHeight={38}
          gap={24}
          hoverSpeed={0}
          fadeOut
        />
      </div>
    </section>
  );
}