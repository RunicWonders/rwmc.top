<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const sidebarOpen = ref(false);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}

function closeSidebar(event) {
  if (sidebarOpen.value && 
      !event.target.closest('.sidebar') && 
      !event.target.closest('.menu-toggle')) {
    sidebarOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener('click', closeSidebar);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', closeSidebar);
});

const links = [
  ['加入我们', '/join'],
  ['赞助', '/sponsor'],
  ['画廊', '/gallery'],
  ['文档', '/doc'],
];
</script>

<template>
  <div id="nav">
    <router-link to="/" class="logo">RunicWonders[神韵之地]</router-link>
    
    <nav class="desktop-nav" aria-label="主要导航">
      <router-link 
        v-for="link in links" 
        :key="link[0]" 
        :to="link[1]" 
        class="nav-item"
        active-class="active"
      >
        {{ link[0] }}
      </router-link>
    </nav>
    
    <button 
      class="menu-toggle" 
      @click.stop="toggleSidebar"
      aria-label="打开菜单"
      :aria-expanded="sidebarOpen.toString()"
    >
      <i class="mdi mdi-menu"></i>
    </button>
    
    <div 
      v-if="sidebarOpen" 
      class="sidebar-overlay" 
      @click="toggleSidebar" 
      role="button"
      aria-label="关闭菜单"
    ></div>
    
    <aside 
      class="sidebar" 
      :class="{ 'open': sidebarOpen }"
      aria-label="移动菜单"
    >
      <div class="sidebar-header">
        <button 
          class="close-btn" 
          @click="toggleSidebar"
          aria-label="关闭菜单"
        >
          <i class="mdi mdi-close"></i>
        </button>
      </div>
      <nav class="sidebar-content">
        <router-link 
          v-for="link in links" 
          :key="link[0]" 
          :to="link[1]" 
          class="sidebar-item"
          @click="toggleSidebar"
          active-class="active"
        >
          {{ link[0] }}
        </router-link>
      </nav>
    </aside>
  </div>
</template>

<style scoped>
#nav {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--primary-bg);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 0 0 12px 12px;
  transition: all 0.25s ease;
}

.logo {
  color: var(--primary-text);
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease;
  max-width: 70vw;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logo:hover {
  color: var(--accent-color);
}

.desktop-nav {
  display: flex;
  gap: 1.5rem;
  padding-right: 1rem;
}

.nav-item {
  color: var(--secondary-text);
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: all 0.3s ease;
}

.nav-item.active::after {
  width: 100%;
  left: 0;
  background: var(--hover-accent);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: var(--primary-text);
  z-index: 999;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: min(300px, 85vw);
  height: 100vh;
  background: var(--secondary-bg);
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1000;
  visibility: hidden;
  transform: translateX(110%);
}

.sidebar.open {
  visibility: visible;
  transform: translateX(0);
}

.sidebar.open + .sidebar-overlay {
  opacity: 1;
  visibility: visible;
}

.sidebar-header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.close-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: var(--primary-text);
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.sidebar-item {
  padding: 1rem 0;
  text-decoration: none;
  color: var(--secondary-text);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: color 0.2s ease;
  position: relative;
}

.sidebar-item.active {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .menu-toggle {
    display: block;
  }
  
  #nav {
    padding: 0.8rem 1rem;
  }
}

@media (max-width: 480px) {
  .sidebar-content {
    padding: 0.5rem;
  }
  
  .sidebar-item {
    padding: 0.75rem 0;
    font-size: 0.95rem;
  }
  
  .menu-toggle {
    transform: scale(0.9);
  }
}
</style>