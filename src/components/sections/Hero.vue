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
         CONTENT
    ========================== -->

    <div class="hero-container container">

      <!-- =========================
           TEXTE
      ========================== -->

      <div class="hero-content">

        <p class="hero-intro">
          Bienvenue dans mon univers
        </p>


        <!-- TITRE -->

        <h1 class="hero-title">

          <span class="hero-name">
            COUAXIA
          </span>

          <span class="hero-subtitle">
            Développeuse Web
            <span class="hero-symbol">&</span>
            Créatrice
          </span>

        </h1>


        <!-- DESCRIPTION -->

        <p class="hero-description">
          Je crée des expériences web et des univers visuels
          en mélangeant développement, créativité et imagination.
        </p>


        <!-- DOMAINES -->

        <div class="hero-tags">

          <span>Développement</span>

          <i></i>

          <span>Design</span>

          <i></i>

          <span>Création</span>

        </div>


        <!-- BOUTONS -->

        <div class="hero-actions">

          <RouterLink
            to="/projects"
            class="hero-button hero-button-primary"
          >
            <span>
              Mes projets web
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
              Mes créations
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
            À propos de moi
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
           ILLUSTRATION
      ========================== -->

      <div class="hero-visual">

        <!-- Halo -->

        <div class="hero-visual-glow"></div>


        <!-- Cercles décoratifs -->

        <div class="visual-circle visual-circle-one"></div>

        <div class="visual-circle visual-circle-two"></div>


        <!-- IMAGE -->

        <div class="hero-artwork">

          <!--
            PLUS TARD :

            <img
              src="/images/couaxia.png"
              alt="Illustration de Couaxia"
            >
          -->

          <div class="hero-image-placeholder">

            <span class="placeholder-small">
              Illustration
            </span>

            <span class="placeholder-name">
              Couaxia
            </span>

          </div>

        </div>


        <!-- Petit élément décoratif -->

        <div class="visual-label">

          <span class="visual-label-dot"></span>

          <span>
            Portfolio
          </span>

        </div>

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
    130px
    0
    70px;

  overflow: hidden;

  background: var(--color-background);
}


/* =========================
   BACKGROUND
========================= */

.hero-background {
  position: absolute;

  inset: 0;

  pointer-events: none;
}


.hero-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(130px);
}


.hero-glow-left {
  width: 500px;
  height: 500px;

  top: 10%;
  left: -320px;

  background: rgba(143, 76, 255, 0.2);
}


.hero-glow-right {
  width: 550px;
  height: 550px;

  right: -280px;
  bottom: -100px;

  background: rgba(255, 79, 184, 0.14);
}


/* =========================
   BACKGROUND ORBITS
========================= */

.hero-orbit {
  position: absolute;

  border: 1px solid rgba(255, 255, 255, 0.035);

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
   CONTAINER
========================= */

.hero-container {
  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(350px, 0.95fr);

  align-items: center;

  gap: clamp(50px, 8vw, 120px);
}


/* =========================
   CONTENT
========================= */

.hero-content {
  max-width: 680px;
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

  color: var(--color-pink-soft);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.25em;

  text-transform: uppercase;
}


.hero-intro::before {
  content: '';

  width: 35px;
  height: 1px;

  background: linear-gradient(
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

  margin: 0 0 30px;
}


.hero-name {
  display: inline-block;

  width: fit-content;

  font-size: clamp(4.5rem, 8vw, 8rem);
  font-weight: 800;

  line-height: 0.85;

  letter-spacing: -0.055em;

  background: linear-gradient(
    135deg,
    var(--color-white) 15%,
    var(--color-pink-soft) 55%,
    var(--color-purple)
  );

  background-clip: text;

  -webkit-background-clip: text;

  color: transparent;
}


.hero-subtitle {
  margin-top: 30px;

  color: var(--color-white);

  font-size: clamp(1.45rem, 2.5vw, 2.2rem);
  font-weight: 400;

  line-height: 1.25;

  letter-spacing: -0.02em;
}


.hero-symbol {
  margin: 0 5px;

  color: var(--color-pink);

  font-family: Georgia, serif;

  font-size: 1.15em;

  font-style: italic;
}


/* =========================
   DESCRIPTION
========================= */

.hero-description {
  max-width: 540px;

  margin-bottom: 25px;

  color: var(--color-text-muted);

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

  color: rgba(255, 255, 255, 0.5);

  font-size: 0.68rem;
  font-weight: 500;

  letter-spacing: 0.12em;

  text-transform: uppercase;
}


.hero-tags i {
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: var(--color-pink);
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


.hero-button {
  min-height: 52px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  padding: 0 25px;

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
  transform: translateY(-3px);
}


/* PRIMARY */

.hero-button-primary {
  background: linear-gradient(
    135deg,
    var(--color-purple),
    var(--color-pink)
  );

  color: var(--color-white);

  box-shadow:
    0 12px 35px rgba(143, 76, 255, 0.22);
}


.hero-button-primary:hover {
  box-shadow:
    0 16px 45px rgba(255, 79, 184, 0.28);
}


/* SECONDARY */

.hero-button-secondary {
  border: 1px solid var(--color-border);

  background: rgba(255, 255, 255, 0.025);

  color: var(--color-white);
}


.hero-button-secondary:hover {
  border-color: rgba(255, 155, 215, 0.5);

  background: rgba(255, 255, 255, 0.055);
}


/* ARROW */

.button-arrow {
  display: inline-block;

  color: currentColor;

  transition: transform var(--transition-fast);
}


.hero-button:hover .button-arrow {
  transform: translateX(4px);
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

  color: var(--color-text-muted);

  font-size: 0.75rem;
  font-weight: 500;

  letter-spacing: 0.06em;

  transition: color var(--transition-fast);
}


.hero-about::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: 0;

  width: 25px;
  height: 1px;

  background: var(--color-pink);

  transition: width var(--transition-normal);
}


.hero-about:hover {
  color: var(--color-white);
}


.hero-about:hover::after {
  width: 100%;
}


.hero-about-arrow {
  color: var(--color-pink);

  transition: transform var(--transition-fast);
}


.hero-about:hover .hero-about-arrow {
  transform: translate(3px, -3px);
}


/* =========================
   VISUAL
========================= */

.hero-visual {
  position: relative;

  min-height: 620px;

  display: flex;

  align-items: center;
  justify-content: center;
}


/* =========================
   ARTWORK GLOW
========================= */

.hero-visual-glow {
  position: absolute;

  width: 430px;
  height: 430px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(255, 79, 184, 0.2),
    rgba(143, 76, 255, 0.09) 50%,
    transparent 72%
  );

  filter: blur(18px);
}


/* =========================
   CIRCLES
========================= */

.visual-circle {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;
}


.visual-circle-one {
  width: 460px;
  height: 460px;

  border: 1px solid rgba(255, 155, 215, 0.13);
}


.visual-circle-two {
  width: 520px;
  height: 520px;

  border: 1px dashed rgba(143, 76, 255, 0.12);

  animation: visual-rotate 35s linear infinite;
}


@keyframes visual-rotate {

  to {
    transform: rotate(360deg);
  }

}


/* =========================
   ARTWORK
========================= */

.hero-artwork {
  position: relative;

  z-index: 3;

  width: min(410px, 90%);
}


/* =========================
   PLACEHOLDER
========================= */

.hero-image-placeholder {
  width: 100%;

  aspect-ratio: 4 / 5;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 10px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius:
    48%
    48%
    35%
    35%;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.045),
      rgba(255, 255, 255, 0.01)
    );

  backdrop-filter: blur(4px);

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.2);
}


