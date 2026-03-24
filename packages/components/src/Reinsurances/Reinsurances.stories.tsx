import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Reinsurances } from './Reinsurances';

const meta: Meta<typeof Reinsurances> = {
  title: 'Layout/Reinsurances',
  component: Reinsurances,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Reinsurances>;

export const Default: Story = {
  args: {
    items: [
      { icon: <span style={{ fontSize: 24 }}>🚚</span>, label: 'Livraison gratuite dès 25€' },
      { icon: <span style={{ fontSize: 24 }}>🏪</span>, label: 'Retrait en magasin' },
      { icon: <span style={{ fontSize: 24 }}>↩</span>, label: 'Retours gratuits 30 jours' },
      { icon: <span style={{ fontSize: 24 }}>🔒</span>, label: 'Paiement sécurisé' },
    ],
  },
};

export const Extended: Story = {
  args: {
    items: [
      { icon: <span style={{ fontSize: 24 }}>🚚</span>, label: 'Livraison gratuite dès 25€' },
      { icon: <span style={{ fontSize: 24 }}>🏪</span>, label: 'Retrait en magasin' },
      { icon: <span style={{ fontSize: 24 }}>↩</span>, label: 'Retours gratuits 30 jours' },
      { icon: <span style={{ fontSize: 24 }}>🔒</span>, label: 'Paiement sécurisé' },
      { icon: <span style={{ fontSize: 24 }}>🎧</span>, label: 'SAV 7j/7' },
      { icon: <span style={{ fontSize: 24 }}>⭐</span>, label: 'Produits certifiés' },
    ],
  },
};
