import React from 'react';
import type { PushFnacRepriseProps } from './PushFnacReprise.types';
import { clsx } from 'clsx';

export const PushFnacReprise: React.FC<PushFnacRepriseProps> = ({
  title, badgeText, bonusText, description, href, onClick, className,
}) => (
  <div className={clsx('flex flex-col gap-3 font-sans', className)}>
    <h3 className="font-bold text-lg text-text-primary">{title}</h3>
    <div
      className="bg-[#E8F5E9] rounded-lg p-4 flex flex-row items-start justify-between cursor-pointer"
      onClick={onClick}
      role={onClick || href ? 'button' : undefined}
    >
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-center flex-wrap gap-2">
          <span className="rounded-full bg-[#2E7D32] px-2 py-0.5 text-white text-xs font-bold">
            🔄 {badgeText}
          </span>
          <span className="text-[#2E7D32] text-sm font-bold">{bonusText}</span>
        </div>
        <p className="text-sm text-text-secondary mt-2">{description}</p>
      </div>
      <svg className="w-5 h-5 text-text-secondary flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);
