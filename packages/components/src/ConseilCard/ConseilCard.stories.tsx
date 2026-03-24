import type { Meta, StoryObj } from '@storybook/react';
import { ConseilCard } from './ConseilCard';

const meta: Meta<typeof ConseilCard> = {
  title: 'Recommendations/ConseilCard',
  component: ConseilCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['img', 'text'] },
  },
};
export default meta;
type Story = StoryObj<typeof ConseilCard>;

export const WithImage: Story = {
  args: {
    type: 'img',
    title: 'Les meilleurs smartphones de 2024 : notre sélection',
    author: 'Thomas Lefebvre',
    authorRole: 'Expert Téléphonie',
    imageSrc: 'https://via.placeholder.com/400x220/e5e7eb/6b7280?text=Article',
    avatarSrc: 'https://i.pravatar.cc/40?img=3',
    href: '/conseils/meilleurs-smartphones-2024',
  },
};

export const TextOnly: Story = {
  args: {
    type: 'text',
    title: 'Comment choisir son casque audio selon ses besoins ?',
    author: 'Sophie Marchand',
    authorRole: 'Conseillère Audio',
    href: '/conseils/choisir-casque-audio',
  },
};

export const NoRole: Story = {
  args: {
    type: 'img',
    title: 'Guide d\'achat PC portable gaming 2024',
    author: 'Marc Dubois',
    imageSrc: 'https://via.placeholder.com/400x220/e5e7eb/6b7280?text=Guide',
    href: '/conseils/pc-gaming',
  },
};
