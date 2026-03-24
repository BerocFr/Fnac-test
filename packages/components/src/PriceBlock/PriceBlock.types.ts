export interface PriceBlockProps {
  price: number;
  strikePrice?: number;
  promoLabel?: string;
  promoPercent?: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  ecoPartMention?: string;
  className?: string;
}
