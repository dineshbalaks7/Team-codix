import { WhatsAppIcon } from "@/components/Icons";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://wa.me/919159540314"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Team Codix on WhatsApp (+91 91595 40314)"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <WhatsAppIcon className="w-5 h-5 fill-current" />
        </div>
        <span className="text-xs font-bold tracking-tight pr-1 hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Tooltip on Desktop hover */}
      <div className="hidden sm:block absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-[#12264F] text-white text-[11px] font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg border border-[#06357A]">
        Instant reply · +91 91595 40314
      </div>
    </aside>
  );
}
