<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { marked } from 'marked';

const route = useRoute();
const router = useRouter();
const content = ref('');
const loading = ref(true);
const error = ref(null);
const docTitle = ref('文档');
const showNav = ref(false); // 默认不展开导航栏

// 切换移动导航显示状态
function toggleMobileNav() {
  showNav.value = !showNav.value;
}

// 在移动端导航点击后自动收起导航栏
function navigateAndCollapse(path) {
  navigateTo(path);
  toggleMobileNav();
}

// 导航栏配置
const navItems = [
  {
    title: '快速入门',
    items: [
      { title: '新手指南', path: 'getting-started' },
      { title: '服务器规则', path: 'rules' },
      { title: '常见问题', path: 'faq' },
    ]
  },
  {
    title: '游戏内容',
    items: [
      { title: '世界介绍', path: 'worlds' },
      { title: '经济系统', path: 'economy' },
      { title: '基础建设', path: 'builds' },
      { title: '特色玩法', path: 'features' },
    ]
  }
];

// 设置marked选项
marked.setOptions({
  gfm: true, // GitHub风格Markdown
  breaks: true, // 允许回车换行
  sanitize: false, // 允许HTML标签
  highlight: function(code, lang) {
    // 这里可以集成代码高亮库
    return code;
  }
});

// 导航到指定文档
function navigateTo(path) {
  if (path === 'index') {
    router.push('/doc');
  } else {
    router.push(`/doc/${path}`);
  }
}

// 检查是否为当前路径
function isActive(path) {
  if (path === 'index' && !route.params.path) {
    return true;
  }
  return path === route.params.path;
}

// 加载文档
async function loadDocument(path = 'index') {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch(`/docs/${path}.md`);
    
    if (!response.ok) {
      throw new Error(`文档加载失败: ${response.status}`);
    }
    
    const text = await response.text();
    content.value = marked(text);
    
    // 从Markdown提取标题
    const titleMatch = text.match(/^# (.+)$/m);
    if (titleMatch && titleMatch[1]) {
      docTitle.value = titleMatch[1];
    } else {
      docTitle.value = path.charAt(0).toUpperCase() + path.slice(1);
    }
    
  } catch (err) {
    console.error('文档加载错误:', err);
    error.value = err.message;
    content.value = '';
  } finally {
    loading.value = false;
  }
}

// 监听路由变化
watch(
  () => route.params.path, 
  (newPath) => {
    loadDocument(newPath || 'index');
  },
  { immediate: true }
);

onMounted(() => {
  loadDocument(route.params.path || 'index');
});
</script>

<template>
  <div id="main" class="docs-container">
    <button :class="`mobile-nav-toggle ${showNav? 'clicked': ''}`" @click="toggleMobileNav">
      <i class="mdi mdi-chevron-right"></i>
    </button>
    
    <!-- 侧边导航栏 -->
    <div class="doc-nav" :class="{ 'mobile-show': showNav }">

      <div class="nav-header">
        <h3>文档目录</h3>
      </div>
      
      <div class="nav-item" :class="{ active: !route.params.path }" @click="navigateAndCollapse('index')">
        文档首页
      </div>
      
      <div v-for="(section, sectionIndex) in navItems" :key="sectionIndex" class="nav-section">
        <div class="section-title">{{ section.title }}</div>
        <div 
          v-for="item in section.items" 
          :key="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
          @click="navigateAndCollapse(item.path)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
    
    <!-- 文档内容区域 -->
    <div class="doc-content">
      <span class="title">{{ docTitle }}</span>
      
      <div class="content">
        <div v-if="loading" class="loading">
          <span class="mdi mdi-loading mdi-spin">加载中...</span>
        </div>
        
        <div v-else-if="error" class="error">
          <p>{{ error }}</p>
          <p>请检查文档路径是否正确或<router-link to="/docs">返回文档首页</router-link></p>
        </div>
        
        <div v-else class="markdown-body" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#main {
  padding-top: 1.4rem;
}

.docs-container {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
}

