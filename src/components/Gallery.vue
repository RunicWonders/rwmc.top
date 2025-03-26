<script setup>
import { ref, onMounted } from 'vue';
import fetchImages from '../libs/fetchImages';
import('../libs/fancybox');

const images = ref([]);

onMounted(async() => {
	images.value = await fetchImages();
});
</script>

<template>
	<div id="main">
		<span class="title">画廊</span>
			<span v-if="images.length === 0" class="mdi mdi-loading mdi-spin">Loading...</span>
			<a v-else data-fancybox="gallery" :data-caption="image" :href="`/assets/images/${image}`" v-for="image in images">
				<img v-lazy="`/assets/images/${image}`" :alt="image" :title="image" />
			</a>
	</div>
</template>

<style lang="scss" scoped>
#main {
	padding-left: 0.8em;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	
	& img {
		max-height: 400px;
		border-radius: 8px;
		box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
	}
	
	& a {
		margin: 8px 0;
		display: inline-block;
	}
}

@media screen and (max-width: 768px) {
	#main img {
		max-width: 90%;
		max-height: auto;
	}
}
</style>