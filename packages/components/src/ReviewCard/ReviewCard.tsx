import React from 'react';
import type { ReviewCardProps } from './ReviewCard.types';
import { clsx } from 'clsx';

export const ReviewCard: React.FC<ReviewCardProps> = ({
  author, rating, title, text, date, verified = false, platform, className,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className={clsx('flex flex-col gap-3 p-4 border border-border-default rounded-md bg-surface-default font-sans', className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            {stars.map((s) => (
              <svg key={s} className={clsx('w-3 h-3', s <= rating ? 'text-brand-primary' : 'text-neutral-300')} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-bold text-text-primary">{author}</span>
        </div>
        <span className="text-xs text-text-tertiary whitespace-nowrap">{date}</span>
      </div>
      {title && <p className="text-sm font-bold text-text-primary">{title}</p>}
      <p className="text-sm text-text-secondary leading-relaxed line-clamp-4">{text}</p>
      {verified && (
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3 text-feedback-success" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-feedback-success">Achat vérifié</span>
          {platform && <span className="text-xs text-text-tertiary">via {platform}</span>}
        </div>
      )}
    </div>
  );
};
