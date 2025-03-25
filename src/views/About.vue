<script setup>
import { ref } from 'vue';
const show = ref(false);

function openExternal(url) {
	return window.open(url, '_blank', 'noopener');
}

const btns = [
	{ platform: 'bilibili', act: () => openExternal('https://space.bilibili.com/3546731581016245') },
	{ platform: 'qq', act: () => openExternal('https://qm.qq.com/q/azJH50kCKA') }
]
</script>

<template>
	<button class="menu-switch" @click="show = !show">
		联系我们
		<div class="menu" v-if="show">
			<button v-for="btn in btns" @click="btn.act()">
				<i :class="`fab fa-${btn.platform}`"></i>
			</button>
		</div>
	</button>
</template>

<style lang="scss" scoped>
.menu-switch {
	position: relative;
	border: 0;
	background: none;
	font-size: 1em;

	&>.menu {
		position: absolute;
		top: 120%;
		left: 0;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 60px;
		&>button {
			border: none;
			font-size: 20px;
			background-color: transparent;
		}
	}
}
</style>
