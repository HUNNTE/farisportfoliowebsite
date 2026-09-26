import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2 } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowNotification: (msg: string) => void;
}

export const CodeModal: React.FC<CodeModalProps> = ({ isOpen, onClose, onShowNotification }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      const response = await fetch('/portfolio.html');
      const htmlText = await response.text();
      await navigator.clipboard.writeText(htmlText);
      setCopied(true);
      onShowNotification('Complete standalone single-file HTML copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onShowNotification('Unable to copy directly; please use the download button.');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/portfolio.html';
    link.download = 'aulia-azmi-al-farisy-portfolio.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowNotification('Downloading aulia-azmi-al-farisy-portfolio.html');
  };

  return (
    <div
      id="standalone-code-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl my-8 bg-white p-6 sm:p-8 rounded-xl border border-gray-300 shadow-2xl max-h-[90vh] flex flex-col text-gray-900">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-black text-white flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Standalone Single-File HTML / CSS / JavaScript
              </h3>
              <p className="text-xs text-gray-500 font-mono">
                Self-contained, production-ready code with embedded &lt;style&gt; and &lt;script&gt;
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded bg-black text-white text-xs font-medium flex items-center gap-1.5 hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy All Code'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="px-3 py-1.5 rounded border border-gray-300 bg-white text-xs text-gray-700 font-medium flex items-center gap-1.5 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-gray-600" />
              <span>Download .html</span>
            </button>

            <a
              href="/portfolio.html"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded border border-gray-300 bg-white text-xs text-gray-700 font-medium flex items-center gap-1.5 hover:bg-gray-100 hover:text-black transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gray-600" />
              <span>Open Raw</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded border border-gray-200 text-gray-500 hover:text-black hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Informational Banner */}
        <div className="mb-4 p-3 rounded-lg border border-gray-200 bg-gray-50 text-xs text-gray-600 flex items-center justify-between shrink-0 font-mono">
          <span>
            Minimalist monochrome architecture with pure CSS and zero external JS runtime dependencies.
          </span>
          <span className="font-semibold text-black">100% Zero-Dependency</span>
        </div>

        {/* Code Preview Container */}
        <div className="flex-1 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs font-mono text-gray-800 select-all leading-relaxed">
          <pre className="whitespace-pre">
{`<!-- Complete Standalone Single-File HTML Portfolio for Aulia Azmi Al Farisy -->
<!-- Minimalist, monochrome, enterprise-grade architecture for elite engineering profiles -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aulia Azmi Al Farisy | Fullstack Engineer Portfolio</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>
    /* Strictly Monochrome Design Tokens */
    :root {
      --bg: #ffffff;
      --text-main: #111111;
      --text-muted: #4b5563;
      --border: #e5e7eb;
      --surface-subtle: #f9fafb;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text-main);
      line-height: 1.65;
    }
    .mono-card {
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <!-- All sections: Header, Hero, About, Experience, Projects, Certifications, Contact, Footer -->
  <!-- Stored in full at /portfolio.html -->
</body>
</html>`}
          </pre>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono shrink-0">
          <span>File location: <code>/public/portfolio.html</code></span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-100 text-gray-700 hover:text-black"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
