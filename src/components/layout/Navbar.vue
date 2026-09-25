<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import logoCouaxia from '../../assets/images/logo/Logo_couaxia.png'

import { useLanguage } from '../useLanguage'


/* =========================
   LANGUAGE
========================= */

const {
  currentLanguage,
  setLanguage
} = useLanguage()


/* =========================
   MOBILE MENU
========================= */

const isMenuOpen = ref(false)


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}


const closeMenu = () => {
  isMenuOpen.value = false
}


/* =========================
   CHANGE LANGUAGE
========================= */

const changeLanguage = (language) => {
  setLanguage(language)

  closeMenu()
}
</script>


<template>

  <header class="navbar">

    <div class="navbar-container">


      <!-- =========================
           LOGO
      ========================== -->

      <RouterLink
        to="/"
        class="navbar-logo"
        aria-label="Couaxia - Home"
        @click="closeMenu"
      >

        <img
          :src="logoCouaxia"
          alt="Couaxia"
        >

      </RouterLink>


      <!-- =========================
           DESKTOP NAVIGATION
      ========================== -->

      <nav class="navbar-navigation">


        <!-- HOME -->

        <RouterLink
          to="/"
          class="navbar-link"
        >
          {{ $t('navigation.home') }}
        </RouterLink>


        <!-- ABOUT -->

        <RouterLink
          to="/about"
          class="navbar-link"
        >
          {{ $t('navigation.about') }}
        </RouterLink>


        <!-- PROJECTS -->

        <RouterLink
          to="/projects"
          class="navbar-link"
        >
          {{ $t('navigation.projects') }}
        </RouterLink>


        <!-- CREATIONS -->

        <RouterLink
          to="/creations"
          class="navbar-link"
        >
          {{ $t('navigation.creations') }}
        </RouterLink>


        <!-- COMMISSIONS -->

        <RouterLink
          to="/commissions"
          class="navbar-link commission-link"
        >

          <span class="commission-star">
            ✦
          </span>

          {{ $t('navigation.commissions') }}

        </RouterLink>


        <!-- CONTACT -->

        <RouterLink
          to="/contact"
          class="navbar-link"
        >
          {{ $t('navigation.contact') }}
        </RouterLink>

      </nav>


      <!-- =========================
           RIGHT SIDE
      ========================== -->

      <div class="navbar-actions">


        <!-- =========================
             LANGUAGE SELECTOR
        ========================== -->

        <div
          class="language-selector"
          :aria-label="$t('language.changeLanguage')"
        >

          <button
            type="button"
            class="language-button"
            :class="{
              active: currentLanguage === 'fr'
            }"
            :aria-pressed="currentLanguage === 'fr'"
            @click="changeLanguage('fr')"
          >
            FR
          </button>


          <span class="language-separator">
            /
          </span>


          <button
            type="button"
            class="language-button"
            :class="{
              active: currentLanguage === 'en'
            }"
            :aria-pressed="currentLanguage === 'en'"
            @click="changeLanguage('en')"
          >
            EN
          </button>

        </div>


        <!-- =========================
             MOBILE BUTTON
        ========================== -->

        <button
          type="button"
          class="menu-button"
          :class="{
            active: isMenuOpen
          }"
          :aria-expanded="isMenuOpen"
          aria-label="Menu"
          @click="toggleMenu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </div>


    <!-- =========================
         MOBILE MENU
    ========================== -->

    <Transition name="mobile-menu">

      <div
        v-if="isMenuOpen"
        class="mobile-navigation"
      >

        <nav class="mobile-navigation-content">


          <!-- NUMBER -->

          <span class="mobile-menu-label">
            MENU
          </span>


          <!-- HOME -->

          <RouterLink
            to="/"
            class="mobile-link"
            @click="closeMenu"
          >

            <span class="mobile-number">
              01
            </span>

            {{ $t('navigation.home') }}

          </RouterLink>


          <!-- ABOUT -->

          <RouterLink
            to="/about"
            class="mobile-link"
            @click="closeMenu"
          >

            <span class="mobile-number">
              02
            </span>

            {{ $t('navigation.about') }}

          </RouterLink>


          <!-- PROJECTS -->

          <RouterLink
            to="/projects"
            class="mobile-link"
            @click="closeMenu"
          >

            <span class="mobile-number">
              03
            </span>

            {{ $t('navigation.projects') }}

          </RouterLink>


          <!-- CREATIONS -->

          <RouterLink
            to="/creations"
            class="mobile-link"
            @click="closeMenu"
          >

            <span class="mobile-number">
              04
            </span>

            {{ $t('navigation.creations') }}

          </RouterLink>


          <!-- COMMISSIONS -->

          <RouterLink
            to="/commissions"
            class="mobile-link mobile-commission-link"
            @click="closeMenu"
          >

            <span class="mobile-number">
              05
            </span>

            <span class="mobile-commission-star">
              ✦
            </span>

            {{ $t('navigation.commissions') }}

          </RouterLink>


          <!-- CONTACT -->

          <RouterLink
            to="/contact"
            class="mobile-link"
            @click="closeMenu"
          >

            <span class="mobile-number">
              06
            </span>

            {{ $t('navigation.contact') }}

          </RouterLink>


          <!-- =========================
               MOBILE LANGUAGE
          ========================== -->

          <div class="mobile-language">

            <span class="mobile-language-label">
              {{ $t('language.changeLanguage') }}
            </span>


            <div class="mobile-language-buttons">

              <button
                type="button"
                :class="{
                  active: currentLanguage === 'fr'
                }"
                @click="changeLanguage('fr')"
              >
                FR

                <small>
                  {{ $t('language.french') }}
                </small>

              </button>


              <button
                type="button"
                :class="{
                  active: currentLanguage === 'en'
                }"
                @click="changeLanguage('en')"
              >
                EN

                <small>
                  {{ $t('language.english') }}
                </small>

              </button>

            </div>

          </div>

        </nav>

      </div>

    </Transition>

  </header>

