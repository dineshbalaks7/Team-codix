"use client";

import { ArrowUpRight, Code2, Palette, Bot } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

const TEAM_MEMBERS = [
  {
    name: "Engineering Lead",
    role: "Full-Stack Architecture & Cloud",
    tag: "Core Systems",
    icon: Code2,
    description: "Specializes in scalable backend pipelines, Next.js applications, and custom business ERPs.",
  },
  {
    name: "Design Principal",
    role: "Product Design & Brand Systems",
    tag: "Interface & Motion",
    icon: Palette,
    description: "Obsessed with editorial typography, design tokens, and friction-free user flows.",
  },
  {
    name: "Mobile & AI Specialist",
    role: "Cross-Platform & LLM Integration",
    tag: "Mobile & Agents",
    icon: Bot,
    description: "Builds high-performance native iOS/Android apps and intelligent customer support bots.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-12 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0B6BE6] mb-3">
              About The Studio
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F]">
              Crafting software with conviction.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-lg text-[#334155] leading-relaxed mb-6 font-normal">
              Team Codix is an independent product studio founded by engineers and designers obsessed with craft. We believe great software should be blazingly fast, deeply intuitive, and engineered with genuine purpose. From initial product strategy to mission-critical business automation, we build digital products that help ambitious businesses outperform their competition.
            </p>

            {/* Instagram Link in About Section */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/team.codix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#12264F] hover:text-[#0B6BE6] hover:border-[#0B6BE6] text-sm font-semibold transition-all duration-200 group"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C] transition-transform group-hover:scale-110" />
                <span>Follow us on Instagram</span>
                <span className="text-[#0B6BE6] font-mono">@team.codix</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl p-7 shadow-2xs hover:shadow-md hover:border-[#0B6BE6]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Avatar Icon Box with Sleek Studio Style */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#12264F] text-[#C5DAF8] flex items-center justify-center shadow-sm border border-[#06357A]">
                      <Icon className="w-7 h-7 text-[#C5DAF8]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0B6BE6] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-md">
                      {member.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#12264F] mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#0B6BE6] mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                  <span>Team Codix Studio</span>
                  <Icon className="w-4 h-4 text-[#0B6BE6]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
