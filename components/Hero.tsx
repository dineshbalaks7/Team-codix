"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

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

          {/* Right Column: Polished CSS Mockup (Browser + Mobile phone) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Main Floating Container */}
            <div className="relative w-full max-w-[500px] animate-float">
              
              {/* Browser Mockup */}
              <div className="w-full bg-white rounded-xl border border-[#CBD5E1] shadow-xl overflow-hidden">
                
                {/* Browser Chrome Header */}
                <div className="bg-[#F8FAFC] px-4 py-3 border-b border-[#E2E8F0] flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="flex-1 bg-white px-3 py-1 rounded-md border border-[#E2E8F0] text-[11px] text-[#64748B] font-mono flex items-center justify-between">
                    <span className="truncate">studio.teamcodix.com/portal</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 ml-1" />
                  </div>
                </div>

                {/* Dashboard Screen Content */}
                <div className="p-5 bg-[#FAFCFF] space-y-4">
                  {/* Top Stats Banner */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                        Production Release
                      </div>
                      <div className="text-lg font-bold text-[#12264F] flex items-center gap-2">
                        <span>v2.4 Deployed</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#059669]">
                          Live
                        </span>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-[#0B6BE6]/10 flex items-center justify-center text-[#0B6BE6]">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>

                  {/* 2-column metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                      <div className="text-[11px] text-[#64748B]">Monthly Pipeline</div>
                      <div className="text-base font-bold text-[#12264F] mt-0.5">₹ 28.4L</div>
                      <div className="flex items-center gap-1 text-[11px] text-[#10B981] mt-1 font-medium">
                        <TrendingUp className="w-3 h-3" />
                        <span>+38.5% YoY</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                      <div className="text-[11px] text-[#64748B]">Query Speed</div>
                      <div className="text-base font-bold text-[#12264F] mt-0.5">42ms</div>
                      <div className="flex items-center gap-1 text-[11px] text-[#0B6BE6] mt-1 font-medium">
                        <Sparkles className="w-3 h-3" />
                        <span>Ultra-Fast</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity Bar Widget */}
                  <div className="p-3 rounded-lg bg-white border border-[#E2E8F0]">
                    <div className="text-[11px] font-medium text-[#64748B] mb-2">Automated Sync Flow</div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#334155]">AI Model Inference</span>
                        <span className="text-[#10B981] font-semibold">99.9% Pass</span>
                      </div>
                      <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#0B6BE6] h-full w-[88%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Phone Mockup */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 w-[190px] sm:w-[210px] bg-[#12264F] rounded-[28px] p-2.5 shadow-2xl border-2 border-white/80">
                {/* Screen frame */}
                <div className="bg-white rounded-[20px] p-3 text-[#12264F] space-y-2.5">
                  {/* Dynamic Island */}
                  <div className="mx-auto w-12 h-2.5 bg-[#12264F] rounded-full mb-1" />

                  {/* App Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-tight text-[#12264F]">Team Codix Mobile</span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>

                  {/* Client notification card */}
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2 space-y-1">
                    <div className="text-[9px] font-semibold text-[#0B6BE6] uppercase tracking-wider">
                      Live Notification
                    </div>
                    <div className="text-[10px] font-medium text-[#12264F] leading-tight">
                      Order dispatch verified & invoice synced.
                    </div>
                  </div>

                  {/* Chat snippet */}
                  <div className="bg-[#EBF3FE] border border-[#C5DAF8] rounded-lg p-2 text-[10px] text-[#06357A]">
                    <div className="flex items-center gap-1 font-semibold text-[9px] mb-0.5">
                      <CheckCircle2 className="w-3 h-3 text-[#0B6BE6]" />
                      <span>AI Assistant</span>
                    </div>
                    <span>Sprint milestone completed 2 days ahead of launch.</span>
                  </div>
                </div>
              </div>

              {/* Decorative Full Logo watermark badge */}
              <div className="hidden sm:block absolute -top-6 -left-6 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] p-2.5 rounded-xl shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Team Codix Official Logo"
                  width={64}
                  height={54}
                  className="object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
