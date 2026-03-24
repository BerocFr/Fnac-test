import type { ProductCardProps } from '../ProductCard/ProductCard.types';
export interface UpSellProps {
  title: string;
  products: ProductCardProps[];
  seeAllHref?: string;
  className?: string;
}
