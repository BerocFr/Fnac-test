import type { Meta, StoryObj } from '@storybook/react';
import { PriceBlock } from './PriceBlock';

const meta: Meta<typeof PriceBlock> = {
  title: 'Pricing/PriceBlock',
  component: PriceBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PriceBlock>;

export const Default: Story = { args: { price: 1299.00 } };
export const WithPromo: Story = { args: { price: 1299.00, strikePrice: 1399.00, promoLabel: 'PROMO', promoPercent: 7 } };
export const Large: Story = { args: { price: 1299.00, strikePrice: 1399.00, promoPercent: 7, size: 'lg' } };
export const Small: Story = { args: { price: 29.99, size: 'sm' } };
