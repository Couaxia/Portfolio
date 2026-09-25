<script setup>
import { ref } from 'vue'


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

const creationImages = Object.values(creationModules)
const projectImages = Object.values(projectModules)


/* =========================
   SHUFFLE
========================= */

const shuffle = (array) => {
  const copy = [...array]

  for (let i = copy.length - 1; i > 0; i--) {
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

const universeItems = ref([
  {
    image: randomCreations[0],
    type: 'star',
    className: 'item-1'
  },

  {
    image: randomProjects[0],
    type: 'planet',
    className: 'item-2',
    ring: true
  },

  {
    image: randomCreations[1],
    type: 'star',
    className: 'item-3'
  },

  {
    image: randomProjects[1],
    type: 'planet',
    className: 'item-4'
  },

  {
    image: randomCreations[2],
    type: 'star',
    className: 'item-5'
  },

  {
    image: randomProjects[2],
    type: 'planet',
    className: 'item-6',
    ring: true
  }
].filter((item) => item.image))
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
         IMAGES
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

      <!-- PLANET RING BACK -->

      <div
        v-if="item.type === 'planet' && item.ring"
        class="planet-ring planet-ring-back"
      ></div>


      <!-- IMAGE -->

      <div
        class="image-shape"
        :class="
          item.type === 'star'
            ? 'star-shape'
            : 'planet-shape'
        "
      >

        <img
          :src="item.image"
          alt=""
          draggable="false"
        >

      </div>


      <!-- PLANET RING FRONT -->

      <div
        v-if="item.type === 'planet' && item.ring"
        class="planet-ring planet-ring-front"
      ></div>

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

  width: 460px;
  height: 460px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255, 79, 184, 0.11),
      rgba(143, 76, 255, 0.055) 45%,
      transparent 72%
    );

  filter: blur(40px);

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

  transition:
    filter 0.35s ease;
}


.universe-item:hover {
  z-index: 30;

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
    transform 0.7s ease;
}


.universe-item:hover
.image-shape img {
  transform: scale(1.045);
}


/* =========================
   CREATION IMAGES
========================= */

/*
  Les dessins peuvent remplir
  complètement les étoiles.
*/

.star-wrapper
.image-shape img {
  object-fit: cover;

  object-position: center;
}


/* =========================
   PROJECT IMAGES
========================= */

/*
  Les screenshots de sites
  commencent depuis le haut.
*/

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
    rgba(255, 155, 215, 0.3);

  box-shadow:
    0 20px 55px
    rgba(0, 0, 0, 0.35),

    0 0 35px
    rgba(255, 79, 184, 0.08),

    inset 0 0 25px
    rgba(255, 255, 255, 0.025);
}


/* =========================
   STARS
========================= */

/*
  Étoile à 4 branches
  avec un centre plus large.
*/

.star-shape {
  clip-path: polygon(
    50% 0%,

    65% 34%,

    100% 50%,

    65% 66%,

    50% 100%,

    35% 66%,

    0% 50%,

    35% 34%
  );

  border-radius: 8%;
}


/* =========================
   ITEM 1
   CREATION
========================= */

.item-1 {
  width: 185px;
  height: 185px;

  left: 8%;
  top: 65px;

  animation-delay: -1s;
}


/* =========================
   ITEM 2
   PROJECT
========================= */

.item-2 {
  width: 205px;
  height: 205px;

  right: 8%;
  top: 40px;

  animation-delay: -3s;
}


/* =========================
   ITEM 3
   CREATION PRINCIPALE
========================= */

.item-3 {
  width: 220px;
  height: 220px;

  left: 34%;
  top: 175px;

  z-index: 8;

  animation-delay: -5s;
}


/* =========================
   ITEM 4
   PROJECT
========================= */

.item-4 {
  width: 165px;
  height: 165px;

  right: 10%;
  top: 310px;

  animation-delay: -2s;
}


/* =========================
   ITEM 5
   CREATION
========================= */

