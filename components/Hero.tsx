"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PHRASES = [
  "websites that win customers.",
  "AI chatbots that work 24/7.",
  "custom software built for your business.",
  "mobile apps people love.",
  "digital products that help you grow.",
];

const LONGEST_PHRASE = "custom software built for your business.";

// External store subscription for prefers-reduced-motion
function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

// External store subscription for Document Visibility API (tab active/hidden)
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

function getVisibilitySnapshot() {
  return !document.hidden;
}

function getVisibilityServerSnapshot() {
  return true;
}

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(PHRASES[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const isDocumentVisible = useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    getVisibilityServerSnapshot
  );

  // Continuous typing animation effect
  useEffect(() => {
    if (reducedMotion || !isDocumentVisible) return;

    const targetPhrase = PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    // Full phrase typed: hold for about 2 seconds (2000ms) before deleting
    if (!isDeleting && currentText === targetPhrase) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    // Fully deleted: advance to next phrase and pause briefly (250ms)
    if (isDeleting && currentText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, 250);
      return () => clearTimeout(timeout);
    }

    // Step typing / deleting
    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? currentText.length - 1 : currentText.length + 1;
      setCurrentText(targetPhrase.slice(0, nextLength));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex, reducedMotion, isDocumentVisible]);

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-22 overflow-hidden studio-grid-bg border-b border-[#E2E8F0]">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#C5DAF8]/35 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Studio Badge with Brand Tagline & Status */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs mb-6 sm:mb-8">
          <div className="w-5 h-5 relative flex-shrink-0">
            <Image
              src="/icon.png"
              alt="Team Codix Mark"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <span className="text-[11px] sm:text-[12px] font-bold tracking-wider uppercase text-[#12264F]">
            WE BUILD DIGITAL PRODUCTS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B6BE6] animate-pulse" />
          <span className="text-[11px] sm:text-[12px] text-[#64748B] hidden sm:inline">
            Available for New Projects
          </span>
        </div>

        {/* Hero Headline with Zero-Shift Layout & Full Accessibility */}
        <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-extrabold tracking-tight text-[#12264F] leading-[1.08] mb-6 relative">
          {/* Visually hidden sentence for screen readers & SEO */}
          <span className="sr-only">
            Turning bold ideas into websites, AI chatbots, custom software and mobile apps.
          </span>

          {/* Visual Presentation */}
          <span aria-hidden="true" className="flex flex-col items-center justify-center">
            <span className="block text-[#12264F] mb-1 sm:mb-2">
              Turning bold ideas into
            </span>

            {/* Grid container that reserves the height of the longest phrase across all breakpoints */}
            <span className="relative inline-grid text-[#0B6BE6] text-center max-w-full">
              {/* Invisible ghost element establishing exact responsive height */}
              <span className="invisible opacity-0 pointer-events-none select-none col-start-1 row-start-1 text-center" aria-hidden="true">
                {LONGEST_PHRASE}
                <span className="inline-block w-[3px] sm:w-[4px] h-[0.88em] ml-2" />
              </span>

              {/* Active typed phrase rendered in the exact same grid cell */}
              <span className="col-start-1 row-start-1 text-center">
                <span>{reducedMotion ? PHRASES[0] : currentText}</span>
                {!reducedMotion && (
                  <span 
                    className="inline-block w-[3px] sm:w-[4px] h-[0.88em] bg-[#0B6BE6] ml-2 animate-blink align-middle" 
                    aria-hidden="true"
                  />
                )}
              </span>
            </span>
          </span>
        </h1>

        {/* Supporting Line */}
        <p className="text-lg sm:text-xl text-[#334155] font-normal leading-relaxed max-w-2xl mb-10">
          Websites, AI chatbots, custom software and mobile apps, built clean, fast and made to grow your business.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0B6BE6] text-white text-[15px] font-semibold shadow-sm hover:bg-[#06357A] transition-all duration-200 active:scale-[0.98] group"
          >
            <span>Get a Free Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#12264F] text-[15px] font-semibold border border-[#CBD5E1] shadow-2xs hover:bg-[#F8FAFC] hover:border-[#94A3B8] transition-all duration-200 active:scale-[0.98]"
          >
            <span>View Our Work</span>
          </a>
        </div>

      </div>
    </section>
  );
}
