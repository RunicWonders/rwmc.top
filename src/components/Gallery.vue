<script setup>
import { ref, onMounted } from 'vue';
import imagesJsonHelper from '../libs/images-json-helper';

const images = ref([]);

onMounted(async() => {
	const imagesJson = await imagesJsonHelper.fetchJson();
	images.value = imagesJsonHelper.parseJson(imagesJson);
});
</script>

<template>
	<div id="main" class="gallery-container">
		<span class="title">画廊</span>
		<div>
			<span v-if="images.length === 0" class="loading-indicator">Loading...</span>
			<viewer class="gallery-content" v-else :images="images">
				<img class="gallery-item" v-for="image in images" :key="image" v-lazy="image" :alt="image" :title="image" />
			</viewer>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.gallery-container {
	padding: 30px 20px;
	max-width: 1200px;
	margin: 0 auto;
	background-color: transparent;
	margin-top: 20px;
}

.gallery-content {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 20px;
	padding: 0 10px;
}

.loading-indicator {
	display: block;
	text-align: center;
	font-size: 1.2rem;
	color: #666666;
	margin: 50px auto;
}

.gallery-item {
	position: relative;
	overflow: hidden;
	border-radius: 12px;
	background-color: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(8px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
		transition: transform 0.3s ease;
		border-radius: 8px;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}
}

@media (max-width: 768px) {
	.title {
		font-size: 1.8rem;
	}

	.gallery-content {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 15px;
		padding: 0 5px;
	}

	.gallery-item {
		border-radius: 10px;

		img {
			border-radius: 10px;
		}
	}
}
</style>
