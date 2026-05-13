export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-brand-black/5">
      <div className="container-wide">
        {/* The "Technical Data" Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-24 mb-24 pb-24 border-b border-brand-black/5">
          
          {/* Logo / Identity */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight">Gokul Ram Traders</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gray-400">Authorized Wholesalers Since 2013</p>
          </div>

          {/* Location Block */}
          <div className="space-y-4">
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Headquarters</span>
             <p className="text-xs font-mono tracking-tighter leading-relaxed">
               42/B TENKASI RD.<br />
               RAJAPALAYAM - 626117
             </p>
          </div>

          {/* Contact Block */}
          <div className="space-y-4">
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Direct Contact</span>
             <p className="text-xs font-mono tracking-tighter leading-relaxed">
               +91 94431 23456<br />
               gokulram@email.com
             </p>
          </div>

          {/* Interactive Trigger */}
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2"
          >
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-black">Back to Top</span>
             <div className="w-px h-12 bg-brand-black/10 group-hover:h-16 transition-all duration-500" />
          </button>
        </div>

        {/* Modular Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400">
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-black transition-colors">WhatsApp</a>
          </div>
          
          <div className="text-center md:text-right space-y-1">
             <p>© {new Date().getFullYear()} GOKUL RAM TRADERS</p>
             <p className="opacity-50">Industrial Grade Supply & Logistics</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
