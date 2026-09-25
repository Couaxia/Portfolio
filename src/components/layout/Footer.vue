<script setup>
const currentYear = new Date().getFullYear()


/* ==================================================
   SCROLL TO TOP
================================================== */

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>


<template>

  <footer class="footer">

    <!-- =========================
         BACKGROUND
    ========================== -->

    <div class="footer-glow footer-glow-left"></div>
    <div class="footer-glow footer-glow-right"></div>

    <div class="footer-orbit footer-orbit-one"></div>
    <div class="footer-orbit footer-orbit-two"></div>


    <!-- STARS -->

    <span class="footer-star footer-star-one">
      ✦
    </span>

    <span class="footer-star footer-star-two">
      ✧
    </span>

    <span class="footer-star footer-star-three">
      ✦
    </span>


    <!-- =========================
         CONTAINER
    ========================== -->

    <div class="footer-container">


      <!-- =========================
           TOP
      ========================== -->

      <div class="footer-top">


        <!-- =========================
             BRAND
        ========================== -->

        <div class="footer-brand">

          <p class="footer-label">
            Développeuse Web & Créatrice
          </p>


          <RouterLink
            to="/"
            class="footer-logo"
          >
            COUAXIA
          </RouterLink>


          <p class="footer-description">

            Entre développement web et création artistique,
            je donne vie à mes idées et à mon univers.

          </p>

        </div>


        <!-- =========================
             NAVIGATION
        ========================== -->

        <div class="footer-column">

          <p class="footer-column-title">
            Navigation
          </p>


          <nav class="footer-navigation">

            <RouterLink to="/">
              Accueil
            </RouterLink>


            <RouterLink to="/about">
              À propos
            </RouterLink>


            <RouterLink to="/projects">
              Projets Web
            </RouterLink>


            <RouterLink to="/creations">
              Créations
            </RouterLink>


            <RouterLink to="/contact">
              Contact
            </RouterLink>

          </nav>

        </div>


        <!-- =========================
             SOCIALS
        ========================== -->

        <div class="footer-column">

          <p class="footer-column-title">
            Me retrouver
          </p>


          <div class="footer-socials">


            <!-- TWITCH -->

            <a
              href="https://www.twitch.tv/couaxia"
              target="_blank"
              rel="noopener noreferrer"
            >

              Twitch

              <span>
                ↗
              </span>

            </a>


            <!-- INSTAGRAM -->

            <a
              href="https://www.instagram.com/couaxia/"
              target="_blank"
              rel="noopener noreferrer"
            >

              Instagram

              <span>
                ↗
              </span>

            </a>


            <!-- X -->

            <a
              href="https://x.com/couaxia"
              target="_blank"
              rel="noopener noreferrer"
            >

              X / Twitter

              <span>
                ↗
              </span>

            </a>


            <!-- DISCORD -->

            <a
              href="https://discord.com/invite/YeCXm8JZ7e"
              target="_blank"
              rel="noopener noreferrer"
            >

              Discord

              <span>
                ↗
              </span>

            </a>

          </div>

        </div>


        <!-- =========================
             CONTACT
        ========================== -->

        <div class="footer-column footer-contact">

          <p class="footer-column-title">
            Un projet ?
          </p>


          <p class="footer-contact-text">

            Une idée, une collaboration ou simplement
            envie de discuter ?

          </p>


          <a
            href="mailto:couaxia@hotmail.com"
            class="footer-email"
          >

            couaxia@hotmail.com

            <span>
              ↗
            </span>

          </a>

        </div>

      </div>


      <!-- =========================
           SEPARATOR
      ========================== -->

      <div class="footer-separator">

        <span class="separator-line"></span>


        <span class="separator-star">
          ✦
        </span>


        <span class="separator-line"></span>

      </div>


      <!-- =========================
           BOTTOM
      ========================== -->

      <div class="footer-bottom">


        <!-- COPYRIGHT -->

        <p class="footer-copyright">

          © {{ currentYear }} Couaxia

        </p>


        <!-- MADE BY -->

        <p class="footer-made">

          Imaginé & développé avec

          <span>
            ♡
          </span>

          par Couaxia

        </p>


        <!-- BACK TO TOP -->

        <button
          type="button"
          class="back-top"
          aria-label="Retour en haut de la page"
          @click="scrollToTop"
        >

          Retour en haut

          <span>
            ↑
          </span>

        </button>

      </div>

    </div>


    <!-- =========================
         BIG COUAXIA
    ========================== -->

    <div
      class="footer-big-name"
      aria-hidden="true"
    >
      COUAXIA
    </div>

  </footer>

