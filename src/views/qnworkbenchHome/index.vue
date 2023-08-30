<template>
	<div class="container">
		<div class="left">left</div>
		<div class="right">
			<div class="info-wapper">info-wapper</div>
			<div class="follow-wapper">follow-wapper</div>
			<div class="news-wrapper">news-wrapper</div>
			<div class="date-wrapper">date</div>
			<div class="ad-wrapper">ad</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="qnworkbenchHome">

</script>

<style scoped>
.container {
	position: relative;
}

.left {
	width: 100%;
	background-color: pink;
	padding-right: 407px;
}

.right {
	width: 357px;
	position: absolute;
	right: 0;
	top: 0;
}

.right>div {
	min-height: 100px;
	margin-bottom: 17px;
	background: peru;
	border-radius: 10px;
}
</style>
