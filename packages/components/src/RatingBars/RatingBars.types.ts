export interface RatingBar {
  label: string;
  value: number;
  maxValue?: number;
}
export interface RatingBarsProps {
  bars: RatingBar[];
  className?: string;
}
