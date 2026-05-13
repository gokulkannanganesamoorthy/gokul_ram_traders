import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

const BRAND_MAPPING = {
  'Kundan': ['Wiring & Cables'],
  'Supreme': ['Pipes & Hoses', 'Water Tanks'],
  'Vijay': ['Pipes & Hoses'],
  'Sun': ['Pipes & Hoses'],
  'Oriant': ['Pump Systems'],
  'Legrand': ['MCBs & Boards', 'Accessories'],
  'L&T': ['MCBs & Boards'],
  'Shivasu': ['MCBs & Boards'],
  'Crompton': ['Fans & Ventilation'],
  'Almonard': ['Fans & Ventilation'],
  'V-Guard': ['Fans & Ventilation', 'Water Heaters'],
  'Ganga': ['Water Tanks'],
  'Metro': ['Sanitaryware'],
  'Atlas': ['Sanitaryware'],
  'Zoloto': ['Sanitaryware', 'Accessories'],
  'Life': ['Sanitaryware'],
  'Apaxx': ['Accessories'],
  'Goldmedal': ['Accessories'],
  'Vinay': ['Accessories'],
  'Hi-Fi': ['Accessories'],
  'LEO': ['Accessories'],
  'Surya': ['Accessories'],
  'KVB': ['Accessories'],
  'Frixon': ['Accessories'],
  'Meet': ['Accessories'],
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
        <div className={`mb-20 transition-all duration-1000 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400 mb-6">Our Partners</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Leading Brands in Inventory.</h2>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 transition-all duration-1000 delay-300 ${inView ? 'reveal-visible' : 'reveal-hidden'}`}>
          {BRANDS.map((brand) => (
            <div 
              key={brand}
              onMouseEnter={() => setHoveredBrand(brand)}
              onMouseLeave={() => setHoveredBrand(null)}
              className="group relative flex flex-col items-center justify-center p-12 border border-brand-black/5 rounded-[30px] hover:border-brand-black/20 hover:bg-brand-gray-100 transition-all duration-500 cursor-none"
            >
              <span className="text-lg font-medium tracking-tight group-hover:scale-110 transition-transform duration-500">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cursor Follower "Trial" - Visible only on PC/Hover */}
      {hoveredBrand && (
        <div 
          className="fixed pointer-events-none z-[100] transition-all duration-100 ease-out flex flex-col"
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
