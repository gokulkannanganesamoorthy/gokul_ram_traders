export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-white pt-32 pb-12 border-t border-brand-black/5">
      <div className="container-wide">
        
        {/* Unified Action Zone (Formerly CTA) */}
        <div className="mb-32">
           <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
              <div className="max-w-xl">
                 <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gray-400 mb-6">Engagement</p>
                 <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.9] mb-8">
                    Ready for your <br />
                    <span className="font-medium italic">next project?</span>
                 </h2>
                 <p className="text-brand-gray-600 text-sm leading-relaxed max-w-sm">
                    Contact our technical team for wholesale pricing, stock availability, and professional installation support.
                 </p>
              </div>

              {/* High-Level Actions */}
              <div className="flex flex-col gap-8 w-full md:w-auto">
                 <a 
                   href="https://wa.me/919364501230" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="btn-primary"
                 >
                    <span>WhatsApp Inquiry</span>
                 </a>
                 <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gray-400">Direct Line</span>
                    <a href="tel:+919364501230" className="text-2xl font-medium tracking-tight hover:text-brand-gray-400 transition-colors">+91 93645 01230</a>
                 </div>
              </div>
           </div>
        </div>

        {/* Technical Data Layer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-24 py-24 border-y border-brand-black/5 mb-12">
          
          {/* Identity */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight">Gokul Ram Electricals</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gray-400">Authorized Wholesalers Since 2013</p>
          </div>

          {/* Location */}
          <div className="space-y-4">
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Headquarters</span>
             <p className="text-xs font-mono tracking-tighter leading-relaxed">
               141 B/2 ANDALPURAM<br />
               CHATRAPATTI MAIN ROAD<br />
               RAJAPALAYAM - 626108
             </p>
          </div>

          {/* Email */}
          <div className="space-y-4">
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">Official Channel</span>
             <p className="text-xs font-mono tracking-tighter leading-relaxed uppercase">
               <a href="mailto:mecrjpm@gmail.com" className="hover:text-brand-gray-400 transition-colors">mecrjpm@gmail.com</a>
             </p>
          </div>

          {/* Back to top */}
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2"
          >
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-black">Back to Top</span>
             <div className="w-px h-12 bg-brand-black/10 group-hover:h-16 transition-all duration-500" />
          </button>
        </div>

        {/* Final Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400">
           <p>© {new Date().getFullYear()} GOKUL RAM ELECTRICALS</p>
           <p className="opacity-50">Industrial Grade Supply & Wholesalers</p>
        </div>
      </div>
    </footer>
  );
}
