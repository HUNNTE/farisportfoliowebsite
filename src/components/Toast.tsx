import React from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      id="app-toast-notification"
      className="fixed bottom-6 right-6 z-50 max-w-sm bg-black text-white p-3.5 rounded-lg border border-neutral-800 shadow-xl flex items-start gap-3"
      role="alert"
    >
      <div className="w-5 h-5 rounded-full bg-neutral-800 text-white flex items-center justify-center shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5" />
      </div>
      <div className="text-xs text-neutral-200 leading-snug flex-1 font-mono">
        {message}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-neutral-400 hover:text-white p-0.5 rounded transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
