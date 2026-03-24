import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Recommendations/ProductCard',
  component: ProductCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    title: 'Samsung Galaxy S24+ 256Go Violet',
    price: 999.00,
    oldPrice: 1099.00,
    rating: 4.1,
    reviewCount: 89,
    badge: '-9%',
  },
};
export const WithoutPromo: Story = {
  args: {
    title: 'Apple iPhone 15 Pro 256Go Titane',
    price: 1229.00,
    rating: 4.5,
    reviewCount: 203,
  },
};
export const NoRating: Story = {
  args: { title: 'Xiaomi 14 Ultra 512Go Black', price: 1299.00 },
};
