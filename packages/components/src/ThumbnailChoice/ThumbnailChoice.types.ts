export interface ThumbnailChoiceProps {
  src?: string;
  alt?: string;
  state?: 'selected' | 'default';
  type?: 'img' | 'video' | 'number';
  onClick?: () => void;
  index?: number;
}
