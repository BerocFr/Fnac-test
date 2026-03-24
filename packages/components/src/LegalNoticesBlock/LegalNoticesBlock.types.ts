export interface LegalNotice {
  label: string;
  href?: string;
}
export interface LegalNoticesBlockProps {
  items: LegalNotice[];
  className?: string;
}
