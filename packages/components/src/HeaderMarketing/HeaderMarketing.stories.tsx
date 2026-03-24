import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMarketing } from './HeaderMarketing';

const meta: Meta<typeof HeaderMarketing> = {
  title: 'Layout/HeaderMarketing',
  component: HeaderMarketing,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HeaderMarketing>;

export const Default: Story = {
  args: {},
};
