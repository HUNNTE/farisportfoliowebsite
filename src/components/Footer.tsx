import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-8 sm:py-10 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          <span className="text-gray-900 font-bold text-xs">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-gray-300">·</span>
          <span>© 2026. All rights reserved.</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          id="back-to-top-button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 hover:text-black transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
