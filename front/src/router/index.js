import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
