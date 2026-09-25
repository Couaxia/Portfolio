<script setup>

import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'


/* =========================
   ROUTER
========================= */

const router = useRouter()


/* =========================
   TRANSLATIONS
========================= */

const { t } = useI18n()


/* =========================
   LOAD IMAGES
========================= */

const creationModules = import.meta.glob(
  '../../assets/creations/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


const projectModules = import.meta.glob(
  '../../assets/projects/**/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default'
  }
)


/* =========================
   IMAGES
========================= */

const creationImages = Object.values(
  creationModules
)


const projectImages = Object.values(
  projectModules
)


/* =========================
   SHUFFLE
========================= */

const shuffle = (array) => {

  const copy = [...array]


  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j = Math.floor(
      Math.random() * (i + 1)
    )


    ;[copy[i], copy[j]] = [
      copy[j],
      copy[i]
    ]

  }


  return copy

}


/* =========================
   RANDOM SELECTION
========================= */

const randomCreations = shuffle(
  creationImages
).slice(0, 3)


const randomProjects = shuffle(
  projectImages
).slice(0, 3)


/* =========================
   UNIVERSE ITEMS
========================= */

const universeItems = computed(() => [

  {
    image: randomCreations[0],

    type: 'diamond',

    className: 'item-1',

    label:
      t('home.universe.creation'),

    title:
      t('home.universe.discoverCreations'),

    route: '/creations'
  },


  {
    image: randomProjects[0],

    type: 'planet',

    className: 'item-2',

    label:
      t('home.universe.webProject'),

    title:
      t('home.universe.discoverProjects'),

    route: '/projects',

    ring: true
  },


  {
    image: randomCreations[1],

    type: 'diamond',

    className: 'item-3',

    label:
      t('home.universe.creation'),

    title:
      t('home.universe.discoverCreations'),

    route: '/creations'
  },


  {
    image: randomProjects[1],

    type: 'planet',

    className: 'item-4',

    label:
      t('home.universe.webProject'),

    title:
      t('home.universe.discoverProjects'),

    route: '/projects'
  },


  {
    image: randomCreations[2],

    type: 'diamond',

    className: 'item-5',

    label:
      t('home.universe.creation'),

    title:
      t('home.universe.discoverCreations'),

    route: '/creations'
  },


  {
    image: randomProjects[2],

    type: 'planet',

    className: 'item-6',

    label:
      t('home.universe.webProject'),

    title:
      t('home.universe.discoverProjects'),

    route: '/projects',

    ring: true
  }

].filter((item) => item.image))


/* =========================
   NAVIGATION
========================= */

const openItem = (item) => {

  if (!item.route) {
    return
  }


  router.push(item.route)

}

</script>


