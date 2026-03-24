import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tab';

const meta: Meta<typeof Tabs> = {
  title: 'Atomic/Tab',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Description', active: true },
      { label: 'Caractéristiques' },
      { label: 'Avis clients' },
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { label: 'Description', active: true },
      { label: 'Caractéristiques' },
      { label: 'Avis clients' },
      { label: 'Questions / Réponses' },
      { label: 'Accessoires' },
    ],
  },
};

export const SecondActive: Story = {
  args: {
    tabs: [
      { label: 'Description' },
      { label: 'Caractéristiques', active: true },
      { label: 'Avis clients' },
    ],
  },
};
