import type { Meta, StoryObj } from '@storybook/react';
import { SummaryReview } from './SummaryReview';

const meta: Meta<typeof SummaryReview> = {
  title: 'Reviews/SummaryReview',
  component: SummaryReview,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SummaryReview>;

export const Default: Story = {
  args: {
    average: 4.5,
    count: 350,
    bars: [
      { label: '5 étoiles', value: 187, maxValue: 350 },
      { label: '4 étoiles', value: 98, maxValue: 350 },
      { label: '3 étoiles', value: 34, maxValue: 350 },
      { label: '2 étoiles', value: 18, maxValue: 350 },
      { label: '1 étoile', value: 13, maxValue: 350 },
    ],
  },
};

export const WithWriteCallback: Story = {
  args: {
    average: 4.2,
    count: 128,
    bars: [
      { label: '5 étoiles', value: 60, maxValue: 128 },
      { label: '4 étoiles', value: 38, maxValue: 128 },
      { label: '3 étoiles', value: 15, maxValue: 128 },
      { label: '2 étoiles', value: 10, maxValue: 128 },
      { label: '1 étoile', value: 5, maxValue: 128 },
    ],
    onWriteReview: () => alert('Écrire un avis'),
  },
};

export const NoBars: Story = {
  args: {
    average: 3.8,
    count: 42,
  },
};
