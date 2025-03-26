<script setup>
import { ref } from 'vue';
// import About from './About.vue';

const sidebarOpen = ref(false);

function toggleSidebar() {
	sidebarOpen.value = !sidebarOpen.value;
}

function closeSidebar(event) {
	if (sidebarOpen.value && !event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
		sidebarOpen.value = false;
	}
}

if (typeof window !== 'undefined') {
	window.addEventListener('click', closeSidebar);
}

const links = [
	['加入我们', '/join'],
	['赞助', '/sponsor'],
	['画廊', '/gallery'],
	['文档', '/docs'],
]
</script>

<template>
	<div id="nav">
		<router-link to="/" class="logo">RunicWonders[神韵之地]</router-link>
		
		<div class="desktop-nav">
			<router-link v-for="link in links" :key="link[0]" :to="link[1]" class="nav-item">
				{{ link[0] }}
			</router-link>
			<!-- <About /> -->
		</div>
		
		<button class="menu-toggle" @click.stop="toggleSidebar">
			<i class="mdi mdi-menu"></i>
		</button>
		
		<div class="sidebar-overlay" v-if="sidebarOpen" @click="toggleSidebar"></div>
		<div class="sidebar" :class="{ 'open': sidebarOpen }">
			<div class="sidebar-header">
				<button class="close-btn" @click="toggleSidebar">
					<i class="mdi mdi-close"></i>
				</button>
			</div>
			<div class="sidebar-content">
				<router-link v-for="link in links" :key="link[0]" :to="link[1]" class="sidebar-item"
					@click="toggleSidebar"
				>
					{{ link[0] }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
#nav {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 0 0 8px 8px;
	background-color: var(--primary-bg);
	backdrop-filter: blur(6px);
	padding: 0 16px;
	box-sizing: border-box;

	position: relative;
	z-index: 100; /** 比fancybox的z-index高的话会很难绷 */
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
	color: #333333;
	font-size: 1.2rem;
	font-weight: 600;
	text-decoration: none;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.desktop-nav {
	display: flex;
	align-items: center;
}

.nav-item {
	margin-left: 24px;
	color: #666666;
	text-decoration: none;
	font-size: 0.9rem;
	font-weight: 500;
	transition: color 0.3s ease;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

	&:hover {
		color: #ffb142;
	}
}

.menu-toggle {
	display: none;
	background: transparent;
	border: none;
	font-size: 24px;
	cursor: pointer;
	color: var(--primary-text);
}

.sidebar {
	position: fixed;
	top: 0;
	right: -280px;
	width: 280px;
	height: 100vh;
	background-color: var(--secondary-bg);
	box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
	transition: right 0.3s ease;
	z-index: 10000;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	display: none;
	overflow-y: auto;
}

.sidebar.open {
	right: 0;
}

.sidebar-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 9999;
	display: none;
}

.sidebar-header {
	padding: 16px;
	display: flex;
	justify-content: flex-end;
}

.close-btn {
	background: transparent;
	border: none;
	font-size: 24px;
	cursor: pointer;
	color: var(--secondary-text);
}

.sidebar-content {
	display: flex;
	flex-direction: column;
	padding: 0 16px;
	position: relative;
	z-index: 10001;
}

.sidebar-item {
	padding: 16px 0;
	font-size: 18px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	text-decoration: none;
	color: #666666;
	font-weight: 500;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	transition: color 0.3s ease;

	&:hover {
		color: #ffb142;
	}
}

@media screen and (max-width: 768px) {
	.desktop-nav {
		display: none;
	}

	.menu-toggle {
		display: block;
	}
	
	.sidebar {
		display: block;
	}
	
	.sidebar-overlay {
		display: block;
	}
}

@media screen and (min-width: 768px) {
	#nav {
		width: 80vw;
		left: calc(50% - 40vw);
	}
}
</style>
