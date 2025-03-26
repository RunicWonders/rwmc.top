<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Nav from '@views/Nav.vue';
// import Footer from '@views/Footer.vue';
import fetchImages from './libs/fetchImages';

document.documentElement.lang = 'zh-Hans-CN';
document.title = 'RunicWonders[神韵之地]';

let bgIndex = 0;
function updateBg() {
	background.value.style.backgroundImage = `url(/assets/images/${images.value[bgIndex++]})`;
	(bgIndex > images.value.length - 1) && (bgIndex = 0);
}

const background = ref(null);
const images = ref([]);
onMounted(async() => {
	background.value = document.querySelector('.background');
	images.value = await fetchImages();
	updateBg();
	setInterval(updateBg, 30 * 1000);
});
</script>

<template>
	<div class="background"></div>
	<Nav />
	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
	<!-- <Footer /> -->
</template>

<style scoped>
.background {
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: none;

	position: fixed;
	top: 0;
	left: 0;
	object-fit: cover;
	z-index: -1;

	transition: background-image 2s;
}
</style>