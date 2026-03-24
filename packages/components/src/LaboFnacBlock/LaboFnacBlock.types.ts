export interface LaboSpec {
  label: string;
  value: string;
}
export interface LaboFnacBlockProps {
  score?: number;
  title?: string;
  compareHref?: string;
  specs?: LaboSpec[];
  pointsForts?: string[];
  className?: string;
}
