<script setup>
import {
  onMounted,
  onUnmounted
} from 'vue'


defineProps({
  creation: {
    type: Object,
    required: true
  }
})


const emit = defineEmits([
  'close'
])


/* =========================
   KEYBOARD
========================= */

const handleKeyboard = (event) => {

  if (event.key === 'Escape') {
    emit('close')
  }

}


onMounted(() => {

  document.body.style.overflow = 'hidden'

  window.addEventListener(
    'keydown',
    handleKeyboard
  )

})


onUnmounted(() => {

  document.body.style.overflow = ''

  window.removeEventListener(
    'keydown',
    handleKeyboard
  )

})
</script>


<template>

  <Teleport to="body">

    <Transition
      name="lightbox"
      appear
    >

      <div
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="creation.title"
        @click.self="$emit('close')"
      >

        <!-- =========================
             CLOSE
        ========================== -->

        <button
          type="button"
          class="lightbox-close"
          aria-label="Fermer"
          @click="$emit('close')"
        >
          ×
        </button>


        <!-- =========================
             CONTENT
        ========================== -->

        <div class="lightbox-content">

          <!-- IMAGE -->

          <div class="lightbox-image">

            <img
              :src="creation.image"
              :alt="creation.title"
            >

          </div>


          <!-- INFORMATION -->

          <div class="lightbox-information">

            <span class="lightbox-category">
              {{ creation.category }}
            </span>

            <h2>
              {{ creation.title }}
            </h2>

            <p v-if="creation.description">
              {{ creation.description }}
            </p>

          </div>

        </div>

      </div>

    </Transition>

  </Teleport>

</template>


<style scoped>

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

  padding: 70px;

  background: rgba(7, 4, 10, 0.95);

  backdrop-filter: blur(18px);

  -webkit-backdrop-filter: blur(18px);

  overflow-y: auto;
}


/* =========================
   CONTENT
========================= */

.lightbox-content {
  width: min(1200px, 100%);

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    300px;

  align-items: center;

  gap: 55px;
}


/* =========================
   IMAGE
========================= */

.lightbox-image {
  display: flex;

  align-items: center;
  justify-content: center;

  min-width: 0;
}


.lightbox-image img {
  display: block;

  max-width: 100%;

  max-height: calc(100vh - 140px);

  width: auto;
  height: auto;

  object-fit: contain;

  border-radius: 15px;

  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.45);
}


/* =========================
   INFORMATION
========================= */

.lightbox-information {
  max-width: 300px;
}


.lightbox-category {
  display: block;

  margin-bottom: 12px;

  color: var(--color-pink-soft);

  font-size: 0.65rem;
  font-weight: 600;

  letter-spacing: 0.18em;

  text-transform: uppercase;
}


.lightbox-information h2 {
  margin-bottom: 20px;

  color: var(--color-white);

  font-size: clamp(2rem, 4vw, 3.5rem);

  line-height: 1;

  letter-spacing: -0.03em;
}


.lightbox-information p {
  color: var(--color-text-muted);

  font-size: 0.9rem;

  line-height: 1.7;
}


/* =========================
   CLOSE
========================= */

.lightbox-close {
  position: fixed;

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

  transition:
    transform var(--transition-normal),
    background var(--transition-normal),
    border-color var(--transition-normal);
}


.lightbox-close:hover {
  border-color: var(--color-pink);

  background: var(--color-pink);

  transform: rotate(90deg);
}


/* =========================
   TRANSITION
========================= */

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}


.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 850px) {

  .lightbox {
    align-items: flex-start;

    padding:
      90px
      25px
      50px;
  }


  .lightbox-content {
    grid-template-columns: 1fr;

    gap: 30px;
  }


  .lightbox-image img {
    max-height: 70vh;
  }


  .lightbox-information {
    max-width: 600px;
  }

}


@media (max-width: 500px) {

  .lightbox {
    padding:
      80px
      15px
      40px;
  }


  .lightbox-close {
    top: 15px;
    right: 15px;

    width: 42px;
    height: 42px;
  }


  .lightbox-image img {
    border-radius: 10px;
  }

}

</style>