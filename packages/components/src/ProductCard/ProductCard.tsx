import React from 'react';
import type { ProductCardProps } from './ProductCard.types';
import { clsx } from 'clsx';

export const ProductCard: React.FC<ProductCardProps> = ({
  title, price, oldPrice, rating, reviewCount, imageSrc, href = '#', badge, className,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <a
      href={href}
      className={clsx(
        'flex flex-col gap-2 p-3 rounded-md border border-border-default bg-surface-default hover:shadow-md transition-shadow duration-200 font-sans',
        className,
      )}
    >
      <div className="relative aspect-square bg-surface-secondary rounded-md overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-contain p-2" />
        ) : (
          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
            <div className="w-16 h-16 bg-neutral-200 rounded" />
          </div>
        )}
        {badge && (
          <span className="absolute top-2 left-2 bg-feedback-danger text-text-inverse text-xs font-bold px-1.5 py-0.5 rounded-sm">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-xs text-text-primary line-clamp-2 leading-tight">{title}</p>
        {rating !== undefined && (
          <div className="flex items-center gap-1">
            {stars.map((s) => (
              <svg key={s} className={clsx('w-2.5 h-2.5', s <= Math.round(rating) ? 'text-brand-primary' : 'text-neutral-300')} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            {reviewCount && <span className="text-xs text-text-tertiary">({reviewCount})</span>}
          </div>
        )}
        <div className="flex items-baseline gap-1 mt-auto">
          <span className="text-sm font-bold text-text-primary">{price.toFixed(2).replace('.', ',')} €</span>
          {oldPrice && <span className="text-xs text-text-tertiary line-through">{oldPrice.toFixed(2).replace('.', ',')} €</span>}
        </div>
      </div>
    </a>
  );
};
