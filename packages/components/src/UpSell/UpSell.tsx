import React from 'react';
import type { UpSellProps } from './UpSell.types';
import { ProductCard } from '../ProductCard/ProductCard';
import { clsx } from 'clsx';

export const UpSell: React.FC<UpSellProps> = ({ title, products, seeAllHref, className }) => (
  <div className={clsx('font-sans', className)}>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-text-primary">{title}</h2>
      {seeAllHref && (
        <a href={seeAllHref} className="text-sm text-text-primary underline underline-offset-2 hover:text-brand-primary transition-colors duration-200">
          Voir tout
        </a>
      )}
    </div>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product, i) => <ProductCard key={i} {...product} />)}
    </div>
  </div>
);
