interface TechBadgeProps {
  label: string;
}

const colorMap: Record<string, string> = {
  'JavaScript': 'rgba(220,20,60,0.15)',
  'TypeScript': 'rgba(220,20,60,0.15)',
  'Node.js': 'rgba(220,20,60,0.12)',
  'Express': 'rgba(220,20,60,0.10)',
  'PHP': 'rgba(255,255,255,0.07)',
  'Python': 'rgba(255,255,255,0.07)',
  'Pygame': 'rgba(255,255,255,0.07)',
  'HTML': 'rgba(220,20,60,0.10)',
  'CSS': 'rgba(220,20,60,0.10)',
  'Tailwind': 'rgba(220,20,60,0.12)',
  'Next.js': 'rgba(255,255,255,0.08)',
  'React': 'rgba(255,255,255,0.08)',
  'MySQL': 'rgba(255,255,255,0.07)',
  'Bun': 'rgba(255,255,255,0.07)',
  'Materialize': 'rgba(255,255,255,0.06)',
};

export default function TechBadge({ label }: TechBadgeProps) {
  const bg = colorMap[label] ?? 'rgba(255,255,255,0.06)';

  return (
    <span
      className="clip-badge inline-block px-3 py-0.5 text-xs font-medium tracking-wider uppercase"
      style={{
        backgroundColor: bg,
        color: 'var(--white-dim)',
        border: '1px solid rgba(255,255,255,0.1)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {label}
    </span>
  );
}
