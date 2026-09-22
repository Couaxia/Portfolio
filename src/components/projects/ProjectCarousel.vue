<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },

  title: {
    type: String,
    required: true
  }
})

const currentIndex = ref(0)
const lightboxOpen = ref(false)


/* =========================
   CAROUSEL
========================= */

const nextImage = () => {
  if (props.images.length <= 1) return

  currentIndex.value =
    (currentIndex.value + 1) % props.images.length
}


const previousImage = () => {
  if (props.images.length <= 1) return

  currentIndex.value =
    (
      currentIndex.value -
      1 +
      props.images.length
    ) % props.images.length
}


const goToImage = (index) => {
  currentIndex.value = index
}


/* =========================
   LIGHTBOX
========================= */

const openLightbox = () => {
  if (!props.images.length) return

  lightboxOpen.value = true

  document.body.style.overflow = 'hidden'
}


const closeLightbox = () => {
  lightboxOpen.value = false

  document.body.style.overflow = ''
}


/* =========================
   KEYBOARD
========================= */

const handleKeyboard = (event) => {
  if (!lightboxOpen.value) return

  if (event.key === 'Escape') {
    closeLightbox()
  }

  if (event.key === 'ArrowRight') {
    nextImage()
  }

  if (event.key === 'ArrowLeft') {
    previousImage()
  }
}


onMounted(() => {
  window.addEventListener('keydown', handleKeyboard)
})


onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyboard)

  document.body.style.overflow = ''
})
</script>


<template>

  <!-- =========================
       CAROUSEL
  ========================== -->

  <div class="carousel">

    <!-- IMAGE -->

    <div
      v-if="images.length"
      class="carousel-viewport"
    >

      <Transition
        name="carousel-fade"
        mode="out-in"
      >

        <img
          :key="currentIndex"
          :src="images[currentIndex]"
          :alt="`${title} - capture ${currentIndex + 1}`"
          class="carousel-image"
          @click="openLightbox"
        >

      </Transition>

    </div>


    <!-- PLACEHOLDER -->

    <div
      v-else
      class="carousel-placeholder"
    >
      <span>
        Aucune capture disponible
      </span>
    </div>


    <!-- CONTROLS -->

    <template v-if="images.length > 1">

      <button
        class="carousel-arrow carousel-arrow-left"
        type="button"
        :aria-label="`Capture précédente de ${title}`"
        @click="previousImage"
      >
        ‹
      </button>


      <button
        class="carousel-arrow carousel-arrow-right"
        type="button"
        :aria-label="`Capture suivante de ${title}`"
        @click="nextImage"
      >
        ›
      </button>


      <!-- COMPTEUR -->

      <div class="carousel-counter">

        <span>
          {{ currentIndex + 1 }}
        </span>

        /

        {{ images.length }}

      </div>


      <!-- DOTS -->

      <div class="carousel-dots">

        <button
          v-for="(_, index) in images"
          :key="index"
          type="button"
          class="carousel-dot"
          :class="{ active: index === currentIndex }"
          :aria-label="`Afficher la capture ${index + 1}`"
          @click="goToImage(index)"
        ></button>

      </div>

    </template>

  </div>


  <!-- =========================
       LIGHTBOX
  ========================== -->

  <Teleport to="body">

    <Transition name="lightbox">

      <div
        v-if="lightboxOpen"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`Aperçu du projet ${title}`"
        @click.self="closeLightbox"
      >

        <!-- FERMER -->

        <button
          class="lightbox-close"
          type="button"
          aria-label="Fermer l'aperçu"
          @click="closeLightbox"
        >
          ×
        </button>


        <!-- TITRE -->

        <div class="lightbox-title">

          <span>
            {{ title }}
          </span>

          <small>
            {{ currentIndex + 1 }} / {{ images.length }}
          </small>

        </div>


        <!-- IMAGE -->

        <div class="lightbox-image-container">

          <Transition
            name="lightbox-image"
            mode="out-in"
          >

            <img
              :key="currentIndex"
              :src="images[currentIndex]"
              :alt="`${title} - capture ${currentIndex + 1}`"
              class="lightbox-image"
            >

          </Transition>

        </div>


        <!-- FLÈCHES -->

        <template v-if="images.length > 1">

          <button
            class="lightbox-arrow lightbox-arrow-left"
            type="button"
            :aria-label="`Capture précédente de ${title}`"
            @click="previousImage"
          >
            ‹
          </button>


          <button
            class="lightbox-arrow lightbox-arrow-right"
            type="button"
            :aria-label="`Capture suivante de ${title}`"
            @click="nextImage"
          >
            ›
          </button>

        </template>


        <!-- DOTS -->

        <div
          v-if="images.length > 1"
          class="lightbox-dots"
        >

          <button
            v-for="(_, index) in images"
            :key="index"
            type="button"
            class="lightbox-dot"
            :class="{ active: index === currentIndex }"
            :aria-label="`Afficher la capture ${index + 1}`"
            @click="goToImage(index)"
          ></button>

        </div>

      </div>

    </Transition>

  </Teleport>

