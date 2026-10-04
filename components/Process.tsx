"use client";

import { MessageSquare, Compass, Palette, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Discuss",
    subtitle: "Discovery & Scope",
    icon: MessageSquare,
    description:
      "We dive deep into your workflow bottlenecks, business objectives, and customer expectations to define clear technical deliverables.",
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Architecture & Roadmap",
    icon: Compass,
    description:
      "We map out the system architecture, select the optimal tech stack, and structure two-week milestone sprints with zero fluff.",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "UI & Interactive Prototype",
    icon: Palette,
    description:
      "We craft high-fidelity interface systems and clickable prototypes so you experience the look and feel before coding begins.",
  },
  {
    number: "04",
    title: "Build",
    subtitle: "Clean Code & Testing",
    icon: Code2,
    description:
      "We write modular, type-safe code with automated test suites, responsive optimizations, and rigorous performance audits.",
  },
  {
    number: "05",
    title: "Launch & Support",
    subtitle: "Deployment & Growth",
    icon: Rocket,
    description:
      "Zero-downtime production deployment followed by continuous monitoring, security updates, and performance tuning.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0B6BE6] mb-3">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F] mb-4">
            A disciplined, transparent process.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            No endless meetings or hidden surprises. A battle-tested 5-step delivery pipeline engineered to turn ideas into robust production software on schedule.
          </p>
        </div>

        {/* Timeline (Desktop: Horizontal, Mobile: Vertical) */}
        <div className="relative">
          
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[40px] right-[40px] h-[2px] bg-[#E2E8F0] z-0">
            <div className="h-full bg-linear-to-r from-[#0B6BE6] via-[#0B6BE6] to-[#C5DAF8] w-full" />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-start bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl border lg:border-none border-[#E2E8F0] shadow-xs lg:shadow-none hover:-translate-y-1 transition-transform duration-200"
                >
                  {/* Step Milestone Badge / Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#12264F] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                      <span className="text-xs font-mono font-bold text-[#C5DAF8]">{step.number}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B6BE6]">
                      <Icon className="w-3.5 h-3.5" />
                      <span className="lg:hidden">Step {index + 1}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#12264F] flex items-center gap-1.5">
                      <span>{step.title}</span>
                    </h3>
                    <div className="text-xs font-semibold text-[#0B6BE6] mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
