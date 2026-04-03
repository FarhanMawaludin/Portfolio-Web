import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ICONS = [
  { label: 'TS', color: '#3178c6', bg: 'rgba(49,120,198,0.15)' },
  { label: 'JS', color: '#f7df1e', bg: 'rgba(247,223,30,0.15)' },
  { label: 'HTML', color: '#e34f26', bg: 'rgba(227,79,38,0.15)' },
  { label: 'TW', color: '#38bdf8', bg: 'rgba(56,189,248,0.15)' },
  { label: 'PHP', color: '#777bb4', bg: 'rgba(119,123,180,0.15)' },
  { label: 'LAR', color: '#ff2d20', bg: 'rgba(255,45,32,0.15)' },
  { label: 'DART', color: '#0175c2', bg: 'rgba(1,117,194,0.15)' },
  { label: 'FLTR', color: '#02569b', bg: 'rgba(2,86,155,0.15)' },
];

const TEXT = 'Welcome To My Portfolio';

export default function LoadingScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [show, setShow] = useState(true);
  const [charIdx, setCharIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [iconStep, setIconStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const t1 = setInterval(() => {
      setIconStep((prev) => (prev < ICONS.length ? prev + 1 : prev));
    }, 140);

    const t2 = setInterval(() => {
      setCharIdx((prev) => {
        if (prev >= TEXT.length) return prev;
        return prev + 1;
      });
    }, 55);

    const t3 = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + 2, 100);
      });
    }, 38);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const timeout = setTimeout(() => {
      setIsExiting(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [progress]);

  const handleExitComplete = () => {
    setShow(false);
    onFinish();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && !isExiting && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -24,
            scale: 0.985,
            transition: { duration: 0.7, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#080808' }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(177,158,239,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(177,158,239,0.5) 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Glow top */}
          <div
            className="absolute w-96 h-96 rounded-full opacity-[0.08] pointer-events-none"
            style={{
              background: 'radial-gradient(circle,#5227FF,transparent)',
              top: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              filter: 'blur(70px)',
            }}
          />

          {/* Glow bottom */}
          <div
            className="absolute w-80 h-80 rounded-full opacity-[0.05] pointer-events-none"
            style={{
              background: 'radial-gradient(circle,#FF9FFC,transparent)',
              bottom: '8%',
              right: '10%',
              filter: 'blur(80px)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-10 px-4">
            {/* Stack icons */}
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              {ICONS.map((icon, i) => (
                <motion.div
                  key={icon.label}
                  initial={{ opacity: 0, y: 24, scale: 0.7 }}
                  animate={
                    iconStep > i
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 24, scale: 0.7 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 22,
                  }}
                >
                  <div
                    className="min-w-[56px] h-14 px-3 rounded-xl flex items-center justify-center font-mono text-[10px] md:text-xs font-bold border"
                    style={{
                      background: icon.bg,
                      borderColor: `${icon.color}50`,
                      color: icon.color,
                      boxShadow:
                        iconStep > i ? `0 0 18px ${icon.color}30` : 'none',
                    }}
                  >
                    {icon.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Heading */}
            <div className="text-center">
              <h1
                className="font-display font-bold tracking-tight mb-2"
                style={{
                  fontSize: 'clamp(2rem,6vw,4.5rem)',
                  letterSpacing: '-0.02em',
                  minHeight: '1.2em',
                }}
              >
                <span
                  style={{
                    background:
                      'linear-gradient(135deg, #222222 0%, #666666 35%, #bbbbbb 65%, #ffffff 100%)',
                    backgroundSize: '100% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {TEXT.slice(0, charIdx)}
                  {charIdx < TEXT.length && (
                    <span
                      className="inline-block ml-[2px]"
                      style={{
                        WebkitTextFillColor: 'rgba(177,158,239,0.75)',
                        animation: 'blink 0.8s infinite',
                      }}
                    >
                      |
                    </span>
                  )}
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: charIdx > 6 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: '#444' }}
              >
                Preparing the experience...
              </motion.p>
            </div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-64 md:w-80 h-[2px] relative rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  style={{
                    background:
                      'linear-gradient(90deg,#5227FF,#B19EEF,#FF9FFC)',
                    boxShadow: '0 0 8px rgba(177,158,239,0.5)',
                  }}
                />
              </div>

              <span
                className="font-mono text-xs tabular-nums"
                style={{ color: '#444' }}
              >
                {String(progress).padStart(3, '0')}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}