import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atomic/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Promo: Story = { args: { label: '-20%', variant: 'promo', size: 'small' } };
export const New: Story = { args: { label: 'Nouveauté', variant: 'new', size: 'small' } };
export const Info: Story = { args: { label: 'Exclusivité web', variant: 'info', size: 'medium' } };
export const Eco: Story = { args: { label: 'Éco-responsable', variant: 'eco', size: 'small' } };
export const Condition: Story = { args: { label: 'Très bon état', variant: 'condition', size: 'medium' } };
