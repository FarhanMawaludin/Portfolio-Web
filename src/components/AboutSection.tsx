import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import GradientText from './GradientText';

gsap.registerPlugin(ScrollTrigger);

const INFO = [
  { label: 'Nama', value: 'Farhan Mawaludin' },
  { label: 'Gender', value: 'Laki-laki' },
  { label: 'Pendidikan', value: 'Mahasiswa' },
  { label: 'Status', value: 'College Student' },
  { label: 'Location', value: 'Indonesia' },
  { label: 'Role', value: 'Fullstack Developer' },
];

const USE_VIDEO = false;
const MEDIA_SRC = USE_VIDEO ? '/video.mp4' : '/profile.png';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // hanya sync height di desktop besar
  const [cardH, setCardH] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!rightRef.current) return;

    const syncHeight = () => {
      if (!rightRef.current) return;

      // hanya aktif di desktop (lg ke atas)
      if (window.innerWidth >= 1024) {
        setCardH(rightRef.current.offsetHeight);
      } else {
        setCardH(undefined);
      }
    };

    syncHeight();

    const ro = new ResizeObserver(syncHeight);
    ro.observe(rightRef.current);

    window.addEventListener('resize', syncHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncHeight);
    };
  }, [isInView]);

  useEffect(() => {
    if (!rightRef.current) return;

    const items = rightRef.current.querySelectorAll('.ic');

    const anim = gsap.fromTo(
      items,
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.055,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 82%',
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle,#5227FF,transparent)',
          filter: 'blur(90px)',
          opacity: 0.05,
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-12 lg:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span
              className="text-[10px] sm:text-xs font-mono tracking-[0.22em] uppercase"
              style={{ color: '#B19EEF' }}
            >
              About
            </span>
          </div>

          <h2 className="font-display font-bold tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <GradientText
              colors={['#ffffff', '#888888', '#444444']}
              animationSpeed={12}
            >
              A bit about
            </GradientText>
            <br />
            <span style={{ color: '#1e1e1e' }}>myself.</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,340px)_1fr] xl:grid-cols-[340px_1fr] gap-8 md:gap-10 lg:gap-12 items-start">
          {/* LEFT: 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none mx-auto lg:mx-0"
            style={{
              height: cardH ?? undefined,
            }}
          >
            <div
              className="w-full lg:h-full"
              style={{
                aspectRatio: cardH ? undefined : '4 / 5',
                minHeight: cardH ? undefined : 420,
                maxHeight: cardH ? undefined : 560,
              }}
            >
              <TiltCard
                src={MEDIA_SRC}
                isVideo={USE_VIDEO}
                alt="Farhan"
                style={{ width: '100%', height: '100%' }}
              >
                <div
                  className="relative w-full h-full flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(170deg,#0d0d1a 0%,#1a1a2e 50%,#0f0f22 100%)',
                  }}
                >
                  <div
                    className="absolute -top-20 -right-20 w-56 h-56 sm:w-64 sm:h-64 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle,#B19EEF,transparent)',
                      opacity: 0.1,
                    }}
                  />
                  <div
                    className="absolute -bottom-20 -left-20 w-56 h-56 sm:w-64 sm:h-64 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle,#5227FF,transparent)',
                      opacity: 0.1,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center gap-4 text-center px-5 sm:px-6">
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl"
                      style={{
                        background: 'rgba(177,158,239,0.1)',
                        border: '1.5px solid rgba(177,158,239,0.22)',
                        boxShadow: '0 0 36px rgba(82,39,255,0.22)',
                      }}
                    >
                      👨‍💻
                    </div>

                    <div>
                      <p className="font-display font-bold text-white text-base sm:text-lg">
                        Farhan
                      </p>
                      <p
                        className="font-mono text-[11px] sm:text-xs mt-1"
                        style={{ color: '#B19EEF' }}
                      >
                        Fullstack Developer
                      </p>
                    </div>

                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            background:
                              i <= 5 ? '#B19EEF' : 'rgba(177,158,239,0.18)',
                          }}
                        />
                      ))}
                    </div>

                    <p
                      className="text-[10px] sm:text-xs font-mono break-all"
                      style={{ color: '#2a2a2a' }}
                    >
                      {USE_VIDEO ? 'public/video.mp4' : 'public/profile.png'}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>

          {/* RIGHT: Text + Info + Quote */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col gap-6 sm:gap-7"
          >
            {/* Intro text */}
            <div className="flex flex-col gap-4 max-w-3xl">
              <p
                className="text-base sm:text-lg md:text-xl leading-8 sm:leading-9"
                style={{ color: '#888' }}
              >
                Halo! Saya{' '}
                <GradientText
                  colors={['#B19EEF', '#5227FF', '#FF9FFC']}
                  animationSpeed={5}
                >
                  Farhan
                </GradientText>
                , seorang mahasiswa dari Indonesia yang memiliki passion di dunia
                web development, software engineering, dan teknologi modern.
              </p>

              <p
                className="text-sm sm:text-base leading-7 sm:leading-8 max-w-2xl"
                style={{ color: '#555' }}
              >
                Saya fokus membangun aplikasi web yang tidak hanya menarik secara
                visual, tetapi juga memiliki struktur yang scalable, maintainable,
                dan memberikan value nyata. Saya terus mengembangkan skill di
                bidang JavaScript, TypeScript, React, Node.js, serta fullstack
                development untuk menciptakan produk digital yang relevan dan
                impactful.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INFO.map((item) => (
                <div
                  key={item.label}
                  className="ic glass-card glass-card-hover rounded-2xl p-4 sm:p-4.5 opacity-0 min-h-[84px] flex items-center"
                >
                  <div className="w-full">
                    <p
                      className="text-[11px] sm:text-xs font-mono mb-1 tracking-wide"
                      style={{ color: '#444' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-display font-semibold text-sm sm:text-[15px] leading-5 break-words"
                      style={{ color: '#ccc' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="p-4 sm:p-5 rounded-2xl"
              style={{
                background: 'rgba(177,158,239,0.03)',
                border: '1px solid rgba(177,158,239,0.09)',
              }}
            >
              <p
                className="text-sm sm:text-[15px] leading-7 italic"
                style={{ color: '#555' }}
              >
                "Setiap baris kode yang saya tulis adalah langkah kecil untuk
                membangun masa depan yang lebih besar."
              </p>

              <div className="mt-3 flex items-center gap-2">
                <div
                  className="w-5 h-px"
                  style={{ background: 'rgba(177,158,239,0.35)' }}
                />
                <span className="text-[11px] sm:text-xs font-mono" style={{ color: '#B19EEF' }}>
                  Developer Motto
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}