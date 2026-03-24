export interface StickyBannerMobileProps {
  price: number;
  oldPrice?: number;
  currency?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}
