import React from 'react';
import type { GhostLinkProps } from './GhostLink.types';
import { clsx } from 'clsx';

export const GhostLink: React.FC<GhostLinkProps> = ({ href, children, className, onClick }) => (
  <a
    href={href || '#'}
    onClick={onClick}
    className={clsx(
      'font-sans text-sm text-text-primary underline underline-offset-2 hover:text-brand-primary transition-colors duration-200 cursor-pointer',
      className,
    )}
  >
    {children}
  </a>
);
