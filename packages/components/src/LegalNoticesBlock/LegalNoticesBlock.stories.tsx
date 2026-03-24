import type { Meta, StoryObj } from '@storybook/react';
import { LegalNoticesBlock } from './LegalNoticesBlock';

const meta: Meta<typeof LegalNoticesBlock> = {
  title: 'Layout/LegalNoticesBlock',
  component: LegalNoticesBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LegalNoticesBlock>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Conditions Générales de Vente', href: '/cgv' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
      { label: 'Gestion des cookies', href: '/cookies' },
      { label: 'Mentions légales', href: '/mentions-legales' },
    ],
  },
};

export const Short: Story = {
  args: {
    items: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'CGV', href: '/cgv' },
    ],
  },
};
