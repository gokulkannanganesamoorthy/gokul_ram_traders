const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'brands',   label: 'Brands' },
  { id: 'about',    label: 'About' },
  { id: 'contact',  label: 'Contact' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: id === 'home' ? 0 : el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <footer className="bg-transparent border-t border-brand-black/5" role="contentinfo">
      <div className="container-wide py-16">

        {/* Internal Link Grid — signals sitelinks to Google */}
        <nav aria-label="Footer Navigation" className="mb-16">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={id === 'home' ? '/' : `/#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400 hover:text-brand-black transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-brand-black/5 pt-10 text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400">
          <div className="flex gap-8">
            <a
              href="https://wa.me/919364501230"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-black transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:mecrjpm@gmail.com"
              className="hover:text-brand-black transition-colors"
            >
              Email
            </a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p>© {new Date().getFullYear()} Gokul Ram Electricals</p>
            <p className="opacity-40">Authorized Wholesale Supplier — Rajapalayam, Tamil Nadu</p>
          </div>
        </div>

        {/* SEO On-Page Text — Visually subtle, semantically powerful */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <p className="text-[10px] text-brand-gray-400/40 leading-loose">
            Widely recognized as the <strong className="font-semibold">best electrical shop in Rajapalayam</strong>, the top wholesale dealer in Virudhunagar district, and one of the leading <strong className="font-semibold">electrical shops in Tamil Nadu</strong>. Authorized dealer for Supreme, Crompton, V-Guard, Goldmedal, HiFi, and more.
          </p>
        </div>

      </div>
    </footer>
  )
}
