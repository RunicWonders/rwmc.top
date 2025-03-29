<template>
  <footer id="global-footer" class="footer">
    <p class="copyright">&copy; 2025 RunicWonders[神韵之地]. All rights reserved.</p>
    <a href="https://beian.miit.gov.cn/" 
       target="_blank" 
       rel="noopener noreferrer"
       class="beian-link">
      新ICP备2024015133号
    </a>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: var(--primary-bg);
  backdrop-filter: blur(6px);
  padding: 20px 0;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: relative;
  z-index: 50;
  margin-top: auto; /* 关键属性 */

  /* 新增响应式设计 */
  @media (max-width: 768px) {
    padding: 15px 0;
    border-radius: 0;
  }
}

.copyright {
  color: var(--secondary-text);
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
}

.beian-link {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 2px 5px;
  border-radius: 3px;

  &:hover {
    color: var(--hover-accent);
    background-color: rgba(255, 159, 67, 0.1);
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
}
</style>