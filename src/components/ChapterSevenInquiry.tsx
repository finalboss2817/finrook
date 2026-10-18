import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Copy, Check, Mail, Phone, MessageCircle, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { FinrookLogo } from './FinrookLogo';

interface ChapterSevenInquiryProps {
  initialService?: string;
  initialNote?: string;
}

export const ChapterSevenInquiry: React.FC<ChapterSevenInquiryProps> = ({
  initialService,
  initialNote,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Brand Management',
    description: initialNote || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNote) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description
          ? `${prev.description}\n\n${initialNote}`
          : initialNote,
      }));
    }
  }, [initialNote]);

  const serviceOptions = [
    'Brand Management',
    'Creator Management / Brand Deals',
    'Event Management',
    'Content Creation / Management',
    'Other Move',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name or organization.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone or WhatsApp number.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please tell us briefly what you want to achieve.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    setTimeout(() => {
      const generatedRef = `FRK-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnquiryRef(generatedRef);
      setSubmitting(false);
      setSubmitted(true);

      try {
        const stored = JSON.parse(localStorage.getItem('finrook_inquiries') || '[]');
        stored.push({
          ref: generatedRef,
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('finrook_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.error('Failed to cache inquiry locally:', err);
      }
    }, 600);
  };

  const handleCopySummary = () => {
    const summary = `FINROOK INQUIRY [#${enquiryRef}]\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nDetails: ${formData.description}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Finrook team, I want to discuss a project:\nName: ${formData.name || 'Not provided'}\nService: ${formData.service}\nDetails: ${formData.description || 'General inquiry'}`
  );

  return (
    <section
      id="inquiry"
      className="py-24 px-6 lg:px-16 bg-[#FAF8F5] border-b border-[#E5DFC0]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-6 border-b border-[#E5DFC0] flex items-center justify-between text-xs tracking-wider uppercase text-[#6E6A61] font-mono">
          <span className="font-semibold text-[#141518]">DIRECT CONTACT</span>
          <span className="text-[#5C5952]">CHAPTER 08 · MAKE YOUR NEXT MOVE</span>
        </div>

        {/* Narrative Section Header */}
        <div className="mt-12 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E1382B] mb-3">
            Start The Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141518] leading-tight">
            Every great move begins <br />
            <span className="text-[#E1382B]">with a simple conversation.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C5952] leading-relaxed font-normal">
            Tell us about your brand, creator roster, upcoming event, or content production needs. You can fill out the form or reach out directly on WhatsApp or call.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Info & Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Phone & WhatsApp Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8C887E] font-bold mb-4">
                Fastest Response Channels:
              </div>

              <div className="space-y-4">
                {/* WhatsApp Primary Card */}
                <a
                  href={`https://wa.me/919920300750?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-[#FFFFFF] border border-[#25D366]/40 hover:border-[#25D366] rounded-xl transition-all shadow-2xs group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-[#25D366]/15 text-[#128C7E] rounded-lg">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#141518] group-hover:text-[#128C7E] transition-colors">
                        WhatsApp Consultation
                      </div>
                      <div className="text-xs text-[#6E6A61] mt-0.5">
                        Direct chat for project briefs and quick questions
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#128C7E] bg-[#25D366]/10 px-3 py-1.5 rounded-full flex items-center gap-1 group-hover:bg-[#25D366]/20 transition-colors">
                    <span>Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* Direct Phone Call Card with Masking & Reveal */}
                <div className="p-5 bg-[#FFFFFF] border border-[#E5DFC0] rounded-xl transition-all shadow-2xs">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 bg-[#FFF1F0] text-[#E1382B] rounded-lg">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[#8C887E] font-semibold">
                          Direct Line
                        </div>
                        <div className="text-sm font-bold text-[#141518] flex items-center gap-2 mt-0.5">
                          <span className="tracking-wider">
                            {showPhone ? '+91 99203 00750' : '+91 99203 •••••'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowPhone(!showPhone)}
                        className="p-2 text-xs text-[#6E6A61] hover:text-[#141518] hover:bg-[#FAF8F5] border border-[#E5DFC0] rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                        title={showPhone ? 'Mask number' : 'Reveal full number'}
                      >
                        {showPhone ? (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Mask</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5 text-[#E1382B]" />
                            <span className="font-semibold text-[#E1382B]">Reveal</span>
                          </>
                        )}
                      </button>

                      <a
                        href="tel:+919920300750"
                        className="px-3 py-2 bg-[#E1382B] hover:bg-[#C92F23] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow-2xs"
                      >
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Email Card */}
                <a
                  href="mailto:hello@finrook.com"
                  className="flex items-center justify-between p-5 bg-[#FFFFFF] border border-[#E5DFC0] hover:border-[#E1382B] rounded-xl transition-all shadow-2xs group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-[#FAF8F5] text-[#141518] rounded-lg border border-[#E5DFC0]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#141518] group-hover:text-[#E1382B] transition-colors">
                        hello@finrook.com
                      </div>
                      <div className="text-xs text-[#6E6A61] mt-0.5">
                        Direct inbox for written decks and formal RFPs
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8C887E] group-hover:text-[#141518] transition-colors" />
                </a>
              </div>
            </div>

            {/* Brand Card */}
            <div className="mt-8 p-6 bg-[#FFFFFF] border border-[#E5DFC0] rounded-xl flex items-center gap-4 shadow-2xs">
              <FinrookLogo size={42} />
              <div>
                <div className="font-bold text-base text-[#141518]">
                  Finrook
                </div>
                <div className="text-xs text-[#6E6A61]">
                  Your next move backed by the rook.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5DFC0] rounded-2xl p-7 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-6 flex flex-col justify-center">
                <div className="w-12 h-12 bg-[#E1382B] text-white rounded-xl flex items-center justify-center mb-5 shadow-xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#E1382B] font-bold">
                  Inquiry Received · Ref #{enquiryRef}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141518] mt-2">
                  Thank you, {formData.name}.
                </h3>

                <p className="mt-3 text-sm text-[#5C5952] leading-relaxed">
                  We received your inquiry regarding <span className="font-bold text-[#141518]">{formData.service}</span>. Our team will review your requirements and reach out to you at <span className="font-bold text-[#141518]">{formData.phone || formData.email}</span> within 24 business hours.
                </p>

                <div className="mt-6 p-4 bg-[#FAF8F5] rounded-xl border border-[#E5DFC0] text-xs font-mono text-[#4A4843] space-y-1.5">
                  <div>Reference: #{enquiryRef}</div>
                  <div>Service: {formData.service}</div>
                  <div>Contact: {formData.phone || formData.email}</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F2EDE4] border border-[#E5DFC0] text-xs font-semibold text-[#141518] rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Summary Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/919920300750?text=${whatsappMessage}%20(Ref:%20${enquiryRef})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Brand Management',
                        description: '',
                      });
                    }}
                    className="px-4 py-2.5 text-xs text-[#8C887E] hover:text-[#141518] transition-colors cursor-pointer"
                  >
                    Submit another brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#141518]">
                    Send a Project Brief
                  </h3>
                  <p className="mt-1 text-xs text-[#6E6A61]">
                    No obligation. We reply with clear next steps and timeline.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase tracking-wider text-[#141518] font-bold mb-2">
                    Your Name or Organization *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma / Apex Athletics"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFC0] rounded-lg text-sm text-[#141518] placeholder-[#9E9A90] focus:outline-none focus:border-[#E1382B] focus:bg-[#FFFFFF] transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#E1382B]">{errors.name}</p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-mono uppercase tracking-wider text-[#141518] font-bold mb-2">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFC0] rounded-lg text-sm text-[#141518] placeholder-[#9E9A90] focus:outline-none focus:border-[#E1382B] focus:bg-[#FFFFFF] transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-[#E1382B]">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inquiry-phone" className="block text-xs font-mono uppercase tracking-wider text-[#141518] font-bold mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 99203 00750"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFC0] rounded-lg text-sm text-[#141518] placeholder-[#9E9A90] focus:outline-none focus:border-[#E1382B] focus:bg-[#FFFFFF] transition-colors"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-[#E1382B]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="inquiry-service" className="block text-xs font-mono uppercase tracking-wider text-[#141518] font-bold mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    id="inquiry-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFC0] rounded-lg text-sm text-[#141518] focus:outline-none focus:border-[#E1382B] focus:bg-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#FFFFFF] text-[#141518]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="inquiry-desc" className="block text-xs font-mono uppercase tracking-wider text-[#141518] font-bold mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="inquiry-desc"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="What are you building or planning? Tell us about your goals, timelines, or any specific questions you have."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5DFC0] rounded-lg text-sm text-[#141518] placeholder-[#9E9A90] focus:outline-none focus:border-[#E1382B] focus:bg-[#FFFFFF] transition-colors resize-y"
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-xs text-[#E1382B]">{errors.description}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#E1382B] hover:bg-[#C92F23] text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#8C887E]">
                  All project briefs are kept confidential. Direct consultations are available via WhatsApp or our coordination line.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
