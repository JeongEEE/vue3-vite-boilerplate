import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/Index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
  ]
})
export default router;