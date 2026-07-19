'use client';

import { motion } from 'framer-motion';
import ScratchLine from '@/components/ui/ScratchLine';
import { EASE_SHARP } from '@/lib/motion';

const links = [
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'RaihanMufthahul223',
    href: 'https://github.com/RaihanMufthahul223',
    icon: '◈',
    external: true,
  },
  {
    id: 'contact-email',
    label: 'Email',
    value: 'raihanmufthahul2005@gmail.com',
    href: 'mailto:raihanmufthahul2005@gmail.com',
    icon: '◉',
    external: false,
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      aria-label="Kontak dan footer"
      style={{
        height: '100%',
        minHeight: '100svh',
        backgroundColor: 'var(--black-deep)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        borderTop: '1px solid rgba(220,20,60,0.15)',
      }}
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '3px',
          background: 'var(--crimson)',
        }}
      />

      {/* Background number */}
      <span
        className="section-num"
        aria-hidden="true"
        style={{ top: '2rem', right: '2rem' }}
      >
        005
      </span>

      {/* Halftone dots */}
      <div
        className="halftone"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, opacity: 0.2 }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        {/* Layout — asimetris */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_SHARP }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--crimson)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              — Kontak
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                color: 'var(--white-off)',
                lineHeight: 0.95,
                position: 'relative',
                display: 'inline-block',
                marginBottom: '1.5rem',
              }}
            >
              GET IN
              <br />
              TOUCH
              <ScratchLine
                width={140}
                height={20}
                color="#DC143C"
                style={{ position: 'absolute', bottom: '-4px', left: 0 }}
              />
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--white-dim)',
                lineHeight: 1.7,
                maxWidth: '380px',
                marginTop: '0.5rem',
              }}
            >
              Ada project yang ingin dikerjakan? Atau sekadar ingin tahu lebih
              lanjut? Jangan ragu — saya buka untuk obrolan singkat maupun
              kolaborasi serius.
            </p>
          </motion.div>

          {/* Right col — links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE_SHARP }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '1rem',
            }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.2rem 1.5rem',
                  background: 'var(--black-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                  clipPath:
                    'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(220,20,60,0.4)';
                  e.currentTarget.style.background = 'rgba(220,20,60,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'var(--black-card)';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    color: 'var(--crimson)',
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {link.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      color: 'var(--white-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'var(--white-off)',
                    }}
                  >
                    {link.value}
                  </div>
                </div>
                <span
                  style={{
                    marginLeft: 'auto',
                    color: 'var(--crimson)',
                    fontSize: '1rem',
                    opacity: 0.6,
                  }}
                >
                  ↗
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.8rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              color: 'rgba(168,164,158,0.3)',
              letterSpacing: '0.1em',
            }}
          >
            RAIHAN MUFTHAHUL
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(168,164,158,0.3)',
              letterSpacing: '0.08em',
            }}
          >
            © {new Date().getFullYear()} · Indonesia · Dibuat sendiri, bukan
            template.
          </span>
        </div>
      </div>
    </footer>
  );
}
