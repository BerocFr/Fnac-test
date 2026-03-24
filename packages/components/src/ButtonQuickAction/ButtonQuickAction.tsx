import React from 'react';
import type { ButtonQuickActionProps } from './ButtonQuickAction.types';
import { clsx } from 'clsx';

export const ButtonQuickAction: React.FC<ButtonQuickActionProps> = ({
  label, icon, onClick, active = false, className,
}) => (
  <button
    onClick={onClick}
    className={clsx(
      'flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-md border-2 transition-all duration-200 font-sans',
      active
        ? 'border-brand-primary bg-brand-primary-light text-text-primary'
        : 'border-border-default bg-surface-default text-text-primary hover:border-border-strong',
      className,
    )}
  >
    {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
    {label}
  </button>
);
