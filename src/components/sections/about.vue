<script setup>

import couaxiaBody from '../../assets/images/about/corps.png'
import couaxiaFoot from '../../assets/images/about/feet.png'

</script>


<template>

  <section
    id="about"
    class="about"
  >


    <!-- =========================
         BACKGROUND
    ========================== -->

    <div class="about-glow about-glow-left"></div>
    <div class="about-glow about-glow-right"></div>

    <div class="background-orbit background-orbit-one"></div>
    <div class="background-orbit background-orbit-two"></div>


    <div class="about-container">


      <!-- =========================
           ILLUSTRATION
      ========================== -->

      <div class="about-visual">

        <div class="about-frame">


          <!-- CADRES DÉCORATIFS -->

          <div class="frame-line frame-line-one"></div>
          <div class="frame-line frame-line-two"></div>


          <!-- HALO -->

          <div class="about-image-glow"></div>


          <!-- =========================
               PERSONNAGE
          ========================== -->

          <div class="couaxia-character">


            <!-- CORPS -->

            <img
              :src="couaxiaBody"
              :alt="$t('about.imageAlt')"
              class="couaxia-layer couaxia-body"
              draggable="false"
            >


            <!-- JAMBE / PIED -->

            <img
              :src="couaxiaFoot"
              alt=""
              class="couaxia-layer couaxia-foot"
              draggable="false"
            >

          </div>


          <!-- =========================
               ÉTOILES
          ========================== -->

          <span class="decoration decoration-one">
            ✦
          </span>

          <span class="decoration decoration-two">
            ✦
          </span>

          <span class="decoration decoration-three">
            ✦
          </span>

          <span class="decoration decoration-four">
            ✧
          </span>

        </div>

      </div>


      <!-- =========================
           TEXTE
      ========================== -->

      <div class="about-content">


        <!-- LABEL -->

        <p class="section-label">
          {{ $t('about.label') }}
        </p>


        <!-- TITLE -->

        <h2 class="about-title">

          {{ $t('about.title') }}

          <span>
            Couaxia !
          </span>

        </h2>


        <!-- TEXT -->

        <div class="about-text">

          <p>
            {{ $t('about.paragraphs.first') }}
          </p>

          <p>
            {{ $t('about.paragraphs.second') }}
          </p>

          <p>

            {{ $t('about.paragraphs.third') }}

            <strong>
              {{ $t('about.paragraphs.highlight') }}
            </strong>

          </p>

        </div>


        <!-- =========================
             LIENS
        ========================== -->

        <div class="about-links">


          <!-- PROJECTS -->

          <RouterLink
            to="/projects"
            class="about-link"
          >

            <span class="about-link-number">
              01.
            </span>

            <span class="about-link-text">
              {{ $t('navigation.projects') }}
            </span>

          </RouterLink>


          <!-- CREATIONS -->

          <RouterLink
            to="/creations"
            class="about-link"
          >

            <span class="about-link-number">
              02.
            </span>

            <span class="about-link-text">
              {{ $t('navigation.creations') }}
            </span>

          </RouterLink>

        </div>

      </div>

    </div>

  </section>

</template>


<style scoped>

/* ==================================================
   ABOUT
================================================== */

.about {

  position: relative;

  width: 100%;
  min-height: calc(100vh - 80px);

  display: flex;
  align-items: center;

  padding: 110px 0 90px;

  background: var(--color-background-soft);

  overflow: hidden;

}


/* ==================================================
   CONTAINER
================================================== */

.about-container {

  position: relative;

  z-index: 5;

  width: min(calc(100% - 80px), 1600px);

  margin-inline: auto;

  display: grid;

  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(0, 1.05fr);

  align-items: center;

  gap: clamp(50px, 5vw, 90px);

}


/* ==================================================
   VISUAL
================================================== */

.about-visual {

  position: relative;

  min-width: 0;
  min-height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: visible;

  perspective: 1200px;

}


/* ==================================================
   FRAME
================================================== */

.about-frame {

  position: relative;

  width: min(450px, 80%);
  height: 500px;

  flex-shrink: 0;

  border:
    1px solid
    rgba(255, 126, 215, 0.38);

  border-radius: 38px;

  background:
    linear-gradient(
      145deg,
      rgba(76, 25, 96, 0.35),
      rgba(27, 12, 38, 0.18)
    );

  transform:
    rotate(-4deg)
    rotateY(-2deg);

  transform-style: preserve-3d;

  overflow: visible;

  isolation: isolate;

  box-shadow:
    0 0 50px
    rgba(177, 64, 255, 0.08);

  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.6s ease;

}


