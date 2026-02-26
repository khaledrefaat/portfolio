interface PlusMinusIconProps {
  size?: number;
  thickness?: number;
  color?: string;
  duration?: number;
  onClick?: () => void;
  isPlus?: boolean;
}

export default function PlusMinusIcon({
  size = 20,
  thickness = 2,
  color = '#333',
  duration = 0.3,
  isPlus = true,
}: PlusMinusIconProps) {
  // Calculate dimensions
  const padding = size * 0.15;
  const center = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        width: size,
        height: size,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        transition: 'background-color 0.2s ease',
        overflow: 'visible',
      }}
    >
      <title>{isPlus ? 'Expand' : 'Collapse'}</title>
      {/* Horizontal line - always visible */}
      <line
        x1={padding}
        y1={center}
        x2={size - padding}
        y2={center}
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        style={{
          transition: `transform ${duration}s ease-in-out`,
          transformOrigin: 'center',
        }}
      />

      {/* Vertical line - animates in/out */}
      <line
        x1={center}
        y1={padding}
        x2={center}
        y2={size - padding}
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        style={{
          transition: `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`,
          transformOrigin: 'center',
          transform: isPlus ? 'scaleY(1)' : 'scaleY(0)',
          opacity: isPlus ? 1 : 0,
        }}
      />
    </svg>
  );
}
