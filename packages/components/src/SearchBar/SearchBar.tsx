import React, { useState } from 'react';
import type { SearchBarProps } from './SearchBar.types';
import { clsx } from 'clsx';

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Rechercher un produit, une marque...', onSearch, className,
}) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSearch?.(query); };
  return (
    <form onSubmit={handleSubmit} className={clsx('relative flex items-center font-sans', className)}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 pl-4 pr-10 rounded-full border border-border-strong bg-surface-default text-sm text-text-primary placeholder-text-tertiary focus:outline-none focus:border-border-focus transition-colors duration-200"
      />
      <button type="submit" className="absolute right-3 text-text-secondary hover:text-text-primary transition-colors duration-200">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </button>
    </form>
  );
};
