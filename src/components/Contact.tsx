import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Mail, MapPin, Linkedin, Github, Copy, Check, Clock, Phone } from 'lucide-react';

interface ContactProps {
  onShowNotification: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowNotification }) => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowNotification(`Email copied to clipboard: ${PERSONAL_INFO.email}`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    if (PERSONAL_INFO.phone) {
      navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      onShowNotification(`Phone copied to clipboard: ${PERSONAL_INFO.phone}`);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-wider font-mono text-gray-400 font-medium mb-1">
            05 / Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
            Currently open to full-stack opportunities, freelance engineering projects, and technical discussions.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Email Card with Copy button */}
          <div className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gray-600" />
                  <span>Direct Email</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-black" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm sm:text-base font-bold text-gray-900 hover:underline block break-all font-mono tracking-tight"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
              Monitored daily. Primary channel for formal inquiries and correspondence.
            </p>
          </div>

          {/* Phone Card with Copy & Call button */}
          {PERSONAL_INFO.phone && (
            <div className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gray-600" />
                    <span>Direct Phone / WhatsApp</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-black" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-sm sm:text-base font-bold text-gray-900 hover:underline flex items-center gap-2 font-mono tracking-tight"
                >
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
                Available via WhatsApp messaging or direct professional phone call.
              </p>
            </div>
          )}

          {/* Location Card */}
          <div className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-colors flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-600" />
                <span>Geographic Base</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-gray-900">
                {PERSONAL_INFO.location}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
              Available for local Jakarta on-site requirements or global remote timezones.
            </p>
          </div>

          {/* Professional Networks */}
          <div className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-colors flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2">
                Professional Networks
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin-link"
                  className="p-2 sm:p-2.5 rounded-lg border border-gray-200 bg-gray-50/50 hover:bg-gray-100 hover:border-gray-300 text-gray-900 flex items-center gap-2 transition-all justify-center"
                >
                  <Linkedin className="w-4 h-4 text-gray-800 shrink-0" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-github-link"
                  className="p-2 sm:p-2.5 rounded-lg border border-gray-200 bg-gray-50/50 hover:bg-gray-100 hover:border-gray-300 text-gray-900 flex items-center gap-2 transition-all justify-center"
                >
                  <Github className="w-4 h-4 text-gray-800 shrink-0" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
              Verified source repositories, open-source codebases, and professional career history.
            </p>
          </div>
        </div>

        {/* Response Time Indicator */}
        <div className="mt-4 sm:mt-6 p-3.5 sm:p-4 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between flex-wrap gap-2 text-xs text-gray-600 font-mono">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gray-700 shrink-0" />
            <span>Typical response latency: Under 12 business hours.</span>
          </div>
          <span className="text-gray-400 text-[11px]">UTC+7 (WIB) Timezone</span>
        </div>
      </div>
    </section>
  );
};
