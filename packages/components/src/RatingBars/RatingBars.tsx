import React from 'react';
import type { RatingBarsProps } from './RatingBars.types';
import { clsx } from 'clsx';

export const RatingBars: React.FC<RatingBarsProps> = ({ bars, className }) => (
  <div className={clsx('flex flex-col gap-2 font-sans', className)}>
    {bars.map((bar, i) => {
      const pct = Math.min(100, Math.round((bar.value / (bar.maxValue || 10)) * 100));
      return (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs text-text-secondary w-24 shrink-0 text-right">{bar.label}</span>
          <div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full bg-brand-primary rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-xs font-bold text-text-primary w-6 shrink-0">{bar.value}</span>
        </div>
      );
    })}
  </div>
);
