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

      <div class="projects-header">

        <p class="section-label">
          Portfolio
        </p>

        <h2>
          Mes projets
          <span>web.</span>
        </h2>

        <p class="projects-introduction">
          Quelques projets que j'ai imaginés et développés,
          de la conception de l'interface jusqu'à leur mise en ligne.
        </p>

      </div>


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

  padding: 140px 0;

  background: var(--color-background);
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


.projects-header h2 {
  margin-bottom: 25px;

  color: var(--color-white);

  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 700;

  line-height: 0.95;

  letter-spacing: -0.04em;
}


.projects-header h2 span {
  color: var(--color-pink-soft);
}


.projects-introduction {
  max-width: 550px;

  color: var(--color-text-muted);

  font-size: 1rem;

  line-height: 1.8;
}


/* =========================
   LIST
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
    padding: 100px 0;
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
    padding: 80px 0;
  }


  .projects-header {
    margin-bottom: 60px;
  }


  .projects-header h2 {
    font-size: 3rem;
  }


  .projects-list {
    gap: 90px;
  }

}

</style>