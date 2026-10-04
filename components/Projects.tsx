"use client";

import { ExternalLink, Fuel } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0B6BE6] mb-3">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F]">
            Projects We&apos;ve Done
          </h2>
        </div>

        {/* Single Centered Card (max-width about 900px) */}
        <div className="max-w-[900px] mx-auto bg-white border border-[#E2E8F0] rounded-[12px] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Side (Desktop): Text, Chips, CTA (Mobile: Stacks below visual) */}
            <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] mb-4 tracking-tight">
                  Ganapathi Murugan Fuel Agency
                </h3>

                <p className="text-base text-[#475569] leading-relaxed mb-6">
                  A complete landing page and a full internal management software, integrated with WhatsApp to send offer messages to customers.
                </p>

                {/* Three Small Pill Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="px-3 py-1 rounded-full bg-[#C5DAF8] text-[#12264F] text-xs font-medium">
                    Landing Page
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#C5DAF8] text-[#12264F] text-xs font-medium">
                    Management Software
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#C5DAF8] text-[#12264F] text-xs font-medium">
                    WhatsApp Integration
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="https://ganapathimuruganagency.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B6BE6] hover:bg-[#12264F] text-white text-sm font-semibold transition-colors duration-200"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Side (Desktop): Simple Browser Frame with Fuel Company Icon Visual (Mobile: Stacks on top) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-2xs">
                {/* Simple Browser Chrome (Three small gray dots and the URL) */}
                <div className="bg-[#F8FAFC] px-3 py-2 border-b border-[#E2E8F0] flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8]" />
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8]" />
                    <span className="w-2 h-2 rounded-full bg-[#94A3B8]" />
                  </div>
                  <div className="flex-1 bg-white px-2 py-0.5 rounded border border-[#E2E8F0] text-[10px] text-[#64748B] font-mono truncate">
                    ganapathimuruganagency.com
                  </div>
                </div>

                {/* Fuel Company Graphic Visual */}
                <div className="relative aspect-4/3 w-full bg-[#F8FAFC] flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-20 h-20 rounded-2xl bg-[#EBF3FE] border border-[#C5DAF8] text-[#0B6BE6] flex items-center justify-center mb-4 shadow-2xs">
                    <Fuel className="w-10 h-10 text-[#0B6BE6]" strokeWidth={1.75} />
                  </div>
                  <div className="text-base font-bold text-[#12264F] mb-1">
                    Fuel & Petroleum Operations
                  </div>
                  <div className="text-xs text-[#64748B]">
                    Authorized Retail Dealership & Pump Portal
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