<template>

  <div class="image-universe">


    <!-- =========================
         BACKGROUND GLOW
    ========================== -->

    <div class="universe-glow"></div>


    <!-- =========================
         ORBITS
    ========================== -->

    <div class="orbit orbit-one"></div>

    <div class="orbit orbit-two"></div>

    <div class="orbit orbit-three"></div>


    <!-- =========================
         DECORATIVE STARS
    ========================== -->

    <span class="sparkle sparkle-one">
      ✦
    </span>

    <span class="sparkle sparkle-two">
      ✧
    </span>

    <span class="sparkle sparkle-three">
      ✦
    </span>

    <span class="sparkle sparkle-four">
      ✧
    </span>

    <span class="sparkle sparkle-five">
      ✦
    </span>


    <!-- =========================
         UNIVERSE ITEMS
    ========================== -->

    <div
      v-for="(item, index) in universeItems"
      :key="`${item.image}-${index}`"
      class="universe-item"
      :class="[
        item.className,
        `${item.type}-wrapper`
      ]"
    >


      <!-- =========================
           CLICKABLE ITEM
      ========================== -->

      <div
        class="item-interactive"
        role="link"
        tabindex="0"
        :aria-label="item.title"
        @click="openItem(item)"
        @keydown.enter="openItem(item)"
      >


        <!-- =========================
             PLANET RING BACK
        ========================== -->

        <div
          v-if="
            item.type === 'planet'
            && item.ring
          "
          class="planet-ring planet-ring-back"
        ></div>


        <!-- =========================
             DIAMOND GLOW
        ========================== -->

        <div
          v-if="item.type === 'diamond'"
          class="diamond-glow"
        ></div>


        <!-- =========================
             IMAGE
        ========================== -->

        <div
          class="image-shape"
          :class="
            item.type === 'diamond'
              ? 'diamond-shape'
              : 'planet-shape'
          "
        >

          <img
            :src="item.image"
            alt=""
            draggable="false"
          >


          <!-- =========================
               HOVER OVERLAY
          ========================== -->

          <div
            class="image-overlay"
            :class="
              item.type === 'diamond'
                ? 'diamond-overlay'
                : 'planet-overlay'
            "
          >

            <div class="overlay-content">

              <span class="overlay-label">
                {{ item.label }}
              </span>


              <span class="overlay-link">

                {{ $t('home.universe.discover') }}

                <span aria-hidden="true">
                  →
                </span>

              </span>

            </div>

          </div>

        </div>


        <!-- =========================
             PLANET RING FRONT
        ========================== -->

        <div
          v-if="
            item.type === 'planet'
            && item.ring
          "
          class="planet-ring planet-ring-front"
        ></div>

      </div>

    </div>


    <!-- =========================
         LEGEND
    ========================== -->

    <div class="universe-legend">

      <RouterLink
        to="/creations"
        class="legend-item"
      >

        <span class="legend-diamond">
          ◇
        </span>

        {{ $t('home.universe.legend.creations') }}

      </RouterLink>


      <span class="legend-separator"></span>


      <RouterLink
        to="/projects"
        class="legend-item"
      >

        <span class="legend-planet"></span>

        {{ $t('home.universe.legend.projects') }}

      </RouterLink>

    </div>

  </div>

</template>


<style scoped>

/* =========================
   UNIVERSE
========================= */

.image-universe {

  position: relative;

  width: 100%;
  height: 590px;

  isolation: isolate;

  overflow: hidden;

}


/* =========================
   BACKGROUND GLOW
========================= */

.universe-glow {

  position: absolute;

  z-index: 0;

  left: 50%;
  top: 50%;

  width: 500px;
  height: 500px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255, 79, 184, 0.12),
      rgba(143, 76, 255, 0.06) 45%,
      transparent 72%
    );

  filter:
    blur(42px);

  transform:
    translate(-50%, -50%);

  pointer-events: none;

}


/* =========================
   ITEMS
========================= */

.universe-item {

  position: absolute;

  z-index: 4;

  animation:
    floating
    7s
    ease-in-out
    infinite;

}


.item-interactive {

  position: relative;

  width: 100%;
  height: 100%;

  cursor: pointer;

  outline: none;

  transition:
    transform 0.4s ease,
    filter 0.4s ease;

}


.item-interactive:hover {

  transform:
    scale(1.045);

  filter:
    brightness(1.08);

}


.item-interactive:focus-visible {

  transform:
    scale(1.045);

  filter:
    brightness(1.08);

}


/* =========================
   IMAGE CONTAINER
========================= */

.image-shape {

  position: relative;

  z-index: 5;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background:
    var(--color-background-card);

  box-shadow:
    0 20px 55px
    rgba(0, 0, 0, 0.32);

}


.image-shape img {

  display: block;

  width: 100%;
  height: 100%;

  pointer-events: none;

  user-select: none;

  transition:
    transform 0.7s ease,
    filter 0.5s ease;

}


.item-interactive:hover
.image-shape img,

.item-interactive:focus-visible
.image-shape img {

  transform:
    scale(1.08);

  filter:
    brightness(0.65);

}


/* =========================
   CREATION IMAGES
========================= */

