import React from 'react';
import type { TagProps } from './Tag.types';
import { clsx } from 'clsx';

const variantClasses = {
  promo: 'bg-feedback-danger text-text-inverse',
  info: 'bg-feedback-info-light text-feedback-info border border-feedback-info',
  new: 'bg-brand-primary text-neutral-950',
  eco: 'bg-feedback-success-light text-feedback-success-dark',
  condition: 'bg-surface-secondary text-text-secondary border border-border-default',
  neutral: 'bg-surface-secondary text-text-secondary',
};

const sizeClasses = {
  small: 'text-xs px-1.5 py-0.5 rounded-sm',
  medium: 'text-xs px-2 py-1 rounded-sm',
};

export const Tag: React.FC<TagProps> = ({ label, variant = 'neutral', size = 'small' }) => (
  <span className={clsx('inline-flex items-center font-sans font-bold leading-none', variantClasses[variant], sizeClasses[size])}>
    {label}
  </span>
);
