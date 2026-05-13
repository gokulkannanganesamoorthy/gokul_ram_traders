import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollHeight = rect.height - window.innerHeight
      const p = Math.max(0, Math.min(1, -rect.top / scrollHeight))
      setProgress(p)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Derived animation values
  const y = progress * 100
  const opacity = 1 - progress * 1.2
  const blur = progress * 10
  const letterSpacing = -0.05 + progress * 0.1

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      className="relative h-[150vh] bg-white pt-14"
      aria-label="Hero — Best Electrical Shop in Tamil Nadu"
    >
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div 
          style={{ 
            transform: `translateY(${y}px)`, 
            opacity: Math.max(0, opacity), 
            filter: `blur(${blur}px)` 
          }}
          className="text-center px-4 w-full max-w-[90vw]"
        >
          <h1 
            className="text-[#0A0A0A] font-black uppercase leading-[0.8] whitespace-nowrap text-[clamp(3.5rem,12vw,15rem)]"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              letterSpacing: `${letterSpacing}em`
            }}
          >
            The Best
          </h1>
          <h1 
            className="text-[#0A0A0A] font-black uppercase leading-[0.8] whitespace-nowrap text-[clamp(3.5rem,12vw,15rem)]"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              letterSpacing: `${letterSpacing}em`
            }}
          >
            Electrical
          </h1>
          <h1 
            className="text-[#0A0A0A] font-black uppercase leading-[0.8] whitespace-nowrap text-[clamp(3.5rem,12vw,15rem)]"
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              letterSpacing: `${letterSpacing}em`
            }}
          >
            Shop.
          </h1>
        </div>

        <div 
          style={{ opacity: Math.max(0, opacity) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <p className="type-label text-[#737373]">Scroll to explore</p>
          <div className="w-[1px] h-12 bg-[#0A0A0A] animate-bounce" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#E5E5E5] bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E5E5]">
            {[
              { value: '15+', label: 'Years of service' },
              { value: '500+', label: 'Products stocked' },
              { value: '6+', label: 'Premium brands' },
              { value: '1,000+', label: 'Customers served' },
            ].map((item) => (
              <div key={item.label} className="px-8 py-7">
                <p
                  className="text-[#0A0A0A] font-semibold mb-1"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}
                >
                  {item.value}
                </p>
                <p className="type-label text-[#737373]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
