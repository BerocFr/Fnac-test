import type { Meta, StoryObj } from '@storybook/react';
import { CharacteristicBlock } from './CharacteristicBlock';

const meta: Meta<typeof CharacteristicBlock> = {
  title: 'Content/CharacteristicBlock',
  component: CharacteristicBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CharacteristicBlock>;

export const Default: Story = {
  args: {
    label: 'Système d\'exploitation',
    value: 'iOS 17',
  },
};

export const LongValue: Story = {
  args: {
    label: 'Résolution écran',
    value: '2556 x 1179 pixels à 460 ppp',
  },
};

export const ShortValue: Story = {
  args: {
    label: 'RAM',
    value: '8 Go',
  },
};
