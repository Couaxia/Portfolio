/* =========================
   CREATION IMAGES
========================= */

const creationImages = import.meta.glob(
  '../assets/creations/*.{png,jpg,jpeg,webp}',
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

    title: 'Emote Couaxia Hello',

    category: 'Emotes',

    image: findImage('couaxia_hi.png'),

    description:
      'Un emote Bonjour pour mon stream !'
  },
  
  {
    id: 2,

    title: 'Les pecks de baby',

    category: 'Emotes',

    image: findImage('Muscle_peck_baby.png'),

    description:
      'Bien battie le bébé oizo !'
  },
  
  {
    id: 3,

    title: 'Myo_Faunette café',

    category: 'Illustration',

    image: findImage('myo_cafe_fond.png'),

    description:
      'Petite pause détente de la Myo.'
  },
  
  {
    id: 4,

    title: 'Myo Note',

    category: 'Emotes',

    image: findImage('myo_note.png'),

    description:
      'Emote de Myo qui prend des notes'
  },

   {
    id: 5,

    title: 'Couaxia Whaou',

    category: 'Emotes',

    image: findImage('whaou.png'),

    description:
      'Emote couaxia Wahou'
  },

  {
    id: 6,

    title: 'Bannière couaxia bouche',

    category: 'Illustration',

    image: findImage('couaxia_bannière_bouche.png'),

    description:
      'Une petite bannière de la bouche !'
  },
]

export default creations