import type { Meta, StoryObj } from '@storybook/react';
import { CharacteristicContent } from './CharacteristicContent';

const meta: Meta<typeof CharacteristicContent> = {
  title: 'Content/CharacteristicContent',
  component: CharacteristicContent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CharacteristicContent>;

export const Smartphone: Story = {
  args: {
    title: 'Fiche technique',
    specs: [
      { label: 'Marque', value: 'Apple' },
      { label: 'Modèle', value: 'iPhone 15 Pro' },
      { label: 'Système d\'exploitation', value: 'iOS 17' },
      { label: 'Stockage interne', value: '256 Go' },
      { label: 'RAM', value: '8 Go' },
      { label: 'Taille d\'écran', value: '6,1 pouces' },
      { label: 'Résolution', value: '2556 x 1179 px' },
      { label: 'Appareil photo', value: '48 + 12 + 12 MP' },
    ],
  },
};

export const Laptop: Story = {
  args: {
    title: 'Caractéristiques',
    specs: [
      { label: 'Processeur', value: 'Apple M3 Pro' },
      { label: 'Mémoire', value: '18 Go' },
      { label: 'Stockage', value: 'SSD 512 Go' },
      { label: 'Écran', value: '14,2 pouces Liquid Retina XDR' },
      { label: 'Autonomie', value: 'Jusqu\'à 18 heures' },
    ],
  },
};

export const NoTitle: Story = {
  args: {
    specs: [
      { label: 'Couleur', value: 'Noir Sidéral' },
      { label: 'Poids', value: '187 g' },
    ],
  },
};
