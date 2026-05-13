import { useRef } from 'react'
import { useStickyScrollProgress } from '../hooks/useScrollProgress'

export default function Stats() {
  const containerRef = useRef(null)
  const progress = useStickyScrollProgress(containerRef)

  // Helper to interpolate values
  const interpolate = (p, start, end, from, to) => {
    if (p < start) return from
    if (p > end) return to
    return from + (to - from) * ((p - start) / (end - start))
  }

  // Crossfade logic for 4 stats
  const getStyles = (start, end) => {
    const opacity = interpolate(progress, start, start + 0.1, 0, 1) * interpolate(progress, end - 0.1, end, 1, 0)
    const scale = interpolate(progress, start, end, 0.8, 1.2)
    const blur = interpolate(progress, start, start + 0.1, 10, 0) + interpolate(progress, end - 0.1, end, 0, 10)
    return {
      opacity: Math.max(0, opacity),
      transform: `scale(${scale})`,
      filter: `blur(${blur}px)`,
      display: progress >= start - 0.1 && progress <= end + 0.1 ? 'flex' : 'none'
    }
  }

  return (
    <section ref={containerRef} id="stats" className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Stat 1 */}
        <div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={getStyles(0, 0.25)}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none text-[clamp(5rem,15vw,20rem)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            15+
          </h2>
          <p className="type-label text-[#737373] mt-4">Years of excellence</p>
        </div>

        {/* Stat 2 */}
        <div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={getStyles(0.25, 0.5)}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none text-[clamp(5rem,15vw,20rem)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            500+
          </h2>
          <p className="type-label text-[#737373] mt-4">Product SKUs</p>
        </div>

        {/* Stat 3 */}
        <div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={getStyles(0.5, 0.75)}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none text-[clamp(5rem,15vw,20rem)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            100%
          </h2>
          <p className="type-label text-[#737373] mt-4">Genuine Brands</p>
        </div>

        {/* Stat 4 */}
        <div 
          className="absolute text-center flex flex-col items-center justify-center"
          style={getStyles(0.75, 1.0)}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter leading-none text-[clamp(5rem,15vw,20rem)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            5,000+
          </h2>
          <p className="type-label text-[#737373] mt-4">Happy Customers</p>
        </div>
      </div>
    </section>
  )
}