.placeholder-small {
  color: var(--color-text-muted);

  font-size: 0.65rem;

  letter-spacing: 0.2em;

  text-transform: uppercase;
}


.placeholder-name {
  color: rgba(255, 255, 255, 0.2);

  font-size: 2rem;
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}


/* =========================
   VISUAL LABEL
========================= */

.visual-label {
  position: absolute;

  z-index: 5;

  right: 0;
  bottom: 100px;

  display: flex;

  align-items: center;

  gap: 8px;

  padding:
    9px
    14px;

  border: 1px solid var(--color-border);

  border-radius: 50px;

  background: rgba(15, 9, 20, 0.7);

  backdrop-filter: blur(10px);

  color: var(--color-text-muted);

  font-size: 0.65rem;

  letter-spacing: 0.15em;

  text-transform: uppercase;
}


.visual-label-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: var(--color-pink);

  box-shadow:
    0 0 10px var(--color-pink);
}


/* =========================
   RESPONSIVE TABLET
========================= */

@media (max-width: 950px) {

  .hero {
    padding:
      130px
      0
      80px;
  }


  .hero-container {
    grid-template-columns: 1fr;

    gap: 60px;

    text-align: center;
  }


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


  .hero-visual {
    min-height: 520px;
  }


  .hero-artwork {
    width: min(360px, 80%);
  }


  .visual-circle-one {
    width: 400px;
    height: 400px;
  }


  .visual-circle-two {
    width: 450px;
    height: 450px;
  }


  .visual-label {
    right: 15%;
    bottom: 50px;
  }

}


/* =========================
   RESPONSIVE MOBILE
========================= */

@media (max-width: 550px) {

  .hero {
    min-height: auto;

    padding:
      115px
      0
      70px;
  }


  .hero-container {
    gap: 50px;
  }


  .hero-intro {
    font-size: 0.65rem;

    letter-spacing: 0.18em;
  }


  .hero-intro::before {
    display: none;
  }


  .hero-name {
    font-size: clamp(3.4rem, 18vw, 5rem);
  }


  .hero-subtitle {
    margin-top: 22px;

    font-size: 1.35rem;
  }


  .hero-description {
    font-size: 0.95rem;

    line-height: 1.7;
  }


  .hero-tags {
    gap: 9px;

    font-size: 0.58rem;
  }


  .hero-actions {
    width: 100%;

    flex-direction: column;
  }


  .hero-button {
    width: 100%;
  }


  .hero-about {
    margin-top: 5px;
  }


  /* VISUAL */

  .hero-visual {
    min-height: 430px;
  }


  .hero-artwork {
    width: min(300px, 80%);
  }


  .visual-circle-one {
    width: 330px;
    height: 330px;
  }


  .visual-circle-two {
    width: 370px;
    height: 370px;
  }


  .hero-visual-glow {
    width: 320px;
    height: 320px;
  }


  .visual-label {
    right: 5%;
    bottom: 20px;
  }

}

</style>