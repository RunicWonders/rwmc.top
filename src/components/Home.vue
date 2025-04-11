<script setup>
// import Footer from '@views/Footer.vue';
</script>

<template>
  <div id="main" class="main">
    <div class="title-panel">
      <div class="logo-container">
        <span class="logo"></span>
      </div>
      <div class="title-content">
        <h1 class="title">神韵之地</h1>
        <h2 class="subtitle">神的陨落，韵律之起</h2>
        <h2 class="subtitle">欢迎来到祁舟！</h2>
        <p class="description">探索神秘的世界，开启属于你的冒险之旅。</p>
        <div class="button-container">
          <router-link to="/join" role="button" class="join-btn">立即加入</router-link>
        </div>
      </div>
    </div>

    <div class="features-panel">
      <h3 class="section-title">我们的特色</h3>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-title">😲</div>
          <h4 class="feature-title">高度优化的核心</h4>
          <p class="feature-desc">采用Paper下游的国产Leaves核心，保留99%原版特性+高度优化</p>
        </div>
        <div class="feature-card">
          <div class="feature-title">🤗</div>
          <h4 class="feature-title">多样玩法</h4>
          <p class="feature-desc">多个服务器多个玩法供玩家们选择</p>
        </div>
        <div class="feature-card">
          <div class="feature-title">🥰</div>
          <h4 class="feature-title">完美互通</h4>
          <p class="feature-desc">是使用Geyser+Geyser扩展完美适配基岩版玩家</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow-y: visible;
  backdrop-filter: none;
  background-color: transparent !important;
  padding: 6px 0;
}

.title-panel {
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 30px;
  max-width: 1200px;
  width: 90%;
  background-color: var(--primary-bg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 20px;
  margin-top: 20px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }

  flex-direction: row;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 20px 15px;
    margin-top: 20px;
  }
}

.logo-container {
  flex-shrink: 0;
  position: relative;

  .logo {
    display: block;
    width: 280px;
    height: 280px;
    background: url('https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/logo.png') center/cover;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 768px) {
    .logo {
      width: 200px;
      height: 200px;
    }
  }
}

.title-content {
  text-align: left;
  flex: 1;
}

.title {
  margin: 0 0 10px 0;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  font-size: 2.8rem;
  font-weight: 800;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
}

.subtitle {
  margin: 0 0 15px 0;
  font-size: 1.5rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
}

.description {
  color: #888888;
  margin: 0 0 20px 0;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 500px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.button-container {
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
}

.join-btn {
  display: inline-block;
  padding: 15px 40px;
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(45deg, #ff8c00, #ff6b00);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(255, 140, 0, 0.3);
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(255, 140, 0, 0.4);
    background: linear-gradient(45deg, #ff9e00, #ff7a00);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 1.1rem;
  }
}

.features-panel {
  width: 90%;
  max-width: 1200px;
  // margin-bottom: 20px;
}

.section-title {
  color: #333333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  &::before {
    content: "";
    border-radius: 10px;
    width: 40%;
    height: 100%;
    left: calc(50% - 20%);
    position: absolute;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
    z-index: -1;
    @media screen and (max-width: 768px) {
      width: 60%;
      left: calc(50% - 30%);
    }
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(8px);
  background-color: var(--primary-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }
}

.feature-title {
  color: #666666;
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.feature-desc {
  color: #888888;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
</style>