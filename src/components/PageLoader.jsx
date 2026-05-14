// #3 - Fan Blade Page Loader
// Spins up like a ceiling fan on first page load, fades out
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [speed, setSpeed] = useState(0); // 0 = idle, 1 = spin, 2 = fast + fade
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setSpeed(1), 100); // start spinning
    const t2 = setTimeout(() => setSpeed(2), 600); // go fast
    const t3 = setTimeout(() => setVisible(false), 1200); // fade out
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-white transition-opacity duration-500"
      style={{ opacity: speed === 2 ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo Icon */}
        <div className="relative mb-4">
          <img
            src="/brand_assets/brand_logo_with_name_black.png"
            alt="Logo"
            className="h-24 w-auto object-contain"
          />
        </div>
        
        {/* Fan Blade SVG */}
        <div className="relative">
          <svg
            width="64"
            height="64"
            viewBox="0 0 72 72"
            fill="none"
            style={{
              animation:
                speed === 0
                  ? 'none'
                  : speed === 1
                    ? 'fan-spin 1s cubic-bezier(0.4,0,0.2,1) infinite'
                    : 'fan-spin 0.2s linear infinite',
            }}
          >
            <style>{`
              @keyframes fan-spin {
                from { transform: rotate(0deg); transform-origin: center; }
                to   { transform: rotate(360deg); transform-origin: center; }
              }
            `}</style>
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
            <circle cx="36" cy="36" r="6" fill="#000000" />
            <circle cx="36" cy="36" r="3" fill="#555" />
          </svg>
        </div>

        <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">
          GOKULRAM ELECTRICALS
        </p>
      </div>
    </div>
  );
}
