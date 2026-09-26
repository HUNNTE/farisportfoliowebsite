import React from 'react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onShowNotification?: (msg: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onShowNotification }) => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-wider font-mono text-gray-400 font-medium mb-1">
            03 / Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Selected Projects
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
            A comprehensive catalog of 10 engineering projects spanning civic reporting platforms, e-commerce, payroll automation, smart city concepts, utility applications, and digital services.
          </p>
        </div>

        {/* 2-Column Responsive Grid Layout (1 col on mobile, 2 cols on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PROJECTS.map((proj, idx) => {
            const isGithub = proj.url?.includes('github.com');
            const displayUrl = proj.url
              ?.replace(/^https?:\/\//, '')
              .replace(/\/$/, '');

            return (
              <article
                key={proj.id}
                className="group p-5 sm:p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-400 transition-all duration-200 flex flex-col justify-between h-full w-full min-w-0 overflow-hidden"
              >
                {/* Card Top: Number Index & Date Range */}
                <div className="min-w-0">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2 gap-2">
                    <span className="font-semibold text-gray-700">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-gray-500 shrink-0 text-right">{proj.period}</span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight group-hover:text-black">
                    {proj.title}
                  </h3>

                  {/* Bullet Points Description with Exact CV Data */}
                  <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {(proj.bullets || proj.features || []).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0 group-hover:bg-black transition-colors" />
                        <span className="leading-normal">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom: Clickable Project URL Link & Live Deployment Badge */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between w-full min-w-0 gap-2 sm:gap-3">
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (onShowNotification) {
                        onShowNotification(`Opening ${proj.title}`);
                      }
                    }}
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-black transition-colors group/link min-w-0 flex-1 overflow-hidden"
                    title={proj.url}
                  >
                    {isGithub ? (
                      <Github className="w-3.5 h-3.5 shrink-0 text-gray-600 group-hover/link:text-black transition-colors" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 text-gray-600 group-hover/link:text-black transition-colors" />
                    )}
                    <span className="truncate underline underline-offset-4 decoration-gray-300 group-hover/link:decoration-black font-mono text-[11px] sm:text-xs min-w-0">
                      {displayUrl}
                    </span>
                    <ArrowUpRight className="w-3 h-3 shrink-0 text-gray-400 group-hover/link:text-black transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>

                  {/* Subtle Badge perfectly aligned inside card */}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 shrink-0 px-2 py-0.5 rounded bg-gray-50 border border-gray-200 whitespace-nowrap text-right">
                    {isGithub ? 'Repository' : 'Live Deployment'}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
