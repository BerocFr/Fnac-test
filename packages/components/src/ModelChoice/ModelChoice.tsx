import React from 'react';
import type { ModelChoiceProps } from './ModelChoice.types';
import { clsx } from 'clsx';

export const ModelChoice: React.FC<ModelChoiceProps> = ({
  label, price, state = 'default', size = 'medium', type = 'img', src, color, onClick,
}) => (
  <button
    onClick={onClick}
    disabled={state === 'disabled'}
    className={clsx(
      'flex flex-col items-center gap-1 rounded-md border-2 transition-all duration-200 font-sans',
      size === 'small' ? 'p-2 min-w-[72px]' : 'p-3 min-w-[88px]',
      state === 'selected' ? 'border-brand-primary bg-brand-primary-light' : 'border-border-default bg-surface-default hover:border-border-strong',
      state === 'disabled' && 'opacity-40 cursor-not-allowed',
    )}
  >
    {type === 'color' && color && (
      <span
        className={clsx('rounded-full border border-border-default flex-shrink-0', size === 'small' ? 'w-6 h-6' : 'w-8 h-8')}
        style={{ backgroundColor: color }}
      />
    )}
    {type === 'img' && src && (
      <img src={src} alt={label} className={clsx('object-contain', size === 'small' ? 'w-8 h-8' : 'w-10 h-10')} />
    )}
    {type === 'img' && !src && (
      <div className={clsx('bg-neutral-100 rounded flex-shrink-0', size === 'small' ? 'w-8 h-8' : 'w-10 h-10')} />
    )}
    <span className={clsx('text-center font-bold leading-tight', size === 'small' ? 'text-xs' : 'text-xs')}>
      {label}
    </span>
    {price && <span className="text-xs text-text-secondary">{price}</span>}
  </button>
);
