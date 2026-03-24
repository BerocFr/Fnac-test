import type { Meta, StoryObj } from '@storybook/react';
import { ThumbnailsList } from './ThumbnailsList';

const meta: Meta<typeof ThumbnailsList> = {
  title: 'Product/ThumbnailsList',
  component: ThumbnailsList,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    device: { control: 'select', options: ['desktop', 'mobile'] },
  },
};
export default meta;
type Story = StoryObj<typeof ThumbnailsList>;

const thumbnails = [
  { src: 'https://via.placeholder.com/80x80/f5f5f5/333?text=1', alt: 'Vue 1', type: 'img' as const, state: 'selected' as const },
  { src: 'https://via.placeholder.com/80x80/f5f5f5/333?text=2', alt: 'Vue 2', type: 'img' as const },
  { src: 'https://via.placeholder.com/80x80/f5f5f5/333?text=3', alt: 'Vue 3', type: 'img' as const },
  { src: 'https://via.placeholder.com/80x80/f5f5f5/333?text=▶', alt: 'Vidéo', type: 'video' as const },
];

export const Desktop: Story = {
  args: {
    items: thumbnails,
    device: 'desktop',
  },
};

export const Mobile: Story = {
  args: {
    items: thumbnails,
    device: 'mobile',
  },
};

export const FewItems: Story = {
  args: {
    items: thumbnails.slice(0, 2),
    device: 'desktop',
  },
};
