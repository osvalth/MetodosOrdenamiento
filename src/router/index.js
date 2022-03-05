import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/_Home.vue';
import Burbuja from "../views/_Burbuja";

const routes = [
  { path: '/',          name: 'Home',     component: Home,  props: true},
  { path: '/burbuja',   name: 'Burbuja',  component: Burbuja, props: true },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
