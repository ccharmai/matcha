import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home.vue';
import Terms from './Terms.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/terms', name: 'Terms', component: Terms },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
