import type { Meta, StoryObj } from '@storybook/react';
import { Fid } from './Fid';

const meta: Meta<typeof Fid> = {
  title: 'Commerce/Fid',
  component: Fid,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Fid>;

export const Default: Story = {
  args: {
    points: 50,
  },
};

export const HighPoints: Story = {
  args: {
    points: 1200,
  },
};

export const LowPoints: Story = {
  args: {
    points: 5,
  },
};
