<script setup>

import ImageUniverse from './ImageUniverse.vue'

import couaxiaHero from '../../assets/images/about/couaxia_meow.png'

</script>


<template>

  <section class="hero">


    <!-- =========================
         BACKGROUND
    ========================== -->

    <div class="hero-background">

      <div class="hero-glow hero-glow-left"></div>

      <div class="hero-glow hero-glow-right"></div>

      <div class="hero-orbit hero-orbit-one"></div>

      <div class="hero-orbit hero-orbit-two"></div>

    </div>


    <!-- =========================
         COUAXIA CHARACTER
    ========================== -->

    <div class="hero-character">

      <div class="hero-character-glow"></div>

      <img
        :src="couaxiaHero"
        :alt="$t('home.hero.imageAlt')"
        draggable="false"
      >

    </div>


    <!-- =========================
         CONTENT
    ========================== -->

    <div class="hero-container container">


      <!-- =========================
           TEXTE
      ========================== -->

      <div class="hero-content">


        <!-- INTRO -->

        <p class="hero-intro">
          {{ $t('home.hero.intro') }}
        </p>


        <!-- TITLE -->

        <h1 class="hero-title">

          <span class="hero-name">
            COUAXIA
          </span>


          <span class="hero-subtitle">

            {{ $t('home.hero.developer') }}

            <span class="hero-symbol">
              &
            </span>

            {{ $t('home.hero.creator') }}

          </span>

        </h1>


        <!-- DESCRIPTION -->

        <p class="hero-description">
          {{ $t('home.hero.description') }}
        </p>


        <!-- TAGS -->

        <div class="hero-tags">

          <span>
            {{ $t('home.hero.tags.development') }}
          </span>

          <i></i>

          <span>
            {{ $t('home.hero.tags.design') }}
          </span>

          <i></i>

          <span>
            {{ $t('home.hero.tags.creation') }}
          </span>

        </div>


        <!-- ACTIONS -->

        <div class="hero-actions">

          <RouterLink
            to="/projects"
            class="hero-button hero-button-primary"
          >

            <span>
              {{ $t('home.hero.buttons.projects') }}
            </span>

            <span
              class="button-arrow"
              aria-hidden="true"
            >
              →
            </span>

          </RouterLink>


          <RouterLink
            to="/creations"
            class="hero-button hero-button-secondary"
          >

            <span>
              {{ $t('home.hero.buttons.creations') }}
            </span>

            <span
              class="button-arrow"
              aria-hidden="true"
            >
              →
            </span>

          </RouterLink>

        </div>


        <!-- ABOUT -->

        <RouterLink
          to="/about"
          class="hero-about"
        >

          <span>
            {{ $t('home.hero.buttons.about') }}
          </span>

          <span
            class="hero-about-arrow"
            aria-hidden="true"
          >
            ↗
          </span>

        </RouterLink>

      </div>


      <!-- =========================
           IMAGE UNIVERSE
      ========================== -->

      <div class="hero-visual">

        <div class="hero-visual-glow"></div>

        <ImageUniverse />

      </div>

    </div>

  </section>

</template>


<style scoped>

/* =========================
   HERO
========================= */

.hero {

  position: relative;

  min-height: 100vh;

  display: flex;
  align-items: center;

  padding:
    120px
    0
    70px;

  overflow: hidden;

  background:
    var(--color-background);

}


/* =========================
   BACKGROUND
========================= */

.hero-background {

  position: absolute;

  inset: 0;

  overflow: hidden;

  pointer-events: none;

}


/* =========================
   GLOWS
========================= */

.hero-glow {

  position: absolute;

  border-radius: 50%;

  filter:
    blur(130px);

}


.hero-glow-left {

  width: 500px;
  height: 500px;

  top: 10%;
  left: -320px;

  background:
    rgba(143, 76, 255, 0.2);

}


.hero-glow-right {

  width: 550px;
  height: 550px;

  right: -280px;
  bottom: -100px;

  background:
    rgba(255, 79, 184, 0.14);

}


/* =========================
   BACKGROUND ORBITS
========================= */

.hero-orbit {

  position: absolute;

  border:
    1px solid
    rgba(255, 255, 255, 0.035);

  border-radius: 50%;

}


.hero-orbit-one {

  width: 700px;
  height: 700px;

  top: -350px;
  right: -150px;

}


.hero-orbit-two {

  width: 950px;
  height: 950px;

  right: -350px;
  bottom: -600px;

}


/* =========================
   COUAXIA CHARACTER
========================= */

.hero-character {

  position: absolute;

  z-index: 1;

  top: 75px;
  left: -45px;

  width:
    clamp(
      180px,
      15vw,
      300px
    );

  pointer-events: none;

}


/* =========================
   CHARACTER IMAGE
========================= */

.hero-character img {

  position: relative;

  z-index: 2;

  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;

  user-select: none;

  filter:
    drop-shadow(
      0
      15px
      30px
      rgba(0, 0, 0, 0.35)
    );

  animation:
    character-floating
    6s
    ease-in-out
    infinite;

}


