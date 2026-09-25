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

  return path ? creationImages[path] : null
}


/* =========================
   CREATIONS
========================= */

const creations = [

  
  {
    id: 1,

    title: 'YCH Emote Couaxia Hello',

    category: 'Emotes',

    image: findImage('couaxia_hi.png'),

    description:
      'Un emote Bonjour pour mon stream !'
  },
  
  {
    id: 2,

    title: 'YCH Les pecks de baby',

    category: 'Emotes',

    image: findImage('Muscle_peck_baby.png'),

    description:
      'Bien battie le bébé oizo !'
  },
  
  {
    id: 3,

    title: 'YCH Myo_Faunette café',

    category: 'Illustration',

    image: findImage('myo_cafe_fond.png'),

    description:
      'Petite pause détente de la Myo.'
  },
  
  {
    id: 4,

    title: 'YCH Myo Note',

    category: 'Emotes',

    image: findImage('myo_note.png'),

    description:
      'Emote de Myo qui prend des notes'
  },

   {
    id: 5,

    title: 'YCH Couaxia Whaou',

    category: 'Emotes',

    image: findImage('whaou.png'),

    description:
      'Emote couaxia Wahou'
  },

  {
    id: 6,

    title: 'YCH Bannière couaxia bouche',

    category: 'Illustration',

    image: findImage('couaxia_bannière_bouche.png'),

    description:
      'Une petite bannière de la bouche !'
  },

  {
    id: 7,

    title: 'YCH Emote Gekko',

    category: 'Emotes',

    image: findImage('gekko.png'),

    description:
      'Plusieur emotes de Gekkko (VALORANT) disponible sur ko-fi'
  },
  {
    id: 8,

    title: 'YCH Emote Louxi',

    category: 'Emotes',

    image: findImage('louxi.png'),

    description:
      'Une emote donner pour LouxiFR !'
  },
  {
    id: 9,

    title: 'YCH Bannière bouche Nymya',

    category: 'Illustration',

    image: findImage('Nymya_Bouche.png'),

    description:
      'Une emote donner pour LouxiFR !'
  },
  {
    id: 10,

    title: 'Pour un heureux gagnant',

    category: 'Illustration',

    image: findImage('pikanya.png'),

    description:
      'Un pikachu au couleurs de Pikanya, mais avec un petit plus 𐂠 !'
  },
  {
    id: 11,

    title: 'YCH Emote Celanya UwU',

    category: 'Emotes',

    image: findImage('UwU_celanya.png'),

    description:
      'Un cadeau pour celanya UwU'
  },

   {
    id: 12,

    title: 'YCH Emote Peachy',

    category: 'Emotes',

    image: findImage('Kawaii_peachy.png'),

    description:
      'Un cadeau pour Peachy'
  },
  {
    id: 13,

    title: 'YCH Emote Couaxia',

    category: 'Emotes',

    image: findImage('couaxia_What.png'),

    description:
      'Un super emotes avec uen petites référence'
  },
  {
    id: 14,

    title: 'YCH Emote Sage',

    category: 'Emotes',

    image: findImage('Sage_slime.png'),

    description:
      'Petit emote de Sage (Valorant)'
  },

  {
    id: 15,

    title: 'YCH Emote Couaxia',

    category: 'Emotes',

    image: findImage('Opop.gif'),

    description:
      'Première emote animé POP'
  },
  {
    id: 16,

    title: 'YCH Emote Celanya',

    category: 'Emotes',

    image: findImage('Celanya_Fire.gif'),

    description:
      'Emote animé pour Celanya'
  },
]

export default creations