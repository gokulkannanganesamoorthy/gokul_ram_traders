// #5 — Pipe Junction Section Connector
import { useInView } from '../hooks/useInView';

export default function PipeJunction() {
  const [ref, inView] = useInView({ once: true, rootMargin: '-10% 0px' });

  const lineStyle = (delay = 0) => ({
    strokeDasharray: 200,
    strokeDashoffset: inView ? 0 : 200,
    transition: `stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <div ref={ref} className="container-wide py-8 flex justify-center" aria-hidden="true">
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal main pipe */}
        <line x1="0" y1="30" x2="200" y2="30" stroke="#d1d1d6" strokeWidth="5" strokeLinecap="round"
          style={lineStyle(0)} />
        {/* Centre drop pipe */}
        <line x1="100" y1="30" x2="100" y2="60" stroke="#d1d1d6" strokeWidth="5" strokeLinecap="round"
          style={lineStyle(0.3)} />
        {/* T-junction cap */}
        <rect x="93" y="54" width="14" height="6" rx="2" fill="#a1a1aa"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease 0.8s' }} />
        {/* Pipe flange rings */}
        {[40, 100, 160].map((x, i) => (
          <rect key={x} x={x - 3} y="25" width="6" height="10" rx="1" fill="#a1a1aa"
            style={{ opacity: inView ? 0.6 : 0, transition: `opacity 0.4s ease ${0.5 + i * 0.15}s` }} />
        ))}
        {/* Copper inner highlight */}
        <line x1="0" y1="30" x2="200" y2="30" stroke="#f5c57a" strokeWidth="1.5" strokeLinecap="round"
          style={lineStyle(0.1)} />
      </svg>
    </div>
  );
}
