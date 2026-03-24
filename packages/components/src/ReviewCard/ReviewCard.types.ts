export interface ReviewCardProps {
  author: string;
  rating: number;
  title?: string;
  text: string;
  date: string;
  verified?: boolean;
  platform?: string;
  className?: string;
}
