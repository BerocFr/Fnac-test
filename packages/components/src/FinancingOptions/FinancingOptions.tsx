import React from 'react';
import type { FinancingOptionsProps } from './FinancingOptions.types';
import { clsx } from 'clsx';

export const FinancingOptions: React.FC<FinancingOptionsProps> = ({
  label, amount, period, taeg, onClick, className,
}) => (
  <div className={clsx('flex flex-col gap-1 font-sans', className)}>
    <div
      className="bg-surface-lowkey rounded-lg px-4 py-3 flex flex-row items-center justify-between cursor-pointer"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      <div className="flex flex-row items-baseline gap-1">
        <span className="text-sm text-text-primary">{label}</span>
        <span className="font-bold text-base text-text-primary">{amount}</span>
        <span className="text-sm text-text-primary">{period}</span>
        <svg className="w-4 h-4 text-text-secondary ml-0.5" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text x="8" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor">i</text>
        </svg>
      </div>
      <svg className="w-5 h-5 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
    <p className="text-xs text-text-secondary px-1">{taeg}</p>
  </div>
);
