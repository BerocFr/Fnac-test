import React from 'react';
import type { TabProps, TabsProps } from './Tab.types';
import { clsx } from 'clsx';

export const Tab: React.FC<TabProps> = ({ label, active = false, onClick, className }) => (
  <button
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={clsx(
      'font-sans text-sm font-bold pb-3 border-b-2 transition-colors duration-200 whitespace-nowrap px-1',
      active
        ? 'text-text-primary border-brand-primary'
        : 'text-text-secondary border-transparent hover:text-text-primary hover:border-neutral-300',
      className,
    )}
  >
    {label}
  </button>
);

export const Tabs: React.FC<TabsProps> = ({ tabs, className }) => (
  <div role="tablist" className={clsx('flex gap-6 border-b border-border-default overflow-x-auto', className)}>
    {tabs.map((tab, i) => <Tab key={i} {...tab} />)}
  </div>
);
