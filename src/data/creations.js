/* =========================
   CREATION IMAGES
========================= */

const creationImages = import.meta.glob(
  '../assets/creations/*.{png,jpg,jpeg,webp,gif}',
  {
    eager: true,
    import: 'default'
  }
)


/* =========================
   IMAGE HELPER
========================= */

const findImage = (filename) => {

  const path = Object.keys(creationImages).find((path) =>
    path.endsWith(`/${filename}`)
  )

  return path
    ? creationImages[path]
    : null

}


/* =========================
   GET CREATIONS
========================= */

export const getCreations = (t) => [

  /* =========================
     01 - COUAXIA HELLO
  ========================= */

  {
    id: 1,

    title:
      'YCH Emote Couaxia Hello',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('couaxia_hi.png'),

    description:
      t('creations.data.couaxiaHello.description')
  },


  /* =========================
     02 - BABY
  ========================= */

  {
    id: 2,

    title:
      'YCH Les pecks de baby',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('Muscle_peck_baby.png'),

    description:
      t('creations.data.babyPecks.description')
  },


  /* =========================
     03 - MYO CAFÉ
  ========================= */

  {
    id: 3,

    title:
      'YCH Myo_Faunette café',

    category:
      t('creations.categories.illustration'),

    image:
      findImage('myo_cafe_fond.png'),

    description:
      t('creations.data.myoCafe.description')
  },


  /* =========================
     04 - MYO NOTE
  ========================= */

  {
    id: 4,

    title:
      'YCH Myo Note',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('myo_note.png'),

    description:
      t('creations.data.myoNote.description')
  },


  /* =========================
     05 - COUAXIA WHAOU
  ========================= */

  {
    id: 5,

    title:
      'YCH Couaxia Whaou',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('whaou.png'),

    description:
      t('creations.data.couaxiaWhaou.description')
  },


  /* =========================
     06 - COUAXIA BANNIÈRE
  ========================= */

  {
    id: 6,

    title:
      'YCH Bannière Couaxia bouche',

    category:
      t('creations.categories.illustration'),

    image:
      findImage('couaxia_bannière_bouche.png'),

    description:
      t('creations.data.couaxiaBanner.description')
  },


  /* =========================
     07 - GEKKO
  ========================= */

  {
    id: 7,

    title:
      'YCH Emote Gekko',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('gekko.png'),

    description:
      t('creations.data.gekko.description')
  },


  /* =========================
     08 - LOUXI
  ========================= */

  {
    id: 8,

    title:
      'YCH Emote Louxi',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('louxi.png'),

    description:
      t('creations.data.louxi.description')
  },


  /* =========================
     09 - NYMYA
  ========================= */

  {
    id: 9,

    title:
      'YCH Bannière bouche Nymya',

    category:
      t('creations.categories.illustration'),

    image:
      findImage('Nymya_Bouche.png'),

    description:
      t('creations.data.nymyaBanner.description')
  },


  /* =========================
     10 - PIKANYA
  ========================= */

  {
    id: 10,

    title:
      t('creations.data.pikanya.title'),

    category:
      t('creations.categories.illustration'),

    image:
      findImage('pikanya.png'),

    description:
      t('creations.data.pikanya.description')
  },


  /* =========================
     11 - CELANYA UWU
  ========================= */

  {
    id: 11,

    title:
      'YCH Emote Celanya UwU',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('UwU_celanya.png'),

    description:
      t('creations.data.celanyaUwu.description')
  },


  /* =========================
     12 - PEACHY
  ========================= */

  {
    id: 12,

    title:
      'YCH Emote Peachy',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('Kawaii_peachy.png'),

    description:
      t('creations.data.peachy.description')
  },


  /* =========================
     13 - COUAXIA WHAT
  ========================= */

  {
    id: 13,

    title:
      'YCH Emote Couaxia',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('couaxia_What.png'),

    description:
      t('creations.data.couaxiaWhat.description')
  },


  /* =========================
     14 - SAGE
  ========================= */

  {
    id: 14,

    title:
      'YCH Emote Sage',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('Sage_slime.png'),

    description:
      t('creations.data.sage.description')
  },


  /* =========================
     15 - COUAXIA POP
  ========================= */

  {
    id: 15,

    title:
      'YCH Emote Couaxia',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('Opop.gif'),

    description:
      t('creations.data.couaxiaPop.description')
  },


  /* =========================
     16 - CELANYA FIRE
  ========================= */

  {
    id: 16,

    title:
      'YCH Emote Celanya',

    category:
      t('creations.categories.emotes'),

    image:
      findImage('Celanya_Fire.gif'),

    description:
      t('creations.data.celanyaFire.description')
  }

]


/* =========================
   DEFAULT EXPORT
========================= */

export default getCreations