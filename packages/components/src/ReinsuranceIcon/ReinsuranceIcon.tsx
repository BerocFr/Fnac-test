import React from 'react';
import type { ReinsuranceIconProps } from './ReinsuranceIcon.types';
import { clsx } from 'clsx';

export const ReinsuranceIcon: React.FC<ReinsuranceIconProps> = ({ icon, label, className }) => (
  <div className={clsx('flex flex-col items-center gap-2 text-center font-sans', className)}>
    <div className="w-10 h-10 flex items-center justify-center text-text-secondary">
      {icon}
    </div>
    <span className="text-xs text-text-secondary leading-tight max-w-[80px]">{label}</span>
  </div>
);
