<!-- 没用上 awa -->

<script setup>

function openExternal(url) {
	return window.open(url, '_blank', 'noopener');
}

const btns = [
	{platform: 'bilibili', act: () => openExternal('https://space.bilibili.com/3546731581016245')},
	{platform: 'qq', act: () => openExternal('https://qm.qq.com/q/azJH50kCKA')}
]
</script>

<template>
	<div id="docker">
		<span>
			<button v-for="btn in btns" @click="btn.act">
				<i :class="`fab fa-${btn.platform}`"></i>
			</button>
		</span>
	</div>
</template>

<style lang="scss" scoped>
button {
	border: none;
	background-color: transparent;

	color: #fff;
	padding: 4px;
}
</style>