import type { Meta, StoryObj } from '@storybook/react';
import { UpSell } from './UpSell';

const meta: Meta<typeof UpSell> = {
  title: 'Recommendations/UpSell',
  component: UpSell,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof UpSell>;

const sampleProducts = [
  {
    title: 'Apple iPhone 15 Pro 256 Go Noir Sidéral',
    price: 1129,
    oldPrice: 1259,
    rating: 4.5,
    reviewCount: 342,
    imageSrc: 'https://via.placeholder.com/200x200/f5f5f5/333?text=iPhone',
    href: '/apple-iphone-15-pro',
    badge: 'Bestseller',
  },
  {
    title: 'Samsung Galaxy S24 Ultra 256 Go Phantom Black',
    price: 1199,
    rating: 4.3,
    reviewCount: 218,
    imageSrc: 'https://via.placeholder.com/200x200/f5f5f5/333?text=Galaxy',
    href: '/samsung-galaxy-s24-ultra',
  },
  {
    title: 'Google Pixel 8 Pro 256 Go Noir Obsidienne',
    price: 899,
    oldPrice: 1099,
    rating: 4.6,
    reviewCount: 97,
    imageSrc: 'https://via.placeholder.com/200x200/f5f5f5/333?text=Pixel',
    href: '/google-pixel-8-pro',
    badge: 'Promo',
  },
];

export const Default: Story = {
  args: {
    title: 'Vous aimerez aussi',
    products: sampleProducts,
    seeAllHref: '/telephonie/smartphones',
  },
};

export const NoSeeAll: Story = {
  args: {
    title: 'Produits complémentaires',
    products: sampleProducts.slice(0, 2),
  },
};