/* ==================================================
   3D HOVER
================================================== */

.about-frame:hover {

  transform:
    rotate(-2deg)
    rotateY(-5deg)
    rotateX(2deg)
    translateY(-4px);

  box-shadow:
    0 30px 80px
    rgba(177, 64, 255, 0.18);

}


/* ==================================================
   FRAME BACKGROUND
================================================== */

.about-frame::before {

  content: '';

  position: absolute;

  z-index: 0;

  inset: 10px;

  border-radius: 31px;

  background:
    radial-gradient(
      circle at 40% 35%,
      rgba(255, 59, 178, 0.13),
      transparent 58%
    );

  pointer-events: none;

}


.about-frame::after {

  content: '';

  position: absolute;

  z-index: 1;

  left: 8%;
  right: 8%;
  bottom: 0;

  height: 90px;

  border-radius:
    0
    0
    32px
    32px;

  background:
    linear-gradient(
      to top,
      rgba(195, 54, 255, 0.16),
      transparent
    );

  pointer-events: none;

}


/* ==================================================
   FRAME LINES
================================================== */

.frame-line {

  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 38px;

  pointer-events: none;

}


.frame-line-one {

  z-index: -2;

  left: -25px;
  top: 20px;

  border:
    1px solid
    rgba(255, 104, 201, 0.48);

  transform:
    rotate(2deg);

}


.frame-line-two {

  z-index: -3;

  right: -28px;
  top: 26px;

  border:
    1px solid
    rgba(143, 76, 255, 0.42);

  transform:
    rotate(8deg);

}


/* ==================================================
   IMAGE GLOW
================================================== */

.about-image-glow {

  position: absolute;

  z-index: -4;

  left: 48%;
  top: 48%;

  width: 570px;
  height: 570px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255, 47, 173, 0.23) 0%,
      rgba(143, 76, 255, 0.12) 36%,
      rgba(143, 76, 255, 0.04) 55%,
      transparent 72%
    );

  filter: blur(55px);

  transform:
    translate(-50%, -50%);

  pointer-events: none;

}


/* ==================================================
   CHARACTER
================================================== */

.couaxia-character {

  position: absolute;

  z-index: 5;

  width: 680px;

  left: 47%;
  top: 51%;

  transform:
    translate(-50%, -50%)
    rotate(4deg);

  transform-origin: center;

  pointer-events: none;

}


/* ==================================================
   COMMON IMAGE LAYERS
================================================== */

.couaxia-layer {

  display: block;

  width: 100%;
  height: auto;

  user-select: none;

  pointer-events: none;

  backface-visibility: hidden;

  will-change: transform;

}


/* ==================================================
   BODY
================================================== */

.couaxia-body {

  position: relative;

  z-index: 2;

  width: 100%;

  transform-origin: 52% 48%;

  animation:
    body-follow
    2.8s
    ease-in-out
    infinite;

  filter:
    drop-shadow(
      0 22px 25px
      rgba(0, 0, 0, 0.28)
    );

  will-change: transform;

}


/* ==================================================
   LEG / FOOT
================================================== */

.couaxia-foot {

  position: absolute;

  z-index: 10;

  top: 0;
  left: 0;

  width: 100%;
  height: auto;

  transform-origin: 49% 45%;

  animation:
    leg-kick
    2.8s
    ease-in-out
    infinite;

  filter:
    drop-shadow(
      8px 12px 12px
      rgba(0, 0, 0, 0.18)
    );

  will-change: transform;

}


/* ==================================================
   BODY ANIMATION
================================================== */

@keyframes body-follow {

  0%,
  100% {

    transform:
      translate3d(0, 0, 0)
      rotate(0deg);

  }


  20% {

    transform:
      translate3d(0, 0, 0)
      rotate(0deg);

  }


  40% {

    transform:
      translate3d(3px, -2px, 0)
      rotate(-0.15deg);

  }


  55% {

    transform:
      translate3d(6px, -4px, 0)
      rotate(-0.35deg);

  }


  65% {

    transform:
      translate3d(7px, -5px, 0)
      rotate(-0.4deg);

  }


  80% {

    transform:
      translate3d(3px, -2px, 0)
      rotate(-0.15deg);

  }

}


/* ==================================================
   LEG ANIMATION
================================================== */

