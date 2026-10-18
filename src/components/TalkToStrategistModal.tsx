import React, { useState } from 'react';
import { X, Phone, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface TalkToStrategistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const TalkToStrategistModal: React.FC<TalkToStrategistModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Inquiry',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state clean
    }, 4000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Finrook, I'd like to talk to a strategist regarding ${formData.service || 'services'}. My name is ${formData.name || 'there'}.`
    );
    window.open(`https://wa.me/919920300750?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E5DFC0] overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#FAF8F5] border-b border-[#ECE6D8] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#FF4D38] bg-[#FF4D38]/10 px-2.5 py-0.5 rounded-full mb-1">
              Direct Strategist Line
            </span>
            <h3 className="text-xl font-bold text-[#141518]">Talk to a Strategist</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#646770] hover:text-[#141518] hover:bg-[#EAE4D7] rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instant Contact Pills */}
        <div className="p-6 pt-5">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href="tel:9920300750"
              className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFC0] hover:border-[#FF4D38] hover:bg-[#FF4D38]/5 text-[#141518] font-semibold text-sm transition-all group shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#FF4D38] group-hover:scale-110 transition-transform" />
              <span>Call +91 99203 •••••</span>
            </a>
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-sm transition-all group shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>WhatsApp Us</span>
            </button>
          </div>

          <div className="relative flex py-2 items-center mb-5">
            <div className="flex-grow border-t border-[#ECE6D8]"></div>
            <span className="flex-shrink mx-3 text-xs uppercase tracking-wider text-[#8A8D98] font-medium">Or request a callback</span>
            <div className="flex-grow border-t border-[#ECE6D8]"></div>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#141518] mb-1">Request Received!</h4>
              <p className="text-sm text-[#646770] max-w-sm mx-auto mb-4">
                Our lead strategist will connect with you at <strong>{formData.phone || 'your number'}</strong> shortly.
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#141518] text-white text-sm font-semibold hover:bg-[#2A2C35] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#646770] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C4] bg-[#FAF8F5] text-[#141518] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D38]/30 focus:border-[#FF4D38] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#646770] mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99203 00750"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C4] bg-[#FAF8F5] text-[#141518] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D38]/30 focus:border-[#FF4D38] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#646770] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C4] bg-[#FAF8F5] text-[#141518] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D38]/30 focus:border-[#FF4D38] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#646770] mb-1.5">
                  Area of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D8D2C4] bg-[#FAF8F5] text-[#141518] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D38]/30 focus:border-[#FF4D38] transition-all"
                >
                  <option value="Brand Management & Identity">Brand Management & Identity</option>
                  <option value="Creator Management & Deals">Creator Management & Brand Deals</option>
                  <option value="Event Management & Production">Event Management & Production</option>
                  <option value="Content Creation & Media">Content Creation & Social Media</option>
                  <option value="General Consultation">All Services / Full Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#646770] mb-1.5">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to build or achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#D8D2C4] bg-[#FAF8F5] text-[#141518] placeholder-[#9CA3AF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4D38]/30 focus:border-[#FF4D38] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#FF4D38] hover:bg-[#E63F2C] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
              >
                <span>Submit & Get Call Back</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
