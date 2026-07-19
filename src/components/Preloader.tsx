'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const LOADING_TEXT = 'NOW  LOADING';
const STRIPS = 6;

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>('loading');

  useEffect(() => {
    const FILL_DURATION = 1500;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const p = Math.min((now - start) / FILL_DURATION, 1);
      setProgress(p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // Brief pause at 100%, then start exit
        setTimeout(() => {
          setPhase('exiting');
          // onComplete after all strips finish sliding out
          // Last strip: delay = 0.1 + (STRIPS-1)*0.05 + duration 0.42 ≈ 0.77s
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 850);
        }, 250);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        backgroundColor: '#080808',
        pointerEvents: phase === 'exiting' ? 'none' : 'all',
      }}
    >
      {/* ── Exit strips (horizontal blinds) ── */}
      {Array.from({ length: STRIPS }).map((_, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={
              phase === 'exiting'
                ? { x: isEven ? '110%' : '-110%' }
                : { x: 0 }
            }
            transition={{
              duration: 0.42,
              delay: phase === 'exiting' ? 0.1 + i * 0.05 : 0,
              ease: [0.25, 0, 0, 1],
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: `${(i / STRIPS) * 100}%`,
              height: `${100 / STRIPS + 0.3}%`, // tiny overlap prevents seam
              backgroundColor: '#080808',
              zIndex: 2,
            }}
          />
        );
      })}

      {/* ── Red accent bars ── */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '4px',
          background: 'var(--crimson)',
          transformOrigin: 'left',
          zIndex: 3,
        }}
      />
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '2px',
          background: 'rgba(220,20,60,0.4)',
          transformOrigin: 'right',
          zIndex: 3,
        }}
      />

      {/* ── Halftone pattern ── */}
      <div
        className="halftone"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 1 }}
      />

      {/* ── Content layer ── */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
        animate={phase === 'exiting' ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.18 }}
      >
        {/* Large background "001" */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            position: 'absolute',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(8rem, 22vw, 18rem)',
            color: 'rgba(220,20,60,0.05)',
            userSelect: 'none',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            pointerEvents: 'none',
          }}
        >
          001
        </motion.div>

        {/* Red left slash decorator */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{
            position: 'absolute',
            left: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3px',
            height: '30%',
            background:
              'linear-gradient(to bottom, transparent, var(--crimson), transparent)',
          }}
        />

        {/* Main text + bar */}
        <div style={{ position: 'relative', textAlign: 'center' }}>
          {/* "NOW LOADING" — letter stagger */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              gap: '0.02em',
            }}
          >
            {LOADING_TEXT.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.045,
                  duration: 0.35,
                  ease: 'easeOut',
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                  color: char === ' ' ? 'transparent' : 'var(--white-off)',
                  letterSpacing: '0.12em',
                  display: 'inline-block',
                  minWidth: char === ' ' ? '0.4em' : undefined,
                  lineHeight: 1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Progress bar track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              width: 'min(420px, 80vw)',
              height: '6px',
              background: 'rgba(255,255,255,0.08)',
              clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
              position: 'relative',
              overflow: 'hidden',
              margin: '0 auto',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #A50E2D, #DC143C)',
                clipPath:
                  'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
                transformOrigin: 'left',
                scaleX: progress,
              }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              color: 'var(--crimson)',
              marginTop: '0.6rem',
              letterSpacing: '0.1em',
            }}
          >
            {Math.round(progress * 100)}%
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              color: 'rgba(168,164,158,0.35)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Raihan Mufthahul Portfolio
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              color: 'rgba(220,20,60,0.4)',
              letterSpacing: '0.08em',
            }}
          >
            v1.0
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
