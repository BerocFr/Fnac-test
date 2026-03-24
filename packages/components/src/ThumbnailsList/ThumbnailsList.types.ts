import type { ThumbnailChoiceProps } from '../ThumbnailChoice/ThumbnailChoice.types';
export interface ThumbnailsListProps {
  items: ThumbnailChoiceProps[];
  device?: 'desktop' | 'mobile';
  onSelect?: (index: number) => void;
}
