import { useState } from 'react'
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

  return (
    <section id="brands" ref={ref} className="section-padding bg-white border-t border-brand-black/5">
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
              className="group relative flex flex-col items-center justify-center p-8 border border-brand-black/5 rounded-[30px] hover:border-brand-black hover:bg-brand-gray-100 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <span className="text-lg font-medium tracking-tight group-hover:scale-110 transition-transform duration-500">{brand}</span>
              
              {/* Category Reveal - "The Trial" */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center bg-brand-black transition-all duration-500 ${hoveredBrand === brand ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 mb-2">Category</p>
                {BRAND_MAPPING[brand].map(cat => (
                  <span key={cat} className="text-white text-[11px] font-medium tracking-tight mb-1">{cat}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
