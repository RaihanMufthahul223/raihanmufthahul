'use client';

import { motion } from 'framer-motion';
import ScratchLine from '@/components/ui/ScratchLine';
import SkewButton from '@/components/ui/SkewButton';
import { EASE_SHARP } from '@/lib/motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32, skewX: -4 },
  show: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: { duration: 0.45, ease: EASE_SHARP },
  },
};

const lineVariant = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.5, delay: 0.2, ease: EASE_SHARP },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero - Raihan Mufthahul"
      style={{
        height: '100%',
        minHeight: '100svh',
        backgroundColor: 'var(--black-deep)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Halftone background dots */}
      <div
        className="halftone"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, opacity: 0.4 }}
      />

      {/* Large decorative number */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-1rem',
          top: '50%',
          transform: 'translateY(-60%) rotate(90deg)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          color: 'rgba(220,20,60,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.02em',
        }}
      >
        001
      </span>

      {/* Red diagonal accent block */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '6px',
          background: 'var(--crimson)',
          clipPath: 'polygon(8px 0, 100% 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Left red vertical line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '2rem',
          top: 0,
          bottom: 0,
          width: '2px',
          background:
            'linear-gradient(to bottom, transparent, var(--crimson) 30%, var(--crimson) 70%, transparent)',
          opacity: 0.3,
        }}
      />

      {/* Main content */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '5rem 2rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Tag line above name */}
          <motion.div variants={item} style={{ marginBottom: '1.2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--crimson)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '32px',
                  height: '2px',
                  background: 'var(--crimson)',
                }}
              />
              Web Developer · Indonesia
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              lineHeight: 0.9,
              color: 'var(--white-off)',
              position: 'relative',
              display: 'inline-block',
            }}
          >
            RAIHAN
            <br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--white-off)',
              }}
            >
              MUFTHAHUL
            </span>

            <ScratchLine
              width={200}
              height={28}
              color="#DC143C"
              style={{ position: 'absolute', bottom: '-8px', left: '0' }}
            />
          </motion.h1>

          {/* Red underline animated */}
          <motion.div
            variants={lineVariant}
            style={{
              height: '3px',
              background: 'var(--crimson)',
              width: '50%',
              maxWidth: '400px',
              marginTop: '1rem',
              marginBottom: '1.8rem',
            }}
          />

          {/* Tagline */}
          <motion.p
            variants={item}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--white-dim)',
              maxWidth: '480px',
              lineHeight: 1.6,
              marginBottom: '2.4rem',
            }}
          >
            Bikin website yang nyata - untuk usaha kecil, aplikasi web, dan ide
            yang butuh wujud digital.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <SkewButton
              href="https://github.com/RaihanMufthahul223"
              variant="primary"
              external
              id="hero-github-btn"
            >
              ↗ GitHub
            </SkewButton>
            <SkewButton href="#contact" variant="outline" id="hero-contact-btn">
              Hubungi
            </SkewButton>
          </motion.div>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          style={{
            marginTop: '5rem',
            display: 'flex',
            gap: '3rem',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.5rem',
          }}
        >
          {[
            { label: 'Repository', value: '27+' },
            { label: 'Aktif sejak', value: '2022' },
            { label: 'Stack utama', value: 'JS · PHP · Python' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  color: 'var(--white-off)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  color: 'var(--white-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginTop: '0.25rem',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom diagonal cut */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'var(--black-surface)',
          clipPath: 'polygon(0 100%, 100% 40%, 100% 100%)',
        }}
      />
    </section>
  );
}
