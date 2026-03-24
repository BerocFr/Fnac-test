export interface ProductCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviewCount?: number;
  imageSrc?: string;
  href?: string;
  badge?: string;
  className?: string;
}
