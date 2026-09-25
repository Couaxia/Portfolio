/* =========================
   COMMISSION IMAGES
========================= */

/* TAKIIMIKIKU */

import takiimikikuBase from '../assets/commissions/base_200.png'


/* NICOPIYO */

import nicopiyoBase1 from '../assets/commissions/Base_1.png'
import nicopiyoBase2 from '../assets/commissions/Base_2.png'


/* =========================
   PROJECT IMAGES
   Custom Link Website
========================= */

const projectModules = import.meta.glob(
  '../assets/projects/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


/* =========================
   GET PROJECT IMAGES
========================= */

const getProjectImages = () => {

  return Object.entries(projectModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, image]) => image)

}


/* =========================
   COMMISSIONS
========================= */

const commissions = [

  /* =========================================================
     01 — YCH EMOTE
     BASE BY TAKIIMIKIKU
  ========================================================= */

  {
    id: 1,

    title: '[YCH] Emote',

    category: 'Emote',

    credit: 'Base by takiimikiku',

    description:
      'Choisissez jusqu’à 5 emotes parmi les bases proposées et je les personnalise selon votre personnage et vos couleurs.',

    price: '2 €',

    priceLabel: 'À partir de',

    images: [
      takiimikikuBase
    ],

    features: [
      '1 emote : 2 €',
      '5 emotes : 8 €',
      'Jusqu’à 5 emotes',
      'Format PNG ou GIF',
      'Couleurs personnalisables',
      'Fond personnalisable',
      'Dimensions personnalisables',
      'Fichier numérique'
    ],

    details: {

      contactBeforeOrder: true,

      contacts: [
        'Discord',
        'X / Twitter',
        'Ko-fi'
      ],

      delivery: [
        'PNG',
        'GIF'
      ],

      customSizes: true,

      updates: true,

      refund: false

    },

    buyerInstructions: [

      'Me fournir une référence de votre modèle.',

      'Préciser les emotes choisies parmi les bases disponibles.',

      'Indiquer les couleurs ou éléments à modifier.',

      'Préciser si vous souhaitez un fond particulier.',

      'Indiquer les dimensions souhaitées si nécessaire.',

      'Préciser le moyen de contact souhaité : Discord, X / Twitter ou Ko-fi.',

      'Fournir une adresse e-mail pour l’envoi final.'

    ],

    notice:
      'Contactez-moi avant de passer commande afin que nous puissions vérifier ensemble votre demande.',

    link:
      'https://ko-fi.com/c/a2eebb60a2'

  },


  /* =========================================================
     02 — YCH EMOTE CUSTOM
     BASE BY NICOPIYO
  ========================================================= */

  {
    id: 2,

    title: '[YCH] Emote Custom',

    category: 'Emote',

    credit: 'Base by Nicopiyo',

    description:
      'Choisissez jusqu’à 5 emotes parmi les bases proposées et je les personnalise selon votre personnage, vos couleurs et vos préférences.',

    price: '3 €',

    priceLabel: 'À partir de',

    images: [
      nicopiyoBase1,
      nicopiyoBase2
    ],

    features: [
      '1 emote : 3 €',
      '5 emotes : 12 €',
      'Jusqu’à 5 emotes',
      'Format PNG ou GIF',
      'Couleurs personnalisables',
      'Fond personnalisable',
      'Dimensions personnalisables',
      'Fichier numérique'
    ],

    details: {

      contactBeforeOrder: true,

      contacts: [
        'Discord',
        'X / Twitter',
        'Ko-fi'
      ],

      delivery: [
        'PNG',
        'GIF'
      ],

      customSizes: true,

      updates: true,

      refund: false

    },

    buyerInstructions: [

      'Me fournir une référence de votre modèle.',

      'Préciser les emotes choisies parmi les bases disponibles.',

      'Indiquer toutes les modifications souhaitées.',

      'Préciser les couleurs à modifier si nécessaire.',

      'Préciser si vous souhaitez un fond particulier.',

      'Indiquer les dimensions souhaitées si nécessaire.',

      'Préciser le moyen de contact souhaité : Discord, X / Twitter ou Ko-fi.',

      'Fournir une adresse e-mail pour l’envoi final.'

    ],

    notice:
      'Contactez-moi avant de passer commande afin que nous puissions vérifier ensemble votre demande.',

    link:
      'https://ko-fi.com/c/1514c7a5ed'

  },


  /* =========================================================
     03 — CUSTOM LINK WEBSITE
  ========================================================= */

  {
    id: 3,

    title: 'Custom Link Website',

    category: 'Développement Web',

    credit: 'Création par Couaxia',

    description:
      'Un site de liens personnalisé conçu autour de votre univers, de votre identité visuelle et de votre contenu. Une alternative plus personnelle à Linktree pour les VTubers, streamers, artistes et créateurs.',

    price: '8 €',

    priceLabel: 'À partir de',

    images: getProjectImages(),

    features: [
      'Site de liens personnalisé',
      'Design adapté à votre univers',
      'Responsive Mobile & Desktop',
      'Réseaux sociaux et communautés',
      'Avatar, logo et visuels',
      'Couleurs personnalisées',
      'Animations et effets',
      'Éléments interactifs'
    ],

    details: {

      responsive: true,

      customDesign: true,

      animations: true,

      interactiveElements: true,

      socialLinks: true

    },

    buyerInstructions: [

      'Nom du créateur ou du VTuber.',

      'Tous les liens à intégrer : Twitch, YouTube, TikTok, Instagram, Discord, Ko-fi, boutique, commissions, etc.',

      'Avatar ou photo de profil.',

      'Logo si vous en possédez un.',

      'Visuels à utiliser : personnage, mascotte, décorations, arrière-plan, etc.',

      'Palette de couleurs ou couleurs préférées.',

      'Description de votre thème et de votre univers.',

      'Sites ou designs servant de références ou d’inspiration.',

      'Ordre et nom des différents boutons.',

      'Animations, effets ou interactions souhaités.'

    ],

    notice:
      'Les illustrations et ressources fournies doivent vous appartenir ou vous devez disposer de l’autorisation nécessaire pour les utiliser.',

    link:
      'https://ko-fi.com/c/91ae88e805'

  }

]


/* =========================
   EXPORT
========================= */

export default commissions