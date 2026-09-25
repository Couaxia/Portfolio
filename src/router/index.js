import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Projects from '../view/Projects.vue'
import Creations from '../view/Creations.vue'
import Commissions from '../view/Commissions.vue'
import Contact from '../view/Contact.vue'
import TermsOfService from '../view/TermsOfService.vue'


const router = createRouter({

  history: createWebHistory(),

  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },

    {
      path: '/creations',
      name: 'creations',
      component: Creations
    },

    {
      path: '/commissions',
      name: 'commissions',
      component: Commissions
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/commissions/terms',
      name: 'commission-terms',
      component: TermsOfService
    }

  ],


  /* =========================
     SCROLL TO TOP
  ========================= */

  scrollBehavior() {

    return {
      top: 0,
      behavior: 'auto'
    }

  }

})


export default router