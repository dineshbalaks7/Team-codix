"use client";

import Image from "next/image";
import { ExternalLink, CheckCircle2, ArrowRight, Clock } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0B6BE6] mb-3">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F] mb-4">
            Proven software shipped to real users.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Every digital product we construct is built to run critical operations reliably. Here is an inside look at our recent bespoke software deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Large Card: Ganapathi Murugan Agency (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-[#CBD5E1] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col">
            
            {/* Browser Frame Window Header */}
            <div className="bg-[#F1F5F9] px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]/75" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/75" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]/75" />
                <span className="ml-2 text-xs font-mono text-[#64748B] hidden sm:inline">
                  ganapathimuruganagency.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#0B6BE6] bg-[#EBF3FE] px-2.5 py-0.5 rounded-full border border-[#C5DAF8]">
                  Production System
                </span>
              </div>
            </div>

            {/* Browser Screenshot Mockup */}
            <div className="relative w-full aspect-16/10 bg-[#E2E8F0] border-b border-[#E2E8F0] overflow-hidden group">
              <Image
                src="/ganapathi-murugan.png"
                alt="Ganapathi Murugan Agency Custom Business Software Portal"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Project Tag */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B6BE6] bg-[#C5DAF8]/30 px-3 py-1 rounded-md">
                    Custom Business Software
                  </span>
                  <span className="text-xs text-[#64748B] font-medium">
                    Wholesale ERP & Distribution Management
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] mb-4">
                  Ganapathi Murugan Agency
                </h3>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#EF4444] mb-1">
                      The Challenge
                    </div>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      Manual paper receipts, disjointed godown stock records, and delayed dealer dispatch queues were limiting daily order fulfillment and causing inventory slippage.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#16A34A] mb-1">
                      The Solution
                    </div>
                    <p className="text-sm text-[#14532D] leading-relaxed">
                      A centralized cloud portal unifying multi-warehouse inventory, instant B2B invoice generation, automated payment ledger tracking, and live shipment dispatch.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                    Key Features Built
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6BE6] flex-shrink-0 mt-0.5" />
                      <span>Real-Time Multi-Godown Stock & Batch Sync</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6BE6] flex-shrink-0 mt-0.5" />
                      <span>Automated GST Billing & Invoicing System</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6BE6] flex-shrink-0 mt-0.5" />
                      <span>Dealer Order Portal & Delivery Route Tracking</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6BE6] flex-shrink-0 mt-0.5" />
                      <span>Role-Based Staff Permissions & Credit Ledgers</span>
                    </div>
                  </div>
                </div>

                {/* Measurable Benefit Banner */}
                <div className="p-4 rounded-xl bg-[#EBF3FE] border border-[#C5DAF8] text-[#06357A] mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B6BE6] mb-1">
                    Quantified Outcome
                  </div>
                  <p className="text-sm font-semibold">
                    Cut order fulfillment turnaround by 75% and eliminated inventory variance across regional supply chains.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <a
                  href="https://ganapathimuruganagency.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12264F] text-white text-sm font-semibold hover:bg-[#0B6BE6] transition-colors group"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="text-xs text-[#64748B] font-mono">
                  Production Deploy · Verified
                </span>
              </div>
            </div>

          </div>

          {/* Placeholder Card: More Projects Coming Soon (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-dashed border-[#CBD5E1] rounded-2xl p-8 flex flex-col justify-between text-left relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-semibold text-[#64748B] mb-6">
                <Clock className="w-3.5 h-3.5 text-[#0B6BE6]" />
                In Active Engineering
              </div>

              <h3 className="text-2xl font-bold text-[#12264F] mb-4">
                More projects coming soon
              </h3>

              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                We are actively developing bespoke software systems, AI-powered support infrastructure, and mobile applications for a select group of scaling enterprises.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#F1F5F9]">
                <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-semibold text-[#12264F]">AI Knowledge Agent</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Fintech lead routing & compliance bot</div>
                </div>

                <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-semibold text-[#12264F]">Cross-Platform Fleet App</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Real-time driver dispatch & telemetry</div>
                </div>

                <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xs font-semibold text-[#12264F]">Direct-to-Consumer Store</div>
                  <div className="text-xs text-[#64748B] mt-0.5">Headless Next.js commerce experience</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F8FAFC] hover:bg-[#EBF3FE] text-[#12264F] hover:text-[#0B6BE6] border border-[#CBD5E1] text-xs font-bold transition-all"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
