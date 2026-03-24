import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Informatives } from './Informatives';

const meta: Meta<typeof Informatives> = {
  title: 'Product/Informatives',
  component: Informatives,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Informatives>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Livraison gratuite dès 25€', href: '/livraison' },
      { label: 'Retrait en magasin disponible', href: '/magasins' },
      { label: 'Retours gratuits sous 30 jours', href: '/retours' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Paiement sécurisé', icon: <span>🔒</span> },
      { label: 'Garantie 2 ans', icon: <span>✅</span> },
      { label: 'Service client 7j/7', icon: <span>📞</span> },
    ],
  },
};

export const Single: Story = {
  args: {
    items: [
      { label: 'Produit garanti d\'origine FNAC', href: '/garanties' },
    ],
  },
};
