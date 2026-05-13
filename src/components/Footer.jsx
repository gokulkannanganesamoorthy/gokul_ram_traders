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
            <h3 className="text-xl font-bold tracking-tight">Gokul Ram Electricals</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gray-400">Authorized Wholesalers Since 2013</p>
          </div>

          {/* Location Block */}
          <div className="space-y-4">
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Address</span>
             <p className="text-xs font-mono tracking-tighter leading-relaxed">
               141 B/2 ANDALPURAM<br />
               CHATRAPATTI MAIN ROAD<br />
               RAJAPALAYAM - 626108
             </p>
          </div>

          {/* Contact Block */}
          <div className="space-y-4">
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Direct Contact</span>
             <p className="text-xs font-mono tracking-tighter leading-relaxed">
               <a href="tel:+919364501230" className="hover:text-brand-gray-400 transition-colors">+91 93645 01230</a><br />
               <a href="mailto:mecrjpm@gmail.com" className="hover:text-brand-gray-400 transition-colors uppercase">mecrjpm@gmail.com</a>
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
            <a href="https://wa.me/919364501230?text=Hello%20Gokul%20Ram%20Electricals%2C%20I%20would%20like%20to%20enquire%20about%20your%20products." target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-colors">WhatsApp</a>
            <a href="mailto:mecrjpm@gmail.com" className="hover:text-brand-black transition-colors">Email</a>
          </div>
          
          <div className="text-center md:text-right space-y-1">
             <p>© {new Date().getFullYear()} GOKUL RAM ELECTRICALS</p>
             <p className="opacity-50">Industrial Grade Supply & Wholesalers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
