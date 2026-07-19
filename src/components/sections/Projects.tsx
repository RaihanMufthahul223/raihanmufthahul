'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechBadge from '@/components/ui/TechBadge';
import ScratchLine from '@/components/ui/ScratchLine';
import { EASE_SHARP } from '@/lib/motion';

type Category = 'client' | 'webapp' | 'eksplorasi';

interface Project {
  name: string;
  slug: string;
  desc: string;
  tech: string[];
  github: string;
  category: Category;
  highlight?: boolean;
}

const projects: Project[] = [
  // Client & Business Sites
  {
    name: 'Kedai Bayyals',
    slug: 'kedai-bayyals',
    // TODO: update deskripsi jika ada yang lebih spesifik
    desc: 'Website landing page untuk kedai/kafe - menu, lokasi, dan info kontak.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RaihanMufthahul223/kedai-bayyals',
    category: 'client',
    highlight: true,
  },
  {
    name: 'ZainCake',
    slug: 'zaincake',
    // TODO: update deskripsi jika ada yang lebih spesifik
    desc: 'Website brand kue - showcase produk, katalog, dan pemesanan.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RaihanMufthahul223/zaincake',
    category: 'client',
  },
  {
    name: 'Bandung Cheesecuit',
    slug: 'bandung-cheesecuit',
    // TODO: update deskripsi jika ada yang lebih spesifik
    desc: 'Profil produk cheesecuit asal Bandung - landing page promosi.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RaihanMufthahul223/bandung-cheesecuit',
    category: 'client',
  },
  {
    name: 'Rumah Khitan Mustofa',
    slug: 'rumah-khitan-mustofa',
    // TODO: update deskripsi jika ada yang lebih spesifik
    desc: 'Website klinik khitan - profil layanan, dokter, dan informasi kontak.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RaihanMufthahul223/rumah-khitan-mustofa',
    category: 'client',
  },
  // Web Apps & Tools
  {
    name: 'Monitoring MBG',
    slug: 'monitoring-mbg',
    desc: 'Aplikasi web untuk memantau data program Makan Bergizi Gratis (MBG) secara real-time.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/RaihanMufthahul223/monitoring-mbg',
    category: 'webapp',
    highlight: true,
  },
  {
    name: 'Blogku',
    slug: 'blogku',
    desc: 'Platform blog pribadi - tulis, edit, dan publish artikel dengan antarmuka bersih.',
    tech: ['JavaScript', 'Node.js', 'Express'],
    github: 'https://github.com/RaihanMufthahul223/blogku',
    category: 'webapp',
  },
  // Eksplorasi
  {
    name: 'Killer Cowboy',
    slug: 'killercowboy',
    desc: 'Game 2D dibuat dari nol pakai Python dan Pygame. Eksperimen pertama game dev.',
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/RaihanMufthahul223/killercowboy',
    category: 'eksplorasi',
    highlight: true,
  },
  {
    name: 'SLR Project',
    slug: 'SLR_Project',
    desc: 'Analisis regresi linear sederhana (Simple Linear Regression) menggunakan Python.',
    tech: ['Python'],
    github: 'https://github.com/RaihanMufthahul223/SLR_Project',
    category: 'eksplorasi',
  },
  {
    name: 'Belajar Bun',
    slug: 'belajar-bun',
    desc: 'Eksplorasi runtime Bun - perbandingan performa, API, dan ekosistemnya.',
    tech: ['Bun', 'JavaScript'],
    github: 'https://github.com/RaihanMufthahul223/belajar-bun',
    category: 'eksplorasi',
  },
];

const categories: { id: Category; label: string }[] = [
  { id: 'client', label: 'Client Sites' },
  { id: 'webapp', label: 'Web Apps' },
  { id: 'eksplorasi', label: 'Eksplorasi' },
];

function MissionCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, skewX: -2 }}
      animate={{ opacity: 1, y: 0, skewX: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: EASE_SHARP }}
      className="mission-card"
      style={{ padding: '1.3rem' }}
    >
      {project.highlight && (
        <div
          style={{
            position: 'absolute',
            top: '0.8rem',
            right: '0.8rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            color: 'var(--crimson)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          ★ Featured
        </div>
      )}

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.35rem',
          color: 'var(--white-off)',
          letterSpacing: '0.04em',
          marginBottom: '0.4rem',
          lineHeight: 1.1,
          paddingRight: project.highlight ? '4rem' : 0,
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.84rem',
          color: 'var(--white-dim)',
          lineHeight: 1.6,
          marginBottom: '1rem',
        }}
      >
        {project.desc}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.35rem',
          marginBottom: '1.1rem',
        }}
      >
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '0.8rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            color: 'rgba(168,164,158,0.35)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {project.slug}
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          id={`project-github-${project.slug}`}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            color: 'var(--crimson)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = 'var(--white-off)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'var(--crimson)')
          }
        >
          ↗ GitHub
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('client');
  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      aria-label="Proyek"
      style={{
        height: '100%',
        minHeight: '100svh',
        backgroundColor: 'var(--black-surface)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '5rem',
      }}
    >
      {/* Background number */}
      <span
        className="section-num"
        aria-hidden="true"
        style={{ top: '2rem', right: '2rem' }}
      >
        004
      </span>

      {/* Fixed top area (label + heading + tabs) */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          flexShrink: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
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
            Misi
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 4rem)',
            color: 'var(--white-off)',
            marginBottom: '1.5rem',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          PROYEK
          <ScratchLine
            width={120}
            height={20}
            color="#DC143C"
            style={{ position: 'absolute', bottom: '-6px', left: 0 }}
          />
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          role="tablist"
          aria-label="Kategori proyek"
          style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', flexWrap: 'wrap' }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                id={`tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.4rem',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.18s ease',
                  clipPath:
                    'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
                  background: isActive
                    ? 'var(--crimson)'
                    : 'rgba(255,255,255,0.05)',
                  color: isActive ? 'var(--white-off)' : 'var(--white-dim)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Scrollable cards area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: '2rem',
          // Custom scrollbar via globals.css
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.2rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <MissionCard
                  key={project.slug}
                  project={project}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* See all */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            <a
              href="https://github.com/RaihanMufthahul223?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              id="view-all-repos-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--white-dim)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                padding: '0.7rem 1.4rem',
                border: '1px solid rgba(255,255,255,0.12)',
                clipPath:
                  'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--crimson)';
                e.currentTarget.style.color = 'var(--white-off)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = 'var(--white-dim)';
              }}
            >
              ↗ Lihat semua 27 repository di GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