</template>


<style scoped>

/* =========================
   CAROUSEL
========================= */

.carousel {
  position: relative;

  width: 100%;

  aspect-ratio: 16 / 10;

  border: 1px solid var(--color-border);

  border-radius: 30px;

  background: var(--color-background-card);

  overflow: hidden;
}


/* =========================
   VIEWPORT
========================= */

.carousel-viewport {
  width: 100%;
  height: 100%;

  overflow: hidden;
}


.carousel-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  cursor: zoom-in;

  transition:
    transform var(--transition-normal),
    filter var(--transition-normal);
}


.carousel-image:hover {
  transform: scale(1.015);

  filter: brightness(0.9);
}


/* =========================
   CAROUSEL TRANSITION
========================= */

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}


.carousel-fade-enter-from {
  opacity: 0;

  transform: scale(1.025);
}


.carousel-fade-leave-to {
  opacity: 0;

  transform: scale(0.985);
}


/* =========================
   PLACEHOLDER
========================= */

.carousel-placeholder {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

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

  color: var(--color-text-muted);

  font-size: 0.7rem;

  letter-spacing: 0.15em;

  text-transform: uppercase;
}


/* =========================
   CAROUSEL ARROWS
========================= */

.carousel-arrow {
  position: absolute;

  top: 50%;

  z-index: 10;

  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 50%;

  background: rgba(15, 9, 20, 0.78);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  color: white;

  font-size: 2rem;
  line-height: 1;

  transform: translateY(-50%);

  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast);
}


.carousel-arrow:hover {
  border-color: var(--color-pink);

  background: var(--color-pink);

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
   COUNTER
========================= */

.carousel-counter {
  position: absolute;

  top: 18px;
  right: 18px;

  z-index: 10;

  padding: 7px 11px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 50px;

  background: rgba(15, 9, 20, 0.75);

  backdrop-filter: blur(10px);

  color: var(--color-text-muted);

  font-size: 0.7rem;
}


.carousel-counter span {
  color: var(--color-pink-soft);

  font-weight: 700;
}


/* =========================
   CAROUSEL DOTS
========================= */

.carousel-dots {
  position: absolute;

  left: 50%;
  bottom: 18px;

  z-index: 10;

  display: flex;
  align-items: center;

  gap: 8px;

  padding: 8px 12px;

  border-radius: 50px;

  background: rgba(15, 9, 20, 0.65);

  backdrop-filter: blur(8px);

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


.carousel-dot:hover {
  background: var(--color-pink-soft);
}


.carousel-dot.active {
  width: 24px;

  border-radius: 20px;

  background: var(--color-pink);
}


/* =========================
   LIGHTBOX
========================= */

.lightbox {
  position: fixed;

  inset: 0;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 80px 100px;

  background: rgba(7, 4, 10, 0.94);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}


/* =========================
   LIGHTBOX IMAGE
========================= */

.lightbox-image-container {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}


.lightbox-image {
  display: block;

  max-width: 100%;
  max-height: calc(100vh - 160px);

  width: auto;
  height: auto;

  object-fit: contain;

  border-radius: 15px;

  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.5);
}


/* =========================
   LIGHTBOX TITLE
========================= */

.lightbox-title {
  position: absolute;

  top: 30px;
  left: 40px;

  z-index: 10;

  display: flex;
  align-items: center;

  gap: 15px;
}


.lightbox-title span {
  color: var(--color-white);

  font-size: 0.9rem;
  font-weight: 600;

  letter-spacing: 0.05em;
}


.lightbox-title small {
  color: var(--color-text-muted);

  font-size: 0.7rem;
}


/* =========================
   CLOSE
========================= */

.lightbox-close {
  position: absolute;

  top: 25px;
  right: 35px;

  z-index: 20;

  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.05);

  color: var(--color-white);

  font-size: 2rem;
  font-weight: 300;

  line-height: 1;

  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}


