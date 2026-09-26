import React from 'react';
import { AWARDS } from '../data/portfolioData.ts';
import { Trophy, CheckCircle2 } from 'lucide-react';

interface AwardsProps {
  onShowNotification?: (msg: string) => void;
}

export const Awards: React.FC<AwardsProps> = ({ onShowNotification }) => {
  return (
    <section id="awards" className="py-12 sm:py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-wider font-mono text-gray-400 font-medium mb-1">
            06 / Recognition
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Honors &amp; Awards
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
            Distinctions awarded for exceptional academic performance, department-topping engineering leadership, and language proficiency.
          </p>
        </div>

        {/* Awards Cards Grid (1 col on mobile, 2 cols on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {AWARDS.map((award, idx) => (
            <div
              key={award.id}
              className="p-5 sm:p-7 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-all duration-200 flex flex-col justify-between h-full w-full min-w-0 overflow-hidden"
            >
              <div className="min-w-0">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2.5 gap-2">
                  <span className="flex items-center gap-1.5 text-gray-900 font-semibold truncate">
                    <Trophy className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>0{idx + 1}. Distinction</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-700 shrink-0 whitespace-nowrap">
                    {award.period}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  {award.title}{' '}
                  <span className="text-gray-500 font-normal">by</span>{' '}
                  <span className="text-gray-800">{award.organization}</span>
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* Highlights Chips */}
              {award.highlights && award.highlights.length > 0 && (
                <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5 w-full min-w-0">
                  {award.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-0.5 rounded font-mono text-[11px] text-gray-700 bg-gray-50 border border-gray-200 flex items-center gap-1 whitespace-nowrap"
                    >
                      <CheckCircle2 className="w-3 h-3 text-gray-600 shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
