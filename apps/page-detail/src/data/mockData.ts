import type { GalleryImage } from '@ds/components';
import type { DeliveryMethod } from '@ds/components';

export const mockProduct = {
  title: 'Apple iPhone 17 Pro 6,3" 5G Double SIM 256 Go Orange cosmique',
  brand: 'Apple',
  sku: 'APL-IP17P-256-ORC',
  rating: 4.5,
  reviewCount: 397,

  images: [
    { alt: 'Apple iPhone 17 Pro - Vue principale', type: 'img' as const },
    { alt: 'Apple iPhone 17 Pro - Dos', type: 'img' as const },
    { alt: 'Apple iPhone 17 Pro - Profil', type: 'img' as const },
    { alt: 'Apple iPhone 17 Pro - Appareil photo', type: 'img' as const },
    { alt: 'Apple iPhone 17 Pro - Détail couleur', type: 'img' as const },
    { alt: 'Vidéo présentation', type: 'video' as const },
  ] satisfies GalleryImage[],

  price: 1329.00,
  strikePrice: 1408.74,
  promoPercent: -6,
  promoLabel: 'OFFRE FNAC',

  ecoPartMention: "dont 3,07 € d'éco-part et 4,00 € de copie privée",

  financing: {
    label: 'Payez en 32 fois dès',
    amount: '53,48 €',
    period: '/ mois',
    taeg: 'TAEG fixe : 21,15% - Montant total dû : 1711,36 €',
  },

  deezerOffer: {
    title: 'Offre Deezer - 3 mois offert',
    subtitle: 'Deezer Premium, Duo ou Famille',
    morePlans: '+ 3 autres bons plans disponibles',
  },

  protectionOptions: [
    { label: 'Pas de protection', price: null, selected: true },
    { label: 'Garantie réparation 3 ans', price: '1,75 € / mois' },
    { label: 'Assurance casse 1 an', price: '6,25 € / mois' },
  ],

  seller: {
    text: 'Produit neuf vendu & expédié par',
    name: 'fnac',
  },

  condition: 'new' as const,
  stock: 'in_stock' as const,

  screenSizeVariants: [
    { label: '6,3" soit 15 cm', price: 1329.00, state: 'selected' as const, type: 'img' as const },
    { label: '6,9" soit 17,5 cm', priceModifier: '+150,00 €', state: 'default' as const, type: 'img' as const },
  ],

  colorVariants: [
    { label: 'Orange cosmique', color: '#E07840', state: 'selected' as const, type: 'color' as const },
    { label: 'Bleu intense', color: '#3A5BA0', state: 'default' as const, type: 'color' as const },
    { label: 'Argent', color: '#C0C0C0', state: 'default' as const, type: 'color' as const },
  ],

  storageVariants: [
    { label: '256 Go / 1329,00 €', state: 'selected' as const, type: 'img' as const },
    { label: '512 Go / +250,00 €', state: 'default' as const, type: 'img' as const },
    { label: '1 To / +500,00 €', state: 'default' as const, type: 'img' as const },
    { label: '2 To', state: 'disabled' as const, type: 'img' as const },
  ],

  deliveryMethods: [
    { type: 'store' as const, label: 'Retrait à Fnac Paris - St Lazare', price: 'Gratuit', status: ['En stock en rayon', 'Retrait 1h'] },
    { type: 'home' as const, label: 'Livraison pour 75012', price: 'À partir de 7,99 €', status: ['Dès le 12 février'] },
    { type: 'fnacplus' as const, label: 'Livraison express gratuite sur des milliers de produits', price: 'Dès 9,99 €', priceDetail: '9,99 € la 1ère année puis 14,99 €/an' },
  ] satisfies DeliveryMethod[],

  accessoriesTitle: 'Complétez avec un chargeur',

  accessories: [
    { brand: 'APPLE', name: 'Adaptateur secteur Apple 20 Watts USB-C Blanc', price: '26,99 €' },
  ],

  occasionOffers: { count: 8, minPrice: '1 236,00 €' },
  otherOffers: { count: 6, minPrice: '1 288,99 €' },

  fidPoints: 1329,

  laboScore: 9.0,
  laboSpecs: [
    { label: 'Écran', value: '6,3" Super Retina XDR OLED' },
    { label: 'Processeur', value: 'Apple A19 Pro' },
    { label: 'RAM', value: '8 Go' },
    { label: 'Stockage', value: '256 Go' },
    { label: 'Batterie', value: '3 274 mAh' },
    { label: 'Appareil photo', value: '48 MP triple capteur' },
  ],
  laboPointsForts: [
    'Écran ProMotion 120 Hz avec luminosité jusqu\'à 2 000 nits',
    'Puce A19 Pro : performances exceptionnelles en photo et en jeu',
    'Système photo polyvalent avec téléobjectif 5x',
    'Dynamic Island pour des interactions fluides',
    'USB-C 3 (10 Gb/s) pour des transferts ultrarapides',
  ],

  accordions: [
    {
      title: 'Description du produit',
      content: 'L\'Apple iPhone 17 Pro redéfinit l\'excellence mobile avec sa puce A19 Pro, son écran Super Retina XDR de 6,3 pouces à 120 Hz et son système photo triple capteur 48 MP. Le Dynamic Island offre une expérience utilisateur unique et intuitive.',
    },
    {
      title: 'Caractéristiques techniques',
      content: 'Écran : 6,3" OLED 2556×1179px, 120Hz ProMotion | Processeur : Apple A19 Pro | RAM : 8 Go | Stockage : 256 Go | Batterie : 3 274 mAh, charge 30W | Photo : 48MP principal + 12MP ultra-grand-angle + 12MP téléobjectif 5x',
    },
    {
      title: 'Compatibilité et connectivité',
      content: '5G | WiFi 7 | Bluetooth 5.3 | NFC | USB-C 3 (10 Gb/s) | eSIM | IP68 (6 mètres, 30 min)',
    },
    {
      title: 'Contenu du coffret',
      content: 'Smartphone Apple iPhone 17 Pro, câble USB-C vers USB-C, documentation.',
    },
    {
      title: 'Garantie et services',
      content: 'Garantie constructeur 1 an. AppleCare+ disponible. Service après-vente FNAC.',
    },
  ],

  ratingBars: [
    { label: 'Qualité photo', value: 9.2, maxValue: 10 },
    { label: 'Autonomie', value: 8.5, maxValue: 10 },
    { label: 'Performance', value: 9.5, maxValue: 10 },
    { label: 'Écran', value: 9.0, maxValue: 10 },
    { label: 'Rapport qualité/prix', value: 7.5, maxValue: 10 },
  ],

  reviews: [
    {
      author: 'Thomas M.',
      rating: 5,
      title: 'Le meilleur iPhone jamais conçu',
      text: 'L\'iPhone 17 Pro est tout simplement exceptionnel. L\'écran est magnifique, la puce A19 Pro est ultra-rapide et le système photo dépasse toutes mes attentes. Le Dynamic Island est vraiment pratique au quotidien.',
      date: '15 fév. 2025',
      verified: true,
      platform: 'Fnac.com',
    },
    {
      author: 'Marie L.',
      rating: 4,
      title: 'Excellent smartphone, très satisfaite',
      text: 'Très bon smartphone, les performances sont au rendez-vous. L\'appareil photo est impressionnant, surtout le zoom 5x. Seul bémol : le prix élevé. La couleur Orange cosmique est sublime.',
      date: '10 fév. 2025',
      verified: true,
    },
    {
      author: 'Pierre D.',
      rating: 5,
      title: 'Parfait pour mon usage créatif',
      text: 'Le mode ProRes vidéo est un vrai plus pour mon travail de vidéaste. Les performances de l\'A19 Pro sont incroyables. L\'écran de 6,3" est idéal : ni trop grand, ni trop petit.',
      date: '5 fév. 2025',
      verified: true,
    },
  ],

  recommendations: [
    { title: 'Apple iPhone 17 Pro Max 256Go Titane naturel', price: 1449.00, rating: 4.6, reviewCount: 214 },
    { title: 'Apple iPhone 17 256Go Bleu outremer', price: 999.00, oldPrice: 1099.00, rating: 4.3, reviewCount: 312, badge: '-9%' },
    { title: 'Samsung Galaxy S25 Ultra 256Go Titanium Black', price: 1399.00, rating: 4.4, reviewCount: 189 },
    { title: 'Google Pixel 9 Pro 256Go Obsidian', price: 999.00, oldPrice: 1099.00, rating: 4.2, reviewCount: 98, badge: '-9%' },
    { title: 'Apple iPhone 16 Pro 256Go Titane désert', price: 1099.00, oldPrice: 1229.00, rating: 4.5, reviewCount: 567, badge: '-11%' },
  ],

  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Téléphonie', href: '/telephonie' },
    { label: 'Smartphones', href: '/telephonie/smartphones' },
    { label: 'Apple', href: '/telephonie/smartphones/apple' },
    { label: 'Apple iPhone 17 Pro 256 Go' },
  ],

  navTabs: [
    { label: 'Description', active: true },
    { label: 'Test Labo FNAC', active: false },
    { label: 'Avis clients', active: false },
    { label: 'Questions/Réponses', active: false },
    { label: 'Accessoires', active: false },
  ],

  reinsurances: [
    { label: 'Livraison gratuite dès 25€' },
    { label: 'Retrait en magasin gratuit' },
    { label: 'Retours gratuits 30 jours' },
    { label: 'Paiement sécurisé' },
    { label: 'Service client 7j/7' },
  ],

  conseils: [
    { title: 'Comment choisir son iPhone en 2025 ?', author: 'Jean-Pierre Durand', authorRole: 'Expert FNAC Téléphonie' },
    { title: 'iPhone 17 Pro vs Samsung Galaxy S25 Ultra : le match', author: 'Sophie Martin', authorRole: 'Journaliste Tech' },
    { title: 'Les meilleures fonctionnalités de l\'iPhone 17 Pro', author: 'Marc Lefebvre', authorRole: 'Testeur Labo FNAC' },
    { title: 'Guide : protéger et accessoiriser son iPhone 17 Pro', author: 'Julie Bernard', authorRole: 'Conseillère FNAC' },
    { title: 'Comparatif : les meilleurs appareils photo mobiles 2025', author: 'David Petit', authorRole: 'Photographe & Testeur' },
  ],
};
