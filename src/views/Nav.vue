<script setup>
import { ref } from 'vue';
// import Docker from './Docker.vue';
import About from './About.vue';

const sidebarOpen = ref(false);

function toggleSidebar() {
	sidebarOpen.value = !sidebarOpen.value;
}

// 点击侧边栏之外的区域关闭侧边栏
function closeSidebar(event) {
	if (sidebarOpen.value && !event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
		sidebarOpen.value = false;
	}
}

// 添加点击监听器
if (typeof window !== 'undefined') {
	window.addEventListener('click', closeSidebar);
}
</script>

<template>
	<div id="nav">
		<router-link to="/" class="logo">RunicWonders[神韵之地]</router-link>
		
		<!-- 桌面端导航 -->
		<div class="desktop-nav">
			<router-link to="/join" class="nav-item">加入我们</router-link>
			<router-link to="/gallery" class="nav-item">画廊</router-link>
			<router-link to="/docs" class="nav-item">文档</router-link>
			<About />
		</div>
		
		<!-- 移动端汉堡菜单按钮 -->
		<button class="menu-toggle" @click.stop="toggleSidebar">
			<i class="mdi mdi-menu"></i>
		</button>
		
		<!-- 侧边栏导航 -->
		<div class="sidebar-overlay" v-if="sidebarOpen" @click="toggleSidebar"></div>
		<div class="sidebar" :class="{ 'open': sidebarOpen }">
			<div class="sidebar-header">
				<button class="close-btn" @click="toggleSidebar">
					<i class="mdi mdi-close"></i>
				</button>
			</div>
			<div class="sidebar-content">
				<router-link to="/" class="sidebar-item" @click="toggleSidebar">首页</router-link>
				<router-link to="/join" class="sidebar-item" @click="toggleSidebar">加入我们</router-link>
				<router-link to="/gallery" class="sidebar-item" @click="toggleSidebar">画廊</router-link>
				<router-link to="/docs" class="sidebar-item" @click="toggleSidebar">文档</router-link>
				<router-link to="/sponsor" class="sidebar-item" @click="toggleSidebar">赞助我们</router-link>
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
	background-color: var(--bg-color);
	backdrop-filter: blur(6px);
	padding: 0 16px;
	box-sizing: border-box;

	position: fixed;
	z-index: 10000;
}
.logo::after {
	border-radius: 0 0 0 8px;
}

.desktop-nav {
	display: flex;
	align-items: center;
}

.nav-item {
	margin-left: 16px;
}

/* 汉堡菜单按钮 */
.menu-toggle {
	display: none;
	background: transparent;
	border: none;
	font-size: 24px;
	cursor: pointer;
	color: var(--main-text);
}

/* 侧边栏样式 */
.sidebar {
	position: fixed;
	top: 0;
	right: -280px;
	width: 280px;
	height: 100vh;
	background-color: rgba(30, 30, 30, 0.85);
	box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
	transition: right 0.3s ease;
	z-index: 10000;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	display: none; /* 默认隐藏 */
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
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 9999;
	display: none; /* 默认隐藏 */
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
	color: #fff;
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
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	text-decoration: none;
	color: #fff;
	font-weight: 500;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
	position: relative;
	z-index: 10001;
}

/* 媒体查询 - 移动端样式 */
@media screen and (max-width: 768px) {
	.desktop-nav {
		display: none;
	}

	.menu-toggle {
		display: block;
	}
	
	/* 在移动端显示侧边栏和遮罩 */
	.sidebar {
		display: block;
	}
	
	.sidebar-overlay {
		display: block;
	}
}

@media (prefers-color-scheme: light) {
	.sidebar {
		background-color: rgba(50, 50, 50, 0.9);
	}
	
	.sidebar-item {
		color: #fff;
	}
}
</style>