.diamond-wrapper
.image-shape img {

  object-fit: cover;

  object-position: center;

}


/* =========================
   PROJECT IMAGES
========================= */

.planet-wrapper
.image-shape img {

  object-fit: cover;

  object-position: top center;

}


/* =========================
   PLANETS
========================= */

.planet-shape {

  border-radius: 50%;

  border:
    1px solid
    rgba(255, 155, 215, 0.32);

  box-shadow:
    0 20px 55px
    rgba(0, 0, 0, 0.35),

    0 0 35px
    rgba(255, 79, 184, 0.08),

    inset 0 0 25px
    rgba(255, 255, 255, 0.025);

}


/* =========================
   DIAMONDS
========================= */

.diamond-shape {

  clip-path:
    polygon(
      50% 0%,
      100% 50%,
      50% 100%,
      0% 50%
    );

  box-shadow:
    0 20px 55px
    rgba(0, 0, 0, 0.32);

}


/* =========================
   DIAMOND GLOW
========================= */

.diamond-glow {

  position: absolute;

  z-index: 3;

  inset: -4px;

  clip-path:
    polygon(
      50% 0%,
      100% 50%,
      50% 100%,
      0% 50%
    );

  background:
    linear-gradient(
      135deg,
      rgba(255, 155, 215, 0.65),
      rgba(143, 76, 255, 0.35) 48%,
      rgba(255, 79, 184, 0.55)
    );

  filter:
    blur(3px);

  opacity: 0.55;

  pointer-events: none;

  transition:
    opacity 0.35s ease,
    filter 0.35s ease;

}


.item-interactive:hover
.diamond-glow,

.item-interactive:focus-visible
.diamond-glow {

  opacity: 1;

  filter:
    blur(6px);

}


/* =========================
   OVERLAY
========================= */

.image-overlay {

  position: absolute;

  z-index: 10;

  inset: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 20px;

  opacity: 0;

  background:
    radial-gradient(
      circle,
      rgba(15, 9, 20, 0.25),
      rgba(15, 9, 20, 0.78)
    );

  transition:
    opacity 0.4s ease;

  pointer-events: none;

}


.planet-overlay {

  border-radius: 50%;

}


.diamond-overlay {

  clip-path:
    polygon(
      50% 0%,
      100% 50%,
      50% 100%,
      0% 50%
    );

}


.item-interactive:hover
.image-overlay,

.item-interactive:focus-visible
.image-overlay {

  opacity: 1;

}


/* =========================
   OVERLAY CONTENT
========================= */

.overlay-content {

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 7px;

  text-align: center;

  transform:
    translateY(8px);

  transition:
    transform 0.4s ease;

}


.item-interactive:hover
.overlay-content,

.item-interactive:focus-visible
.overlay-content {

  transform:
    translateY(0);

}


.overlay-label {

  color:
    var(--color-pink-soft);

  font-size: 0.63rem;

  font-weight: 700;

  letter-spacing: 0.18em;

  text-transform: uppercase;

}


.overlay-link {

  color:
    var(--color-white);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 0.88rem;

  font-weight: 600;

}


.overlay-link span {

  display: inline-block;

  margin-left: 4px;

  color:
    var(--color-pink);

  transition:
    transform 0.3s ease;

}


.item-interactive:hover
.overlay-link span {

  transform:
    translateX(4px);

}


/* =========================
   ITEM 1
========================= */

.item-1 {

  width: 175px;
  height: 175px;

  left: 7%;
  top: 70px;

  animation-delay: -1s;

}


/* =========================
   ITEM 2
========================= */

.item-2 {

  width: 200px;
  height: 200px;

  right: 9%;
  top: 30px;

  animation-delay: -3s;

}


/* =========================
   ITEM 3
========================= */

.item-3 {

  width: 210px;
  height: 210px;

  left: 36%;
  top: 180px;

  z-index: 8;

  animation-delay: -5s;

}


/* =========================
   ITEM 4
========================= */

