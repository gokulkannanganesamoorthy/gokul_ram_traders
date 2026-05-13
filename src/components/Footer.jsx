export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-brand-black/5">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gray-400">
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
             <p>© {new Date().getFullYear()} GOKUL RAM ELECTRICALS</p>
             <p className="opacity-40">Industrial Grade Supply & Wholesalers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
