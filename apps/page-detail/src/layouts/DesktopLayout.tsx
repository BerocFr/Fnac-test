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
          <div className="flex flex-col gap-4 w-[765px] flex-shrink-0 sticky top-[120px] self-start">
            {/* Gallery: thumbnails left + main image */}
            <Gallery images={mockProduct.images} device="desktop" />

            {/* Legal notices — 3 blocs côte à côte */}
            <div className="flex items-start gap-6 px-2 pt-1">
              {/* Chargeur non fourni */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-text-secondary">Chargeur non fourni</span>
                  <svg className="w-3.5 h-3.5 text-text-tertiary flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <text x="8" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor">i</text>
                  </svg>
                </div>
              </div>
              {/* Indice de réparabilité */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-text-secondary text-center">Indice de<br/>réparabilité</span>
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#2E7D32] text-white">
                  <span className="text-sm font-bold">8</span>
                </div>
              </div>
              {/* Note énergétique */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-text-secondary text-center">Note<br/>énergétique</span>
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#4CAF50] text-white">
                  <span className="text-sm font-bold">A</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN (middle): white cards, col gap-12 ── */}
          <div className="flex flex-col gap-12 w-[539px] flex-shrink-0">

            {/* ── Card 1 ── */}
            <div className="bg-surface-default rounded-md p-6 flex flex-col gap-12">

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

              <div className="flex flex-col gap-4">
                <DeliveryBlock methods={mockProduct.deliveryMethods} />
                <Fid
                  label={mockProduct.fnacPlus.label}
                  startingPrice={mockProduct.fnacPlus.startingPrice}
                  priceDescription={mockProduct.fnacPlus.priceDescription}
                />
              </div>

              <ActionBlock
                onAddToCart={() => {}}
                onBuyNow={() => {}}
                onAddToWishlist={() => {}}
                stock={mockProduct.stock}
              />
            </div>

            {/* ── Seconde Vie: stacked rows ── */}
            <div className="flex flex-col bg-surface-default rounded-md overflow-hidden">
              {/* Row 1: FNAC 2NDE VIE */}
              <button className="flex items-center gap-3 px-4 py-[18px] border-b border-border-default hover:bg-surface-secondary transition-colors duration-200 text-left w-full">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="inline-flex items-center gap-1 bg-[#E2001A] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm whitespace-nowrap flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                    </svg>
                    FNAC 2NDE VIE
                  </span>
                  <span className="text-sm text-text-primary">
                    + {mockProduct.occasionOffers.count} offres d'occasion à partir de <strong>{mockProduct.occasionOffers.minPrice}</strong>
                  </span>
                </div>
                <svg className="w-5 h-5 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
              {/* Row 2: Autres offres */}
              <button className="flex items-center gap-3 px-4 py-[18px] hover:bg-surface-secondary transition-colors duration-200 text-left w-full">
                <span className="text-sm text-text-primary flex-1">
                  + {mockProduct.otherOffers.count} autres offres à partir de <strong>{mockProduct.otherOffers.minPrice}</strong>
                </span>
                <svg className="w-5 h-5 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
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
            compareHref="#comparatif"
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
              <h2 className="text-xl font-bold text-text-primary">Avis client</h2>
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

          {/* UpSell: Les internautes ont aussi acheté */}
          <section className="py-8">
            <UpSell
              title="Les internautes ont aussi acheté"
              products={mockProduct.recommendations}
              seeAllHref="#"
            />
          </section>

          {/* Blog / ConseilCards */}
          <section className="py-4">
            <Carousel
              title="Conseils Fnac"
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

          {/* UpSell: Vos derniers articles consultés */}
          <section className="py-8">
            <UpSell
              title="Vos derniers articles consultés"
              products={mockProduct.recommendations.slice(0, 4)}
              seeAllHref="#"
            />
          </section>

          {/* Voir aussi */}
          <section className="bg-surface-default px-14 py-6 border-t border-border-default">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-text-primary">Voir aussi :</span>
              {['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Smartphones Apple', 'Téléphones 5G', 'Meilleurs smartphones 2025'].map((link) => (
                <a key={link} href="#" className="text-sm text-brand-primary hover:underline border border-border-default rounded-full px-3 py-1 hover:bg-surface-secondary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </section>

          {/* Informations financement */}
          <section className="bg-surface-default px-14 py-6 border-t border-border-default">
            <h3 className="text-sm font-bold text-text-primary mb-2">Informations financement</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Offre de crédit réservée aux particuliers, sous réserve d'acceptation par Oney Bank. Oney Bank — SA au capital de 50 741 215 € — 34 avenue de Flandre 59 170 Croix — 546 380 197 RCS Lille Métropole — n° Orias 07 023 261. TAEG fixe 21,15% — Taux débiteur fixe annuel 21,15%. Exemple pour 1 329 € financés sur 32 mois sans apport : 32 mensualités de 53,48 €. Montant total dû : 1 711,36 €. Frais de dossier offerts.
            </p>
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

      {/* ── Sticky bottom bar (desktop) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-default border-t border-border-default shadow-xl font-sans">
        <div className="max-w-[1440px] mx-auto px-14 py-3 flex items-center gap-4">
          {/* Thumbnail */}
          <div className="w-12 h-12 bg-surface-secondary rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden">
            <span className="text-xs text-text-tertiary">img</span>
          </div>
          {/* Product info */}
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-xs text-text-secondary">Produit neuf</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-text-primary">1 329,00 €</span>
              <span className="text-sm text-text-tertiary line-through">1 408,74 €</span>
            </div>
          </div>
          {/* CTA */}
          <button
            className="bg-brand-primary text-neutral-950 font-bold text-base py-3 px-8 rounded-md hover:bg-brand-secondary transition-colors duration-200 flex-shrink-0"
            onClick={() => {}}
          >
            Ajouter au panier
          </button>
        </div>
      </div>

    </div>
  );
}
