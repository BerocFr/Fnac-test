import React, { useState } from 'react';
import {
  Header, HeaderMarketing, Tabs,
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
  RatingBars,
  ReviewCard,
  GhostLink,
  UpSell,
  Carousel, ConseilCard,
  SEOBlock,
  Footer1440, SubFooter,
  Reinsurances, ReinsuranceIcon,
  LegalNoticesBlock,
} from '@ds/components';
import { mockProduct } from '../data/mockData';

export default function DesktopLayout() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [selectedProtection, setSelectedProtection] = useState(0);

  const reinsuranceIcons = mockProduct.reinsurances.map((r, i) => ({
    label: r.label,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={[
          'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8',
          'M9 3v4m6-4v4M3 10h18M3 10v8a2 2 0 002 2h14a2 2 0 002-2v-8',
          'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
          'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
          'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
        ][i] || 'M5 13l4 4L19 7'} />
      </svg>
    ),
  }));

  const colorItems = mockProduct.colorVariants.map((v, i) => ({
    ...v,
    state: i === selectedColor ? 'selected' as const : 'default' as const,
    onClick: () => setSelectedColor(i),
  }));

  const storageItems = mockProduct.storageVariants.map((v, i) => ({
    ...v,
    state: (i === selectedStorage && v.state !== 'disabled') ? 'selected' as const : v.state,
    onClick: v.state !== 'disabled' ? () => setSelectedStorage(i) : undefined,
  }));

  const screenItems = mockProduct.screenSizeVariants.map((v, i) => ({
    ...v,
    state: i === selectedScreen ? 'selected' as const : 'default' as const,
    onClick: () => setSelectedScreen(i),
  }));

  const protectionItems = mockProduct.protectionOptions.map((item, i) => ({
    ...item,
    selected: i === selectedProtection,
  }));

  return (
    <div className="min-h-screen bg-surface-secondary font-sans">

      {/* ── Sticky Header stack ── */}
      <div className="sticky top-0 z-40">
        <Header device="desktop" cartCount={0} />
        <HeaderMarketing />
      </div>

      {/* ── Main content ── */}
      <main className="max-w-[1440px] mx-auto flex flex-col gap-12 py-6">

        {/* ── Product section: row with px-14, gap-6 ── */}
        <section className="flex flex-row gap-6 px-14">

          {/* ── LEFT COLUMN: sticky ── */}
          <div className="flex flex-col gap-4 w-[400px] flex-shrink-0 sticky top-[120px] self-start">
            {/* Gallery: thumbnails left + main image */}
            <Gallery images={mockProduct.images} device="desktop" />

            {/* Legal notices */}
            <LegalNoticesBlock items={[
              { label: 'Indice de réparabilité : 8.2/10', href: '#' },
              { label: 'Classe énergétique : A', href: '#' },
            ]} />
          </div>

          {/* ── RIGHT COLUMN (middle): white cards, col gap-12 ── */}
          <div className="flex flex-col gap-12 flex-1 min-w-0">

            {/* ── Card 1 ── */}
            <div className="bg-surface-default rounded-md p-6 flex flex-col gap-8">

              {/* Section: Title + Rating */}
              <div className="flex flex-col gap-8">
                {/* Title block */}
                <div className="flex flex-col gap-2">
                  <GhostLink href={`/telephonie/smartphones/apple`} className="text-sm text-text-secondary">
                    ← {mockProduct.brand}
                  </GhostLink>
                  <h1 className="text-2xl font-bold text-text-primary leading-tight">
                    {mockProduct.title}
                  </h1>
                </div>

                {/* Rating row */}
                <div className="flex items-center gap-3">
                  <Rating value={mockProduct.rating} max={5} showValue size="md" />
                  <span className="text-sm text-text-secondary font-medium">{mockProduct.rating}/5</span>
                  <GhostLink href="#avis" className="text-sm">{mockProduct.reviewCount} avis</GhostLink>
                  <span className="text-border-default">│</span>
                  <GhostLink href="#labo" className="text-sm">Labo FNAC</GhostLink>
                </div>
              </div>

              {/* PriceBlock section */}
              <div className="flex flex-col gap-4">
                <PriceBlock
                  price={mockProduct.price}
                  strikePrice={mockProduct.strikePrice}
                  promoLabel={mockProduct.promoLabel}
                  promoPercent={mockProduct.promoPercent}
                  size="lg"
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
              </div>

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

            {/* ── Card 2: Comment l'obtenir ── */}
            <div className="bg-surface-default rounded-md p-6 flex flex-col gap-8">
              <span className="text-xl font-bold text-text-primary">Comment l'obtenir ?</span>

              <DeliveryBlock methods={mockProduct.deliveryMethods} />

              <Fid points={mockProduct.fidPoints} />

              <ActionBlock
                onAddToCart={() => {}}
                onBuyNow={() => {}}
                onAddToWishlist={() => {}}
                stock={mockProduct.stock}
              />
            </div>

            {/* ── Seconde Vie: 2 cards side by side ── */}
            <div className="flex flex-row gap-2">
              {/* Occasion card */}
              <button className="flex-1 bg-surface-default rounded-md p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors duration-200 border border-border-default">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-wide">Occasion</span>
                  <span className="text-sm text-text-primary">+ {mockProduct.occasionOffers.count} offres d'occasion à partir de <span className="font-bold">{mockProduct.occasionOffers.minPrice}</span></span>
                </div>
                <svg className="w-5 h-5 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Autres offres card */}
              <button className="flex-1 bg-surface-default rounded-md p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors duration-200 border border-border-default">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-wide">Autres offres</span>
                  <span className="text-sm text-text-primary">+ {mockProduct.otherOffers.count} autres offres à partir de <span className="font-bold">{mockProduct.otherOffers.minPrice}</span></span>
                </div>
                <svg className="w-5 h-5 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>{/* end right column */}
        </section>

        {/* ── LaboFnacBlock: full width, px-14 ── */}
        <section id="labo" className="px-14">
          <LaboFnacBlock
            score={mockProduct.laboScore}
            title="Apple iPhone 17 Pro — notre verdict"
            specs={mockProduct.laboSpecs}
            pointsForts={mockProduct.laboPointsForts}
          />
        </section>

        {/* ── Bottom full-width column ── */}
        <div className="flex flex-col">

          {/* CharacteristicContent */}
          <section>
            <CharacteristicContent
              title="Caractéristiques techniques"
              specs={mockProduct.laboSpecs}
            />
          </section>

          {/* Accordions */}
          <section className="border-t border-border-default bg-surface-default">
            {mockProduct.accordions.map((acc, i) => (
              <Accordion key={i} title={acc.title} defaultOpen={i === 0}>
                <p className="text-sm text-text-secondary">{acc.content}</p>
              </Accordion>
            ))}
          </section>

          {/* Reviews section */}
          <section id="avis" className="bg-surface-default px-14 py-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-text-primary">Avis clients</h2>
              <button className="text-sm font-bold text-brand-primary hover:underline">
                Donner mon avis
              </button>
            </div>
            <div className="flex flex-row gap-8">
              <div className="w-64 flex-shrink-0">
                <SummaryReview
                  average={mockProduct.rating}
                  count={mockProduct.reviewCount}
                  bars={mockProduct.ratingBars}
                />
              </div>
              <div className="flex-1">
                <RatingBars bars={mockProduct.ratingBars} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {mockProduct.reviews.map((review, i) => (
                <ReviewCard
                  key={i}
                  author={review.author}
                  rating={review.rating}
                  text={review.text}
                  date={review.date}
                  verified={review.verified}
                />
              ))}
            </div>
          </section>

          {/* UpSell: Produits similaires */}
          <section className="py-8">
            <UpSell
              title="Produits similaires"
              products={mockProduct.recommendations}
              seeAllHref="#"
            />
          </section>

          {/* Blog / ConseilCards */}
          <section className="py-4">
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
                  className="w-56"
                />
              )}
            />
          </section>

          {/* UpSell: Vous aimerez aussi */}
          <section className="py-8">
            <UpSell
              title="Vous aimerez aussi"
              products={mockProduct.recommendations.slice(0, 4)}
              seeAllHref="#"
            />
          </section>

          {/* SEOBlock */}
          <section>
            <SEOBlock
              title="À propos de l'Apple iPhone 17 Pro"
              content="L'Apple iPhone 17 Pro est le fleuron de la gamme iPhone en 2025. Équipé de la puce A19 Pro et d'un système photo triple capteur 48 mégapixels avec téléobjectif 5x, ce smartphone premium offre des performances exceptionnelles pour la photo, la vidéo ProRes et le jeu mobile. Son écran Super Retina XDR de 6,3 pouces à 120 Hz ProMotion garantit une expérience visuelle immersive. Le Dynamic Island transforme les notifications en interactions fluides et intuitives."
            />
          </section>

          {/* LegalNoticesBlock */}
          <section className="px-14 py-4">
            <LegalNoticesBlock items={[
              { label: 'Indice de réparabilité : 8.2/10', href: '#' },
              { label: 'Classe énergétique : A', href: '#' },
            ]} />
          </section>

          {/* Breadcrumb */}
          <div className="px-14 py-4">
            <Breadcrumb items={mockProduct.breadcrumb} />
          </div>

          {/* Footer */}
          <Footer1440 />

          {/* Reinsurances */}
          <div className="bg-surface-default border-t border-border-default">
            <div className="max-w-[1440px] mx-auto px-6">
              <Reinsurances items={reinsuranceIcons} />
            </div>
          </div>

          <SubFooter />
        </div>

      </main>
    </div>
  );
}
