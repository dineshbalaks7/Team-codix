"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import StudioVectorScene from "@/components/StudioVectorScene";

const CHIPS = ["Web", "AI", "Software", "Mobile"];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden studio-grid-bg border-b border-[#E2E8F0]">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C5DAF8]/30 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Studio Badge with Full Logo icon & status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs mb-6 sm:mb-8">
              <div className="w-5 h-5 relative flex-shrink-0">
                <Image
                  src="/icon.png"
                  alt="Team Codix Mark"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="text-[12px] font-semibold tracking-wide uppercase text-[#12264F]">
                Team Codix Studio
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6BE6] animate-pulse" />
              <span className="text-[12px] text-[#64748B]">Available for New Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#12264F] leading-[1.05] mb-6">
              WE BUILD{" "}
              <span className="text-[#0B6BE6] underline decoration-[#C5DAF8] decoration-wavy decoration-from-font">
                DIGITAL PRODUCTS
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-lg sm:text-xl text-[#334155] font-normal leading-relaxed max-w-2xl mb-8">
              Websites, AI chatbots, custom software and mobile apps, built clean, fast and made to grow your business.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0B6BE6] text-white text-[15px] font-semibold shadow-sm hover:bg-[#06357A] transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Get a Free Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#12264F] text-[15px] font-semibold border border-[#CBD5E1] shadow-2xs hover:bg-[#F8FAFC] hover:border-[#94A3B8] transition-all duration-200 active:scale-[0.98]"
              >
                <span>View Our Work</span>
              </a>
            </div>

            {/* Chips Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E2E8F0] w-full max-w-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mr-2">
                Capabilities:
              </span>
              {CHIPS.map((chip, i) => (
                <div
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F1F5F9] text-[#12264F] text-xs font-medium border border-[#E2E8F0]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B6BE6]" />
                  <span>{chip}</span>
                  {i < CHIPS.length - 1 && <span className="text-[#94A3B8] ml-1">·</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Flat Illustration in Brand Colors (Vector Scene) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <StudioVectorScene />
          </div>

        </div>
      </div>
    </section>
  );
}
