import type { Meta, StoryObj } from '@storybook/react';
import { Footer1440 } from './Footer1440';

const meta: Meta<typeof Footer1440> = {
  title: 'Layout/Footer1440',
  component: Footer1440,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Footer1440>;

export const Default: Story = {
  args: {},
};
