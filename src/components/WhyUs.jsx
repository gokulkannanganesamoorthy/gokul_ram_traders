import { useRef } from 'react'
import { useStickyScrollProgress } from '../hooks/useScrollProgress'

const REASONS = [
  { num: '01', title: 'Curated Quality', desc: 'We only stock brands we trust for our own homes.' },
  { num: '02', title: 'Direct Sourcing', desc: 'Cutting out middlemen to bring you wholesale prices.' },
  { num: '03', title: 'Local Expertise', desc: 'Serving Rajapalayam and TN for over 15 years.' },
  { num: '04', title: 'Project Ready', desc: 'Bulk supply for large-scale electrical infrastructure.' },
  { num: '05', title: 'Fast Delivery', desc: 'Immediate stock availability for urgent project needs.' },
]

export default function WhyUs() {
  const containerRef = useRef(null)
  const progress = useStickyScrollProgress(containerRef)

  const interpolate = (p, start, end, from, to) => {
    if (p < start) return from
    if (p > end) return to
    return from + (to - from) * ((p - start) / (end - start))
  }

  return (
    <section ref={containerRef} id="why-us" className="relative h-[500vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Sticky Chapter Number */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-[#0A0A0A] flex items-center justify-center">
          {REASONS.map((reason, i) => {
            const step = 1 / REASONS.length
            const start = i * step
            const end = start + step
            const op = interpolate(progress, start - 0.05, start, 0, 1) * interpolate(progress, end, end + 0.05, 1, 0)

            return (
              <div 
                key={reason.num}
                className="absolute text-white font-black leading-none tracking-tighter text-[clamp(8rem,25vw,30rem)]"
                style={{ 
                  opacity: Math.max(0, op),
                  fontFamily: 'Inter, sans-serif',
                  display: progress >= start - 0.1 && progress <= end + 0.1 ? 'block' : 'none'
                }}
              >
                {reason.num}
              </div>
            )
          })}
        </div>

        {/* Right: Scrolling content */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-white px-8 md:px-20 flex flex-col items-center">
          <div 
            className="w-full flex flex-col gap-[80vh] py-[40vh]"
            style={{ transform: `translateY(${-progress * 400}vh)` }}
          >
            {REASONS.map((reason) => (
              <div key={reason.num} className="max-w-md">
                <p className="type-label text-[#737373] mb-4">Chapter {reason.num}</p>
                <h3 
                  className="text-[#0A0A0A] font-bold mb-6 text-[clamp(4rem,10vw,12rem)] leading-[0.8] tracking-tighter"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-[#525252] text-xl md:text-2xl"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
                >
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
