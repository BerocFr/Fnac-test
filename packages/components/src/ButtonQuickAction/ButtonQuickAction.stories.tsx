import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonQuickAction } from './ButtonQuickAction';

const meta: Meta<typeof ButtonQuickAction> = {
  title: 'Product/ButtonQuickAction',
  component: ButtonQuickAction,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ButtonQuickAction>;

export const Default: Story = {
  args: {
    label: 'Ajouter aux favoris',
  },
};

export const Active: Story = {
  args: {
    label: 'Dans mes favoris',
    active: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Comparer',
    icon: <span>⚖️</span>,
  },
};

export const ShareAction: Story = {
  args: {
    label: 'Partager',
    icon: <span>↗</span>,
  },
};
