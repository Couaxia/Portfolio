<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },

  index: {
    type: Number,
    required: true
  }
})

const currentImage = ref(0)

/* =========================
   NEXT IMAGE
========================= */

const nextImage = () => {
  if (!props.project.images?.length) return

  currentImage.value =
    (currentImage.value + 1) % props.project.images.length
}


/* =========================
   PREVIOUS IMAGE
========================= */

const previousImage = () => {
  if (!props.project.images?.length) return

  currentImage.value =
    (
      currentImage.value -
      1 +
      props.project.images.length
    ) % props.project.images.length
}


/* =========================
   SELECT IMAGE
========================= */

const selectImage = (index) => {
  currentImage.value = index
}
</script>


<template>
  <article
    class="project-card"
    :class="{ reverse: index % 2 !== 0 }"
  >

    <!-- =========================
         CAROUSEL
    ========================== -->

    <div class="project-visual">

      <div
        v-if="project.images && project.images.length"
        class="project-carousel"
      >

        <!-- Images -->

        <div class="carousel-images">

          <Transition
            name="carousel"
            mode="out-in"
          >
            <img
              :key="currentImage"
              :src="project.images[currentImage]"
              :alt="`${project.title} - aperçu ${currentImage + 1}`"
            >
          </Transition>

        </div>


        <!-- Flèches -->

        <template v-if="project.images.length > 1">

          <button
            class="carousel-arrow carousel-arrow-left"
            type="button"
            :aria-label="`Image précédente de ${project.title}`"
            @click="previousImage"
          >
            ‹
          </button>

          <button
            class="carousel-arrow carousel-arrow-right"
            type="button"
            :aria-label="`Image suivante de ${project.title}`"
            @click="nextImage"
          >
            ›
          </button>

        </template>


        <!-- Compteur -->

        <div
          v-if="project.images.length > 1"
          class="carousel-counter"
        >
          {{ currentImage + 1 }}
          /
          {{ project.images.length }}
        </div>


        <!-- Points -->

        <div
          v-if="project.images.length > 1"
          class="carousel-dots"
        >

          <button
            v-for="(_, imageIndex) in project.images"
            :key="imageIndex"
            type="button"
            class="carousel-dot"
            :class="{ active: currentImage === imageIndex }"
            :aria-label="`Afficher l'image ${imageIndex + 1}`"
            @click="selectImage(imageIndex)"
          ></button>

        </div>

      </div>


      <!-- Pas encore d'image -->

      <div
        v-else
        class="project-placeholder"
      >

        <span class="placeholder-number">
          {{ String(index + 1).padStart(2, '0') }}
        </span>

        <span class="placeholder-text">
          Aperçu du projet
        </span>

      </div>

    </div>


    <!-- =========================
         INFORMATIONS
    ========================== -->

    <div class="project-content">

      <span class="project-number">
        {{ String(index + 1).padStart(2, '0') }}
      </span>

      <h3>
        {{ project.title }}
      </h3>

      <p class="project-description">
        {{ project.description }}
      </p>


      <!-- Technologies -->

      <ul class="project-technologies">

        <li
          v-for="technology in project.technologies"
          :key="technology"
        >
          {{ technology }}
        </li>

      </ul>


      <!-- Liens -->

      <div
        v-if="project.demo || project.github"
        class="project-links"
      >

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le site
          <span>↗</span>
        </a>

        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span>↗</span>
        </a>

      </div>

    </div>

  </article>
</template>


<style scoped>

/* =========================
   PROJECT
========================= */

.project-card {
  display: grid;

  grid-template-columns:
    minmax(0, 1.25fr)
    minmax(300px, 0.75fr);

  align-items: center;

  gap: clamp(50px, 7vw, 110px);
}


.project-card.reverse {
  grid-template-columns:
    minmax(300px, 0.75fr)
    minmax(0, 1.25fr);
}


.project-card.reverse .project-visual {
  order: 2;
}


.project-card.reverse .project-content {
  order: 1;
}


/* =========================
   VISUAL
========================= */

.project-visual {
  position: relative;
}


.project-visual::before {
  content: '';

  position: absolute;

  inset: 20px -20px -20px 20px;

  border: 1px solid rgba(255, 155, 215, 0.15);

  border-radius: 30px;

  pointer-events: none;
}


/* =========================
   CAROUSEL
========================= */

.project-carousel {
  position: relative;
  z-index: 2;

  width: 100%;

  aspect-ratio: 16 / 10;

  border: 1px solid var(--color-border);

  border-radius: 30px;

  background: var(--color-background-card);

  overflow: hidden;
}


.carousel-images {
  width: 100%;
  height: 100%;

  overflow: hidden;
}


.carousel-images img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
}


/* =========================
   IMAGE TRANSITION
========================= */

.carousel-enter-active,
.carousel-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}


.carousel-enter-from {
  opacity: 0;

  transform: scale(1.03);
}


