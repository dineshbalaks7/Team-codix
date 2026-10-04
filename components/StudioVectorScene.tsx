"use client";

import Image from "next/image";
import { Globe, Bot, Terminal, Smartphone } from "lucide-react";

export default function StudioVectorScene() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      
      {/* Background Subtle Studio Grid Glow */}
      <div className="absolute inset-0 bg-[#0B6BE6]/5 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Composition Container */}
      <div className="relative aspect-4/3 w-full bg-[#FAFCFF] border border-[#CBD5E1] rounded-2xl p-5 sm:p-7 shadow-xl overflow-hidden flex items-center justify-center">
        
        {/* Subtle Background Circuit / Flow Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="scene-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#C5DAF8" strokeWidth="0.75" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scene-grid)" />
          
          {/* Connection vectors between services */}
          <path
            d="M 140 110 L 270 110 L 270 200 L 400 200"
            fill="none"
            stroke="#0B6BE6"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          <path
            d="M 220 280 L 320 280 L 320 180"
            fill="none"
            stroke="#12264F"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
        </svg>

        {/* --- SERVICE 1: BROWSER WINDOW (Websites) --- Top Left */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-[240px] sm:w-[280px] bg-white border border-[#CBD5E1] rounded-xl shadow-md overflow-hidden z-20 transition-transform duration-300 hover:-translate-y-1">
          {/* Browser Chrome Bar */}
          <div className="bg-[#12264F] px-3 py-2 flex items-center justify-between border-b border-[#06357A]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            </div>
            <div className="bg-white/10 px-2.5 py-0.5 rounded text-[10px] font-mono text-[#C5DAF8] flex items-center gap-1 truncate max-w-[130px]">
              <Globe className="w-2.5 h-2.5 text-[#0B6BE6]" />
              <span>codix.web/store</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B6BE6]" />
          </div>

          {/* Browser Inner Page Canvas */}
          <div className="p-3 sm:p-3.5 space-y-2 bg-white">
            <div className="flex items-center justify-between">
              <div className="h-3 w-16 bg-[#12264F] rounded-xs" />
              <div className="flex gap-1.5">
                <div className="h-2 w-7 bg-[#E2E8F0] rounded-xs" />
                <div className="h-2 w-7 bg-[#E2E8F0] rounded-xs" />
              </div>
            </div>
            <div className="h-4 w-36 bg-[#0B6BE6] rounded-xs" />
            <div className="h-2 w-full bg-[#F1F5F9] rounded-xs" />
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <div className="p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-sm text-[9px] font-medium text-[#12264F]">
                Fast Commerce
              </div>
              <div className="p-1.5 bg-[#EBF3FE] border border-[#C5DAF8] rounded-sm text-[9px] font-semibold text-[#0B6BE6]">
                99.8 Speed Score
              </div>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: CHATBOT BUBBLE (AI Chatbots) --- Top Right */}
        <div className="absolute top-8 sm:top-10 right-3 sm:right-6 w-[200px] sm:w-[230px] bg-white border border-[#CBD5E1] rounded-2xl p-3 sm:p-3.5 shadow-lg z-30 transition-transform duration-300 hover:-translate-y-1">
          {/* Bot Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#0B6BE6] text-white flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#12264F] leading-tight">AI Assistant</div>
                <div className="text-[9px] text-[#10B981] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Active 24/7
                </div>
              </div>
            </div>
            <span className="text-[9px] font-mono text-[#0B6BE6] bg-[#C5DAF8]/30 px-1.5 py-0.5 rounded">
              0.2s
            </span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-1.5 text-[10px]">
            <div className="bg-[#F1F5F9] text-[#12264F] p-2 rounded-xl rounded-tl-xs border border-[#E2E8F0] leading-snug">
              How can I automate your lead capture?
            </div>
            <div className="bg-[#0B6BE6] text-white p-2 rounded-xl rounded-tr-xs leading-snug font-medium">
              Connected to CRM & WhatsApp. ⚡
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: DASHBOARD PANEL (Custom Software) --- Bottom Left */}
        <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-6 w-[250px] sm:w-[290px] bg-white border border-[#CBD5E1] rounded-xl p-3 sm:p-4 shadow-md z-30 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#0B6BE6]" />
              <span className="text-[11px] font-bold text-[#12264F]">Custom Business ERP</span>
            </div>
            <span className="text-[9px] font-mono uppercase bg-[#10B981]/10 text-[#059669] px-1.5 py-0.5 rounded font-semibold">
              Live Sync
            </span>
          </div>

          {/* Metrics & Vector Bar Graph */}
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            <div className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <div className="text-[9px] text-[#64748B]">Automated Invoices</div>
              <div className="text-xs font-bold text-[#12264F]">1,420 Bills</div>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <div className="text-[9px] text-[#64748B]">Warehouse Sync</div>
              <div className="text-xs font-bold text-[#0B6BE6]">100% Accurate</div>
            </div>
          </div>

          {/* Vector Progress / System Pipeline Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[9px] text-[#64748B] font-mono">
              <span>Database Pipeline</span>
              <span className="text-[#0B6BE6] font-semibold">42ms Query</span>
            </div>
            <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden">
              <div className="bg-[#0B6BE6] h-full w-[85%] rounded-full" />
            </div>
          </div>
        </div>

        {/* --- SERVICE 4: PHONE APP (Mobile Apps) --- Bottom Right */}
        <div className="absolute -bottom-3 sm:bottom-3 right-4 sm:right-8 w-[170px] sm:w-[190px] bg-[#12264F] rounded-[24px] p-2 sm:p-2.5 shadow-2xl border-2 border-white z-40 transition-transform duration-300 hover:-translate-y-1">
          <div className="bg-white rounded-[18px] p-2.5 sm:p-3 text-[#12264F] space-y-2">
            {/* Phone Notch */}
            <div className="mx-auto w-10 h-2 bg-[#12264F] rounded-full mb-1" />

            {/* Mobile Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-[#0B6BE6]" />
                <span className="text-[10px] font-bold text-[#12264F]">Codix App</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </div>

            {/* Notification / Order Card */}
            <div className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg space-y-0.5">
              <div className="text-[8px] font-semibold text-[#0B6BE6] uppercase tracking-wider">
                Push Notification
              </div>
              <div className="text-[9px] font-bold text-[#12264F] leading-tight">
                Order dispatched & signed
              </div>
            </div>

            {/* Mobile Action Pill */}
            <div className="p-1.5 bg-[#0B6BE6] text-white rounded-md text-center text-[9px] font-semibold">
              iOS & Android Native
            </div>
          </div>
        </div>

        {/* Studio Brand Floating Watermark Seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-15">
          <div className="w-28 h-28 relative">
            <Image
              src="/icon.png"
              alt="Team Codix Mark"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>

      {/* Caption badge beneath the vector scene */}
      <div className="mt-4 flex items-center justify-between px-2 text-xs text-[#64748B]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B6BE6]" />
          <span className="font-semibold text-[#12264F]">Integrated Studio Ecosystem:</span>
          <span>Web · AI · Software · Mobile</span>
        </div>
        <span className="font-mono text-[11px] text-[#0B6BE6] hidden sm:inline">
          Navy #12264F · Royal #0B6BE6 · Light #C5DAF8
        </span>
      </div>

    </div>
  );
}
