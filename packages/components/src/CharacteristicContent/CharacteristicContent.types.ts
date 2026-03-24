export interface CharacteristicSpec {
  label: string;
  value: string;
}
export interface CharacteristicContentProps {
  specs: CharacteristicSpec[];
  title?: string;
  className?: string;
}