.item-4 {

  width: 155px;
  height: 155px;

  right: 5%;
  top: 325px;

  animation-delay: -2s;

}


/* =========================
   ITEM 5
========================= */

.item-5 {

  width: 135px;
  height: 135px;

  left: 14%;
  bottom: 45px;

  animation-delay: -4s;

}


/* =========================
   ITEM 6
========================= */

.item-6 {

  width: 140px;
  height: 140px;

  left: 57%;
  bottom: 35px;

  animation-delay: -6s;

}


/* =========================
   PLANET RINGS
========================= */

.planet-ring {

  position: absolute;

  left: 50%;
  top: 50%;

  width: 138%;
  height: 42%;

  border:
    2px solid
    rgba(255, 155, 215, 0.23);

  border-radius: 50%;

  pointer-events: none;

}


.planet-ring-back {

  z-index: 2;

  transform:
    translate(-50%, -50%)
    rotate(-17deg);

}


.planet-ring-front {

  z-index: 7;

  transform:
    translate(-50%, -50%)
    rotate(-17deg);

  clip-path:
    inset(
      50%
      0
      0
      0
    );

  border-color:
    rgba(255, 79, 184, 0.42);

  filter:
    drop-shadow(
      0 0 5px
      rgba(255, 79, 184, 0.2)
    );

}


/* =========================
   ORBITS
========================= */

.orbit {

  position: absolute;

  z-index: 1;

  left: 50%;
  top: 50%;

  border-radius: 50%;

  pointer-events: none;

}


.orbit-one {

  width: 480px;
  height: 480px;

  border:
    1px solid
    rgba(255, 155, 215, 0.07);

  transform:
    translate(-50%, -50%)
    rotate(-12deg);

}


.orbit-two {

  width: 545px;
  height: 330px;

  border:
    1px dashed
    rgba(143, 76, 255, 0.09);

  transform:
    translate(-50%, -50%)
    rotate(25deg);

}


.orbit-three {

  width: 380px;
  height: 510px;

  border:
    1px solid
    rgba(255, 255, 255, 0.03);

  transform:
    translate(-50%, -50%)
    rotate(48deg);

}


/* =========================
   SPARKLES
========================= */

.sparkle {

  position: absolute;

  z-index: 20;

  line-height: 1;

  color:
    var(--color-white);

  pointer-events: none;

  text-shadow:
    0 0 15px
    rgba(255, 255, 255, 0.65);

  animation:
    sparkle
    3s
    ease-in-out
    infinite;

}


.sparkle-one {

  left: 30%;
  top: 22px;

  font-size: 1.6rem;

}


.sparkle-two {

  right: 30%;
  top: 135px;

  color:
    var(--color-pink-soft);

  font-size: 0.8rem;

  animation-delay: -1s;

}


.sparkle-three {

  left: 27%;
  bottom: 110px;

  color:
    var(--color-pink-soft);

  font-size: 1.4rem;

  animation-delay: -2s;

}


.sparkle-four {

  right: 10%;
  bottom: 35px;

  font-size: 1.2rem;

  animation-delay: -0.5s;

}


.sparkle-five {

  left: 5%;
  top: 48%;

  color:
    var(--color-purple);

  font-size: 1rem;

  animation-delay: -1.5s;

}


/* =========================
   LEGEND
========================= */

.universe-legend {

  position: absolute;

  z-index: 40;

  left: 50%;
  bottom: 2px;

  display: flex;

  align-items: center;

  gap: 13px;

  transform:
    translateX(-50%);

  white-space: nowrap;

}


.legend-item {

  display: flex;

  align-items: center;

  gap: 7px;

  color:
    var(--color-text-muted);

  font-size: 0.67rem;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  transition:
    color 0.3s ease;

}


.legend-item:hover {

  color:
    var(--color-white);

}


.legend-diamond {

  color:
    var(--color-pink-soft);

  font-size: 1rem;

  line-height: 1;

}


