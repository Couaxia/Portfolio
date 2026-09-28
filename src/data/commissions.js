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
    .sort(
      ([pathA], [pathB]) =>
        pathA.localeCompare(pathB)
    )
    .map(([, image]) => image)

}


/* =========================
   GET COMMISSIONS
========================= */

export const getCommissions = (t) => [

  /* =========================================================
     01 — YCH EMOTE
     BASE BY TAKIIMIKIKU
  ========================================================= */

  {
    id: 1,

    title: '[YCH] Emote',

    category:
      t('commissions.data.common.emote'),

    credit:
      'Base by takiimikiku',

    description:
      t(
        'commissions.data.takiimikiku.description'
      ),

    price: '2 €',

    priceLabel:
      t('commissions.card.startingFrom'),

    images: [
      takiimikikuBase
    ],

    features: [

      t(
        'commissions.data.takiimikiku.features.oneEmote'
      ),

      t(
        'commissions.data.takiimikiku.features.fiveEmotes'
      ),

      t(
        'commissions.data.common.features.upToFive'
      ),

      t(
        'commissions.data.common.features.pngGif'
      ),

      t(
        'commissions.data.common.features.customColors'
      ),

      t(
        'commissions.data.common.features.customBackground'
      ),

      t(
        'commissions.data.common.features.customSizes'
      ),

      t(
        'commissions.data.common.features.digitalFile'
      )

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

      t(
        'commissions.data.common.instructions.modelReference'
      ),

      t(
        'commissions.data.common.instructions.selectedEmotes'
      ),

      t(
        'commissions.data.takiimikiku.instructions.modifications'
      ),

      t(
        'commissions.data.common.instructions.background'
      ),

      t(
        'commissions.data.common.instructions.sizes'
      ),

      t(
        'commissions.data.common.instructions.contact'
      ),

      t(
        'commissions.data.common.instructions.email'
      )

    ],

    notice:
      t(
        'commissions.data.common.contactNotice'
      ),

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

    category:
      t('commissions.data.common.emote'),

    credit:
      'Base by Nicopiyo',

    description:
      t(
        'commissions.data.nicopiyo.description'
      ),

    price: '3 €',

    priceLabel:
      t('commissions.card.startingFrom'),

    images: [
      nicopiyoBase1,
      nicopiyoBase2
    ],

    features: [

      t(
        'commissions.data.nicopiyo.features.oneEmote'
      ),

      t(
        'commissions.data.nicopiyo.features.fiveEmotes'
      ),

      t(
        'commissions.data.common.features.upToFive'
      ),

      t(
        'commissions.data.common.features.pngGif'
      ),

      t(
        'commissions.data.common.features.customColors'
      ),

      t(
        'commissions.data.common.features.customBackground'
      ),

      t(
        'commissions.data.common.features.customSizes'
      ),

      t(
        'commissions.data.common.features.digitalFile'
      )

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

      t(
        'commissions.data.common.instructions.modelReference'
      ),

      t(
        'commissions.data.common.instructions.selectedEmotes'
      ),

      t(
        'commissions.data.nicopiyo.instructions.modifications'
      ),

      t(
        'commissions.data.nicopiyo.instructions.colors'
      ),

      t(
        'commissions.data.common.instructions.background'
      ),

      t(
        'commissions.data.common.instructions.sizes'
      ),

      t(
        'commissions.data.common.instructions.contact'
      ),

      t(
        'commissions.data.common.instructions.email'
      )

    ],

    notice:
      t(
        'commissions.data.common.contactNotice'
      ),

    link:
      'https://ko-fi.com/c/1514c7a5ed'

  },


  /* =========================================================
     03 — CUSTOM LINK WEBSITE
  ========================================================= */

  {
    id: 3,

    title:
      'Custom Link Website',

    category:
      t(
        'commissions.data.website.category'
      ),

    credit:
      t(
        'commissions.data.website.credit'
      ),

    description:
      t(
        'commissions.data.website.description'
      ),

    price: '8 €',

    priceLabel:
      t('commissions.card.startingFrom'),

    images:
      getProjectImages(),

    features: [

      t(
        'commissions.data.website.features.customWebsite'
      ),

      t(
        'commissions.data.website.features.customDesign'
      ),

      t(
        'commissions.data.website.features.responsive'
      ),

      t(
        'commissions.data.website.features.socials'
      ),

      t(
        'commissions.data.website.features.visuals'
      ),

      t(
        'commissions.data.website.features.colors'
      ),

      t(
        'commissions.data.website.features.animations'
      ),

      t(
        'commissions.data.website.features.interactions'
      )

    ],

    details: {

      responsive: true,

      customDesign: true,

      animations: true,

      interactiveElements: true,

      socialLinks: true

    },

    buyerInstructions: [

      t(
        'commissions.data.website.instructions.name'
      ),

      t(
        'commissions.data.website.instructions.links'
      ),

      t(
        'commissions.data.website.instructions.avatar'
      ),

      t(
        'commissions.data.website.instructions.logo'
      ),

      t(
        'commissions.data.website.instructions.visuals'
      ),

      t(
        'commissions.data.website.instructions.colors'
      ),

      t(
        'commissions.data.website.instructions.universe'
      ),

      t(
        'commissions.data.website.instructions.references'
      ),

      t(
        'commissions.data.website.instructions.buttons'
      ),

      t(
        'commissions.data.website.instructions.animations'
      )

    ],

    notice:
      t(
        'commissions.data.website.notice'
      ),

    link:
      'https://ko-fi.com/c/91ae88e805'

  }

]


/* =========================
   DEFAULT EXPORT
========================= */

export default getCommissions