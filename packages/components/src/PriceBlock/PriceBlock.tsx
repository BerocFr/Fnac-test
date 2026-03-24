import React from 'react';
import type { PriceBlockProps } from './PriceBlock.types';
import { clsx } from 'clsx';

export const PriceBlock: React.FC<PriceBlockProps> = ({
  price, strikePrice, promoLabel, promoPercent, currency = '€', size = 'md', ecoPartMention, className,
}) => {
  const priceSizes = { sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl' };
  return (
    <div className={clsx('flex flex-col gap-1 font-sans', className)}>
      {promoLabel && (
        <div className="flex items-center gap-2">
          <span className="bg-feedback-danger text-text-inverse text-xs font-bold px-2 py-0.5 rounded-sm">{promoLabel}</span>
          {promoPercent && <span className="text-feedback-danger text-sm font-bold">{promoPercent}%</span>}
        </div>
      )}
      <div className="flex items-baseline gap-2">
        <span className={clsx('font-bold text-text-primary', priceSizes[size])}>
          {price.toFixed(2).replace('.', ',')} {currency}
        </span>
        {strikePrice && (
          <span className="text-text-tertiary text-sm line-through">
            {strikePrice.toFixed(2).replace('.', ',')} {currency}
          </span>
        )}
      </div>
      {ecoPartMention && (
        <p className="text-xs text-text-secondary mt-1">{ecoPartMention}</p>
      )}
    </div>
  );
};
