export interface InformativeItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}
export interface InformativesProps {
  items: InformativeItem[];
  className?: string;
}
