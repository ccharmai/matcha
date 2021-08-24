import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home.vue';
import Terms from './Terms.vue';
import About from './About.vue';
import Auth from './Auth.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/terms', name: 'Terms', component: Terms },
	{ path: '/about', name: 'About', component: About },
	{ path: '/auth', name: 'Auth', component: Auth },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
