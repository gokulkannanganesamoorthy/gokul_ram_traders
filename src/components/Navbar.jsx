import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      scrolled ? 'bg-brand-white/80 backdrop-blur-xl border-brand-gray-200 h-16' : 'bg-transparent border-transparent h-20'
    }`}>
      <div className="container-wide h-full flex items-center justify-between px-6 md:px-12">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-brand-white font-black text-xs">G</span>
          </div>
          <span className="font-bold tracking-tighter text-lg uppercase">Gokul Ram</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Experience', 'Products', 'Brands', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] uppercase tracking-[0.15em] font-bold text-brand-gray-600 hover:text-brand-black transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-brand-black text-brand-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-brand-gray-600 transition-all"
          >
            Inquiry
          </a>
        </div>

        <button className="md:hidden p-2 text-brand-black">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
