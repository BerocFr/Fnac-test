import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReinsuranceBanner } from './ReinsuranceBanner';

const meta: Meta<typeof ReinsuranceBanner> = {
  title: 'Layout/ReinsuranceBanner',
  component: ReinsuranceBanner,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ReinsuranceBanner>;

export const Delivery: Story = {
  args: {
    text: 'Livraison offerte dès 25€ d\'achat — Retrait en magasin disponible',
    icon: <span style={{ fontSize: 18 }}>🚚</span>,
    href: '/livraison',
  },
};

export const FnacPlus: Story = {
  args: {
    text: 'Livraison express illimitée avec Fnac+ — 1 mois offert',
    icon: <span style={{ fontSize: 18 }}>⚡</span>,
    href: '/fnac-plus',
  },
};

export const NoIcon: Story = {
  args: {
    text: 'Paiement en 4x sans frais dès 100€ d\'achat',
  },
};
