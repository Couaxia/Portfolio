import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Projects from '../view/Projects.vue'
import Creations from '../view/Creations.vue'
import Contact from '../view/Contact.vue'

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
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],

  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router