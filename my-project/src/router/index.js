import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import contact from '../views/contact.vue'
import services from '../views/services.vue'
// import sitemap from '../sitemap.xml'
// import HomeView from "../views/HomeView.vue";

const  routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
      },
      {
          path: '/services',
          name: 'services',
          component: services
        },
        // {
        //   path: '/sitemap.xml',
        //   name: 'sitemap',
        //   component: sitemap
        // }

  
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router