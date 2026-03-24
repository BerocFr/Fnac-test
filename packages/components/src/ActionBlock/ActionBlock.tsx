import React from 'react';
import type { ActionBlockProps } from './ActionBlock.types';
import { clsx } from 'clsx';

const stockMessages = {
  in_stock: { label: 'En stock', color: 'text-feedback-success' },
  low_stock: { label: 'Stock limité', color: 'text-feedback-warning' },
  out_of_stock: { label: 'Rupture de stock', color: 'text-feedback-danger' },
};

export const ActionBlock: React.FC<ActionBlockProps> = ({
  onAddToCart, onAddToWishlist, onBuyNow, stock = 'in_stock', className,
}) => {
  const stockInfo = stockMessages[stock];
  return (
    <div className={clsx('flex flex-col items-center gap-4 font-sans', className)}>
      <button
        onClick={onAddToCart}
        className="w-full bg-brand-primary text-neutral-950 font-normal text-base py-3 px-6 rounded-md hover:bg-brand-secondary transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
        </svg>
        Ajouter au panier
      </button>
      <button
        onClick={onBuyNow}
        className="w-full bg-surface-default text-text-primary font-normal text-base py-3 px-6 rounded-md border border-neutral-900 hover:bg-surface-secondary transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Achat express
      </button>
      <button
        onClick={onAddToWishlist}
        className="flex items-center justify-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 py-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Ajouter à la liste de souhaits
      </button>
    </div>
  );
};