</template>


<style scoped>

/* =========================
   NAVBAR
========================= */

.navbar {
  position: fixed;

  top: 0;
  left: 0;

  z-index: 1000;

  width: 100%;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.06);

  background:
    rgba(15, 9, 20, 0.82);

  backdrop-filter:
    blur(18px);

  -webkit-backdrop-filter:
    blur(18px);
}


.navbar-container {
  width:
    min(
      calc(100% - 40px),
      1400px
    );

  min-height: 85px;

  margin-inline: auto;

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 35px;
}


/* =========================
   LOGO
========================= */

.navbar-logo {
  position: relative;

  z-index: 5;

  display: flex;

  align-items: center;

  flex-shrink: 0;
}


.navbar-logo img {
  display: block;

  width: 145px;
  height: auto;

  object-fit: contain;

  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}


.navbar-logo:hover img {
  transform:
    scale(1.04);

  filter:
    drop-shadow(
      0 0 12px
      rgba(255, 79, 184, 0.25)
    );
}


/* =========================
   NAVIGATION
========================= */

.navbar-navigation {
  display: flex;

  align-items: center;
  justify-content: center;

  gap:
    clamp(
      18px,
      2vw,
      35px
    );

  margin-left: auto;
}


/* =========================
   LINKS
========================= */

.navbar-link {
  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 6px;

  padding:
    8px
    0;

  color:
    var(--color-text-muted);

  font-size: 0.76rem;

  font-weight: 600;

  letter-spacing: 0.045em;

  white-space: nowrap;

  transition:
    color 0.3s ease;
}


.navbar-link::after {
  content: '';

  position: absolute;

  left: 50%;
  bottom: 0;

  width: 0;
  height: 1px;

  transform:
    translateX(-50%);

  background:
    linear-gradient(
      90deg,
      var(--color-purple),
      var(--color-pink)
    );

  transition:
    width 0.3s ease;
}


