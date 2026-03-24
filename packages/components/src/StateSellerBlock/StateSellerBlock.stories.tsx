import type { Meta, StoryObj } from '@storybook/react';
import { StateSellerBlock } from './StateSellerBlock';

const meta: Meta<typeof StateSellerBlock> = {
  title: 'Commerce/StateSellerBlock',
  component: StateSellerBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof StateSellerBlock>;

export const Default: Story = {
  args: {
    text: 'Produit neuf vendu & expédié par',
    sellerName: 'fnac',
  },
};

export const Marketplace: Story = {
  args: {
    text: 'Produit vendu & expédié par',
    sellerName: 'TechOccasion',
  },
};
