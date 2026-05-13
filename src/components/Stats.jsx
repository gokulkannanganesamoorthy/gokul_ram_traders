import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '15+', label: 'Experience', sub: 'Years of Trust' },
  { value: '100%', label: 'Authentic', sub: 'Genuine Brands' },
  { value: 'Direct', label: 'Authorized', sub: 'Brand Dealers' },
  { value: 'Ready', label: 'Availability', sub: 'Fast Local Stock' },
]

export default function Stats() {
  const [ref, inView] = useInView({ once: true, threshold: 0.2 })

  return (
    <section id="stats" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="p-12 rounded-[40px] bg-brand-bg border border-brand-black/5 hover:border-brand-accent/20 hover:shadow-premium transition-all group h-full">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-400 mb-6 block">
                  {stat.label}
                </span>
                <h2 className="text-5xl font-light tracking-tighter mb-4 group-hover:scale-105 transition-transform">
                  {stat.value}
                </h2>
                <p className="text-sm text-brand-gray-600 font-medium">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-32 text-center transition-all duration-1000 delay-500 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <h3 className="text-4xl md:text-6xl font-light max-w-5xl mx-auto leading-tight">
            Quality Electrical & Plumbing Solutions <span className="text-brand-gray-400">Built To Last.</span>
          </h3>
        </div>
      </div>
    </section>
  )
}
