import React from 'react';
import type { FidProps } from './Fid.types';
import { clsx } from 'clsx';

export const Fid: React.FC<FidProps> = ({ label, startingPrice, priceDescription, className }) => (
  <div className={clsx('border border-border-default rounded-lg font-sans overflow-hidden', className)}>
    <div className="p-4 flex items-start gap-4">
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        {/* fnac+ logo text */}
        <span className="font-bold text-[#E2A400] text-xl leading-none tracking-tight">fnac+</span>
        <p className="text-sm text-text-primary leading-snug">{label}</p>
      </div>
      <button className="flex-shrink-0 text-sm font-bold border border-border-default rounded-md px-4 py-3 text-text-primary bg-surface-default hover:bg-surface-secondary transition-colors duration-150">
        + Ajouter
      </button>
    </div>
    <div className="px-4 pb-4 flex flex-col gap-0.5">
      <div className="flex items-baseline gap-1">
        <span className="text-sm text-text-primary">Dès</span>
        <span className="text-lg font-bold text-text-primary">{startingPrice}</span>
      </div>
      <p className="text-xs text-text-secondary">{priceDescription}</p>
    </div>
  </div>
);
