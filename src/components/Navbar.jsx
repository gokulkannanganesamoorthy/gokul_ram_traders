import { useState, useEffect } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('hero')

  const items = [
    { id: 'hero', label: 'Home' },
    { id: 'stats', label: 'Excellence' },
    { id: 'products', label: 'Offerings' },
    { id: 'brands', label: 'Partners' },
    { id: 'contact', label: 'Reach' }
  ]

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-6">
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1">
        <div className="px-4 pr-6 border-r border-brand-black/5 mr-2 hidden md:block">
          <span className="font-bold tracking-tighter uppercase text-sm">Gokul Ram</span>
        </div>
        
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)}
            className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
              active === item.id 
                ? 'bg-brand-black text-brand-white shadow-lg scale-105' 
                : 'text-brand-gray-400 hover:text-brand-black'
            }`}
          >
            {item.label}
          </a>
        ))}

        <div className="ml-2 pl-2 border-l border-brand-black/5 hidden md:block">
           <a 
            href="#contact" 
            className="px-5 py-2.5 bg-brand-accent text-white text-[9px] uppercase tracking-widest font-bold rounded-full hover:bg-brand-black transition-all"
          >
            Inquiry
          </a>
        </div>
      </nav>
    </div>
  )
}
