import { useState, useEffect } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const items = [
    { id: 'hero', label: 'Home' },
    { id: 'stats', label: 'Excellence' },
    { id: 'products', label: 'Offerings' },
    { id: 'brands', label: 'Partners' },
    { id: 'contact', label: 'Reach' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollPos = window.scrollY + 200
      items.forEach(item => {
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActive(item.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-brand-black/5 h-16' : 'bg-transparent border-transparent h-20'
    }`}>
      <div className="container-wide h-full flex items-center justify-between px-6 md:px-12">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center">
            <span className="text-brand-white font-bold text-xs">G</span>
          </div>
          <span className="font-bold tracking-tighter text-lg uppercase">Gokul Ram</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold transition-all ${
                active === item.id 
                  ? 'text-brand-black' 
                  : 'text-brand-gray-400 hover:text-brand-black'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="px-6 py-2.5 bg-brand-black text-brand-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-brand-gray-600 transition-all"
        >
          Inquiry
        </a>
      </div>
    </nav>
  )
}
