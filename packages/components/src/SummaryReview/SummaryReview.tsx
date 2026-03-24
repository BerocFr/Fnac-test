import React from 'react';
import type { SummaryReviewProps } from './SummaryReview.types';
import { RatingBars } from '../RatingBars/RatingBars';
import { clsx } from 'clsx';

export const SummaryReview: React.FC<SummaryReviewProps> = ({
  average, count, bars = [], onWriteReview, className,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className={clsx('flex flex-col gap-4 font-sans', className)}>
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <span className="text-4xl font-bold text-text-primary">{average.toFixed(1)}</span>
          <div className="flex items-center gap-0.5">
            {stars.map((s) => (
              <svg key={s} className={clsx('w-4 h-4', s <= Math.round(average) ? 'text-brand-primary' : 'text-neutral-300')} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-text-secondary">{count} avis</span>
        </div>
        {bars.length > 0 && <RatingBars bars={bars} className="flex-1" />}
      </div>
      <button
        onClick={onWriteReview}
        className="self-start text-sm font-bold text-text-primary underline underline-offset-2 hover:text-brand-primary transition-colors duration-200"
      >
        Rédiger un avis
      </button>
    </div>
  );
};
