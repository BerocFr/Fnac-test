export interface ButtonQuickActionProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}
