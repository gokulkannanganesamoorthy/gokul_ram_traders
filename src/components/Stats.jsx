import { useInView } from '../hooks/useInView';

const STATS = [
  { value: '13+', label: 'Experience', sub: 'Years of Trust' },
  { value: '100%', label: 'Authentic', sub: 'Genuine Brands' },
  { value: 'Direct', label: 'Authorized', sub: 'Brand Dealers' },
  { value: 'Ready', label: 'Availability', sub: 'Fast Local Stock' },
];

export default function Stats() {
  const [ref, inView] = useInView({ once: true, threshold: 0.2 });

  return (
    <section id="stats" ref={ref} className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="py-12 border-t border-brand-black/10 hover:border-brand-black transition-all group">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-400 mb-6 block">
                  {stat.label}
                </span>
                <h2 className="text-6xl font-light tracking-tighter mb-4">
                  {stat.value}
                </h2>
                <p className="text-sm text-brand-gray-600 font-medium">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
