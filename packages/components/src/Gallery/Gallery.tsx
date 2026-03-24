import React, { useState } from 'react';
import type { GalleryProps } from './Gallery.types';
import { ThumbnailsList } from '../ThumbnailsList/ThumbnailsList';
import { clsx } from 'clsx';

export const Gallery: React.FC<GalleryProps> = ({ images, device = 'desktop', className }) => {
  const [selected, setSelected] = useState(0);
  const current = images[selected];

  if (device === 'mobile') {
    return (
      <div className={clsx('flex flex-col gap-3', className)}>
        <div className="relative w-full aspect-square bg-surface-secondary rounded-md overflow-hidden">
          {current?.src ? (
            <img src={current.src} alt={current.alt || ''} className="w-full h-full object-contain p-4" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-text-tertiary text-sm">Image produit</div>
          )}
        </div>
        <ThumbnailsList items={images.map((img, i) => ({ ...img, state: i === selected ? 'selected' : 'default' }))} device="mobile" onSelect={setSelected} />
      </div>
    );
  }

  return (
    <div className={clsx('flex gap-3', className)}>
      <ThumbnailsList
        items={images.map((img, i) => ({ ...img, state: i === selected ? 'selected' : 'default' }))}
        device="desktop"
        onSelect={setSelected}
      />
      <div className="relative flex-1 aspect-square bg-surface-secondary rounded-md overflow-hidden min-w-0">
        {current?.src ? (
          <img src={current.src} alt={current.alt || ''} className="w-full h-full object-contain p-6" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-48 h-48 bg-neutral-100 rounded-md flex items-center justify-center text-text-tertiary text-sm font-sans">
              Image produit
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
