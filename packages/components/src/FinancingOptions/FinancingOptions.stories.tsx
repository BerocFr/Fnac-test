import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FinancingOptions } from './FinancingOptions';

const meta: Meta<typeof FinancingOptions> = {
  title: 'Pricing/FinancingOptions',
  component: FinancingOptions,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof FinancingOptions>;

export const Default: Story = {
  args: {
    label: 'Payez en 32 fois dès',
    amount: '53,48 €',
    period: '/ mois',
    taeg: 'TAEG fixe : 21,15% - Montant total dû : 1711,36 €',
  },
};

export const Clickable: Story = {
  args: {
    label: 'Payez en 24 fois dès',
    amount: '41,25 €',
    period: '/ mois',
    taeg: 'TAEG fixe : 19,50% - Montant total dû : 990,00 €',
    onClick: () => alert('Voir les détails du financement'),
  },
};
