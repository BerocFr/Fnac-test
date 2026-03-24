export interface ModelChoiceProps {
  label: string;
  price?: string;
  state?: 'selected' | 'default' | 'disabled';
  size?: 'small' | 'medium';
  type?: 'img' | 'icone' | 'color';
  src?: string;
  color?: string;
  onClick?: () => void;
}
