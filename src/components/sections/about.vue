<template>
  <section id="about" class="about">

    <!-- Décoration de fond -->
    <div class="about-glow"></div>

    <div class="about-container container">

      <!-- =========================
           IMAGE
      ========================== -->

      <div class="about-visual">

        <div class="about-frame">

          <!-- Temporaire : remplacé plus tard par ton image -->
          <div class="about-image-placeholder">
            <span>Ton illustration</span>
          </div>

          <!-- Petites décorations -->
          <span class="decoration decoration-one">✦</span>
          <span class="decoration decoration-two">✦</span>
          <span class="decoration decoration-three">✧</span>

        </div>

      </div>


      <!-- =========================
           TEXTE
      ========================== -->

      <div class="about-content">

        <p class="section-label">
          À propos
        </p>

        <h2 class="about-title">
          Hello, moi c'est
          <span>Couaxia !</span>
        </h2>

        <div class="about-text">

          <p>
            Passionnée par la création, j'aime donner vie à mes idées
            aussi bien à travers le développement web que le dessin.
          </p>

          <p>
            Je crée des sites internet, des interfaces et différents
            projets numériques tout en développant mon propre univers
            artistique.
          </p>

          <p>
            Ce portfolio rassemble ces deux facettes :
            <strong>mes projets web et mes créations.</strong>
          </p>

        </div>

        <div class="about-links">

          <a href="#projects" class="about-link">
            <span>01.</span>
            Projets Web
          </a>

          <a href="#creations" class="about-link">
            <span>02.</span>
            Créations
          </a>

        </div>

      </div>

    </div>

  </section>
</template>


<style scoped>

/* =========================
   ABOUT
========================= */

.about {
  position: relative;

  display: flex;
  align-items: center;

  padding: 130px 0;

  background: var(--color-background-soft);

  overflow: hidden;
}


/* =========================
   CONTAINER
========================= */

.about-container {
  position: relative;
  z-index: 2;

  display: grid;
  grid-template-columns: 0.85fr 1fr;

  align-items: center;

  gap: 100px;
}


/* =========================
   VISUAL
========================= */

.about-visual {
  display: flex;
  justify-content: center;
}


.about-frame {
  position: relative;

  width: min(420px, 100%);
}


/* Cadre derrière l'image */

.about-frame::before {
  content: '';

  position: absolute;

  top: 25px;
  left: -25px;

  width: 100%;
  height: 100%;

  border: 1px solid rgba(255, 155, 215, 0.3);

  border-radius: 35px;

  transform: rotate(-4deg);
}


/* Deuxième cadre */

.about-frame::after {
  content: '';

  position: absolute;

  top: -18px;
  right: -18px;

  width: 70%;
  height: 70%;

  border-top: 2px solid var(--color-purple);
  border-right: 2px solid var(--color-pink);

  border-radius: 0 35px 0 0;

  opacity: 0.6;
}


/* Temporaire */

.about-image-placeholder {
  position: relative;
  z-index: 2;

  width: 100%;

  aspect-ratio: 4 / 5;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 35px;

  border: 1px solid var(--color-border);

  background:
    linear-gradient(
      145deg,
      rgba(143, 76, 255, 0.12),
      rgba(255, 79, 184, 0.06)
    );

  color: var(--color-text-muted);

  font-size: 0.75rem;

  letter-spacing: 0.15em;

  text-transform: uppercase;

  overflow: hidden;
}


/* =========================
   DECORATIONS
========================= */

.decoration {
  position: absolute;
  z-index: 3;

  color: var(--color-pink-soft);

  pointer-events: none;

  animation: float-decoration 4s ease-in-out infinite;
}


.decoration-one {
  top: -30px;
  left: 30px;

  font-size: 1.6rem;
}


.decoration-two {
  right: -35px;
  bottom: 80px;

  font-size: 2rem;

  animation-delay: 1s;
}


.decoration-three {
  left: -35px;
  bottom: 30px;

  color: var(--color-purple);

  font-size: 1.2rem;

  animation-delay: 2s;
}


@keyframes float-decoration {

  0%,
  100% {
    transform: translateY(0) rotate(0);
  }

  50% {
    transform: translateY(-10px) rotate(10deg);
  }

}


/* =========================
   CONTENT
========================= */

.about-content {
  max-width: 600px;
}


.section-label {
  margin-bottom: 15px;

  color: var(--color-pink-soft);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.25em;

  text-transform: uppercase;
}


.about-title {
  margin-bottom: 35px;

  color: var(--color-white);

  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;

  line-height: 1.05;

  letter-spacing: -0.03em;
}


.about-title span {
  display: block;

  background: linear-gradient(
    90deg,
    var(--color-purple),
    var(--color-pink-soft)
  );

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
}


/* =========================
   TEXT
========================= */

.about-text {
  display: flex;
  flex-direction: column;

  gap: 18px;

  color: var(--color-text-muted);

  font-size: 1rem;

  line-height: 1.8;
}


.about-text strong {
  color: var(--color-white);

  font-weight: 600;
}


/* =========================
   LINKS
========================= */

.about-links {
  display: flex;

  gap: 35px;

  margin-top: 40px;
}


.about-link {
  position: relative;

  display: flex;
  align-items: center;

  gap: 10px;

  padding-bottom: 7px;

  color: var(--color-white);

  font-size: 0.9rem;
  font-weight: 500;
}


.about-link span {
  color: var(--color-pink);

  font-size: 0.7rem;
}


.about-link::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: 0;

  width: 30px;
  height: 1px;

  background: var(--color-pink);

  transition: width var(--transition-normal);
}


.about-link:hover::after {
  width: 100%;
}


/* =========================
   BACKGROUND
========================= */

.about-glow {
  position: absolute;

  width: 500px;
  height: 500px;

  top: 50%;
  left: -350px;

  border-radius: 50%;

  background: rgba(143, 76, 255, 0.12);

  filter: blur(120px);

  transform: translateY(-50%);

  pointer-events: none;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .about {
    padding: 100px 0;
  }

  .about-container {
    grid-template-columns: 1fr;

    gap: 70px;
  }

  .about-content {
    max-width: 650px;

    margin-inline: auto;

    text-align: center;
  }

  .about-frame {
    width: min(350px, 80%);
  }

  .about-links {
    justify-content: center;
  }

}


@media (max-width: 500px) {

  .about {
    padding: 80px 0;
  }

  .about-container {
    gap: 55px;
  }

  .about-frame {
    width: 80%;
  }

  .about-frame::before {
    top: 15px;
    left: -15px;
  }

  .about-frame::after {
    top: -12px;
    right: -12px;
  }

  .about-title {
    font-size: 2.5rem;
  }

  .about-text {
    font-size: 0.95rem;
  }

  .about-links {
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }

}

</style>