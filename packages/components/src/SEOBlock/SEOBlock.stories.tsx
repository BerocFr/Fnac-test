import type { Meta, StoryObj } from '@storybook/react';
import { SEOBlock } from './SEOBlock';

const meta: Meta<typeof SEOBlock> = {
  title: 'Layout/SEOBlock',
  component: SEOBlock,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SEOBlock>;

export const Default: Story = {
  args: {
    title: 'Smartphones — Tout savoir avant d\'acheter',
    content: `Les smartphones sont devenus des outils incontournables du quotidien. Que vous recherchiez un modèle haut de gamme avec les dernières technologies ou un smartphone entrée de gamme au meilleur rapport qualité-prix, FNAC vous propose une large sélection des meilleures marques : Apple, Samsung, Xiaomi, Google, et bien d'autres.

Retrouvez les derniers modèles iPhone, les Galaxy S, les Pixel, et découvrez nos guides d'achat pour choisir le smartphone qui correspond à vos usages. Comparez les caractéristiques techniques, lisez les avis clients et profitez de nos offres exclusives adhérents.

Tous nos smartphones sont garantis et peuvent être retirés en magasin ou livrés rapidement à domicile.`,
  },
};

export const ShortContent: Story = {
  args: {
    title: 'TV 4K',
    content: 'Découvrez notre sélection de téléviseurs 4K et OLED des meilleures marques : Samsung, LG, Sony, Philips. Livraison et installation à domicile disponibles.',
  },
};

export const NoTitle: Story = {
  args: {
    content: 'Informations légales et réglementaires concernant la vente de produits électroniques. Garantie légale de conformité applicable à tous les produits vendus par FNAC.',
  },
};
