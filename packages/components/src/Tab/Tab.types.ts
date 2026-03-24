export interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}
export interface TabsProps {
  tabs: TabProps[];
  className?: string;
}
