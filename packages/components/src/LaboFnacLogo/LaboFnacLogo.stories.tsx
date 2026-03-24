import type { Meta, StoryObj } from '@storybook/react';
import { LaboFnacLogo } from './LaboFnacLogo';

const meta: Meta<typeof LaboFnacLogo> = {
  title: 'Layout/LaboFnacLogo',
  component: LaboFnacLogo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LaboFnacLogo>;

export const Default: Story = {
  args: {},
};
