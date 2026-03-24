import React from 'react';
import type { VariantsListProps } from './VariantsList.types';
import { ModelChoice } from '../ModelChoice/ModelChoice';
import { clsx } from 'clsx';

export const VariantsList: React.FC<VariantsListProps> = ({ label, items, className }) => (
  <div className={clsx('flex flex-col gap-2', className)}>
    {label && <span className="text-xs font-bold text-text-secondary font-sans uppercase tracking-wide">{label}</span>}
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => <ModelChoice key={i} {...item} />)}
    </div>
  </div>
);
