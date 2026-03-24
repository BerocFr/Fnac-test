export interface DeliveryMethod {
  type: 'home' | 'store' | 'relay' | 'fnacplus';
  label: string;
  price: string;
  status?: string[];
  priceDetail?: string;
}

export interface DeliveryBlockProps {
  methods: DeliveryMethod[];
  className?: string;
}
