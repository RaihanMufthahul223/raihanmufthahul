'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { href: '#about', label: 'Profil' },
  { href: '#skills', label: 'Skill' },
  { href: '#projects', label: 'Proyek' },
  { href: '#contact', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled
          ? 'rgba(8,8,8,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(220,20,60,0.15)'
          : '1px solid transparent',
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
        {/* Logo */}
        <Link
          href="#hero"
          id="nav-logo"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            color: 'var(--white-off)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
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
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            gap: '0.25rem',
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'var(--white-dim)',
                textDecoration: 'none',
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
                (e.currentTarget.style.color = 'var(--white-dim)')
              }
            >
              {link.label}
            </Link>
          ))}

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
              clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  color: 'var(--white-off)',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                }}
              >
                {link.label}
              </Link>
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
