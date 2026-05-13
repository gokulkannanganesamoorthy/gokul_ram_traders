import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-12">
        <a href="#hero" className="text-[#0A0A0A] font-black tracking-tighter text-2xl uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          Gokul Ram
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#stats" className="type-label text-[#737373] hover:text-[#0A0A0A] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Experience</a>
          <a href="#products" className="type-label text-[#737373] hover:text-[#0A0A0A] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Products</a>
          <a href="#why-us" className="type-label text-[#737373] hover:text-[#0A0A0A] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Chapters</a>
        </nav>
      </div>

      <a 
        href="#contact" 
        className="hidden md:block bg-[#0A0A0A] text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
      >
        Inquiry
      </a>

      {/* Mobile Toggle Placeholder */}
      <button className="md:hidden text-[#0A0A0A]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  )
}
