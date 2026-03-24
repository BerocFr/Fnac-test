import React from 'react';
import type { PushAdditionalAccessoryProps } from './PushAdditionalAccessory.types';
import { clsx } from 'clsx';

export const PushAdditionalAccessory: React.FC<PushAdditionalAccessoryProps> = ({
  title, seeAllHref, accessories, className,
}) => (
  <div className={clsx('flex flex-col gap-3 font-sans', className)}>
    <div className="flex items-center">
      <h3 className="font-bold text-lg text-text-primary">{title}</h3>
      {seeAllHref && (
        <a
          href={seeAllHref}
          className="ml-auto text-sm text-brand-primary hover:underline"
        >
          Voir tous les chargeurs →
        </a>
      )}
    </div>
    <div className="flex flex-col gap-2">
      {accessories.map((acc, i) => (
        <div key={i} className="border border-border-default rounded-lg p-3 flex items-center gap-3">
          {acc.image ? (
            <img src={acc.image} alt={acc.name} className="w-12 h-12 object-contain rounded flex-shrink-0" />
          ) : (
            <div className="w-12 h-12 bg-surface-secondary rounded flex-shrink-0" />
          )}
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-xs text-text-secondary uppercase">{acc.brand}</span>
            <span className="text-sm text-text-primary">{acc.name}</span>
            <span className="text-sm font-bold text-text-primary">{acc.price}</span>
          </div>
          <button className="ml-auto flex-shrink-0 text-sm font-bold border border-border-default rounded-lg px-3 py-1 text-text-primary bg-surface-default hover:bg-surface-secondary transition-colors duration-150">
            + Ajouter
          </button>
        </div>
      ))}
    </div>
  </div>
);
