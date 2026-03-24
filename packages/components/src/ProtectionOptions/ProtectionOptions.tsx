import React from 'react';
import type { ProtectionOptionsProps } from './ProtectionOptions.types';
import { clsx } from 'clsx';

export const ProtectionOptions: React.FC<ProtectionOptionsProps> = ({
  items, onSelect, compareHref, className,
}) => (
  <div className={clsx('flex flex-col gap-3 font-sans', className)}>
    <div className="flex items-center">
      <h3 className="font-bold text-lg text-text-primary">Protégez votre appareil</h3>
      {compareHref && (
        <a
          href={compareHref}
          className="ml-auto text-sm text-brand-primary hover:underline"
        >
          Comparer les offres →
        </a>
      )}
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => onSelect?.(i)}
          className={clsx(
            'rounded-lg border px-3 py-2 cursor-pointer text-left transition-colors duration-150',
            item.selected
              ? 'border-text-primary bg-surface-default'
              : 'border-border-default bg-surface-default hover:border-text-secondary',
          )}
        >
          <span className="block text-xs font-bold text-text-primary">{item.label}</span>
          {item.price && (
            <span className="block text-xs text-text-secondary">{item.price}</span>
          )}
        </button>
      ))}
    </div>
  </div>
);
