import type { Meta, StoryObj } from '@storybook/react';
import { RatingBars } from './RatingBars';

const meta: Meta<typeof RatingBars> = {
  title: 'Reviews/RatingBars',
  component: RatingBars,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RatingBars>;

export const Default: Story = {
  args: {
    bars: [
      { label: '5 étoiles', value: 187, maxValue: 350 },
      { label: '4 étoiles', value: 98, maxValue: 350 },
      { label: '3 étoiles', value: 34, maxValue: 350 },
      { label: '2 étoiles', value: 18, maxValue: 350 },
      { label: '1 étoile', value: 13, maxValue: 350 },
    ],
  },
};

export const MostlyPositive: Story = {
  args: {
    bars: [
      { label: '5 étoiles', value: 420, maxValue: 500 },
      { label: '4 étoiles', value: 60, maxValue: 500 },
      { label: '3 étoiles', value: 12, maxValue: 500 },
      { label: '2 étoiles', value: 5, maxValue: 500 },
      { label: '1 étoile', value: 3, maxValue: 500 },
    ],
  },
};

export const Mixed: Story = {
  args: {
    bars: [
      { label: '5 étoiles', value: 80, maxValue: 400 },
      { label: '4 étoiles', value: 110, maxValue: 400 },
      { label: '3 étoiles', value: 90, maxValue: 400 },
      { label: '2 étoiles', value: 70, maxValue: 400 },
      { label: '1 étoile', value: 50, maxValue: 400 },
    ],
  },
};
