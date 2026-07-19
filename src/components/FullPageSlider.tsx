'use client';

import { useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE_SHARP } from '@/lib/motion';

const TRANSITION_MS = 650;
const SWIPE_THRESHOLD = 50;

const slideVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? '100%' : '-100%',
  }),
  center: {
    y: 0,
  },
  exit: (dir: number) => ({
    y: dir > 0 ? '-30%' : '30%',
    opacity: 0,
    scale: 0.98,
  }),
};

interface FullPageSliderProps {
  sections: React.ReactNode[];
  currentSection: number;
  direction: number;
  onNavigate: (index: number) => void;
}

export default function FullPageSlider({
  sections,
  currentSection,
  direction,
  onNavigate,
}: FullPageSliderProps) {
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  const navigate = useCallback(
    (dir: number) => {
      if (isAnimating.current) return;
      const next = currentSection + dir;
      if (next < 0 || next >= sections.length) return;
      isAnimating.current = true;
      onNavigate(next);
      setTimeout(() => {
        isAnimating.current = false;
      }, TRANSITION_MS + 50);
    },
    [currentSection, sections.length, onNavigate],
  );

  // Attach event listeners (non-passive wheel for preventDefault)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If inside a scrollable element that can still scroll, don't intercept
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        const ov = window.getComputedStyle(el).overflowY;
        if (ov === 'auto' || ov === 'scroll') {
          const canDown =
            e.deltaY > 0 &&
            el.scrollTop < el.scrollHeight - el.clientHeight - 2;
          const canUp = e.deltaY < 0 && el.scrollTop > 2;
          if (canDown || canUp) return;
          break;
        }
        el = el.parentElement;
      }
      e.preventDefault();
      if (e.deltaY > 0) navigate(1);
      else if (e.deltaY < 0) navigate(-1);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        navigate(1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        navigate(-1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      navigate(delta > 0 ? 1 : -1);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate]);

  return (
    <>
      {/* Slider viewport */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSection}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: TRANSITION_MS / 1000,
              ease: EASE_SHARP,
            }}
            style={{
              position: 'absolute',
              inset: 0,
              willChange: 'transform',
            }}
          >
            {sections[currentSection]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots — right side */}
      <nav
        aria-label="Navigasi section"
        style={{
          position: 'fixed',
          right: '1.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.55rem',
          zIndex: 200,
        }}
      >
        {sections.map((_, i) => {
          const isActive = i === currentSection;
          return (
            <button
              key={i}
              aria-label={`Section ${i + 1}`}
              id={`dot-nav-${i}`}
              onClick={() => onNavigate(i)}
              style={{
                width: isActive ? '22px' : '7px',
                height: '7px',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                background: isActive
                  ? 'var(--crimson)'
                  : 'rgba(255,255,255,0.2)',
                clipPath:
                  'polygon(2px 0, 100% 0, calc(100% - 2px) 100%, 0 100%)',
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          );
        })}
      </nav>

      {/* Section counter — bottom left */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '2rem',
          zIndex: 200,
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.25rem',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            color: 'var(--crimson)',
          }}
        >
          {String(currentSection + 1).padStart(2, '0')}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            color: 'rgba(168,164,158,0.3)',
          }}
        >
          / {String(sections.length).padStart(2, '0')}
        </span>
      </div>
    </>
  );
}
