import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atomic/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Téléphonie', href: '/telephonie' },
      { label: 'Smartphones', href: '/telephonie/smartphones' },
      { label: 'Apple iPhone 15 Pro 256 Go' },
    ],
  },
};

export const Short: Story = {
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Livres', href: '/livres' },
      { label: 'Romans & Récits' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Jeux vidéo' },
    ],
  },
};
