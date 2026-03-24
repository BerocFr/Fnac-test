import React, { useState } from 'react';
import type { SEOBlockProps } from './SEOBlock.types';
import { clsx } from 'clsx';

export const SEOBlock: React.FC<SEOBlockProps> = ({ content, title, className }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={clsx('font-sans', className)}>
      {title && <h2 className="text-base font-bold text-text-primary mb-3">{title}</h2>}
      <div className={clsx('text-sm text-text-secondary leading-relaxed overflow-hidden transition-all duration-300', !expanded && 'max-h-20')}>
        <p>{content}</p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm text-text-primary underline hover:text-brand-primary transition-colors duration-200"
      >
        {expanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </div>
  );
};