.doc-nav {
  width: 240px;
  background-color: rgba(245, 245, 245, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-right: 1px solid rgba(234, 236, 239, 0.5);
  padding: 16px 0;
  overflow-y: auto;
  flex-shrink: 0;
  
  .nav-header {
    padding: 0 16px 8px;
    border-bottom: 1px solid #eaecef;
    margin-bottom: 8px;
    
    h3 {
      margin: 0;
      font-size: 1.2rem;
    }
  }
  
  .nav-section {
    margin-bottom: 16px;
    
    .section-title {
      font-weight: bold;
      padding: 8px 16px;
      font-size: 0.9rem;
      color: #606770;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
  
  .nav-item {
    padding: 6px 16px 6px 24px;
    cursor: pointer;
    color: var(--main-text);
    font-size: 0.95rem;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    &.active {
      background-color: rgba(0, 0, 0, 0.08);
      border-left: 2px solid var(--main-a);
      padding-left: 22px;
      font-weight: 500;
    }
  }
}

.doc-content {
  flex: 1;
  padding: 0 16px;
  overflow-y: auto;
  max-width: calc(100% - 240px);
  background-color: transparent;
}

.loading {
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
  color: #f56c6c;
  padding: 1rem;
  background-color: rgba(245, 108, 108, 0.1);
  border-radius: 4px;
}

.markdown-body {
  padding: 1rem 0;
  
  :deep(h1) {
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
  }
  
  :deep(h2) {
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3em;
  }
  
  :deep(pre) {
    background-color: #f6f8fa;
    border-radius: 3px;
    padding: 16px;
    overflow: auto;
  }
  
  :deep(code:not(pre>code)) {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    padding: 0.2em 0.4em;
  }
  
  :deep(img) {
    max-width: 100%;
  }
  
  :deep(table) {
    border-collapse: collapse;
    width: 100%;
    
    th, td {
      border: 1px solid #dfe2e5;
      padding: 6px 13px;
    }
    
    tr:nth-child(2n) {
      background-color: #f6f8fa;
    }
  }
  
  :deep(blockquote) {
    border-left: 4px solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
    margin: 0;
    
    > :first-child {
      margin-top: 0;
    }
    
    > :last-child {
      margin-bottom: 0;
    }
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .doc-nav {
    background-color: rgba(30, 30, 30, 0.4);
    border-right-color: rgba(51, 51, 51, 0.5);
    
    .nav-header {
      border-bottom-color: #333;
    }
    
    .nav-section .section-title {
      color: #aaa;
    }
    
    .nav-item {
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
      
      &.active {
        background-color: rgba(255, 255, 255, 0.08);
      }
    }
  }

  .markdown-body {
    :deep(pre) {
      background-color: #1e1e1e;
    }
    
    :deep(code:not(pre>code)) {
      background-color: rgba(240, 246, 252, 0.15);
    }
    
    :deep(table) {
      tr:nth-child(2n) {
        background-color: #2d333b;
      }
      
      th, td {
        border-color: #444c56;
      }
    }
    
    :deep(blockquote) {
      border-left-color: #444c56;
      color: #8b949e;
    }
  }
}

.mobile-nav-toggle {display: none;}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .docs-container {
    flex-direction: column;
    position: relative;
  }
  
  .mobile-nav-toggle {
    display: block;
    position: fixed;
    top: 4.5em;
    left: 0;
    z-index: 100;
    border: none;
    font-size: 1em;
    margin: 0;
    transition: transform 0.3s ease;

    &.clicked {
      transform: rotate(180deg);
    }
  }
  
  .doc-nav {
    width: 80vw;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    max-height: 40vh;
    transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease, left 0.3s ease;
    overflow: auto;
    background-color: rgba(40, 40, 40, 0.9);
    color: #fff;

    position: fixed;
    left: calc(-80vw - 10px);
    top: 5em;
    z-index: 99;
    
    &.mobile-show {
      left: 0;
    }
    
    .nav-header h3 {
      color: #fff;
    }
    
    .nav-item {
      color: #fff;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      &.active {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
    
    .section-title {
      color: #ccc !important;
    }
  }
  
  .doc-content {
    max-width: 100%;
    padding-top: 10px;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .mobile-nav-toggle {
    background-color: rgba(40, 40, 40, 0.8);
    color: #fff;
    
    &:hover {
      background-color: rgba(60, 60, 60, 0.9);
    }
  }
}
</style> 