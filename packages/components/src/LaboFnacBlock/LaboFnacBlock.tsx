import React from 'react';
import type { LaboFnacBlockProps } from './LaboFnacBlock.types';
import { CharacteristicBlock } from '../CharacteristicBlock/CharacteristicBlock';
import { clsx } from 'clsx';

export const LaboFnacBlock: React.FC<LaboFnacBlockProps> = ({
  score, title = 'Test Labo Fnac', specs = [], pointsForts = [], className,
}) => (
  <div className={clsx('bg-surface-secondary rounded-md p-4 font-sans', className)}>
    <div className="flex items-center justify-between mb-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">LABO FNAC</span>
        </div>
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
      </div>
      {score !== undefined && (
        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-brand-primary">
          <span className="text-2xl font-bold text-neutral-950">{score}</span>
          <span className="text-xs font-bold text-neutral-950">/10</span>
        </div>
      )}
    </div>
    {specs.length > 0 && (
      <div className="grid grid-cols-2 gap-3 mb-4 sm:grid-cols-3">
        {specs.map((spec, i) => <CharacteristicBlock key={i} {...spec} />)}
      </div>
    )}
    {pointsForts.length > 0 && (
      <div>
        <h4 className="text-sm font-bold text-text-primary mb-2">Points forts</h4>
        <ul className="flex flex-col gap-1">
          {pointsForts.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="text-feedback-success font-bold mt-0.5">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
