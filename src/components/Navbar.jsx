import { useState, useEffect } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('home')

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
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)}
            className={`px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all ${
              active === item.id 
                ? 'bg-brand-black text-brand-white shadow-lg scale-105' 
                : 'text-brand-gray-400 hover:text-brand-black hover:bg-brand-gray-100'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
