<script setup>
</script>

<template>
	<div id="main" class="home-main">
		<span class="title-panel">
			<span class="logo"></span>
			<span class="title">神的陨落，韵律之起，欢迎来到祁舟！</span>
		</span>
		<p><router-link to="/join" role="button" class="join-btn">立即加入</router-link></p>
	</div>
</template>

<style lang="scss" scoped>
.home-main {
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-color: transparent !important;
	backdrop-filter: none !important;
	-webkit-backdrop-filter: none !important;
	box-shadow: none !important;
}
.logo {
	width: 64px;
}
.logo::after {
	width: 64px;
	height: 64px;
	border-radius: 8px 0 0 8px;
	left: -12px;
}
.title-panel {
	width: fit-content;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(6px);
	border-radius: 8px;
}
.title {
	color: #ffa500;
	font-size: 1.5em;
	font-weight: bold;
}
@media screen and (max-width: 768px) {
	.title {
		font-size: 20px;
	}
}
</style>