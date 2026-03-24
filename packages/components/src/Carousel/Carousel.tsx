import React, { useRef } from 'react';
import type { CarouselProps } from './Carousel.types';
import { clsx } from 'clsx';

export function Carousel<T>({ title, items, renderItem, seeAllHref, className }: CarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };
  return (
    <div className={clsx('font-sans', className)}>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text-primary">{title}</h2>
          <div className="flex items-center gap-2">
            {seeAllHref && <a href={seeAllHref} className="text-sm text-text-primary underline hover:text-brand-primary transition-colors">Voir tout</a>}
            <button onClick={() => scroll('left')} className="w-8 h-8 flex items-center justify-center rounded-full border border-border-default hover:bg-surface-secondary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </button>
            <button onClick={() => scroll('right')} className="w-8 h-8 flex items-center justify-center rounded-full border border-border-default hover:bg-surface-secondary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>
      )}
      <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        {items.map((item, i) => (
          <div key={i} className="snap-start flex-shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
