import React from 'react';
import { clsx } from 'clsx';

export const SubFooter: React.FC<{ className?: string }> = ({ className }) => (
  <div className={clsx('bg-neutral-900 py-4 font-sans', className)}>
    <div className="max-w-[1440px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        {['Accessibilité', 'Plan du site', 'Partenaires', 'Affiliés'].map((link) => (
          <a key={link} href="#" className="text-xs text-neutral-400 hover:text-text-inverse transition-colors">{link}</a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {['visa', 'mastercard', 'paypal', 'amex'].map((pay) => (
          <span key={pay} className="text-xs text-neutral-500 border border-neutral-700 px-2 py-0.5 rounded">{pay}</span>
        ))}
      </div>
    </div>
  </div>
);
