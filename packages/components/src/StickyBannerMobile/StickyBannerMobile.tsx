import React from 'react';
import type { StickyBannerMobileProps } from './StickyBannerMobile.types';
import { clsx } from 'clsx';

export const StickyBannerMobile: React.FC<StickyBannerMobileProps> = ({
  price, oldPrice, currency = '€', ctaLabel = 'Ajouter au panier', onCta, className,
}) => (
  <div className={clsx(
    'fixed bottom-0 left-0 right-0 z-50 bg-surface-default border-t border-border-default px-4 py-3 flex items-center gap-3 shadow-xl font-sans',
    className,
  )}>
    <div className="flex flex-col flex-1 min-w-0">
      <span className="text-lg font-bold text-text-primary leading-none">
        {price.toFixed(2).replace('.', ',')} {currency}
      </span>
      {oldPrice && (
        <span className="text-xs text-text-tertiary line-through">
          {oldPrice.toFixed(2).replace('.', ',')} {currency}
        </span>
      )}
    </div>
    <button
      onClick={onCta}
      className="bg-brand-primary text-neutral-950 font-bold text-sm py-3 px-5 rounded-md hover:bg-brand-secondary transition-colors duration-200 flex-shrink-0"
    >
      {ctaLabel}
    </button>
  </div>
);
