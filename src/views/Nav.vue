<script setup>
// import Docker from './Docker.vue';
import About from './About.vue';
</script>

<template>
	<div id="nav">
		<router-link to="/" class="logo">RunicWonders[神韵之地]</router-link>
		<router-link to="/join" class="nav-item">加入我们</router-link>
		<router-link to="/gallery" class="nav-item">画廊</router-link>
		<About />
	</div>
</template>

<style scoped>
#nav {
	width: 100%;
	display: flex;
	justify-content: space-between;

	border-radius: 0 0 8px 8px;
	background-color: var(--bg-color);
	backdrop-filter: blur(6px);
}
.logo::after {
	border-radius: 0 0 0 8px;
}
</style>