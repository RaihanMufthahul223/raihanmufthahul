'use client';

import { motion } from 'framer-motion';
import ScratchLine from '@/components/ui/ScratchLine';
import { EASE_SHARP } from '@/lib/motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_SHARP },
  },
};

const highlights = [
  {
    icon: '◈',
    title: 'Web untuk UMKM',
    desc: 'Landing page, toko online, profil usaha - dibangun dari nol, sesuai kebutuhan klien kecil menengah.',
  },
  {
    icon: '◉',
    title: 'Aplikasi Web',
    desc: 'Dari blog sederhana sampai sistem monitoring - backend dan frontend dikerjakan sendiri.',
  },
  {
    icon: '◇',
    title: 'Eksplorasi',
    desc: 'Game di Python, analisis data, belajar runtime baru. Rasa ingin tahu yang tidak berhenti.',
  },
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
        overflow: 'hidden auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '3rem',
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
          maxWidth: '1200px',
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
          style={{ marginBottom: '0.5rem' }}
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
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: 'var(--white-off)',
            marginBottom: '2.5rem',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          PROFIL
          <ScratchLine
            width={140}
            height={20}
            color="#DC143C"
            style={{ position: 'absolute', bottom: '-6px', left: 0 }}
          />
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left — Confidant card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
          >
            <div
              style={{
                background: 'var(--black-card)',
                border: '1px solid rgba(220,20,60,0.2)',
                padding: '1.75rem',
                position: 'relative',
                clipPath:
                  'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
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

              {/* Confidant header */}
              <div style={{ marginBottom: '1.2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--crimson)',
                    marginBottom: '0.3rem',
                  }}
                >
                  Confidant Profile
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    color: 'var(--white-off)',
                    lineHeight: 1,
                  }}
                >
                  RAIHAN
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--white-dim)',
                    marginTop: '0.2rem',
                  }}
                >
                  Web Developer · Indonesia
                </div>
              </div>

              <div
                style={{
                  height: '1px',
                  background: 'rgba(255,255,255,0.08)',
                  marginBottom: '1.2rem',
                }}
              />

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  color: 'var(--white-dim)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                Saya Raihan - developer yang lebih suka membuktikan lewat kode
                daripada deskripsi diri. Sejak 2022 aktif membangun website untuk
                usaha kecil, aplikasi web fungsional, dan sesekali bongkar hal
                baru yang belum saya mengerti.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  color: 'var(--white-dim)',
                  lineHeight: 1.7,
                }}
              >
                Tidak ada kata klise di sini. Yang ada: 27 repository, beberapa
                klien nyata, dan kebiasaan bekerja sampai selesai.
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  flexWrap: 'wrap',
                }}
              >
                {[
                  { v: '27', l: 'Repos' },
                  { v: '4+', l: 'Tahun' },
                  { v: '5+', l: 'Klien' },
                ].map((s) => (
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
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Highlight cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.45, ease: EASE_SHARP }}
              >
                <div
                  style={{
                    background: 'var(--black-card)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '1.1rem 1.4rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    clipPath:
                      'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = 'rgba(220,20,60,0.3)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')
                  }
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      color: 'var(--crimson)',
                      lineHeight: 1,
                      marginTop: '0.1rem',
                      flexShrink: 0,
                    }}
                  >
                    {h.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem',
                        color: 'var(--white-off)',
                        letterSpacing: '0.05em',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {h.title}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        color: 'var(--white-dim)',
                        lineHeight: 1.6,
                      }}
                    >
                      {h.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
