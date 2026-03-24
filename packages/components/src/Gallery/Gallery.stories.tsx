import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from './Gallery';

const meta: Meta<typeof Gallery> = {
  title: 'Product/Gallery',
  component: Gallery,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Gallery>;

const mockImages = [
  { alt: 'Vue principale', type: 'img' as const },
  { alt: 'Vue dos', type: 'img' as const },
  { alt: 'Vue profil', type: 'img' as const },
  { alt: 'Vidéo', type: 'video' as const },
];

export const Desktop: Story = { args: { images: mockImages, device: 'desktop' } };
export const Mobile: Story = { args: { images: mockImages, device: 'mobile' } };
