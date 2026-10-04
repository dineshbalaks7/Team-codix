"use client";

import React from "react";
import { Globe, MessageSquare, Code2, Smartphone } from "lucide-react";

const SERVICES = [
  {
    title: "Websites",
    icon: Globe,
    description: "Fast, good-looking sites that turn visitors into customers.",
    chips: ["Business sites", "Landing pages", "E-commerce"],
  },
  {
    title: "AI Chatbots",
    icon: MessageSquare,
    description: "Answer customers and capture leads 24/7, even on WhatsApp.",
    chips: ["Support", "Lead capture", "FAQs"],
  },
  {
    title: "Custom Software",
    icon: Code2,
    description: "Replace spreadsheets with one system built for how you work.",
    chips: ["Management systems", "Dashboards", "Automation"],
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    description: "Android and iOS apps your customers and staff will actually use.",
    chips: ["Android", "iOS", "Push notifications"],
  },
];

export default function Services() {
  const handleCardClick = (e: React.MouseEvent, title: string) => {
    // Pre-select service in Contact form
    window.dispatchEvent(
      new CustomEvent("codix-select-service", { detail: title })
    );

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F] mb-4">
            What we build
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Clean, reliable digital products engineered to grow your business.
          </p>
        </div>

        {/* Strict 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href="#contact"
                onClick={(e) => handleCardClick(e, service.title)}
                className="bg-white border border-[#E2E8F0] rounded-[12px] py-6 sm:py-8 px-8 sm:px-10 flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#0B6BE6] cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B6BE6] focus-visible:ring-offset-2"
                aria-label={`Enquire about ${service.title}`}
              >
                {/* Top: 24px Royal Blue Line Icon, Title, Description */}
                <div>
                  <div className="mb-4">
                    <Icon className="w-6 h-6 text-[#0B6BE6]" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base text-[#475569] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Chips and Enquire Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 mt-auto">
                  <div className="flex flex-wrap items-center gap-2">
                    {service.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1 rounded-full bg-[#C5DAF8] text-[#12264F] text-xs font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B6BE6] hover:text-[#12264F] transition-colors ml-auto">
                    <span>Enquire</span>
                    <span
                      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
