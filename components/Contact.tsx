"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

const SERVICE_OPTIONS = [
  "Website",
  "AI Chatbot",
  "Custom Software",
  "Mobile App",
  "Not sure",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Website",
    message: "",
    honeypot: "",
    agreedToTerms: false,
  });

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const selected = customEvent.detail;
      if (!selected) return;

      let matchedService = selected;
      if (selected === "Websites") matchedService = "Website";
      else if (selected === "AI Chatbots") matchedService = "AI Chatbot";
      else if (selected === "Mobile Apps") matchedService = "Mobile App";

      if (SERVICE_OPTIONS.includes(matchedService)) {
        setFormData((prev) => ({ ...prev, service: matchedService }));
      }
    };

    window.addEventListener("codix-select-service", handleSelectService);
    return () => window.removeEventListener("codix-select-service", handleSelectService);
  }, []);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }
    if (!formData.contact.trim() || formData.contact.trim().length < 5) {
      errors.contact = "Please provide your email address or phone number.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please write a brief message (minimum 10 characters).";
    }
    if (!formData.agreedToTerms) {
      errors.agreedToTerms = "Please agree to the Privacy Policy and Terms of Service to continue.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        if (data?.errors) {
          setFieldErrors(data.errors);
        }
        throw new Error(data?.error || "Failed to send message. Please try again or reach out on WhatsApp.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        contact: "",
        service: "Website",
        message: "",
        honeypot: "",
        agreedToTerms: false,
      });
      setFieldErrors({});
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Ethos */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0B6BE6] mb-4">
                Start A Project
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12264F] mb-6">
                Let&apos;s build something great.
              </h2>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-10">
                Ready to accelerate your operations or build a new digital flagship? Share your requirements with us. We reply within 24 hours with an honest estimate and free architecture demo.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <a
                  href="mailto:codix.team26@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#0B6BE6] shadow-2xs hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#EBF3FE] text-[#0B6BE6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B6BE6] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                      Email Inquiries
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#12264F] truncate group-hover:text-[#0B6BE6] transition-colors">
                      codix.team26@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone / WhatsApp Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+919159540314"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#0B6BE6] shadow-2xs hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] text-[#12264F] flex items-center justify-center flex-shrink-0 group-hover:bg-[#12264F] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                        Call Direct
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#12264F] truncate">
                        +91 91595 40314
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919159540314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#10B981] shadow-2xs hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                        WhatsApp Chat
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#12264F] truncate group-hover:text-[#16A34A] transition-colors">
                        +91 91595 40314
                      </div>
                    </div>
                  </a>
                </div>

                {/* Instagram Card */}
                <a
                  href="https://www.instagram.com/team.codix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#E1306C] shadow-2xs hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#FDF2F8] text-[#E1306C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                      Instagram Updates
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#12264F] group-hover:text-[#E1306C] transition-colors">
                      @team.codix
                    </div>
                  </div>
                </a>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-xs text-[#64748B]">
              <span className="font-semibold text-[#12264F]">Response Guarantee:</span> All inquiries are reviewed by our lead engineers within 24 business hours.
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#CBD5E1] rounded-2xl p-7 sm:p-10 shadow-md">
            
            {success ? (
              <div className="py-12 px-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#10B981] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#12264F]">
                  Inquiry Received!
                </h3>
                <p className="text-sm sm:text-base text-[#475569] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Team Codix. Our engineering team has received your project details and will review them immediately. We will contact you within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#F1F5F9] text-[#12264F] hover:bg-[#E2E8F0] text-sm font-semibold transition-colors"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#12264F] mb-1">
                    Request Your Free Demo & Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Fill in your details below and we’ll get back to you with next steps.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FEE2E2] text-[#991B1B] text-xs sm:text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#DC2626]" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {/* Honeypot anti-spam field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Do not fill this</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  >
                    Your Name <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#12264F] placeholder:text-[#94A3B8] transition-colors focus:outline-hidden ${
                      fieldErrors.name
                        ? "border-[#EF4444] focus:border-[#EF4444]"
                        : "border-[#CBD5E1] focus:border-[#0B6BE6]"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Phone or Email Field */}
                <div>
                  <label
                    htmlFor="contact-detail"
                    className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  >
                    Phone Number or Email <span className="text-[#EF4444]">*</span>
                  </label>
                  <input
                    id="contact-detail"
                    type="text"
                    placeholder="e.g. anand@company.com or +91 98765 43210"
                    value={formData.contact}
                    onChange={(e) => {
                      setFormData({ ...formData, contact: e.target.value });
                      if (fieldErrors.contact) setFieldErrors({ ...fieldErrors, contact: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#12264F] placeholder:text-[#94A3B8] transition-colors focus:outline-hidden ${
                      fieldErrors.contact
                        ? "border-[#EF4444] focus:border-[#EF4444]"
                        : "border-[#CBD5E1] focus:border-[#0B6BE6]"
                    }`}
                  />
                  {fieldErrors.contact && (
                    <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{fieldErrors.contact}</p>
                  )}
                </div>

                {/* Service Needed Dropdown */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  >
                    Service Needed <span className="text-[#EF4444]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#12264F] focus:border-[#0B6BE6] transition-colors focus:outline-hidden cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2"
                  >
                    Project Details / Message <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Briefly describe what you're building, target timeline, or current challenges..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#12264F] placeholder:text-[#94A3B8] transition-colors focus:outline-hidden resize-none ${
                      fieldErrors.message
                        ? "border-[#EF4444] focus:border-[#EF4444]"
                        : "border-[#CBD5E1] focus:border-[#0B6BE6]"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.agreedToTerms}
                      onChange={(e) => {
                        setFormData({ ...formData, agreedToTerms: e.target.checked });
                        if (fieldErrors.agreedToTerms) {
                          setFieldErrors({ ...fieldErrors, agreedToTerms: "" });
                        }
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-[#CBD5E1] text-[#0B6BE6] focus:ring-[#0B6BE6] cursor-pointer"
                    />
                    <span className="text-xs text-[#475569] leading-relaxed">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-[#0B6BE6] font-medium underline hover:text-[#12264F]">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-[#0B6BE6] font-medium underline hover:text-[#12264F]">
                        Terms of Service
                      </Link>
                      . <span className="text-[#EF4444]">*</span>
                    </span>
                  </label>
                  {fieldErrors.agreedToTerms && (
                    <p className="mt-1.5 text-xs text-[#DC2626] font-medium">{fieldErrors.agreedToTerms}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0B6BE6] hover:bg-[#06357A] disabled:opacity-75 disabled:cursor-not-allowed text-white text-base font-semibold shadow-md transition-all active:scale-[0.99] group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#64748B]">
                  By submitting this form you agree to our{" "}
                  <Link href="/privacy-policy" className="text-[#0B6BE6] underline hover:text-[#12264F]">
                    Privacy Policy
                  </Link>.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
