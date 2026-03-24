import React from 'react';
import type { RatingProps } from './Rating.types';
import { clsx } from 'clsx';

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  readOnly = true,
  size = 'sm',
  showValue = false,
  className,
}) => {
  const stars = Array.from({ length: max }, (_, i) => i + 1);
  const starSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className={clsx('inline-flex items-center gap-0.5', className)}>
      {stars.map((star) => (
        <svg
          key={star}
          className={clsx(starSize, star <= Math.round(value) ? 'text-brand-primary' : 'text-neutral-300')}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {showValue && (
        <span className="ml-1 text-xs text-text-secondary font-sans">{value.toFixed(1)}</span>
      )}
    </div>
  );
};