/* =========================
   CHARACTER GLOW
========================= */

.hero-character-glow {

  position: absolute;

  z-index: 1;

  left: 50%;
  top: 45%;

  width: 85%;

  aspect-ratio: 1;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255, 79, 184, 0.2),
      rgba(143, 76, 255, 0.1) 45%,
      transparent 72%
    );

  filter:
    blur(25px);

  transform:
    translate(
      -50%,
      -50%
    );

}


/* =========================
   CHARACTER ANIMATION
========================= */

@keyframes character-floating {

  0%,
  100% {

    transform:
      translateY(0)
      rotate(-1deg);

  }

  50% {

    transform:
      translateY(-8px)
      rotate(1deg);

  }

}


/* =========================
   CONTAINER
========================= */

.hero-container {

  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(500px, 1.05fr);

  align-items: center;

  gap:
    clamp(
      40px,
      5vw,
      90px
    );

}


/* =========================
   CONTENT
========================= */

.hero-content {

  position: relative;

  z-index: 5;

  max-width: 650px;

}


/* =========================
   INTRO
========================= */

.hero-intro {

  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 12px;

  margin-bottom: 25px;

  color:
    var(--color-pink-soft);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.25em;

  text-transform: uppercase;

}


.hero-intro::before {

  content: '';

  width: 35px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-purple),
      var(--color-pink)
    );

}


/* =========================
   TITLE
========================= */

.hero-title {

  display: flex;

  flex-direction: column;

  margin:
    0
    0
    30px;

}


/* =========================
   COUAXIA TITLE
========================= */

.hero-name {

  display: inline-block;

  width: fit-content;

  font-size:
    clamp(
      4.2rem,
      7vw,
      7.5rem
    );

  font-weight: 800;

  line-height: 0.85;

  letter-spacing: -0.055em;

  background:
    linear-gradient(
      135deg,
      var(--color-white) 15%,
      var(--color-pink-soft) 55%,
      var(--color-purple)
    );

  background-clip: text;

  -webkit-background-clip: text;

  color: transparent;

}


/* =========================
   SUBTITLE
========================= */

.hero-subtitle {

  margin-top: 30px;

  color:
    var(--color-white);

  font-size:
    clamp(
      1.4rem,
      2.3vw,
      2.1rem
    );

  font-weight: 400;

  line-height: 1.25;

  letter-spacing: -0.02em;

}


.hero-symbol {

  margin:
    0
    5px;

  color:
    var(--color-pink);

  font-family:
    Georgia,
    serif;

  font-size: 1.15em;

  font-style: italic;

}


/* =========================
   DESCRIPTION
========================= */

.hero-description {

  max-width: 540px;

  margin-bottom: 25px;

  color:
    var(--color-text-muted);

  font-size: 1.05rem;

  line-height: 1.8;

}


/* =========================
   TAGS
========================= */

.hero-tags {

  display: flex;

  flex-wrap: wrap;

  align-items: center;

  gap: 12px;

  margin-bottom: 38px;

  color:
    rgba(
      255,
      255,
      255,
      0.5
    );

  font-size: 0.68rem;
  font-weight: 500;

  letter-spacing: 0.12em;

  text-transform: uppercase;

}


.hero-tags i {

  width: 4px;
  height: 4px;

  flex-shrink: 0;

  border-radius: 50%;

  background:
    var(--color-pink);

  box-shadow:
    0
    0
    8px
    rgba(255, 79, 184, 0.6);

}


/* =========================
   ACTIONS
========================= */

.hero-actions {

  display: flex;

  flex-wrap: wrap;

  gap: 14px;

  margin-bottom: 30px;

}


/* =========================
   BUTTONS
========================= */

.hero-button {

  min-height: 52px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  padding:
    0
    25px;

  border-radius: 50px;

  font-size: 0.85rem;
  font-weight: 600;

  transition:
    transform var(--transition-normal),
    background var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal);

}


.hero-button:hover {

  transform:
    translateY(-3px);

}


/* =========================
   PRIMARY BUTTON
========================= */

.hero-button-primary {

  background:
    linear-gradient(
      135deg,
      var(--color-purple),
      var(--color-pink)
    );

  color:
    var(--color-white);

  box-shadow:
    0
    12px
    35px
    rgba(143, 76, 255, 0.22);

}


.hero-button-primary:hover {

  box-shadow:
    0
    16px
    45px
    rgba(255, 79, 184, 0.28);

}


/* =========================
   SECONDARY BUTTON
========================= */

.hero-button-secondary {

  border:
    1px solid
    var(--color-border);

  background:
    rgba(
      255,
      255,
      255,
      0.025
    );

  color:
    var(--color-white);

}


.hero-button-secondary:hover {

  border-color:
    rgba(
      255,
      155,
      215,
      0.5
    );

  background:
    rgba(
      255,
      255,
      255,
      0.055
    );

}


/* =========================
   BUTTON ARROW
========================= */

.button-arrow {

  display: inline-block;

  transition:
    transform
    var(--transition-fast);

}


