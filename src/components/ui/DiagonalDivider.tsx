interface DiagonalDividerProps {
  direction?: 'top' | 'bottom';
  fromColor?: string;
  toColor?: string;
}

export default function DiagonalDivider({
  direction = 'bottom',
  fromColor = 'var(--black-deep)',
  toColor = 'var(--black-surface)',
}: DiagonalDividerProps) {
  const points =
    direction === 'bottom'
      ? '0,0 100,0 100,100 0,60'
      : '0,40 100,0 100,100 0,100';

  return (
    <div
      aria-hidden="true"
      style={{ lineHeight: 0, margin: 0, padding: 0, display: 'block' }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '64px', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`dg-${direction}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <polygon
          points={points}
          fill={`url(#dg-${direction})`}
        />
      </svg>
    </div>
  );
}