.item-5 {
  width: 140px;
  height: 140px;

  left: 17%;
  bottom: 35px;

  animation-delay: -4s;
}


/* =========================
   ITEM 6
   PROJECT
========================= */

.item-6 {
  width: 150px;
  height: 150px;

  left: 52%;
  bottom: 15px;

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


/* =========================
   BACK RING
========================= */

.planet-ring-back {
  z-index: 2;

  transform:
    translate(-50%, -50%)
    rotate(-17deg);
}


/* =========================
   FRONT RING
========================= */

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


/* =========================
   ORBIT 1
========================= */

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


/* =========================
   ORBIT 2
========================= */

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


/* =========================
   ORBIT 3
========================= */

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


/* =========================
   SPARKLE 1
========================= */

.sparkle-one {
  left: 31%;
  top: 20px;

  font-size: 1.6rem;
}


/* =========================
   SPARKLE 2
========================= */

.sparkle-two {
  right: 31%;
  top: 125px;

  color:
    var(--color-pink-soft);

  font-size: 0.8rem;

  animation-delay: -1s;
}


/* =========================
   SPARKLE 3
========================= */

.sparkle-three {
  left: 28%;
  bottom: 105px;

  color:
    var(--color-pink-soft);

  font-size: 1.4rem;

  animation-delay: -2s;
}


/* =========================
   SPARKLE 4
========================= */

.sparkle-four {
  right: 12%;
  bottom: 45px;

  font-size: 1.2rem;

  animation-delay: -0.5s;
}


/* =========================
   SPARKLE 5
========================= */

.sparkle-five {
  left: 6%;
  top: 47%;

  color:
    var(--color-purple);

  font-size: 1rem;

  animation-delay: -1.5s;
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
    left: 7%;
  }


  .item-2 {
    right: 7%;
  }


  .item-3 {
    left: 33%;
  }


  .item-4 {
    right: 7%;
  }


  .item-5 {
    left: 14%;
  }


  .item-6 {
    left: 51%;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 550px) {

  .image-universe {
    width: 100%;
    height: 430px;

    overflow: hidden;
  }


  /* ITEM 1 */

  .item-1 {
    width: 125px;
    height: 125px;

    left: 3%;
    top: 45px;
  }


  /* ITEM 2 */

  .item-2 {
    width: 130px;
    height: 130px;

    right: 3%;
    top: 30px;
  }


  /* ITEM 3 */

  .item-3 {
    width: 150px;
    height: 150px;

    left: 31%;
    top: 135px;
  }


  /* ITEM 4 */

  .item-4 {
    width: 110px;
    height: 110px;

    right: 4%;
    top: 245px;
  }


  /* ITEM 5 */

  .item-5 {
    width: 100px;
    height: 100px;

    left: 7%;
    bottom: 25px;
  }


  /* ITEM 6 */

  .item-6 {
    width: 100px;
    height: 100px;

    left: 46%;
    bottom: 5px;
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


  /* SPARKLES */

  .sparkle-one {
    left: 28%;
    top: 10px;
  }


  .sparkle-two {
    right: 28%;
    top: 115px;
  }


  .sparkle-three {
    left: 25%;
    bottom: 95px;

    font-size: 1.2rem;
  }


  .sparkle-four {
    right: 7%;
    bottom: 35px;
  }

}


/* =========================
   VERY SMALL MOBILE
========================= */

@media (max-width: 380px) {

  .image-universe {
    height: 400px;
  }


  .item-1 {
    width: 110px;
    height: 110px;
  }


  .item-2 {
    width: 115px;
    height: 115px;
  }


  .item-3 {
    width: 135px;
    height: 135px;

    left: 29%;
  }


  .item-4 {
    width: 95px;
    height: 95px;
  }


  .item-5 {
    width: 85px;
    height: 85px;
  }


  .item-6 {
    width: 85px;
    height: 85px;
  }

}

</style>