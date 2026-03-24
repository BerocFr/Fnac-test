import React from 'react';
import type { HeaderProps } from './Header.types';
import { clsx } from 'clsx';

export const Header: React.FC<HeaderProps> = ({ device = 'desktop', cartCount = 0, className }) => {
  if (device === 'mobile') {
    return (
      <header className={clsx('bg-surface-default font-sans border-b border-border-default', className)}>
        <div className="flex flex-col gap-3 px-4 py-4">
          {/* Row 1: Logo + Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Burger menu */}
              <button className="flex-shrink-0">
                <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <a href="/" className="flex-shrink-0">
                <FnacLogo className="h-8 w-28" />
              </a>
            </div>
            <button className="relative flex-shrink-0 flex flex-col items-center gap-0.5">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-brand-primary text-neutral-950 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          {/* Row 2: Search */}
          <div className="flex items-center bg-neutral-100 rounded px-3 py-2 gap-2">
            <svg className="w-4 h-4 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm text-text-tertiary flex-1">Rechercher un produit, une marque...</span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={clsx('bg-surface-default text-text-primary font-sans border-b border-border-strong sticky top-0 z-40', className)}>
      <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center gap-6">
        {/* Burger + Logo */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button>
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a href="/">
            <FnacLogo className="h-8 w-28" />
          </a>
        </div>
        {/* Search bar - flexible center */}
        <div className="flex-1 flex items-center bg-neutral-100 rounded gap-2 px-3" style={{ height: 40 }}>
          <svg className="w-4 h-4 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm text-text-tertiary flex-1 py-2">Rechercher un produit, une marque...</span>
          <button className="bg-brand-primary px-3 py-2 rounded text-neutral-950 flex-shrink-0 flex items-center justify-center" style={{ width: 40, height: 40, margin: '0 -12px' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        {/* Account + Cart */}
        <div className="flex items-center gap-12 flex-shrink-0">
          <a href="#" className="flex flex-col items-center gap-0.5 text-text-primary hover:text-brand-primary transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Mon compte</span>
          </a>
          <a href="#" className="relative flex flex-col items-center gap-0.5 text-text-primary hover:text-brand-primary transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-brand-primary text-neutral-950 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="text-xs">Panier</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const FnacLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 112 34" className={className} fill="none">
    <text x="0" y="28" fontSize="32" fontWeight="900" fontFamily="Roboto, sans-serif" fill="#F5B027">fnac</text>
  </svg>
);
