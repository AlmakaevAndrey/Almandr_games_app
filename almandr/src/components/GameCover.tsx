import { useMemo } from 'react';
interface GameCoverProps {
  gameId: number;
  colors: string[];
  className?: string;
}
export function GameCover({ gameId, colors, className = '' }: GameCoverProps) {
  // Deterministic random based on gameId
  const shapes = useMemo(() => {
    const seed = gameId * 12345;
    const random = (n: number) => {
      const x = Math.sin(seed + n) * 10000;
      return x - Math.floor(x);
    };
    const numShapes = 3 + Math.floor(random(0) * 4); // 3 to 6 shapes
    const shapeTypes = ['circle', 'rect', 'triangle'];
    return Array.from({
      length: numShapes,
    }).map((_, i) => ({
      type: shapeTypes[Math.floor(random(i + 1) * shapeTypes.length)],
      x: random(i + 2) * 100,
      y: random(i + 3) * 100,
      size: 20 + random(i + 4) * 60,
      color: colors[Math.floor(random(i + 5) * colors.length)],
      rotation: random(i + 6) * 360,
      opacity: 0.6 + random(i + 7) * 0.4,
    }));
  }, [gameId, colors]);
  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="100" height="100" fill={colors[0]} fillOpacity="0.1" />

        {shapes.map((shape, i) => (
          <g key={i} transform={`translate(${shape.x} ${shape.y}) rotate(${shape.rotation})`}>
            {shape.type === 'circle' && (
              <circle r={shape.size / 2} fill={shape.color} fillOpacity={shape.opacity} />
            )}
            {shape.type === 'rect' && (
              <rect
                x={-shape.size / 2}
                y={-shape.size / 2}
                width={shape.size}
                height={shape.size}
                fill={shape.color}
                fillOpacity={shape.opacity}
              />
            )}
            {shape.type === 'triangle' && (
              <polygon
                points={`0,${-shape.size / 2} ${shape.size / 2},${shape.size / 2} ${-shape.size / 2},${shape.size / 2}`}
                fill={shape.color}
                fillOpacity={shape.opacity}
              />
            )}
          </g>
        ))}

        {/* Texture overlay */}
        <filter id={`noise-${gameId}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#noise-${gameId})`} opacity="0.15" />
      </svg>
    </div>
  );
}
