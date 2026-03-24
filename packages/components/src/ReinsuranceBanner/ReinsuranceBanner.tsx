import React from 'react';
import type { ReinsuranceBannerProps } from './ReinsuranceBanner.types';
import { clsx } from 'clsx';

export const ReinsuranceBanner: React.FC<ReinsuranceBannerProps> = ({ text, icon, href, className }) => (
  <div className={clsx('flex items-center gap-2 py-2 px-4 font-sans', className)}>
    {icon && <span className="w-5 h-5 text-text-secondary flex-shrink-0">{icon}</span>}
    {href ? (
      <a href={href} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">{text}</a>
    ) : (
      <span className="text-sm text-text-secondary">{text}</span>
    )}
  </div>
);
