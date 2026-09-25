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

  /* CREATION — HAUT GAUCHE */

  {
    image: randomCreations[0],
    type: 'diamond',
    className: 'item-1'
  },


  /* PROJECT — HAUT DROITE */

  {
    image: randomProjects[0],
    type: 'planet',
    className: 'item-2',
    ring: true
  },


  /* CREATION — CENTRE */

  {
    image: randomCreations[1],
    type: 'diamond',
    className: 'item-3'
  },


  /* PROJECT — DROITE */

  {
    image: randomProjects[1],
    type: 'planet',
    className: 'item-4'
  },


  /* CREATION — BAS GAUCHE */

  {
    image: randomCreations[2],
    type: 'diamond',
    className: 'item-5'
  },


  /* PROJECT — BAS CENTRE */

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


      <!-- =========================
           PLANET RING BACK
      ========================== -->

      <div
        v-if="item.type === 'planet' && item.ring"
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

      </div>


      <!-- =========================
           PLANET RING FRONT
      ========================== -->

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
  transform:
    scale(1.055);
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


.diamond-wrapper:hover
.diamond-glow {
  opacity: 0.9;

  filter:
    blur(5px);
}


/* =========================
   ITEM 1
   CREATION — HAUT GAUCHE
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
   PROJECT — HAUT DROITE
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
   CREATION PRINCIPALE
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
   PROJECT — DROITE
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
   CREATION — BAS GAUCHE
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
   PROJECT — BAS CENTRE
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
  left: 30%;
  top: 22px;

  font-size: 1.6rem;
}


/* =========================
   SPARKLE 2
========================= */

.sparkle-two {
  right: 30%;
  top: 135px;

  color:
    var(--color-pink-soft);

  font-size: 0.8rem;

  animation-delay: -1s;
}


/* =========================
   SPARKLE 3
========================= */

.sparkle-three {
  left: 27%;
  bottom: 110px;

  color:
    var(--color-pink-soft);

  font-size: 1.4rem;

  animation-delay: -2s;
}


/* =========================
   SPARKLE 4
========================= */

.sparkle-four {
  right: 10%;
  bottom: 35px;

  font-size: 1.2rem;

  animation-delay: -0.5s;
}


/* =========================
   SPARKLE 5
========================= */

.sparkle-five {
  left: 5%;
  top: 48%;

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
   SPARKLE ANIMATION
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


  /* =========================
     ITEM 1
  ========================= */

  .item-1 {
    width: 115px;
    height: 115px;

    left: 2%;
    top: 55px;
  }


  /* =========================
     ITEM 2
  ========================= */

  .item-2 {
    width: 125px;
    height: 125px;

    right: 2%;
    top: 25px;
  }


  /* =========================
     ITEM 3
  ========================= */

  .item-3 {
    width: 145px;
    height: 145px;

    left: 31%;
    top: 145px;
  }


  /* =========================
     ITEM 4
  ========================= */

  .item-4 {
    width: 105px;
    height: 105px;

    right: 2%;
    top: 260px;
  }


  /* =========================
     ITEM 5
  ========================= */

  .item-5 {
    width: 92px;
    height: 92px;

    left: 5%;
    bottom: 35px;
  }


  /* =========================
     ITEM 6
  ========================= */

  .item-6 {
    width: 95px;
    height: 95px;

    left: 51%;
    bottom: 25px;
  }


  /* =========================
     ORBITS
  ========================= */

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


  /* =========================
     SPARKLES
  ========================= */

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

    top: 255px;
  }


  .item-5 {
    width: 80px;
    height: 80px;

    bottom: 35px;
  }


  .item-6 {
    width: 82px;
    height: 82px;

    left: 50%;
    bottom: 25px;
  }

}

</style>