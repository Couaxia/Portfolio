<script setup>
import projects from '../../data/projects.js'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section
    id="projects"
    class="projects"
  >
    <div class="projects-container container">

      <!-- =========================
           HEADER
      ========================== -->

      <header class="projects-header">

        <p class="section-label">
          Portfolio
        </p>

        <h1>
          Mes projets
          <span>web.</span>
        </h1>

        <p class="projects-introduction">
          Quelques projets que j'ai imaginés et développés,
          de la conception de l'interface jusqu'à leur mise en ligne.
        </p>

      </header>

      <!-- =========================
           PROJECTS
      ========================== -->

      <div class="projects-list">

        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
        />

      </div>

    </div>
  </section>
</template>

<style scoped>

/* =========================
   PROJECTS
========================= */

.projects {
  position: relative;

  min-height: 100vh;

  padding: 160px 0 140px;

  background: var(--color-background);

  overflow: hidden;
}


/* Petite lumière décorative */

.projects::before {
  content: '';

  position: absolute;

  top: 100px;
  right: -250px;

  width: 500px;
  height: 500px;

  border-radius: 50%;

  background: rgba(143, 76, 255, 0.1);

  filter: blur(130px);

  pointer-events: none;
}


/* =========================
   CONTAINER
========================= */

.projects-container {
  position: relative;

  z-index: 2;
}


/* =========================
   HEADER
========================= */

.projects-header {
  max-width: 700px;

  margin-bottom: 110px;
}


.section-label {
  margin-bottom: 15px;

  color: var(--color-pink-soft);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.25em;

  text-transform: uppercase;
}


.projects-header h1 {
  margin-bottom: 25px;

  color: var(--color-white);

  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 700;

  line-height: 0.95;

  letter-spacing: -0.04em;
}


.projects-header h1 span {
  color: var(--color-pink-soft);
}


.projects-introduction {
  max-width: 550px;

  color: var(--color-text-muted);

  font-size: 1rem;

  line-height: 1.8;
}


/* =========================
   PROJECTS LIST
========================= */

.projects-list {
  display: flex;

  flex-direction: column;

  gap: 150px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .projects {
    padding: 130px 0 100px;
  }


  .projects-header {
    margin-bottom: 80px;
  }


  .projects-list {
    gap: 110px;
  }

}


@media (max-width: 500px) {

  .projects {
    padding: 110px 0 80px;
  }


  .projects-header {
    margin-bottom: 60px;
  }


  .projects-header h1 {
    font-size: 3rem;
  }


  .projects-list {
    gap: 90px;
  }

}

</style>