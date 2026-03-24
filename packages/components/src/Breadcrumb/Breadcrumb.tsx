import React from 'react';
import type { BreadcrumbProps } from './Breadcrumb.types';
import { clsx } from 'clsx';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => (
  <nav aria-label="Breadcrumb" className={clsx('font-sans', className)}>
    <ol className="flex items-center flex-wrap gap-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-neutral-400 text-xs">/</span>}
          {i === items.length - 1 ? (
            <span className="text-xs text-text-secondary" aria-current="page">{item.label}</span>
          ) : (
            <a href={item.href || '#'} className="text-xs text-text-primary hover:text-brand-primary transition-colors duration-200 underline underline-offset-1">
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
