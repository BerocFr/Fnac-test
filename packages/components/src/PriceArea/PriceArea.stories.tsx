import type { Meta, StoryObj } from '@storybook/react';
import { PriceArea } from './PriceArea';

const meta: Meta<typeof PriceArea> = {
  title: 'Pricing/PriceArea',
  component: PriceArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PriceArea>;

export const Default: Story = {
  args: {
    currentPrice: 999.0,
    currency: '€',
  },
};

export const WithOldPrice: Story = {
  args: {
    currentPrice: 799.0,
    oldPrice: 1129.0,
    currency: '€',
  },
};

export const WithFinancing: Story = {
  args: {
    currentPrice: 1199.0,
    oldPrice: 1399.0,
    currency: '€',
    financingLabel: 'ou 4x 299,75€ sans frais',
  },
};

export const LowPrice: Story = {
  args: {
    currentPrice: 14.99,
    currency: '€',
  },
};
