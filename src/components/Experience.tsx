import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData.ts';
import { MapPin, Building2, Users } from 'lucide-react';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'organization'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'work') return exp.categoryType === 'work';
    if (filter === 'organization') return exp.categoryType === 'organization';
    return true;
  });

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="text-xs uppercase tracking-wider font-mono text-gray-400 font-medium mb-1">
              02 / History
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              Work &amp; Organizational Experience
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
              Freelance full-stack engineering and commercial web development paired with transparent financial governance and student council leadership.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-100 border border-gray-200 text-xs font-medium self-start sm:self-auto shrink-0 overflow-x-auto max-w-full scrollbar-none">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded transition-all whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              All ({EXPERIENCES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('work')}
              className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                filter === 'work'
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Work</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('organization')}
              className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                filter === 'organization'
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Organizational</span>
            </button>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4 sm:space-y-6">
          {filteredExperiences.map((exp) => {
            const isWork = exp.categoryType === 'work';
            return (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className="p-4 sm:p-7 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-colors duration-200"
              >
                {/* Header: Role + Organization + Right-Aligned Date */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-gray-400">·</span>
                    <span className="text-sm font-semibold text-gray-700">
                      {exp.organization}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded font-mono bg-gray-100 text-gray-600 border border-gray-200">
                      {isWork ? 'Work' : 'Leadership'}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-gray-500 shrink-0 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-xs text-gray-400 font-mono mb-3">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span>{exp.location}</span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Clean Bullet Points */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-gray-600 leading-normal pl-4 list-disc marker:text-gray-400">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Badges / Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  {exp.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-0.5 text-xs rounded font-mono text-gray-700 bg-gray-100 border border-gray-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
