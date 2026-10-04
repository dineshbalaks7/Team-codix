"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12264F] text-white pt-16 pb-12 border-t border-[#06357A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-5 inline-block group" aria-label="Team Codix">
              <div className="relative h-14 w-auto">
                <Image
                  src="/logo-horizontal-white.png"
                  alt="Team Codix"
                  width={220}
                  height={68}
                  className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <div className="text-sm font-bold tracking-widest text-[#0B6BE6] uppercase mb-4">
              WE BUILD DIGITAL PRODUCTS
            </div>

            <p className="text-sm text-[#C5DAF8] leading-relaxed max-w-sm mb-6">
              A premier software studio engineering custom web applications, autonomous AI chatbots, business management systems, and high-performance mobile apps.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/team.codix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Team Codix on Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5DAF8] hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919159540314"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Team Codix on WhatsApp"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5DAF8] hover:text-white hover:bg-[#16A34A] hover:border-[#16A34A] transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:codix.team26@gmail.com"
                aria-label="Send email to Team Codix"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5DAF8] hover:text-white hover:bg-[#0B6BE6] hover:border-[#0B6BE6] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:+919159540314"
                aria-label="Call Team Codix"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#C5DAF8] hover:text-white hover:bg-[#06357A] hover:border-[#06357A] transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5DAF8] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-white/80 hover:text-[#0B6BE6] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-[#0B6BE6] transition-colors">
                  Projects (Selected Work)
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/80 hover:text-[#0B6BE6] transition-colors">
                  Our 5-Step Process
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-[#0B6BE6] transition-colors">
                  About Team Codix
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#0B6BE6] transition-colors">
                  Contact & Free Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5DAF8] mb-5">
              Studio Contact
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:codix.team26@gmail.com"
                  className="font-medium text-white hover:text-[#0B6BE6] transition-colors"
                >
                  codix.team26@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-0.5">
                  Direct Line & WhatsApp
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+919159540314"
                    className="font-medium text-white hover:text-[#0B6BE6] transition-colors"
                  >
                    +91 91595 40314
                  </a>
                  <span className="text-[#94A3B8]">/</span>
                  <a
                    href="https://wa.me/919159540314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#16A34A] hover:underline"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-xs text-[#94A3B8] uppercase tracking-wider mb-0.5">
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/team.codix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-white hover:text-[#E1306C] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>@team.codix</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>
            © {currentYear} Team Codix. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
