import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { GraduationCap, Languages, Check, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-wider font-mono text-gray-400 font-medium mb-1">
            01 / Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            About Me
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
            Motivated Full-Stack Developer proficient in JavaScript, React, Node.js, and Laravel with a proven track record of 10+ scalable web applications.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Column: Comprehensive Bio Card */}
          <div className="lg:col-span-7 p-4 sm:p-7 rounded-xl border border-gray-200 bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-gray-900 text-base font-bold tracking-tight">
                <GraduationCap className="w-5 h-5 text-gray-900 shrink-0" />
                <span>Motivated Full-Stack Developer</span>
              </div>

              <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed border-l-2 border-black pl-3.5 py-0.5 italic">
                "{PERSONAL_INFO.bio}"
              </blockquote>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-1">
                Currently studying software engineering at <strong className="text-gray-900 font-semibold">{PERSONAL_INFO.school}</strong> ({PERSONAL_INFO.educationPeriod}), specializing in full-stack web and mobile application development. Proven track record of engineering 10+ applications from concept to deployment across e-commerce, payroll automation, and civic reporting platforms.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>Front-End: JavaScript, React &amp; Tailwind</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>Back-End: Node.js, PHP &amp; Laravel</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>Databases: MySQL &amp; RESTful APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span>Mobile &amp; Tools: Flutter, Git &amp; GitHub</span>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Anchor & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Education Card */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Education
                </span>
                <span className="text-xs font-mono text-gray-500">
                  {PERSONAL_INFO.educationPeriod}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">
                {PERSONAL_INFO.school}
              </h3>
              <p className="text-xs font-semibold text-gray-700 mb-3">
                Degree: {PERSONAL_INFO.degree}
              </p>
              <div className="space-y-1.5 pt-3 border-t border-gray-100">
                {PERSONAL_INFO.educationDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 leading-normal">
                    <span className="text-gray-400 font-mono mt-0.5">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-4 sm:p-6 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-4 h-4 text-gray-700 shrink-0" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                  Languages
                </h3>
              </div>

              <div className="space-y-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-900 font-semibold">{lang.name}</span>
                      <span className="text-gray-500 font-mono text-[11px]">{lang.proficiency}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-black transition-all duration-300"
                        style={{ width: lang.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Availability Box */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-gray-200 bg-gray-50 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  Current Availability
                </div>
                <div className="text-xs text-gray-900 font-bold mt-0.5">
                  Internships &amp; Fullstack Roles
                </div>
              </div>
              <a
                href="#contact"
                className="w-full xs:w-auto px-3 py-1.5 text-xs font-medium rounded bg-black text-white hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-1 shrink-0"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
