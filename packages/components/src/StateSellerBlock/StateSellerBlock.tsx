import React from 'react';
import type { StateSellerBlockProps } from './StateSellerBlock.types';
import { clsx } from 'clsx';

export const StateSellerBlock: React.FC<StateSellerBlockProps> = ({
  text, sellerName, className,
}) => (
  <div className={clsx('flex items-center gap-1 text-sm text-text-primary font-sans', className)}>
    <span>{text}</span>
    <span className="font-bold text-brand-primary">{sellerName}</span>
  </div>
);
