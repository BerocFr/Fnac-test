import type { Meta, StoryObj } from '@storybook/react';
import { ActionBlock } from './ActionBlock';

const meta: Meta<typeof ActionBlock> = {
  title: 'Commerce/ActionBlock',
  component: ActionBlock,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ActionBlock>;

export const InStock: Story = { args: { stock: 'in_stock' } };
export const LowStock: Story = { args: { stock: 'low_stock' } };
export const OutOfStock: Story = { args: { stock: 'out_of_stock' } };
