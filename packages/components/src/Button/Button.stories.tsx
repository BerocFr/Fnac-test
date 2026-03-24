import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atomic/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: 'Ajouter au panier' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Voir les offres' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'En savoir plus' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Supprimer' } };
export const Small: Story = { args: { variant: 'primary', size: 'sm', children: 'Petit' } };
export const Large: Story = { args: { variant: 'primary', size: 'lg', children: 'Grand' } };
export const Loading: Story = { args: { variant: 'primary', loading: true, children: 'Chargement...' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true, children: 'Désactivé' } };
