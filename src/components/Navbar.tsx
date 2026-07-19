'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
  currentSection: number;
  onNavigate: (index: number) => void;
  style?: React.CSSProperties;
}

const navLinks = [
  { index: 1, label: 'Profil', id: 'nav-profil' },
  { index: 2, label: 'Skill', id: 'nav-skill' },
  { index: 3, label: 'Proyek', id: 'nav-proyek' },
  { index: 4, label: 'Kontak', id: 'nav-kontak' },
];

export default function Navbar({ currentSection, onNavigate, style }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // With full-page slider, we still track if user has left the first section
  useEffect(() => {
    setScrolled(currentSection > 0);
  }, [currentSection]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(220,20,60,0.15)'
          : '1px solid transparent',
        ...style,
      }}
    >
      <nav
        aria-label="Navigasi utama"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo — click goes to Hero (section 0) */}
        <button
          id="nav-logo"
          onClick={() => onNavigate(0)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            color: 'var(--white-off)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.08em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: 0,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              background: 'var(--crimson)',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            }}
          />
          RM
        </button>

        {/* Desktop links */}
        <div
          style={{ display: 'flex', gap: '0.25rem' }}
          className="nav-desktop"
        >
          {navLinks.map((link) => {
            const isActive = currentSection === link.index;
            return (
              <button
                key={link.index}
                id={link.id}
                onClick={() => onNavigate(link.index)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: isActive ? 'var(--white-off)' : 'var(--white-dim)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '0.4rem 0.8rem',
                  transition: 'color 0.15s',
                  position: 'relative',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--white-off)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive
                    ? 'var(--white-off)'
                    : 'var(--white-dim)')
                }
              >
                {link.label}
                {/* Active underline */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0.8rem',
                      right: '0.8rem',
                      height: '2px',
                      background: 'var(--crimson)',
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                )}
              </button>
            );
          })}

          {/* GitHub CTA */}
          <a
            href="https://github.com/RaihanMufthahul223"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--white-off)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              padding: '0.35rem 1rem',
              background: 'var(--crimson)',
              marginLeft: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              clipPath:
                'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            ↗ GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          id="nav-mobile-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="nav-hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--white-off)',
                transition: 'transform 0.2s, opacity 0.2s',
                transform:
                  menuOpen && i === 0
                    ? 'translateY(7px) rotate(45deg)'
                    : menuOpen && i === 2
                      ? 'translateY(-7px) rotate(-45deg)'
                      : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            style={{
              background: 'rgba(8,8,8,0.97)',
              borderBottom: '1px solid rgba(220,20,60,0.2)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <button
              onClick={() => { onNavigate(0); setMenuOpen(false); }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                color: 'var(--white-off)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.1em',
                textAlign: 'left',
                padding: 0,
              }}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.index}
                onClick={() => { onNavigate(link.index); setMenuOpen(false); }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: currentSection === link.index ? 'var(--crimson)' : 'var(--white-off)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.1em',
                  textAlign: 'left',
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/RaihanMufthahul223"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--crimson)',
                textDecoration: 'none',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '0.5rem',
              }}
            >
              ↗ GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
