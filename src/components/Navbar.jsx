import { useState, useEffect } from 'react'

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [isOpen, setIsOpen] = useState(false)

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

  const activeLabel = items.find(i => i.id === active)?.label

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0">
      {/* Desktop View */}
      <nav className="hidden md:flex glass rounded-full p-1.5 items-center gap-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              setActive(item.id)
              const el = document.getElementById(item.id)
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
            }}
            className={`px-8 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all whitespace-nowrap ${
              active === item.id 
                ? 'bg-brand-black text-brand-white shadow-xl' 
                : 'text-brand-gray-400 hover:text-brand-black hover:bg-brand-gray-100'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile View - Expandable Pill */}
      <div className="md:hidden relative flex flex-col items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="glass rounded-full px-8 py-4 flex items-center gap-4 bg-white shadow-2xl active:scale-95 transition-all"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-black">{activeLabel}</span>
          <svg 
            width="10" height="6" viewBox="0 0 10 6" fill="none" 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full mt-3 w-48 glass rounded-[30px] p-2 flex flex-col gap-1 bg-white/90 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActive(item.id)
                  setIsOpen(false)
                  const el = document.getElementById(item.id)
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
                }}
                className={`px-6 py-4 rounded-[20px] text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                  active === item.id 
                    ? 'bg-brand-black text-brand-white' 
                    : 'text-brand-gray-400 hover:text-brand-black hover:bg-brand-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
