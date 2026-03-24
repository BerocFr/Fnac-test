import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Content/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Closed: Story = {
  args: {
    title: 'Description du produit',
    children: <p>Le Samsung Galaxy S24 Ultra est le fleuron de la gamme Galaxy en 2024.</p>,
    defaultOpen: false,
  },
};
export const Open: Story = {
  args: {
    title: 'Caractéristiques techniques',
    children: <p>Écran : 6,8" QHD+ | Processeur : Snapdragon 8 Gen 3 | RAM : 12 Go</p>,
    defaultOpen: true,
  },
};
