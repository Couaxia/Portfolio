<script setup>
import ProjectCarousel from './ProjectCarousel.vue'

defineProps({
  project: {
    type: Object,
    required: true
  },

  index: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <article
    class="project-card"
    :class="{ reverse: index % 2 !== 0 }"
  >

    <!-- =========================
         VISUAL / CAROUSEL
    ========================== -->

    <div class="project-visual">

      <ProjectCarousel
        :images="project.images || []"
        :title="project.title"
      />

    </div>


    <!-- =========================
         INFORMATIONS
    ========================== -->

    <div class="project-content">

      <!-- Numéro -->

      <span class="project-number">
        {{ String(index + 1).padStart(2, '0') }}
      </span>


      <!-- Titre -->

      <h2 class="project-title">
        {{ project.title }}
      </h2>


      <!-- Description -->

      <p class="project-description">
        {{ project.description }}
      </p>


      <!-- =========================
           TECHNOLOGIES
      ========================== -->

      <ul
        v-if="project.technologies?.length"
        class="project-technologies"
      >

        <li
          v-for="technology in project.technologies"
          :key="technology"
        >
          {{ technology }}
        </li>

      </ul>


      <!-- =========================
           LINKS
      ========================== -->

      <div
        v-if="project.demo || project.github"
        class="project-links"
      >

        <!-- Site -->

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          <span class="project-link-text">
            Voir le site
          </span>

          <span
            class="project-link-arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>


        <!-- GitHub -->

        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          <span class="project-link-text">
            GitHub
          </span>

          <span
            class="project-link-arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>

      </div>

    </div>

  </article>
</template>

<style scoped>

/* =========================
   PROJECT CARD
========================= */

.project-card {
  display: grid;

  grid-template-columns:
    minmax(0, 1.25fr)
    minmax(300px, 0.75fr);

  align-items: center;

  gap: clamp(50px, 7vw, 110px);
}


/* =========================
   ALTERNATE PROJECTS
========================= */

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

  z-index: 1;
}


/* Cadre décoratif derrière */

.project-visual::before {
  content: '';

  position: absolute;

  inset:
    20px
    -20px
    -20px
    20px;

  z-index: -1;

  border: 1px solid rgba(255, 155, 215, 0.15);

  border-radius: 30px;

  pointer-events: none;
}


/* =========================
   CONTENT
========================= */

.project-content {
  position: relative;

  z-index: 3;
}


/* =========================
   NUMBER
========================= */

.project-number {
  display: block;

  margin-bottom: 15px;

  color: var(--color-pink);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.2em;
}


/* =========================
   TITLE
========================= */

.project-title {
  margin-bottom: 20px;

  color: var(--color-white);

  font-size: clamp(2.3rem, 4vw, 4rem);
  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.03em;
}


/* =========================
   DESCRIPTION
========================= */

.project-description {
  max-width: 470px;

  color: var(--color-text-muted);

  font-size: 1rem;

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

  padding: 0;

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

  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast);
}


.project-technologies li:hover {
  border-color: rgba(255, 155, 215, 0.35);

  background: rgba(255, 79, 184, 0.06);

  color: var(--color-white);
}


/* =========================
   LINKS
========================= */

.project-links {
  display: flex;

  flex-wrap: wrap;

  gap: 30px;

  margin-top: 35px;
}


.project-link {
  position: relative;

  display: inline-flex;
  align-items: center;

  gap: 9px;

  padding-bottom: 7px;

  color: var(--color-white);

  font-size: 0.85rem;
  font-weight: 600;
}


/* Ligne */

.project-link::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: 0;

  width: 30px;
  height: 1px;

  background: linear-gradient(
    90deg,
    var(--color-purple),
    var(--color-pink)
  );

  transition: width var(--transition-normal);
}


.project-link:hover::after {
  width: 100%;
}


/* Flèche */

.project-link-arrow {
  display: inline-block;

  color: var(--color-pink);

  transition: transform var(--transition-fast);
}


.project-link:hover .project-link-arrow {
  transform: translate(3px, -3px);
}


/* =========================
   RESPONSIVE TABLET
========================= */

@media (max-width: 850px) {

  .project-card,
  .project-card.reverse {
    grid-template-columns: 1fr;

    gap: 40px;
  }


  /*
    Sur mobile/tablette :
    image toujours avant le texte
  */

  .project-card.reverse .project-visual {
    order: 1;
  }


  .project-card.reverse .project-content {
    order: 2;
  }


  .project-content {
    max-width: 650px;
  }


  .project-visual::before {
    inset:
      12px
      -12px
      -12px
      12px;
  }

}


/* =========================
   RESPONSIVE MOBILE
========================= */

@media (max-width: 500px) {

  .project-card {
    gap: 30px;
  }


  .project-visual::before {
    display: none;
  }


  .project-title {
    font-size: 2.3rem;
  }


  .project-description {
    font-size: 0.95rem;
  }


  .project-technologies {
    margin-top: 20px;
  }


  .project-links {
    margin-top: 28px;

    gap: 22px;
  }

}

</style>