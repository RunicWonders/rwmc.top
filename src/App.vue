<script setup>
import { ref, onMounted, useTemplateRef } from 'vue';
import { RouterView } from 'vue-router';
import Nav from '@views/Nav.vue';
import Footer from '@views/Footer.vue';
import imagesJsonHelper from './libs/images-json-helper';

document.documentElement.lang = 'zh-Hans-CN';
document.title = 'RunicWonders[神韵之地]';

let bgIndex = 0;
function updateBg() {
  background.value.style.backgroundImage = `url(${images.value[bgIndex++]})`;
  (bgIndex > images.value.length - 1) && (bgIndex = 0);
}

const background = useTemplateRef('background');
const images = ref([]);
onMounted(async() => {
  images.value = await imagesJsonHelper.parseJson(
    await imagesJsonHelper.fetchJson()
  );
  updateBg();
  setInterval(updateBg, 30 * 1000);
});
</script>

<template>
  <div ref="background" class="background"></div>
  <div id="main-app">
  <Nav />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
    <Footer />
    </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  transition: background-image 2s;
  overflow: hidden;
}
#main-app {
	height: 100%;
	width: 100%;
}
</style>

<style>
/* 全局样式 */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-family: 'Helvetica Neue', system-ui, sans-serif;
}

:root {
  --primary-bg: rgba(255, 255, 255, 0.95);
  --secondary-bg: #ffffff;
  --primary-text: #2c3e50;
  --secondary-text: #7f8c8d;
  --accent-color: #ff9f43;
  --hover-accent: #ffb142;
}

</style>