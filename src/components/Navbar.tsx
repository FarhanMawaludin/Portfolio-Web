import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // ── Scroll spy ──
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          const found = NAV_ITEMS.find((item) => item.href === `#${id}`);
          if (found) setActive(found.label);
        }
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Scroll state ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Entrance animation ──
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 z-[1000] w-full"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-8 py-4 relative">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => handleNav('Home', '#home')}
          className="text-white text-2xl font-semibold tracking-tight flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          data-cursor="hover"
        >
          <span>Han</span>
        </motion.a>

        {/* Desktop Menu */}
        <motion.nav
          className={`hidden md:flex items-center gap-1 rounded-full px-2 py-2 border transition-all duration-500 ${scrolled
              ? 'bg-white/10 backdrop-blur-xl border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
              : 'bg-white/5 backdrop-blur-md border-white/10'
            }`}
          animate={{
            y: scrolled ? 0 : 0,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => handleNav(item.label, item.href)}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 text-white/80"
              whileHover={{ color: '#ffffff' }}
              data-cursor="hover"
            >
              {active === item.label && (
                <motion.div
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition ${active === item.label ? 'text-white' : 'text-white/70'
                  }`}
              >
                {item.label}
              </span>
            </motion.button>
          ))}
        </motion.nav>

        {/* CTA Desktop */}
        <motion.a
          href="#contact"
          onClick={() => handleNav('Contact', '#contact')}
          className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${scrolled
              ? 'bg-white text-black border-white'
              : 'bg-white/10 text-white border-white/10 backdrop-blur-md'
            }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          data-cursor="hover"
        >
          Hire Me
          <span>↗</span>
        </motion.a>

        {/* Mobile Hamburger - pakai style dari navbar pertama */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-cursor="hover"
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-5 h-px bg-white"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="w-5 h-px bg-white"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="w-5 h-px bg-white"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="absolute top-full left-0 w-full px-6 mt-2 md:hidden"
            >
              <nav className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.label, item.href)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition ${active === item.label
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}

                <a
                  href="#contact"
                  onClick={() => handleNav('Contact', '#contact')}
                  className="mt-1 px-4 py-3 rounded-xl text-sm font-medium bg-white text-black text-center"
                >
                  Hire Me ↗
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}