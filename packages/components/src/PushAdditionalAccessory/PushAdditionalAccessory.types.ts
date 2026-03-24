export interface Accessory {
  brand: string;
  name: string;
  price: string;
  image?: string;
}

export interface PushAdditionalAccessoryProps {
  title: string;
  seeAllHref?: string;
  accessories: Accessory[];
  className?: string;
}
