import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atomic/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Jean Dupont',
    size: 'md',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    initials: 'AB',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'Marie Martin',
    size: 'lg',
  },
};
