<script setup>
import { ref } from 'vue'

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

const nextImage = () => {
  if (props.images.length <= 1) return

  currentIndex.value =
    (currentIndex.value + 1) % props.images.length
}

const previousImage = () => {
  if (props.images.length <= 1) return

  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) %
    props.images.length
}

const goToImage = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="carousel">

    <!-- =========================
         IMAGE
    ========================== -->

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
        >
      </Transition>

    </div>


    <!-- =========================
         PLACEHOLDER
    ========================== -->

    <div
      v-else
      class="carousel-placeholder"
    >
      <span>Aucune capture disponible</span>
    </div>


    <!-- =========================
         CONTROLS
    ========================== -->

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


      <!-- Compteur -->

      <div class="carousel-counter">
        <span>{{ currentIndex + 1 }}</span>
        /
        {{ images.length }}
      </div>


      <!-- Points -->

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
}


/* =========================
   TRANSITION
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
   ARROWS
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
   DOTS
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

}

</style>