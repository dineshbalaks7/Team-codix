"use client";

import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function FreeDemoBanner() {
  return (
    <section className="relative py-14 sm:py-16 bg-[#12264F] text-white overflow-hidden studio-grid-dark">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#0B6BE6]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06357A] border border-[#C5DAF8]/20 text-[#C5DAF8] text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-[#0B6BE6]" />
            <span>Risk-Free Guarantee</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            See it before you commit.
          </h2>

          {/* Concept Explanation */}
          <p className="text-lg sm:text-xl text-[#C5DAF8] leading-relaxed max-w-2xl mx-auto mb-10">
            Hiring a software studio shouldn’t be a gamble. We build an interactive, clickable preview of your website or custom application first. You test drive your product’s design and workflow before signing any contract or paying a single rupee.
          </p>

          {/* Value Props Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-3">
              <CheckCircle2 className="w-4 h-4 text-[#0B6BE6] flex-shrink-0" />
              <span className="text-xs text-white/90 font-medium">100% Free prototype</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-3">
              <CheckCircle2 className="w-4 h-4 text-[#0B6BE6] flex-shrink-0" />
              <span className="text-xs text-white/90 font-medium">Turnaround in 48-72h</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-3">
              <CheckCircle2 className="w-4 h-4 text-[#0B6BE6] flex-shrink-0" />
              <span className="text-xs text-white/90 font-medium">No credit card or lock-in</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="inline-block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0B6BE6] text-white text-base font-semibold shadow-lg hover:bg-white hover:text-[#12264F] transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Request Your Free Demo</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
