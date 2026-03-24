import React from 'react';
import type { CharacteristicContentProps } from './CharacteristicContent.types';
import { CharacteristicBlock } from '../CharacteristicBlock/CharacteristicBlock';
import { clsx } from 'clsx';

export const CharacteristicContent: React.FC<CharacteristicContentProps> = ({ specs, title, className }) => (
  <div className={clsx('font-sans', className)}>
    {title && <h3 className="text-base font-bold text-text-primary mb-4">{title}</h3>}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {specs.map((spec, i) => <CharacteristicBlock key={i} {...spec} />)}
    </div>
  </div>
);
