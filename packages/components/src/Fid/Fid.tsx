import React from 'react';
import type { FidProps } from './Fid.types';
import { clsx } from 'clsx';

export const Fid: React.FC<FidProps> = ({ points, className }) => (
  <div className={clsx('flex items-center gap-2 p-3 bg-brand-primary-light border border-brand-primary rounded-md font-sans', className)}>
    <svg className="w-5 h-5 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span className="text-sm text-text-primary">
      Vous gagnez <span className="font-bold">{points} points</span> Fnac avec cet achat
    </span>
  </div>
);
