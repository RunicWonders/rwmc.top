<!--改了不知道哪用上了--->

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
	<div class="contact-container">
		<button class="menu-switch" @click="show = !show">
			联系我们
		</button>
		<div class="menu" v-if="show">
			<button v-for="btn in btns" @click="btn.act()" class="platform-btn">
				<i :class="`fab fa-${btn.platform}`"></i>
				<span>{{ btn.platform }}</span>
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contact-container {
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 1000;
}

.menu-switch {
	position: relative;
	padding: 12px 24px;
	background: linear-gradient(45deg, #ff8c00, #ff6b00);
	color: white;
	border: none;
	border-radius: 30px;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 5px 15px rgba(255, 140, 0, 0.3);
	letter-spacing: 1px;
	font-weight: 600;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(255, 140, 0, 0.4);
		background: linear-gradient(45deg, #ff9e00, #ff7a00);
	}

	&:active {
		transform: translateY(1px);
	}
}

.menu {
	position: absolute;
	top: -180px;
	left: 0;
	width: 100%;
	background-color: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(10px);
	border-radius: 15px;
	padding: 15px 0;
	box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;

	.platform-btn {
		width: 100%;
		padding: 10px 20px;
		border: none;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		color: #666666;
		font-weight: 500;

		i {
			margin-right: 10px;
			font-size: 1.2rem;
		}

		&:hover {
			transform: translateX(5px);
			color: #ff8c00;
			background-color: rgba(255, 255, 255, 0.3);
		}
	}
}
</style>
