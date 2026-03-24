import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryBlock } from './DeliveryBlock';

const meta: Meta<typeof DeliveryBlock> = {
  title: 'Commerce/DeliveryBlock',
  component: DeliveryBlock,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DeliveryBlock>;

export const Default: Story = {
  args: {
    methods: [
      { type: 'store', label: 'Retrait à Fnac Paris - St Lazare', price: 'Gratuit', status: ['En stock en rayon', 'Retrait 1h'] },
      { type: 'home', label: 'Livraison pour 75012', price: 'À partir de 7,99 €', status: ['Dès le 12 février'] },
      { type: 'fnacplus', label: 'Livraison express gratuite sur des milliers de produits', price: 'Dès 9,99 €', priceDetail: '9,99 € la 1ère année puis 14,99 €/an' },
    ],
  },
};

export const StoreOnly: Story = {
  args: {
    methods: [
      { type: 'store', label: 'Retrait en magasin', price: 'Gratuit', status: ['En stock', 'Retrait immédiat'] },
    ],
  },
};
