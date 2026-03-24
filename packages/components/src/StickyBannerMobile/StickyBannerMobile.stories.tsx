import type { Meta, StoryObj } from '@storybook/react';
import { StickyBannerMobile } from './StickyBannerMobile';

const meta: Meta<typeof StickyBannerMobile> = {
  title: 'Layout/StickyBannerMobile',
  component: StickyBannerMobile,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof StickyBannerMobile>;

export const Default: Story = { args: { price: 1299.00, oldPrice: 1399.00, ctaLabel: 'Ajouter au panier' } };
export const NoBadge: Story = { args: { price: 29.99, ctaLabel: 'Ajouter au panier' } };
