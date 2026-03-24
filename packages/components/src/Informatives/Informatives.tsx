import React from 'react';
import type { InformativesProps } from './Informatives.types';
import { clsx } from 'clsx';

export const Informatives: React.FC<InformativesProps> = ({ items, className }) => (
  <div className={clsx('flex items-center gap-4 overflow-x-auto font-sans', className)}>
    {items.map((item, i) => (
      <a
        key={i}
        href={item.href || '#'}
        className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-brand-primary transition-colors duration-200 whitespace-nowrap flex-shrink-0"
      >
        {item.icon && <span className="w-3.5 h-3.5 flex-shrink-0">{item.icon}</span>}
        {item.label}
      </a>
    ))}
  </div>
);
