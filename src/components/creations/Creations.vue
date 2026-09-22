<script setup>
import { computed, ref } from 'vue'

import creations from '../../data/creations.js'

import Gallery from './Gallery.vue'
import LightBox from './LightBox.vue'


/* =========================
   FILTERS
========================= */

const activeCategory = ref('Tout')


const categories = computed(() => {

  const creationCategories = creations
    .map((creation) => creation.category)
    .filter(Boolean)

  return [
    'Tout',
    ...new Set(creationCategories)
  ]

})


const filteredCreations = computed(() => {

  if (activeCategory.value === 'Tout') {
    return creations
  }

  return creations.filter(
    (creation) =>
      creation.category === activeCategory.value
  )

})


/* =========================
   LIGHTBOX
========================= */

const selectedCreation = ref(null)


const openCreation = (creation) => {
  selectedCreation.value = creation
}


const closeCreation = () => {
  selectedCreation.value = null
}
</script>


<template>

  <section class="creations">

    <!-- =========================
         BACKGROUND
    ========================== -->

    <div class="creations-glow"></div>


    <div class="creations-container container">

      <!-- =========================
           HEADER
      ========================== -->

      <header class="creations-header">

        <p class="section-label">
          Galerie
        </p>


        <h1>
          Mes
          <span>créations.</span>
        </h1>


        <p class="creations-introduction">
          Un espace dédié à mon univers artistique :
          illustrations, emotes, designs et autres créations
          réalisées au fil de mes projets.
        </p>

      </header>


      <!-- =========================
           FILTERS
      ========================== -->

      <nav
        v-if="categories.length > 1"
        class="creation-filters"
        aria-label="Filtrer les créations"
      >

        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="filter-button"
          :class="{
            active: activeCategory === category
          }"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>

      </nav>


      <!-- =========================
           GALLERY
      ========================== -->

      <Gallery
        :creations="filteredCreations"
        @select="openCreation"
      />

    </div>


    <!-- =========================
         LIGHTBOX
    ========================== -->

    <LightBox
      v-if="selectedCreation"
      :creation="selectedCreation"
      @close="closeCreation"
    />

  </section>

</template>


<style scoped>

/* =========================
   CREATIONS
========================= */

.creations {
  position: relative;

  min-height: 100vh;

  padding:
    160px
    0
    120px;

  overflow: hidden;

  background: var(--color-background);
}


/* =========================
   BACKGROUND
========================= */

.creations-glow {
  position: absolute;

  top: 150px;
  left: -300px;

  width: 600px;
  height: 600px;

  border-radius: 50%;

  background: rgba(255, 79, 184, 0.09);

  filter: blur(150px);

  pointer-events: none;
}


/* =========================
   CONTAINER
========================= */

.creations-container {
  position: relative;

  z-index: 2;
}


/* =========================
   HEADER
========================= */

.creations-header {
  max-width: 750px;

  margin-bottom: 65px;
}


.section-label {
  margin-bottom: 15px;

  color: var(--color-pink-soft);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.25em;

  text-transform: uppercase;
}


.creations-header h1 {
  margin-bottom: 25px;

  color: var(--color-white);

  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 700;

  line-height: 0.95;

  letter-spacing: -0.04em;
}


.creations-header h1 span {
  color: var(--color-pink-soft);
}


.creations-introduction {
  max-width: 580px;

  color: var(--color-text-muted);

  font-size: 1rem;

  line-height: 1.8;
}


/* =========================
   FILTERS
========================= */

.creation-filters {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  margin-bottom: 55px;
}


.filter-button {
  min-height: 40px;

  padding:
    0
    18px;

  border: 1px solid var(--color-border);

  border-radius: 50px;

  background: rgba(255, 255, 255, 0.02);

  color: var(--color-text-muted);

  font-size: 0.7rem;
  font-weight: 600;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  transition:
    color var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}


.filter-button:hover {
  color: var(--color-white);

  border-color: rgba(255, 155, 215, 0.4);

  transform: translateY(-2px);
}


.filter-button.active {
  border-color: transparent;

  background: linear-gradient(
    135deg,
    var(--color-purple),
    var(--color-pink)
  );

  color: var(--color-white);

  box-shadow:
    0 8px 25px rgba(143, 76, 255, 0.18);
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .creations {
    padding:
      130px
      0
      100px;
  }


  .creations-header {
    margin-bottom: 50px;
  }


  .creation-filters {
    margin-bottom: 40px;
  }

}


@media (max-width: 500px) {

  .creations {
    padding:
      110px
      0
      80px;
  }


  .creations-header h1 {
    font-size: 3rem;
  }


  .creation-filters {
    gap: 8px;
  }


  .filter-button {
    padding:
      0
      14px;

    font-size: 0.62rem;
  }

}

</style>