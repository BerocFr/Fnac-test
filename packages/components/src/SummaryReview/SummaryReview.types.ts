import type { RatingBar } from '../RatingBars/RatingBars.types';
export interface SummaryReviewProps {
  average: number;
  count: number;
  bars?: RatingBar[];
  onWriteReview?: () => void;
  className?: string;
}
