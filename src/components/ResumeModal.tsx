import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS, PROJECTS, AWARDS } from '../data/portfolioData.ts';
import { X, Download, Printer, MapPin, Mail, Phone, Briefcase, GraduationCap, FolderGit2, Award, Trophy, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowNotification: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowNotification }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="executive-resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl my-2 sm:my-8 bg-white p-4 sm:p-8 md:p-10 rounded-xl border border-gray-300 shadow-2xl max-h-[94vh] overflow-y-auto text-gray-900">
        {/* Modal Header & Controls */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
          <div className="text-xs font-mono uppercase text-gray-500 font-semibold tracking-wider">
            Curriculum Vitae Overview
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-1.5 rounded border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
              title="Print Curriculum Vitae"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                onShowNotification('Curriculum Vitae document prepared for direct download.');
              }}
              className="p-1.5 rounded border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Header */}
        <div className="space-y-1.5 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {PERSONAL_INFO.name}
          </h2>
          <p className="text-sm font-semibold text-gray-700">
            {PERSONAL_INFO.title}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 pt-1 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              {PERSONAL_INFO.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-gray-500" />
              {PERSONAL_INFO.email}
            </span>
            {PERSONAL_INFO.phone && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-gray-500" />
                  {PERSONAL_INFO.phone}
                </span>
              </>
            )}
            <span>·</span>
            <span className="font-semibold text-black">{PERSONAL_INFO.status}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2">
            Summary
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed p-4 rounded-lg bg-gray-50 border border-gray-200">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-gray-200 bg-white space-y-2">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-gray-500">
              <span className="flex items-center gap-1 font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </span>
              <span>{PERSONAL_INFO.educationPeriod}</span>
            </div>
            <div className="text-sm font-bold text-gray-900">{PERSONAL_INFO.school}</div>
            <div className="text-xs text-gray-700 font-medium">Degree: {PERSONAL_INFO.degree}</div>
            <div className="space-y-1 text-xs text-gray-600 pt-1 border-t border-gray-100">
              {PERSONAL_INFO.educationDetails.map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-gray-400 font-mono">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 bg-white space-y-2.5">
            <div className="text-xs font-mono uppercase text-gray-500 font-semibold">Languages &amp; Core Stack</div>
            <div className="text-xs text-gray-700 space-y-1">
              <div><strong>Bahasa Indonesia</strong>: Native proficiency</div>
              <div><strong>English</strong>: Professional working proficiency</div>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <div className="text-[11px] font-mono text-gray-400 mb-1 font-semibold">Core Stack:</div>
              <div className="flex flex-wrap gap-1 text-[11px] font-mono">
                {['JavaScript', 'React.js', 'Node.js', 'PHP', 'Laravel', 'Python', 'Java', 'Dart', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter', 'MySQL', 'Git & GitHub'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="mb-6 space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work &amp; Organizational Experience</span>
          </h3>

          <div className="space-y-3">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-4 rounded-lg border border-gray-200 bg-white">
                <div className="flex justify-between items-baseline text-xs mb-1">
                  <span className="font-bold text-gray-900 text-sm">{exp.role}</span>
                  <span className="text-gray-500 font-mono">{exp.period}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono mb-2">
                  {exp.organization} · {exp.location}
                </div>
                <ul className="space-y-1 mb-2 text-xs text-gray-600 pl-4 list-disc marker:text-gray-400">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.badges.map((b) => (
                    <span key={b} className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-700">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div className="mb-6 space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Key Projects ({PROJECTS.length})</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="p-3.5 rounded-lg border border-gray-200 bg-white space-y-1">
                <div className="flex justify-between items-start">
                  <div className="font-bold text-gray-900 text-xs">{proj.title}</div>
                  <span className="text-[10px] text-gray-500 font-mono">{proj.period}</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-tight">{proj.tagline || (proj.bullets && proj.bullets[0])}</p>
                <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px]">
                  {(proj.techStack || []).slice(0, 3).map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Certifications ({CERTIFICATIONS.length})</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="p-3 rounded-lg border border-gray-200 bg-white text-xs text-gray-700 flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">{cert.title}</div>
                  <div className="text-[11px] text-gray-500 font-mono">
                    {cert.issuer} · {cert.month ? `${cert.month} ${cert.year}` : cert.year}
                  </div>
                  {cert.credentialId && (
                    <div className="text-[10px] text-gray-600 font-mono">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Awards ({AWARDS.length})</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {AWARDS.map((award) => (
              <div key={award.id} className="p-3.5 rounded-lg border border-gray-200 bg-white text-xs text-gray-700 space-y-1">
                <div className="flex justify-between items-start">
                  <div className="font-bold text-gray-900">{award.title}</div>
                  <span className="text-[10px] text-gray-500 font-mono">{award.period}</span>
                </div>
                <div className="text-[11px] text-gray-500 font-mono">{award.organization}</div>
                <p className="text-[11px] text-gray-600 leading-tight">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
