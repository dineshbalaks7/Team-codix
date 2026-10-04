"use client";

import { Bot, Globe, Terminal, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0B6BE6] mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F] mb-4">
            Engineered for measurable business growth.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            We don’t assemble brittle templates. We engineer bespoke, lightning-fast digital products tailored to solve hard business problems and convert visitors into loyal customers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 01: Websites (7 cols) */}
          <div className="lg:col-span-7 group relative bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0B6BE6]/50 rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0B6BE6] bg-[#C5DAF8]/30 px-2.5 py-1 rounded-md">
                  01
                </span>
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#0B6BE6]" />
                  Web Experiences
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] tracking-tight mb-2">
                Websites
              </h3>
              <p className="text-base text-[#334155] font-normal mb-4">
                High-converting business sites, authoritative landing pages, and scalable e-commerce platforms engineered for speed.
              </p>
              
              <div className="text-xs text-[#06357A] font-medium bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5 mb-6 inline-block">
                Focus: Sub-second loading, modern editorial design, and SEO-optimized structures that rank.
              </div>
            </div>

            {/* Custom Visual / Mini UI Snippet */}
            <div className="w-full bg-white border border-[#CBD5E1] rounded-xl p-4 shadow-2xs group-hover:border-[#0B6BE6]/30 transition-colors">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                  <span className="ml-2 text-[11px] font-mono text-[#64748B]">teamcodix.com/client-showcase</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                    99.8 Lighthouse Score
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-[10px] text-[#64748B]">FCP Speed</div>
                  <div className="text-sm font-bold text-[#12264F]">0.4s</div>
                </div>
                <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-[10px] text-[#64748B]">Responsive</div>
                  <div className="text-sm font-bold text-[#0B6BE6]">100% Fluid</div>
                </div>
                <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-[10px] text-[#64748B]">SEO Rank</div>
                  <div className="text-sm font-bold text-[#10B981]">Top Tier</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02: AI Chatbots (5 cols) */}
          <div className="lg:col-span-5 group relative bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0B6BE6]/50 rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0B6BE6] bg-[#C5DAF8]/30 px-2.5 py-1 rounded-md">
                  02
                </span>
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-[#0B6BE6]" />
                  AI Intelligence
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] tracking-tight mb-2">
                AI Chatbots
              </h3>
              <p className="text-base text-[#334155] font-normal mb-4">
                Autonomous 24/7 customer support, smart lead qualification, and contextual FAQ bots trained on your company data.
              </p>

              <div className="text-xs text-[#06357A] font-medium bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5 mb-6 inline-block">
                Focus: Instant resolution rates, CRM integration, and zero hallucination boundaries.
              </div>
            </div>

            {/* Custom Visual: Mini Chat Simulation */}
            <div className="w-full bg-white border border-[#CBD5E1] rounded-xl p-3.5 shadow-2xs space-y-2.5 group-hover:border-[#0B6BE6]/30 transition-colors">
              <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="font-semibold text-[#12264F]">AI Assistant</span>
                </div>
                <span className="text-[10px] text-[#64748B]">Latency: 280ms</span>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#0B6BE6] text-white text-[11px] px-3 py-1.5 rounded-lg rounded-tr-none max-w-[85%]">
                  Can you automate customer support on WhatsApp?
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-[#F1F5F9] text-[#12264F] text-[11px] px-3 py-1.5 rounded-lg rounded-tl-none max-w-[88%] border border-[#E2E8F0]">
                  Yes. We connect custom LLM agents directly with WhatsApp & CRM in days.
                </div>
              </div>
            </div>
          </div>

          {/* Card 03: Custom Software (5 cols) */}
          <div className="lg:col-span-5 group relative bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0B6BE6]/50 rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0B6BE6] bg-[#C5DAF8]/30 px-2.5 py-1 rounded-md">
                  03
                </span>
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#0B6BE6]" />
                  Enterprise Core
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] tracking-tight mb-2">
                Custom Software
              </h3>
              <p className="text-base text-[#334155] font-normal mb-4">
                Enterprise management systems, intuitive internal dashboards, ERP tools, and automated workflow pipelines.
              </p>

              <div className="text-xs text-[#06357A] font-medium bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5 mb-6 inline-block">
                Focus: Eliminating manual spreadsheets and unifying operational processes into one screen.
              </div>
            </div>

            {/* Custom Visual: Mini Architecture Flow */}
            <div className="w-full bg-white border border-[#CBD5E1] rounded-xl p-3.5 shadow-2xs group-hover:border-[#0B6BE6]/30 transition-colors">
              <div className="text-[10px] uppercase font-mono tracking-wider text-[#64748B] mb-2">
                Architecture Pipeline
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                <div className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-[#12264F]">
                  Database
                </div>
                <div className="p-2 bg-[#EBF3FE] border border-[#C5DAF8] rounded-md text-[#0B6BE6] font-semibold">
                  API & Logic
                </div>
                <div className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-[#10B981]">
                  Dashboard
                </div>
              </div>
              <div className="mt-2 text-[10px] text-center text-[#64748B] font-mono">
                Zero data loss · Role-based permissions
              </div>
            </div>
          </div>

          {/* Card 04: Mobile Apps (7 cols) */}
          <div className="lg:col-span-7 group relative bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0B6BE6]/50 rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0B6BE6] bg-[#C5DAF8]/30 px-2.5 py-1 rounded-md">
                  04
                </span>
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-[#0B6BE6]" />
                  Cross-Platform
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] tracking-tight mb-2">
                Mobile Apps
              </h3>
              <p className="text-base text-[#334155] font-normal mb-4">
                Native-performance iOS and Android applications tailored for your field operations, retail customers, and business workflows.
              </p>

              <div className="text-xs text-[#06357A] font-medium bg-white/80 border border-[#E2E8F0] rounded-lg p-2.5 mb-6 inline-block">
                Focus: Offline sync, biometric authentication, push notifications, and buttery 60fps micro-interactions.
              </div>
            </div>

            {/* Custom Visual: Mini Mobile App Screen */}
            <div className="w-full bg-white border border-[#CBD5E1] rounded-xl p-4 shadow-2xs group-hover:border-[#0B6BE6]/30 transition-colors">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-[11px] font-semibold text-[#12264F]">iOS & Android Build</span>
                </div>
                <span className="text-[10px] font-mono text-[#0B6BE6]">React Native / Flutter</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <div className="text-[10px] text-[#64748B]">Push Dispatch</div>
                  <div className="text-xs font-bold text-[#12264F]">Instant Delivery</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <div className="text-[10px] text-[#64748B]">Offline Cache</div>
                  <div className="text-xs font-bold text-[#10B981]">Encrypted SQLite</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
