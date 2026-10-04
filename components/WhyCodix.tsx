"use client";

const POINTS = [
  {
    numeral: "01",
    statement: "Clean modern design.",
    subtitle: "Editorial craftsmanship that elevates your brand identity.",
    description:
      "We strictly reject generic cookie-cutter templates, distracting bloat, and gimmicky animations. Every line of code and pixel of interface is meticulously structured to deliver clear hierarchies, instant comprehension, and a premier first impression.",
  },
  {
    numeral: "02",
    statement: "Fast, predictable delivery.",
    subtitle: "Production-ready digital products shipped in weeks.",
    description:
      "We work in rapid, disciplined sprints with direct founder communication. By utilizing battle-tested component architectures and modern toolchains, we eliminate agency bureaucracy and launch your software on schedule.",
  },
  {
    numeral: "03",
    statement: "Affordable for small businesses.",
    subtitle: "Enterprise-grade engineering without excessive overhead.",
    description:
      "High-end custom software shouldn’t be restricted to deep-pocketed tech giants. We keep our studio nimble and overhead low, offering transparent, fixed-scope pricing that delivers outstanding return on investment for scaling businesses.",
  },
  {
    numeral: "04",
    statement: "Reliable ongoing support.",
    subtitle: "A long-term engineering partner invested in your scale.",
    description:
      "We don't ship and vanish. We support your systems with proactive performance monitoring, security patch management, feature iteration, and round-the-clock availability as your customer base expands.",
  },
];

export default function WhyCodix() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0B6BE6] mb-3">
            Why Team Codix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F] mb-4">
            Built different by design.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            We operate as your dedicated internal product team—moving fast, sweating the smallest details, and focusing squarely on outcomes.
          </p>
        </div>

        {/* Clean 2-Column Grid with Large Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {POINTS.map((point) => (
            <div
              key={point.numeral}
              className="bg-white border border-[#CBD5E1] rounded-2xl p-8 sm:p-10 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Large Numeral */}
                <div className="text-5xl sm:text-6xl font-extrabold font-mono text-[#0B6BE6]/20 tracking-tighter mb-4">
                  {point.numeral}
                </div>

                {/* Bold Statement */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F] mb-2 tracking-tight">
                  {point.statement}
                </h3>

                <div className="text-sm font-semibold text-[#0B6BE6] mb-4">
                  {point.subtitle}
                </div>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                  Guaranteed Standard
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0B6BE6]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
