<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="portfolio">

    <!-- Navigation présente sur toutes les pages -->
    <Navbar />

    <!-- Page affichée par Vue Router -->
    <main class="page-content">
      <RouterView />
    </main>

    <!-- Footer présent sur toutes les pages -->
    <Footer />

  </div>
</template>

<style>
.portfolio {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;

  width: 100%;
}
</style>