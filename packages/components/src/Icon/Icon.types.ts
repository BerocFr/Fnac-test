export type IconName =
  | 'lock' | 'occasion' | 'marketplace' | 'star' | 'star-filled'
  | 'truck' | 'store' | 'check' | 'chevron-right' | 'chevron-left'
  | 'chevron-down' | 'chevron-up' | 'heart' | 'cart' | 'search'
  | 'user' | 'close' | 'plus' | 'minus' | 'info' | 'warning'
  | 'share' | 'copy' | 'tool' | 'percent' | 'player-circle';

export interface IconProps {
  name: IconName;
  size?: 16 | 24;
  className?: string;
  'aria-label'?: string;
}
