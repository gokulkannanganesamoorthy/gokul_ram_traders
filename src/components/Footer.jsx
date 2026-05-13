export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-brand-black/5 pt-24 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter mb-4">Gokul Ram Traders.</h3>
              <p className="text-sm text-brand-gray-600 leading-relaxed max-w-sm">
                Established in 2013, we provide high-quality electrical and plumbing solutions to Rajapalayam. Wholesale pricing for projects of all scales.
              </p>
            </div>
            <div className="flex gap-4">
              {['Instagram', 'WhatsApp', 'Email'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-[10px] uppercase tracking-widest font-bold text-brand-black hover:text-brand-gray-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400">Navigation</p>
            <nav className="flex flex-col gap-4">
              {['Products', 'Brands', 'Why Us', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm font-medium text-brand-black hover:translate-x-1 transition-transform inline-block"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Location Section */}
          <div className="space-y-8">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gray-400">Headquarters</p>
            <div className="text-sm text-brand-black leading-relaxed">
              <p>42/B Tenkasi Road,</p>
              <p>Opposite to Old EB Office,</p>
              <p>Rajapalayam - 626117.</p>
              <p className="mt-4 font-bold">+91 94431 23456</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-black/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray-400">
            © {new Date().getFullYear()} GOKUL RAM TRADERS. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-brand-black"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-black group-hover:text-white group-hover:-translate-y-1 transition-all">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
