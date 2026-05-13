export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-32 pb-12 border-t border-brand-black/5 overflow-hidden">
      <div className="container-wide">
        {/* Unique Branding Element */}
        <div className="relative mb-32 flex justify-center">
          <h2 className="text-[15vw] font-black tracking-tighter text-brand-black/5 leading-none select-none">
            GOKUL RAM
          </h2>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-brand-black mb-2">Established 2013</p>
                <p className="text-sm font-medium text-brand-gray-600">Premium Industrial Supply</p>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-16 md:gap-8">
          {/* Minimal Info */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Headquarters</div>
            <p className="text-sm font-medium leading-relaxed max-w-[200px]">
              42/B Tenkasi Road,<br />
              Rajapalayam - 626117.
            </p>
          </div>

          {/* Sleek Links Row */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {['Instagram', 'WhatsApp', 'Email', 'Location'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-black hover:text-brand-gray-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Minimalist Top Trigger */}
          <button 
            onClick={scrollToTop}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black border-b border-brand-black pb-1 hover:text-brand-gray-400 hover:border-brand-gray-400 transition-all"
          >
            Top
          </button>
        </div>

        {/* Modular Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-brand-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.3em] font-medium text-brand-gray-400">
            © GOKUL RAM TRADERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] font-medium text-brand-gray-400">
            <span>Rajapalayam, TN</span>
            <span>Industrial Wholesalers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
