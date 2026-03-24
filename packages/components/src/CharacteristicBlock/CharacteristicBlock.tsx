import React from 'react';
import type { CharacteristicBlockProps } from './CharacteristicBlock.types';
import { clsx } from 'clsx';

export const CharacteristicBlock: React.FC<CharacteristicBlockProps> = ({ label, value, className }) => (
  <div className={clsx('flex flex-col gap-0.5 font-sans', className)}>
    <span className="text-xs text-text-tertiary">{label}</span>
    <span className="text-sm font-bold text-text-primary">{value}</span>
  </div>
);
