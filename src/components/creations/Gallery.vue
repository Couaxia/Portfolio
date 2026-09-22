<script setup>
defineProps({
  creations: {
    type: Array,
    required: true
  }
})

defineEmits([
  'select'
])
</script>


<template>

  <!-- =========================
       EMPTY
  ========================== -->

  <div
    v-if="!creations.length"
    class="gallery-empty"
  >

    <span class="empty-symbol">
      ✦
    </span>

    <p>
      Les créations arrivent bientôt...
    </p>

  </div>


  <!-- =========================
       GALLERY
  ========================== -->

  <div
    v-else
    class="gallery"
  >

    <article
      v-for="creation in creations"
      :key="creation.id"
      class="creation-card"
      tabindex="0"
      role="button"
      :aria-label="`Ouvrir ${creation.title}`"
      @click="$emit('select', creation)"
      @keydown.enter="$emit('select', creation)"
      @keydown.space.prevent="$emit('select', creation)"
    >

      <!-- IMAGE -->

      <div class="creation-image">

        <img
          :src="creation.image"
          :alt="creation.title"
          loading="lazy"
        >


        <!-- OVERLAY -->

        <div class="creation-overlay">

          <span class="creation-view">
            Voir
            <span>↗</span>
          </span>

        </div>

      </div>


      <!-- INFORMATIONS -->

      <div class="creation-info">

        <div>

          <span class="creation-category">
            {{ creation.category }}
          </span>

          <h2>
            {{ creation.title }}
          </h2>

        </div>


        <span class="creation-arrow">
          ↗
        </span>

      </div>

    </article>

  </div>

</template>


<style scoped>

/* =========================
   GALLERY
========================= */

.gallery {
  columns: 3;

  column-gap: 25px;
}


/* =========================
   CARD
========================= */

.creation-card {
  width: 100%;

  display: inline-block;

  margin-bottom: 40px;

  break-inside: avoid;

  cursor: pointer;

  outline: none;
}


/* =========================
   IMAGE
========================= */

.creation-image {
  position: relative;

  overflow: hidden;

  border: 1px solid var(--color-border);

  border-radius: 22px;

  background: var(--color-background-card);
}


.creation-image img {
  display: block;

  width: 100%;
  height: auto;

  transition:
    transform 0.6s ease,
    filter 0.4s ease;
}


/* =========================
   OVERLAY
========================= */

.creation-overlay {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  background:
    linear-gradient(
      180deg,
      transparent 30%,
      rgba(15, 9, 20, 0.8)
    );

  opacity: 0;

  transition:
    opacity var(--transition-normal);
}


.creation-view {
  display: flex;

  align-items: center;

  gap: 8px;

  padding:
    10px
    17px;

  border: 1px solid rgba(255, 255, 255, 0.18);

  border-radius: 50px;

  background: rgba(15, 9, 20, 0.7);

  backdrop-filter: blur(10px);

  color: var(--color-white);

  font-size: 0.75rem;
  font-weight: 600;

  transform: translateY(10px);

  transition:
    transform var(--transition-normal);
}


/* =========================
   HOVER
========================= */

.creation-card:hover .creation-image img,
.creation-card:focus-visible .creation-image img {
  transform: scale(1.035);

  filter: brightness(0.75);
}


.creation-card:hover .creation-overlay,
.creation-card:focus-visible .creation-overlay {
  opacity: 1;
}


.creation-card:hover .creation-view,
.creation-card:focus-visible .creation-view {
  transform: translateY(0);
}


/* =========================
   INFORMATION
========================= */

.creation-info {
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;

  padding:
    17px
    5px
    0;
}


.creation-category {
  display: block;

  margin-bottom: 6px;

  color: var(--color-pink-soft);

  font-size: 0.62rem;
  font-weight: 600;

  letter-spacing: 0.13em;

  text-transform: uppercase;
}


.creation-info h2 {
  color: var(--color-white);

  font-size: 1rem;
  font-weight: 600;
}


.creation-arrow {
  color: var(--color-pink);

  transition: transform var(--transition-fast);
}


.creation-card:hover .creation-arrow {
  transform: translate(3px, -3px);
}


/* =========================
   EMPTY
========================= */

.gallery-empty {
  min-height: 350px;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 15px;

  border: 1px dashed var(--color-border);

  border-radius: 25px;

  color: var(--color-text-muted);
}


.empty-symbol {
  color: var(--color-pink-soft);

  font-size: 2rem;
}


.gallery-empty p {
  font-size: 0.85rem;

  letter-spacing: 0.08em;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .gallery {
    columns: 2;
  }

}


@media (max-width: 550px) {

  .gallery {
    columns: 1;
  }


  .creation-card {
    margin-bottom: 30px;
  }

}

</style>