.carousel-leave-to {
  opacity: 0;

  transform: scale(0.98);
}


/* =========================
   ARROWS
========================= */

.carousel-arrow {
  position: absolute;

  top: 50%;
  z-index: 5;

  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 50%;

  background: rgba(15, 9, 20, 0.75);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  color: var(--color-white);

  font-size: 2rem;

  line-height: 1;

  transform: translateY(-50%);

  transition:
    background var(--transition-fast),
    transform var(--transition-fast),
    border-color var(--transition-fast);
}


.carousel-arrow:hover {
  background: var(--color-pink);

  border-color: var(--color-pink);

  transform:
    translateY(-50%)
    scale(1.08);
}


.carousel-arrow-left {
  left: 18px;
}


.carousel-arrow-right {
  right: 18px;
}


/* =========================
   DOTS
========================= */

.carousel-dots {
  position: absolute;

  left: 50%;
  bottom: 18px;

  z-index: 5;

  display: flex;

  gap: 8px;

  transform: translateX(-50%);
}


.carousel-dot {
  width: 7px;
  height: 7px;

  padding: 0;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.45);

  transition:
    width var(--transition-normal),
    background var(--transition-normal);
}


.carousel-dot.active {
  width: 25px;

  border-radius: 20px;

  background: var(--color-pink);
}


/* =========================
   COUNTER
========================= */

.carousel-counter {
  position: absolute;

  top: 18px;
  right: 18px;

  z-index: 5;

  padding: 7px 11px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 50px;

  background: rgba(15, 9, 20, 0.7);

  backdrop-filter: blur(10px);

  color: var(--color-white);

  font-size: 0.7rem;

  letter-spacing: 0.08em;
}


/* =========================
   PLACEHOLDER
========================= */

.project-placeholder {
  position: relative;
  z-index: 2;

  width: 100%;

  aspect-ratio: 16 / 10;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 15px;

  border: 1px solid var(--color-border);

  border-radius: 30px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(255, 79, 184, 0.12),
      transparent 45%
    ),
    linear-gradient(
      145deg,
      rgba(143, 76, 255, 0.12),
      rgba(255, 255, 255, 0.02)
    );
}


.placeholder-number {
  color: rgba(255, 255, 255, 0.08);

  font-size: clamp(5rem, 10vw, 9rem);
  font-weight: 800;

  line-height: 1;
}


.placeholder-text {
  color: var(--color-text-muted);

  font-size: 0.7rem;

  letter-spacing: 0.2em;

  text-transform: uppercase;
}


/* =========================
   CONTENT
========================= */

.project-content {
  position: relative;

  z-index: 3;
}


.project-number {
  display: block;

  margin-bottom: 15px;

  color: var(--color-pink);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.2em;
}


.project-content h3 {
  margin-bottom: 20px;

  color: var(--color-white);

  font-size: clamp(2.3rem, 4vw, 4rem);
  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.03em;
}


.project-description {
  max-width: 470px;

  color: var(--color-text-muted);

  line-height: 1.8;
}


/* =========================
   TECHNOLOGIES
========================= */

.project-technologies {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 25px;

  list-style: none;
}


.project-technologies li {
  padding: 7px 12px;

  border: 1px solid var(--color-border);

  border-radius: 50px;

  background: rgba(255, 255, 255, 0.025);

  color: var(--color-text-muted);

  font-size: 0.7rem;

  letter-spacing: 0.04em;
}


/* =========================
   LINKS
========================= */

.project-links {
  display: flex;

  flex-wrap: wrap;

  gap: 25px;

  margin-top: 30px;
}


.project-links a {
  position: relative;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-bottom: 5px;

  color: var(--color-white);

  font-size: 0.85rem;
  font-weight: 600;
}


.project-links a::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: 0;

  width: 25px;
  height: 1px;

  background: var(--color-pink);

  transition: width var(--transition-normal);
}


.project-links a:hover::after {
  width: 100%;
}


.project-links span {
  color: var(--color-pink);
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 850px) {

  .project-card,
  .project-card.reverse {
    grid-template-columns: 1fr;

    gap: 40px;
  }


  .project-card.reverse .project-visual,
  .project-card.reverse .project-content {
    order: initial;
  }


  .project-content {
    max-width: 650px;
  }


  .project-visual::before {
    inset: 12px -12px -12px 12px;
  }

}


@media (max-width: 500px) {

  .project-visual::before {
    display: none;
  }


  .project-carousel,
  .project-placeholder {
    border-radius: 20px;
  }


  .carousel-arrow {
    width: 38px;
    height: 38px;

    font-size: 1.6rem;
  }


  .carousel-arrow-left {
    left: 10px;
  }


  .carousel-arrow-right {
    right: 10px;
  }


  .carousel-dots {
    bottom: 12px;
  }


  .carousel-counter {
    top: 10px;
    right: 10px;
  }


  .project-content h3 {
    font-size: 2.3rem;
  }

}

</style>