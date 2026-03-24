import type { Meta, StoryObj } from '@storybook/react';
import { VariantsList } from './VariantsList';

const meta: Meta<typeof VariantsList> = {
  title: 'Product/VariantsList',
  component: VariantsList,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof VariantsList>;

export const StorageCapacity: Story = {
  args: {
    label: 'Capacité de stockage',
    items: [
      { label: '128 Go', price: '999€', state: 'default' },
      { label: '256 Go', price: '1 129€', state: 'selected' },
      { label: '512 Go', price: '1 379€', state: 'default' },
      { label: '1 To', price: '1 629€', state: 'disabled' },
    ],
  },
};

export const Colors: Story = {
  args: {
    label: 'Coloris',
    items: [
      { label: 'Noir Sidéral', type: 'color', color: '#1C1C1C', state: 'selected' },
      { label: 'Blanc Stellaire', type: 'color', color: '#F5F5F0', state: 'default' },
      { label: 'Or', type: 'color', color: '#D4AF37', state: 'default' },
      { label: 'Violet Intense', type: 'color', color: '#6B3FA0', state: 'disabled' },
    ],
  },
};

export const Sizes: Story = {
  args: {
    label: 'Taille',
    items: [
      { label: 'S', state: 'default' },
      { label: 'M', state: 'selected' },
      { label: 'L', state: 'default' },
      { label: 'XL', state: 'disabled' },
    ],
  },
};
