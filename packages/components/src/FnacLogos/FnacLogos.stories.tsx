import type { Meta, StoryObj } from '@storybook/react';
import { FnacLogos } from './FnacLogos';

const meta: Meta<typeof FnacLogos> = {
  title: 'Layout/FnacLogos',
  component: FnacLogos,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['dark', 'light'] },
  },
};
export default meta;
type Story = StoryObj<typeof FnacLogos>;

export const Dark: Story = {
  args: { variant: 'dark' },
};

export const Light: Story = {
  args: { variant: 'light' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