@keyframes leg-kick {

  0%,
  100% {

    transform:
      translate3d(0, 0, 0)
      rotate(0deg);

  }


  20% {

    transform:
      translate3d(0, 0, 0)
      rotate(0deg);

  }


  40% {

    transform:
      translate3d(3px, -2px, 0)
      rotate(-0.8deg);

  }


  55% {

    transform:
      translate3d(6px, -4px, 0)
      rotate(-1.7deg);

  }


  65% {

    transform:
      translate3d(7px, -5px, 0)
      rotate(-2deg);

  }


  80% {

    transform:
      translate3d(3px, -2px, 0)
      rotate(-0.5deg);

  }

}


/* ==================================================
   DECORATIONS
================================================== */

.decoration {

  position: absolute;

  z-index: 15;

  pointer-events: none;

  text-shadow:
    0 0 8px currentColor,
    0 0 20px currentColor;

  animation:
    float-decoration
    4s
    ease-in-out
    infinite;

}


.decoration-one {

  top: -40px;
  left: 35px;

  font-size: 3rem;

  color: #ff76cf;

}


.decoration-two {

  right: -65px;
  top: 145px;

  font-size: 3rem;

  color: #ffffff;

  animation-delay: -1.3s;

}


.decoration-three {

  left: -55px;
  bottom: 100px;

  font-size: 2rem;

  color: #f69ad7;

  animation-delay: -2.1s;

}


.decoration-four {

  right: 40px;
  top: 85px;

  font-size: 1.5rem;

  color: #ff91dc;

  animation-delay: -0.7s;

}


/* ==================================================
   DECORATION ANIMATION
================================================== */

@keyframes float-decoration {

  0%,
  100% {

    transform:
      translateY(0)
      rotate(0deg)
      scale(1);

  }


  50% {

    transform:
      translateY(-10px)
      rotate(8deg)
      scale(1.08);

  }

}


/* ==================================================
   CONTENT
================================================== */

.about-content {

  position: relative;

  z-index: 10;

  width: 100%;
  min-width: 0;

  max-width: 650px;

}


/* ==================================================
   LABEL
================================================== */

.section-label {

  position: relative;

  display: inline-flex;
  align-items: center;

  gap: 18px;

  margin-bottom: 28px;

  color: var(--color-pink-soft);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.3em;

  text-transform: uppercase;

}


.section-label::before {

  content: '';

  width: 48px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-purple),
      var(--color-pink)
    );

}


/* ==================================================
   TITLE
================================================== */

.about-title {

  margin-bottom: 42px;

  color: var(--color-white);

  font-size:
    clamp(
      3.5rem,
      5vw,
      5.2rem
    );

  font-weight: 700;

  line-height: 0.98;

  letter-spacing: -0.04em;

}


.about-title span {

  display: block;

  width: fit-content;

  margin-top: 8px;

  background:
    linear-gradient(
      90deg,
      #ff8dd4,
      #ff4fb8,
      #8f4cff
    );

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;

}


/* ==================================================
   TEXT
================================================== */

.about-text {

  display: flex;
  flex-direction: column;

  gap: 22px;

  max-width: 600px;

  color: var(--color-text-muted);

  font-size: 1rem;

  line-height: 1.85;

}


.about-text strong {

  color: var(--color-white);

  font-weight: 600;

}


/* ==================================================
   LINKS
================================================== */

.about-links {

  display: flex;
  flex-wrap: wrap;

  gap: 70px;

  margin-top: 48px;

}


.about-link {

  position: relative;

  min-width: 190px;

  display: flex;
  align-items: center;

  gap: 15px;

  padding-bottom: 14px;

  color: var(--color-white);

  font-size: 0.95rem;
  font-weight: 600;

}


.about-link-number {

  color: var(--color-pink);

  font-size: 1.2rem;
  font-weight: 700;

}


.about-link-text {

  color: var(--color-white);

}


.about-link::after {

  content: '';

  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-pink),
      var(--color-purple)
    );

  transform:
    scaleX(0.35);

  transform-origin: left;

  transition:
    transform
    var(--transition-normal);

}


.about-link:hover::after {

  transform:
    scaleX(1);

}


/* ==================================================
   BACKGROUND GLOWS
================================================== */

.about-glow {

  position: absolute;

  border-radius: 50%;

  filter: blur(130px);

  pointer-events: none;

}


.about-glow-left {

  width: 650px;
  height: 650px;

  left: -300px;
  top: 5%;

  background:
    rgba(143, 76, 255, 0.17);

}


