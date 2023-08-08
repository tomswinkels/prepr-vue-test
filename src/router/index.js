// ./src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Import the detailed article page
import ArticleView from "@/views/ArticleView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // Include routing to the detailed article page with the slug from the URL
    {
      path: '/:slug',
      name: 'article',
      component: ArticleView
    }
  ]
})

export default router
