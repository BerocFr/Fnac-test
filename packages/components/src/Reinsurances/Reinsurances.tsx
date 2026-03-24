import React from 'react';
import type { ReinsurancesProps } from './Reinsurances.types';
import { ReinsuranceIcon } from '../ReinsuranceIcon/ReinsuranceIcon';
import { clsx } from 'clsx';

export const Reinsurances: React.FC<ReinsurancesProps> = ({ items, className }) => (
  <div className={clsx('flex items-start justify-center gap-8 flex-wrap py-6', className)}>
    {items.map((item, i) => <ReinsuranceIcon key={i} {...item} />)}
  </div>
);
