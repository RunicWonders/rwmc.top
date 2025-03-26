<template>
  <div id="footer" class="footer">
    <p class="copyright">&copy; 2025 RunicWonders[神韵之地]. All rights reserved.</p>
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="beian-link">新ICP备2024015133号</a>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: var(--primary-bg);
  backdrop-filter: blur(6px);
  padding: 16px 0;
  border-radius: 8px 8px 0 0;
  bottom: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
}

.copyright {
  color: var(--secondary-text);
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

a.beian-link {
  color: #ff8c00 !important;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  font-weight: 500;
  &:before {
    top: 100%;
    height: 2px;
    background-color: #ff8c00 !important;
  }
  &:hover {
    color: #ffb142;
    transform: translateY(-2px);
  }
}
</style>