</template>


<style scoped>

/* ==================================================
   FOOTER
================================================== */

.footer {
  position: relative;

  width: 100%;

  padding:
    90px
    0
    35px;

  background:
    #0b0710;

  overflow: hidden;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.06);
}


/* ==================================================
   CONTAINER
================================================== */

.footer-container {
  position: relative;

  z-index: 5;

  width:
    min(
      calc(100% - 80px),
      1500px
    );

  margin-inline: auto;
}


/* ==================================================
   TOP
================================================== */

.footer-top {
  display: grid;

  grid-template-columns:
    minmax(280px, 1.5fr)
    minmax(130px, 0.6fr)
    minmax(130px, 0.6fr)
    minmax(220px, 0.9fr);

  gap:
    clamp(
      40px,
      5vw,
      90px
    );

  align-items: start;
}


/* ==================================================
   BRAND
================================================== */

.footer-brand {
  max-width: 420px;
}


.footer-label {
  margin-bottom: 17px;

  color:
    var(--color-pink-soft);

  font-size: 0.67rem;

  font-weight: 600;

  letter-spacing: 0.23em;

  text-transform: uppercase;
}


/* ==================================================
   LOGO
================================================== */

.footer-logo {
  position: relative;

  display: inline-block;

  margin-bottom: 22px;

  font-size:
    clamp(
      3rem,
      5vw,
      5.2rem
    );

  font-weight: 800;

  line-height: 0.9;

  letter-spacing: -0.055em;

  background:
    linear-gradient(
      90deg,
      #ffffff 0%,
      #ff9bd7 45%,
      #8f4cff 100%
    );

  background-clip: text;

  -webkit-background-clip: text;

  color: transparent;

  transition:
    transform
    var(--transition-normal);
}


.footer-logo:hover {
  transform:
    translateX(5px);
}


/* ==================================================
   DESCRIPTION
================================================== */

.footer-description {
  max-width: 390px;

  color:
    var(--color-text-muted);

  font-size: 0.9rem;

  line-height: 1.8;
}


/* ==================================================
   COLUMNS
================================================== */

.footer-column {
  display: flex;

  flex-direction: column;

  align-items: flex-start;
}


.footer-column-title {
  position: relative;

  margin-bottom: 24px;

  color:
    var(--color-white);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.18em;

  text-transform: uppercase;
}


.footer-column-title::after {
  content: '';

  position: absolute;

  left: 0;

  bottom: -9px;

  width: 25px;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-pink),
      var(--color-purple)
    );
}


/* ==================================================
   NAVIGATION
================================================== */

.footer-navigation {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 13px;
}


.footer-navigation a {
  position: relative;

  color:
    var(--color-text-muted);

  font-size: 0.85rem;

  transition:
    color
    var(--transition-fast),
    transform
    var(--transition-fast);
}


.footer-navigation a:hover {
  color:
    var(--color-white);

  transform:
    translateX(4px);
}


.footer-navigation .router-link-exact-active {
  color:
    var(--color-pink-soft);
}


/* ==================================================
   SOCIALS
================================================== */

.footer-socials {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 13px;
}


.footer-socials a {
  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 8px;

  color:
    var(--color-text-muted);

  font-size: 0.85rem;

  transition:
    color
    var(--transition-fast),
    transform
    var(--transition-fast);
}


