import type { Meta, StoryObj } from '@storybook/react';
import { LaboFnacBlock } from './LaboFnacBlock';

const meta: Meta<typeof LaboFnacBlock> = {
  title: 'Content/LaboFnacBlock',
  component: LaboFnacBlock,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LaboFnacBlock>;

export const Full: Story = {
  args: {
    score: 8.5,
    title: 'Samsung Galaxy S24 Ultra — notre verdict',
    specs: [
      { label: 'Écran', value: '6,8" Dynamic AMOLED 2X' },
      { label: 'Processeur', value: 'Snapdragon 8 Gen 3' },
      { label: 'RAM', value: '12 Go' },
      { label: 'Batterie', value: '5 000 mAh' },
    ],
    pointsForts: [
      'Écran exceptionnel 120Hz adaptatif',
      'Stylet S Pen intégré',
      'Performances photo inégalées',
    ],
  },
};
export const ScoreOnly: Story = { args: { score: 9.0, title: 'Test exclusif Labo Fnac' } };
