import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

const Counter = ({ value, duration = 2000, inView }) => {
  const [count, setCount] = useState(0)
  const target = parseInt(value)
  
  useEffect(() => {
    if (inView && !isNaN(target)) {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, target, duration])

  return isNaN(target) ? value : count + (value.includes('+') ? '+' : value.includes('%') ? '%' : '')
}

const STATS = [
  { label: 'EXPERIENCE', value: '13+', sub: 'Years of Trust' },
  { label: 'AUTHENTIC', value: '100%', sub: 'Genuine Brands' },
  { label: 'AUTHORIZED', value: 'Direct', sub: 'Brand Dealers' },
  { label: 'AVAILABILITY', value: 'Ready', sub: 'Fast Local Stock' }
]

export default function Stats() {
  const [ref, inView] = useInView({ once: true })

  return (
    <section id="stats" ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 md:gap-12">
          {STATS.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="border-t border-brand-black/20 pt-10 md:pt-12">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-6 md:mb-8">{stat.label}</p>
                <p className="text-5xl md:text-8xl font-light tracking-tighter mb-4 tabular-nums">
                  <Counter value={stat.value} inView={inView} />
                </p>
                <p className="text-brand-gray-600 font-medium text-sm md:text-base">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