.footer-socials a:hover {
  color:
    var(--color-white);

  transform:
    translateX(4px);
}


/* ==================================================
   SOCIAL ARROW
================================================== */

.footer-socials a span {
  color:
    var(--color-pink);

  font-size: 0.7rem;

  opacity: 0;

  transform:
    translate(
      -4px,
      4px
    );

  transition:
    opacity
    var(--transition-fast),
    transform
    var(--transition-fast);
}


.footer-socials a:hover span {
  opacity: 1;

  transform:
    translate(
      0,
      0
    );
}


/* ==================================================
   CONTACT
================================================== */

.footer-contact-text {
  max-width: 270px;

  margin-bottom: 20px;

  color:
    var(--color-text-muted);

  font-size: 0.85rem;

  line-height: 1.7;
}


.footer-email {
  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding-bottom: 7px;

  color:
    var(--color-white);

  font-size: 0.88rem;

  font-weight: 600;
}


.footer-email::after {
  content: '';

  position: absolute;

  left: 0;

  bottom: 0;

  width: 35%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-pink),
      var(--color-purple)
    );

  transition:
    width
    var(--transition-normal);
}


.footer-email:hover::after {
  width: 100%;
}


.footer-email span {
  color:
    var(--color-pink);

  transition:
    transform
    var(--transition-normal);
}


.footer-email:hover span {
  transform:
    translate(
      3px,
      -3px
    );
}


/* ==================================================
   SEPARATOR
================================================== */

.footer-separator {
  position: relative;

  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  gap: 20px;

  margin:
    65px
    0
    30px;
}


.separator-line {
  width: 100%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.12),
      transparent
    );
}


.separator-star {
  color:
    var(--color-pink);

  font-size: 0.85rem;

  text-shadow:
    0
    0
    12px
    rgba(255, 79, 184, 0.8);

  animation:
    separator-star-pulse
    3s
    ease-in-out
    infinite;
}


@keyframes separator-star-pulse {

  0%,
  100% {
    opacity: 0.5;

    transform:
      rotate(0deg)
      scale(0.8);
  }


  50% {
    opacity: 1;

    transform:
      rotate(90deg)
      scale(1.15);
  }

}


/* ==================================================
   BOTTOM
================================================== */

.footer-bottom {
  position: relative;

  z-index: 5;

  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  gap: 30px;

  color:
    rgba(185, 174, 191, 0.65);

  font-size: 0.72rem;
}


.footer-copyright {
  justify-self: start;
}


.footer-made {
  justify-self: center;
}


.footer-made span {
  display: inline-block;

  margin:
    0
    3px;

  color:
    var(--color-pink);

  animation:
    heart-beat
    2s
    ease-in-out
    infinite;
}


@keyframes heart-beat {

  0%,
  100% {
    transform:
      scale(1);
  }


  50% {
    transform:
      scale(1.25);
  }

}


/* ==================================================
   BACK TO TOP
================================================== */

.back-top {
  justify-self: end;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 0;

  border: none;

  background: none;

  color:
    var(--color-text-muted);

  font-size: 0.72rem;

  cursor: pointer;

  transition:
    color
    var(--transition-fast);
}


.back-top span {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  width: 28px;

  height: 28px;

  border:
    1px solid
    rgba(255, 255, 255, 0.12);

  border-radius: 50%;

  color:
    var(--color-pink-soft);

  transition:
    transform
    var(--transition-normal),
    border-color
    var(--transition-normal),
    background
    var(--transition-normal);
}


.back-top:hover {
  color:
    var(--color-white);
}


.back-top:hover span {
  transform:
    translateY(-4px);

  border-color:
    rgba(255, 79, 184, 0.5);

  background:
    rgba(255, 79, 184, 0.08);
}


/* ==================================================
   BIG BACKGROUND NAME
================================================== */

