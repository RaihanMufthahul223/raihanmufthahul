'use client';

import { motion } from 'framer-motion';
import ScratchLine from '@/components/ui/ScratchLine';
import { EASE_SHARP } from '@/lib/motion';

interface Skill {
  name: string;
  level: number;
  sublabel: string;
}

const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 85, sublabel: 'Frontend & Backend' },
  { name: 'HTML & CSS', level: 90, sublabel: 'Termasuk Tailwind & Materialize CSS' },
  { name: 'Node.js & Express', level: 78, sublabel: 'REST API, server-side logic' },
  { name: 'PHP', level: 72, sublabel: 'Server-side, CMS' },
  { name: 'Python', level: 65, sublabel: 'Game (Pygame), Data Science (regresi)' },
  { name: 'Next.js / React', level: 75, sublabel: 'App Router, SSR, SSG' },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: EASE_SHARP }}
      style={{ marginBottom: '1.4rem' }}
    >
      {/* Skill header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '0.35rem',
          gap: '0.5rem',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              color: 'var(--white-off)',
              letterSpacing: '0.06em',
              display: 'block',
              lineHeight: 1.1,
            }}
          >
            {skill.name}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              color: 'var(--white-dim)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            {skill.sublabel}
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            color: 'var(--crimson)',
            flexShrink: 0,
          }}
        >
          {skill.level}
        </span>
      </div>

      {/* Track */}
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: skill.level / 100 }}
          transition={{
            duration: 0.75,
            delay: index * 0.08 + 0.2,
            ease: EASE_SHARP,
          }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* Tick marks */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '3px',
        }}
      >
        {[0, 25, 50, 75, 100].map((t) => (
          <span
            key={t}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              color:
                t <= skill.level
                  ? 'var(--crimson)'
                  : 'rgba(255,255,255,0.15)',
            }}
          >
            |
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      style={{
        height: '100%',
        minHeight: '100svh',
        backgroundColor: 'var(--black-deep)',
        position: 'relative',
        overflow: 'hidden auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Background accent line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--crimson)',
          opacity: 0.5,
        }}
      />

      {/* Background number */}
      <span
        className="section-num"
        aria-hidden="true"
        style={{ top: '2rem', right: '2rem' }}
      >
        003
      </span>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
        }}
      >
        {/* Label */}
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
            — Stats
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: 'var(--white-off)',
            marginBottom: '2.5rem',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          SKILL &amp; STAT
          <ScratchLine
            width={160}
            height={20}
            color="#DC143C"
            style={{ position: 'absolute', bottom: '-6px', left: 0 }}
          />
        </motion.h2>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0 4rem',
          }}
        >
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'rgba(168,164,158,0.5)',
            marginTop: '0.75rem',
            letterSpacing: '0.06em',
          }}
        >
          * Angka adalah estimasi kompetensi relatif, bukan sertifikasi resmi.
        </motion.p>
      </div>
    </section>
  );
}
