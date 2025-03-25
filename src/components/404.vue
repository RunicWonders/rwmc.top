<template>
	<div id="main">
		<span class="title">404 Not Found</span>
		<div class="content">
			<p>(￣▽￣)" 你请求的页面没有找到捏<br />可能被移动或者删除了</p>
			<p>你可以尝试以下操作：</p>
			<span>
				<router-link to="/" role="button">返回首页</router-link>
				<a href="javascript:history.go(-1);" role="button">返回上一页</a>
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
a[role="button"] {
	font-size: inherit;
	margin-left: 8px;
	border-radius: 6px;
	padding: 12px 16px;
	background-color: deepskyblue;
	&:hover {
		background-color: #11cdef;
	}
}
</style>