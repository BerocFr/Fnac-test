import React from 'react';
import { clsx } from 'clsx';

interface LogoDeezerProps { className?: string; }

export const LogoDeezer: React.FC<LogoDeezerProps> = ({ className }) => (
  <div className={clsx('flex items-center gap-2 p-3 border border-border-default rounded-md bg-surface-default font-sans', className)}>
    <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #A238FF 0%, #FF6B6B 100%)' }}>
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 6h12v2H4V6zm0 3h12v2H4V9zm0 3h8v2H4v-2z"/>
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-bold text-text-primary">Deezer</span>
      <span className="text-xs text-text-secondary">3 mois offerts</span>
    </div>
  </div>
);
