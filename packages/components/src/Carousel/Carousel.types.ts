export interface CarouselProps<T = unknown> {
  title?: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  seeAllHref?: string;
  className?: string;
}
