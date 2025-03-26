<template>
  <div id="footer" class="footer">
    <p class="copyright">&copy; 2025 RunicWonders[神韵之地]. All rights reserved.</p>
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="beian-link">新ICP备2024015133号</a>
  </div>
</template>

<style scoped>
.footer {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  padding: 16px 0;
  border-radius: 8px 8px 0 0;
  bottom: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.copyright {
  color: #666666;
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.beian-link {
  color: #ff8c00;
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  font-weight: 500;
  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ff8c00;
    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
  &:hover {
    color: #ffb142;
    transform: translateY(-2px);
  }
}
</style>
