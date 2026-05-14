// #3 - Fan Blade Page Loader
// Spins up like a ceiling fan on first page load, fades out
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [speed, setSpeed] = useState(0); // 0 = idle, 1 = spin, 2 = fast + fade
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setSpeed(1), 100); // start spinning
    const t2 = setTimeout(() => setSpeed(2), 1800); // go fast and start fade
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-white transition-opacity duration-500"
      style={{ opacity: speed === 2 ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Icon */}
        <div className="relative">
          <img
            src="/brand_assets/brand_logo_with_name_black.png"
            alt="Logo"
            className="w-60 h-auto object-contain"
          />
        </div>
        {/* Fan Blade SVG */}
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          style={{
            animation: speed === 0 ? 'none' : 'fan-spin 0.6s linear infinite',
          }}
        >
          <style>{`
            @keyframes fan-spin {
              from { transform: rotate(0deg); transform-origin: center; }
              to   { transform: rotate(360deg); transform-origin: center; }
            }
          `}</style>
          {/* 2 slim blades at 0° and 180° */}
          {[0, 120, 240].map((angle) => (
            <g
              key={angle}
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: '36px 36px',
              }}
            >
              <ellipse
                cx="36"
                cy="18"
                rx="4"
                ry="16"
                fill="#1a1a1a"
                opacity="0.85"
              />
            </g>
          ))}
          {/* Motor hub */}
          <circle cx="36" cy="36" r="6" fill="#000000" />
          <circle cx="36" cy="36" r="3" fill="#555" />
        </svg>
        <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">
          GOKULRAM ELECTRICALS
        </p>
      </div>
    </div>
  );
}
