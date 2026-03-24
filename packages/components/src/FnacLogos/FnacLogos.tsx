import React from 'react';
import { clsx } from 'clsx';

interface FnacLogosProps { className?: string; variant?: 'light' | 'dark'; }

export const FnacLogos: React.FC<FnacLogosProps> = ({ className, variant = 'dark' }) => (
  <div className={clsx('flex items-center gap-3 font-sans', className)}>
    <svg viewBox="0 0 60 22" className={clsx('h-7', variant === 'dark' ? 'text-neutral-950' : 'text-text-inverse')} fill="currentColor">
      <text x="0" y="18" fontSize="22" fontWeight="900" fontFamily="Roboto, sans-serif">fnac</text>
    </svg>
    <div className="w-px h-5 bg-border-strong" />
    <span className={clsx('text-sm font-bold', variant === 'dark' ? 'text-text-secondary' : 'text-neutral-400')}>darty</span>
  </div>
);
