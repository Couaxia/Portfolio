<script setup>
import { ref } from 'vue'
import logoCouaxia from '../../assets/images/logo/Logo_couaxia.png'


/* =========================
   MENU MOBILE
========================= */

const menuOpen = ref(false)


const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}


const closeMenu = () => {
  menuOpen.value = false
}
</script>


<template>

  <header class="header">

    <nav class="navbar container">


      <!-- =========================
           LOGO
      ========================== -->

      <RouterLink
        to="/"
        class="navbar-logo"
        aria-label="Retour à l'accueil"
        @click="closeMenu"
      >

        <img
          :src="logoCouaxia"
          alt="Couaxia"
          class="navbar-logo-image"
          draggable="false"
        >

      </RouterLink>


      <!-- =========================
           NAVIGATION
      ========================== -->

      <ul
        class="navbar-links"
        :class="{ active: menuOpen }"
      >

        <li>
          <RouterLink
            to="/"
            @click="closeMenu"
          >
            Accueil
          </RouterLink>
        </li>


        <li>
          <RouterLink
            to="/about"
            @click="closeMenu"
          >
            À propos
          </RouterLink>
        </li>


        <li>
          <RouterLink
            to="/projects"
            @click="closeMenu"
          >
            Projets Web
          </RouterLink>
        </li>


        <li>
          <RouterLink
            to="/creations"
            @click="closeMenu"
          >
            Créations
          </RouterLink>
        </li>


        <li>
          <RouterLink
            to="/contact"
            @click="closeMenu"
          >
            Contact
          </RouterLink>
        </li>

      </ul>


      <!-- =========================
           MENU MOBILE
      ========================== -->

      <button
        class="navbar-toggle"
        :class="{ active: menuOpen }"
        type="button"
        aria-label="Ouvrir le menu"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >

        <span></span>
        <span></span>
        <span></span>

      </button>

    </nav>

  </header>

</template>


<style scoped>

/* =========================
   HEADER
========================= */

.header {
  position: fixed;

  top: 0;
  left: 0;

  z-index: 1000;

  width: 100%;

  background:
    rgba(15, 9, 20, 0.82);

  backdrop-filter:
    blur(15px);

  -webkit-backdrop-filter:
    blur(15px);

  border-bottom:
    1px solid
    var(--color-border);
}


/* =========================
   NAVBAR
========================= */

.navbar {
  position: relative;

  height: 80px;

  display: flex;

  align-items: center;
  justify-content: space-between;
}


/* =========================
   LOGO
========================= */

.navbar-logo {
  position: relative;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  width: 175px;
  height: 80px;

  flex-shrink: 0;

  overflow: visible;
}


.navbar-logo-image {
  position: absolute;

  left: -34px;
  top: 50%;

  display: block;

  width: 205px;
  max-width: none;

  height: auto;

  object-fit: contain;

  transform:
    translateY(-50%);

  transform-origin: center;

  user-select: none;

  pointer-events: none;

  filter:
    drop-shadow(
      0 0 7px
      rgba(255, 79, 184, 0.15)
    );

  transition:
    transform var(--transition-normal),
    filter var(--transition-normal);
}


/* =========================
   LOGO HOVER
========================= */

.navbar-logo:hover
.navbar-logo-image {
  transform:
    translateY(-50%)
    scale(1.04);

  filter:
    drop-shadow(
      0 0 10px
      rgba(255, 79, 184, 0.35)
    )
    drop-shadow(
      0 0 18px
      rgba(143, 76, 255, 0.18)
    );
}


/* =========================
   LINKS
========================= */

.navbar-links {
  display: flex;

  align-items: center;

  gap: 35px;

  margin: 0;
  padding: 0;

  list-style: none;
}


.navbar-links a {
  position: relative;

  padding:
    10px
    0;

  color:
    var(--color-text-muted);

  font-size: 0.9rem;

  font-weight: 500;

  letter-spacing: 0.05em;

  transition:
    color
    var(--transition-fast);
}


.navbar-links a:hover {
  color:
    var(--color-white);
}


/* =========================
   TRAIT SOUS LE LIEN
========================= */

.navbar-links a::after {
  content: '';

  position: absolute;

  left: 50%;
  bottom: 2px;

  width: 0;
  height: 2px;

  border-radius: 10px;

  background:
    linear-gradient(
      90deg,
      var(--color-purple),
      var(--color-pink)
    );

  transform:
    translateX(-50%);

  transition:
    width
    var(--transition-normal);
}


.navbar-links a:hover::after {
  width: 100%;
}


/* =========================
   PAGE ACTIVE
========================= */

.navbar-links
a.router-link-exact-active {
  color:
    var(--color-white);
}


.navbar-links
a.router-link-exact-active::after {
  width: 100%;
}


/* =========================
   BURGER
========================= */

.navbar-toggle {
  display: none;

  width: 35px;
  height: 30px;

  padding: 0;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 6px;

  border: none;

  background: transparent;

  cursor: pointer;
}


.navbar-toggle span {
  display: block;

  width: 26px;
  height: 2px;

  border-radius: 10px;

  background:
    var(--color-white);

  transition:
    transform var(--transition-normal),
    opacity var(--transition-normal);
}


/* =========================
   BURGER → X
========================= */

.navbar-toggle.active
span:nth-child(1) {
  transform:
    translateY(8px)
    rotate(45deg);
}


.navbar-toggle.active
span:nth-child(2) {
  opacity: 0;
}


.navbar-toggle.active
span:nth-child(3) {
  transform:
    translateY(-8px)
    rotate(-45deg);
}


/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {

  .navbar-logo {
    width: 160px;
  }


  .navbar-logo-image {
    left: -30px;

    width: 190px;
  }


  .navbar-links {
    gap: 24px;
  }


  .navbar-links a {
    font-size: 0.84rem;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

  .navbar {
    height: 70px;
  }


  /* LOGO */

  .navbar-logo {
    width: 145px;
    height: 70px;
  }


  .navbar-logo-image {
    left: -27px;

    width: 175px;
  }


  /* BURGER */

  .navbar-toggle {
    display: flex;
  }


  /* MENU */

  .navbar-links {
    position: absolute;

    top: 70px;
    left: 0;

    width: 100%;

    padding:
      35px
      20px;

    flex-direction: column;

    gap: 25px;

    background:
      rgba(15, 9, 20, 0.98);

    border-bottom:
      1px solid
      var(--color-border);

    opacity: 0;

    visibility: hidden;

    transform:
      translateY(-15px);

    transition:
      opacity var(--transition-normal),
      visibility var(--transition-normal),
      transform var(--transition-normal);
  }


  .navbar-links.active {
    opacity: 1;

    visibility: visible;

    transform:
      translateY(0);
  }


  .navbar-links a {
    font-size: 1rem;
  }

}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 420px) {

  .navbar-logo {
    width: 130px;
  }


  .navbar-logo-image {
    left: -24px;

    width: 158px;
  }


  .navbar-links {
    padding:
      30px
      20px;
  }

}

</style>