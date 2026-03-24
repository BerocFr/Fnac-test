import type { Meta, StoryObj } from '@storybook/react';
import { ThumbnailChoice } from './ThumbnailChoice';

const meta: Meta<typeof ThumbnailChoice> = {
  title: 'Product/ThumbnailChoice',
  component: ThumbnailChoice,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'selected'] },
    type: { control: 'select', options: ['img', 'video', 'number'] },
  },
};
export default meta;
type Story = StoryObj<typeof ThumbnailChoice>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/80x80/f5f5f5/333?text=1',
    alt: 'Vue de face',
    state: 'default',
    type: 'img',
  },
};

export const Selected: Story = {
  args: {
    src: 'https://via.placeholder.com/80x80/f5f5f5/333?text=1',
    alt: 'Vue de face',
    state: 'selected',
    type: 'img',
  },
};

export const Video: Story = {
  args: {
    src: 'https://via.placeholder.com/80x80/f5f5f5/333?text=▶',
    alt: 'Vidéo produit',
    state: 'default',
    type: 'video',
  },
};

export const NumberType: Story = {
  args: {
    type: 'number',
    index: 5,
    state: 'default',
  },
};