.lightbox-close:hover {
  border-color: var(--color-pink);

  background: var(--color-pink);

  transform: rotate(90deg);
}


/* =========================
   LIGHTBOX ARROWS
========================= */

.lightbox-arrow {
  position: absolute;

  top: 50%;

  z-index: 20;

  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.05);

  color: var(--color-white);

  font-size: 2.4rem;

  line-height: 1;

  transform: translateY(-50%);

  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}


.lightbox-arrow:hover {
  border-color: var(--color-pink);

  background: var(--color-pink);

  transform:
    translateY(-50%)
    scale(1.08);
}


.lightbox-arrow-left {
  left: 25px;
}


.lightbox-arrow-right {
  right: 25px;
}


/* =========================
   LIGHTBOX DOTS
========================= */

.lightbox-dots {
  position: absolute;

  left: 50%;
  bottom: 30px;

  z-index: 20;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 10px 15px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 50px;

  background: rgba(15, 9, 20, 0.75);

  transform: translateX(-50%);
}


.lightbox-dot {
  width: 8px;
  height: 8px;

  padding: 0;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.4);

  transition:
    width var(--transition-normal),
    background var(--transition-normal);
}


.lightbox-dot:hover {
  background: var(--color-pink-soft);
}


.lightbox-dot.active {
  width: 28px;

  border-radius: 20px;

  background: var(--color-pink);
}


/* =========================
   LIGHTBOX TRANSITION
========================= */

.lightbox-enter-active,
.lightbox-leave-active {
  transition:
    opacity 0.3s ease,
    backdrop-filter 0.3s ease;
}


.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}


.lightbox-image-enter-active,
.lightbox-image-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}


.lightbox-image-enter-from {
  opacity: 0;

  transform: scale(0.97);
}


.lightbox-image-leave-to {
  opacity: 0;

  transform: scale(1.02);
}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .lightbox {
    padding: 80px 70px;
  }


  .lightbox-arrow {
    width: 48px;
    height: 48px;
  }


  .lightbox-arrow-left {
    left: 12px;
  }


  .lightbox-arrow-right {
    right: 12px;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

  .carousel {
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


  .carousel-counter {
    top: 10px;
    right: 10px;
  }


  .carousel-dots {
    bottom: 10px;
  }


  /* LIGHTBOX */

  .lightbox {
    padding: 75px 15px;
  }


  .lightbox-image {
    max-height: calc(100vh - 150px);

    border-radius: 10px;
  }


  .lightbox-title {
    top: 25px;
    left: 20px;
  }


  .lightbox-close {
    top: 15px;
    right: 15px;

    width: 42px;
    height: 42px;

    font-size: 1.7rem;
  }


  .lightbox-arrow {
    top: auto;
    bottom: 20px;

    width: 42px;
    height: 42px;

    font-size: 1.8rem;

    transform: none;
  }


  .lightbox-arrow:hover {
    transform: scale(1.08);
  }


  .lightbox-arrow-left {
    left: 20px;
  }


  .lightbox-arrow-right {
    right: 20px;
  }


  .lightbox-dots {
    bottom: 25px;
  }

}

</style>