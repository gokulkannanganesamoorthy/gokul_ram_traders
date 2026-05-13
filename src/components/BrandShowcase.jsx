import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const BRAND_MAPPING = {
  'Supreme': ['Pipes & Hoses', 'Water Tanks'],
  'Crompton': ['Fans & Ventilation'],
  'V-Guard': ['Fans & Ventilation', 'Water Heaters'],
  'Goldmedal': ['Accessories'],
  'Hi-Fi': ['Accessories'],
  'Oriant': ['Pump Systems'],
  'Kundan': ['Wiring & Cables'],
  'LEO': ['Accessories'],
  'Ganga': ['Water Tanks'],
  'Surya': ['Accessories'],
  'Almonard': ['Fans & Ventilation'],
  'Vinay': ['Accessories'],
  'Legrand': ['MCBs & Boards', 'Accessories'],
  'Vijay': ['Pipes & Hoses'],
  'Metro': ['Sanitaryware'],
  'Atlas': ['Sanitaryware'],
  'KVB': ['Accessories'],
  'Frixon': ['Accessories'],
  'Life': ['Sanitaryware'],
  'Zoloto': ['Sanitaryware', 'Accessories'],
  'Apaxx': ['Accessories'],
  'Meet': ['Accessories'],
  'L&T': ['MCBs & Boards'],
  'Shivasu': ['MCBs & Boards'],
}

const BRANDS = Object.keys(BRAND_MAPPING)

export default function BrandShowcase() {
  const [ref, inView] = useInView({ once: true })
  const [hoveredBrand, setHoveredBrand] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    if (hoveredBrand) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [hoveredBrand])

  return (
    <section id="brands" ref={ref} className="section-padding bg-white border-t border-brand-black/5 relative overflow-hidden">
      <div className="container-wide text-center">
        <p className={`text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-20 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          Direct Partnerships
        </p>

        <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-12 md:gap-y-20">
          {BRANDS.map((brand, i) => (
            <div 
              key={brand}
              onMouseEnter={() => setHoveredBrand(brand)}
              onMouseLeave={() => setHoveredBrand(null)}
              className={`transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'} cursor-none`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <h4 className="text-3xl md:text-6xl font-light text-brand-black tracking-tighter hover:text-brand-gray-400 transition-all duration-300">
                {brand}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor Follower "Trial" */}
      {hoveredBrand && (
        <div 
          className="fixed pointer-events-none z-[100] transition-transform duration-100 ease-out flex flex-col"
          style={{ 
            left: mousePos.x + 20, 
            top: mousePos.y + 20
          }}
        >
          <div className="bg-brand-black px-4 py-2 rounded-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <p className="text-white text-[9px] uppercase tracking-[0.2em] font-bold whitespace-nowrap">
              {BRAND_MAPPING[hoveredBrand].join(' + ')}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
