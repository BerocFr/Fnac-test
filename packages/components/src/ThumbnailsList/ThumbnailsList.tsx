import React from 'react';
import type { ThumbnailsListProps } from './ThumbnailsList.types';
import { ThumbnailChoice } from '../ThumbnailChoice/ThumbnailChoice';
import { clsx } from 'clsx';

export const ThumbnailsList: React.FC<ThumbnailsListProps> = ({ items, device = 'desktop', onSelect }) => (
  <div className={clsx(
    'flex gap-2',
    device === 'desktop' ? 'flex-col' : 'flex-row overflow-x-auto pb-1',
  )}>
    {items.map((item, i) => (
      <ThumbnailChoice
        key={i}
        {...item}
        index={i}
        onClick={() => onSelect?.(i)}
      />
    ))}
  </div>
);
