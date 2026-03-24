import React from 'react';
import type { ButtonProps } from './Button.types';
import { clsx } from 'clsx';

const variantClasses = {
  primary: 'bg-brand-primary text-neutral-950 hover:bg-brand-secondary border-transparent font-bold',
  secondary: 'bg-transparent text-text-primary border-border-strong hover:bg-surface-secondary font-bold',
  ghost: 'bg-transparent text-text-primary border-transparent hover:bg-surface-secondary font-bold',
  danger: 'bg-feedback-danger text-text-inverse border-transparent hover:opacity-90 font-bold',
};

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5 rounded-sm gap-1.5',
  md: 'text-sm px-4 py-2.5 rounded-md gap-2',
  lg: 'text-base px-6 py-3 rounded-md gap-2',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, disabled, as: Component = 'button', children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          'inline-flex items-center justify-center font-sans border transition-colors duration-200 select-none cursor-pointer',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          loading && 'relative',
          className,
        )}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
            </svg>
          </span>
        )}
        <span className={clsx(loading && 'invisible')}>{children}</span>
      </Component>
    );
  }
);
Button.displayName = 'Button';
