import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { MapPin, Mail, ArrowDown, Award, Briefcase, Code, FileText, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

const TITLES = [
  'Motivated Full-Stack Developer',
  'React, Node.js & Laravel Engineer',
  '10+ Production Web Applications',
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TITLES[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
      timer = setTimeout(() => {}, 250);
    } else {
      const typingSpeed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 border-b border-gray-100"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Unboxed Metadata Header */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-gray-500 mb-5 sm:mb-6">
          <span className="font-semibold text-black">{PERSONAL_INFO.status}</span>
          <span aria-hidden="true" className="text-gray-300">/</span>
          <span>{PERSONAL_INFO.pronouns}</span>
          <span aria-hidden="true" className="text-gray-300">/</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gray-500 inline" />
            <span>{PERSONAL_INFO.location}</span>
          </span>
        </div>

        {/* Hero Title & Subheading */}
        <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
          <div className="text-[11px] sm:text-xs uppercase tracking-wider font-mono text-gray-400 font-medium">
            Full-Stack Engineering Portfolio
          </div>
          <h1
            id="hero-name-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.1] sm:leading-[1.08]"
          >
            {PERSONAL_INFO.name}
          </h1>

          {/* Typing Title */}
          <div
            id="hero-typing-container"
            className="flex items-center min-h-[1.75rem] sm:min-h-[2.5rem] py-1"
            aria-live="polite"
            aria-label={`Role: ${currentText || TITLES[titleIndex]}`}
          >
            <span className="text-lg sm:text-2xl font-semibold text-gray-700 tracking-tight">
              {currentText}
            </span>
            <span
              id="hero-typing-cursor"
              className="inline-block w-1.5 sm:w-2.5 h-4 sm:h-6 ml-1.5 bg-black animate-pulse"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Bio Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6 sm:mb-8">
          {PERSONAL_INFO.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          <a
            id="hero-contact-button"
            href="#contact"
            className="w-full sm:w-auto px-5 py-2.5 rounded bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>

          <a
            id="hero-projects-button"
            href="#projects"
            className="w-full sm:w-auto px-5 py-2.5 rounded border border-gray-300 bg-white text-gray-900 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all inline-flex items-center justify-center gap-1.5"
          >
            <span>View 10 Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
          </a>

          <button
            type="button"
            id="hero-resume-button"
            onClick={onOpenResumeModal}
            className="w-full sm:w-auto px-4 py-2.5 rounded border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium hover:bg-gray-100 hover:text-black transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-gray-600" />
            <span>Curriculum Vitae</span>
          </button>
        </div>

        {/* Key Metrics / Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-gray-200">
          <div className="p-3.5 sm:p-4 rounded-lg border border-gray-200 bg-gray-50/50">
            <div className="flex items-center gap-2.5 mb-1">
              <Code className="w-4 h-4 text-gray-900 shrink-0" />
              <div className="text-xs sm:text-sm font-bold text-gray-900">10+ Applications</div>
            </div>
            <div className="text-xs text-gray-500 leading-normal">
              Civic Tech, E-Commerce, Payroll &amp; Portals
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-lg border border-gray-200 bg-gray-50/50">
            <div className="flex items-center gap-2.5 mb-1">
              <Award className="w-4 h-4 text-gray-900 shrink-0" />
              <div className="text-xs sm:text-sm font-bold text-gray-900">4 Meta Certifications</div>
            </div>
            <div className="text-xs text-gray-500 leading-normal">
              Front-End, JavaScript, Version Control
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-lg border border-gray-200 bg-gray-50/50">
            <div className="flex items-center gap-2.5 mb-1">
              <Briefcase className="w-4 h-4 text-gray-900 shrink-0" />
              <div className="text-xs sm:text-sm font-bold text-gray-900">Best Student Award</div>
            </div>
            <div className="text-xs text-gray-500 leading-normal">
              SMK IDN Boarding School (GPA &gt; 90)
            </div>
          </div>
        </div>

        {/* Down Indicator */}
        <div className="mt-12 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-black transition-colors"
            aria-label="Scroll down to About section"
          >
            <span>Explore Profile</span>
            <ArrowDown className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
