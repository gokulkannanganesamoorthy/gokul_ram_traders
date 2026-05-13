import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="pt-20 bg-brand-gray-100">
      <div className="container-wide">
        <div className="grid-modular">
          
          {/* Main Title Cell */}
          <div className="grid-cell md:col-span-8 md:row-span-2 min-h-[60vh]">
            <div>
              <p className="label-mono">Established 2009 / Tamil Nadu</p>
              <h1 className="text-[clamp(3.5rem,10vw,12rem)] leading-[0.9] font-black uppercase tracking-tighter mt-8">
                The New<br />Standard in<br />Electricals
              </h1>
            </div>
            <div className="mt-20 flex flex-wrap gap-8 items-end justify-between">
              <p className="max-w-md text-lg md:text-xl text-brand-gray-600 leading-relaxed">
                Empowering Tamil Nadu with premium industrial electrical solutions. From high-grade wiring to industrial automation.
              </p>
              <div className="flex gap-4">
                <a href="#products" className="w-14 h-14 rounded-full border border-brand-black flex items-center justify-center hover:bg-brand-black hover:text-brand-white transition-all group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-y-1 transition-transform">
                    <path d="M7 7l10 10M17 7v10H7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Status Cell */}
          <div className="grid-cell md:col-span-4">
            <p className="label-mono">System Status</p>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-sm uppercase tracking-wider">Store Open</span>
              </div>
              <p className="text-brand-gray-600 text-sm">Rajapalayam, TN</p>
            </div>
            <div className="mt-12">
              <p className="text-4xl font-mono tabular-nums">{time}</p>
              <p className="label-mono mt-2 mb-0">Local Time IST</p>
            </div>
          </div>

          {/* Quick Stat Cell */}
          <div className="grid-cell md:col-span-4 bg-brand-black group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="label-mono text-brand-gray-400">Inventory</p>
            <div className="relative z-10">
              <span className="text-6xl font-black text-brand-white leading-none">500+</span>
              <p className="text-brand-gray-400 mt-2 uppercase text-[10px] tracking-[0.2em]">Unique SKUs In Stock</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
