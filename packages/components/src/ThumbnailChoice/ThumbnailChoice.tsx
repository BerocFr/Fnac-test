import React from 'react';
import type { ThumbnailChoiceProps } from './ThumbnailChoice.types';
import { clsx } from 'clsx';

export const ThumbnailChoice: React.FC<ThumbnailChoiceProps> = ({
  src, alt = '', state = 'default', type = 'img', onClick, index,
}) => (
  <button
    onClick={onClick}
    className={clsx(
      'w-14 h-14 rounded-md border-2 overflow-hidden flex items-center justify-center flex-shrink-0 transition-all duration-200',
      state === 'selected' ? 'border-brand-primary' : 'border-transparent hover:border-neutral-300',
      'bg-surface-secondary',
    )}
    aria-pressed={state === 'selected'}
  >
    {type === 'img' && src && (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    )}
    {type === 'img' && !src && (
      <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-xs text-text-tertiary">
        {index !== undefined ? index + 1 : ''}
      </div>
    )}
    {type === 'video' && (
      <div className="relative w-full h-full bg-neutral-850 flex items-center justify-center">
        <svg className="w-5 h-5 text-text-inverse" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </div>
    )}
  </button>
);
