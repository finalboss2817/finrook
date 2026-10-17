import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Copy, Check, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
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
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please tell us what you have in mind.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const generatedRef = `ROOK-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setEnquiryRef(generatedRef);

      try {
        const stored = JSON.parse(localStorage.getItem('finrook_inquiries') || '[]');
        stored.push({
          ref: generatedRef,
          ...formData,
          date: new Date().toISOString(),
        });
        localStorage.setItem('finrook_inquiries', JSON.stringify(stored));
      } catch {
        // storage fallback
      }
    }, 400);
  };

  const handleCopySummary = () => {
    const summary = `FINROOK INQUIRY [${enquiryRef}]\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService: ${formData.service}\n\nBrief:\n${formData.description}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Brand Management',
      description: '',
    });
    setErrors({});
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Finrook! My name is ${formData.name || 'there'}. I want to inquire about ${formData.service}: ${formData.description || 'reaching out from your website'}`
  );

  return (
    <section
      id="inquiry"
      className="py-24 px-6 lg:px-16 bg-[#0A0A0A] border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Chapter Header */}
        <div className="pb-8 border-b border-[#1E1E1E] flex items-center justify-between text-xs tracking-wider uppercase text-[#71717A] font-mono">
          <span>THE ACTION STEP</span>
          <span>CHAPTER 07 · YOUR NEXT MOVE</span>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Invitation & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#FF2B06] mb-3">
                Let&apos;s Connect
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                We&apos;ve explored the possibilities. <br />
                <span className="text-[#FF2B06]">What&apos;s your next move?</span>
              </h2>

              <p className="mt-6 text-base text-[#A1A1AA] leading-relaxed font-normal">
                Whether you want to build a brand, explore creator partnerships, organize an event, or produce content that connects with people—let&apos;s talk about what you have in mind.
              </p>

              {/* Direct Channels */}
              <div className="mt-8 space-y-3">
                <a
                  href={`https://wa.me/919920300750?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#141414] border border-[#222222] hover:border-[#333333] rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#25D366]/20 text-[#25D366] rounded-md">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#FF2B06] transition-colors">
                        WhatsApp: +91 99203 00750
                      </div>
                      <div className="text-xs text-[#71717A]">
                        Fastest response for urgent inquiries & briefs
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-colors" />
                </a>

                <a
                  href="tel:+919920300750"
                  className="flex items-center justify-between p-4 bg-[#141414] border border-[#222222] hover:border-[#333333] rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#FF2B06]/20 text-[#FF2B06] rounded-md">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#FF2B06] transition-colors">
                        Call: +91 99203 00750
                      </div>
                      <div className="text-xs text-[#71717A]">
                        Direct line to our coordination team
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-colors" />
                </a>

                <a
                  href="mailto:hello@finrook.com"
                  className="flex items-center justify-between p-4 bg-[#141414] border border-[#222222] hover:border-[#333333] rounded-lg transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#FF2B06]/20 text-[#FF2B06] rounded-md">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#FF2B06] transition-colors">
                        hello@finrook.com
                      </div>
                      <div className="text-xs text-[#71717A]">
                        Direct inbox for written proposals
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Brand Card */}
            <div className="mt-10 p-5 bg-[#141414] border border-[#222222] rounded-lg flex items-center gap-4">
              <FinrookLogo size={40} />
              <div>
                <div className="font-bold text-base text-white tracking-wide">
                  Finrook
                </div>
                <div className="text-xs text-[#71717A]">
                  Your next move backed by the rook.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#222222] rounded-lg p-7 sm:p-9 shadow-md">
            {submitted ? (
              <div className="py-8 flex flex-col justify-center">
                <div className="w-12 h-12 bg-[#FF2B06] text-white rounded-md flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#FF2B06] font-semibold">
                  Inquiry Logged · Ref #{enquiryRef}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  Thank you, {formData.name}.
                </h3>

                <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed font-normal">
                  We received your brief for <span className="font-semibold text-white">{formData.service}</span>. A team member will review your requirement and follow up with <span className="font-semibold text-white">{formData.email}</span> within 24 business hours.
                </p>

                <div className="mt-6 p-4 bg-[#181818] rounded-md border border-[#27272A] text-xs font-mono text-[#D4D4D8] space-y-1.5">
                  <div>Reference: #{enquiryRef}</div>
                  <div>Service: {formData.service}</div>
                  <div className="truncate">Notes: {formData.description}</div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#222222] hover:bg-[#2A2A2A] rounded-md transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#FF2B06]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied' : 'Copy Brief Summary'}</span>
                  </button>

                  <a
                    href={`mailto:hello@finrook.com?subject=Finrook Inquiry Ref ${enquiryRef}&body=${encodeURIComponent(
                      `Hello Finrook,\n\nFollowing up on inquiry #${enquiryRef}.\nName: ${formData.name}\nService: ${formData.service}\n\nNotes:\n${formData.description}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF2B06] hover:bg-[#E62400] rounded-md transition-colors cursor-pointer"
                  >
                    <span>Open Email Backup</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-[#71717A] hover:text-white underline underline-offset-4 ml-auto cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="border-b border-[#222222] pb-4 mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Tell Us What You Need
                  </h3>
                  <p className="text-xs text-[#71717A] mt-1 font-normal">
                    We keep it simple. Fill out your details below and we&apos;ll get in touch.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                    >
                      Your Name or Organization *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Morgan / Horizon Media"
                      className={`w-full px-4 py-3 bg-[#181818] border rounded-md text-sm text-white focus:outline-hidden transition-colors ${
                        errors.name
                          ? 'border-red-500'
                          : 'border-[#27272A] focus:border-[#FF2B06]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="alex@example.com"
                        className={`w-full px-4 py-3 bg-[#181818] border rounded-md text-sm text-white focus:outline-hidden transition-colors ${
                          errors.email
                            ? 'border-red-500'
                            : 'border-[#27272A] focus:border-[#FF2B06]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                      >
                        Phone Number <span className="text-[#71717A]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-[#181818] border border-[#27272A] rounded-md text-sm text-white focus:border-[#FF2B06] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2">
                      Service Required *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((opt) => {
                        const isChecked = formData.service === opt;
                        return (
                          <label
                            key={opt}
                            className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer text-xs transition-colors ${
                              isChecked
                                ? 'bg-[#222222] border-[#FF2B06] text-white font-medium'
                                : 'bg-[#181818] border-[#27272A] text-[#A1A1AA] hover:border-[#383838]'
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={opt}
                              checked={isChecked}
                              onChange={() => setFormData({ ...formData, service: opt })}
                              className="text-[#FF2B06] focus:ring-[#FF2B06]"
                            />
                            <span>{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-xs font-medium uppercase tracking-wider text-[#A1A1AA] mb-2"
                    >
                      Short Description of Your Requirement *
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value });
                        if (errors.description) setErrors({ ...errors, description: '' });
                      }}
                      placeholder="Tell us what you want to achieve, any target dates, budget context, or key questions..."
                      className={`w-full px-4 py-3 bg-[#181818] border rounded-md text-sm text-white focus:outline-hidden transition-colors ${
                        errors.description
                          ? 'border-red-500'
                          : 'border-[#27272A] focus:border-[#FF2B06]'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-xs text-red-500">{errors.description}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#71717A]">
                      Your information is treated with strict confidentiality.
                    </span>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF2B06] hover:bg-[#E62400] transition-colors rounded-md disabled:opacity-60 cursor-pointer shadow-sm"
                    >
                      {submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Requirement</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
