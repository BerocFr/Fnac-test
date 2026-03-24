import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Recommendations/Carousel',
  component: Carousel,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Carousel>;

const sampleProducts = [
  { id: 1, name: 'iPhone 15 Pro', price: '1 129€' },
  { id: 2, name: 'Samsung Galaxy S24', price: '899€' },
  { id: 3, name: 'Google Pixel 8', price: '749€' },
  { id: 4, name: 'OnePlus 12', price: '699€' },
  { id: 5, name: 'Xiaomi 14', price: '599€' },
];

export const Default: Story = {
  args: {
    title: 'Produits similaires',
    items: sampleProducts,
    renderItem: (item: { id: number; name: string; price: string }) => (
      <div style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
        <div style={{ background: '#f5f5f5', height: '120px', borderRadius: '4px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>Image</div>
        <p style={{ fontSize: '13px', fontWeight: 600, margin: '0 0 4px' }}>{item.name}</p>
        <p style={{ fontSize: '14px', fontWeight: 700, color: '#e2001a', margin: 0 }}>{item.price}</p>
      </div>
    ),
    seeAllHref: '/telephonie/smartphones',
  },
};

export const Books: Story = {
  args: {
    title: 'Dans la même collection',
    items: [
      { id: 1, title: 'Le Petit Prince', author: 'Saint-Exupéry' },
      { id: 2, title: 'L\'Étranger', author: 'Camus' },
      { id: 3, title: 'Germinal', author: 'Zola' },
    ],
    renderItem: (item: { id: number; title: string; author: string }) => (
      <div style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', minWidth: '140px' }}>
        <div style={{ background: '#fef3c7', height: '100px', borderRadius: '4px', marginBottom: '8px' }} />
        <p style={{ fontSize: '13px', fontWeight: 600, margin: '0 0 2px' }}>{item.title}</p>
        <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{item.author}</p>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    items: sampleProducts,
    renderItem: (item: { id: number; name: string; price: string }) => (
      <div style={{ padding: '8px', background: '#f9fafb', borderRadius: '6px', minWidth: '140px' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, margin: 0 }}>{item.name}</p>
      </div>
    ),
  },
};
