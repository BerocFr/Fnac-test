import type { Meta, StoryObj } from '@storybook/react';
import { ModelChoice } from './ModelChoice';

const meta: Meta<typeof ModelChoice> = {
  title: 'Product/ModelChoice',
  component: ModelChoice,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ModelChoice>;

export const Selected: Story = { args: { label: '256 Go', price: '1 299 €', state: 'selected', type: 'img' } };
export const Default: Story = { args: { label: '512 Go', price: '1 449 €', state: 'default', type: 'img' } };
export const ColorSelected: Story = { args: { label: 'Noir', state: 'selected', type: 'color', color: '#141619' } };
export const ColorDefault: Story = { args: { label: 'Violet', state: 'default', type: 'color', color: '#A238FF' } };
export const Small: Story = { args: { label: '256 Go', price: '1 299 €', state: 'selected', size: 'small' } };
export const Disabled: Story = { args: { label: 'Rupture', state: 'disabled', type: 'img' } };
