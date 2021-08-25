import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home.vue';
import Terms from './Terms.vue';
import About from './About.vue';
import Auth from './Auth.vue';
import Guide from './Guide.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/terms', name: 'Terms', component: Terms },
	{ path: '/about', name: 'About', component: About },
	{ path: '/auth', name: 'Auth', component: Auth },
	{ path: '/guide', name: 'Guide', component: Guide },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
