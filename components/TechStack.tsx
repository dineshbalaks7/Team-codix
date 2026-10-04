"use client";

const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Supabase",
  "Redis",
  "GraphQL",
  "Framer Motion",
  "Vercel",
];

export default function TechStack() {
  return (
    <section className="py-12 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
            Engineered with modern, battle-tested technologies
          </span>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        
        {/* Subtle Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Strip */}
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {/* Double list to ensure smooth infinite loop */}
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="inline-flex items-center gap-6 mx-5 text-sm sm:text-base font-medium font-mono text-[#64748B] hover:text-[#12264F] transition-colors cursor-default select-none"
            >
              <span>{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