.navbar-link:hover {
  color:
    var(--color-white);
}


.navbar-link:hover::after {
  width: 100%;
}


/* =========================
   ACTIVE ROUTE
========================= */

.navbar-link.router-link-active {
  color:
    var(--color-white);
}


.navbar-link.router-link-active::after {
  width: 100%;
}


/* =========================
   HOME EXACT ACTIVE
========================= */

.navbar-link.router-link-exact-active {
  color:
    var(--color-white);
}


/* =========================
   COMMISSIONS
========================= */

.commission-link {
  color:
    var(--color-pink-soft);
}


.commission-star {
  color:
    var(--color-pink);

  font-size: 0.75rem;

  text-shadow:
    0 0 10px
    rgba(255, 79, 184, 0.6);

  animation:
    commissionTwinkle
    2.8s
    ease-in-out
    infinite;
}


.commission-link:hover,
.commission-link.router-link-active {
  color:
    var(--color-pink-soft);
}


/* =========================
   ACTIONS
========================= */

.navbar-actions {
  display: flex;

  align-items: center;

  gap: 20px;

  flex-shrink: 0;
}


/* =========================
   LANGUAGE SELECTOR
========================= */

.language-selector {
  display: flex;

  align-items: center;

  gap: 7px;

  padding:
    7px
    11px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.025);
}


.language-button {
  position: relative;

  padding: 0;

  border: none;

  outline: none;

  background: none;

  color:
    rgba(185, 174, 191, 0.55);

  font-family: inherit;

  font-size: 0.65rem;

  font-weight: 700;

  letter-spacing: 0.08em;

  cursor: pointer;

  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;
}


.language-button:hover {
  color:
    var(--color-white);
}


.language-button.active {
  color:
    var(--color-pink-soft);

  text-shadow:
    0 0 10px
    rgba(255, 79, 184, 0.3);
}


.language-separator {
  color:
    rgba(255, 255, 255, 0.18);

  font-size: 0.65rem;
}


/* =========================
   MOBILE MENU BUTTON
========================= */

.menu-button {
  display: none;

  width: 38px;
  height: 38px;

  padding: 7px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.025);

  cursor: pointer;
}


.menu-button span {
  display: block;

  width: 17px;
  height: 1px;

  margin:
    4px
    auto;

  background:
    var(--color-white);

  transform-origin: center;

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}


/* OPEN */

.menu-button.active span:nth-child(1) {
  transform:
    translateY(5px)
    rotate(45deg);
}


.menu-button.active span:nth-child(2) {
  opacity: 0;
}


.menu-button.active span:nth-child(3) {
  transform:
    translateY(-5px)
    rotate(-45deg);
}


/* =========================
   MOBILE NAVIGATION
========================= */

.mobile-navigation {
  display: none;
}


/* =========================
   ANIMATION
========================= */