.footer-big-name {
  position: absolute;

  z-index: 0;

  left: 50%;

  bottom: -0.18em;

  transform:
    translateX(-50%);

  color:
    rgba(255, 255, 255, 0.018);

  font-size:
    clamp(
      9rem,
      23vw,
      26rem
    );

  font-weight: 900;

  line-height: 0.7;

  letter-spacing: -0.08em;

  white-space: nowrap;

  user-select: none;

  pointer-events: none;
}


/* ==================================================
   GLOWS
================================================== */

.footer-glow {
  position: absolute;

  border-radius: 50%;

  filter:
    blur(120px);

  pointer-events: none;
}


.footer-glow-left {
  width: 450px;

  height: 450px;

  left: -250px;

  bottom: -200px;

  background:
    rgba(143, 76, 255, 0.13);
}


.footer-glow-right {
  width: 500px;

  height: 500px;

  right: -300px;

  top: -200px;

  background:
    rgba(255, 79, 184, 0.1);
}


/* ==================================================
   ORBITS
================================================== */

.footer-orbit {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;
}


.footer-orbit-one {
  width: 700px;

  height: 350px;

  right: -250px;

  top: -150px;

  border:
    1px solid
    rgba(255, 79, 184, 0.07);

  transform:
    rotate(-15deg);
}


.footer-orbit-two {
  width: 650px;

  height: 650px;

  left: -400px;

  bottom: -500px;

  border:
    1px dashed
    rgba(143, 76, 255, 0.06);
}


/* ==================================================
   STARS
================================================== */

.footer-star {
  position: absolute;

  z-index: 2;

  pointer-events: none;

  text-shadow:
    0
    0
    15px
    currentColor;

  animation:
    footer-star-floating
    4s
    ease-in-out
    infinite;
}


.footer-star-one {
  left: 4%;

  top: 25%;

  color:
    var(--color-purple);

  font-size: 1.3rem;
}


.footer-star-two {
  right: 7%;

  top: 20%;

  color:
    var(--color-pink-soft);

  font-size: 1.8rem;

  animation-delay: -1.7s;
}


.footer-star-three {
  left: 48%;

  top: 12%;

  color:
    var(--color-pink);

  font-size: 0.7rem;

  animation-delay: -0.8s;
}


@keyframes footer-star-floating {

  0%,
  100% {
    opacity: 0.35;

    transform:
      translateY(0)
      rotate(0deg);
  }


  50% {
    opacity: 1;

    transform:
      translateY(-8px)
      rotate(15deg);
  }

}


/* ==================================================
   TABLET
================================================== */

@media (max-width: 1050px) {

  .footer-container {
    width:
      min(
        calc(100% - 50px),
        850px
      );
  }


  .footer-top {
    grid-template-columns:
      1fr
      1fr;

    gap:
      55px
      50px;
  }


  .footer-brand {
    grid-column:
      1 / -1;

    max-width: 550px;
  }

}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 700px) {

  .footer {
    padding:
      70px
      0
      30px;
  }


  .footer-container {
    width:
      min(
        calc(100% - 36px),
        500px
      );
  }


  .footer-top {
    grid-template-columns:
      1fr
      1fr;

    gap:
      50px
      30px;
  }


  .footer-brand {
    grid-column:
      1 / -1;
  }


  .footer-contact {
    grid-column:
      1 / -1;
  }


  .footer-logo {
    font-size:
      clamp(
        3.4rem,
        17vw,
        5rem
      );
  }


  .footer-separator {
    margin:
      55px
      0
      28px;
  }


  .footer-bottom {
    grid-template-columns:
      1fr;

    justify-items: center;

    gap: 16px;

    text-align: center;
  }


  .footer-copyright,
  .footer-made,
  .back-top {
    justify-self: center;
  }


  .footer-big-name {
    font-size: 30vw;

    bottom: 0;
  }

}


/* ==================================================
   SMALL MOBILE
================================================== */

@media (max-width: 420px) {

  .footer-top {
    grid-template-columns:
      1fr;

    gap: 42px;
  }


  .footer-brand,
  .footer-contact {
    grid-column: auto;
  }


  .footer-logo {
    font-size: 3.4rem;
  }

}

</style>