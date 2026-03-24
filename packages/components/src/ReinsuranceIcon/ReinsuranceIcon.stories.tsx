import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReinsuranceIcon } from './ReinsuranceIcon';

const meta: Meta<typeof ReinsuranceIcon> = {
  title: 'Layout/ReinsuranceIcon',
  component: ReinsuranceIcon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ReinsuranceIcon>;

export const Delivery: Story = {
  args: {
    icon: <span style={{ fontSize: 24 }}>🚚</span>,
    label: 'Livraison gratuite dès 25€',
  },
};

export const Store: Story = {
  args: {
    icon: <span style={{ fontSize: 24 }}>🏪</span>,
    label: 'Retrait en magasin',
  },
};

export const Return: Story = {
  args: {
    icon: <span style={{ fontSize: 24 }}>↩</span>,
    label: 'Retours gratuits 30 jours',
  },
};

export const Secure: Story = {
  args: {
    icon: <span style={{ fontSize: 24 }}>🔒</span>,
    label: 'Paiement 100% sécurisé',
  },
};
