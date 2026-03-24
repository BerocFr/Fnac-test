import React from 'react';
import type { DeliveryBlockProps } from './DeliveryBlock.types';
import { clsx } from 'clsx';

const StoreIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM1 1h14l-1 9H3L1 1zm2 2l1.5 6h9l1-6H3z" />
  </svg>
);

const RelayIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const typeIcons: Record<string, React.ReactNode> = {
  store: <StoreIcon />,
  home: <HomeIcon />,
  relay: <RelayIcon />,
  fnacplus: null,
};

export const DeliveryBlock: React.FC<DeliveryBlockProps> = ({ methods, className }) => (
  <div className={clsx('flex flex-col font-sans', className)}>
    {methods.map((method, i) => {
      if (method.type === 'fnacplus') {
        return (
          <div key={i} className="py-3 border-b border-border-default last:border-b-0">
            <div className="bg-[#FFF8E6] rounded-lg p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#F5A623] text-base tracking-tight">fnac+</span>
                <button className="text-sm font-bold border border-border-default rounded-lg px-3 py-1 text-text-primary bg-surface-default hover:bg-surface-secondary transition-colors duration-150">
                  + Ajouter
                </button>
              </div>
              <p className="text-sm text-text-primary">{method.label}</p>
              <p className="text-xs text-text-secondary">
                {method.price}
                {method.priceDetail && <span> — {method.priceDetail}</span>}
              </p>
            </div>
          </div>
        );
      }

      return (
        <div key={i} className="py-3 border-b border-border-default last:border-b-0">
          <div className="flex items-center gap-3">
            <span className="text-text-secondary flex-shrink-0">{typeIcons[method.type]}</span>
            <span className="font-bold text-sm text-text-primary flex-1 min-w-0">{method.label}</span>
            <span className={clsx(
              'text-sm whitespace-nowrap flex-shrink-0',
              method.price === 'Gratuit' ? 'text-feedback-success font-bold' : 'text-text-primary',
            )}>
              {method.price}
            </span>
            <svg className="w-4 h-4 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          {method.status && method.status.length > 0 && (
            <div className="flex flex-col gap-0.5 mt-1 pl-8">
              {method.status.map((s, j) => (
                <span key={j} className="flex items-center gap-1 text-sm text-text-secondary">
                  <span className="text-feedback-success text-xs">●</span>
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      );
    })}
  </div>
);
