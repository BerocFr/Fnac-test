import React from 'react';
import type { AvatarProps } from './Avatar.types';
import { clsx } from 'clsx';

const sizeMap = { sm: 'w-6 h-6 text-xs', md: 'w-8 h-8 text-sm', lg: 'w-10 h-10 text-base' };

export const Avatar: React.FC<AvatarProps> = ({ src, alt = '', size = 'md', initials }) => {
  if (src) return (
    <img src={src} alt={alt} className={clsx('rounded-full object-cover flex-shrink-0', sizeMap[size])} />
  );
  return (
    <div className={clsx('rounded-full bg-surface-secondary flex items-center justify-center flex-shrink-0 font-sans font-bold text-text-secondary', sizeMap[size])}>
      {initials || alt.charAt(0).toUpperCase() || '?'}
    </div>
  );
};
