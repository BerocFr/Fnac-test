import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atomic/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'lock', 'occasion', 'marketplace', 'star', 'star-filled',
        'truck', 'store', 'check', 'chevron-right', 'chevron-left',
        'chevron-down', 'chevron-up', 'heart', 'cart', 'search',
        'user', 'close', 'plus', 'minus', 'info', 'warning',
        'share', 'copy', 'tool', 'percent', 'player-circle',
      ],
    },
    size: { control: 'select', options: [16, 24] },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Cart: Story = {
  args: { name: 'cart', size: 24, 'aria-label': 'Panier' },
};

export const StarFilled: Story = {
  args: { name: 'star-filled', size: 24, 'aria-label': 'Note' },
};

export const Truck: Story = {
  args: { name: 'truck', size: 24, 'aria-label': 'Livraison' },
};

export const SmallSize: Story = {
  args: { name: 'heart', size: 16, 'aria-label': 'Favori' },
};
