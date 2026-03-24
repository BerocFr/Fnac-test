import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  argTypes: {
    device: { control: 'select', options: ['desktop', 'mobile'] },
  },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Desktop: Story = {
  args: {
    device: 'desktop',
    cartCount: 3,
  },
};

export const Mobile: Story = {
  args: {
    device: 'mobile',
    cartCount: 1,
  },
};

export const EmptyCart: Story = {
  args: {
    device: 'desktop',
    cartCount: 0,
  },
};
