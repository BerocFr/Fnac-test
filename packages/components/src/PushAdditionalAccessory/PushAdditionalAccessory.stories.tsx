import type { Meta, StoryObj } from '@storybook/react';
import { PushAdditionalAccessory } from './PushAdditionalAccessory';

const meta: Meta<typeof PushAdditionalAccessory> = {
  title: 'Layout/PushAdditionalAccessory',
  component: PushAdditionalAccessory,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PushAdditionalAccessory>;

export const Default: Story = {
  args: {
    title: 'Complétez avec un chargeur',
    seeAllHref: '#',
    accessories: [
      {
        brand: 'APPLE',
        name: 'Adaptateur secteur Apple 20 Watts USB-C Blanc',
        price: '26,99 €',
      },
    ],
  },
};

export const MultipleAccessories: Story = {
  args: {
    title: 'Accessoires compatibles',
    seeAllHref: '#',
    accessories: [
      {
        brand: 'APPLE',
        name: 'Adaptateur secteur Apple 20 Watts USB-C Blanc',
        price: '26,99 €',
      },
      {
        brand: 'APPLE',
        name: 'Câble USB-C vers MagSafe 3 (2 m)',
        price: '49,99 €',
      },
    ],
  },
};
