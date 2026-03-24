import React from 'react';
import type { LegalNoticesBlockProps } from './LegalNoticesBlock.types';
import { clsx } from 'clsx';

export const LegalNoticesBlock: React.FC<LegalNoticesBlockProps> = ({ items, className }) => (
  <div className={clsx('flex flex-wrap gap-x-4 gap-y-1 font-sans', className)}>
    {items.map((item, i) => (
      <a
        key={i}
        href={item.href || '#'}
        className="text-xs text-text-tertiary hover:text-text-primary transition-colors duration-200 underline underline-offset-1"
      >
        {item.label}
      </a>
    ))}
  </div>
);
