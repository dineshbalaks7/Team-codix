import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Team Codix",
  description:
    "Read the Privacy Policy of Team Codix. Learn what information we collect, how we use it, and how your data is protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 text-[#12264F]">
          
          {/* Back to home link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B6BE6] hover:text-[#12264F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>

          {/* Page Title & Last updated */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#64748B] mb-12 pb-8 border-b border-[#E2E8F0]">
            Last updated: October 4, 2026
          </p>

          {/* Document Content */}
          <div className="space-y-10 text-base text-[#334155] leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                1. Who we are
              </h2>
              <p>
                Team Codix (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a software studio that builds websites, AI chatbots, custom software and mobile apps. Contact:{" "}
                <a
                  href="mailto:codix.team26@gmail.com"
                  className="text-[#0B6BE6] underline hover:text-[#12264F]"
                >
                  codix.team26@gmail.com
                </a>
                ,{" "}
                <a
                  href="tel:+919159540314"
                  className="text-[#0B6BE6] underline hover:text-[#12264F]"
                >
                  +91 91595 40314
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                2. Information we collect
              </h2>
              <p>
                We collect only what you give us: your name, phone number or email, the service you are interested in, and the message you send through our contact form, email, WhatsApp or Instagram. We may also collect basic technical data (browser type, pages visited) through standard website analytics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                3. How we use it
              </h2>
              <p>
                To reply to your enquiry, prepare demos and quotes, deliver our services, and improve our website. We do not use your information for unrelated purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                4. Sharing
              </h2>
              <p>
                We do not sell your personal information. We share it only with service providers that help us run the site and communicate with you (for example hosting, email delivery and messaging platforms), and where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                5. Retention and security
              </h2>
              <p>
                We keep enquiry details only as long as needed to respond and to deliver services, and take reasonable steps to protect your information. No online system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                6. Your rights
              </h2>
              <p>
                You may ask us to access, correct or delete your personal information by emailing{" "}
                <a
                  href="mailto:codix.team26@gmail.com"
                  className="text-[#0B6BE6] underline hover:text-[#12264F]"
                >
                  codix.team26@gmail.com
                </a>
                . We will respond within a reasonable time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                7. Third-party links
              </h2>
              <p>
                Our site links to other sites (such as Instagram, WhatsApp and client project websites). We are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                8. Children
              </h2>
              <p>
                Our services are intended for businesses and adults. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                9. Changes
              </h2>
              <p>
                We may update this policy and will change the &ldquo;Last updated&rdquo; date when we do.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