.legend-planet {

  width: 8px;
  height: 8px;

  border:
    1px solid
    var(--color-purple);

  border-radius: 50%;

  box-shadow:
    0 0 7px
    rgba(143, 76, 255, 0.45);

}


.legend-separator {

  width: 3px;
  height: 3px;

  border-radius: 50%;

  background:
    var(--color-pink);

}


/* =========================
   FLOATING
========================= */

@keyframes floating {

  0%,
  100% {

    transform:
      translateY(0);

  }


  50% {

    transform:
      translateY(-7px);

  }

}


/* =========================
   SPARKLE
========================= */

@keyframes sparkle {

  0%,
  100% {

    opacity: 0.3;

    transform:
      scale(0.75)
      rotate(0deg);

  }


  50% {

    opacity: 1;

    transform:
      scale(1.15)
      rotate(10deg);

  }

}


/* =========================
   TABLET
========================= */

@media (max-width: 1050px) {

  .image-universe {

    width:
      min(
        620px,
        100%
      );

    height: 560px;

    margin-inline: auto;

  }


  .item-1 {

    left: 5%;
    top: 65px;

  }


  .item-2 {

    right: 5%;

  }


  .item-3 {

    left: 34%;

  }


  .item-4 {

    right: 4%;
    top: 315px;

  }


  .item-5 {

    left: 11%;
    bottom: 45px;

  }


  .item-6 {

    left: 56%;
    bottom: 35px;

  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 550px) {

  .image-universe {

    width: 100%;
    height: 440px;

    overflow: hidden;

  }


  .item-1 {

    width: 115px;
    height: 115px;

    left: 2%;
    top: 55px;

  }


  .item-2 {

    width: 125px;
    height: 125px;

    right: 2%;
    top: 25px;

  }


  .item-3 {

    width: 145px;
    height: 145px;

    left: 31%;
    top: 145px;

  }


  .item-4 {

    width: 105px;
    height: 105px;

    right: 2%;
    top: 260px;

  }


  .item-5 {

    width: 92px;
    height: 92px;

    left: 5%;
    bottom: 45px;

  }


  .item-6 {

    width: 95px;
    height: 95px;

    left: 51%;
    bottom: 35px;

  }


  /* ORBITS */

  .orbit-one {

    width: 320px;
    height: 320px;

  }


  .orbit-two {

    width: 380px;
    height: 230px;

  }


  .orbit-three {

    width: 260px;
    height: 370px;

  }


  /* TEXT ON SMALL SHAPES */

  .overlay-label {

    font-size: 0.48rem;

  }


  .overlay-link {

    font-size: 0.7rem;

  }


  /* LEGEND */

  .universe-legend {

    bottom: 2px;

    gap: 9px;

  }


  .legend-item {

    font-size: 0.55rem;

  }


  /* SPARKLES */

  .sparkle-one {

    left: 28%;
    top: 10px;

  }


  .sparkle-two {

    right: 27%;
    top: 120px;

  }


  .sparkle-three {

    left: 24%;
    bottom: 95px;

    font-size: 1.2rem;

  }


  .sparkle-four {

    right: 5%;
    bottom: 35px;

  }


  .sparkle-five {

    left: 2%;
    top: 46%;

  }

}


/* =========================
   VERY SMALL MOBILE
========================= */

@media (max-width: 380px) {

  .image-universe {

    height: 410px;

  }


  .item-1 {

    width: 100px;
    height: 100px;

  }


  .item-2 {

    width: 110px;
    height: 110px;

  }


  .item-3 {

    width: 125px;
    height: 125px;

    left: 30%;

  }


  .item-4 {

    width: 90px;
    height: 90px;

    top: 250px;

  }


  .item-5 {

    width: 80px;
    height: 80px;

    bottom: 40px;

  }


  .item-6 {

    width: 82px;
    height: 82px;

    left: 50%;
    bottom: 35px;

  }


  .universe-legend {

    transform:
      translateX(-50%)
      scale(0.9);

  }

}

</style>