@keyframes commissionTwinkle {

  0%,
  100% {
    opacity: 0.6;

    transform:
      scale(0.85);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.15);
  }

}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {

  .navbar-container {
    min-height: 78px;
  }


  .navbar-navigation {
    display: none;
  }


  .navbar-logo img {
    width: 130px;
  }


  .language-selector {
    display: none;
  }


  .menu-button {
    display: block;
  }


  /* =========================
     MOBILE MENU
  ========================= */

  .mobile-navigation {
    position: fixed;

    top: 78px;
    left: 0;

    display: block;

    width: 100%;
    height:
      calc(
        100vh - 78px
      );

    overflow-y: auto;

    background:
      rgba(15, 9, 20, 0.98);

    backdrop-filter:
      blur(20px);

    -webkit-backdrop-filter:
      blur(20px);
  }


  .mobile-navigation-content {
    width:
      min(
        calc(100% - 40px),
        600px
      );

    margin-inline: auto;

    padding:
      55px
      0
      70px;
  }


  /* =========================
     MOBILE LABEL
  ========================= */

  .mobile-menu-label {
    display: block;

    margin-bottom: 30px;

    color:
      var(--color-pink-soft);

    font-size: 0.62rem;

    font-weight: 700;

    letter-spacing: 0.22em;
  }


  /* =========================
     MOBILE LINKS
  ========================= */

  .mobile-link {
    position: relative;

    display: flex;

    align-items: center;

    gap: 18px;

    padding:
      18px
      5px;

    border-bottom:
      1px solid
      rgba(255, 255, 255, 0.06);

    color:
      var(--color-text-muted);

    font-family:
      Georgia,
      'Times New Roman',
      serif;

    font-size:
      clamp(
        1.8rem,
        7vw,
        2.7rem
      );

    font-weight: 400;

    transition:
      color 0.3s ease,
      padding-left 0.3s ease;
  }


  .mobile-link:hover,
  .mobile-link.router-link-active {
    padding-left: 12px;

    color:
      var(--color-white);
  }


  .mobile-number {
    width: 25px;

    flex-shrink: 0;

    color:
      rgba(255, 155, 215, 0.35);

    font-family: inherit;

    font-size: 0.65rem;

    font-style: italic;
  }


  /* =========================
     MOBILE COMMISSION
  ========================= */

  .mobile-commission-link {
    color:
      var(--color-pink-soft);
  }


  .mobile-commission-star {
    color:
      var(--color-pink);

    font-size: 0.75rem;

    text-shadow:
      0 0 12px
      rgba(255, 79, 184, 0.6);

    animation:
      commissionTwinkle
      2.8s
      ease-in-out
      infinite;
  }


  /* =========================
     MOBILE LANGUAGE
  ========================= */

  .mobile-language {
    margin-top: 45px;
  }


  .mobile-language-label {
    display: block;

    margin-bottom: 15px;

    color:
      var(--color-text-muted);

    font-size: 0.62rem;

    font-weight: 700;

    letter-spacing: 0.16em;

    text-transform: uppercase;
  }


  .mobile-language-buttons {
    display: grid;

    grid-template-columns:
      repeat(
        2,
        1fr
      );

    gap: 12px;
  }


  .mobile-language-buttons button {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 5px;

    padding:
      17px
      20px;

    border:
      1px solid
      rgba(255, 255, 255, 0.08);

    border-radius:
      var(--radius-small);

    background:
      rgba(255, 255, 255, 0.025);

    color:
      var(--color-text-muted);

    font-family: inherit;

    font-size: 0.75rem;

    font-weight: 700;

    cursor: pointer;

    transition:
      border-color 0.3s ease,
      background 0.3s ease,
      color 0.3s ease;
  }


  .mobile-language-buttons button small {
    color:
      rgba(185, 174, 191, 0.55);

    font-size: 0.62rem;

    font-weight: 400;
  }


  .mobile-language-buttons button:hover {
    border-color:
      rgba(255, 155, 215, 0.2);

    color:
      var(--color-white);
  }


  .mobile-language-buttons button.active {
    border-color:
      rgba(255, 155, 215, 0.35);

    background:
      rgba(255, 79, 184, 0.07);

    color:
      var(--color-pink-soft);
  }


  .mobile-language-buttons button.active small {
    color:
      var(--color-text-muted);
  }

}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 500px) {

  .navbar-container {
    width:
      calc(
        100% - 28px
      );
  }


  .navbar-logo img {
    width: 115px;
  }


  .mobile-navigation-content {
    width:
      calc(
        100% - 30px
      );

    padding-top: 40px;
  }


  .mobile-link {
    padding:
      16px
      3px;
  }

}


/* =========================
   TRANSITION
========================= */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}


.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;

  transform:
    translateY(-15px);
}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  .commission-star,
  .mobile-commission-star {
    animation: none;
  }


  .navbar-link,
  .navbar-logo img,
  .mobile-link,
  .language-button {
    transition: none;
  }

}

</style>