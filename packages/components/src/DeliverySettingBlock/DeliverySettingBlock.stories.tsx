import type { Meta, StoryObj } from '@storybook/react';
import { DeliverySettingBlock } from './DeliverySettingBlock';

const meta: Meta<typeof DeliverySettingBlock> = {
  title: 'Commerce/DeliverySettingBlock',
  component: DeliverySettingBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DeliverySettingBlock>;

export const WithAddress: Story = {
  args: {
    address: '12 rue de Rivoli, 75001 Paris',
  },
};

export const NoAddress: Story = {
  args: {},
};

export const WithEditCallback: Story = {
  args: {
    address: '5 avenue des Champs-Élysées, 75008 Paris',
    onEdit: () => alert('Modifier l\'adresse'),
  },
};
