import type { Meta, StoryObj } from '@storybook/react';
import { LogoDeezer } from './LogoDeezer';

const meta: Meta<typeof LogoDeezer> = {
  title: 'Pricing/LogoDeezer',
  component: LogoDeezer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LogoDeezer>;

export const Default: Story = {
  args: {},
};
