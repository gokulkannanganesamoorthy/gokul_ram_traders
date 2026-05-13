// #3 — Fan Blade Page Loader
// Real ceiling fan shape — elongated swept blades, all black, spins up and fades out
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [speed, setSpeed] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setSpeed(1), 100);
    const t2 = setTimeout(() => setSpeed(2), 700);
    const t3 = setTimeout(() => setVisible(false), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-white"
      style={{ opacity: speed === 2 ? 0 : 1, transition: 'opacity 0.5s ease' }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Ceiling Fan SVG — 2 swept blades + canopy + motor */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transformOrigin: '50px 50px',
            animation:
              speed === 0 ? 'none'
              : speed === 1 ? 'fan-spin 0.8s cubic-bezier(0.4,0,0.6,1) infinite'
              : 'fan-spin 0.12s linear infinite',
          }}
        >
          <style>{`
            @keyframes fan-spin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
          `}</style>

          {/* Blade 1 — sweeping left */}
          <path
            d="M50 50
               C44 46, 32 40, 18 36
               C10 33, 4 34, 4 38
               C4 42, 12 46, 22 48
               C34 50, 46 52, 50 50Z"
            fill="#000000"
          />

          {/* Blade 2 — sweeping right (180° opposite) */}
          <path
            d="M50 50
               C56 54, 68 60, 82 64
               C90 67, 96 66, 96 62
               C96 58, 88 54, 78 52
               C66 50, 54 48, 50 50Z"
            fill="#000000"
          />

          {/* Downrod / canopy cap at top */}
          <rect x="46" y="2" width="8" height="12" rx="3" fill="#111111" />

          {/* Motor housing — layered circles for 3D depth */}
          <circle cx="50" cy="50" r="12" fill="#111111" />
          <circle cx="50" cy="50" r="8"  fill="#2a2a2a" />
          <circle cx="50" cy="50" r="4"  fill="#555555" />
          <circle cx="50" cy="50" r="2"  fill="#888888" />
        </svg>

        <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-gray-400">
          Gokul Ram Electricals
        </p>
      </div>
    </div>
  );
}
