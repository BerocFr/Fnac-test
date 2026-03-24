import React from 'react';
import type { PriceAreaProps } from './PriceArea.types';
import { clsx } from 'clsx';

export const PriceArea: React.FC<PriceAreaProps> = ({
  currentPrice, oldPrice, currency = '€', financingLabel, className,
}) => (
  <div className={clsx('flex flex-col gap-0.5 font-sans', className)}>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold text-text-primary">
        {currentPrice.toFixed(2).replace('.', ',')} {currency}
      </span>
      {oldPrice && (
        <span className="text-sm text-text-tertiary line-through">
          {oldPrice.toFixed(2).replace('.', ',')} {currency}
        </span>
      )}
    </div>
    {financingLabel && <span className="text-xs text-text-secondary">{financingLabel}</span>}
  </div>
);
