import type { Meta, StoryObj } from '@storybook/react';
import { SubFooter } from './SubFooter';

const meta: Meta<typeof SubFooter> = {
  title: 'Layout/SubFooter',
  component: SubFooter,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SubFooter>;

export const Default: Story = {
  args: {},
};
