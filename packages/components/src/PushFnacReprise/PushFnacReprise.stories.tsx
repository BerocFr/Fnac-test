import type { Meta, StoryObj } from '@storybook/react';
import { PushFnacReprise } from './PushFnacReprise';

const meta: Meta<typeof PushFnacReprise> = {
  title: 'Layout/PushFnacReprise',
  component: PushFnacReprise,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PushFnacReprise>;

export const Default: Story = {
  args: {
    title: 'Revendez et économisez',
    badgeText: 'FNAC REPRISE',
    bonusText: '+100 € de bonus*',
    description: 'Estimez votre ancien appareil en quelques clics et bénéficiez d\'une remise immédiate + 100 € de bonus',
  },
};

export const WithCallback: Story = {
  args: {
    title: 'Revendez et économisez',
    badgeText: 'FNAC REPRISE',
    bonusText: '+150 € de bonus*',
    description: 'Échangez votre ancien téléphone et bénéficiez d\'une remise immédiate.',
    onClick: () => alert('Démarrer la reprise'),
  },
};
