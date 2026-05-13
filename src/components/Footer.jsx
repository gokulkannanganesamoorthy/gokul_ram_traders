export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-brand-black/5">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-10 px-6">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 bg-brand-black rounded-full" />
          <span className="font-bold tracking-tighter uppercase">Gokul Ram Traders</span>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gray-400">
          Best Electrical Partner in India. Authorized Dealer.
        </p>

        <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gray-400">
          © 2024 Design by Antigravity.
        </p>
      </div>
      <div className="h-20" /> {/* Spacer for floating nav */}
    </footer>
  )
}
