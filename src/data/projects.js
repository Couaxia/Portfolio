/* =========================
   PROJECT IMAGES
========================= */

/*
  Vite récupère automatiquement toutes les images
  présentes dans les dossiers de chaque projet.
*/

const couaxiaImages = import.meta.glob(
  '../assets/projects/couaxia/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


const myoImages = import.meta.glob(
  '../assets/projects/myo/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


const couaxiaLinksImages = import.meta.glob(
  '../assets/projects/couaxia_link/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


const celanyaImages = import.meta.glob(
  '../assets/projects/celanya/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


const nymyaImages = import.meta.glob(
  '../assets/projects/nymya/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


/* =========================
   IMAGE HELPER
========================= */

const findImage = (images, filename) => {

  const path = Object.keys(images).find((path) =>
    path.endsWith(`/${filename}`)
  )

  return path
    ? images[path]
    : null

}


/* =========================
   GET PROJECTS
========================= */

export const getProjects = (t) => [

  /* =========================
     COUAXIA
  ========================== */

  {
    id: 1,

    title: 'Couaxia',

    description:
      t('projects.data.couaxia.description'),

    images: [

      findImage(
        couaxiaImages,
        'Home.png'
      ),

      findImage(
        couaxiaImages,
        'About.png'
      ),

      findImage(
        couaxiaImages,
        'Histoire.png'
      ),

      findImage(
        couaxiaImages,
        'jeux.png'
      ),

      findImage(
        couaxiaImages,
        'Sondage.png'
      ),

      findImage(
        couaxiaImages,
        'Twitch.png'
      ),

      findImage(
        couaxiaImages,
        'Credits.png'
      ),

      findImage(
        couaxiaImages,
        'Contact.png'
      )

    ].filter(Boolean),

    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],

    demo:
      'https://couaxia-hmbf.onrender.com/',

    github: ''
  },


  /* =========================
     MYO FAUNETTE
  ========================== */

  {
    id: 2,

    title: 'Myo Faunette',

    description:
      t('projects.data.myo.description'),

    images:
      Object.values(myoImages),

    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],

    demo:
      'https://myo-faunette.onrender.com/',

    github: ''
  },


  /* =========================
     COUAXIA LINK
  ========================== */

  {
    id: 3,

    title: 'Couaxia link',

    description:
      t('projects.data.couaxiaLink.description'),

    images:
      Object.values(couaxiaLinksImages),

    technologies: [
      'JavaScript',
      'CSS',
      'HTML'
    ],

    demo:
      'https://links-couaxia.onrender.com/',

    github: ''
  },


  /* =========================
     CELANYA
  ========================== */

  {
    id: 4,

    title: 'Celanya',

    description:
      t('projects.data.celanya.description'),

    images:
      Object.values(celanyaImages),

    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],

    demo:
      'https://celanya.onrender.com/',

    github: ''
  },


  /* =========================
     NYMYA
  ========================== */

  {
    id: 5,

    title: 'Nymya',

    description:
      t('projects.data.nymya.description'),

    images:
      Object.values(nymyaImages),

    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],

    demo:
      'https://nymya.onrender.com/',

    github: ''
  }

]


/* =========================
   DEFAULT EXPORT
========================= */

export default getProjects