import type { Meta, StoryObj } from '@storybook/react';
import { Fid } from './Fid';

const meta: Meta<typeof Fid> = {
  title: 'Commerce/Fid',
  component: Fid,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Fid>;

export const Default: Story = {
  args: {
    label: 'Livraison express gratuite sur des milliers de produits',
    startingPrice: '9,99 €',
    priceDescription: '9,99 € la 1ère année puis 14,99 €/an',
  },
};
