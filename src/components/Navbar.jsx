import { useState, useEffect } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('hero')

  const items = [
    { id: 'hero', label: 'Home' },
    { id: 'why-us', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' }
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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0">
      <nav className="glass rounded-full p-1.5 flex items-center gap-1 max-w-full overflow-x-auto no-scrollbar scroll-smooth">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              setActive(item.id)
              const el = document.getElementById(item.id)
              if (el) {
                window.scrollTo({
                  top: el.offsetTop - 80,
                  behavior: 'smooth'
                })
              }
            }}
            className={`px-5 py-3 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap cursor-pointer flex-shrink-0 ${
              active === item.id 
                ? 'bg-brand-black text-brand-white shadow-xl' 
                : 'text-brand-gray-400 hover:text-brand-black hover:bg-brand-gray-100'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  )
}
