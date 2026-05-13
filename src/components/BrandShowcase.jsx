import { useRef } from 'react'
import { useStickyScrollProgress } from '../hooks/useScrollProgress'

const BRANDS = ['Supreme', 'Crompton', 'V-Guard', 'Goldmedal', 'HiFi']

export default function BrandShowcase() {
  const containerRef = useRef(null)
  const progress = useStickyScrollProgress(containerRef)

  const interpolate = (p, start, end, from, to) => {
    if (p < start) return from
    if (p > end) return to
    return from + (to - from) * ((p - start) / (end - start))
  }

  return (
    <section ref={containerRef} id="brands" className="relative h-[300vh] bg-white border-t border-[#E5E5E5]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="relative w-full h-full flex items-center justify-center">
          {BRANDS.map((brand, i) => {
            const chunk = 1 / BRANDS.length
            const start = i * chunk
            const peak = start + chunk / 2
            const end = start + chunk
            
            const op = interpolate(progress, start - 0.1, peak, 0, 1) * interpolate(progress, peak, end + 0.1, 1, 0)
            const scale = interpolate(progress, start - 0.1, end + 0.1, 0.8, 1.5)
            const blur = interpolate(progress, start - 0.1, peak, 20, 0) + interpolate(progress, peak, end + 0.1, 0, 20)

            return (
              <div 
                key={brand}
                className="absolute text-[#0A0A0A] font-black uppercase tracking-tighter text-center w-full px-4 leading-[0.8] text-[clamp(4rem,15vw,18rem)]"
                style={{ 
                  opacity: Math.max(0, op), 
                  transform: `scale(${scale})`, 
                  filter: `blur(${blur}px)`,
                  fontFamily: 'Inter, sans-serif',
                  display: progress >= start - 0.1 && progress <= end + 0.1 ? 'block' : 'none'
                }}
              >
                {brand}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
