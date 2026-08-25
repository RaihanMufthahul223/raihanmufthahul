'use client';

import { motion } from 'framer-motion';
import ScratchLine from '@/components/ui/ScratchLine';
import { EASE_SHARP } from '@/lib/motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_SHARP } },
};

const stats = [
  { v: '27+', l: 'Repositori' },
  { v: '4+', l: 'Tahun' },
  { v: '5+', l: 'Klien' },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="Tentang Raihan"
      style={{
        height: '100%',
        minHeight: '100svh',
        backgroundColor: 'var(--black-surface)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Background number */}
      <span
        className="section-num"
        aria-hidden="true"
        style={{ top: '2rem', right: '2rem' }}
      >
        002
      </span>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
        }}
      >
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{ marginBottom: '0.25rem' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--crimson)',
            }}
          >
            Tentang
          </span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.05 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--white-off)',
            marginBottom: '1.25rem',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          PROFIL
          <ScratchLine
            width={100}
            height={16}
            color="#DC143C"
            style={{ position: 'absolute', bottom: '-4px', left: 0 }}
          />
        </motion.h2>

        {/* Compact Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          style={{
            background: 'var(--black-card)',
            border: '1px solid rgba(220,20,60,0.2)',
            padding: '1.5rem',
            position: 'relative',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)',
          }}
        >
          {/* Card accent top */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'var(--crimson)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Text Content */}
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ marginBottom: '0.8rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: 'var(--white-off)',
                    lineHeight: 1,
                    marginBottom: '0.2rem',
                  }}
                >
                  RAIHAN MUFTHAHUL
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--crimson)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Web Developer · Indonesia
                </p>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--white-dim)',
                  lineHeight: 1.6,
                  marginBottom: '0.5rem',
                }}
              >
                Fokus pada pengembangan website UMKM dan aplikasi web fungsional yang berorientasi pada hasil dan performa. Aktif menulis kode sejak 2022.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--white-dim)',
                  lineHeight: 1.6,
                }}
              >
                Lebih suka membuktikan lewat kode daripada sekadar kata-kata. Menangani beragam klien nyata dan selalu berkomitmen penuh menyelesaikan setiap project.
              </p>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                background: 'rgba(255,255,255,0.02)',
                padding: '1rem',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {stats.map((s) => (
                <div key={s.l}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      color: 'var(--crimson)',
                      lineHeight: 1,
                    }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      color: 'var(--white-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      marginTop: '0.2rem',
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
