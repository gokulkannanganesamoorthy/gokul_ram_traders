import { useRef } from 'react'
import { useStickyScrollProgress } from '../hooks/useScrollProgress'

export default function Products() {
  const containerRef = useRef(null)
  const progress = useStickyScrollProgress(containerRef)

  const interpolate = (p, start, end, from, to) => {
    if (p < start) return from
    if (p > end) return to
    return from + (to - from) * ((p - start) / (end - start))
  }

  const getOpacity = (start, peak, end) => {
    const op = interpolate(progress, start, peak, 0, 1) * interpolate(progress, peak + 0.1, end, 1, 0)
    return Math.max(0, op)
  }

  return (
    <section ref={containerRef} id="products" className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        <div className="relative w-full h-[60vh] flex flex-col justify-center">
          
          <div 
            className="absolute top-0 text-[#0A0A0A] font-black uppercase tracking-tighter whitespace-nowrap leading-[0.8] text-[clamp(6rem,20vw,25rem)]"
            style={{ 
              transform: `translateX(${100 - progress * 200}%)`,
              fontFamily: 'Inter, sans-serif' 
            }}
          >
            WIRING
          </div>

          <div 
            className="absolute top-1/4 text-[#E5E5E5] font-black uppercase tracking-tighter whitespace-nowrap leading-[0.8] text-[clamp(6rem,20vw,25rem)]"
            style={{ 
              transform: `translateX(${50 - progress * 200}%)`,
              fontFamily: 'Inter, sans-serif' 
            }}
          >
            PIPES
          </div>

          <div 
            className="absolute top-2/4 text-[#0A0A0A] font-black uppercase tracking-tighter whitespace-nowrap leading-[0.8] text-[clamp(6rem,20vw,25rem)]"
            style={{ 
              transform: `translateX(${0 - progress * 200}%)`,
              fontFamily: 'Inter, sans-serif' 
            }}
          >
            MOTORS
          </div>

          <div 
            className="absolute top-3/4 text-[#E5E5E5] font-black uppercase tracking-tighter whitespace-nowrap leading-[0.8] text-[clamp(6rem,20vw,25rem)]"
            style={{ 
              transform: `translateX(${-50 - progress * 200}%)`,
              fontFamily: 'Inter, sans-serif' 
            }}
          >
            SWITCHES
          </div>

        </div>

        <div className="relative h-20 w-full max-w-4xl mt-12">
          <p style={{ opacity: getOpacity(0, 0.15, 0.35) }} className="absolute type-body-lg text-[#525252] transition-opacity duration-300">
            High-grade copper wiring and industrial cables for projects of any scale.
          </p>
          <p style={{ opacity: getOpacity(0.2, 0.4, 0.6) }} className="absolute type-body-lg text-[#525252] transition-opacity duration-300">
            Durable PVC and metal piping systems for electrical and plumbing safety.
          </p>
          <p style={{ opacity: getOpacity(0.45, 0.65, 0.85) }} className="absolute type-body-lg text-[#525252] transition-opacity duration-300">
            Premium energy-efficient motors and pumps from trusted global manufacturers.
          </p>
          <p style={{ opacity: getOpacity(0.7, 0.85, 1) }} className="absolute type-body-lg text-[#525252] transition-opacity duration-300">
            Modular switches and automation panels for a modern, connected lifestyle.
          </p>
        </div>

      </div>
    </section>
  )
}
