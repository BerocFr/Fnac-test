import React from 'react';
import type { DeliverySettingBlockProps } from './DeliverySettingBlock.types';
import { clsx } from 'clsx';

export const DeliverySettingBlock: React.FC<DeliverySettingBlockProps> = ({ address, onEdit, className }) => (
  <div className={clsx('flex items-center gap-2 p-3 bg-surface-secondary rounded-md font-sans', className)}>
    <svg className="w-4 h-4 text-text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
    <span className="text-xs text-text-secondary flex-1">
      Livrer à : <span className="font-bold text-text-primary">{address || 'France métropolitaine'}</span>
    </span>
    <button onClick={onEdit} className="text-xs text-text-primary underline hover:text-brand-primary transition-colors duration-200">
      Modifier
    </button>
  </div>
);
