export interface RatingProps {
  value: number;
  max?: number;
  readOnly?: boolean;
  size?: 'sm' | 'md';
  showValue?: boolean;
  className?: string;
}
