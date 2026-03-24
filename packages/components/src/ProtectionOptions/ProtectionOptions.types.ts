export interface ProtectionOption {
  label: string;
  price?: string | null;
  selected?: boolean;
}

export interface ProtectionOptionsProps {
  items: ProtectionOption[];
  onSelect?: (index: number) => void;
  compareHref?: string;
  className?: string;
}
