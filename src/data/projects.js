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
  '../assets/projects/Myo/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)
const couaxia_linksImages = import.meta.glob(
  '../assets/projects/couaxia_link/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)
const celanyaImages = import.meta.glob(
  '../assets/projects/Celanya/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


/* =========================
   IMAGE HELPER
========================= */

/*
  Permet de récupérer une image par son nom.

  Exemple :
  findImage(couaxiaImages, 'Home.png')
*/

const findImage = (images, filename) => {
  const path = Object.keys(images).find((path) =>
    path.endsWith(`/${filename}`)
  )

  return path ? images[path] : null
}


/* =========================
   PROJECTS
========================= */

const projects = [

  /* =========================
     COUAXIA
  ========================== */

  {
    id: 1,

    title: 'Couaxia',

    description:
      'Mon site personnel dédié à mon univers de VTubing. Il regroupe ma présentation, mon histoire, mes réseaux, mes projets ainsi que les artistes ayant participé à la création de mon univers.',

    images: [
      findImage(couaxiaImages, 'Home.png'),
      findImage(couaxiaImages, 'About.png'),
      findImage(couaxiaImages, 'Histoire.png'),
      findImage(couaxiaImages, 'jeux.png'),
      findImage(couaxiaImages, 'Sondage.png'),
      findImage(couaxiaImages, 'Twitch.png'),
      findImage(couaxiaImages, 'Credits.png'),
      findImage(couaxiaImages, 'Contact.png')
    ].filter(Boolean),

    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],

    demo: 'https://couaxia-hmbf.onrender.com/',

    github: ''
  },


  /* =========================
     MYO FAUNETTE
  ========================== */

  {
    id: 2,

    title: 'Myo Faunette',

    description:
      'Une page de liens personnalisée créée autour de l’univers forestier et magique de Myo. Elle regroupe ses réseaux et ses différentes plateformes dans une interface entièrement personnalisée.',

    /*
      Pour l'instant, toutes les images présentes
      dans le dossier Myo seront automatiquement
      ajoutées au carrousel.
    */

    images: Object.values(myoImages),

    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],

    demo: 'https://myo-faunette.onrender.com/',

    github: ''
  },


  /* =========================
     COUAXIA LINK
  ========================== */

  {
    id: 3,

    title: 'Couaxia link',

    description:
      'Une page de liens personnalisée créée autour de l’univers de Couaxia. Elle regroupe ses réseaux et ses différentes plateformes dans une interface entièrement personnalisée.',

    /*
      Nous ajouterons son dossier d'images
      lorsque tu auras les captures.
    */

   images: Object.values(couaxia_linksImages),

    technologies: [
      'JavaScript',
      'CSS',
      'HTML'
    ],

    demo: 'https://links-couaxia.onrender.com/',

    github: ''
  },

   /* =========================
     Celanya
  ========================== */

  {
    id: 4,

    title: 'Celanya',

    description:
      'Une page de liens personnalisée créée autour de l’univers de La Dragonne Lunaire Celanya. Elle regroupe ses réseaux et ses différentes plateformes dans une interface entièrement personnalisée.',

    /*
      Pour l'instant, toutes les images présentes
      dans le dossier Celanya seront automatiquement
      ajoutées au carrousel.
    */

    images: Object.values(celanyaImages),

    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],

    demo: 'https://celanya.onrender.com/',

    github: ''
  },


]


/* =========================
   EXPORT
========================= */

export default projects