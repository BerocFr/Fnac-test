import React from 'react';
import { clsx } from 'clsx';

interface LaboFnacLogoProps { className?: string; }

export const LaboFnacLogo: React.FC<LaboFnacLogoProps> = ({ className }) => (
  <div className={clsx('flex items-center gap-1.5 font-sans', className)}>
    <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Labo</span>
      <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">Fnac</span>
    </div>
  </div>
);
