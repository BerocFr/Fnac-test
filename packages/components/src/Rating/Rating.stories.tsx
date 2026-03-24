import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'Atomic/Rating',
  component: Rating,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Rating>;

export const FiveStars: Story = { args: { value: 5, max: 5, showValue: true } };
export const FourThree: Story = { args: { value: 4.3, max: 5, showValue: true } };
export const ThreeStars: Story = { args: { value: 3, max: 5, showValue: true } };
export const Large: Story = { args: { value: 4.3, max: 5, showValue: true, size: 'md' } };
