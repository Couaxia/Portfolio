<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>


<template>

  <div class="portfolio">

    <Navbar />


    <main class="page-content">

      <RouterView v-slot="{ Component, route }">

        <Transition
          name="page"
          mode="out-in"
        >

          <component
            :is="Component"
            :key="route.path"
          />

        </Transition>

      </RouterView>

    </main>


    <Footer />

  </div>

</template>


<style>

/* =========================
   PORTFOLIO
========================= */

.portfolio {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}


/* =========================
   PAGE CONTENT
========================= */

.page-content {
  flex: 1;

  width: 100%;

  overflow: hidden;
}


/* =========================
   PAGE TRANSITION
========================= */

.page-enter-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s ease,
    filter 0.45s ease;
}


.page-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    filter 0.25s ease;
}


/* PAGE QUI ARRIVE */

.page-enter-from {
  opacity: 0;

  transform:
    translateY(18px);

  filter:
    blur(4px);
}


.page-enter-to {
  opacity: 1;

  transform:
    translateY(0);

  filter:
    blur(0);
}


/* PAGE QUI PART */

.page-leave-from {
  opacity: 1;

  transform:
    translateY(0);

  filter:
    blur(0);
}


.page-leave-to {
  opacity: 0;

  transform:
    translateY(-10px);

  filter:
    blur(3px);
}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  .page-enter-active,
  .page-leave-active {
    transition:
      opacity 0.15s ease;
  }


  .page-enter-from,
  .page-leave-to {
    transform: none;

    filter: none;
  }

}

</style>