import type { Meta, StoryObj } from '@storybook/react';
import { ReviewCard } from './ReviewCard';

const meta: Meta<typeof ReviewCard> = {
  title: 'Reviews/ReviewCard',
  component: ReviewCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ReviewCard>;

export const FiveStars: Story = {
  args: {
    author: 'Thomas M.',
    rating: 5,
    title: 'Produit exceptionnel !',
    text: 'Cet appareil est absolument incroyable. L\'appareil photo est révolutionnaire et l\'écran est sublime.',
    date: '12 jan. 2024',
    verified: true,
    platform: 'Fnac.com',
  },
};
export const FourStars: Story = {
  args: {
    author: 'Marie L.',
    rating: 4,
    title: 'Très bon mais cher',
    text: 'Très bon smartphone, les performances sont au rendez-vous. Seul bémol : le prix.',
    date: '8 jan. 2024',
    verified: true,
  },
};
export const ThreeStars: Story = {
  args: {
    author: 'Pierre D.',
    rating: 3,
    text: 'Correct pour le prix. Rien d\'exceptionnel mais remplit sa fonction.',
    date: '3 jan. 2024',
    verified: false,
  },
};
