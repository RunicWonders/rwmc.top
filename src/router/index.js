import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{path: '/', component: () => import('@components/Home.vue')},
	// {path: '/about', component: () => import('@components/About.vue')},
	{path: '/join', component: () => import('@components/Join.vue')},
	{path: '/gallery', component: () => import('@components/Gallery.vue')},
	{path: '/sponsor', component: () => import('@components/Sponsor.vue')},
	{path: '/doc', component: () => import('@components/Docs.vue')},
	{path: '/doc/:path', component: () => import('@components/Docs.vue')},
	{path: '/404', component: () => import('@components/404.vue')},
	{path: '/:pathMatch(.*)*', redirect: '/404'}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;