import React from 'react';
import { clsx } from 'clsx';

interface HeaderMarketingProps { className?: string; }

const promoTabs = [
  { label: 'VENTES FLASH', icon: '⚡' },
  { label: 'BON PLAN INFORMATIQUE', icon: '💻' },
  { label: 'NOEL KIDS ADHERENTS', icon: '🎄' },
  { label: 'ACTUALITE LIVRES', icon: '📚' },
  { label: 'Livraison offerte avec Fnac +', icon: '🚚' },
];

export const HeaderMarketing: React.FC<HeaderMarketingProps> = ({ className }) => (
  <div className={clsx('bg-surface-default border-b border-border-default font-sans', className)}>
    <div className="max-w-[1440px] mx-auto px-6 flex items-stretch overflow-x-auto scrollbar-hide">
      {promoTabs.map((tab) => (
        <a
          key={tab.label}
          href="#"
          className="flex items-center gap-1.5 px-6 py-2 text-xs font-bold text-text-primary hover:text-brand-primary whitespace-nowrap border-b-2 border-transparent hover:border-brand-primary transition-colors duration-200 flex-shrink-0"
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </a>
      ))}
    </div>
  </div>
);
