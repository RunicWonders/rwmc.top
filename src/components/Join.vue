<template>
	<div id="main" class="join-panel">
		<div class="content">
		  		<span class="title">加入我们</span>
			<p class="server-info">
				我们的服务器:
				<ul>
					<li>支持正版, 皮肤站登录 安全可靠</li>
					<li>支持Java版, 基岩版 版本互通</li>
					<li>无需审核, 无需白名单 进群就能玩</li>
				</ul>
			</p>
			<span class="call-to-action">你还在等什么, 赶快扫描下方二维码或者<a href="https://qm.qq.com/q/azJH50kCKA" target="_blank" rel="noopener">点击这里</a>    加入我们吧!</span>
			<div class="qrcode-container">
				<img class="qrcode" src="../assets/qrcode_1742889402186.webp" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.join-panel {
	padding: 30px 20px;
	max-width: 1200px;
	margin: 0 auto;
	background-color: transparent;
}

.title {
	font-size: 2.2rem;
	font-weight: 700;
	color: #333333;
	margin-bottom: 20px;
	text-align: center;
}

.content {
	background-color: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(10px);
	border-radius: 15px;
	padding: 30px;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	margin-top: 20px;
}

.server-info {
	font-size: 1.1rem;
	color: #666666;
	line-height: 1.6;
}

ul {
	margin-left: 20px;
	margin-bottom: 20px;
}

li {
	margin-bottom: 10px;
}

.call-to-action {
	font-size: 1.1rem;
	color: #ff8c00;
	margin-bottom: 20px;
	display: block;
}

a {
	color: #ff8c00;
	text-decoration: none;
	transition: color 0.3s ease;
	&:hover {
		color: #ffb142;
		text-decoration: underline;
	}
}

.qrcode-container {
	display: flex;
	justify-content: center;
	margin-top: 20px;
}

.qrcode {
	width: 200px;
	height: 200px;
	object-fit: cover;
	border-radius: 8px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	background-color: white;
	padding: 8px;
}

@media (max-width: 768px) {
	.title {
		font-size: 1.8rem;
	}

	.content {
		padding: 20px;
	}

	.server-info, .call-to-action {
		font-size: 1rem;
	}
}
</style>