.hero-button:hover
.button-arrow {

  transform:
    translateX(4px);

}


/* =========================
   ABOUT LINK
========================= */

.hero-about {

  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding-bottom: 5px;

  color:
    var(--color-text-muted);

  font-size: 0.75rem;
  font-weight: 500;

  letter-spacing: 0.06em;

  transition:
    color
    var(--transition-fast);

}


.hero-about::after {

  content: '';

  position: absolute;

  left: 0;
  bottom: 0;

  width: 25px;
  height: 1px;

  background:
    var(--color-pink);

  transition:
    width
    var(--transition-normal);

}


.hero-about:hover {

  color:
    var(--color-white);

}


.hero-about:hover::after {

  width: 100%;

}


.hero-about-arrow {

  color:
    var(--color-pink);

  transition:
    transform
    var(--transition-fast);

}


.hero-about:hover
.hero-about-arrow {

  transform:
    translate(
      3px,
      -3px
    );

}


/* =========================
   VISUAL
========================= */

.hero-visual {

  position: relative;

  min-width: 0;

  min-height: 620px;

  display: flex;

  align-items: center;
  justify-content: center;

}


/* =========================
   VISUAL GLOW
========================= */

.hero-visual-glow {

  position: absolute;

  z-index: 0;

  width: 520px;
  height: 520px;

  left: 50%;
  top: 50%;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255, 79, 184, 0.17),
      rgba(143, 76, 255, 0.08) 45%,
      transparent 72%
    );

  filter:
    blur(25px);

  transform:
    translate(
      -50%,
      -50%
    );

  pointer-events: none;

}


/* =========================
   IMAGE UNIVERSE
========================= */

.hero-visual :deep(.image-universe) {

  position: relative;

  z-index: 2;

}


/* =========================
   LARGE SCREEN
========================= */

@media (min-width: 1400px) {

  .hero-container {

    grid-template-columns:
      minmax(0, 0.9fr)
      minmax(560px, 1.1fr);

  }

}


/* =========================
   MEDIUM SCREEN
========================= */

@media (max-width: 1350px) {

  .hero-character {

    width: 190px;

    left: -65px;

    opacity: 0.75;

  }

}


/* =========================
   TABLET
========================= */

@media (max-width: 1050px) {

  .hero {

    padding:
      130px
      0
      80px;

  }


  .hero-container {

    grid-template-columns:
      1fr;

    gap: 40px;

    text-align: center;

  }


  /* CHARACTER */

  .hero-character {

    width: 170px;

    top: 70px;
    left: -55px;

    opacity: 0.5;

  }


  /* CONTENT */

  .hero-content {

    max-width: 720px;

    margin-inline: auto;

  }


  .hero-intro {

    justify-content: center;

  }


  .hero-name {

    margin-inline: auto;

  }


  .hero-description {

    margin-inline: auto;

    margin-bottom: 25px;

  }


  .hero-tags {

    justify-content: center;

  }


  .hero-actions {

    justify-content: center;

  }


  /* VISUAL */

  .hero-visual {

    width:
      min(
        650px,
        100%
      );

    min-height: 580px;

    margin-inline: auto;

  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 550px) {

  .hero {

    min-height: auto;

    padding:
      110px
      0
      60px;

  }


  .hero-container {

    gap: 30px;

  }


  /* =========================
     CHARACTER
  ========================= */

  .hero-character {

    width: 120px;

    top: 65px;
    left: -35px;

    opacity: 0.42;

  }


  /* =========================
     INTRO
  ========================= */

  .hero-intro {

    margin-bottom: 20px;

    font-size: 0.62rem;

    letter-spacing: 0.18em;

  }


  .hero-intro::before {

    display: none;

  }


  /* =========================
     TITLE
  ========================= */

  .hero-name {

    font-size:
      clamp(
        3.3rem,
        18vw,
        5rem
      );

  }


  .hero-subtitle {

    margin-top: 22px;

    font-size: 1.35rem;

  }


  /* =========================
     DESCRIPTION
  ========================= */

  .hero-description {

    font-size: 0.95rem;

    line-height: 1.7;

  }


  /* =========================
     TAGS
  ========================= */

  .hero-tags {

    gap: 9px;

    margin-bottom: 30px;

    font-size: 0.57rem;

  }


  /* =========================
     BUTTONS
  ========================= */

  .hero-actions {

    width: 100%;

    flex-direction: column;

    margin-bottom: 25px;

  }


  .hero-button {

    width: 100%;

  }


  .hero-about {

    margin-top: 5px;

  }


  /* =========================
     VISUAL
  ========================= */

  .hero-visual {

    width: 100%;

    min-height: 440px;

  }


  .hero-visual-glow {

    width: 340px;
    height: 340px;

  }

}


/* =========================
   VERY SMALL MOBILE
========================= */

@media (max-width: 380px) {

  .hero-character {

    width: 105px;

    left: -35px;

  }


  .hero-name {

    font-size: 3.1rem;

  }


  .hero-tags {

    gap: 7px;

    letter-spacing: 0.08em;

  }

}

</style>