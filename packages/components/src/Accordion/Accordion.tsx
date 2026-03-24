import React, { useState } from 'react';
import type { AccordionProps } from './Accordion.types';
import { clsx } from 'clsx';

export const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false, className }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={clsx('border-b border-border-default font-sans', className)}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-surface-secondary transition-colors duration-200 px-0"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-text-primary">{title}</span>
        <svg
          className={clsx('w-4 h-4 text-text-secondary transition-transform duration-200 flex-shrink-0', open && 'rotate-180')}
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 text-sm text-text-secondary leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};
