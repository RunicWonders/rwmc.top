<script setup>
import sponsors from '/sponsors.json';
</script>

<template>
	<div id="main" class="sponsor-container">
		<div class="content">
		<span class="title">赞助我们</span>
			<p>
				<a href="https://afdian.com/a/ning__mo" target="_blank" rel="noopener">爱发电</a>
			</p>
			<viewer class="payment-method" :images="['/assets/sponsor-wechatpay.webp']">
				<img v-lazy="'/assets/sponsor-wechatpay.webp'" title="推荐使用微信支付" alt="推荐使用微信支付" />
			</viewer>
			<p class="thanks">感谢各位对我们的赞助!</p>
			<div class="sponsors-list">
				<ul>
					<li v-for="sponsor in sponsors" :key="sponsor" class="sponsor-item">
						{{ sponsor.name }}: {{ sponsor.amount }}r
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sponsor-container {
	padding: 30px 20px;
	max-width: 1200px;
	margin: 0 auto;
	background-color: transparent;
	margin-top: 20px;
}


.payment-method {
	display: block;
	width: 100%;
	max-width: 300px;
	margin: 20px auto;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}

	img {
		width: 100%;
		height: auto;
		display: block;
	}
}

.thanks {
	text-align: center;
	color: #666666;
	font-size: 1.1rem;
	margin: 20px 0;
}

.sponsors-list {
	margin-top: 20px;

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.sponsor-item {
		padding: 10px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
		color: #666666;
		font-size: 1rem;
	}
}

@media (max-width: 768px) {
	.title {
		font-size: 1.8rem;
	}

	.audience-link, .thanks {
		font-size: 1rem;
	}

	.payment-method {
		max-width: 200px;
	}
}
</style>
