import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Layout/SearchBar',
  component: SearchBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Rechercher un produit, une marque...',
  },
};

export const WithCallback: Story = {
  args: {
    placeholder: 'Rechercher un produit, une marque...',
    onSearch: (query: string) => console.log('Search:', query),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Rechercher parmi 20 millions de produits',
  },
};
