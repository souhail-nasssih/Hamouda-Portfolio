const archiveImages = [
  // ── Sanlam — Mise en avant ────────────────────────────────────────────────
  { id: 'sanlam-regragui', title: 'Sanlam — Walid Regragui', category: 'Design', group: 'sanlam', src: new URL('../../Archive/IMG-20230626-WA0010.JPEG', import.meta.url).href },

  // ── LILY — Branding & Event ──────────────────────────────────────────────
  { id: 'event-lily-logo', title: 'LILY — Logo', category: 'Event', group: 'lily', src: new URL('../../Archive/1764780858361.JPEG', import.meta.url).href },
  { id: 'event-176478087', title: 'LILY — Produit', category: 'Event', group: 'lily', src: new URL('../../Archive/1764780878845.JPEG', import.meta.url).href },
  { id: 'event-176478086', title: 'LILY — Palette couleurs', category: 'Event', group: 'lily', src: new URL('../../Archive/1764780867830.JPEG', import.meta.url).href },
  { id: 'event-176478088', title: 'LILY — Tote bag', category: 'Event', group: 'lily', src: new URL('../../Archive/1764780887740.JPEG', import.meta.url).href },
  { id: 'event-lily-billboard', title: 'LILY — Billboard', category: 'Event', group: 'lily', src: new URL('../../Archive/1764780882836.JPEG', import.meta.url).href },
  { id: 'event-lily-gold', title: 'LILY — Logo doré', category: 'Event', group: 'lily', src: new URL('../../Archive/1764780862857.JPEG', import.meta.url).href },

  // ── Lanacom — Campaigns (imported from public assets) ─────────────────────
  { id: 'lanacom-projet', title: 'Lanacom — Projet', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/lanacom-projet.png' },
  { id: 'lanacom-post-4', title: 'Lanacom — Post 4', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/POST-4-.png' },
  { id: 'lanacom-post-5', title: 'Lanacom — Post 5', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/POST-5-.png' },
  { id: 'lanacom-store-1', title: 'Lanacom — Store 1', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/التجميل-POST-STORE-1.png' },
  { id: 'lanacom-store-2', title: 'Lanacom — Store 2', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/التجميل-POST-STORE-2.png' },
  { id: 'lanacom-store-3', title: 'Lanacom — Store 3', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/التجميل-POST-STORE-3.png' },
  { id: 'lanacom-store-6', title: 'Lanacom — Store 6', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/التجميل-POST-STORE-6.png' },
  { id: 'lanacom-store-7', title: 'Lanacom — Store 7', category: 'Poster', group: 'lanacom', src: '/assets/lanacom/التجميل-POST-STORE-7.png' },


  // ── The City Run — Tanger ─────────────────────────────────────────────────
  { id: 'tanger-poster', title: 'Tanger Run — Affiche', category: 'Poster', group: 'tanger-run', src: new URL('../../Archive/Tanger-Poster.JPEG', import.meta.url).href },
  { id: 'tanger-new', title: 'Tanger Run — Affiche 2024', category: 'Poster', group: 'tanger-run', src: new URL('../../Archive/tanger-new.JPEG', import.meta.url).href },
  { id: 'tanger-run-2024', title: 'Tanger Run — Édition 2024', category: 'Poster', group: 'tanger-run', src: new URL('../../Archive/IMG-20240626-WA0003.JPEG', import.meta.url).href },

  // ── The City Run — Marrakech ──────────────────────────────────────────────
  { id: 'marrakech-run', title: 'Marrakech Run — Affiche', category: 'Poster', group: 'marrakech-run', src: new URL('../../Archive/Marrakech-Run-Poster.JPEG', import.meta.url).href },
  { id: 'marrakech-run-flag', title: 'Marrakech Run — Drapeau', category: 'Poster', group: 'marrakech-run', src: new URL('../../Archive/flag.JPEG', import.meta.url).href },
  { id: 'marrakech-run-insta', title: 'Marrakech Run — Photo booth', category: 'Poster', group: 'marrakech-run', src: new URL('../../Archive/Insta.JPEG', import.meta.url).href },
  { id: 'banner-marrakech', title: 'Marrakech Run — Bannière', category: 'Banner', group: 'marrakech-run', src: new URL('../../Archive/970x250.JPEG', import.meta.url).href },

  // ── The City Run — Rabat ──────────────────────────────────────────────────
  { id: 'rabat-run-poster', title: 'Rabat Run — Affiche', category: 'Poster', group: 'rabat-run', src: new URL('../../Archive/ROUL-final.JPEG', import.meta.url).href },
  { id: 'banner-rabat', title: 'Rabat Run — Bannière', category: 'Banner', group: 'rabat-run', src: new URL('../../Archive/banier-970-x-250.JPEG', import.meta.url).href },
  { id: 'banner-rabat-alt', title: 'Rabat Run — Bannière v2', category: 'Banner', group: 'rabat-run', src: new URL('../../Archive/banier-970-x-250 2.JPEG', import.meta.url).href },

  // ── The City Run — Casablanca ─────────────────────────────────────────────
  { id: 'casablanca-run-flag', title: 'Casablanca Run — Drapeau', category: 'Poster', group: 'casablanca-run', src: new URL('../../Archive/IMG-20240426-WA0013.JPEG', import.meta.url).href },

  // ── KTM Racing ────────────────────────────────────────────────────────────
  { id: 'ktm-rider', title: 'KTM — Ready to Race', category: 'Sport', group: 'ktm', src: new URL('../../Archive/ktm.JPEG', import.meta.url).href },
  { id: 'ktm-rider-2', title: 'KTM — Services', category: 'Sport', group: 'ktm', src: new URL('../../Archive/ktm2.JPEG', import.meta.url).href },

  // ── DENTALCARE ────────────────────────────────────────────────────────────
  { id: 'poster-dentalcare', title: 'DENTALCARE — Implants', category: 'Poster', group: 'dentalcare', src: new URL('../../Archive/1764780915961.JPEG', import.meta.url).href },

  // ── Vogue Aura ────────────────────────────────────────────────────────────
  { id: 'poster-vogue-aura', title: 'Vogue Aura — UI Design', category: 'Poster', group: 'vogue-aura', src: new URL('../../Archive/1750699197584.JPEG', import.meta.url).href },

  // ── Crédit du Maroc / Sérénéa ─────────────────────────────────────────────
  { id: 'fb-cdm-deghya', title: 'CDM — #deghya Rentrée', category: 'Social Media', group: 'credit-du-maroc', src: new URL('../../Archive/FB_IMG_1767448534423.JPEG', import.meta.url).href },
  { id: 'fb-serenea-etudes', title: 'Sérénéa — Études', category: 'Social Media', group: 'credit-du-maroc', src: new URL('../../Archive/FB_IMG_1767448351408.JPEG', import.meta.url).href },
  { id: 'fb-serenea-retraite', title: 'Sérénéa — Retraite', category: 'Social Media', group: 'credit-du-maroc', src: new URL('../../Archive/FB_IMG_1767448339284.JPEG', import.meta.url).href },
  { id: 'fb-cdm-etudes', title: 'CDM — Prêt Études', category: 'Social Media', group: 'credit-du-maroc', src: new URL('../../Archive/FB_IMG_1767447995998.JPEG', import.meta.url).href },
  { id: 'fb-cdm-hiya-ar', title: 'CDM — #HIYA_LOWLA (AR)', category: 'Social Media', group: 'credit-du-maroc', src: new URL('../../Archive/FB_IMG_1767447956652.JPEG', import.meta.url).href },
  { id: 'fb-cdm-hiya-fr', title: 'CDM — #HIYA_LOWLA (FR)', category: 'Social Media', group: 'credit-du-maroc', src: new URL('../../Archive/FB_IMG_1767447951960.JPEG', import.meta.url).href },

  // ── YATOUT home ───────────────────────────────────────────────────────────
  { id: 'fb-yatout', title: 'YATOUT home — Confort', category: 'Social Media', group: 'yatout-home', src: new URL('../../Archive/FB_IMG_1767445185772.JPEG', import.meta.url).href },

  // ── Alpha Cleaning ────────────────────────────────────────────────────────
  { id: 'fb-alpha-cleaning', title: 'Alpha Cleaning — Service', category: 'Social Media', group: 'alpha-cleaning', src: new URL('../../Archive/FB_IMG_1767441914558.JPEG', import.meta.url).href },

  // ── ALOE KITA ─────────────────────────────────────────────────────────────
  { id: 'aloekita-summer', title: 'ALOE KITA — Collection été', category: 'Design', group: 'aloekita', src: new URL('../../Archive/IMG-20250506-WA0003.JPEG', import.meta.url).href },
  { id: 'aloekita-golden-mask', title: 'ALOE KITA — Masque doré', category: 'Design', group: 'aloekita', src: new URL('../../Archive/IMG-20250506-WA0002.JPEG', import.meta.url).href },
  { id: 'aloekita-saudi', title: 'ALOE KITA — Beauté saoudienne', category: 'Design', group: 'aloekita', src: new URL('../../Archive/IMG-20250411-WA0023.JPEG', import.meta.url).href },
  { id: 'aloekita-conditioner', title: 'ALOE KITA — Après-shampooing', category: 'Design', group: 'aloekita', src: new URL('../../Archive/IMG-20250406-WA0003.JPEG', import.meta.url).href },

  // ── Million Trees ───────────────────────────────────────────────────────────
  { id: 'million-trees', title: 'Million Trees — Huile d\'olive', category: 'Design', group: 'million-trees', src: new URL('../../Archive/IMG-20250510-WA0000.JPEG', import.meta.url).href },

  // ── AJAR — Oud & Parfums ──────────────────────────────────────────────────
  { id: 'ajar-poster', title: 'AJAR — Affiche', category: 'Design', group: 'ajar', src: new URL('../../Archive/jpg2024-12-20 232015x.JPEG', import.meta.url).href },
  { id: 'ajar-bags', title: 'AJAR — Sacs shopping', category: 'Design', group: 'ajar', src: new URL('../../Archive/jpg2024-12-20 231848.JPEG', import.meta.url).href },
  { id: 'ajar-categories', title: 'AJAR — Catégories produits', category: 'Design', group: 'ajar', src: new URL('../../Archive/jpg 2024-12-20 231819.JPEG', import.meta.url).href },
  { id: 'ajar-identity', title: 'AJAR — Identité visuelle', category: 'Design', group: 'ajar', src: new URL('../../Archive/jpg 2024-12-20 231713.JPEG', import.meta.url).href },
  { id: 'ajar-logo', title: 'AJAR — Logo', category: 'Design', group: 'ajar', src: new URL('../../Archive/jpg 2024-12-20.PNG', import.meta.url).href },
  { id: 'ajar-logo-3d', title: 'AJAR — Logo 3D', category: 'Design', group: 'ajar', src: new URL('../../Archive/jpg 2024-12-20 2.PNG', import.meta.url).href },

  // ── AD vision ─────────────────────────────────────────────────────────────
  { id: 'ad-vision', title: 'AD vision — Agence marketing', category: 'Illustration', group: 'ad-vision', src: new URL('../../Archive/16.JPEG', import.meta.url).href },
];

export default archiveImages;
