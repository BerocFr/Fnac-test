export interface ActionBlockProps {
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onBuyNow?: () => void;
  price?: number;
  currency?: string;
  stock?: 'in_stock' | 'low_stock' | 'out_of_stock';
  className?: string;
}
