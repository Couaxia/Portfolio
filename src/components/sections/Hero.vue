<template>
  <section id="home" class="hero">

    <!-- Décor lumineux -->
    <div class="hero-glow hero-glow-left"></div>
    <div class="hero-glow hero-glow-right"></div>

    <div class="hero-container container">

      <!-- =========================
           TEXTE
      ========================== -->

      <div class="hero-content">

        <p class="hero-intro">
          Bienvenue dans mon univers
        </p>

        <h1 class="hero-title">
          <span class="hero-name">COUAXIA</span>

          <span class="hero-subtitle">
            Développeuse Web
            <span class="hero-symbol">&</span>
            Créatrice
          </span>
        </h1>

        <p class="hero-description">
          Je crée des expériences web et des univers visuels
          en mélangeant développement, créativité et imagination.
        </p>

        <div class="hero-actions">

          <a href="#projects" class="hero-button hero-button-primary">
            Découvrir mes projets
          </a>

          <a href="#creations" class="hero-button hero-button-secondary">
            Voir mes créations
          </a>

        </div>

      </div>


      <!-- =========================
           ILLUSTRATION
      ========================== -->

      <div class="hero-visual">

        <div class="hero-visual-glow"></div>

        <div class="hero-image-placeholder">
          <span>Ton illustration</span>
        </div>

      </div>

    </div>


    <!-- Scroll -->

    <a
      href="#about"
      class="scroll-indicator"
      aria-label="Découvrir la suite"
    >
      <span>Découvrir</span>

      <div class="scroll-line"></div>
    </a>

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

  padding-top: 80px;

  overflow: hidden;
}


/* =========================
   CONTAINER
========================= */

.hero-container {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 0.9fr;

  align-items: center;

  gap: 80px;
}


/* =========================
   CONTENT
========================= */

.hero-content {
  max-width: 650px;
}


.hero-intro {
  margin-bottom: 20px;

  color: var(--color-pink-soft);

  font-size: 0.85rem;
  font-weight: 600;

  letter-spacing: 0.25em;

  text-transform: uppercase;
}


/* =========================
   TITLE
========================= */

.hero-title {
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
}


.hero-name {
  font-size: clamp(4rem, 8vw, 7.5rem);
  font-weight: 800;

  line-height: 0.9;

  letter-spacing: -0.04em;

  background: linear-gradient(
    135deg,
    var(--color-white) 20%,
    var(--color-pink-soft) 55%,
    var(--color-purple)
  );

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
}


.hero-subtitle {
  margin-top: 25px;

  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;

  line-height: 1.2;

  color: var(--color-white);
}


.hero-symbol {
  color: var(--color-pink);

  font-family: Georgia, serif;
  font-style: italic;
}


/* =========================
   DESCRIPTION
========================= */

.hero-description {
  max-width: 540px;

  margin-bottom: 35px;

  color: var(--color-text-muted);

  font-size: 1.05rem;

  line-height: 1.8;
}


/* =========================
   BUTTONS
========================= */

.hero-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 15px;
}


.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 50px;

  padding: 0 25px;

  border-radius: 50px;

  font-size: 0.9rem;
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


.hero-button-primary {
  background: linear-gradient(
    135deg,
    var(--color-purple),
    var(--color-pink)
  );

  color: var(--color-white);

  box-shadow:
    0 10px 30px rgba(143, 76, 255, 0.2);
}


.hero-button-primary:hover {
  box-shadow:
    0 15px 40px rgba(255, 79, 184, 0.25);
}


.hero-button-secondary {
  border: 1px solid var(--color-border);

  background: rgba(255, 255, 255, 0.03);

  color: var(--color-white);
}


.hero-button-secondary:hover {
  border-color: rgba(255, 155, 215, 0.5);

  background: rgba(255, 255, 255, 0.06);
}


/* =========================
   VISUAL
========================= */

.hero-visual {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 600px;
}


.hero-visual-glow {
  position: absolute;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(255, 79, 184, 0.18),
    rgba(143, 76, 255, 0.08) 50%,
    transparent 72%
  );

  filter: blur(15px);
}


/*
   Temporaire.
   On remplacera ceci par ton artwork.
*/

.hero-image-placeholder {
  position: relative;
  z-index: 2;

  width: min(420px, 100%);
  aspect-ratio: 4 / 5;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px dashed rgba(255, 255, 255, 0.2);

  border-radius: 45% 45% 30% 30%;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.01)
    );

  color: var(--color-text-muted);

  font-size: 0.8rem;

  letter-spacing: 0.15em;

  text-transform: uppercase;
}


/* =========================
   BACKGROUND GLOWS
========================= */

.hero-glow {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(120px);
}


.hero-glow-left {
  width: 400px;
  height: 400px;

  left: -250px;
  top: 15%;

  background: rgba(143, 76, 255, 0.18);
}


.hero-glow-right {
  width: 450px;
  height: 450px;

  right: -250px;
  bottom: 0;

  background: rgba(255, 79, 184, 0.12);
}


/* =========================
   SCROLL
========================= */

.scroll-indicator {
  position: absolute;

  left: 50%;
  bottom: 25px;

  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  transform: translateX(-50%);

  color: var(--color-text-muted);

  font-size: 0.65rem;

  letter-spacing: 0.18em;

  text-transform: uppercase;
}


.scroll-line {
  width: 1px;
  height: 35px;

  background: linear-gradient(
    to bottom,
    var(--color-pink-soft),
    transparent
  );

  animation: scroll-animation 2s ease-in-out infinite;
}


@keyframes scroll-animation {

  0%,
  100% {
    transform: scaleY(0.5);
    transform-origin: top;

    opacity: 0.4;
  }

  50% {
    transform: scaleY(1);
    transform-origin: top;

    opacity: 1;
  }
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .hero {
    padding-top: 110px;
    padding-bottom: 100px;
  }

  .hero-container {
    grid-template-columns: 1fr;

    gap: 40px;

    text-align: center;
  }

  .hero-content {
    max-width: 700px;

    margin-inline: auto;
  }

  .hero-description {
    margin-inline: auto;
    margin-bottom: 35px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    min-height: auto;
  }

  .hero-image-placeholder {
    width: min(350px, 80%);
  }

  .scroll-indicator {
    display: none;
  }
}


@media (max-width: 500px) {

  .hero-name {
    font-size: clamp(3.3rem, 18vw, 5rem);
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .hero-actions {
    flex-direction: column;

    width: 100%;
  }

  .hero-button {
    width: 100%;
  }

}

</style>