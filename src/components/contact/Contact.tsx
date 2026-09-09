import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../../data/profile';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#E85D36', '#111111', '#EDE9DF']
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#EDE9DF] text-[#111111] py-24 sm:py-36 px-6 sm:px-10 hairline-b overflow-hidden"
      aria-label="Contact Sairaj Bhandalkar"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Header Ruler */}
        <div className="flex items-center justify-between pb-4 hairline-b font-mono text-xs tracking-widest uppercase text-[#77736B]">
          <span>08 / TRANSMISSION</span>
          <span>COMMUNICATION & INQUIRIES</span>
        </div>

        {/* Monumental Headline */}
        <div className="max-w-5xl">
          <h2 className="font-serif text-subhuge-editorial font-light tracking-tight uppercase leading-tightest text-[#111111]">
            LET'S BUILD<br />
            SOMETHING<br />
            INTELLIGENT.
          </h2>
        </div>

        {/* Split Section: Direct Channels & Interactive Dispatch Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <p className="font-sans text-base sm:text-lg text-[#111111]/85 leading-relaxed">
              Available for full-time Data Science, Machine Learning Engineering, and AI research opportunities. Open to innovative discussions, hackathon collaborations, and clinical AI development.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#111111]/15 font-mono text-xs">
              <div className="p-4 bg-[#F4F1E9] hairline-all flex items-center justify-between">
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-[#77736B]">EMAIL DIRECT</span>
                  <a href={`mailto:${profile.contact.email}`} className="text-[#111111] font-medium hover:text-accent-orange transition-colors">
                    {profile.contact.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 hairline-all text-[10px] uppercase tracking-widest hover:bg-[#111111] hover:text-[#EDE9DF] transition-colors"
                >
                  {copiedEmail ? "COPIED" : "COPY"}
                </button>
              </div>

              <div className="p-4 bg-[#F4F1E9] hairline-all flex items-center justify-between">
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-[#77736B]">TELEPHONE</span>
                  <a href={`tel:${profile.contact.phone}`} className="text-[#111111] font-medium hover:text-accent-orange transition-colors">
                    {profile.contact.phone}
                  </a>
                </div>
                <span className="text-[10px] text-[#77736B] uppercase tracking-wider">PUNE, IN</span>
              </div>

              <div className="p-4 bg-[#F4F1E9] hairline-all flex items-center justify-between">
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-[#77736B]">PROFESSIONAL NETWORK</span>
                  <span className="text-[#111111] font-medium block">
                    linkedin.com/in/sairaj-bhandalkar
                  </span>
                </div>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#111111] text-[#EDE9DF] hairline-all text-[10px] uppercase tracking-widest hover:bg-accent-orange transition-colors inline-flex items-center gap-1.5"
                  aria-label="Open Sairaj Bhandalkar LinkedIn Profile"
                >
                  <span>CONNECT</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Dispatch Form */}
          <div className="lg:col-span-7 bg-[#F4F1E9] hairline-all p-8 sm:p-12 shadow-md">
            <div className="flex items-center justify-between border-b border-[#111111]/15 pb-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#111111] font-semibold">
                DIRECT TRANSMISSION CONSOLE
              </span>
              <span className="font-mono text-[10px] text-[#77736B] uppercase">
                SECURE ENDPOINT
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-12 h-12 text-accent-orange mx-auto" />
                <h3 className="font-serif text-3xl font-light text-[#111111]">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-sans text-sm text-[#77736B] max-w-sm mx-auto">
                  Thank you for reaching out. Sairaj will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-[#77736B] mb-2">
                    YOUR NAME // IDENTITY
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Doe"
                    className="w-full bg-[#EDE9DF] hairline-all p-3 font-sans text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-[#77736B] mb-2">
                    YOUR EMAIL // RETURN ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@institution.org"
                    className="w-full bg-[#EDE9DF] hairline-all p-3 font-sans text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-[#77736B] mb-2">
                    PROJECT OR INQUIRY BRIEF
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your data science challenge, machine learning project, or collaboration..."
                    className="w-full bg-[#EDE9DF] hairline-all p-3 font-sans text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#111111] text-[#EDE9DF] font-mono text-xs uppercase tracking-widest hover:bg-accent-orange transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>TRANSMIT DISPATCH</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
