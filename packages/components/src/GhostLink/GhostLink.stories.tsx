import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GhostLink } from './GhostLink';

const meta: Meta<typeof GhostLink> = {
  title: 'Atomic/GhostLink',
  component: GhostLink,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof GhostLink>;

export const Default: Story = {
  args: {
    href: '/telephonie/smartphones',
    children: 'Voir tous les smartphones',
  },
};

export const WithoutHref: Story = {
  args: {
    children: 'Voir toutes les offres',
    onClick: () => alert('Clicked'),
  },
};

export const LongText: Story = {
  args: {
    href: '/promotions/ventes-flash',
    children: 'Découvrez toutes nos ventes flash du moment',
  },
};