.about-glow-right {

  width: 600px;
  height: 600px;

  right: -320px;
  bottom: -250px;

  background:
    rgba(255, 79, 184, 0.11);

}


/* ==================================================
   BACKGROUND ORBITS
================================================== */

.background-orbit {

  position: absolute;

  z-index: 0;

  border-radius: 50%;

  pointer-events: none;

}


.background-orbit-one {

  width: 900px;
  height: 900px;

  left: -280px;
  top: -150px;

  border:
    1px solid
    rgba(143, 76, 255, 0.1);

  transform:
    rotate(-20deg);

}


.background-orbit-two {

  width: 1000px;
  height: 550px;

  right: -350px;
  bottom: -250px;

  border:
    1px dashed
    rgba(255, 79, 184, 0.08);

  transform:
    rotate(12deg);

}


/* ==================================================
   SMALL DESKTOP
================================================== */

@media (max-width: 1450px) {

  .about-container {

    width: min(calc(100% - 60px), 1300px);

    grid-template-columns:
      minmax(0, 0.9fr)
      minmax(0, 1.1fr);

    gap: 60px;

  }


  .about-visual {

    min-height: 550px;

  }


  .about-frame {

    width: 400px;
    height: 450px;

  }


  .couaxia-character {

    width: 620px;

  }


  .about-title {

    font-size:
      clamp(
        3.4rem,
        5vw,
        4.8rem
      );

  }


  .about-text {

    font-size: 0.97rem;

  }


  .about-links {

    gap: 45px;

  }


  .about-link {

    min-width: 160px;

  }

}


/* ==================================================
   TABLET
================================================== */

@media (max-width: 1100px) {

  .about {

    padding:
      110px
      0
      90px;

  }


  .about-container {

    width: min(calc(100% - 50px), 850px);

    grid-template-columns: 1fr;

    gap: 75px;

  }


  .about-visual {

    min-height: 570px;

  }


  .about-frame {

    width: 420px;
    height: 470px;

  }


  .couaxia-character {

    width: 650px;

    left: 48%;
    top: 51%;

  }


  .about-content {

    max-width: 680px;

    margin-inline: auto;

    text-align: center;

  }


  .section-label {

    justify-content: center;

  }


  .about-title span {

    margin-inline: auto;

  }


  .about-text {

    margin-inline: auto;

  }


  .about-links {

    justify-content: center;

  }

}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 600px) {

  .about {

    min-height: auto;

    padding:
      100px
      0
      70px;

  }


  .about-container {

    width: min(calc(100% - 32px), 500px);

    gap: 55px;

  }


  .about-visual {

    width: 100%;

    min-height: 430px;

  }


  .about-frame {

    width: min(320px, 80vw);
    height: 360px;

    border-radius: 27px;

    transform:
      rotate(-4deg);

  }


  .about-frame:hover {

    transform:
      rotate(-4deg);

  }


  .frame-line {

    border-radius: 27px;

  }


  .frame-line-one {

    left: -16px;
    top: 14px;

  }


  .frame-line-two {

    right: -17px;
    top: 17px;

  }


  .couaxia-character {

    width: 510px;

    left: 48%;
    top: 51%;

  }


  .about-image-glow {

    width: 410px;
    height: 410px;

  }


  .decoration-one {

    top: -28px;
    left: 25px;

    font-size: 2.3rem;

  }


  .decoration-two {

    right: -38px;
    top: 105px;

    font-size: 2.2rem;

  }


  .decoration-three {

    left: -30px;
    bottom: 70px;

    font-size: 1.6rem;

  }


  .decoration-four {

    right: 25px;
    top: 65px;

    font-size: 1.2rem;

  }


  .about-title {

    margin-bottom: 32px;

    font-size:
      clamp(
        2.8rem,
        14vw,
        4rem
      );

  }


  .about-text {

    font-size: 0.95rem;

  }


  .about-links {

    flex-direction: column;

    align-items: center;

    gap: 28px;

    margin-top: 40px;

  }


  .about-link {

    width: 190px;

  }

}


/* ==================================================
   SMALL MOBILE
================================================== */

@media (max-width: 400px) {

  .about-visual {

    min-height: 380px;

  }


  .about-frame {

    width: 280px;
    height: 315px;

  }


  .couaxia-character {

    width: 445px;

  }


  .about-title {

    font-size: 2.7rem;

  }

}

</style>