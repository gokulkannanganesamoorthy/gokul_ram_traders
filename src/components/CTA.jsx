import { useRef } from 'react'
import { useStickyScrollProgress } from '../hooks/useScrollProgress'

export default function CTA() {
  const containerRef = useRef(null)
  const progress = useStickyScrollProgress(containerRef)

  const interpolate = (p, start, end, from, to) => {
    if (p < start) return from
    if (p > end) return to
    return from + (to - from) * ((p - start) / (end - start))
  }

  const textOpacity = interpolate(progress, 0, 0.4, 1, 1) * interpolate(progress, 0.4, 0.8, 1, 0)
  const textScale = interpolate(progress, 0, 0.8, 1, 1.5)
  const textBlur = interpolate(progress, 0, 0.4, 0, 0) + interpolate(progress, 0.4, 0.8, 0, 40)

  const detailsOpacity = interpolate(progress, 0.6, 0.9, 0, 1)
  const detailsY = interpolate(progress, 0.6, 0.9, 100, 0)

  return (
    <section ref={containerRef} id="contact" className="relative h-[200vh] bg-white border-t border-[#E5E5E5]">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full overflow-hidden flex items-center justify-center">
        
        {/* Massive Foreground Text */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          style={{ 
            opacity: Math.max(0, textOpacity), 
            transform: `scale(${textScale})`, 
            filter: `blur(${textBlur}px)` 
          }}
        >
          <h2 
            className="text-[#0A0A0A] font-black uppercase tracking-tighter text-center leading-[0.8] text-[clamp(5rem,20vw,25rem)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Find
            <br />
            Us.
          </h2>
        </div>

        {/* Contact Details Layer */}
        <div 
          className="relative z-10 w-full max-w-6xl mx-auto px-6"
          style={{ 
            opacity: detailsOpacity, 
            transform: `translateY(${detailsY}px)` 
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            <div>
              <p className="type-label text-[#737373] mb-6">Visit our store</p>
              <address className="not-italic text-[#0A0A0A] font-semibold text-2xl md:text-4xl leading-tight" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                Gokul Ram Electricals<br />
                Opposite New Bus Stand,<br />
                Rajapalayam, TN 626117
              </address>
            </div>

            <div className="flex flex-col justify-end">
              <p className="type-label text-[#737373] mb-6">Direct lines</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[#0A0A0A] font-medium text-xl md:text-2xl mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span>Phone</span>
                  <a href="tel:+919876543210" className="hover:text-[#737373] transition-colors">+91 98765 43210</a>
                </div>
                <div className="flex justify-between items-center text-[#A3A3A3] font-medium text-xl md:text-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span>Email</span>
                  <a href="mailto:hello@gokulramelectricals.com" className="hover:text-[#0A0A0A] transition-colors">hello@gokulram.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between gap-8">
            <div className="flex gap-12">
              <a href="#" className="type-label text-[#0A0A0A] hover:text-[#737373] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Instagram</a>
              <a href="#" className="type-label text-[#0A0A0A] hover:text-[#737373] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp</a>
            </div>
            <p className="type-label text-[#A3A3A3]">© 2024 Gokul Ram Traders. All rights reserved.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
