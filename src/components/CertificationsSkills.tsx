import React from 'react';
import { CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { ExternalLink, Check } from 'lucide-react';

interface CertificationsSkillsProps {
  onShowNotification: (msg: string) => void;
}

export const CertificationsSkills: React.FC<CertificationsSkillsProps> = ({ onShowNotification }) => {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-wider font-mono text-gray-400 font-medium mb-1">
            04 / Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Certifications &amp; Top Skills
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
            Verified technical credentials from Meta alongside a battle-tested full-stack engineering and analytical problem-solving skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Certifications List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-gray-500 font-semibold">
                Verified Industry Certifications
              </h3>
              <span className="text-xs text-gray-400 font-mono">{CERTIFICATIONS.length} Completed</span>
            </div>

            <div className="space-y-2.5">
              {CERTIFICATIONS.map((cert) => {
                return (
                  <div
                    key={cert.id}
                    id={`cert-item-${cert.id}`}
                    className="p-3.5 sm:p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-400 transition-colors flex items-start sm:items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        {cert.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500 mt-1 font-mono">
                        <span className="font-semibold text-gray-700">{cert.issuer}</span>
                        <span className="text-gray-300">/</span>
                        <span>{cert.category}</span>
                        <span className="text-gray-300">/</span>
                        <span>
                          {cert.month ? `${cert.month} ${cert.year}` : cert.year}
                        </span>
                        {cert.credentialId && (
                          <>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-600 font-semibold">
                              ID: {cert.credentialId}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Verification action */}
                    <button
                      type="button"
                      onClick={() =>
                        onShowNotification(
                          `Credential verified: ${cert.title} issued by ${cert.issuer} (Credential ID: ${cert.credentialId})`
                        )
                      }
                      className="p-2 sm:p-1.5 rounded text-gray-400 hover:text-black hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
                      title="View Credential Verification"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Skills Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-gray-500 font-semibold">
                Top Skills &amp; Competencies
              </h3>
            </div>

            <div className="space-y-4">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-gray-200 bg-white space-y-2.5"
                >
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                    {cat.category}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-0.5 rounded font-mono text-xs text-gray-800 bg-gray-100 border border-gray-200 inline-flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-gray-500" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Growth Mindset Box */}
            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-xs leading-relaxed text-gray-600">
              <p>
                <strong className="text-gray-900">Continuous Growth Mindset:</strong> Eager to contribute to innovative fullstack initiatives, build scalable web applications, and continuously level up through hands-on development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
