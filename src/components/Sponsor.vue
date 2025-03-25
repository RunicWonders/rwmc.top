<script setup>
import sponsors from '/sponsors.json';
import('../libs/fancybox');
</script>

<template>
	<div id="main">
		<span class="title">赞助我们</span>
		<div class="content">
			<p><a href="https://afdian.com/a/ning__mo" target="_blank" rel="noopener">爱发电</a></p>
			<a href="/assets/sponsor-wechatpay.webp" data-fancybox data-caption="推荐使用微信支付">
				<img v-lazy="'/assets/sponsor-wechatpay.webp'" title="推荐使用微信支付" alt="推荐使用微信支付" />
			</a>
			<p>感谢各位对我们的赞助!</p>
			<ul>
				<li v-for="sponsor in sponsors" :key="sponsor">
					{{ sponsor.name }}: {{ sponsor.amount }}r
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
#main {
	background-color: var(--main-bg);
}
img {
	width: 100%;
	max-width: 300px;
}
</style>