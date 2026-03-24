import React from 'react';
import type { ConseilCardProps } from './ConseilCard.types';
import { Avatar } from '../Avatar/Avatar';
import { clsx } from 'clsx';

export const ConseilCard: React.FC<ConseilCardProps> = ({
  type = 'img', title, author, authorRole, imageSrc, avatarSrc, href = '#', className,
}) => (
  <a
    href={href}
    className={clsx('flex flex-col rounded-md overflow-hidden border border-border-default hover:shadow-md transition-shadow duration-200 font-sans bg-surface-default', className)}
  >
    {type === 'img' && (
      <div className="aspect-video bg-neutral-100 overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-neutral-200" />
        )}
      </div>
    )}
    <div className="flex flex-col gap-2 p-3 flex-1">
      <p className="text-sm font-bold text-text-primary line-clamp-3 leading-tight">{title}</p>
      <div className="flex items-center gap-2 mt-auto">
        <Avatar src={avatarSrc} alt={author} size="sm" initials={author.charAt(0)} />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-text-primary">{author}</span>
          {authorRole && <span className="text-xs text-text-tertiary">{authorRole}</span>}
        </div>
      </div>
    </div>
  </a>
);
