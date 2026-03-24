import React, { useState } from 'react';
import {
  Header,
  Breadcrumb,
  Gallery,
  Rating,
  Tag,
  PriceBlock,
  FinancingOptions,
  ProtectionOptions,
  StateSellerBlock,
  VariantsList,
  ActionBlock,
  DeliveryBlock,
  Fid,
  PushFnacReprise,
  PushAdditionalAccessory,
  LaboFnacBlock,
  CharacteristicContent,
  Accordion,
  SummaryReview,
  ReviewCard,
  GhostLink,
  UpSell,
  Carousel, ConseilCard,
  SEOBlock,
  LegalNoticesBlock,
  StickyBannerMobile,
  Footer1440,
  SubFooter,
} from '@ds/components';
import { mockProduct } from '../data/mockData';

export default function MobileLayout() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [selectedProtection, setSelectedProtection] = useState(0);

  const colorItems = mockProduct.colorVariants.map((v, i) => ({
    ...v,
    size: 'small' as const,
    state: i === selectedColor ? 'selected' as const : 'default' as const,
    onClick: () => setSelectedColor(i),
  }));

  const storageItems = mockProduct.storageVariants.map((v, i) => ({
    ...v,
    size: 'small' as const,
    state: (i === selectedStorage && v.state !== 'disabled') ? 'selected' as const : v.state,
    onClick: v.state !== 'disabled' ? () => setSelectedStorage(i) : undefined,
  }));

  const screenItems = mockProduct.screenSizeVariants.map((v, i) => ({
    ...v,
    size: 'small' as const,
    state: i === selectedScreen ? 'selected' as const : 'default' as const,
    onClick: () => setSelectedScreen(i),
  }));

  const protectionItems = mockProduct.protectionOptions.map((item, i) => ({
    ...item,
    selected: i === selectedProtection,
  }));

  return (
    <div className="min-h-screen bg-surface-secondary font-sans pb-24">

      {/* ── 1. Header ── */}
      <Header device="mobile" cartCount={0} />

      {/* ── Page content: column, gap-[14px] ── */}
      <div className="flex flex-col gap-[14px] pt-[14px]">

        {/* ── 2. ColumnLeft card: back link + title + rating + gallery + tag ── */}
        <div className="bg-surface-default rounded-md mx-0 px-4 py-4 flex flex-col gap-4">

          {/* Back link */}
          <GhostLink href="/telephonie/smartphones/apple" className="text-sm text-text-secondary">
            ← {mockProduct.brand}
          </GhostLink>

          {/* H1 */}
          <h1 className="text-2xl font-bold text-text-primary leading-tight">
            {mockProduct.title}
          </h1>

          {/* Rating row */}
          <div className="flex items-center gap-2 flex-wrap">
            <Rating value={mockProduct.rating} max={5} showValue size="sm" />
            <span className="text-sm text-text-secondary font-medium">{mockProduct.rating}/5</span>
            <GhostLink href="#avis" className="text-xs">{mockProduct.reviewCount} avis</GhostLink>
            <span className="text-border-default text-xs">│</span>
            <GhostLink href="#labo" className="text-xs">Labo FNAC</GhostLink>
          </div>

          {/* Gallery: main image full width + horizontal thumbnails */}
          <Gallery images={mockProduct.images} device="mobile" />

          {/* MEILLEURE VENTE tag */}
          <div className="flex">
            <Tag label="MEILLEURE VENTE" variant="promo" size="small" />
          </div>
        </div>

        {/* ── 3. Middle card: price + financing + variants + push ── */}
        <div className="bg-surface-default rounded-md px-4 py-6 flex flex-col gap-8">

          {/* PriceBlock */}
          <PriceBlock
            price={mockProduct.price}
            strikePrice={mockProduct.strikePrice}
            promoLabel={mockProduct.promoLabel}
            promoPercent={mockProduct.promoPercent}
            size="md"
            ecoPartMention={mockProduct.ecoPartMention}
          />

          {/* FinancingOptions */}
          <FinancingOptions
            label={mockProduct.financing.label}
            amount={mockProduct.financing.amount}
            period={mockProduct.financing.period}
            taeg={mockProduct.financing.taeg}
          />

          {/* Deezer card */}
          <div className="flex items-center gap-3 bg-surface-secondary rounded-lg p-3 cursor-pointer hover:bg-surface-hover transition-colors">
            <div className="w-8 h-8 flex items-center justify-center bg-[#1D1E2D] rounded-full flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF0092"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-text-primary">{mockProduct.deezerOffer.title}</p>
              <p className="text-xs text-text-secondary">{mockProduct.deezerOffer.subtitle}</p>
              <button className="text-xs text-brand-primary hover:underline mt-0.5 text-left">{mockProduct.deezerOffer.morePlans}</button>
            </div>
            <svg className="w-5 h-5 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </div>

          {/* StateSellerBlock */}
          <StateSellerBlock
            text={mockProduct.seller.text}
            sellerName={mockProduct.seller.name}
          />

          {/* Variants: Choisissez votre modèle */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-bold text-text-primary">Choisissez votre modèle</span>

            {/* Taille d'écran */}
            <VariantsList label="Taille d'écran" items={screenItems} />

            {/* Capacité de stockage */}
            <VariantsList label="Capacité de stockage" items={storageItems} />

            {/* Couleur */}
            <VariantsList label="Couleur" items={colorItems} />
          </div>

          {/* PushFnacReprise */}
          <PushFnacReprise
            title="Revendez et économisez"
            badgeText="FNAC REPRISE"
            bonusText="+100 € de bonus*"
            description="Estimez votre ancien appareil en quelques clics et bénéficiez d'une remise immédiate + 100 € de bonus"
          />

          {/* ProtectionOptions */}
          <ProtectionOptions
            items={protectionItems}
            onSelect={setSelectedProtection}
            compareHref="#"
          />

          {/* PushAdditionalAccessory */}
          <PushAdditionalAccessory
            title={mockProduct.accessoriesTitle}
            seeAllHref="#"
            accessories={mockProduct.accessories}
          />
        </div>

        {/* ── 4. ActionBlock card ── */}
        <div className="bg-surface-default rounded-md p-4 flex flex-col gap-6">
          <DeliveryBlock methods={mockProduct.deliveryMethods} />
          <Fid
            label={mockProduct.fnacPlus.label}
            startingPrice={mockProduct.fnacPlus.startingPrice}
            priceDescription={mockProduct.fnacPlus.priceDescription}
          />
          <ActionBlock
            onAddToCart={() => {}}
            onBuyNow={() => {}}
            onAddToWishlist={() => {}}
            stock={mockProduct.stock}
          />
        </div>

        {/* ── 5. LaboFnacBlock ── */}
        <div id="labo" className="bg-surface-default rounded-md">
          <LaboFnacBlock
            score={mockProduct.laboScore}
            title="Apple iPhone 17 Pro — notre verdict"
            specs={mockProduct.laboSpecs.slice(0, 4)}
            pointsForts={mockProduct.laboPointsForts.slice(0, 3)}
          />
        </div>

        {/* ── 6. CharacteristicContent (accordions) ── */}
        <div className="bg-surface-default rounded-md">
          <CharacteristicContent
            title="Caractéristiques techniques"
            specs={mockProduct.laboSpecs}
          />
          <div className="border-t border-border-default">
            {mockProduct.accordions.map((acc, i) => (
              <Accordion key={i} title={acc.title}>
                <p className="text-sm text-text-secondary">{acc.content}</p>
              </Accordion>
            ))}
          </div>
        </div>

        {/* ── 7. UpSell: Produits similaires ── */}
        <div className="bg-surface-default rounded-md py-4">
          <UpSell
            title="Produits similaires"
            products={mockProduct.recommendations.slice(0, 4)}
            seeAllHref="#"
          />
        </div>

        {/* ── 8. Blog / ConseilCards ── */}
        <div className="bg-surface-default rounded-md py-4">
          <Carousel
            title="Nos conseils"
            items={mockProduct.conseils}
            seeAllHref="#"
            renderItem={(conseil, i) => (
              <ConseilCard
                key={i}
                type="img"
                title={conseil.title}
                author={conseil.author}
                authorRole={conseil.authorRole}
                className="w-44"
              />
            )}
          />
        </div>

        {/* ── 9. UpSell: Vous aimerez aussi ── */}
        <div className="bg-surface-default rounded-md py-4">
          <UpSell
            title="Vous aimerez aussi"
            products={mockProduct.recommendations.slice(0, 4)}
            seeAllHref="#"
          />
        </div>

        {/* ── 10. SEOBlock ── */}
        <div className="bg-surface-default rounded-md">
          <SEOBlock
            title="À propos de l'Apple iPhone 17 Pro"
            content="L'Apple iPhone 17 Pro est le fleuron de la gamme iPhone en 2025. Équipé de la puce A19 Pro et d'un système photo triple capteur 48 mégapixels avec téléobjectif 5x, ce smartphone premium offre des performances exceptionnelles pour la photo, la vidéo ProRes et le jeu mobile."
          />
        </div>

        {/* ── 11. LegalNoticesBlock ── */}
        <div className="bg-surface-default rounded-md px-4 py-4">
          <LegalNoticesBlock items={[
            { label: 'Indice de réparabilité : 8.2/10', href: '#' },
            { label: 'Classe énergétique : A', href: '#' },
          ]} />
        </div>

        {/* ── 12. Breadcrumb ── */}
        <div className="px-4 py-2">
          <Breadcrumb items={mockProduct.breadcrumb} />
        </div>

        {/* ── 13. Footer ── */}
        <Footer1440 />
        <SubFooter />

      </div>

      {/* ── 14. StickyBannerMobile: fixed bottom-0 ── */}
      <StickyBannerMobile
        price={mockProduct.price}
        oldPrice={mockProduct.strikePrice}
        ctaLabel="Ajouter au panier"
        onCta={() => {}}
      />
    </div>
  );
}
