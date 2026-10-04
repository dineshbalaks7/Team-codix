import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Team Codix",
  description:
    "Review the Terms of Service for engaging Team Codix for websites, AI chatbots, custom software, and mobile apps.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-[#64748B] mb-12 pb-8 border-b border-[#E2E8F0]">
            Last updated: October 4, 2026
          </p>

          {/* Document Content */}
          <div className="space-y-10 text-base text-[#334155] leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                1. About these terms
              </h2>
              <p>
                By using this website or engaging Team Codix, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                2. Our services
              </h2>
              <p>
                We provide website development, AI chatbots, custom software and mobile apps. The scope, timeline and price of each project are agreed in writing (by quotation, proposal, email or message) before work starts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                3. Free demo
              </h2>
              <p>
                Our free demo is a sample or concept shown to help you decide. It remains our property, and it does not create any obligation on either side. It may not be used, copied or published without our written permission unless you engage us to build it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                4. Payments
              </h2>
              <p>
                Prices, advance payments and milestones are set in each quotation. Work may pause if payments are overdue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                5. Client responsibilities
              </h2>
              <p>
                You agree to provide accurate content, materials and timely feedback. Delays in providing these may affect delivery dates. You confirm that you have the right to use any content, logos, images and data you give us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                6. Revisions
              </h2>
              <p>
                The number of revision rounds is stated in the quotation. Additional changes beyond the agreed scope may be charged separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                7. Ownership
              </h2>
              <p>
                After full payment, you own the final deliverables made specifically for you. We keep the right to reuse our general tools, code libraries and know-how, and to show the finished project in our portfolio unless you ask us in writing not to.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                8. Third-party services
              </h2>
              <p>
                Projects may rely on third-party services (hosting, domains, payment gateways, AI and messaging platforms such as WhatsApp). Their fees, terms and availability are outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                9. Warranties and liability
              </h2>
              <p>
                We work to deliver quality results but do not guarantee specific business outcomes such as sales or rankings. To the extent permitted by law, our liability is limited to the amount you paid us for the affected service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                10. Confidentiality
              </h2>
              <p>
                We keep your non-public business information confidential and expect the same from you regarding our work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                11. Termination
              </h2>
              <p>
                Either party may end a project with written notice. Work completed up to that point remains payable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                12. Governing law
              </h2>
              <p>
                These terms are governed by the laws of India. Disputes will be subject to the courts of Chennai, Tamil Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#12264F] mb-3">
                13. Contact
              </h2>
              <p>
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

          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
