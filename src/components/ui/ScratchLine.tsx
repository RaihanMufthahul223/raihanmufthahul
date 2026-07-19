interface ScratchLineProps {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function ScratchLine({
  width = 120,
  height = 24,
  color = '#DC143C',
  style,
  className,
}: ScratchLineProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`scratch-line ${className ?? ''}`}
      style={style}
    >
      {/* Main diagonal scratch */}
      <path
        d={`M 4 ${height - 4} L ${width - 8} 6 L ${width - 4} 4`}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      {/* Secondary thin scratch */}
      <path
        d={`M 0 ${height - 2} L ${width * 0.85} 8`}
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
    </svg>
  );
}
