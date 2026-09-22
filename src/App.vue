<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

import HeroSection from './components/sections/Hero.vue'
import AboutSection from './components/sections/About.vue'
import ProjectsSection from './components/sections/Projects.vue'
import CreationsSection from './components/sections/Creations.vue'
import ContactSection from './components/sections/Contact.vue'
</script>

<template>
  <div class="portfolio">
    <Navbar />

    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CreationsSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>